import { NextResponse } from 'next/server'
import { OpenAI } from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface Choice {
  index: number
  message: Record<string, any>
  finish_reason: string
}

interface AIResponse {
  choices: Choice[]
}

export async function POST() {
  const model = 'gpt-3.5-turbo'
  const prompt = 'Once upon a time, in a land far, far away, there was a'

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

    return NextResponse.json({
      response: response as AIResponse,
    })
  } catch (error) {
    console.error('Error in GET function:', error)
    return NextResponse.error() // Pode personalizar a resposta de erro conforme necessário
  }
}
