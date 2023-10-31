/* Select all SVG's to be used for pie charts */
/* @ brief
    - This function is responsible for drawing a pie chart

    @ params region : The region the user clicked on. The region
    will be used to retrieve needed data for the graphs. 
*/
const getPieSvgs = () => {
    const width = 295,
        height = 295
    return [
    d3.select("#graph_pie_t_targets")
        .attr("width", width)
        .attr("height", height),
    d3.select("#graph_pie_t_weapons")
        .attr("width", width)
        .attr("height", height),
    d3.select("#graph_pie_t_atk_methods")
        .attr("width", width)
        .attr("height", height),
    ]
}

const getPieSvgVariables = (pieData) => {
    const width = 255,
        height = 255

    const radius = (width, height) / 2

    var arc = d3.arc()
        .innerRadius(radius * 0.8)
        .outerRadius(radius);
        
    const mapColors = d3.scaleLinear()
        .domain([0, d3.max(pieData)])
        .range(["#fff9f9", "#9b0013"])
    return [arc, mapColors]
}

/* @ brief
    - This function is responsible for drawing the initial pie chart's
*/ 

// Add an on-hover affect where the pie-section will highlight the corresponding
// label
const drawPies = (region = 'WORLD') => {
    const width = 275,
        height = 275

    /* Retrieve the data */
    let data = getPieData()
    const [VIC_DATA, WPN_DATA, ATK_DATA ] = data[region]
    let pieData = [VIC_DATA, WPN_DATA, ATK_DATA]

    const charts = getPieSvgs()    
    /* Draw all charts alongside their data */
    for(let i =0; i < 3; i++) {
        const [arc, mapColors] = getPieSvgVariables(pieData[i])
        let pie = d3.pie().padAngle(0.03)

        if(!charts[i].selectAll('g').empty())
            charts[i].selectAll('*').remove()

        let chart = charts[i],
            g = chart.append("g").attr("transform", `translate(${+(width/2)},${+(height / 2)})`)

        // Draw each section of the pie graph
        g = g.selectAll('g')
            .data(pie(pieData[i]))
            .enter()
            .append('g')
            .append('path')

        g.attr('fill', (d) => mapColors(d.value))
            /* Animation the circle */
            .transition()
            .delay((d, i) => i * 500)
            .duration(500)
            .attrTween("d", (d) => {
                let i = d3.interpolate(d.startAngle + 0.1, d.endAngle) 
                return (t) => { 
                    d.endAngle = i(t) 
                    return arc(d) 
                }
            })
            
        const highlightPieSection = (d) => {
            const center = arc.centroid(d)

            chart.selectAll('path')
                .transition()
                .duration(100)
                .attr('transform', (d2, _) => {
                    if (d.index === d2.index) {
                        return 'translate(' + center[0] / 20 + "," + center[1] / 20 + ")"
                    }
                    return "translate( 0, 0)"
                })
                .style('opacity', (d2, _) => {
                    if (d.index === d2.index) {
                        return 1
                    }
                    return 0.8
                })

            chart.select('.percent_count').text(Math.floor(d.value) + "%")
        }

        const mouseOut = () => {
            chart.selectAll('path')
                .transition()
                .duration(100)
                .attr('transform', (d2, _) => "translate( 0, 0)")
                .style('opacity', (d2, _) => 1)
            
            chart.select('.percent_count').text("")
        }

        g.on('mouseover', (_, d) => highlightPieSection(d))
          .on('mouseout', (_, d) => mouseOut())

        chart.select('g')
            .selectAll('circle')
            .data(pie(pieData[i]))
            .enter()
            .append('circle')
            .transition()
            .attr("transform", function (d) {
                return "translate(" + arc.centroid(d) + ")";
            })
            .attr("r", ".8em")
            .style("stroke", "#4d0009")
            .style('fill', '#f9f8f9')

        chart.select('g')
            .selectAll('text')
            .data(pie(pieData[i]))
            .enter()
            .append("text")
            .attr("transform", (d) => "translate(" + arc.centroid(d) + ")")
            .attr("dy", ".4em")
            .attr("text-anchor", "middle")
            .text((d) => { return d.index})

        legend = chart.append('g')
            .attr('class', 'legend')
            .attr("transform", (d) => "translate(" + (height / 2 - 35) + "," + (width / 3 - 10) + ")")
         
        legend.append('text')
            .attr('class','percent_count')
            .attr("transform", (d) => "translate(" + (-5) + "," + (10) + ")")
            .style("font-size", "55.5px")
            .style('opacity', 0.2)
            .text("")
            .attr('fill', "#9b0013")
            .style('fill', "#9b0013")

        const labelSpacing = 22
        const labels = [['Citizens & Property', 'Military', 'Police', 'Government', 'Business', 'Other'],
            ['Explosives', 'Firearms', 'Unknown', 'Incendiary', 'Melee', 'Other'], 
            [' Bombing', 'Armed Assault', 'Hostage Taking', 'Assassination', 'Infrastructure Attack', 'Other']
        ]

        legend.selectAll('circle')
            .data(pie(pieData[i]))
            .enter()
            .append('circle')
            .on('mouseover', (_, d) => highlightPieSection(d))
            .on('mouseout', (_, d) => mouseOut())
            .attr("transform", (d) => "translate(" + -19 + "," + d.index * labelSpacing + ")")
            .transition()
            .delay((d, i) => i * 200 + 1400)
            .duration(900)
            .attr("r", ".8em")
            .style('fill', (d) => mapColors(d.value))
            .style('stroke', 'black')

        legend.selectAll('.number')
            .data(pie(pieData[i]))
            .enter()
            .append("text")
            .attr('class', 'number')
            .attr("transform", (d) => "translate(" + -22 + "," + (d.index * labelSpacing + 3.5)+ ")")
            .transition()
            .delay((d, i) => i * 200 + 1400)
            .duration(900)
            .text((d) => { return d.index })
        
        legend.selectAll('.labels')
            .data(pie(pieData[i]))
            .enter()
            .append("text")
            .attr('class', 'labels')
            .on('mouseover', (_, d) => highlightPieSection(d))
            .on('mouseout', (_, d) => mouseOut())
            .transition()
            .delay((d, i) => i * 200 + 1400)
            .duration(900)
            .text((d) => { return labels[i][d.index] })
            .attr("transform", (d) => "translate(" + -4 + "," + (d.index * labelSpacing + 4.5) + ")")
            .style("font-size", "10.5px")
    }
}


drawPies()