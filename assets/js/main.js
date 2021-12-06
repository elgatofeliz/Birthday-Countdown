document.querySelector("input").addEventListener("change", () => {
    let date = new Date(document.querySelector("input").value)

    let seconds = 0
    let minutes = 0
    let hours = 0
    let days = 0

    let secOut = document.getElementById("seconds")
    let minOut = document.getElementById("minutes")
    let hourOut = document.getElementById("hours")
    let daysOut = document.getElementById("days")

    let convert = () => {
        let x = Math.floor(((date.getTime()) - (new Date().getTime())) / 1000)
        console.log(x)

        let seconds = Math.floor(x % 60)
        console.log(`${seconds} seconds`)
        secOut.innerHTML = seconds

        let minutes = Math.floor((x / 60) % 60)
        console.log(`${minutes} minutes`)
        minOut.innerHTML = minutes

        let hours = Math.floor((x / 3600) % 24)
        console.log(`${hours} hours`)
        hourOut.innerHTML = hours

        let days = Math.floor((x / 84000))
        console.log(`${days} days`)
        daysOut.innerHTML = days
    }
    let call = setInterval(convert, 1000)
})