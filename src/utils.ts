import type { Card } from './types'

export const STORAGE_KEY = "question_answer_card";

export const defaultCard: Card[] = [{
    isInitialValue: true,
    id: 0,
    question: "Add your first question...",
    answer: "This is the answer!"
}]

export function loadCards(): Card[] {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if(saved) {
            return JSON.parse(saved);
        }
    } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
    }
    return defaultCard;
}

export function saveCards(cards: Card[]) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cards));
        console.log("successful");
    } catch (error) {
        console.log("Failed to save question and answer cards data:", error);
    }
}

