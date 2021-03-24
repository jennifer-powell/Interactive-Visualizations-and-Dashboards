# Interactive-Visualizations-and-Dashboards

- ## Overview
  - build an interactive dashboard to explore the Belly Button Biodiversity dataset from http://robdunnlab.com/projects/belly-button-biodiversity/, which catalogs the microbes that colonize human navels.
The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.


- ## Programs, Languages and tools
  - Plotly,  D3, HTML, GitHub Pages, Javascript

- ## File overview
  - ### StarterCode/static/js/app.js file
    ##### This file reads in the samples.json
  - ### StarterCode/static/js/index.html file
    ##### This displays the data ti git hib pages
  - ### Data/sample.json file
    ##### This file contains the sample data used 
  


- ## Steps deployed to reach goal
   ### Created a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.
   - Used `sample_values` as the values for the bar chart.
   - Used `otu_ids` as the labels for the bar chart.
   - Used `otu_labels` as the hovertext for the chart.
   ### Created a bubble chart that displays each sample.
   - Used `otu_ids` for the x values.
   - Used `sample_values` for the y values.
   - Used `sample_values` for the marker size.
   - Used `otu_ids` for the marker colors.
   - Used `otu_labels` for the text values.
  ### GitHub Pages link
   - https://jennifer-powell.github.io/Interactive-Visualizations-and-Dashboards/StarterCode/static/js/index.html

