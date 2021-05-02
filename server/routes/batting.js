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

/*
    Top career high scores
    Again we will replace this with a procedure, need to return the player name as well I assume
 */
router.get("/highestCareerScores/:count", async function(req, res){

    try {
        const { count } = req.params;
        const q = `SELECT * FROM summary.battingseason WHERE year IS NULL ORDER BY Highscore DESC LIMIT ${count}`;
        const todos = await pool.query(q);
        res.json(todos);
        console.log("Retrieved from summary.battingseason")

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Highest average by season
    parameters are season and count -> into function/procedure
 */
router.get("/highestSeasonAverage/:season/:count", async function(req, res){

    try {
        const { season, count } = req.params;
        const q = `SELECT * FROM summary.battingseason WHERE year = ${season} AND Average IS NOT NULL ORDER BY Average DESC LIMIT ${count}`;
        console.log(q);
        const todos = await pool.query(q);
        res.json(todos);
        console.log("Retrieved from summary.battingseason")

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Get career batting stats by player id
 */
router.get("/career/:id", async function(req, res){

    try {
        const { id } = req.params;
        const q = `SELECT * FROM summary.battingseason WHERE year IS NULL AND playerid = ${id}`;
        console.log(q);
        const todos = await pool.query(q);
        res.json(todos);
        console.log("Retrieved from summary.battingseason")

    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;