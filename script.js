function toF() {

  const value = document.getElementById("temp").value
  let celsius = Number(value)
  var message = ""

  console.log(typeof value)
  console.log(typeof celsius)

  const valid = !isNaN(celsius) && value !== ""

  if (!valid) {
    document.getElementById("output").textContent = "Invalid input"
    return
  }

  let fahrenheit = (celsius * 9 / 5) + 32

  message = "Celsius: " + celsius
  message += `\nFahrenheit: ${fahrenheit}`
  message += `\nAbove Freezing: ${celsius > 0}`

  document.getElementById("output").textContent = message
}

function toC() {

  const value = document.getElementById("temp").value
  let fahrenheit = Number(value)
  var message = ""

  console.log(typeof value)
  console.log(typeof fahrenheit)

  const valid = !isNaN(fahrenheit) && value !== ""

  if (!valid) {
    document.getElementById("output").textContent = "Invalid input"
    return
  }

  let celsius = (fahrenheit - 32) * 5 / 9

  message = "Fahrenheit: " + fahrenheit
  message += `\nCelsius: ${celsius}`
  message += `\nBelow Zero: ${celsius < 0}`

  document.getElementById("output").textContent = message
}