import {useState, useEffect} from 'react'
import { Header } from './Header'
import { QuestionAnswerCard } from './QuestionAnswerCard'
import { QuestionAnswerForm } from './QuestionAnswerForm'
import type { Card } from './types'
import { saveCards } from './utils'
import './Header.css'
import './QuestionAnswerCard.css'
import './QuestionAnswerForm.css'


export default function App() {
  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    saveCards(cards);
  }, [cards]);

  return (
    <div>
      <Header />
      <main className="main">
          <div className="layout">
            <QuestionAnswerCard />
            <QuestionAnswerForm onAddCard={(newCard) => setCards([...cards, newCard])}/>
          </div>
      </main>
    </div>
  )
}


