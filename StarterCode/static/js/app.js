// 1. Use the D3 library to read in `samples.json`.
function buildMetadata(sample){
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray= metadata.filter(sampleObj=>sampleObj.id ==sample);
        var result= resultArray[0];
        var PANEL = d3.select("#sample-metadata");
        PANEL.html("");

        Object.defineProperties(result).forEach(([key, value]) => {
            PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
        });

    });
}


// 2. Create a horizontal bar chart with a dropdown menu 
//to display the top 10 OTUs found in that individual.
    // * Use `sample_values` as the values for the bar chart.
    // * Use `otu_ids` as the labels for the bar chart.
    // * Use `otu_labels` as the hovertext for the chart.

function buildCharts(sample){
    d3.json("samples.json").then((data) => {
        var metadata = data.metadata;
        var resultArray= metadata.filter(sampleObj=>sampleObj.id ==sample);
        var result= resultArray[0];
        var otu_ids = result.otu_ids;
        var otu_labels= result.otu_labels;
        var sample_values = result.sample_values;

        var yticks = otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`).reverse();
        var barData = [
            {
                y: yticks,
                x: sample_values.slice(0,10).reverse(),
                text: otu_labels.slice(0,10).reverse(),
                type: "bar",
                orientation: "h"
            }
        ];
        var barLayout = {
            title: "Top 10 Bacteria Cultures Found",
            margin: {t:30, l:150}
        };
        Plotly.newPlot("bar", barData, barLayout);

 // 3. Create a bubble chart that displays each sample.
    // * Use `otu_ids` for the x values.
    // * Use `sample_values` for the y values.
    // * Use `sample_values` for the marker size.
    // * Use `otu_ids` for the marker colors.
    // * Use `otu_labels` for the text values.


        var bubbleLayout = {
            title: "Bacteria Cultures Per Sample",
            margin: {t:0},
            hovermode: "closest",
            xaxis: {ttile: "OTU ID"},
            margin: {t: 30}
        };
        var bubbleData = [
            {
                x: otu_ids,
                y: sample_values,
                text: otu_labels,
                mode: "markers",
                marker:{
                    size: sample_values,
                    color: otu_ids,
                    colorscale: "Earth"
                }

            }
        ]
        Plotly.newPlot("bubble", bubbleData, bubbleLayout);

    });
}




// 4. Display the sample metadata, i.e., an individual's demographic information.

// 5. Display each key-value pair from the metadata JSON object somewhere on the page.

// 6. Update all of the plots any time that a new sample is selected.

function init(){

    var selector = d3.select("#selDataset");
    d3.json("sample.json").then((data) =>{
        var sampleNames = data.names;

        sampleNames.forEach((sample) => {
            selector.append("option").text(sample).property("value", sample);
        });
        var firstSample = sampleNames[0];
        buildCharts(firstSample);
        buildMetadata(firstSample);

        
    });

}

function optionChanged(newSample) {
    buildCharts(newSample);
    buildMetadata(newSample);
}

init();



