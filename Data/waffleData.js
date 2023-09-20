/** *
 * This method returns an object with a key -> array of numbers
 * 
 * For the Array :
 *  0st index -> % of civilians and property attacked
 *  1nd index -> % of attacks methods used
 *  2st index -> % of bombings used in attacks
 *
*/

var getWaffleData = () => {
    return {
        "WORLD": [27, 53, 57],
        "Middle East & North Africa": [32, 69, 66],
        "Sub-Saharan Africa": [35, 35, 29],
        "Eastern Europe": [17, 62, 54],
        "Western Europe": [33, 52, 53],
        "Central Asia": [14, 53, 48],
        "South Asia": [23, 54, 50],
        "Southeast Asia": [21, 43, 40],
        "East Asia": [20, 54, 50],
        "North America": [21, 20, 20],
        "South America": [20, 53, 50],
        "Australasia & Oceania": [22, 27, 25],
    }
}