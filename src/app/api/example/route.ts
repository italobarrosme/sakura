import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const object = {
      title: 'API EXAMPLE TITLE',
      description: 'API EXAMPLE DESCRIPTION',
      items: [
        {
          id: 1,
          name: 'Item 1',
        },
        {
          id: 2,
          name: 'Item 2',
        },
      ],
    }

    const data = object

    return NextResponse.json({ data })
  } catch (error) {
    console.error('Error in GET function:', error)
    return NextResponse.error() // Pode personalizar a resposta de erro conforme necessário
  }
}
