

export function QuestionAnswerCard() {
    return (
        <div className="card-container">
            <div className="cards-header">
                <p className="card-count">Card 1 of 3</p>
                <p className="card-status">Study Mode</p>
            </div>
            <div className="card">
                <p className="sub-label">Question</p>
                <h2 className="question">What the heck?</h2>
                <p className="inside-card-instruction">Click to reveal the answer</p>
            </div>
            <div className="prev-next-btn">
                <button className="prev-btn btn">Previous</button>
                <button className="next-btn btn">Next</button>
            </div>
        </div>
    );
}