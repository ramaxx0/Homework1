import { Card } from "./Card";
import { CardOrganizer } from "./CardOrganizer";

export class newRecentMistakesFirstSorter implements CardOrganizer {

    organize(cards: Card[]): Card[] {
        const incorrect: Card[] = [];
        const correct: Card[] = [];

        for (const card of cards) {
            if (!card.wasCorrectLastRound()) {
                incorrect.push(card);
            } else {
                correct.push(card);
            }
        }

        return [...incorrect, ...correct];
    }
}
