const quotes = [{
    quote: `"You only live once, but if you do it right, once is enough."`,
    writer: `– Mae West`
}, {
    quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
    writer: `– Albert Einstein`
}, {
    quote: `"Never let the fear of striking out keep you from playing the game."`,
    writer: `– Babe Ruth`
}, {
    quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
    writer: `- Steve Jobs`
}, {
    quote: `"In order to write about life first you must live it."`,
    writer: `- Ernest Hemingway`
}, {
    quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
    writer: `- Soren Kierkegaard`
}, {
    quote: `"The unexamined life is not worth living."`,
    writer: `- Socrates`
}, {
    quote: `"Turn your wounds into wisdom."`,
    writer: `- Oprah Winfrey`
}, {
    quote: `"The purpose of our lives is to be happy."`,
    writer: `- Dalai Lama`
}, {
    quote: `"Live for each second without hesitation."`,
    writer: `- Elton John`
}, {
    quote: `'The time is always right to do what is right.'`,
    writer: `— Martin Luther King, Jr`
}, {
    quote: `'If you’re offered a seat on a rocket ship, don’t ask what seat. Just get on'`,
    writer: ` — Sheryl Sandberg`
}];



document.addEventListener("DOMContentLoaded", function () {
    let btn = document.querySelector('#Qbtn');
    let quoteDisplay = document.querySelector('.quote');
    let writerDisplay = document.querySelector(".writer");
    let whatsappLink = document.getElementById("whatsappLink");
    let instagramLink = document.getElementById('instagramLink')
    btn.addEventListener("click", function () {
        let random = Math.floor(Math.random() * quotes.length);
        let randomQuote = quotes[random];
        quoteDisplay.innerText = randomQuote.quote;
        writerDisplay.innerText = randomQuote.writer;

        let message = encodeURIComponent(randomQuote.quote + " - " + randomQuote.writer);
        whatsappLink.href = "https://wa.me/?text=" + message;
        instagramLink.href = 'https://www.instagram.com/' + message;
    });
});

























