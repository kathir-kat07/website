const Access = "10223569763528853";
const URL = `https://www.superheroapi.com/api.php/${Access}`;

let btn = document.getElementById('gen-btn');
let div = document.getElementById('main-div');
let input = document.getElementById('search');
let srcbtn = document.getElementById('src-btn');
let head=document.getElementById('heading')


function call() {
    let rand = random();
    console.log(rand)
    fetch(`${URL}/${rand}`).then((Response) => (Response.json()))
        .then((data) => { div.innerHTML = (`<img src='${data.image.url}'>`) })
    names.innerhtml = `<h1>data.name</h1>`;     

} 

function random() {
    let count = 731;
    let random = Math.floor(Math.random() * count) + 1;
    return random;
}

srcbtn.onclick = () => {
    fetch(`${URL}/search/${input.value}`).then((Response) => (Response.json()))
           .then((data) => { div.innerHTML = (`<img src='${data.results[0].image.url}'>`) })
    .then(data1 => (console.log(data1)));
}
