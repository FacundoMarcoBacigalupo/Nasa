window.addEventListener("load", getData)



function getData (){
    const nasaKey = "O4Tf2WQxcxbEGYZXnGt4qPY8Wvx9orYH919yp9QD"
    let route = `https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`


    fetch(route)
    .then(respons => respons.json())
    .then(dataRespons => showData(dataRespons))
}




function showData ({ date, explanation, media_type, title, url }){
    const titles = document.querySelector("#titles")
    titles.innerHTML = title;

    const dates = document.querySelector("#dates")
    dates.innerHTML = date;

    const explanations = document.querySelector("#explanations")
    explanations.innerHTML = explanation;


    const multimedia = document.querySelector("#multimedia")
    if(media_type == "video"){
        multimedia.innerHTML = `<iframe class="embed-responsive-item" src="${url}" allowfullscreen></iframe>`
    }
    else{
        multimedia.innerHTML = `<img src="${url}" style="max-width: 90%; border-radius: 10px;" class="img-fluid" alt="${title}">` 
    }
}




let day;
let days = new Date;

let today = document.querySelector("#today")


switch (days.getDay()) {
    case 1:
        day = "Today: Monday"
        today.innerHTML = day;
    break;

    case 2:
        day = "Today: Tuesday"
        today.innerHTML = day;
    break;

    case 3:
        day = "Today: Wednesday"
        today.innerHTML = day;
    break;

    case 4:
        day = "Today: Thursday"
        today.innerHTML = day;
    break;
    
    case 5:
        day = "Today: Friday"
        today.innerHTML = day;
    break;

    case 6:
        day = "Today: Saturday"
        today.innerHTML = day;
    break;

    case 7:
        day = "Today: Sunday"
        today.innerHTML = day;
    break;
  }