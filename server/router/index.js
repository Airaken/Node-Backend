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

app.get('/buscar/:ciudad&:tipo&:precio', (req, res) => {
    let ciudad = req.params.ciudad;
    let tipo = req.params.tipo;
    let precio = req.params.precio.split(';');
    console.log(ciudad, tipo, precio);
    fs.readFile(url, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            });
        }
        let bienes = JSON.parse(data);
        bienes = bienes.filter(element => element.Ciudad == ciudad);
        bienes = bienes.filter(element => element.Tipo == tipo);
        bienes = bienes.filter(element => parseFloat(element.Precio.replace('$', '').replace(',', '')) >= parseFloat(precio[0]));
        bienes = bienes.filter(element => parseFloat(element.Precio.replace('$', '').replace(',', '')) <= parseFloat(precio[1]));
        return res.status(200).json({
            ok: true,
            bienes
        });

    })
});

app.get('/select', (req, res) => {
    fs.readFile(url, (err, data) => {
        if (err) {
            return res.status(500).json({
                ok: false,
                err
            })
        }
        let bienes = JSON.parse(data);
        let ciudades = [];
        let tipos = [];
        bienes.forEach(element => {
            ciudades.push(element.Ciudad);
            tipos.push(element.Tipo);
        });
        ciudades = [...new Set(ciudades)];
        tipos = [...new Set(tipos)]
        return res.status(200).json({
            ok: true,
            ciudades,
            tipos
        })
    })
});

module.exports = app;