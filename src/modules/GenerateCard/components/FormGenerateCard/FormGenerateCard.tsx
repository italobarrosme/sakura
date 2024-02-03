'use client'

import { InputSelect } from '@/modules/GenerateCard/components/InputSelect'
import { useForm } from 'react-hook-form'
import { postGenerateCard } from './actions'
import { useGenerateCard } from '@/modules/GenerateCard/store'
import { Button } from '@/shared/components/Button'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { categories } from '@/modules/GenerateCard/utils/categories'
import { mix } from '../../utils'

export const FormGenerateCard = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { handleSubmit, setValue } = useForm({
    defaultValues: {
      category: 'Reino Animal',
      categoryKey: 'animal',
      hints: '5',
    },
  })
  const { setCard } = useGenerateCard()
  const { push } = useRouter()

  const hints = ['5', '10', '15', '20']

  const sendData = async (data: any) => {
    try {
      setIsLoading(true)
      const response = await postGenerateCard(data)

      if (response) {
        setCard({
          wordCard: response.wordCard,
          category: response.category,
          hints: response.hints,
        })

        push('/')
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit((data) => {
        sendData(data)
      })}
      className="flex flex-col gap-8 text-brand-light"
    >
      <div className="flex flex-col gap-4">
        <InputSelect
          label="Categoria"
          options={categories.map((category) => Object.keys(category)[0])}
          onChange={(e) => {
            const category = e.target.value
            const categoryData = categories.find(
              (item) => Object.keys(item)[0] === category
            )
            const words = categoryData ? Object.values(categoryData)[0] : []

            setValue('category', mix(words))
            setValue('categoryKey', category)
          }}
        />
        <InputSelect
          label="Dicas"
          options={hints}
          onChange={(e) => setValue('hints', e.target.value)}
        />
      </div>

      <Button isLoading={isLoading} type="submit">
        Gerar Carta
      </Button>
    </form>
  )
}
