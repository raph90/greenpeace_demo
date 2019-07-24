const vid = document.querySelector('video');
const elephants = document.getElementById('1');
const penguins = document.getElementById('2');
const whales = document.getElementById('3');
const hawk = document.getElementById('4');


let active = "elephants"

function switchVid(element, name) {
    element.addEventListener('click', function(){
        
        if (active === name) {
            return;
        }
        vid.innerHTML = "";
        vid.innerHTML = `
        <source src="../videos/${name}.mp4" type="video/mp4">
        Your browser does not support the video tag.
        `
        active = name
        console.log(active);
        vid.load();
    })
}


switchVid(elephants, "elephants");
switchVid(penguins, "penguins");
switchVid(whales, "whales");
switchVid(hawk, "hawk");

