import { newRecentMistakesFirstSorter } from "./newRecentMistakesFirstSorter";

const cards = [
    { wasCorrectLastRound: () => true },
    { wasCorrectLastRound: () => false },
    { wasCorrectLastRound: () => true },
    { wasCorrectLastRound: () => false }
];

console.log("Before sorting:");
console.log(cards.map(c => c.wasCorrectLastRound()));

const sorter = new newRecentMistakesFirstSorter();
const result = sorter.organize(cards);

console.log("After sorting:");
console.log(result.map(c => c.wasCorrectLastRound()));
