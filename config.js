// config file contains map info, story content and info
// that will power transitions in storymap
let topTitleDiv = 
    '<h4>CASA0003 Digital Visualisation | Individual Visualisation</h4>';

let titleDiv = 
    '<h1>Bang! Building London as a global financial centre after the Big Bang of 1986</h1>';

let bylineDiv = 
    '<p>21185793</p>';

let descriptionDiv =
    '<p><b>Monday, 27 October 1986</b>. The day on which Margaret Thatcher&#39s UK government unleashed financial deregulation on the City of London, an event that came to be known as &#39The Big Bang&#39.</p>' +
    '<p>The deregulatory reforms abolished the minimum fixed commissions on trades, allowing greater competition. Mergers and acquisitions were permitted through the removal of the separation between traders of stocks and shares and investment advisors. Foreign firms were also given the ability to own UK brokers, opening up London&#39s markets to international financial firms [1].</p>' +
    '<p>The Big Bang has proven to be as divisive as Thatcher herself. Over 25 years later, the merits of deregulation are still hotly contested: its proponents herald it as creating Britain&#39s most successful industry [2], its detractors say that, amongst other things, it laid the groundwork for the 2008 financial crisis [3].</p>' +
    '<div style="text-align: center;">' +
    '<img src="images/Intro_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="http://content.time.com/time/covers/0,16641,19790514,00.html">Source: TIME Magazine</a></p>' +
    '</div>' +
    '<p>One thing, however, is for sure: the influx of foreign investment and international firms as a result of this single event transformed the City of London from “...a rather staid backwater” [4] into an international financial centre.</p>' +
    '<p>To accommodate an enlarged financial services industry, the built environment of swathes of the Square Mile and beyond had to be radically altered in the leadup to and immediate aftermath of the Big Bang, a process that has continued ever since. </p>' +
    '<p>In their 1986 paper &#39Great Fire to Big Bang: Private and Public Designs on the City of London&#39 [5] , Alexi Marmot and John Worthington identified 7 private redevelopment sites for the large scale urban renewal necessitated by the Big Bang: Broadgate; Spitalfields; London Wall; Paternoster; London Bridge; Royal Mint and Canary Wharf.</p>' +
    '<p>Here, we visualise construction at these 7 sites since 1986 as well as the changes to the physical environment around the Bank of England, once the heart of the City of London. We look at what has been built, where, when, for what purpose and by whom.</p>' +
    '<p style= "text-align:center">Scroll for the vis!</p>';

let footerDiv =
    '<p><b>References</b></p>' +
    '<p>[1] J. Robertson, “How the big bang changed the City of London for ever,” BBC News, 26-Oct-2016. [Online]. Available: https://www.bbc.co.uk/news/business-37751599.[Accessed: 07-Mar-2022].</p>' +
    '<p>[2] N. Lawson. (2006, October). “Foreword” in <em>Big Bang 20 Years On, New Challenges Facing the Financial Sector</em> [Online]. Available: https://cps.org.uk/wp-content/uploads/2021/07/111028101637-20061019EconomyBigBang20YearsOn.pdf. [Accessed: 07-Mar-2022].</p>'+
    '<p>[3] H. Stewart and S. Goodley, “Big Bang&#39s shockwaves left us with today&#39s big bust,” The Guardian, 08-Oct-2011. [Online]. Available: https://www.theguardian.com/business/2011/oct/09/big-bang-1986-city-deregulation-boom-bust. [Accessed: 07-Mar-2022].</p>' +
    '<p>[4] “Playing petty politics with Britain&#39s economic future,” The Telegraph, 16-Nov-2009. [Online]. Available: https://www.telegraph.co.uk/comment/telegraph-view/6584395/Playing-petty-politics-with-Britains-economic-future.html. [Accessed: 07-Mar-2022].</p>' +
    '<p>[5] A. Marmot and J. Worthington (1986). “Great Fire to Big Bang: Private and Public Designs on the City of London”. Built Environment (1978-), 12(4), 216&#8208;233. http://www.jstor.org/stable/23286646</p>' +
    '<p>[6] K. Allinson and V. Thornton, “London: significant contemporary dialogues,” in Guide to London’s Contemporary Architecture, Oxford: Butterworth, 1993, p. xi.</p>' +
    '<p>[7] T. Wilkinson, “The architecture of the big bang,” Architectural Review, 22-Jul-2020. [Online]. Available: https://www.architectural-review.com/essays/the-architecture-of-the-big-bang. [Accessed: 07-Mar-2022].</p>' +
    '<p>[8] “The Broadgate Estate,” TFT, 30-Mar-2020. [Online]. Available: https://www.tftconsultants.com/projects-list/the-broadgate-estate/. [Accessed: 09-Mar-2022].</p>' +
    '<p>[9] J. Kollewe, “Broadgate Centre not worth listing, says culture secretary,” The Guardian, 15-Jun-2011. [Online]. Available: https://www.theguardian.com/business/2011/jun/15/broadgate-listing-rejected-by-jeremy-hunt. [Accessed: 09-Mar-2022].</p>' +
    '<p>[10] “Broadgate - where innovation and finance play,” British Land. [Online]. Available: https://www.britishland.com/our-places/broadgate#:~:text=Broadgate%20is%20a%2032%2Dacre,the%20area%20over%2010%2Dyears. [Accessed: 09-Mar-2022].</p>' +
    '<p>[11] J. Cox, “The East End Surveyed,” in Old East Enders: A history of the Tower Hamlets, Stroud: The History Press, 2013.</p>' +
    '<p>[12] The Gentle Author, “Why historic Norton Folgate is a crucial battleground for the future of London,” The Guardian, 21-Jul-2015. [Online]. Available: https://www.theguardian.com/cities/2015/jul/21/british-land-norton-folgate-historic-spitalfields. [Accessed: 09-Mar-2022].</p>' +
    '<p>[13] J. Shenker, “Revealed: The insidious creep of pseudo-public space in London,” The Guardian, 24-Jul-2017. [Online]. Available: https://www.theguardian.com/cities/2017/jul/24/revealed-pseudo-public-space-pops-london-investigation-map. [Accessed: 09-Mar-2022].</p>' +
    '<p>[14] Foster + Partners , “Bishops square: Foster + partners,” Architecture Projects | Foster + Partners. [Online]. Available: https://www.fosterandpartners.com/projects/bishops-square/. [Accessed: 09-Mar-2022]. </p>' +
    '<p>[15] Foster + Partners, “Old spitalfields market,” Foster + Partners. [Online]. Available: https://www.fosterandpartners.com/projects/old-spitalfields-market/. [Accessed: 09-Mar-2022].</p>' +
    '<p>[16] Make Architects, “London Wall Place,” Make Architects, 03-Jan-2020. [Online]. Available: https://www.makearchitects.com/projects/london-wall-place/. [Accessed: 09-Mar-2022].</p>' +
    '<p>[17] D. Watkin, H. M. Donald, and C. Leigh, “It&#39s back to the future in the heart of London,” City Journal, 26-Jan-2016. [Online]. Available: https://www.city-journal.org/html/it%E2%80%99s-back-future-heart-london-11739.html. [Accessed: 10-Mar-2022].</p>' +
    '<p>[18] “Squaring up,” The Architects&#39 Journal, 10-Jul-2020. [Online]. Available: https://www.architectsjournal.co.uk/archive/squaring-up. [Accessed: 10-Mar-2022].</p>' +
    '<p>[19] “Eat, drink and shop on the Thames,” London Bridge City. [Online]. Available: https://londonbridgecity.co.uk/estate-overview. [Accessed: 10-Mar-2022].</p>' +
    '<p>[20] John S Bonnington Partnership, “John S Bonnington Partnership - Master planning - London Bridge City,” JSBP. [Online]. Available: http://www.jsbp.com/projects/plan/plan_LondonBridgeCity.htm. [Accessed: 10-Mar-2022].</p>' +
    '<p>[21] Foster + Partners , “More London: Foster + Partners,” Architecture Projects | Foster + Partners. [Online]. Available: https://www.fosterandpartners.com/projects/more-london/. [Accessed: 10-Mar-2022].</p>' +
    '<p>[22] T. Brindley, Y. Rydin and G. Stoker, “Wapping and Limehouse,” in Remaking planning: The politics of urban change, Routledge, 2016, p.84-85.</p>' +
    '<p>[23] J. Kollewe, “Canary Wharf Timeline: From the Thatcher years to Qatari control,” The Guardian, 28-Jan-2015. [Online]. Available: https://www.theguardian.com/business/2015/jan/28/canary-wharf-timeline-london-building-docklands-thatcher. [Accessed: 10-Mar-2022].</p>' +

    '<br>' +
    '<p><b>Built using tutorials from:</b></p>' +
    '<p class="imageCredit"><a href="https://docs.mapbox.com/mapbox-gl-js/example/scroll-fly-to/">Mapbox</a></p>' +
    '<p class="imageCredit"><a href="https://pointsunknown.nyc/web%20mapping/mapbox/2021/07/20/11A_MapboxStorytelling.html">Points Unknown</a></p>';

let divChapter1 =
    '<h3>Bank</h3>' +
    '<img src="images/Chapter_1_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.alamy.com/stock-photo-district1888-p065-bank-of-england-map-73513018.html?pv=1&stamp=2&imageid=D4B87983-BDCF-4DED-A2FA-64ECB8A86F16&p=221233&n=0&orientation=0&pn=1&searchtype=0&IsFromSearch=1&srch=foo%3dbar%26st%3d0%26pn%3d1%26ps%3d100%26sortby%3d2%26resultview%3dsortbyPopular%26npgs%3d0%26qt%3dengland%2520map%26qt_raw%3dengland%2520map%26lic%3d3%26mr%3d0%26pr%3d0%26ot%3d0%26creative%3d%26ag%3d0%26hc%3d0%26pc%3d%26blackwhite%3d1%26cutout%3d%26tbar%3d1%26et%3d0x000000000000000000000%26vp%3d0%26loc%3d0%26imgt%3d0%26dtfr%3d%26dtto%3d%26size%3d0xFF%26archive%3d1%26groupid%3d%26pseudoid%3d%26a%3d%26cdid%3d%26cdsrt%3d%26name%3d%26qn%3d%26apalib%3d%26apalic%3d%26lightbox%3d%26gname%3d%26gtype%3d%26xstx%3d0%26simid%3d%26saveQry%3d%26editorial%3d1%26nu%3d%26t%3d%26edoptin%3d%26customgeoip%3d%26cap%3d1%26cbstore%3d1%26vd%3d0%26lb%3d%26fi%3d2%26edrf%3d%26ispremium%3d1%26flip%3d0%26pl%3d">Source: Alamy</a></p>' +
    '<p>Marmot and Worthington [5] note that until the Big Bang, the architecture of the City of London had changed little since the post-war rebuilding of the 27 million square feet of the City destroyed by the Blitz.</p>' +
    '<p>Prior to the Big Bang, the area around the Bank of England was central to London&#39s banking operations. The reason for this was an apparent insistence by the Bank of England that all banks be within 10 minutes&#39 walk of the Governor&#39s office [1].</p>' +
    '<p>It is estimated that between the mid&#8208;1980s and the early 1990s, almost 50% of the building stock in the Square Mile was replaced [6]. As we see here, the area immediately surrounding the Bank of England was relatively untouched by this early building boom, save for some 1990s activity to the south, closer to The Monument. Most post&#8208;1986 construction in the area appears to date from the decades beginning in 2000 (pink) and 2010 (orange).</p>';

let divChapter2 =
    '<h3>Broadgate</h3>' +
    '<img src="images/Chapter_2_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.frieze.com/article/broadgate-and-city-londons-architecture-inequality">Source: Frieze</a></p>' +
    '<p>A site formerly occupied by Broad Street Station, goods yards and buildings associated with Liverpool Street Station [5], the Broadgate Estate was the first of the City of London sites to be developed in the wake of the Big Bang in the fight against the growing dominance of Canary Wharf [6].</p>'+
    '<p>Sometimes considered the &#39architectural embodiment of the Big Bang&#39 [7], the 32 acre site was originally a 4-phase development whose design was carved up between British firm Arup Associates and the Chicago firm Skidmore, Owings and Merrill.</p>' +
    '<p>Estimated to comprise 6% of the total City of London office space [8], a 2011 decision by the culture secretary not to list the estate [9] allowed owners British Land to forge ahead with a £1.5 billion, 10-year redevelopment of the site [10].</p>';

let divChapter3 =
    '<h3>Spitalfields</h3>' +
    '<img src="images/Chapter_3_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.ballymoregroup.com/project/detail/old-spitalfields-market">Source: Ballymore</a></p>' +
    '<p>“Adjoyning Durty lands of mean habitation“ was how Sir Christopher Wren described Spitalfields when he tramped around the area on foot in 1671 [11].</p>' + 
    '<p>Evidently, the area subsequently came to be regarded as less dirty and mean as since the 1970s, it has continually been the subject of battles between the local community and property developers intent on achieving the continued expansion of the City of London [12]</p>' +
    '<p>Spitalfields has been the subject of no fewer than 4 redevelopment master plans since 1987, each the subject of protracted planning disputes.</p>' +
    '<p>In 2001, architects Foster + Partners won approval for 2 developments on the Spitalfields site: Bishops Square, a commercial property development and privately owned public space [13] including a 102,000 m<sup>2</sup> office complex housing the London headquarters of law firm Allen & Overy [14] completed in 2005 and the redevelopment of Old Spitalfields market, completed in the early 2000s and revamped in 2016 [15].</p>';

let divChapter4 = 
    '<h3>London Wall</h3>' +
    '<img src="images/Chapter_4_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://janesketching.com/2021/04/13/citypoint-from-london-wall-place/#jp-carousel-8017">Source: Jane Sketching</a></p>' +
    '<p>The pre-Big Bang London Wall complex consisted of 6 high-rise office blocks, designed and built in the 1960s, situated on either side of a dual carriageway and connected by a series of walkways and bridges [5].</p>' + 
    '<p>As seen from the map, London Wall was the site of a flurry of office and mixed commercial developments in the 90s designed by a range of architects (blue). Commercial development continued steadily into the 2000s (pink) and 2010s (orange).</p>' +
    '<p>One of the more recent schemes in the area that has received largely positive attention is the mixed-use, commercial London Wall Place development by Make Architects. As described by Make, the development builds on the history of London Wall by incorporating miniature parks among the restored remains of the Roman city walls and the medieval St Alphage church tower. The 1960s walkways have been redesigned and 320m of gently curving bridges running through and beyond the site [16].</p>';

let divChapter5 =
    '<h3>Paternoster</h3>' +
    '<img src="images/Chapter_5_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://hidden-london.com/gazetteer/st-pauls/">Source: Hidden London</a></p>' +
    '<p>Paternoster, a 6 acre site to the north of St Paul&#39s Cathedral was largely destroyed during the Blitz [5].</p>' +
    '<p>The post-war, 1950s reimagining of the site by William Holford involved high-rise office blocks, between 6 and 18 stories high, laid out in grid fashion. This design ignored the traditional street plan of the area and the historic relationship between the neighbouring cathedral and the city [17].</p>' +
    '<p>The Big Bang rendered Holford&#39s development obsolete as the buildings were unable to accommodate the cabling required for the computer networks used by the firms moving into the City [17]. Thus began a 10-year process of designs and counter-designs for the site, drawn out by the need to coordinate the site&#39s multiple owners and a series of objections to the proposed designs [18]. </p>' +
    '<p>The eventual scheme by Sir William Whitfield, completed in 2003, brought together a number of architectural practices, including MacCormac Jamieson Prichard, Eric Parry Architects, Sidell Gibson and Allies & Morrison [18], in the design of a mixed-use commercial scheme employing traditional materials such as stone, brick, slate and copper [17].</p>';

let divChapter6 =
    '<h3>London Bridge City</h3>' +
    '<img src="images/Chapter_6_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://londonbridgecity.co.uk/estate/map">Source: London Bridge City</a></p>' +
    '<p>London Bridge City occupies 21.5 acres of space spanning the riverfront on the south side of the River Thames between London Bridge and Tower Bridge [19]. The site previously housed warehouses but had been cleared by the 1970s after the closure of London&#39s docks made such warehouses redundant [5].</p>'+
    '<p>London Bridge City was completed in 2 phases: phase 1, completed in the 1980s on land owned by St Martin&#39s Property, the UK-based investment vehicle of the state of Kuwait, was designed by the architectural practices of John S Bonnington Partnership, Michael Twigg Brown and others. The phase 1 development saw the completion of 1.2 million square feet of office space, including No. 1 London Bridge and the Cotton&#39s Centre, as well as the Hays Galleria development: the repurposing of a former Victorian warehouse as offices and shops [6], [20].</p>' + 
    '<p>Phase 2, announced in 1998 with its first completion in 2003, saw the development of the Foster + Partners-designed More London complex: a 13 acre, mixed-use development adding a further 1 million square feet of constructed space across 11 buildings, including London&#39s City Hall and the large office complexes of 1 More London Place (Ernst & Young&#39s UK Headquarters) and 7 More London Riverside (PWC&#39s UK Headquarters) [19],[21].</p>' +
    '<p>Alongside Spitalfields, Paternoster Square and Canary Wharf, the More London complex represents another example of privately owned public space [13], seemingly a common feature in London&#39s post-Big Bang architectural developments.</p>';

let divChapter7 =
    '<h3>Wapping and Limehouse</h3>' +
    '<img src="images/Chapter_7_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.theguardian.com/money/2020/nov/03/london-dockland-housing-development-presents-an-opportunity-for-yuppies-archive-1984">Source: The Guardian</a></p>' +
    '<p>Although areas surrounding the Royal Mint were identified by Marmot and Worthington as sites for post-Big Bang development [5], details on developments in Wapping and Limehouse (the neighbourhoods immediately surrounding the Royal Mint) are scant, as evidenced by the lack of detail on the map.</p>' +
    '<p>Of course, a lack of easily-obtainable, precise details on schemes does not mean that significant construction linked to the Big Bang did not take place: in their book &#39Remaking Planning, the Politics of Urban Change&#39, Brindley, Rydin and Stoker list a number of wharfs in the Wapping area and identify residential developments in these areas as being closely linked to the Big Bang, driven by the longer working hours and higher salaries that both necessitated and allowed for City workers to seek accommodation near their offices [22].</p>';

let divChapter8 =
    '<h3>Canary Wharf</h3>' +
    '<img src="images/Chapter_8_Image.jpg"></img>' +
    '<p class="imageCredit"><a href="https://www.ft.com/content/aa485ae2-c48d-47ee-8c9c-a21b697ef5eb">Source: Financial Times</a></p>' +
    '<p>On the day of the Big Bang, London&#39s Financial Times carried an advertisement for Canary Wharf, a proposed commercial development spanning a number of disused dockyard sites on the Isle of Dogs peninsula, 3 miles to the east of the City of London. Canary Wharf, it promised, “Feels like Venice and works like New York” [1].</p>' +
    '<p>The London Docklands Development Corporation (LDDC), the quango established to oversee the regeneration of the Docklands, designated the Isle of Dogs a tax-benefit enterprise zone, granting Canary Wharf&#39s original developers, Canadian firm Olympia & York, tax benefits and minimal planning restrictions as well as the opportunity to purchase land from the LDDC at a reported one quarter of market value [5], [6], [23].</p>'+
    '<p>Construction on the Canary Wharf development began in 1988 [23]. As we observe from the map, the 1990s schemes around Westferry Circus, Cabot Square and North and South Colonnade were dominated by American architects such as Skidmore, Owings & Merrill, Kohn Pederson Fox Associates, Pei Cobb Freed and Cesar Pelli & Associates. The more recent phases of the development, such as the mixed use and residential developments around Union and Harbord squares have moved away from this American design base.</p>';

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
                center: [-0.094666, 51.513147], 
                zoom: 15.10,
                zoomSmall: 9,
                pitch: 40,
                bearing: -5,
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
                center: [-0.076246, 51.519333],
                zoom: 15.5,
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
                center: [ -0.077835, 51.519613],
                zoom: 16,
                zoomSmall: 14,
                pitch: 40,
                bearing: -25,
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
                center: [-0.088093, 51.518678],
                zoom: 15.25,
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
                zoom: 15.2,
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
                center: [-0.084817, 51.504288],
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
                zoom: 14.5,
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
