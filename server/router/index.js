const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const url = path.resolve(__dirname, '../data/data.json');

app.get('/todos', (req, res) => {
    fs.readFile(url, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        let bienes = JSON.parse(data);
        return res.status(200).json({
            ok: true,
            bienes
        });

    })
});

app.get('/ciudades', (req, res) => {
    fs.readFile(url, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        let bienes = JSON.parse(data);
        bienes.filter()
        return res.status(200).json({
            ok: true,
            bienes
        });

    })
});

module.exports = app;