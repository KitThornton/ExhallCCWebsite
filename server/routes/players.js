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

/* Further work:
    -> Return trophies, oldest and youngest etc.
 */

module.exports = router;