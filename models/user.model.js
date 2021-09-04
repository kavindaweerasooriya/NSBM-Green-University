const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelizeconn)=>{
    return sequelizeconn.define("User",{
        UserID:{
            type: DataTypes.STRING,
            primaryKey:true
        },
        Email :{
            type: DataTypes.STRING,
        },
        FirstName :{
            type : DataTypes.STRING,
        },
        LastName :{
            type : DataTypes.STRING,
        },
        Password :{
            type: DataTypes.STRING
        }
    })
}



