let inputEl = document.getElementById("input-el")
let inputBtn = document.getElementById("input-btn")
let saveBtn = document.getElementById("save-btn")
let deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")


let myLeads = []
let leadsFromLocalStorage = localStorage.getItem("myLeads")
// if there is already a localStorage, retrieve and store the data to myLeads
if (leadsFromLocalStorage) {
    myLeads = JSON.parse(leadsFromLocalStorage) // list
    renderLeads()
} else { // create a localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads)) // string

}

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    // Save the myLeads array to localStorage
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads()
   
    // To verify that it works:
    console.log(localStorage.getItem("myLeads") )
})

// get link of the current tab URL
saveBtn.addEventListener("click", function() {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        let tabURL = tabs[0].url;
        myLeads.push(tabURL) // add the tab's URL to the list
        localStorage.setItem("myLeads", JSON.stringify(myLeads));
        renderLeads() // render it so it appears

        console.log(tabURL)
    });
})

// delete all the saved links
deleteBtn.addEventListener("click", function() {
    myLeads = [] // empty the list
    localStorage.clear()
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads() // render it so it appears
})

function renderLeads() {
    leadsFromLocalStorage = localStorage.getItem("myLeads")
    myLeads = JSON.parse(leadsFromLocalStorage)
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li>
            <a target="_blank" href="${myLeads[i]}">${myLeads[i]}</a>
        </li>`
    }
    ulEl.innerHTML = listItems
}
