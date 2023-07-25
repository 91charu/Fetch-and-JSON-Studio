// TODO: add code here
window.addEventListener("load", function() {
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(json) { 
            
            const astro = document.getElementById("container");
    
            for (let i = 0; i < json.length; i++) {
                astro.innerHTML += `<div class="astronaut">
                    <div class="bio">
                        <h3><b>${json[i].firstName} ${json[i].lastName}</b></h3>
                        <ul>
                            <li>hoursInSpace: ${json[i].hoursInSpace}</li>
                            <li>active: ${json[i].active}</li>
                            <li>skills: ${json[i].skills}</li>
                        </ul>
                    </div>
                    <img class="avatar" src="${json[i].picture}"></img>
                </div>`;
            }


        });
    });
});

 