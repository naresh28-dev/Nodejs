

let h1E = document.createElement("h1");

function fetchingapi (){
    fetch("https://cryptovkm.onrender.com").then(
        (res)=>{
            return res.text()
        }
    ).then((data)=>{
        console.log(data);
        h1E.textContent=data
    })
}
document.body.appendChild(h1E)