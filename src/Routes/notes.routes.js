const { Router} = require('express');

const NotesController = require('../Controllers/NotesController');

const notesRoutes = Router();

const notesController = new NotesController();

notesRoutes.get('/', notesController.index);
notesRoutes.get('/:id', notesController.show);
notesRoutes.delete('/:id', notesController.delete);
notesRoutes.post('/:user_id', notesController.create);




module.exports = notesRoutes;