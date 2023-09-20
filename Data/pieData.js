/** *
 * This method returns an array of arrays. Each arrays and it's index's represents the total % of a weapon, 
 * atk method or target is used 
 * 
 * For Victims (VTC) : 
 *   0st index -> Private Citizens & Property, 1nd index -> Military
 *   2rd index -> Police,  3th index -> Government
 *   4th index -> Business, 5th index -> other
 * 
 * For Weapons  (WPN) : 
 *   0st index -> Explosives, 1nd index -> Firearms
 *   2rd index -> Unknown,  3th index -> Incendiary
 *   4th index -> Melee, 5th index -> Other
 * 
 * For Attack Methods (ATK)
 *   0st index -> Bombing, 1nd index -> Armed Assault
 *   2rd index -> Hostage Taking,  3th index -> Assassination
 *   4th index -> 'Facility/Infrastructure Attack', 5th index -> other
*/

var getPieData = () => {
    let WORLD_VIC_DATA = [27, 17, 15, 10, 8, 23] 
    let WORLD_ATK_DATA = [53, 24, 7, 6, 5, 5]
    let WORLD_WPN_DATA = [56, 29, 7, 4, 2, 2]

    CENT_AMRC_CARB_VIC = [22, 0, 7, 36, 0, 41]/* Central America & Caribbean */
    CENT_AMRC_CARB_ATK = [27, 56, 0, 15, 1, 1] 
    CENT_AMRC_CARB_ATK = [25, 33, 1, 29, 11, 1]

    NRTH_AMCA_VIC = [21, 3, 6, 9, 19, 42]/* -North America */
    NRTH_AMCA_WPN = [20, 24, 1, 41, 6, 8]
    NRTH_AMCA_ATK = [22, 21, 3, 6, 4, 44]

    STET_AS_VIC = [21, 19, 11, 16, 13, 20]/* -Southeast Asia */
    STET_AS_WPN = [43, 45, 3, 7, 1, 1]
    STET_AS_ATK = [40, 34, 5, 9, 8, 4]

    WSTN_ERP_VIC = [33, 2, 11, 14, 17, 23]/* -Western Europe */
    WSTN_ERP_WPN = [52, 8, 1, 32, 4, 3]
    WSTN_ERP_ATK = [53, 12, 4, 2, 28, 1] 

    EAST_ASIA_VIC = [20, 5, 19, 15, 17, 24]/* -East Asia */
    EAST_ASIA_WPN = [54, 3, 1, 17, 18, 7]
    EAST_ASIA_ATK = [50, 24, 1, 2, 10, 13] 

    SOTH_AMCA_VIC = [20, 10, 14, 10, 15, 31]/* -South America */
    SOTH_AMCA_WPN = [52, 27, 11, 7, 1, 2] 
    SOTH_AMCA_ATK = [50, 17, 14, 6, 8, 5]

    EAST_ERP_VIC = [17, 26, 18, 12, 7, 20]/* -Eastern Europe */
    EAST_ERP_WPN = [62, 27, 5, 3, 2, 1]
    EAST_ERP_ATK = [54, 26, 4, 6, 5, 5] 

    SB_S_AFRCA_VIC =[35, 21, 7, 11, 6, 20]/*  -Sub-Saharan Africa */
    SB_S_AFRCA_WPN =[35, 45, 13, 4, 2, 1]
    SB_S_AFRCA_ATK  =[29, 37, 13, 7, 5, 9] 

    MEAST_NO_AF_VIC = [32, 19, 14, 8, 7, 20]/*  -Middle East & North Africa */
    MEAST_NO_AF_WPN = [69, 21, 7, 1, 1, 1] 
    MEAST_NO_AF_ATK = [66, 17, 6, 5, 2, 4] 

    AUST_OCEA_VIC = [11, 1, 13, 15, 12, 48] /* -Australasia & Oceania */
    AUST_OCEA_WPN = [11, 15, 5, 49, 5, 15]
    AUST_OCEA_ATK = [12, 12, 7, 3, 50, 16]

    STH_ASIA_VIC = [23, 13, 19, 12, 7, 26] /* -South Asia */
    STH_ASIA_WPN = [54, 31, 8, 4, 2, 1]
    STH_ASIA_ATK = [50, 24, 8, 7, 5, 6] 

    CENT_ASIA_VIC = [14, 5, 2, 22, 7, 50] /* -Central Asia */
    CENT_ASIA_WPN = [53, 32, 5, 5, 4, 4] 
    CENT_ASIA_ATK = [48, 18, 7, 14, 8, 5] 
    
    return {
        "WORLD": [WORLD_VIC_DATA, WORLD_ATK_DATA, WORLD_WPN_DATA],
        "Middle East & North Africa": [MEAST_NO_AF_VIC, MEAST_NO_AF_ATK, MEAST_NO_AF_WPN],
        "Sub-Saharan Africa": [SB_S_AFRCA_VIC, SB_S_AFRCA_ATK, SB_S_AFRCA_WPN],
        "Eastern Europe": [EAST_ERP_VIC, EAST_ERP_ATK, EAST_ERP_WPN],
        "Western Europe": [WSTN_ERP_VIC, WSTN_ERP_ATK, WSTN_ERP_WPN],
        "Central Asia": [CENT_ASIA_VIC, CENT_ASIA_ATK, CENT_ASIA_WPN],
        "South Asia": [STH_ASIA_VIC, STH_ASIA_ATK, STH_ASIA_WPN],
        "Southeast Asia": [STET_AS_VIC, STET_AS_ATK, STET_AS_WPN],
        "East Asia": [EAST_ASIA_VIC, EAST_ASIA_ATK, EAST_ASIA_WPN],
        "North America": [NRTH_AMCA_VIC, NRTH_AMCA_ATK, NRTH_AMCA_WPN],
        "South America": [SOTH_AMCA_VIC, SOTH_AMCA_ATK, SOTH_AMCA_WPN],
        "Australasia & Oceania": [AUST_OCEA_VIC, AUST_OCEA_ATK, AUST_OCEA_WPN],
    }
}