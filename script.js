const titre=document.getElementById("titre");
const sortie=document.getElementById("sortie");
const duree=document.getElementById("durée");
const description=document.getElementById("description");

//4. Fetch url image de l'utilisateur
async function fetchRandomUsr(){
    const request = await fetch("https://ghibliapi.vercel.app/films?limit=4");
    const response = await request.json();
    let data = [response];

   
document.getElementById("sortButton").addEventListener("click", function() {
    // Appelez la fonction de tri ici
    sortData(resultat.running_time);
});

function sortData() {
    data.sort((a, b) => a - b); // Tri croissant
    console.log("Données triées :", data);
    alert("Données triées : " + data.running_time(", "));
}

for (let i = 0; i < response.length; i++) {


        const resultat = response[i];
        const container=document.getElementById("container");
        console.log(resultat)


        container.innerHTML += `<div id="section1">
      <div class="video-card">
        <img id="photo" src="${resultat.movie_banner}" />
      </div>
      <div class="info">
        <ul>
          <li id="titre">${resultat.title}</li>
          <li id="sortie">${resultat.release_date}</li>
          <li id="durée">${resultat.running_time}</li>
          <li id="description">${resultat.description}</li>
        </ul>
      </div>`
}
}
;
fetchRandomUsr()

