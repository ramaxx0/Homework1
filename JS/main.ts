import { newRecentMistakesFirstSorter } from "./newRecentMistakesFirstSorter";

const cards = [
    { wasCorrectLastRound: () => true },
    { wasCorrectLastRound: () => false },
    { wasCorrectLastRound: () => true },
    { wasCorrectLastRound: () => false }
];

const sorter = new newRecentMistakesFirstSorter();
const result = sorter.organize(cards);

console.log(result.map(c => c.wasCorrectLastRound()));
