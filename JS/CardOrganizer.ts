import { Card } from "./Card";

export interface CardOrganizer {
    organize(cards: any[]): any[];
}
