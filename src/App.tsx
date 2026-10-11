import {useState, useEffect} from 'react'
import { Header } from './Header'
import { QuestionAnswerCard } from './QuestionAnswerCard'
import { QuestionAnswerForm } from './QuestionAnswerForm'
import type { Card } from './types'
import { saveCards, loadCards } from './utils'
import './Header.css'
import './QuestionAnswerCard.css'
import './QuestionAnswerForm.css'


export default function App() {
  const [cards, setCards] = useState<Card[]>(loadCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };
  
  useEffect(() => {
    saveCards(cards);
  }, [cards]);

  return (
    <div>
      <Header />
      <main className="main">
          <div className="layout">
            <QuestionAnswerCard 
              key={cards[currentIndex].id} 
              card={cards[currentIndex]} 
              index={currentIndex} 
              total={cards.length}
              onNext={handleNext}
              onPrev={handlePrev}
            />
            <QuestionAnswerForm onAddCard={(newCard) => {
              const activeCards = cards.filter(card => card.isInitialValue === false);
              setCards([...activeCards, newCard]);
              setCurrentIndex(cards.length - 1);
            }}/>
          </div>
      </main>
    </div>
  )
}


