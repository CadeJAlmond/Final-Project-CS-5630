d3.select('#worldMap').on('click', () => {
    hideTreeMap()
    showWorldMap()
})

d3.select('#araeMap').on('click', () => {
    hideWorldMap()
    showTreeMap()
})

d3.select("#reset_region").on('click', () => {
    d3.select('#reset_region').text('Across the world')
    redrawChartsByRegion('WORLD')
})