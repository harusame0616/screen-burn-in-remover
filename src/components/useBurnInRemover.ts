import { readonly, ref } from 'vue'

const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffffff', '#000000'] as const
type Color = (typeof colors)[number]

const intervalTime = 1000

export const useBurnInRemover = () => {
  const color = ref<Color>(colors[0])
  const index = ref(0)
  let intervalId: number | null = null

  const next = () => {
    index.value = (index.value + 1) % colors.length
    color.value = colors[index.value]
  }

  const start = () => {
    intervalId = window.setInterval(next, intervalTime)
  }

  const stop = () => {
    if (intervalId === null) {
      return
    }

    clearInterval(intervalId)
  }

  return {
    color: readonly(color),
    start,
    stop
  }
}
