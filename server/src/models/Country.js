const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('Country', {
		id: {
			type: DataTypes.STRING,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING
		},
		flag: {
			type: DataTypes.STRING
		},
		continent: {
			type: DataTypes.STRING
		},
		capital: {
			type: DataTypes.ARRAY(DataTypes.STRING)
		},
		subregion: {
			type: DataTypes.STRING
		},
		area: {
			type: DataTypes.FLOAT
		},
		population: {
			type: DataTypes.INTEGER
		}
	},
	{
		timestamps: false
	});
};