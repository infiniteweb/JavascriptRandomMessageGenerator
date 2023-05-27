const randomMessages = ["one", "two", "3", "four", "5"]

console.log(randomMessages[0])

let randomNumber = Math.floor(Math.random()*randomMessages.length)

console.log(`your random message is ${randomMessages[randomNumber]}`)