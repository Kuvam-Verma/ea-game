// OpenFootballFC
// Main Entry Point

const loadingScreen = document.getElementById("loadingScreen");
const menu = document.getElementById("menu");

const buttons = {
    quick: document.getElementById("quickMatch"),
    career: document.getElementById("careerMode"),
    tournament: document.getElementById("tournaments"),
    training: document.getElementById("training"),
    settings: document.getElementById("settings")
};

class Game {

    constructor(){
        this.version = "0.0.1";
        this.loaded = false;
    }

    async start(){

        console.log("Starting OpenFootballFC");

        await this.loadAssets();

        this.showMenu();

        this.loaded = true;

    }

    async loadAssets(){

        return new Promise(resolve=>{

            setTimeout(()=>{

                loadingScreen.classList.add("fadeOut");

                resolve();

            },2000);

        });

    }

    showMenu(){

        menu.style.display="flex";

    }

}

const game = new Game();

game.start();

buttons.quick.onclick=()=>{

    alert("Quick Match Coming Soon!");

};

buttons.career.onclick=()=>{

    alert("Career Mode Coming Soon!");

};

buttons.training.onclick=()=>{

    alert("Training Coming Soon!");

};

buttons.settings.onclick=()=>{

    alert("Settings Coming Soon!");

};

buttons.tournament.onclick=()=>{

    alert("Tournament Coming Soon!");

};

if("serviceWorker" in navigator){

    window.addEventListener("load",()=>{

        navigator.serviceWorker.register("sw.js")
        .then(()=>console.log("Service Worker Registered"))
        .catch(err=>console.log(err));

    });

}
