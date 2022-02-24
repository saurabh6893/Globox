const printt = document.getElementById('data')
const button = document.getElementById('grab')
const earth = document.querySelector('.Earth')

button.addEventListener('click', loadCstz)

let SurfaceAEarth = 4 * (3.14 * [6371 ** 2])
let areaRound = SurfaceAEarth.toFixed(2)
console.log(areaRound)
earth.innerHTML = `the Total area of Earth: ${areaRound} Kms`

function loadCstz() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', 'data.json', true)

  xhr.onload = function () {
    if (this.status === 200) {
      const cstz = JSON.parse(this.responseText)

      let outputz = ''
      let countryCount = 0

      let sortedL = cstz.sort(function (a, b) {
        return b.population - a.population
      })

      for (let i = 0; i < 20; i++) {
        outputz += `<ul>
         <li>${sortedL[i].name}</li>
         <li>${sortedL[i].latlng}</li>
         <li>${sortedL[i].population}</li>
         </ul>`
        countryCount += 1
      }
      document.querySelector('.cc').innerHTML = countryCount
      printt.innerHTML = outputz
    }
  }
  xhr.send()
}
