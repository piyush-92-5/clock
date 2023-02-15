setInterval(setClock, 1000)

const hrHand = document.querySelector('[data-hour-hand]')
const minHand = document.querySelector('[data-minute-hand]')
const secHand = document.querySelector('[data-second-hand]')

function setClock() {
    const date = new Date()
    const secRatio = date.getSeconds() / 60
    const minRatio = (date.getMinutes() + secRatio) / 60
    const hrRatio = (date.getHours() + minRatio) / 12

    hrHand.style.setProperty('--rotation', hrRatio * 360)
    minHand.style.setProperty('--rotation', minRatio * 360)
    secHand.style.setProperty('--rotation', secRatio * 360)
}

setClock()
