const playpausebtn = document.querySelector("#playpausebtn")
const previousbtn = document.querySelector("#previousbtn")
const nextbtn = document.querySelector("#nextbtn")
const progress = document.querySelector("#progress")
const currenttime = document.querySelector(".currenttime")
const songduration = document.querySelector(".songduration")
const songsource = document.querySelector(".songsource")
const audiotag = document.querySelector(".audiotag")
const songname = document.querySelector(".songname")
const singer = document.querySelector(".singer")
const musicplayer = document.querySelector(".musicplayer")
const playlist = document.querySelector(".playlist")
const playlistbars = document.querySelector(".playlistbars")



const aud1 = new Audio('./songsfolder/Akhiyaan.mp3');
const aud2 = new Audio('./songsfolder/Blinding-Lights.mp3');
const aud3 = new Audio('./songsfolder/Cheri-Cheri-Lady.mp3');
const aud4 = new Audio('./songsfolder/Dekha-Ek-Khwab.mp3');
const aud5 = new Audio('./songsfolder/Despacito.mp3');
const aud6 = new Audio('./songsfolder/dil-diyan-gallan.mp3');
const aud7 = new Audio('./songsfolder/illegal_weapons.mp3');
const aud8 = new Audio('./songsfolder/Itni-Si-Baat-Hain.mp3');
const aud9 = new Audio('./songsfolder/jeena-jeena.mp3');
const aud10 = new Audio('./songsfolder/Kabhi-Kabhi-Aditi-Zindagi.mp3');
const aud11 = new Audio('./songsfolder/maan-meri-jaan.mp3');
const aud12 = new Audio('./songsfolder/Mood.mp3');
const aud13 = new Audio('./songsfolder/nazar-na-lag-jaye.mp3');
const aud14 = new Audio('./songsfolder/paniyon-Sa.mp3');
const aud15 = new Audio('./songsfolder/Sanam-re.mp3');
const aud16 = new Audio('./songsfolder/skechers.mp3');
const aud17 = new Audio('./songsfolder/teri_baaton_me.mp3');
const aud18 = new Audio('./songsfolder/Teri-jhalak-Ashrafi-Srivalli.mp3');
const aud19 = new Audio('./songsfolder/Tu-Hai-Kahan.mp3');
const aud20 = new Audio('./songsfolder/Tu-Hi-Yaar-Mera.mp3');
const aud21 = new Audio('./songsfolder/tum-hi-ho.mp3');
const aud22 = new Audio('./songsfolder/Ved-Lavlay.mp3');
const aud23 = new Audio('./songsfolder/wrecking-ball.mp3');
 
// const img1=new Image('./images/teri-baaton.jpg');
// const img2=new Image('./images/weekend.jpg');
// const img3=new Image('./images/modern-talking.jpg');
// const img4=new Image('./images/lata-mangeshkar.jpg');
// const img5=new Image('./images/despacito.jpg');
// const img6=new Image('./images/dil-diyan.jpg');
// const img7=new Image('./images/illigal.jpg');
// const img8=new Image('./images/arijit-singh.jpg');
// const img9=new Image('./images/atif-aslam.jpg');
// const img10=new Image('./images/kabhi-kabhi.jpg');
// const img11=new Image('./images/king.jpg');
// const img12=new Image('./images/mood.jpg');
// const img13=new Image('./images/teri.jpg');
// const img14=new Image('./images/teri.jpg');
// const img15=new Image('./images/teri.jpg');
// const img16=new Image('./images/teri.jpg');
// const img17=new Image('./images/teri.jpg');
// const img18=new Image('./images/teri.jpg');
// const img19=new Image('./images/teri.jpg');
// const img20=new Image('./images/teri.jpg');
// const img21=new Image('./images/teri.jpg');
// const img22=new Image('./images/teri.jpg');
// const img23=new Image('./images/teri.jpg');



const songs = [

    { ele: aud1, audioname: "Akhiyann Gulaab", singer: "Mitraz" },
    { ele: aud2, audioname: "Blinding Lights", singer: "Weeknd" },
    { ele: aud3, audioname: "Cheri Cheri Lady", singer: "Modern Talking" },
    { ele: aud4, audioname: "Dekha Ek Khwab", singer: "Amitabh Bacchan, Kishor Kumar, Lata Mangeshkar" },
    { ele: aud5, audioname: "Despacito", singer: "Luis Fonsi" },
    { ele: aud6, audioname: "Dil Diyan Gallan", singer: "Atif Aslam" },
    { ele: aud7, audioname: "illegal Weapons", singer: "Garry Sandhu" },
    { ele: aud8, audioname: "Itni Si Baat Hain", singer: "Arijit Singh, Antara Mitra" },
    { ele: aud9, audioname: "Jeena Jeena", singer: "Atif Aslam" },
    { ele: aud10, audioname: "Kabhi Kabhi Aditi Zindagi", singer: "Rashid Ali" },
    { ele: aud11, audioname: "maan Meri Jaan", singer: "King" },
    { ele: aud12, audioname: "Mood", singer: "24kGoldn" },
    { ele: aud13, audioname: "Nazar na lag jaye", singer: "Ash King, Sachin-Jigar" },
    { ele: aud14, audioname: "Paniyon Sa", singer: "Atif Aslam, Tulsi Kumar" },
    { ele: aud15, audioname: "Sanam Re", singer: "Arijit Singh, Mithoon" },
    { ele: aud16, audioname: "Skechers", singer: "Carbine, DripReport" },
    { ele: aud17, audioname: "Teri baaton me", singer: "Des" },
    { ele: aud18, audioname: "Teri Jhalak Ashrafi Srivalli", singer: "Javed Ali, Devi Sri Prasad" },
    { ele: aud19, audioname: "Tu Hai Kahan", singer: "AUR" },
    { ele: aud20, audioname: "Tu Hi Yaar Mera", singer: "Arijit Singh, Rochak Kohli, Neha Kakkar" },
    { ele: aud21, audioname: "tum hi ho", singer: "Arijit Singh, Mithoon" },
    { ele: aud22, audioname: "Ved Lavlay", singer: "Ajat-Atul, Vishal Dadlani, Ajay Gogavale" },
    { ele: aud23, audioname: "Wrecking Ball", singer: "miley Cyrus" }

];





let current = 0;
let currentsong = songs[current].ele;
songname.textContent = songs[current].audioname;
singer.textContent = songs[current].singer

progress.max = currentsong.duration
progress.value = currentsong.currentTime
let test = 0
let currentmin
let currentsec
let durationmins
let durationsecs


const playpausefn = () => {
    if (currentsong.paused) {
        currentsong.play()
        playpausebtn.classList.remove("fa-play")
        playpausebtn.classList.add("fa-pause")
        test = 1


    }

    else {
        currentsong.pause()
        playpausebtn.classList.remove("fa-pause")
        playpausebtn.classList.add("fa-play")
        test = 0
    }

}


playpausebtn.addEventListener('click', () => {
    playpausefn();
})


nextbtn.addEventListener('click', () => {
    updatesongfn('next');
    playpausefn();

});

previousbtn.addEventListener('click', () => {
    updatesongfn('previous');
    playpausefn();

});



const updatesongfn = (action) => {
    currentsong.pause();
    currentsong.currentTime = 0;
    if (action === 'next') {
        current++;
        if (current > songs.length - 1) { current = 0; }
        currentsong = songs[current].ele;
        songname.textContent = songs[current].audioname;
        singer.textContent = songs[current].singer

    }

    if (action === 'previous') {
        current--;
        if (current < 0) { current = songs.length - 1; }
        currentsong = songs[current].ele;
        songname.textContent = songs[current].audioname;
        singer.textContent = songs[current].singer

    }


}

setInterval(() => {
    if (test) {
        currentmin = ("0" + Math.floor(currentsong.currentTime / 60)).slice(-2);
        currentsec = ("0" + Math.floor(currentsong.currentTime)).slice(-2);
        durationmins = ("0" + Math.floor(currentsong.duration / 60)).slice(-2);
        durationsecs = ("0" + Math.floor(currentsong.duration)).slice(-2)

        progress.max = currentsong.duration
        progress.value = currentsong.currentTime;
        songduration.innerHTML = (`${durationmins}:${durationsecs}`);
        currenttime.innerHTML = (`${currentmin}:${currentsec}`);

        if (currentsong.ended) {
            updatesongfn('next');
            playpausefn();

        }
    }
}, 1000)


function updatetime() {
    currentsong.currentTime = progress.value

}
function playlistfn2() {
    musicplayer.classList.remove("displaynone")
    playlist.classList.add("displaynone")

}

function playlistfn() {

    musicplayer.classList.add("displaynone")
    playlist.classList.remove("displaynone")

}
var playlistbar

for (let index = 0; index < songs.length; index++) {
    const playlistbar = document.createElement("div");
    playlistbars.append(playlistbar);
    playlistbar.classList.add(`playlistbar`);
    playlistbar.classList.add(`playlistbar${index}`);


    // Create and append another child element image
    const playlistimg = document.createElement("div");
    playlistimg.textContent = "";
    playlistbar.append(playlistimg);
    playlistimg.classList.add(`playlistimg`);


    // Create and append another child element songname
    const playlistbarname = document.createElement("p");
    playlistbarname.innerText = songs[index].audioname;
    playlistbar.append(playlistbarname);
    playlistbarname.classList.add(`playlistbarname`);


    // Create and append another child element artist
    const playlistbarartist = document.createElement("div");
    playlistbarartist.textContent = songs[index].singer;
    playlistbar.append(playlistbarartist);
    playlistbarartist.classList.add(`playlistbarartist`);

}


for (let index = 0; index < songs.length; index++) {
    var tapnplay=document.querySelector(`.playlistbar${index}`)

    tapnplay.addEventListener('click', () => {
        currentsong.pause();
        currentsong.currentTime=0;
        currentsong = songs[index].ele;
        songname.textContent = songs[index].audioname;
        singer.textContent = songs[index].singer
        playpausefn();
        current=index

    })

}
