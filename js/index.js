let linksData = [
    {
        title:"ADSL Guide",
        link:"https://hassan1414.github.io/ADSL-troubleshooter/"
    },
    {
        title:"Prepaid Disconnection guide",
        link:"https://hassan1414.github.io/prepaid-disconnection/"
    }
];

let linksContainer = document.querySelector("#list-container");

console.log(linksContainer);

let hasala = ``
for (let i = 0; i < linksData.length; i++) {

    hasala += `
    <div class="list-item text-center my-2">
        <a href=${linksData[i].link} target="_blank" class="text-decoration-none text-white"><h3>${linksData[i].title}</h3></a>
    </div>
    `

    linksContainer.innerHTML = hasala
    
}