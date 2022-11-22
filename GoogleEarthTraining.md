---
layout: page
title: Google Earth Training
permalink: /training/
---

## Introduction:
- > Google Earth Pro is a powerful tool that can be leveraged by government employees to quickly view, and distribute spatial data from BC government data services without navigating complicated GIS software in the DTS environment
    - In this presentation we are going to run through how to:
        - Import layer libraries through KML network links and CSVs into Google Earth
        - View government data on google earth through using KML Network Links obtained from the BC Data Catalogue
        - Utilize other useful tools such as measurements, elevation exaggeration, elevation profiles, historical imagery, and ESRI basemaps


## Useful Tools Available to us in GE Pro
- > **Measurements**
    - Taking measurements in GE is a fairly simple process that can give users rough estimations of distance. For example: this tool can be used by inspectors to gauge areas of reclamation or disturbance at a mine site so that potential non-compliance can be flagged and investigated. 
    - > To do this open GE Pro and in the menu bar select 'Tools' > 'Ruler', in the bottom left select 'Mouse Navigation'. <br>
    In the Ruler dialogue, the user can choose to make measurements using lines, paths, circles, polygons as well as 3D objects. The units of measurements can be changed within this dialogue box to suite the user's need. 

- > **Elevation Exaggeration**
    - Google Earth allows the user to exaggerate topography display so that the user can better visualize features on the Earth's surface.
    - to do that:
        - Ensure the 'Terrain' layer is selected on in the Layer menu in the bottom left of the screen.
        - Select 'Tools'> 'Options...'
        - In the 'Terrain' section, the user can input a value to set the Elevation exaggeration. The value must be within 0.01 - 3,
        - Play around with this value and determine what works best for your use case.
        - Select 'Apply' and view your data.

- > **Elevation Profiles**
    - The ability to view elevation profiles of defined paths in Google Earth can be a valuable tool for understanding or estimating the terrain in a area of interest.
        - For example: applying this tool to your work might help users understand elevation grades at proposed worksites
    - To view an elevation profile:
        - in the top menu of the Google Earth map view, select 'New Path', in the resulting dialogue box give your path a name and zoom into your area of interest and create a path that will be used to make an elevation profile.
            - Once the path has been defined, it appears in the 'Temporary Places' section of our Places menu. Right click on this layer and select show elevation profile. 
            - The profile shows the user the minimum, average, and maximum elevation units, the elevation gain or loss through that path, the path's distance, and the maximum slope, and average slope. These measurements can be valuable when estimating the type and scope of disturbance.

- > **Viewing Historical Imagery**
    - In Google Earth users can toggle through historical satellite imagery. This feature can be useful when determining scope of disturbance at sites of interest. Looking at an area of interest, we can toggle through vintages of imagery to view how the site has changed over time. 
    - In the map menu bar: select the clock icon - a slider then appears, and the user can navigate using the slider to the desired year
        - Adjusting zoom levels will provide the user with imagery depending on the resolution and vintage
        - NOTE: Consistent satellite imagery may not be available in some locations, and the resolution of the imagery can be poor. Remote sites will likely have less valuable satellite imagery overlaying them, whereas sites closer to urban areas will likely have more useful image overlays.
    - Loading ESRI world imagery basemaps to GE Pro:
        - Navigate to [ArcGIS REST Services Directory](https://services.arcgisonline.com/arcgis/rest/services)
        - Select the service you would like access to, in this case we will choose world imagery
        - This will open up a new tab for us where we can get access to the map server for the world imagery layer. In the 'View in' section select ArcGIS Earth
            - A KMZ will be downloaded and can be loaded into GE pro where it can be stored in 'My Places' section on your places tab
        - ESRI basemaps can be used to supplement the basemaps available to us in GE pro, while we will not have the flexibility of toggling through historical imagery, we can leverage ESRI basemaps to obtain better resolution and ground coverage.

- > **Front Counter BC Discovery Tool**
    - The FCBC Discovery tool is used within GE Pro to view basic information pertaining to land use and ownership in British Columbia 
    - The tool allows users to create areas of interest in which land use types and constraints can be visualized. 
    - There is a detailed tutorial at [The Front Counter BC Discovery Tool Web Page](https://portal.nrs.gov.bc.ca/web/client/-/frontcounter-bc-discovery-tool)
        - NOTE: this tool will not show all land use types, and their constraints - just publicly available data.


## Import KML Network Links and CSVs
- > **What is a KML Network Link?**
    - Keyhole Markup Language (KML) is a file format used to display spatial data in the Google Earth Environments
    - A KML Network Link uses a KMZ (a zipped version of a KML) to display and share complex spatial data.
    - A KML of a specific layer is stored on a network drive, or a website so that users from within and outside of organizations can access and view this information in Google Earth.
    - Hosting spatial data on a KML network link allows information to be updated and delivered to end-users so that up to date data can be displayed without the user needing to seek updates themselves.  
    - The KML Network link to the BC Web Map Library can be found here:
        - [BC Web Map Library](https://catalogue.data.gov.bc.ca/dataset/bc-web-map-library)

- > **Through the BC Data Catalogue:**
    - Search Catalogue for 'BC Web Map Library' - these are the iMap BC layers, this is the layer library that contains layers for:
        - Administrative Boundary, Fish and Wildlife, Archaeology and Cultural, imagery, health, land ownership and status etc..
    - Select 'Access/Download' on the Resource 'KML with GroundOverlays for use in Google Earth'
        - This will automatically download a KML to be opened in GE Pro.
    - Once opened in Google Earth, move the network link to 'My Places' so that the network link will persist in Google Earth after you end your session.
        - Be patient when viewing the data, there is a ton of information being hosted here, it will take time to load and visualize layers. Take your time and select the layers that are useful to you, and they will eventually load.
        - Pop-ups are available to be viewed when features are selected. These popups give information about the layer that can be useful to MCAD/MHSED employees.
    - Using the [BC Web Map Library](https://openmaps.gov.bc.ca/kml/geo/BCGov_Web_Map_Library.kml) link, you can directly import the webmap library
        - This link can be accessed from the BC Data Catalogue, in the BC Web Map Library
        - Select 'View' on the Resource 'KML with GroundOverlays for use in Google Earth' and copy the Resource Link
        - In Earth: right-click 'My Places' and select 'Add', then 'Network Link', in the description section select 'Add Link..'
            - Paste the copied link in this section, give your layer a relevant name and confirm your action.
        - The BC Web Map Library will then be available to be view in GE Pro


- > **Importing Data through a CSV from EMLI Inspection Mapper**:
    - In [Metabase](https://metabase-4c2ba9-prod.apps.silver.devops.gov.bc.ca/)
        - Navigate to the dashboard or table that you are interested in; in this case we will use the public dataset and navigate to the Now Application table. This table contains information pertaining to application types, permit terms, latitude, longitude, and other relevant mine details. But there is a lot of data in here we wont need.
            - Select the Table, and in the bottom left of the screen select 'Settings'. In this dialogue, we can rearrange columns, and eliminate data that we are not interested in. Filter your data appropriately.
            - In the Bottom Right corner select the cloud icon and choose the format you would like to download the table in. In our case we will select '.csv'
    - In the [EMLI Inspection Mapper](https://governmentofbc.maps.arcgis.com/apps/webappviewer/index.html?id=f024193c07a04a28b678170e1e2046f6#) users can toggle layer and view a variety of mine related data. In the bottom toolbar select 'Tools' > 'Select Features'
        - Make the layers you are interested in the only selectable layers, then using the selection drop-down menu select the shape you want to draw to capture all the data you are interested in. In this scenario we will use the lasso tool. 
        - Draw your AOI and click on the three dots beside the layer you are interested in, select 'Export to CSV file'. You know have a CSV full of the attribute data associated with each NoW point within your AOI. Now let's load it into GE pro
    - Google Earth can handle several different file formats, including a CSV (Comma Separated Value) that contains spatial information.
        - In Google Earth Pro, select 'File' > 'Import', navigate to your CSV file.
        - In this circumstance, our values are separated by commas, hence the name CSV. In The Google Earth dialogue box select 'Delimited' as the 'Field Type', and 'Comma" and the delimiter. Select 'Next'
        - Specify your latitude and longitude columns, click 'Next'
        - The next page gives the user the ability to specify the data types present in each column. The options available are String, Integer and Floating Point. A string is a text-based field, integer a whole number, and a floating point is positive or negative number with a decimal point.
        - The dialogue box that appears next will then prompt the user to apply a style to the layer being imported.
        - Once the CSV has been imported points can be selected, and the attributes associated can be viewed.



