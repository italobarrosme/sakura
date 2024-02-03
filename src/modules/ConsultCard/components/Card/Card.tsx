type CardProps = {
  wordCard: string
  category: string
  hints: string[]
}

export const Card = ({ wordCard, category, hints }: CardProps) => {
  return (
    <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-brand-light p-4 text-sm shadow-md">
      <div className="capitalize">
        <small>
          <b>Resposta:</b>{' '}
          <span className="bg-brand-dark px-2 text-brand-light">
            {wordCard}
          </span>
        </small>
      </div>
      <hr />
      <div>
        Diga aos jogadores que eu sou um(a):{' '}
        <b className="capitalize">{category}</b>
      </div>
      <div className="flex flex-col gap-4">
        <b>Dicas:</b>
        <ul className="flex flex-col gap-4">
          {hints.map((hint, index) => (
            <li key={index}>
              {index + 1} - {hint}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
