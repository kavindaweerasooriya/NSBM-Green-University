const { Sequelize, DataTypes } = require('sequelize');


module.exports = (sequelizeconn)=>{
    return Conn.define("Comment",{
        CommentID:{
            type: DataTypes.STRING,
            primaryKey:true
        },
        Comment :{
            type: DataTypes.STRING,
        },
    })
}



