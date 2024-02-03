'use server'

import { AI, PromptProps } from '@/modules/AI/services'

type postGenerateCard = PromptProps

export async function postGenerateCard({
  category,
  hints,
  categoryKey,
}: postGenerateCard) {
  return await AI({
    category,
    categoryKey,
    hints: +hints,
  })
}
