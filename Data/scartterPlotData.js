const getScatData = () => {
    return {
        "Central America & Caribbean": [
            { "country": "Belize", "attacks": 2, "population": 374_693}, 
            { "country": "Nicaragua", "attacks": 3, "population": 6_481_000}, 
            { "country": "Haiti", "attacks": 28, "population": 10_860_000}, 
            { "country": "Guatemala", "attacks": 19, "population": 16_090_000}, 
            { "country": "Panama", "attacks": 3, "population": 4_096_000}, 
            { "country": "St. Lucia", "attacks": 1, "population": 177_163 }, 
            { "country": "Costa Rica", "attacks": 1, "population": 4_994_000}, 
            { "country": "Honduras", "attacks": 16, "population": 9_627_000}, 
            { "country": "Trinidad and Tobago", "attacks": 7, "population": 1_479_000 }, 
            { "country": "Cuba", "attacks": 1, "population": 11_340_000}, 
            { "country": "Jamaica", "attacks": 4, "population": 2_808_000}, 
            { "country": "Dominican Republic", "attacks": 3, "population": 10_650_000}, 
            { "country": "Bahamas", "attacks": 1, "population": 399_020 }
        ],
        "North America": [
            { "country": "United States", "attacks": 475, "population": 325_100_000}, 
            { "country": "Mexico", "attacks": 120, "population": 122_800_000}, 
            { "country": "Canada", "attacks": 53, "population": 36_550_000}
        ],
        "Southeast Asia": [
            { "country": "Indonesia", "attacks": 549, "population": 264_500_000}, 
            { "country": "Thailand", "attacks": 3623, "population": 70_900_000}, 
            { "country": "Philippines", "attacks": 4920, "population": 106_700_000}, 
            { "country": "East Timor", "attacks": 10, "population": 1_243_000 }, 
            { "country": "Laos", "attacks": 19, "population": 6_998_000}, 
            { "country": "Malaysia", "attacks": 62, "population": 31_980_000}, 
            { "country": "Cambodia", "attacks": 19, "population": 15_830_000 }, 
            { "country": "Vietnam", "attacks": 6, "population": 94_030_000}, 
            { "country": "Myanmar", "attacks": 354, "population": 52_290_000 }
        ],
        "Western Europe": [
            { "country": "Spain", "attacks": 421, "population": 46_590_000 }, 
            { "country": "Germany", "attacks": 204, "population": 82_660_000}, 
            { "country": "Greece", "attacks": 548, "population": 10_750_000 }, 
            { "country": "United Kingdom", "attacks": 1061, "population": 66_060_000 }, 
            { "country": "Italy", "attacks": 123, "population": 60_540_000}, 
            { "country": "France", "attacks": 444, "population": 66_920_000}, 
            { "country": "Switzerland", "attacks": 15, "population": 8_452_000}, 
            { "country": "Netherlands", "attacks": 24, "population": 17_130_000}, 
            { "country": "Cyprus", "attacks": 25, "population": 1_209_000}, 
            { "country": "Sweden", "attacks": 84, "population": 10_060_000}, 
            { "country": "Norway", "attacks": 8, "population": 5_277_000}, 
            { "country": "Ireland", "attacks": 167, "population": 4_807_000}, 
            { "country": "Belgium", "attacks": 25, "population": 11_380_000}, 
            { "country": "Austria", "attacks": 18, "population": 8_798_000}, 
            { "country": "Finland", "attacks": 16, "population": 5_508_000}, 
            { "country": "Denmark", "attacks": 8, "population": 5_765_000}, 
            { "country": "Portugal", "attacks": 2, "population": 10_300_000}, 
            { "country": "Iceland", "attacks": 2, "population": 343_400}, 
            { "country": "Malta", "attacks": 5, "population": 467_999}
        ],
        "East Asia": [
            { "country": "Japan", "attacks": 41, "population": 127_000_000}, 
            { "country": "China", "attacks": 137, "population": 1_396_000_000}, 
            { "country": "Hong Kong", "attacks": 5, "population": 7_393_000}, 
            { "country": "South Korea", "attacks": 5, "population": 51_360_000}, 
            { "country": "Taiwan", "attacks": 10, "population": 23_665_024}
        ],
        "South America": [
            { "country": "Colombia", "attacks": 2103, "population": 48_350_000}, 
            { "country": "Ecuador", "attacks": 30, "population": 16_700_000}, 
            { "country": "Paraguay", "attacks": 81, "population": 6_355_000}, 
            { "country": "Peru", "attacks": 73, "population": 31_610_000}, 
            { "country": "Brazil", "attacks": 26, "population": 208_500_000}, 
            { "country": "Chile", "attacks": 95, "population": 18_370_000}, 
            { "country": "Argentina", "attacks": 24, "population": 44_040_000}, 
            { "country": "Guyana", "attacks": 9, "population": 763_252}, 
            { "country": "Venezuela", "attacks": 56, "population": 30_560_000}, 
            { "country": "Bolivia", "attacks": 9, "population": 11_440_000}, 
            { "country": "Uruguay", "attacks": 2, "population": 3_422_000}
        ],
        "Eastern Europe": [
            { "country": "Kosovo", "attacks": 157, "population": 1_783_531}, 
            { "country": "Russia", "attacks": 1866, "population": 144_500_00}, 
            { "country": "Slovak Republic", "attacks": 2, "population": 5_439_000}, 
            {"country": "Yugoslavia", "attacks": 37, "population": -1}, 
            { "country": "Bosnia-Herzegovina", "attacks": 33, "population": 3_440_000}, 
            { "country": "Macedonia", "attacks": 106, "population": 2_075_000}, 
            { "country": "Croatia", "attacks": 11, "population": 4_125_000}, 
            { "country": "Latvia", "attacks": 5, "population": 1_942_000}, 
            { "country": "Albania", "attacks": 15, "population": 2_873_000}, 
            { "country": "Moldova", "attacks": 5, "population": -2_755_000}, 
            { "country": "Ukraine", "attacks": 1683, "population": 44_830_000}, 
            { "country": "Bulgaria", "attacks": 17, "population": 7_076_000}, 
            { "country": "Slovenia", "attacks": 1, "population": 2_066_000}, 
            {"country": "Estonia", "attacks": 4, "population": -1}, 
            { "country": "Montenegro", "attacks": 5, "population": 622_373}, 
            { "country": "Belarus", "attacks": 9, "population": 9_459_000}, 
            { "country": "Hungary", "attacks": 7, "population": 9_788_000}, 
            { "country": "Czech Republic", "attacks": 21, "population": 10_590_000 }, 
            { "country": "Poland", "attacks": 5, "population": 37_970_000}, 
            {"country": "Serbia-Montenegro", "attacks": 11, "population": -1}, 
            {"country": "Serbia", "attacks": 12, "population": -1}, 
            { "country": "Romania", "attacks": 1, "population": 19_590_000}
        ],
        "Sub-Saharan Africa": [
            { "country": "Namibia", "attacks": 27, "population": 2_365_000}, 
            { "country": "Somalia", "attacks": 3973, "population": 14_860_000}, 
            { "country": "Uganda", "attacks": 183, "population": 40_130_000}, 
            { "country": "Nigeria", "attacks": 3826, "population": 193_500_000 }, 
            { "country": "Sudan", "attacks": 891, "population": 40_680_000}, 
            { "country": "South Africa", "attacks": 130, "population": 56_640_000}, 
            { "country": "Zambia", "attacks": 11, "population": 17_300_000}, 
            {"country": "Mozambique", "attacks": 143, "population": -1},
            { "country": "Angola", "attacks": 79, "population": 30_210_000}, 
            { "country": "Burundi", "attacks": 365, "population": 48_950_000}, 
            { "country": "Senegal", "attacks": 46, "population": 15_160_000}, 
            {"country": "Sierra Leone", "attacks": 28, "population": -1}, 
            { "country": "Kenya", "attacks": 605, "population": 48_950_000}, 
            { "country": "Rwanda", "attacks": 31, "population": 12_230_000}, 
            { "country": "Zimbabwe", "attacks": 29, "population": 14_750_000}, 
            {"country": "Democratic Republic of the Congo", "attacks": 767, "population": -1}, 
            { "country": "Gambia", "attacks": 1, "population": 2_381_000}, 
            { "country": "Ethiopia", "attacks": 100, "population": 108_200_000}, 
            {"country": "Central African Republic", "attacks": 274, "population": -1}, 
            {"country": "Guinea", "attacks": 18, "population": -1}, 
            {"country": "Ivory Coast", "attacks": 59, "population": -1}, 
            {"country": "Tanzania", "attacks": 52, "population": -1}, 
            { "country": "Liberia", "attacks": 13, "population": 4_797_000}, 
            {"country": "Guinea-Bissau", "attacks": 9, "population": -1}, 
            {"country": "Republic of the Congo", "attacks": 21, "population": -1}, 
            {"country": "Chad", "attacks": 73, "population": -1}, 
            {"country": "Madagascar", "attacks": 13, "population": -1}, 
            {"country": "Malawi", "attacks": 2, "population": -1}, 
            {"country": "Swaziland", "attacks": 5, "population": -1}, 
            {"country": "Djibouti", "attacks": 4, "population": -1}, 
            {"country": "Mauritania", "attacks": 13, "population": -1}, 
            {"country": "Togo", "attacks": 1, "population": -1}, 
            {"country": "Mali", "attacks": 533, "population": -1}, 
            {"country": "Lesotho", "attacks": 3, "population": -1}, 
            {"country": "Benin", "attacks": 1, "population": -1}, 
            {"country": "Niger", "attacks": 114, "population": -1}, 
            {"country": "Eritrea", "attacks": 7, "population": -1}, 
            {"country": "Cameroon", "attacks": 313, "population": -1}, 
            {"country": "Equatorial Guinea", "attacks": 1, "population": -1}, 
            {"country": "South Sudan", "attacks": 225, "population": -1}, 
            {"country": "Burkina Faso", "attacks": 49, "population": -1}, 
            {"country": "Ghana", "attacks": 2, "population": -1}, 
            {"country": "Gabon", "attacks": 4, "population": -1}
        ],
        "Middle East & North Africa": [
            {"country": "Turkey", "attacks": 1803, "population": -1}, 
            {"country": "Algeria", "attacks": 1350, "population": -1}, 
            {"country": "Lebanon", "attacks": 609, "population": -1}, 
            {"country": "Yemen", "attacks": 3240, "population": -1}, 
            {"country": "Iraq", "attacks": 24475, "population": -1}, 
            {"country": "Iran", "attacks": 154, "population": -1}, 
            {"country": "Israel", "attacks": 1173, "population": -1}, 
            {"country": "West Bank and Gaza Strip", "attacks": 1287, "population": -1}, 
            {"country": "Tunisia", "attacks": 97, "population": -1}, 
            {"country": "Saudi Arabia", "attacks": 352, "population": -1}, 
            {"country": "Qatar", "attacks": 4, "population": -1}, 
            {"country": "Jordan", "attacks": 40, "population": -1}, 
            {"country": "Kuwait", "attacks": 12, "population": -1},
            {"country": "International", "attacks": 1, "population": -1}, 
            {"country": "Bahrain", "attacks": 168, "population": -1}, 
            {"country": "Morocco", "attacks": 13, "population": -1}, 
            {"country": "Syria", "attacks": 2055, "population": -1}, 
            {"country": "Egypt", "attacks": 2004, "population": -1}, 
            {"country": "Libya", "attacks": 2235, "population": -1}, 
            {"country": "Western Sahara", "attacks": 1, "population": -1}, 
            {"country": "United Arab Emirates", "attacks": 5, "population": -1}
        ],
        "Australasia & Oceania": [
            { "country": "Fiji", "attacks": 5, "population": 919_019 }, 
            { "country": "Solomon Islands", "attacks": 3, "population": 643_634 }, 
            { "country": "Australia", "attacks": 46, "population": 24_590_000}, 
            { "country": "New Zealand", "attacks": 11, "population": 4_814_000 }, 
            { "country": "Papua New Guinea", "attacks": 10, "population": 9_115_000}
        ],
        "South Asia": [
            { "country": "India", "attacks": 8918, "population": 1_354_000_000 }, 
            { "country": "Bangladesh", "attacks": 1079, "population": 161_800_000 }, 
            { "country": "Sri Lanka", "attacks": 858, "population": 21_440_000 }, 
            { "country": "Nepal", "attacks": 1172, "population": 28_180_000}, 
            { "country": "Pakistan", "attacks": 12551, "population": 216_400_000}, 
            { "country": "Afghanistan", "attacks": 12607, "population": 35_640_000}, 
            { "country": "Maldives", "attacks": 21, "population": 521_457 }, 
            { "country": "Bhutan", "attacks": 6, "population": 756_121 }
        ],
        "Central Asia": [
            { "country": "Armenia", "attacks": 11, "population": 2_852_000 }, 
            {"country": "Georgia", "attacks": 112, "population": -1}, 
            { "country": "Tajikistan", "attacks": 29, "population": 8_926_000}, 
            { "country": "Azerbaijan", "attacks": 18, "population": 9_854_000 }, 
            { "country": "Kyrgyzstan", "attacks": 27, "population": 6_198_000 }, 
            { "country": "Kazakhstan", "attacks": 19, "population": 18_040_000 }, 
            { "country": "Turkmenistan", "attacks": 2, "population": 5_968_000}, 
            { "country": "Uzbekistan", "attacks": 10, "population": 32_390_000 }
        ]
    }
}