let text = document.querySelector("#text");
let quote = document.querySelector("#quote");
let author = document.querySelector("#author");
let style = document.querySelector("#style");

let newQuote = document.querySelector("#new-quote");

$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/quotes',
    headers: { 'X-Api-Key': '2wfKFbQt/17WSDvSK9026w==dUWlMiNrHFhvxPxL'},
    contentType: 'application/json',
    success: function(data) {
        quote.innerHTML = data[0].quote;
        author.innerHTML = `- ${data[0].author}`;
        style.innerHTML = `A quote about ${data[0].category}...`;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

newQuote.addEventListener("click", function() {
    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes',
        headers: { 'X-Api-Key': '2wfKFbQt/17WSDvSK9026w==dUWlMiNrHFhvxPxL'},
        contentType: 'application/json',
        success: function(data) {
            quote.innerHTML = data[0].quote;
            author.innerHTML = `- ${data[0].author}`;

            if(data[0].category.includes("alone") || data[0].category.includes("famous")
                || data[0].category.includes("funny") || data[0].category.includes("best")
                || data[0].category.includes("cool") || data[0].category.includes("good")
                || data[0].category.includes("bad") || data[0].category.includes("inspirational")){
                    style.innerHTML = `A quote about being ${data[0].category}...`;    
                }else {
                    style.innerHTML = `A quote about ${data[0].category}...`;
                }
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
});

console.log('API from https://api-ninjas.com/api/quotes');
