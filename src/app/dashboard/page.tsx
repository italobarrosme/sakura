'use client'

import { getExample } from '@/modules/Example/service'
import { useEffect, useState } from 'react'

type Item = {
  id: number
  name: string
}

type ApiExample = {
  title: string
  description: string
  items: Item[]
}

export default function Dashboard() {
  const [dataApi, setDataApi] = useState<ApiExample>({
    title: '',
    description: '',
    items: [],
  })

  useEffect(() => {
    getExample().then((res) => {
      setDataApi(res.data)
    })
  }, [])

  return (
    <section>
      <h1>Example page Dashboard</h1>

      <h2>{dataApi?.title}</h2>
      <p>{dataApi?.description}</p>
      {dataApi?.items?.map((item) => <p key={item.id}>{item.name}</p>)}
    </section>
  )
}
