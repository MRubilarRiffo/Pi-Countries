const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
	sequelize.define("Activity", {
		id: {
			type: DataTypes.STRING, //cca3
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		difficulty: {
			type: DataTypes.INTEGER
		},
		duration: {
			type: DataTypes.INTEGER
		},
		season: {
			type: DataTypes.ENUM ('Verano', 'Otoño', 'Invierno', 'Primavera')
		}
	});
};
