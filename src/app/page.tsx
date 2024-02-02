import { cn } from '@/utils'

export default async function Home() {
  async function exampleFetchData() {
    const delay = 4000 // 4 seconds
    await new Promise((resolve) => setTimeout(resolve, delay))

    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()

    return data
  }

  const data = await exampleFetchData()

  return (
    <>
      <h1>Next.js Boilerplate</h1>
      <h3 className="my-4 text-xl">Example fetch serve components</h3>

      <ul>
        {data.map((item: any, index: number) => (
          <li key={item.id} className={cn('text-brand-primary')}>
            {index} - {item.name}
          </li>
        ))}
      </ul>
    </>
  )
}
