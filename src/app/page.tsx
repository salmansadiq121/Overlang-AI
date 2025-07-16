import { Metadata } from 'next'
import { QuizEngine } from '@/components/quiz/QuizEngine'

export const metadata: Metadata = {
  title: 'Health Assessment Quiz',
  description: 'Take our comprehensive health assessment to receive personalized recommendations.',
}

export default function HomePage() {
  return (
    <main className="quiz-container">
      <QuizEngine />
    </main>
  )
}