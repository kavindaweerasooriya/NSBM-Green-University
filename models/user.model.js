const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelizeconn)=>{
    return Conn.define("User",{
        UserID:{
            type: DataTypes.STRING,
            primaryKey:true
        },
        Email :{
            type: DataTypes.STRING,
        },
        Password :{
            type: DataTypes.STRING
        }
    })
}



