export const useAutoHideCursor = () => {
  let hideCursorTimerId: number | null = null
  const autoHideTimeMS = 1000

  const hideCursor = () => {
    document.body.style.cursor = 'none'
  }

  const showCursor = () => {
    document.body.style.cursor = 'default'
  }

  const mouseMoveHandler = () => {
    showCursor()

    if (hideCursorTimerId) {
      clearTimeout(hideCursorTimerId)
    }

    hideCursorTimerId = window.setTimeout(hideCursor, autoHideTimeMS)
  }

  const start = () => {
    window.removeEventListener('mousemove', mouseMoveHandler)
    window.addEventListener('mousemove', mouseMoveHandler)
  }

  const stop = () => {
    window.removeEventListener('mousemove', mouseMoveHandler)
  }

  return { start, stop }
}
