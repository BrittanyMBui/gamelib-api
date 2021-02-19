const db = require('../models');

const index = (req, res) => {
  // Query DB for all games
  db.Game.find({}, (err, allGames) => {
    if (err) return console.log(err);
    
    // Send back data as JSON object
    res.json(allGames);
  });
};

const show = (req, res) => {
  // Get Game from db by ID
  db.Game.findById(req.params.id, (err, foundGame) => {
    if (err) return console.log(err);

    // Send back data to client as JSON object
    res.json(foundGame);
  });
};

const create = (req, res) => {
  // Query DB to create a new Game
  // console.log(req.body);
  db.Game.create(req.body, (err, newGame) => {
    if (err) return console.log(err);

    res.json(newGame);
  });
};

const update = (req, res) => {
  // console.log('Game to update ID = ', req.params.id);
  // console.log('Data to update game = ', req.body);

  db.Game.findByIdAndUpdate(
    req.params.id,
    req.body,
    {new: true},
    (err, updatedGame) => {
      if (err) return console.log(err);

      res.json(updatedGame);
    }
  )
};

const destroy = (req, res) => {
  // console.log('Delete', req.params.id);
  db.Game.findByIdAndDelete(req.params.id, (err, deletedGame) => {
    if (err) return console.log(err);

    res.json(deletedGame);
  })
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy,
};