# Sunburst Chart 

## Overview:
* The dataset created and utilized for our analysis and visualizations are characterized by consumer television viewing trends and ratings. As a starting point, we web scraped Emmy nominations from 2016-2020 and used that dataset as an anchor point to calculate the nomination frequency filtered by title and network.

## Extract
* Webscrape of Emmys Nominations by television program and network from 2016-2020

### Data Limitations & Future Considerations
* The Emmys Webscrape was touted as 'a full list' on Vanity Fair but was actually only a selection of award categories centered around actors writers or directors (telecast) and left out a lot of the behind-the-scenes creative arts awards categories caentered around design, costume, make-up, sound mixing, visual effects etc. Those features absolutely contribute to the full asethetic of a television program so our dataset may not fully convey some shows full number of nominations. 
* We have one field in our dataset called, 'channel,' which refers to the network that emmys.com attributed the shows origin to. While we used that as our beacon of truth, many of the programs live on multiple streaming networks. Many of the popular shows may have premiered on FX but have since been swallowed up by larger networks so any analysis comparing network content may be difficult based on the overlapping family trees.
* As a future consideration, it may be interesting to use this dataset as a foundation to explore consolidation of tv networks and the competitive landscape, looking at subscriber and financial data.

## Transform
- Used value_counts( ) function to add column displaying frequency of emmy nominations by television program/title
- Forloop to create new DataFrame following labels-parents-value layer in preparation for sunburst plot

## Load
- Exported dataFrame to csv
- Mirroed csv table headers and loaded in Postgre.
- From Tables/sunburst_data import sunburst_data.csv.
- Create Flask app to load sunburst_data from Postgre into JSON format
- Use d3.json().then() to create promise 
- Launch interactive browser with API route created to read in data

### Flask Installation
* After loading our clean csv's into SQL, we needed a medium to display our website and visualizations. Creating a Flask app allowed us to query the SQL server and display results in a DataFrame that could then be parsed into JSON to help create interactive visualizations using Plotly.

## Visualization

<p align="center">
  <img src="sunburst.gif" alt="Emmy Nominations By Network And Title" />
</p>
