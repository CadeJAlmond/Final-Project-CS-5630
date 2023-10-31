var selectedLegendIndex = -1;
var selectedRegion = ""

const redrawChartsByRegion = (selectedRegion = 'WORLD') => {
    d3.select('#reset_region').text(selectedRegion)
    drawPies(selectedRegion)
    drawWaffles(selectedRegion)
}

const hideWorldMap = () => {
    if (!d3.select('#world_graph').empty()) {
        d3.select('#world_graph').selectAll('*').remove()
    }    
    d3.select('#legend').style('opacity', 0).lower()
}

const showWorldMap = () => {
    drawMap()
    d3.select("#world_graph").selectAll('*').raise()
}

/* @ brief
    - This function is responsible for drawing a map of the world and
    shading regions based on their levels of terrorism and a legend
    for the map. 
*/
const drawMap = () => {
    const width  = 920
    const height = 510

    const minAttackCount = 0
    const maxAttackCount = d3.max(Object.values(countryAttackCount))

    const mapColors = d3.scaleLinear()
                        .domain([minAttackCount, maxAttackCount])
                        .range(["#f9f8f9","#9b0013"])

    let svg = d3.select("#world_graph")
                .attr("width", width)
                .attr("height", height)

    let projection = d3.geoCylindricalStereographic()
        .scale(width / 1.95 / Math.PI)
        .rotate([0, 0])
        .center([0, 0])
        .translate([width / 2, height / 1.95 + 40]);

    // Display the contents of the map
    const displayProjection = (data) => {
        // Draw the map
        svg.append("g")
            .selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("fill", (data, index) => {
                let attackCount = countryAttackCount[data.properties.name]
                const getRegions = getCountryToRegionData()
                if (!attackCount)
                    attackCount = 0
                return mapColors(attackCount)
            })
            .attr("d", d3.geoPath()
                .projection(projection)
            )
            .style("stroke", "#cbd5e1")
            .on("click", (_, d) => {
                const countryName = d.properties.name
                selectedRegion = getCountryToRegionData()[countryName] 
                console.log(countryName, countryAttackCount[countryName], selectedRegion)
                redrawChartsByRegion(selectedRegion)
            })

        drawLegend(data)
    }

    // Display the contents of the map's legend
    const drawLegend = (data) => {
        const legendData = {
            "7. 20,000+ Attacks": 20000,
            "6. 15,000+ Attacks": 15000,
            "5. 10,000+ Attacks": 10000,
            "4. 5000+ Attacks:": 5000,
            "3. 2500+ Attacks": 2500,
            "2. 1000+ Attacks": 1000,
            "1. None": 1
        }

        // Draw a legend on the side
        var legend = d3.select('#legend')
            .attr("width", 170)
            .attr("height", 225)

        // Setup labels
        let legendLabels = legend.selectAll('g')
            .data(Object.keys(legendData))
            .enter()
            .append('g')
            .on('click', (d, i) => {
                selectedLegendIndex = i
                drawMap(data)
            })

        const legendValues = Object.values(legendData)
        // Draw Circles
        legendLabels.append("circle")
            .attr("cx", function (d, i) { return 15 })
            .attr("cy", (d, i) => i * 27.5 + 25)
            .attr("r", ".55em")
            .attr('fill', (d, i) => mapColors(legendValues[i]))
            .style("stroke", "#eae9eb")

        // Draw Legend Text
        legendLabels.append("text")
            .attr('width', 150)
            .attr("x", function (d, i) { return 30 })
            .attr("y", (d, i) => i * 27.5 + 25)
            .attr("dy", ".35em")
            .text((d) => d);
    }
    // Load external data and boot
    d3.json("https://raw.githubusercontent.com/"+
            "janasayantan/datageojson/master/world.json").then( (data) => {
        displayProjection(data)
    })
}

drawMap()