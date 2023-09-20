var selectedLegendIndex = -1;
var selectedRegion = ""

const redrawChartsByRegion = () => {
    drawPies(selectedRegion)
    drawWaffles(selectedRegion)
}

const drawMap = () => {
    const width  = 625
    const height = 425

    const minAttackCount = 0
    const maxAttackCount = d3.max(Object.values(countryAttackCount))

    const mapColors = d3.scaleLinear()
                        .domain([minAttackCount, maxAttackCount])
                        .range(["#fff9f9","#9b0013"])

    let svg = d3.select("#world_graph")
                .attr("width", width)
                .attr("height", height)

    let projection = d3.geoCylindricalStereographic()
        .scale(width / 1.95 / Math.PI)
        .rotate([0, 0])
        .center([0, 0])
        .translate([width / 2, height / 1.65 - 30]);

    // Display the contents of the map
    const displayProjection = (data) => {
        console.log(data)
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
                redrawChartsByRegion()
                console.log(countryName, countryAttackCount[countryName], selectedRegion)
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
            .style("stroke", "gray")

        // Draw Legend Text
        legendLabels.append("text")
            .attr('width', 150)
            .attr("x", function (d, i) { return 30 })
            .attr("y", (d, i) => i * 27.5 + 25)
            .attr("dy", ".35em")
            .text((d) => d);
    }
    console.log("HELLO")
    // Load external data and boot
    d3.json("https://raw.githubusercontent.com/"+
            "janasayantan/datageojson/master/world.json").then( (data) => {
        displayProjection(data)
    })
}

drawMap()