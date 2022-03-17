"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const pet_1 = require("../models/pet");
const search = (req, res) => {
    //codigo para pegar oque usuario digitou através da url
    let query = req.query.q;
    let list = pet_1.Pet.getFromName(query);
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: false,
            fish: false,
        },
        list: list
    });
};
exports.search = search;
