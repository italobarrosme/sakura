'use client'

import { useGenerateCard } from '@/modules/GenerateCard/store'
import { Button } from '@/shared/components/Button'
import { useRouter } from 'next/navigation'
import { Card } from '@/modules/ConsultCard/components/Card'
import { useEffect } from 'react'

export const TemplateConsultCard = () => {
  const { push } = useRouter()
  const { card: CardData } = useGenerateCard()

  useEffect(() => {
    if (!CardData) {
      push('/generate-card')
    }
  }, [CardData, push])

  return (
    CardData && (
      <div className="flex flex-col items-center justify-center gap-8 py-8">
        <Button onClick={() => push('/generate-card')}>
          Gerar uma nova carta
        </Button>
        <Card
          category={CardData.category}
          difficulty={CardData.difficulty}
          hints={CardData.hints}
          wordCard={CardData.wordCard}
        />
      </div>
    )
  )
}
