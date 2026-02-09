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

        System.out.println("Before sorting:");
        for (Card c : cards) {
            System.out.println(c.wasCorrectLastRound());
        }

        CardOrganizer sorter = new RecentMistakesFirstSorter();
        List<Card> sorted = sorter.organize(cards);

        System.out.println("After sorting:");
        for (Card c : sorted) {
            System.out.println(c.wasCorrectLastRound());
        }
    }
}
