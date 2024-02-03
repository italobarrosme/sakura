import { CardProps } from '@/modules/AI/services'
import { create } from 'zustand'

type State = {
  card: CardProps | null
  setCard: (card: CardProps) => void
}

export const useGenerateCard = create<State>((set) => ({
  card: null,
  setCard: (card) => set({ card }),
}))
