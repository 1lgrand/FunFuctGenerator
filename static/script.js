async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
        
    console.log(quote.content)
    console.log(`- ${quote.author}`)
}
