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

//toggle Bookmark true/false in SQL
router.put('/:id', (req, res)=>{
    // console.log('put request', req.body)
    let reflectionToUpdate = req.body;
    let queryText = `UPDATE "reflection" SET "bookmarked" = $1 WHERE "id" = $2;`;
    pool.query(queryText, [reflectionToUpdate.bookmarked, reflectionToUpdate.id])
        .then((result) => {
            console.log('PUT outcome', reflectionToUpdate);
            res.sendStatus(200);
        }).catch((err) => {
            console.log('error in PUT - updating bookmark:', err);
            res.sendStatus(500);
        })
})

module.exports = router;