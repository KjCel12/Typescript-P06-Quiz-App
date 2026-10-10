import {useState} from 'react'
import type { Card } from './types'


interface QuestionAnswerFormProps {
    onAddCard: (updated: Card) => void;
}

export function QuestionAnswerForm({onAddCard}: QuestionAnswerFormProps) {

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        if(!question.trim() || !answer.trim()) return;

        const newCard: Card = {
            id: Date.now(),
            question,
            answer,
        };

        onAddCard(newCard);

        setQuestion('');
        setAnswer('');
    };

    return (
        <div className="form-container">
            <div className="form-group">
                <h3 className="form-title">Add a new card</h3>
                <p className="form-instruction">Write a question and answer, then add it to your deck</p>
                <form >
                    <div className="form-input">
                        <label className="input-label" htmlFor="question">Question</label>
                        <textarea 
                        id="question" 
                        rows={3}
                        value={question}
                        onChange={(e) => setQuestion(e.target.value)}
                        >

                        </textarea>
                    </div>
                    <div className="form-input">
                        <label className="input-label" htmlFor="answer">Answer</label>
                        <textarea 
                        id="answer" 
                        rows={3}
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        >
                        </textarea>
                    </div>
                    <button className="add-btn btn" onClick={handleSubmit}>Add card</button>
                </form>
            </div>
        </div>
    );
}