/* Define a small screen*/
/* Definition affects zoom level selected */
/* Check the media queries CSS file - 750px??*/

var smallMedia = window.matchMedia("(max-width: 600px").matches;

/* Two variables:
1. Different types of layers available to Mapbox and respective opacity attributes
2. Possible alignments that can be applied to the chapters
*/

var layerTypes = {
  fill: ["fill-opacity"],
  line: ["line-opacity"],
  circle: ["circle-opacity", "circle-stroke-opacity"],
  symbol: ["icon-opacity", "text-opacity"],
  raster: ["raster-opacity"],
  "fill-extrusion": ["fill-extrusion-opacity"],
  heatmap: ["heatmap-opacity"],
};

var alignments = {
  left: "lefty",
  center: "centered",
  right: "righty",
  full: "fully",
};

/* Two functions to:
1. Select an individual layer
2. Adjust the opacity of the selected layer */

function getLayerPaintType(layer) {
  var layerType = map.getLayer(layer).type;
  return layerTypes[layerType];
}

function setLayerOpacity(layer) {
  var paintProps = getLayerPaintType(layer.layer);
  paintProps.forEach(function (prop) {
    var options = {};
    if (layer.duration) {
      var transitionProp = prop + "-transition";
      options = { duration: layer.duration };
      map.setPaintProperty(layer.layer, transitionProp, options);
    }
    map.setPaintProperty(layer.layer, prop, layer.opacity, options);    
  }); 
}

/* variables and functions to create the story and vignette elements and populate
with content from config.js. CSS classes are assigned to elements based on the config.js 
file*/

// Assign main story, features and header elements to variables
var story = document.getElementById("story");
var features = document.createElement("div");
var header = document.createElement("div");
features.setAttribute("id", "features");

// If the content exists, assign it to the header element
if (config.topTitle) {
  var topTitle = document.createElement("div");
  topTitle.innerHTML = config.topTitle;
  header.appendChild(topTitle);
}

if (config.title) {
  var titleText = document.createElement("div");
  titleText.innerHTML = config.title;
  header.appendChild(titleText);
}

if (config.subtitle) {
  var subtitleText = document.createElement("div");
  subtitleText.innerHTML = config.subtitle;
  header.appendChild(subtitleText);
}

if (config.byline) {
  var bylineText = document.createElement("div");
  bylineText.innerHTML = config.byline;
  header.appendChild(bylineText);
}

if (config.description) {
  var descriptionText = document.createElement("div");
  descriptionText.innerHTML = config.description;
  header.appendChild(descriptionText);
}

// If the header still has content in it, append to the story
if (header.innerText.length > 0) {
  header.classList.add(config.theme);
  header.setAttribute("id", "header");
  story.appendChild(header);
}

/* Loop through the chapters in config.js, create the vignette elements and 
assign them to the corresponding content */

config.chapters.forEach((record, idx) => {
  var container = document.createElement("div");
  var chapter = document.createElement("div");
  // add a class to the vignette
  chapter.classList.add("br3");
  // add all the content to the vignette's div
  chapter.innerHTML = record.chapterDiv;
  // set the id for the vignette and add the step css attribute
  container.setAttribute("id", record.id);
  container.classList.add("step");
  // if this is the first chapter, set it to active
  if (idx === 0) {
    container.classList.add("active");
  }
  // add the overall theme to the chapter element
  chapter.classList.add(config.theme);
  /* append the chapter to the container element and the container element 
  to the features element */
  container.appendChild(chapter);
  container.classList.add(alignments[record.alignment] || "centred");
  if (record.hidden) {
    container.classList.add("hidden");
  }
  features.appendChild(container);
});

// append the features element and vignettes to the story element
story.appendChild(features);

// create footer element
var footer = document.createElement("div");

//assign content to footer element based on config.js
if (config.footer) {
  var footerText = document.createElement("p");
  footerText.innerHTML = config.footer;
  footer.appendChild(footerText);
}

// if the footer element contains content, add it to the story
if (footer.innerText.length > 0) {
  footer.classList.add(config.theme);
  footer.setAttribute("id", "footer");
  story.appendChild(footer);
}

// add Mapbox access token 
mapboxgl.accessToken = config.accessToken;

// I think this may add a custom header but need to check
const transformRequest = (url) => {
  const hasQuery = url.indexOf("?") !== -1;
  const suffix = hasQuery
    ? "&pluginName=scrollytellingV2"
    : "?pluginName=scrollytellingV2";
  return {
    url: url + suffix,
  };
};

// Create a variable to hold the starting value zoom
// Use ZoomSmall if the screen size is small
var startingZoom;
if (smallMedia) {
  startingZoom = config.chapters[0].location.zoomSmall;
} else {
  startingZoom = config.chapters[0].location.zoom;
}

/* Create the map element using attributes from the main section of the 
config.js file */
var map = new mapboxgl.Map({
  container: "map",
  style: config.style,
  center: config.chapters[0].location.center,
  zoom: startingZoom,
  bearing: config.chapters[0].location.bearing,
  pitch: config.chapters[0].location.pitch,
  interactive: false,
  transformRequest: transformRequest,
});

if (config.showMarkers) {
  var marker = new mapboxgl.Marker({ color: config.markerColor });
  marker.setLngLat(config.chapters[0].location.center).addTo(map);
}

// Instantiate the scrollama function
var scroller = scrollama();

/* Adds the two extra layers for the Points Unknown tutorial so I may need
to modify based on the data that I add in */
/* Add in functions to link scrolling to chapters and move the map to the various
locations, adjusting the zoom level, rotation, pitch and bearing */ 

map.on("load", function () {

  // option to add 3D terrain if necessary
  if (config.use3dTerrain) {
    map.addSource("mapbox-dem", {
      type: "raster-dem",
      url: "mapbox://mapbox.mapbox-terrain-dem-v1",
      tileSize: 512,
      maxZoom: 14,
    });

    // Add the DEM source as a terrain layer with an exaggerated height
    map.setTerrain({ source: "mapbox-dem", exaggeration: 1.5 });

    //Add a sky layer that shows when map is highly pitched
    map.addLayer({
      id: "sky",
      type: "sky",
      paint: {
        "sky-type": "atmosphere",
        "sky-atmosphere-sun": [0.0, 0.0],
        "sky-atmosphere-sun-intensity": 15,
      },
    });
  } 
    //Add the buildings data as a layer 
    map.addLayer(
      {
        id: "buildingsData",
        type: "circle",
        source: {
          type: "geojson",
          data: "data/buildings.geojson",
        },
        paint: {
          "circle-color": [
          "step",
          ["get", "year"],
          "#ffffff",
          1986,
          "#52ff8d",
          1990,
          "#52c4ff",
          2000,
          "#ff52c4",
          2010,
          "#ff8d52",
          2020,
          "#ffe452",
          ],
          "circle-stroke-color": "#4d4d4d", 
          "circle-stroke-width": 0.5,
          "circle-radius": 10
        },
      },
      "road-label-simple",
    ); 
    

map.on("click", "buildingsData", function (e) {
  var name = e.features[0].properties.name;
  var address = e.features[0].properties.address;
  var use = e.features[0].properties.use;
  var year = e.features[0].properties.year;
  var height = e.features[0].properties.height_metres;
  var status = e.features[0].properties.status;
  var architect = e.features[0].properties.architect;

  new mapboxgl.Popup()
    .setLngLat(e.lngLat)
    .setHTML(
      "<h4>" +
        name +
        "</h4>" +
        "<p><b>Address:</b> " +
        address +
        "<br>" +
        "<b>Use:</b> " +
        use +
        "<br>" +
        "<b>Year:</b> " +
        year +
        "<br>" +
        "<b>Height (metres):</b> " +
        height +
        "<br>" +
        "<b>Status:</b> " +
        status +
        "<br>" +
        "<b>Architect:</b> " +
        architect +
        "</p>"
    )
    .addTo(map);
});

map.on("mouseenter", "buildingsData", function () {
  map.getCanvas().style.cursor = "pointer";
});

map.on("mouseleave", "buildingsData", function () {
  map.getCanvas().style.cursor = "";
});
    
    // Setup the scroller instance and pass callback functions
    scroller
      .setup({
        step: ".step",
        offset: 0.75,
        progress: true,
      })
      .onStepEnter((response) => {
        var chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.add("active");
        let thisZoom;
        if (smallMedia) {
          thisZoom = chapter.location.zoomSmall;
        } else {
          thisZoom = chapter.location.zoom;
        }
        thisLocation = {
          bearing: chapter.location.bearing,
          center: chapter.location.center,
          pitch: chapter.location.pitch,
          zoom: thisZoom,
        };
        map[chapter.mapAnimation || "flyTo"](thisLocation);
        if (config.showMarkers) {
          marker.setLngLat(chapter.location.center);
        }
        if (chapter.onChapterEnter.length > 0) {
          chapter.onChapterEnter.forEach(setLayerOpacity);
        }
        if (chapter.callback) {
          window[chapter.callback]();
        }
        if (chapter.rotateAnimation) {
          map.once("moveend", function () {
            const rotateNumber = map.getBearing();
            map.rotateTo(rotateNumber + 90, {
              duration: 24000,
              easing: function (t) {
                return t;
              },
            });
          });
        }
      })
      .onStepExit((response) => {
        var chapter = config.chapters.find(
          (chap) => chap.id === response.element.id
        );
        response.element.classList.remove("active");
        if (chapter.onChapterExit.length > 0) {
          chapter.onChapterExit.forEach(setLayerOpacity);
        }
      });
});

// Watch for screen resizing in order to adjust scrolling setup
window.addEventListener("resize", scroller.resize);


