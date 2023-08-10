let mpgText = document.querySelector('#mpgText')
let speedText = document.querySelector('#speedText')
let distText = document.querySelector('#distText')
let gasText = document.querySelector('#gasText')
const calculateBtn = document.querySelector('.calculateBtn')
const calcDisplay = document.getElementById('calculations')

calculateBtn.addEventListener('click', calculateResults)

function calculateResults() {
    const mpgVal = parseFloat(mpgText.value)
    const speedVal = parseFloat(speedText.value)
    const distVal = parseFloat(distText.value)
    const gasVal = parseFloat(gasText.value)

    const totalTime = (distVal / speedVal)
    const totalCost = (distVal / mpgVal) * gasVal

    calcDisplay.innerHTML = `Total Time: ${totalTime.toFixed(2)} hours<br>Total Cost: $${totalCost.toFixed(2)}`
}