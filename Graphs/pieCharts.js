
const drawPies = () => {
    const width = 235,
        height = 235

    let svgVictims = d3.select("#graph_pie_t_targets")
        .attr("width", width)
        .attr("height", height)

    let svgAttacks = d3.select("#graph_pie_t_atk_methods")
        .attr("width", width)
        .attr("height", height)

    let svgWeapons = d3.select("#graph_pie_t_weapons")
        .attr("width", width)
        .attr("height", height)

    const charts = [svgVictims, svgWeapons, svgAttacks]

    let data = getPieData()
    // Pull out US data first
    const [ US_VIC_DATA, US_ATK_DATA, US_WPN_DATA ] = data["US"]
    data = [US_VIC_DATA, US_ATK_DATA, US_WPN_DATA]

    for(let i =0; i < 3; i++) {
        let chart = charts[i],
            radius = (width, height) / 2,
            g = chart.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

        var color = d3.scaleOrdinal(['#9696ff','#7d7dff', "#6363FF", '#4a4aff']);
        
        // Generate the pie
        var pie = d3.pie();

        // Generate the arcs
        var arc = d3.arc()
            .innerRadius(radius * 0.8)
            .outerRadius(radius);

        //Generate groups
        g.selectAll()
            .data(pie(data[i]))
            .enter()
            .append("g")
            .append("path")
            .attr("fill", function (d, i) {
                return color(i);
            })
            .attr("d", arc);
    }
}

drawPies()