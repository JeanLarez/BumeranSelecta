const { Model, DataTypes } = require("sequelize");
const db = require("../config/db");


class Recruiters extends Model {

}
//tipos de datos text y array
Recruiters.init(
    {
        // Model attributes are defined here
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: true
        },
        country: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description_rec: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        area_rec: {
            type: DataTypes.STRING,
            allowNull: true,
            // get() {
            //     return this.getDataValue('area_rec').split(',')
            // }
        },
        rating: {
            type: DataTypes.DECIMAL(10, 1),
            allowNull: true,
            defaultValue: 1,
            validate: {
                max: 10,
                min: 1
            }
        },
        active_searchs: {
            type: DataTypes.STRING,
            allowNull: true,
            // get() {
            //     return this.getDataValue('active_searchs').split(',')
            // }
        },
        status_rec: {
            type: DataTypes.BOOLEAN,
            allowNull: true
        }
    },
    {
        // Other model options go here
        sequelize: db, // We need to pass the connection instance
        modelName: "recruiters", // We need to choose the model name
    }
);


// the defined model is the class itself
module.exports = Recruiters;