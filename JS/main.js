"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var newRecentMistakesFirstSorter_1 = require("./newRecentMistakesFirstSorter");
var cards = [
    { wasCorrectLastRound: function () { return true; } },
    { wasCorrectLastRound: function () { return false; } },
    { wasCorrectLastRound: function () { return true; } },
    { wasCorrectLastRound: function () { return false; } }
];
var sorter = new newRecentMistakesFirstSorter_1.newRecentMistakesFirstSorter();
var result = sorter.organize(cards);
console.log(result.map(function (c) { return c.wasCorrectLastRound(); }));
