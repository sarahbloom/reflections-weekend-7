const router = require('express').Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res)=>{
    const newReflection = req.body;
    let queryText = `INSERT INTO "reflection"("topic", "description") VALUES($1, $2);`;
    pool.query(queryText, [newReflection.topic, newReflection.description])
    .then((response)=>{
        res.sendStatus(201);
    }).catch((err)=>{
        console.log('error in POSTING reflections', err);
        res.sendStatus(500);
    })
})

module.exports = router;