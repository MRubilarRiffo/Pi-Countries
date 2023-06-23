const axios = require("axios");
const server = require("./src/server");
const { conn } = require('./src/db.js');
const PORT = 3001;

conn.sync({ force: true })
	.then(async () => {
		const response = await axios.get('http://localhost:5000/countries');

		const countriesData = response.data.map(country => {
			return {
				id: country.cca3,
				name: country.name.common,
				flag: country.flags.svg,
				continent: country.continents[0],
				capital: country.capital,
				subregion: country.subregion,
				area: country.area,
				population: country.population
			};
		});

		await conn.models.Country.bulkCreate(countriesData);

	})
	.then(async () => {
		const activities = [
			{
				name: "Playa Blanca",
				difficulty: 1,
				duration: 5,
				season: "Verano"
			},
			{
				name: "Nevados de Chillán",
				difficulty: 3,
				duration: 8,
				season: "Invierno"
			}
		];

		const selectedCountry = await conn.models.Country.findByPk("CHL");

		const createdActivity = await conn.models.Activity.bulkCreate(activities);

		await selectedCountry.addActivity(createdActivity);

	})
	.then(() => {
		server.listen(PORT, () => {
			console.log(`Server listening on port ${PORT}`);
		});
	})
	.catch(error => console.error(error));