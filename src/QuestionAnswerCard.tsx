import {useState} from 'react'
import type { Card } from './types'

interface QuestionAnswerCardProps {
    card: Card;
    index: number;
    total: number;
    onNext: () => void;
    onPrev: () => void;
}

export function QuestionAnswerCard({card, index, total, onNext, onPrev}: QuestionAnswerCardProps ) {

    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <div className="card-container">
            <div className="cards-header">
                <p className="card-count">Card {card.isInitialValue ? index : index + 1} of {card.isInitialValue ? total - 1 : total}</p>
                <p className="card-status">Study Mode</p>
            </div>
            <div className={`card ${isFlipped ? 'flipped' : ''}` } onClick={() => setIsFlipped(!isFlipped)}>
                <p className="sub-label">{ isFlipped ? 'Answer' : 'Question' }</p>
                <h2 className="question">{ isFlipped ? card.answer : card.question}</h2>
                <p className="inside-card-instruction">{isFlipped ? 'Click to flip back' : 'Click to reveal the answer'}</p>
            </div>
            <div className="prev-next-btn">
                <button className="prev-btn btn" onClick={onPrev} disabled={index === 0}>Previous</button>
                <button className="next-btn btn" onClick={onNext} disabled={index === total - 1}>Next</button>
            </div>
        </div>
    );
}