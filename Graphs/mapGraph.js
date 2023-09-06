const width  = 725
const height = 450

const minAttackCount = 0
const maxAttackCount = d3.max(Object.values(countryAttackCount))

const mapColors = d3.scaleLinear()
                    .domain([minAttackCount, maxAttackCount])
                    .range(['#fff1f1', '#c92a2a'])

// The svg
var svg = d3.select("#world_graph")
            .attr("width", width)
            .attr("height", height)

// Map and projection. Try:  d3.geoAiry() / d3.geoAitoff()  and more
var projection = d3.geoCylindricalStereographic()
    .scale(width / 1.8 / Math.PI)
    .rotate([0, 0])
    .center([0, 0])
    .translate([width / 2, height / 1.7]);

// Load external data and boot
d3.json("https://raw.githubusercontent.com/"
    + "janasayantan/datageojson/master/world.json", function (data) {

    // Draw the map
    svg.append("g")
        .selectAll("path")
        .data(data.features)
        .enter().append("path")
        .attr("fill", (data, index) => {
            let attackCount = countryAttackCount[data.properties.name]
            if(!attackCount)
                attackCount = 0
            return mapColors(attackCount)
        })
        .attr("d", d3.geoPath()
            .projection(projection)
        )
        .style("stroke", "#fff")
        .on("click", (d, i) => {
            const countryName = d.properties.name
            console.log(countryName)
        })
})
