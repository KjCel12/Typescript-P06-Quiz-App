import type { Card } from './types'

export function saveCards(cards: Card[]) {
    try {
        localStorage.setItem("QUESTION_ANSWER_CARDS", JSON.stringify(cards))
    } catch (error) {
        console.log("Failed to save question and answer cards data:", error);
    }
}