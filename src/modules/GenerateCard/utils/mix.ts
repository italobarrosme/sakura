export const mix = (arr: string[]): string => {
  // Implementação do algoritmo de Fisher-Yates
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)) // Escolhe um índice aleatório entre 0 e i
    ;[arr[i], arr[j]] = [arr[j], arr[i]] // Troca os elementos de posição
  }

  console.log('mixed', arr[0])
  return arr[0]
}
