"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.newRecentMistakesFirstSorter = void 0;
var newRecentMistakesFirstSorter = /** @class */ (function () {
    function newRecentMistakesFirstSorter() {
    }
    newRecentMistakesFirstSorter.prototype.organize = function (cards) {
        var incorrect = [];
        var correct = [];
        for (var _i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
            var card = cards_1[_i];
            if (!card.wasCorrectLastRound()) {
                incorrect.push(card);
            }
            else {
                correct.push(card);
            }
        }
        return __spreadArray(__spreadArray([], incorrect, true), correct, true);
    };
    return newRecentMistakesFirstSorter;
}());
exports.newRecentMistakesFirstSorter = newRecentMistakesFirstSorter;
