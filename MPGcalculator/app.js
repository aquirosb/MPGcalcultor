let mpgText = document.querySelector('#mpgText')
let speedText = document.querySelector('#speedText')
let distText = document.querySelector('#distText')
let gasText = document.querySelector('#gasText')
const calculateBtn = document.querySelector('.calculateBtn')
const calcDisplay = document.getElementById('calculations')

calculateBtn.addEventListener('click', calculateResults)

const mpgVal = mpgText.value
const speedVal = speedText.value
const distVal = distText.value
const gasVal = gasText.value

function calculateResults() {
    let totalDist = speedVal / distVal
    console.log(totalDist.toFixed(2))
}