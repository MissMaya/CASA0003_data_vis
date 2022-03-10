// config file contains map info, story content and info
// that will power transitions in storymap
let topTitleDiv = 
    '<h4>CASA0003 Digital Visualisation | Individual Visualisation</h4>';

let titleDiv = 
    '<h1>Bang! The changing face of the City of London after the Big Bang of 1986</h1>';

let bylineDiv = 
    '<p>21185793</p>';

let descriptionDiv =
    '<p>This is the section in which we talk about what happened in the City of London after the big bang of 1986</p>' +
    '<img src="images/Intro_Image.jpg"></img>'
    '<p class="imageCredit"><a href="http://content.time.com/time/covers/0,16641,19790514,00.html">TIME Magazine</a></p>'
    '<p>What was the big bang? Tell the story here. Mention local to global</p>' +
    '<p>Some schemes revised. Some time to come into fruition</p>' +
    '<p>Yet more details here</p>' +
    '<p style= "text-align:center">Scroll to continue</p>';

let footerDiv =
    '<p>reference the tutorials used here</p>' +
    '</p>more references</p>';

let divChapter1 =
    '<h3>Before the Bang</h3>' +
    '<img src="images/Chapter_1_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.alamy.com/stock-photo-district1888-p065-bank-of-england-map-73513018.html?pv=1&stamp=2&imageid=D4B87983-BDCF-4DED-A2FA-64ECB8A86F16&p=221233&n=0&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3dbar%26st%3d0%26pn%3d1%26ps%3d100%26sortby%3d2%26resultview%3dsortbyPopular%26npgs%3d0%26qt%3dengland%2520map%26qt_raw%3dengland%2520map%26lic%3d3%26mr%3d0%26pr%3d0%26ot%3d0%26creative%3d%26ag%3d0%26hc%3d0%26pc%3d%26blackwhite%3d1%26cutout%3d%26tbar%3d1%26et%3d0x000000000000000000000%26vp%3d0%26loc%3d0%26imgt%3d0%26dtfr%3d%26dtto%3d%26size%3d0xFF%26archive%3d1%26groupid%3d%26pseudoid%3d%26a%3d%26cdid%3d%26cdsrt%3d%26name%3d%26qn%3d%26apalib%3d%26apalic%3d%26lightbox%3d%26gname%3d%26gtype%3d%26xstx%3d0%26simid%3d%26saveQry%3d%26editorial%3d1%26nu%3d%26t%3d%26edoptin%3d%26customgeoip%3d%26cap%3d1%26cbstore%3d1%26vd%3d0%26lb%3d%26fi%3d2%26edrf%3d%26ispremium%3d1%26flip%3d0%26pl%3d">Alamy</a></p>' +
    '<p>Before the bang, outline the restrictions 10 mins of BoE. Outline the lack of suitable space</p>';

let divChapter2 =
    '<h3>Broadgate</h3>' +
    '<img src="images/Chapter_2_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.frieze.com/article/broadgate-and-city-londons-architecture-inequality">Frieze</a></p>' +
    '<p>This is where we talk about Broadgate</p>'+
    '<p>Long considered architectural embodiment of Big Bang </p>' +
    '<p>This is where we talk about the Broadgate Circle development</p>' +
    '<p>This is where we talk about the Broadgate Circle development</p>';

let divChapter3 =
    '<h3>Spitalfields</h3>' +
    '<img src="images/Chapter_3_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.ballymoregroup.com/project/detail/old-spitalfields-market">Ballymore</a></p>' +
    '<p>This is where we talk about the Spitalfields development</p>';

let divChapter4 = 
    '<h3>London Wall</h3>' +
    '<img src="images/Chapter_4_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://janesketching.com/2021/04/13/citypoint-from-london-wall-place/#jp-carousel-8017">Jane Sketching</a></p>' +
    '<p>This is where we talk about London Wall</p>';

let divChapter5 =
    '<h3>Paternoster</h3>' +
    '<img src="images/Chapter_5_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://hidden-london.com/gazetteer/st-pauls/">Hidden London</a></p>' +
    '<p>This is where we talk about Paternoster Square</p>';

let divChapter6 =
    '<h3>London Bridge City</h3>' +
    '<img src="images/Chapter_6_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://londonbridgecity.co.uk/estate/map">London Bridge City</a></p>' +
    '<p>This is where we talk about the Hays Galleria etc developments</p>';

let divChapter7 =
    '<h3>Wapping and Limehouse</h3>' +
    '<img src="images/Chapter_7_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.theguardian.com/money/2020/nov/03/london-dockland-housing-development-presents-an-opportunity-for-yuppies-archive-1984">The Guardian</a></p>' +
    '<p>This is where we talk about Wapping area</p>';

let divChapter8 =
    '<h3>Canary Wharf</h3>' +
    '<img src="images/Chapter_8_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.ft.com/content/aa485ae2-c48d-47ee-8c9c-a21b697ef5eb">Financial Times</a></p>' +
    '<p>This is where we talk about Canary Wharf. Most iconic. Feels like Venice, Works like New York</p>';

var config = {
    style: "mapbox://styles/missmaya78/cl05ismqu001a14oayv0j1y7p",
    accessToken: "pk.eyJ1IjoibWlzc21heWE3OCIsImEiOiJja3liaHM1NGIwOGZ1Mm9xeDAzYmppMnRxIn0.80nsYB0uhmuRy5wUvXCy9A",
    showMarkers: false,
    markerColor: "#3FB1CE",
    theme: "light",
    use3dTerrain: false,
    topTitle: topTitleDiv,
    title: titleDiv,
    subtitle: "",
    byline: bylineDiv,
    description: descriptionDiv,
    footer: footerDiv,
    chapters: [
        {
            id: "bankofEngland",
            alignment: "left",
            hidden: false,
            chapterDiv: divChapter1,
            location: {
                center: [-0.088304, 51.514028],
                zoom: 15,
                zoomSmall: 9,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData"
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData",
                },
            ],
        },
        {
            id: "broadgate",
            alignment: "right",
            hidden: false,
            chapterDiv: divChapter2,
            location: {
                center: [-0.083462, 51.518931],
                zoom: 15,
                zoomSmall: 9,
                pitch: 0,
                bearing: 0,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData"
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData",
                },
            ],
        },
        {
            id: "spitalfields",
            alignment: "left",
            hidden: false,
            chapterDiv: divChapter3,
            location: {
                center: [-0.074949, 51.519587],
                zoom: 16,
                zoomSmall: 14,
                pitch: 40,
                bearing: -7,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData"
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData"
                },
            ],
        },
        {
            id: "londonwall",
            alignment: "right",
            hidden: false,
            chapterDiv: divChapter4,
            location: {
                center: [-0.089982, 51.517670],
                zoom: 15,
                zoomSmall: 14,
                pitch: 40,
                bearing: 8,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData",
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData",
                },
            ],
        },
        {
            id: "paternoster",
            alignment: "right",
            hidden: false,
            chapterDiv: divChapter5,
            location: {
                center: [-0.099204, 51.514911],
                zoom: 17,
                zoomSmall: 9,
                pitch: 0,
                bearing: 8,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData",
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData",
                },
            ],
        },
        {
            id: "londonbridge",
            alignment: "left",
            hidden: false,
            chapterDiv: divChapter6,
            location: {
                center: [-0.083412, 51.505885],
                zoom: 15,
                zoomSmall: 13,
                pitch: 20,
                bearing: -20,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData",
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData",
                },
            ],
        },
        {
            id: "wapping",
            alignment: "right",
            hidden: false,
            chapterDiv: divChapter7,
            location: {
                center: [-0.056278, 51.504449],
                zoom: 15,
                zoomSmall: 14,
                pitch: 0,
                bearing: 18,
            },
            mapAnimation: "flyTo",
            rotateAnimation: false,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData",
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData",
                },
            ],
        },
        {
            id: "canarywharf",
            alignment: "left",
            hidden: false,
            chapterDiv: divChapter8,
            location: {
                center: [-0.019520, 51.505266],
                zoom: 15,
                zoomSmall: 14,
                pitch: 40,
                bearing: 8,
            },
            mapAnimation: "flyTo",
            rotateAnimation: true,
            callback: "",
            onChapterEnter: [
                {
                    layer: "buildingsData",
                },
            ],
            onChapterExit: [
                {
                    layer: "buildingsData",
                },
            ],
        },
    ],
};
