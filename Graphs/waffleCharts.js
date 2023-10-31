/*  @ brief : 
    - This method is responsible for creating the waffle charts
    and updating related text about terrorism. 
    
    @ params region : The region the user clicked on. The region
    will be used to retrieve needed data for the graphs. 
*/
const drawWaffles = (region = "WORLD") => {
    const width  = 190,
        height = 235

    /* Select all SVG's to be used for waffle charts */
    let svgVictims = d3.select("#graph_waf_t_targets")
        .attr("width", width)
        .attr("height", height)

    let svgAttacks = d3.select("#graph_waf_t_atk_methods")
        .attr("width", width)
        .attr("height", height)

    let svgWeapons = d3.select("#graph_waf_t_weapons")
        .attr("width", width)
        .attr("height", height)

    const wafCharts = [svgVictims, svgWeapons, svgAttacks]
    const textIds   = ['waf_vic_stats', 'waf_wpn_stats', 'waf_atk_stats']
    /* Retrieve the data */
    const wafData = getWaffleData()[region]
    
    /* Draw a chart and it's data */
    const drawChart = (index) => {
        const terror_value = wafData[index]
        const cur_chart  = wafCharts[index]
        const chartSize = ( () => { 
            let d = []
            for(let i = 0; i < 100; i++) 
                d.push(0)
            return d
        })

        // Clear any existing data points
        cur_chart.selectAll('circle').remove()
        // Draw Charts
        cur_chart.selectAll('circle')
            .data(chartSize())
            .enter()
            .append('circle')
            .attr('fill', '#fff9f9')
            .attr("cx", (d, i) => (i % 10) * 17 + 20)
            .attr("cy", (d, i) => (Math.floor(i / 10)) * 17 + 20)
            .attr("r", ".65em")
            .style("stroke", "#4d0009")
        // Animate graph
            .transition()
            .ease(d3.easeLinear)
            .delay((d, i) =>{
                return i * 16
            })
            .duration(950)
            .attr('fill', (d, i) => {
                if (i <= terror_value) return "#9b0013"
                return "#fff9f9"
            })
            .style('opacity', (d, i) => {
                if (i <= terror_value) return 1
                return 0.6
            })

        d3.select("#" + textIds[index])
            .select('span')
            .style("color", "red")
            .text(`${terror_value}% `);
    }

    // Draw every chart
    for(let i = 0; i < wafCharts.length; i++)
        drawChart(i)
}

drawWaffles()