const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
  app.get('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      } 
    });
  });

  app.get('/notes_all', (req, res) => {
    db.collection('notes').find({}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.get('/notes_working', (req, res) => {
    db.collection('notes').find({working: "true"}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.get('/notes_done', (req, res) => {
    db.collection('notes').find({working: "done"}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.get('/notes_todo', (req, res) => {
    db.collection('notes').find({working: "false"}).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

  app.post('/notes', (req, res) => {
      if(req.body.title === '') {
        return false;
      }
      const note = {
        text: req.body.body,
        title: req.body.title,
        working : req.body.working ? req.body.working : "false",
      };
      db.collection('notes').insert(note, (err, result) => {
        if (err) { 
          res.send({ 'error': 'An error has occurred' }); 
        } else {
          res.send(result.ops[0]);
        }
      });
    });

  app.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    db.collection('notes').remove(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send('Note ' + id + ' deleted!');
      } 
    });
  });

  app.put('/notes/:id', (req, res) => {
    const id = req.params.id;
    const details = { '_id': new ObjectID(id) };
    const note = {
      text: req.body.body,
      title: req.body.title,
      working : req.body.working ? req.body.working : "false",
    };
    db.collection('notes').update(details, note, (err, result) => {
      if (err) {
          res.send({'error':'An error has occurred'});
      } else {
          res.send(note);
      } 
    });
  });
};