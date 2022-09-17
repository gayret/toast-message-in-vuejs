function printer(type = '', message = '', title = '', duration = 3) {
  const toastWrapper = document.createElement('div')
  toastWrapper.classList.add('toast-wrapper')
  toastWrapper.innerHTML = `
  <div class="toast ${type}">
    <div class="toast__title">${title}</div>
    <div class="toast__message">${message}</div>
  </div>
`

  toastWrapper.style.animationDuration = `${duration}s`

  document.body.appendChild(toastWrapper)

  setTimeout(() => {
    toastWrapper.remove()
  }, duration * 1000)
}

const message = {
  info: printer.bind(null, 'info'),
  success: printer.bind(null, 'success'),
  error: printer.bind(null, 'error'),
  warning: printer.bind(null, 'warning'),
}

export default message
