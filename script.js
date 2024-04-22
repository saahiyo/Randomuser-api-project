var main = document.getElementById("barContainer");

async function callApi(){
    let url = "https://randomuser.me/api/?results=15";
    let get = await fetch(url);
    let res = await get.json();
  
    var clutter = "";
            
    res.results.forEach(users => {
        clutter += `<div class="databar3" >
                        <img src="${users.picture.thumbnail}" >
                        <div class="dataright" >
                            <h3> ${users.name.first} ${users.name.last} </h3>
                            <p> ${users.email}</p>
                        </div>
                    </div>`;
    })
    main.innerHTML = clutter;
}

callApi();
