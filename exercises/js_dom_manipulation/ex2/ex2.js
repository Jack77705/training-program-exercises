console.log("Exercise 2")

const main = document.querySelector("#display-box")

// const textIds = ["text1", "text2", "text3"]

// function displayText(textId) {
//     for (const id of textIds) {
//         if (id === textId) {
//             document.querySelector(`#${id}`).style.display = "block"
//         } else {
//             document.querySelector(`#${id}`).style.display = "none"
//         }
//     }
// }

function displayText(textId) {
    main.innerHTML = document.querySelector(`#${textId}`).innerHTML;
}