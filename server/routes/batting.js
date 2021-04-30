/* File for all routes around batting statistics */
let express = require('express'),
    router = express.Router(),
    pool = require("../DB.js");

/*
    Top career run-scorers
    Firstly we'll do this as a query and then we'll use a procedure
 */
router.get("/highestCareerRuns/:count", async function(req, res){

    try {
        const { count } = req.params;
        const q = `SELECT * FROM summary.battingseason WHERE year IS NULL ORDER BY Runs DESC LIMIT ${count}`;
        const todos = await pool.query(q);
        res.json(todos);
        console.log("Retrieved from summary.battingseason")

    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;