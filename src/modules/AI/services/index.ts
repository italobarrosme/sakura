import { mix } from '@/modules/GenerateCard/utils'
import { getCustomLog } from '@/utils/logs/logs'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export type Difficulty = 'Very Hard' | 'Hard' | 'Medium' | 'Easy' | 'Very Easy'

export type PromptProps = {
  category: string
  categoryKey: string
  hints: number
}

export type CardProps = {
  wordCard: string
  category: string
  hints: string[]
}

export async function AI({ category, hints, categoryKey }: PromptProps) {
  const model = 'gpt-3.5-turbo'

  const difficulty = mix(['Very Hard', 'Hard', 'Medium', 'Easy', 'Very Easy'])

  const requestJson = (
    prompt: string,
    jsonStructure: CardProps
  ) => `${prompt} Do not include any explanations, only provide a RFC8259 compliant JSON response following this format without deviation, only brazilian language portuguese.
  ${JSON.stringify(jsonStructure, null, 2)}`

  const prompt = requestJson(
    `${category} wordCard with difficulty ${difficulty} and ${hints} hints. wordCard must not be mentioned once in the hints. dont repeat same wordCard`,
    {
      wordCard: '',
      category: categoryKey,
      hints: [''],
    }
  )
  try {
    const response = await openai.chat.completions.create({
      model,
      messages: [
        {
          role: 'system',
          content: prompt,
        },
      ],
    })

    getCustomLog({
      log: 'AI function executed successfully',
      statusCode: 201,
      type: 'success',
    })

    const content = response.choices[0].message.content || ''

    console.log('content', content)

    return JSON.parse(content)
  } catch (error) {
    getCustomLog({
      log: 'Error in AI function',
      statusCode: 500,
      type: 'error',
    })

    return {
      error,
    }
  }
}
