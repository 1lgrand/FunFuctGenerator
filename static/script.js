async function randomQuote() {
    const response = await fetch('https://api.quotable.io/random')
    const quote = await response.json()
        
    quoteDoc = document.getElementById("quote")
    authorDoc = document.getElementById("author");

    quoteDoc.innerHTML = quote.content;
    authorDoc.innerHTML = "-" + quote.author;

}
