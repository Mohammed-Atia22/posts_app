const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    database:process.env.DB_NAME,
    password:process.env.DB_PASSWORD
});

// let sql = 'SELECT * FROM posts;';

// pool.execute(sql,function(err,result){
//     if(err) throw err;
//     //console.log(result);
//     result.forEach((res)=>{
//         console.log(res.title);
//     });
// });

// async function fetchdata() {
//     try{
//         const [rows,fields] = await pool.query('SELECT * FROM posts;');
//         console.log(rows);
//     } catch(error){
//         console.error('error executing query',error);
//     }
// }
// fetchdata();           i have to call it after export operation


module.exports = pool.promise();