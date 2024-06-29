
let current = 0;
let currentsong = songs[current].ele;
let cuurentimg = songs[current].img;
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
        test = 0;
    }

}

lyricscontent.textContent = songs[0].lyr
const change_thumbnail = () => {
    songimg.removeAttribute("src")
    songimg.setAttribute("src", `images/img${current + 1}.jpg`)
    lyricscontent.innerHTML = songs[current].lyr
}



document.addEventListener('keydown', function (e) {
    if (e.keyCode === 32) { playpausefn(); }
    if (e.keyCode === 39) {
        playpausefn();
        updatesongfn('next');
        change_thumbnail();

    }
    if (e.keyCode === 37) {
        playpausefn();
        updatesongfn('previous');
        change_thumbnail();


    }

})


playpausebtn.addEventListener('click', () => {
    playpausefn();
})


nextbtn.addEventListener('click', () => {
    updatesongfn('next');
    playpausefn();
    change_thumbnail();


});

previousbtn.addEventListener('click', () => {
    updatesongfn('previous');
    playpausefn();
    change_thumbnail();


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
            change_thumbnail();

        }

    }
}, 800)


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

progress.addEventListener('input', () => {
    updatetime()
})



for (let index = 0; index < songs.length; index++) {


    const playlistbar = document.createElement("div");
    playlistbars.append(playlistbar);
    playlistbar.classList.add(`playlistbar`);
    playlistbar.classList.add(`playlistbar${index}`);


    const playlistimg = document.createElement("img");
    playlistbar.append(playlistimg);
    playlistimg.classList.add(`playlistimg`);
    playlistimg.setAttribute("src", `images/img${index + 1}.jpg`)


    const playlistbarname = document.createElement("p");
    playlistbarname.innerText = songs[index].audioname;
    playlistbar.append(playlistbarname);
    playlistbarname.classList.add(`playlistbarname`);


    const playlistbarartist = document.createElement("div");
    playlistbarartist.textContent = songs[index].singer;
    playlistbar.append(playlistbarartist);
    playlistbarartist.classList.add(`playlistbarartist`);

}

for (let index = 0; index < songs.length; index++) {
    var tapnplay = document.querySelector(`.playlistbar${index}`)

    tapnplay.addEventListener('click', () => {
        currentsong.pause();
        currentsong.currentTime = 0;
        currentsong = songs[index].ele;
        songname.textContent = songs[index].audioname;
        singer.textContent = songs[index].singer
        playpausefn();
        current = index
        change_thumbnail();

    })

}

document.querySelector(".playlistlogo0").addEventListener('click', () => {
    playlistfn();
})


document.querySelector(".playlistangle").addEventListener('click', () => {
    document.querySelector(".searchbar").style.display = "block"
    document.querySelector(".fa-magnifying-glass").style.display = "none"


})

document.querySelector(".playlistlogo").addEventListener('click', () => {
    playlistfn2();
    document.querySelector(".searchbar").style.display = "none"
    document.querySelector(".fa-magnifying-glass").style.display = "block"

})

document.querySelector('.lyricsbtn1').addEventListener("click", () => {
    document.querySelector("#lyricsSection").style.bottom = "0vh"
    document.querySelector("#lyricsSection").style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    document.querySelector(".lyricsbtn1 .angleup").style.color = "transparent";
    document.querySelector(".lyricsbtn1 p").style.color = "transparent";
})

document.querySelector('.lyricsbtn2').addEventListener("click", () => {
    document.querySelector("#lyricsSection").style.bottom = "-65vh"
    document.querySelector("#lyricsSection").style.backgroundColor = "transparent";
    document.querySelector(".lyricsbtn1 .angleup").style.color = "red";
    document.querySelector(".lyricsbtn1 p").style.color = "white";
})


document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.searchbar');
    const songList = document.querySelector('.playlistbars').querySelectorAll(".playlistbar")

    searchInput.addEventListener("keyup", function () {
        const searchTerm = searchInput.value.toLowerCase();


        Array.from(songList).forEach(function (song) {
            const title = song.querySelector('.playlistbarname').innerText.toLowerCase();

            if (title.includes(searchTerm)) {
                song.style.display = 'grid';
            } else {
                song.style.display = 'none';
            }

        })
    })
})

let restorevolume
volumerange.addEventListener('input', function () {
    currentsong.volume = (Math.floor(volumerange.value) / 100)
    if ((Math.floor(volumerange.value) / 100) == 0) {
        document.querySelector(".volumelogo").classList.remove("fa-volume-high")
        document.querySelector(".volumelogo").classList.add("fa-volume-xmark")
    }
    else {
        document.querySelector(".volumelogo").classList.remove("fa-volume-xmark")
        document.querySelector(".volumelogo").classList.add("fa-volume-high")
    }
    restorevolume = (volumerange.value)

});

document.querySelector(".volumelogo").addEventListener('click', () => {

    if (currentsong.volume != 0) {
        currentsong.volume = 0;
        volumerange.value = 0;
        document.querySelector(".volumelogo").classList.remove("fa-volume-high")
        document.querySelector(".volumelogo").classList.add("fa-volume-xmark")
    }

    else {
        volumerange.value = restorevolume;
        currentsong.volume = restorevolume / 100;
        document.querySelector(".volumelogo").classList.remove("fa-volume-xmark")
        document.querySelector(".volumelogo").classList.add("fa-volume-high")

    }
})

currentsong.volume =0.5;
volumerange.value =50

document.addEventListener('keydown', function (e) {

    if (e.keyCode === 38) {
        if (volumerange.value < 80) {

            currentsong.volume = (currentsong.volume + 0.1);
            volumerange.value = (volumerange.value + 10);
        }
    }
    if (e.keyCode === 40) {
        if (volumerange.value > 20) {
            currentsong.volume = (currentsong.volume - 0.1);
            volumerange.value = (volumerange.value - 10);
        }
    }

})
console.log(volumerange.value)

console.log(  currentsong.volume )
