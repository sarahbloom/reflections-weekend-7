const router = require('express').Router();
const pool = require('../modules/pool.js');

//GET reflections currently in Database
router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM "reflection" ORDER BY  "date" DESC;`;
    pool.query(queryText).then((response)=>{
        res.send(response.rows)
    }).catch((err)=>{
        console.log('error in GET /view-reflections:',err);
        res.sendStatus(500);
    })
})

module.exports = router;