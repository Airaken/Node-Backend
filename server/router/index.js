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
        return res.status(200).json({
            ok: true,
            bienes
        });

    })
});

app.get('/ciudad', (req, res) => {
    fs.readFile(url, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        let bienes = JSON.parse(data);
        let ciudades = [];
        bienes.forEach(element => {
            ciudades.push(element.Ciudad);
        });
        ciudades = [...new Set(ciudades)];
        return res.status(200).json({
            ok: true,
            ciudades
        })
    })
});

app.get('/tipo', (req, res) => {
    fs.readFile(url, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        let bienes = JSON.parse(data);
        let tipos = [];
        bienes.forEach(element => {
            tipos.push(element.Tipo);
        });
        tipos = [...new Set(tipos)];
        return res.status(200).json({
            ok: true,
            tipos
        })
    })
});

module.exports = app;