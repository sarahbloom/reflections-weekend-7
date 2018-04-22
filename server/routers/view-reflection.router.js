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
})//end GET 

//DELETE reflection from databse
router.delete('/:id', (req, res)=>{
    const reflectionId = req.params.id;
    let queryText = `DELETE FROM "reflection" WHERE "id" = $1;`;
    pool.query(queryText,[reflectionId])
        .then((result) => {
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error DELETING :', err);
            res.sendStatus(500);
        })
})//end DELETE

module.exports = router;