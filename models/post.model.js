const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelizeconn)=>{
    return Conn.define("Post",{
        PostId:{
            type: DataTypes.STRING,
            primaryKey:true
        },
        PostTitle :{
            type: DataTypes.STRING,
        },
        PostDescription :{
            type: DataTypes.STRING
        }
    })
}



