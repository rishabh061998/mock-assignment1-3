

fetch("https://www.balldontlie.io/api/v1/players").then((data2)=>{
    // console.log(data)
    return data2.json()
}).then((completedata)=>{
    console.log(completedata.data)

let data1="";
completedata.data.map((values)=>{
    data1+=`<div class="card">
        <h1 class="title">Players</h1>
        <div class="imagediv">
        <img src="menslogo.png"alt="profile logo" />
        </div>
        <p class="name"> Name: ${values.first_name}</p>
        <p class="category">Position: ${values.position}</p>
        <button>Click Here to get player details </button>
    </div>`
})

document.getElementById("cards").innerHTML=data1;

}).catch((err)=>{
    console.log(err)
})