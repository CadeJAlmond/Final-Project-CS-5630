const drawWaffles = (region = "WORLD") => {
    const width  = 190,
        height = 235

    let svgVictims = d3.select("#graph_waf_t_targets")
        .attr("width", width)
        .attr("height", height)

    let svgAttacks = d3.select("#graph_waf_t_atk_methods")
        .attr("width", width)
        .attr("height", height)

    let svgWeapons = d3.select("#graph_waf_t_weapons")
        .attr("width", width)
        .attr("height", height)

    const wafData = getWaffleData()[region]
    
    const wafCharts = [svgVictims, svgWeapons, svgAttacks]

    const drawChart = (index) => {
        const value = wafData[index]
        const chart  = wafCharts[index]
        const chartSize = ( () => { 
            let d = []
            for(let i = 0; i < 100; i++) 
                d.push(0)
            return d
        })

        chart.selectAll('circle').remove()
        // Draw circles
        chart.selectAll('circle')
            .data(chartSize())
            .enter()
            .append('circle')
            .attr("cx", function (d, i) {
                return (i % 10) * 17 + 20
            })
            .attr("cy", function (d, i) {
                return (Math.floor(i / 10)) * 17 + 20;

            })
            .attr("r", ".65em")
            .attr('fill', (d, i) => {
                if (i >= 100 - value ) return "#9b0013"
                return "#fff9f9"
            })
            .style("stroke", "#4d0009")

    }

    for(let i = 0; i < wafCharts.length; i++)
        drawChart(i)
}

drawWaffles()