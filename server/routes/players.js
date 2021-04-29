/* File for all routes around players and non-stat related queries */
var express = require('express'),
    router = express.Router(),
    pool = require("../DB.js");

/* Access the player details table and return all */
router.get("/details", async function(req, res){

    try {
      const todos = await pool.query("SELECT * FROM players.details")
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