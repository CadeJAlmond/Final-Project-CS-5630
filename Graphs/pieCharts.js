
const drawPies = (region = "WORLD") => {
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
    
    const [ VIC_DATA, ATK_DATA, WPN_DATA ] = data[region]
    let pieData = [VIC_DATA, ATK_DATA, WPN_DATA]

    for(let i =0; i < 3; i++) {
        let chart = charts[i],
            radius = (width, height) / 2,
            g = chart.append("g").attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
        
        const mapColors = d3.scaleLinear()
            .domain([0, d3.max(pieData[i])])
            .range(["#fff9f9", "#9b0013"])

        // Generate the pie
        var pie = d3.pie();

        // Generate the arcs
        var arc = d3.arc()
            .innerRadius(radius * 0.8)
            .outerRadius(radius);

        //Generate groups
        g.selectAll('g')
            .data(pie(pieData[i]))
            .join(
                enter => enter.append("g")
                    .append("path")
                    .attr("fill", function (d, i) {
                        return mapColors(d.value);
                    })
                    .attr("d", arc)
                    .attr('stroke', "#4d0009"),
                exit => exit.remove()
            )
    }
}

drawPies()