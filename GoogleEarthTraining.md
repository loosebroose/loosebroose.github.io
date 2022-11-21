---
layout: page
title: Google Earth Training
permalink: /training/
---
[Data ServiceS](https://www2.gov.bc.ca/gov/content/data/geographic-data-services)

---

# Meeting Notes

## Google Earth
    - What tools does GE pro provide?
        - transect, elevation exageration 
        - KML Network Layers
            - importing kml network links and saving to 'My Places'
            - importing CSV to GE
    - DataBC Webmap Library
        - Layer library inside served within the google earth pro viewer
    

## Training Presentation
    - Importing layer libraries
    - importing data
    - transects, elevation exaggeration, 
    - Connect with geomarks
    - FCBC Discovery Tool
    
---

## Introduction:
- > Google Earth Pro is a powerful tool that can be leveraged by government employees to quickly view, and distribute spatial data from BC government data services without navigating complicated GIS software in the DTS environment
    - In this presentation we are going to run through how to:
        - import layer libraries through KML network links and CSVs into Google Earth, as well as some other useful tools provided by the service.
        - View government data on google earth through using KML Network Links obtained from the BC Data Catalogue
        - Export data using the Geomark Web Service - through utilizing JSON and KMZ file types
        - Utilize Digital Imagery of BC to assess 
        - Implement the BC Address Geocoder

## Useful Tools Available to us in GE Pro
- > **Measurements and Elevation Transects**
    - Taking measurements in GE is a fairly simple process that can give users rough estimations of distance. For example: this tool can be used by inspectors to gauge areas of reclamation or disturbance at a mine site so that potential non-compliance can be flagged and investigated. 
    - > To do this open GE Pro and in the menu bar select 'Tools' > 'Ruler', in the bottom left select 'Mouse Navigation'. <br>
    In the Ruler dialogue, the user can shoose to make measurements using lines, paths, circles, polygons as well as 3D objects. The units of measurements can be changed within this dialogue box to suite the user's need. 
    - A useful tool available in GE Pro is the ability to view the elevation profile along a defined path or line. This can be used to get rough estimations of grade

- > **Elevation Exaggeration**
    - Google Earth allows the user to exaggerate topography display so that the user can better visualize features on the Earth's surface.
    - to do that:
        - Ensure the 'Terrain' layer is selected on in the Layer menu in the bottom left of the screen.
        - Select 'Tools'> 'Options...'
        - In the 'Terrain' section, the user has the ability to input a value to set the Elevation exaggeration. The value has to be within 0.01 - 3,
        - Play around with this value, and determine what works best for your use case.
        - Select 'Apply' and view your data.

- > **Elevation Profiles**
    - The ability to view elevation profiles of defined paths in Google Earth can be a valuable tool for understanding or estimating the terrain in a area of interest.
        - For example: applying this tool to your work might help users understand elevation grades at proposed worksites
    - To veiw an elevation profile:
        - in the top menu of the Google Earth map view, select 'New Path', in the resulting dialogue box give your path a name and zoom into your area of interest - in this case we will look at a major mine, and take an elevation profile of a road they have marked as a disturbance area.
            - Once the path has been defined, it appears in the 'Temporary Places' section of our ToC. Right click on this layer, and select show elevation profile. 
            - The profile shows the user the Min, Average, and Maximum elevation units, the elevation gain or loss through that path, the path's distance, and the max slope, and average slope. All measurements can be valuable when estimating the type and scope of disturbance.

- > **Viewing Historical Imagery**
    - In GE users have the ability to toggle through historical sattelite imagery. This feature can be useful when determining scope of disturbance at sites of interest. Using the polygon for the Red Chris Mine, we can toggle through vintages of imagery to view how the site has changed over time. 
    - In the map menu bar: select the clock icon - a slider then appears and the user can navigate using the slider to the desired year
        - NOTE: Consistent sattellite imagery may not be available in some locations, and the resolution of the imagery can be poor.

- > **Front Counter BC Discovery Tool**
    - The FCBC Discovery tool is used within GE Pro to view basic information pertaining to land use and ownership in British Columbia 
    - The tool allows users to view, and create areas of interest that can aid in the approval process for work applications within the province. 
    - There is a detailed tutorial at [The Front Counter BC Discovery Tool Web Page](https://portal.nrs.gov.bc.ca/web/client/-/frontcounter-bc-discovery-tool)
        - NOTE: this tool will not show ALL land use types, and it constraints - therefore it is just one of the many tool employees can use to assess the likelihood of application approval



## Import KML Network Links and CSVs
- > **What is a KML Network Link?**
    - Keyhole Markup Language (KML) is a file format used to display spatial data in the Google Earth Environments
    - A KML Network Link uses a KMZ (a zipped version of a KML) to display and share complex spatial data.
    - They a KML of a specific layer is stored on a network drive, or a website so that users from within and outside of organizations are able to access and view this information in Google Earth.
    - Because KML network link to the BC WebMap Library are stored on a website or network drive the information can be updated and delivered to end-users so that up to date data can be displayed without the user needing to seek updates themselves.  
    - The KML Network link to the BC Web Map Library can be found here:
        - [BC Web Map Library](https://openmaps.gov.bc.ca/kml/geo/BCGov_Web_Map_Library.kml)


- > **Through the BC Data Catalogue:**
    - Search Catalogue for 'BC Web Map Library' - these are the iMap BC layers, this is the layer library that contains layers for:
        - Administrative Boundary, Fish and Wildlife, Archaeology and Cultural, imagery, health, land ownership and staus etc..
    - Select 'Access/Download' on the Resource 'KML with GroundOverlays for use in Google Earth'
        - This will automattically download a KML to be opened in GE Pro.
    - Once opened in GE, move the network link to 'My Places' so that the network link will persist in Google Earth after you end your session.
        - Be patient when viewing the data, there is a ton of information being hosted here, it will take time to load and visualize layers. Take your time, and select the layers that are useful to you and they will eventually load.
        - Pop-ups are available to be viewed when features are selected. These popups give information about the layer that can be useful to MCAD/MHSED employees.
    - Using the [BC Web Map Library](https://openmaps.gov.bc.ca/kml/geo/BCGov_Web_Map_Library.kml) link, you can directly import the webmap library
        - This link can be accessed from the BC Data Catalogue, in the BC Web Map Library
        - Select 'View' on the Resource 'KML with GroundOverlays for use in Google Earth' and copy the Resource Link
        - In GE: right-click 'My Places' and select 'Add', then 'Network Link', in the description section select 'Add Link..'
            - Paste the copied link in this section, give your layer a relevant name and confirm your action.
        - The BC Web Map Library will then be available to be view in GE Pro


- > **Importing Data through a CSV from EMLI Inspection Mapper**:
    - In [Metabase](https://metabase-4c2ba9-prod.apps.silver.devops.gov.bc.ca/)
        - Navigate to the dashboard or table that you are interested in, in this case we will use the public dataset and navigate to the Now Application table. This table contains information pertaining to application types, permit terms, latitude, longitude, and other relevant mine details. But there is a lot of data in here we wont need.
            - Select the Table, and in the bottom left of the screen select 'Settings'. In this dialogue, we are able to rearrange columns, and eliminate data that we are not interested in. Filter your data appropriately.
            - In the Bottom Right corner select the cloud icon and specificy the format you would like to download the table in. In our case we will select '.csv'
    - In the [EMLI Inspection Mapper](https://governmentofbc.maps.arcgis.com/apps/webappviewer/index.html?id=f024193c07a04a28b678170e1e2046f6#) users can toggle layer and view a variety of mine related data. In the bottom toolbar select 'Tools' > 'Select Features'
        - Make the layers you are interested in the only selectable layers, then using the selection drop-down menu select the shape you want to draw to capture all the data you are interested in. In this scenereo we will use the lasso tool. 
        - Draw your AOI and click on the three dots beside the layer you are interested in, select 'Export to CSV file'. You know have a CSV full of the attribute data associated with each NoW point within your AOI. Now let's load it into GE pro
    - Google Earth can handle several different file formats, including a CSV (Comma Seperated Value) that contains spatial information.
        - In Google Earth Pro, select 'File' > 'Import', navigate to your CSV file.
        - In this circumstance, our values are separated by commas, hence the name CSV. In The Google Earth dialogue box select 'Delimited' as the 'Field Type', and 'Comma" and the delimter. Select 'Next'
        - Specify your latitude and longitude columns, click 'Next'
        - The next page gives the user the ability to specify the data types present in each column. The options available are String, Integer and Floating Point. A string is a text based field, integer a whole number, and a floating point is positive or negative number with a decimal point.
        - The dialogue box that appears next will then prompt the user to apply a style to the layer being imported.
    - Once the CSV has been imported points can be selected, and the attributes associated can be viewed.


