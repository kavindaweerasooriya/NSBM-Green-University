const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelizeconn)=>{
    return sequelizeconn.define("Post",{
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



