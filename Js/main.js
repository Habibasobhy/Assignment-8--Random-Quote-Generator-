// & array of object
var quoteList = [
    {
        quote: "Resentment is like drinking poison and waiting for your enemies to die.",
        author: "Nelson Mandela"
    },

    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"
    },

    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison"
    },

    {
        quote: "A room without books is like a body without a soul.",
        author: "Marcus Tullius Cicero"
    },

    {
        quote: "You only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },

    {
        quote: "There is no friend as loyal as a book.",
        author: "Ernest Hemingway"
    },

    {
        quote: "Logic will get you from A to Z; imagination will get you everywhere.",
        author: "Albert Einstein"
    },

    {
        quote: "Without music, life would be a mistake.",
        author: "Friedrich Nietzsche, Twilight of the Idols"
    },

    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },

    {
        quote: "If you tell the truth, you don't have to remember anything.",
        author: "Mark Twain"
    }
];

// & declare global variable

var randomNumber = 0;
var previousRandomNumber;

// & Declare quotesGenerator 
function quotesGenerator(){
    previousRandomNumber = randomNumber;

    randomNumber = Math.floor(Math.random() * quoteList.length);

    console.log("previousRandomNumber => " ,previousRandomNumber);
    console.log("randomNumber => ",randomNumber);

    if(randomNumber == previousRandomNumber){
        randomNumber++;
        console.log("are equal and randomNumber after inc => ",randomNumber);
    }
    
    document.getElementById("quote").innerHTML = `\"${quoteList[randomNumber].quote}\"`;
    document.getElementById("author").innerHTML =`\-- ${quoteList[randomNumber].author}\--`;
}
