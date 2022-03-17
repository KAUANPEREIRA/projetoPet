"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fishes = exports.cats = exports.dogs = exports.home = void 0;
const pet_1 = require("../models/pet");
const home = (req, res) => {
    let list = pet_1.Pet.getAll();
    res.render('pages/page', {
        menu: {
            all: true,
            dog: false,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Todos os animais',
            background: 'allanimals.jpg'
        },
        list: list
    });
    //esse comando esta renderizando e jogando a home para minha rota     
};
exports.home = home;
const dogs = (req, res) => {
    let list = pet_1.Pet.getFromType('dog');
    res.render('pages/page', {
        menu: {
            all: false,
            dog: true,
            cat: false,
            fish: false
        },
        banner: {
            title: 'Cachorros',
            background: 'banner_dog.jpg'
        },
        list: list
    });
};
exports.dogs = dogs;
const cats = (req, res) => {
    let list = pet_1.Pet.getFromType('cat');
    //banner:{} é objeto que esta sendo renderizado para exibir dados dinamicos na tela
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: true,
            fish: false
        },
        banner: {
            title: 'Gatos',
            background: 'banner_cat.jpg'
        },
        list: list
    });
};
exports.cats = cats;
const fishes = (req, res) => {
    let list = pet_1.Pet.getFromType('fish'); //função criada no model só sendo utilizada no controller
    //a pagina que esta sendo chamada e a mesma oque esta mudando 
    //é oque esta renderizado na rota
    res.render('pages/page', {
        menu: {
            all: false,
            dog: false,
            cat: false,
            fish: true
        },
        banner: {
            title: 'Peixes',
            background: 'banner_fish.jpg'
        },
        list: list
    });
};
exports.fishes = fishes;
