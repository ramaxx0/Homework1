package JAVA;

import java.util.List;

public class Main {

    public static void main(String[] args) {

        List<Card> cards = List.of(
            () -> true,
            () -> false,
            () -> true,
            () -> false
        );

        CardOrganizer sorter = new RecentMistakesFirstSorter();
        List<Card> sorted = sorter.organize(cards);

        for (Card c : sorted) {
            System.out.println(c.wasCorrectLastRound());
        }
    }
}
