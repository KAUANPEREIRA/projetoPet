"use strict";
//ROUTER PARA AS ROTAS
//req res REQUEST RESPONSE O RESPONSE SE TRATA DA RESPOSTA DA REQUISIÇÃO
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//este tipo de import abaixo serve para importar todas rotas criadas no arquivo pageController
const pageController = __importStar(require("../controllers/pageController"));
const searchController = __importStar(require("../controllers/searchController"));
//criando rotas através do mvc de maneira organizada
const router = (0, express_1.Router)();
router.get('/', pageController.home); //rota para home criada no pageController
router.get('/dogs', pageController.dogs); //rotaa criada para pagina de cachorros
router.get('/cats', pageController.cats); //rota criada para pagina de gatos
router.get('/fishes', pageController.fishes); //rota criada oara pagina de peixes
router.get('/search', searchController.search); //rota criada para input de busca
exports.default = router;
