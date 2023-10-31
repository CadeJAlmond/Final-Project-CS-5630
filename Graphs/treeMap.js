const hideTreeMap = () => {
    if (!d3.select('#tree_map').empty()) {
        d3.select('#tree_map').selectAll('*').remove()
        d3.select('#tree_map').style('background-color', null)
        d3.select('#tree_map').attr('height', 0).attr('width', 0)
    }
}

const showTreeMap = () => {
    drawTreeMap()
}

// MAYBE ADD A GRADIENT
const drawTreeMap = () => {
    const width = 920
    const height = 510

    // The counts of each regions attacks for the 21st cen
    const countryAtkData = [
        { "name": "Central America & Caribbean", "value": 10344 },
        { "name": "North America", "value": 3456 },
        { "name": "Southeast Asia", "value": 12485 },
        { "name": "Western Europe", "value": 16639 },
        { "name": "East Asia", "value": 802 },
        { "name": "South America", "value": 18978 },
        { "name": "Eastern Europe", "value": 5144 },
        { "name": "Sub-Saharan Africa", "value": 17550 },
        { "name": "Middle East & North Africa", "value": 50474 },
        { "name": "Australasia & Oceania", "value": 282 },
        { "name": "South Asia", "value": 44974 },
        { "name": "Central Asia", "value": 563 },
    ]

    var data = {
        "name": "root",
        "children": countryAtkData
    };

    let minAtk = countryAtkData[0].value
    let maxAtk = countryAtkData[0].value
    let sum = 0

    countryAtkData.forEach((atk) => {
        atkCount = atk.value
        sum += atkCount
        if (maxAtk < atkCount)
            maxAtk = atkCount
        if (minAtk > atkCount)
            minAtk = atkCount
    })

    const mapColors = d3.scaleLinear()
        .domain([minAtk, maxAtk])
        .range(["#fecaca", "#9b0013"])

    const mapColors2 = d3.scaleLinear()
        .domain([minAtk, maxAtk])
        .range(["#f0b6b6", "#820111"])

    const mapNameFontSize = d3.scaleLinear()
        .domain([minAtk, maxAtk])
        .range([6, 25])

    const mapPercentFontSize = d3.scaleLinear()
        .domain([minAtk, maxAtk])
        .range([6, 20])

    let svg = d3.select('#tree_map')
        .style("background-color", "rgba(58, 7, 7, 0.825)")
        .attr('height', height + 10)
        .attr('width', width + 10)    
        .append('g')
        .attr("transform", "translate(" + 5 + "," + 5 + ")")  

    var root = d3.treemap()
        .size([width, height])
        .padding(4.5)
        (d3.hierarchy(data)
            .sum(d => d.value)
            .sort((a, b) => b.value - a.value));

    // Add a cell for each leaf of the hierarchy.
    const leaf = svg.selectAll("g")
        .data(root.leaves())
        .join("g")
        .attr("transform", (d) => `translate(${d.x0},${d.y0})`);

    // Append a color rectangle. 
    leaf.append("rect")
        .attr("width", d => d.x1 - d.x0)
        .attr("height", d => d.y1 - d.y0)
        .attr("fill", d => { return  mapColors(d.data.value); })
        .attr('rx', "5px")
        .attr('ry', "5px")
        .on("click", (_, d) => {
            const countryName = d.data.name
            selectedRegion = d.data.name
            redrawChartsByRegion(selectedRegion)
            console.log(countryName, selectedRegion)
        })

    svg.selectAll(".cNames")
        .data(root.leaves())
        .enter()
        .append("text")
        .attr('class', 'cNames')
        .attr("x", function (d) { return d.x0 + mapNameFontSize(d.data.value) }) 
        .attr("y", function (d) { return d.y0 + mapNameFontSize(d.data.value) * 2})    
        .text(function (d) { return d.data.name })
        .attr("font-size", (d) => mapNameFontSize(d.data.value) + "px")
        .attr("fill", "white")
        
    svg.selectAll(".cPercents")
        .data(root.leaves())
        .enter()
        .append("text")
        .attr('class', 'cPercents')
        .attr("x", function (d) { return d.x0 + mapNameFontSize(d.data.value) })
        .attr("y", function (d) { return d.y0 + mapPercentFontSize(d.data.value) * 3.5})
        .text(function (d) { return +(100 * d.data.value / sum ).toFixed(2) + "%" })
        .attr("font-size", (d) => mapPercentFontSize(d.data.value) + "px")
        .attr("fill", "white")
}

drawTreeMap()
hideTreeMap()