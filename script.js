let showNumber = document.querySelector(".show-number")
let randomNumber = document.querySelector(".random-btn")
let result = document.querySelector(".result")

showNumber.addEventListener("click", () => {
    let search = document.getElementById("search").value;
    if (search >= 0 && search <= 300) {
        fetch("http://numbersapi.com/" + search)
            .then(response => response.text()).then(response => {
                result.innerHTML = `
             <h2>${search}</h2>
             <div class="fact">
             <p>${response}</p>
             </div>
    `
            })
        // return;
    } else {
        result.innerHTML = `<h3>Write a number between 0 to 300</h3>`

    }
    result.style.display = "block"
});

randomNumber.addEventListener("click", () => {
    let search = document.getElementById("search");
    let randomNumbers = Math.floor(Math.random() * 300)
    search.value = "";
    fetch("http://numbersapi.com/" + randomNumbers)
        .then(response => response.text()).then(response => {
            result.innerHTML = `
        <h2>${randomNumbers}</h2>
        <div class="fact">
        <p>${response}</p>
        </div>
        `
        })
    result.style.display = "block"
})

fect

