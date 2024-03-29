var getCountryToRegionData = () => {
return {
"Dominican Republic" : "Central America & Caribbean","Guatemala" : "Central America & Caribbean","Nicaragua" : "Central America & Caribbean",
"Costa Rica" : "Central America & Caribbean","Panama" : "Central America & Caribbean","El Salvador" : "Central America & Caribbean",
"Haiti" : "Central America & Caribbean","Honduras" : "Central America & Caribbean","Jamaica" : "Central America & Caribbean",
"Bahamas" : "Central America & Caribbean","Barbados" : "Central America & Caribbean","Trinidad and Tobago" : "Central America & Caribbean",
"Grenada" : "Central America & Caribbean","Belize" : "Central America & Caribbean","Guadeloupe" : "Central America & Caribbean",
"Martinique" : "Central America & Caribbean","Dominica" : "Central America & Caribbean","Cuba" : "Central America & Caribbean",
"Antigua and Barbuda" : "Central America & Caribbean","St. Kitts and Nevis" : "Central America & Caribbean","St. Lucia" : "Central America & Caribbean",
"Mexico" : "North America","USA" : "North America","Canada" : "North America","Philippines" : "Southeast Asia",
"Cambodia" : "Southeast Asia","South Vietnam" : "Southeast Asia", "Thailand" : "Southeast Asia","Myanmar" : "Southeast Asia",
"Malaysia" : "Southeast Asia","Singapore" : "Southeast Asia", "Indonesia" : "Southeast Asia","Laos" : "Southeast Asia", "Vietnam" : "Southeast Asia",
"East Timor" : "Southeast Asia","Greece" : "Western Europe","Italy" : "Western Europe","West Germany (FRG)" : "Western Europe",
"Switzerland": "Western Europe", "Spain": "Western Europe", "Ireland": "Western Europe", "United Kingdom": "Western Europe", "England": "Western Europe",
"Netherlands" : "Western Europe","Belgium" : "Western Europe","Sweden" : "Western Europe","Austria" : "Western Europe",
"France" : "Western Europe","Portugal" : "Western Europe", "Cyprus" : "Western Europe","Andorra" : "Western Europe", "Greenland" : "Western Europe",
"Malta" : "Western Europe","Denmark" : "Western Europe","Norway" : "Western Europe",    "Vatican City" : "Western Europe",
"Luxembourg" : "Western Europe", "Iceland" : "Western Europe", "Finland" : "Western Europe", "Germany" : "Western Europe", "Japan" : "East Asia",
"Taiwan" : "East Asia", "South Korea" : "East Asia", "Hong Kong" : "East Asia","China" : "East Asia", 
"North Korea" : "East Asia", "Macau" : "East Asia",
"Uruguay" : "South America","Venezuela" : "South America","Brazil" : "South America","Argentina" : "South America",
"Paraguay" : "South America","Colombia" : "South America","Bolivia" : "South America","Peru" : "South America","Chile" : "South America",
"Ecuador" : "South America","Guyana" : "South America","Suriname" : "South America", "French Guiana" : "South America",
"Falkland Islands" : "South America","East Germany (GDR)" : "Eastern Europe","Poland" : "Eastern Europe", "Czechoslovakia" : "Eastern Europe", 
"Yugoslavia" : "Eastern Europe","Soviet Union" : "Eastern Europe", "Albania" : "Eastern Europe", "Bulgaria" : "Eastern Europe", 
"Romania": "Eastern Europe", "Hungary": "Eastern Europe", "Croatia": "Eastern Europe", "Lithuania" : "Eastern Europe", "Ukraine" : "Eastern Europe",
"Moldova" : "Eastern Europe","Russia" : "Eastern Europe","Bosnia and Herzegovina" : "Eastern Europe","Latvia" : "Eastern Europe",
"Estonia" : "Eastern Europe","Slovak Republic" : "Eastern Europe","Macedonia" : "Eastern Europe","Belarus" : "Eastern Europe",
"Czech Republic" : "Eastern Europe","Slovenia" : "Eastern Europe","Kosovo" : "Eastern Europe","Montenegro" : "Eastern Europe",
"Serbia-Montenegro": "Eastern Europe","Republic of Serbia" : "Eastern Europe","Ethiopia" : "Sub-Saharan Africa","Zambia" : "Sub-Saharan Africa",
"Zaire" : "Sub-Saharan Africa", "People's Republic of the Congo" : "Sub-Saharan Africa","Sudan" : "Sub-Saharan Africa",
"Botswana" : "Sub-Saharan Africa","Chad" : "Sub-Saharan Africa","South Africa" : "Sub-Saharan Africa", "Kenya" : "Sub-Saharan Africa",
"Somalia" : "Sub-Saharan Africa","Tanzania" : "Sub-Saharan Africa","Namibia" : "Sub-Saharan Africa","Nigeria" : "Sub-Saharan Africa",
"Angola" : "Sub-Saharan Africa","Mauritania" : "Sub-Saharan Africa","Djibouti" : "Sub-Saharan Africa","Rhodesia" : "Sub-Saharan Africa",
"Mozambique" : "Sub-Saharan Africa","Uganda" : "Sub-Saharan Africa","Lesotho" : "Sub-Saharan Africa","Gabon" : "Sub-Saharan Africa",
"Senegal" : "Sub-Saharan Africa", "Zimbabwe" : "Sub-Saharan Africa", "Guinea" : "Sub-Saharan Africa",
"Central African Republic" : "Sub-Saharan Africa","Seychelles" : "Sub-Saharan Africa",
"Swaziland" : "Sub-Saharan Africa","Burkina Faso" : "Sub-Saharan Africa","Niger" : "Sub-Saharan Africa","Togo" : "Sub-Saharan Africa",
"Ghana" : "Sub-Saharan Africa","Liberia" : "Sub-Saharan Africa","Republic of the Congo" : "Sub-Saharan Africa","Mali" : "Sub-Saharan Africa",
"Rwanda" : "Sub-Saharan Africa","Sierra Leone" : "Sub-Saharan Africa", "Cameroon" : "Sub-Saharan Africa", "Madagascar" : "Sub-Saharan Africa",
"Burundi" : "Sub-Saharan Africa","Ivory Coast" : "Sub-Saharan Africa","Equatorial Guinea" : "Sub-Saharan Africa","Malawi" : "Sub-Saharan Africa",
"Comoros" : "Sub-Saharan Africa", "Benin" : "Sub-Saharan Africa", "Gambia" : "Sub-Saharan Africa","Eritrea" : "Sub-Saharan Africa",
"Democratic Republic of the Congo" : "Sub-Saharan Africa","Guinea-Bissau" : "Sub-Saharan Africa","South Sudan" : "Sub-Saharan Africa",
"Jordan" : "Middle East & North Africa","Egypt" : "Middle East & North Africa","Lebanon" : "Middle East & North Africa",
"Turkey" : "Middle East & North Africa","Iran" : "Middle East & North Africa","South Yemen" : "Middle East & North Africa",
"Israel" : "Middle East & North Africa","Kuwait" : "Middle East & North Africa", "West Bank and Gaza Strip" : "Middle East & North Africa",
"Algeria" : "Middle East & North Africa", "Morocco" : "Middle East & North Africa", "North Yemen" : "Middle East & North Africa",
"Syria" : "Middle East & North Africa","United Arab Emirates" : "Middle East & North Africa","Iraq" : "Middle East & North Africa",
"Saudi Arabia" : "Middle East & North Africa","Western Sahara" : "Middle East & North Africa", "Tunisia" : "Middle East & North Africa",
"Libya" : "Middle East & North Africa","Bahrain" : "Middle East & North Africa","Qatar" : "Middle East & North Africa", 
"Yemen" : "Middle East & North Africa","International" : "Middle East & North Africa","Australia" : "Australasia & Oceania",
"New Zealand" : "Australasia & Oceania", "New Hebrides" : "Australasia & Oceania","New Caledonia" : "Australasia & Oceania",
"Fiji" : "Australasia & Oceania","Papua New Guinea" : "Australasia & Oceania","Wallis and Futuna" : "Australasia & Oceania",
"French Polynesia" : "Australasia & Oceania","Vanuatu" : "Australasia & Oceania","Solomon Islands" : "Australasia & Oceania",
"Pakistan" : "South Asia","India" : "South Asia", "Afghanistan" : "South Asia", "Sri Lanka" : "South Asia","Bangladesh" : "South Asia", 
"Nepal" : "South Asia","Maldives" : "South Asia", "Mauritius" : "South Asia","Bhutan" : "South Asia", "Georgia" : "Central Asia",
"Azerbaijan" : "Central Asia","Armenia" : "Central Asia","Kazakhstan" : "Central Asia","Tajikistan" : "Central Asia","Uzbekistan" : "Central Asia",
"Kyrgyzstan": "Central Asia", "Turkmenistan": "Central Asia", "Mongolia": "East Asia", "Somaliland": "Sub-Saharan Africa", 
    "Guinea Bissau": "Western Africa", "Guinea Bissau": "Sub-Saharan Africa", "Oman" : "Middle East & North Africa"
}
}