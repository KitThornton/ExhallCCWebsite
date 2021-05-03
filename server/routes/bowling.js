/* File for all routes around bowling statistics */
let express = require('express'),
    router = express.Router(),
    pool = require("../DB.js");

/*
    Top career wicket-takers
    Firstly we'll do this as a query and then we'll use a procedure
 */
router.get("/CareerWickets/:count", async function(req, res){

    try {
        const { count } = req.params;
        const q = `SELECT * FROM summary.bowlingseason WHERE year IS NULL ORDER BY Wickets DESC LIMIT ${count}`;
        const todos = await pool.query(q);
        res.json(todos);
        console.log("Retrieved from summary.bowlingseason")

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Career best figures
    Again we will replace this with a procedure, need to return the player name as well I assume
 */
router.get("/CareerBestFigures/:count", async function(req, res){

    try {
        const { count } = req.params;
        const q = `SELECT * FROM summary.bowlingseason
                   WHERE year IS NULL AND bestfigswickets IS NOT NULL AND bestfigsRuns IS NOT NULL
                   ORDER BY bestfigswickets DESC, bestfigsruns ASC LIMIT ${count}`;
        const todos = await pool.query(q);
        res.json(todos);
        console.log("Retrieved from summary.bowlingseason")

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Lowest bowling average by season
    parameters are season and count -> into function/procedure
 */
router.get("/SeasonAverage/:season/:count", async function(req, res){

    try {
        const { season, count } = req.params;
        const q = `SELECT * FROM summary.bowlingseason WHERE year = ${season} AND Average IS NOT NULL ORDER BY Average LIMIT ${count}`;
        console.log(q);
        const todos = await pool.query(q);
        res.json(todos);
        console.log("Retrieved from summary.bowlingseason")

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Get career batting stats by player id
 */
router.get("/career/:id", async function(req, res){

    try {
        // If it can be parsed then go by id, otherwise name
        const { id } = req.params;

        let r = parseInt(id) || id;

        let q;
        if (r === parseInt(r, 10)) {
            q = `SELECT * FROM summary.bowlingseason WHERE year IS NULL AND playerid = ${r}`;
        } else {
            q = `SELECT * FROM summary.bowlingseason B 
            INNER JOIN Players.Details D ON D.PlayerId = B.PlayerId 
            WHERE year IS NULL AND D.playername LIKE '${r.toString()}'`;
        }

        const todos = await pool.query(q);
        res.json(todos);
        console.log(`Retrieved career stats from summary.bowlingseason for player ${r}`)

    } catch (err) {
        console.error(err.message);
    }
});

module.exports = router;