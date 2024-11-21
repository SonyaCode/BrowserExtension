let inputEl = document.getElementById("input-el")
let button = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

button.addEventListener("click", renderLeads)
let myLeads = []

function renderLeads() {
    myLeads.push(inputEl.value)
    
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems

    inputEl.value = ""
}
