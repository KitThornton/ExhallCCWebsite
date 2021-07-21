/* File for all routes around players and non-stat related queries */
var express = require('express'),
    router = express.Router(),
    pool = require("../DB.js");

/*
    Access the player details table and return all
    Number of seasons played
*/
router.get("/details", async function(req, res){

    try {
        const q = `SELECT D.playerid, D.playername, COUNT(DISTINCT(B.year)) AS Seasons, SUM(B.Matches) AS Matches FROM players.details D
    INNER JOIN players.batting B ON B.playerid = D.playerid AND Year IS NOT NULL
    GROUP BY D.playerid, D.playername`;
      const todos = await pool.query(q)
      res.json(todos);
      console.log("Retrieved all items from players.details")

    } catch (err) {
      console.error(err.message);
    }
  });

/*
    Access the player details table and return the details for that player id
*/
router.get("/details/:id", async function(req, res){

    try {
        const { id } = req.params;
        const q = `SELECT * FROM players.details WHERE playerid = ${id}`;
        const todos = await pool.query(q)
        res.json(todos);
        console.log("Retrieved all items from players.details")

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Return the data for the player profile card
*/
router.get("/profile/:id", async function(req, res){

    try {
        const { id } = req.params;
        const q = `SELECT D.playerid, B.matches, B.runs, BO.wickets, F.catches
                   FROM players.details D
                        INNER JOIN players.batting B ON D.playerid = B.playerid AND B.year IS NULL
                        INNER JOIN players.bowling BO ON D.playerid = BO.playerid AND BO.year IS NULL
                        INNER JOIN players.fielding F ON D.playerid = F.playerid AND F.year IS NULL
                   WHERE D.playerid = ${id}
                   GROUP BY D.playerid, B.matches, B.year, B.runs, BO.wickets, F.catches`;

        const todos = await pool.query(q)
        res.json(todos);

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Return the debut and  for the player profile card
*/
router.get("/debut/:id", async function(req, res){

    try {
        const { id } = req.params;
        const q = `SELECT  D.playerid, MIN(B.year) AS Debut, COUNT(DISTINCT(B.year)) AS Seasons
                   FROM players.details D
                        INNER JOIN players.batting B ON D.playerid = B.playerid
                   WHERE  D.playerid = ${id}
                   GROUP BY D.playerid`;

        const todos = await pool.query(q)
        res.json(todos);

    } catch (err) {
        console.error(err.message);
    }
});

/*
    Return the key stats by playerid for the profile page
*/
router.get("/keystats/:id", async function(req, res){

    try {
        const { id } = req.params;
        const q = `SELECT BA.runs AS battingruns, * FROM players.details D
                        INNER JOIN players.batting BA ON D.playerid = BA.playerid
                        INNER JOIN players.bowling BO ON D.playerid = BO.playerid
                        INNER JOIN players.fielding F ON D.playerid = F.playerid
                   WHERE  D.playerid = ${id}`;

        const todos = await pool.query(q)
        res.json(todos);

    } catch (err) {
        console.error(err.message);
    }
});






/* Further work:
    -> Return trophies, oldest and youngest etc.
 */

module.exports = router;