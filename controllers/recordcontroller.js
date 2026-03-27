const Record = require('../models/record.js');

class RecordController {
    getAll(req, res) {
        const records = Record.getAll();
        res.render('home', { records });
    }

    getAdd(req, res) {
        const records = Record.getAll();
        res.render('add', { records });
    }

    getUpdate(req, res) {
        const records = Record.getAll();
        const selected = Record.getById(req.query.id);
        res.render('update', { records, selected });
    }

    postAdd(req, res) {
        Record.create(req.body);
        res.redirect('/');
    }

    postUpdate(req, res) {
        Record.update(req.body.id, req.body);
        res.redirect('/');
    }

    postDelete(req, res) {
        Record.delete(req.body.id);
        res.redirect('/');
    }
}

module.exports = new RecordController();