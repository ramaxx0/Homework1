package JAVA;

import java.util.ArrayList;
import java.util.List;

public class RecentMistakesFirstSorter implements CardOrganizer {

    @Override
    public List<Card> organize(List<Card> cards) {

        List<Card> incorrectCards = new ArrayList<>();
        List<Card> correctCards = new ArrayList<>();

        // Single pass preserves original order (stable)
        for (Card card : cards) {
            if (!card.wasCorrectLastRound()) {
                incorrectCards.add(card);
            } else {
                correctCards.add(card);
            }
        }

        List<Card> result = new ArrayList<>();
        result.addAll(incorrectCards);
        result.addAll(correctCards);

        return result;
    }
}
