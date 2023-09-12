var getPieData = () => {
    let US_VIC_DATA = [25, 25, 25, 25]
    let US_ATK_DATA = [35, 15, 25, 25]
    let US_WPN_DATA = [20, 30, 20, 30]

    let RS_VIC_DATA = [10, 40, 15, 35]
    let RS_ATK_DATA = [15, 35, 20, 30]
    let RS_WPN_DATA = [60, 20, 10, 10]

    return {
        "US" : [US_VIC_DATA, US_ATK_DATA, US_WPN_DATA],
        "RUSSIA" : [RS_VIC_DATA, RS_ATK_DATA, RS_WPN_DATA]
    }
}