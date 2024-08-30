let current = 0;
let currentsong = songs[current].ele;
let currentimg = songs[current].img;
songname.textContent = songs[current].audioname;
singer.textContent = songs[current].singer;
progress.max = currentsong.duration;
progress.value = currentsong.currentTime;
let test = 0;
let currentmin, currentsec, durationmins, durationsecs;


const playpausefn = () => {
    if (currentsong.paused) {
        currentsong.play();
        playpausebtn.classList.remove("fa-play");
        playpausebtn.classList.add("fa-pause");
        test = 1;
    } else {
        currentsong.pause();
        playpausebtn.classList.remove("fa-pause");
        playpausebtn.classList.add("fa-play");
        test = 0;
    }
};

lyricscontent.textContent = songs[0].lyr;
const change_thumbnail = () => {
    songimg.removeAttribute("src");
    songimg.setAttribute("src", `images/img${current + 1}.jpg`);
    lyricscontent.innerHTML = songs[current].lyr;
};

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
});

playpausebtn.addEventListener('click', () => {
    playpausefn();
});

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
        singer.textContent = songs[current].singer;
    }

    if (action === 'previous') {
        current--;
        if (current < 0) { current = songs.length - 1; }
        currentsong = songs[current].ele;
        songname.textContent = songs[current].audioname;
        singer.textContent = songs[current].singer;
    }
};

setInterval(() => {
    if (test) {
        currentmin = ("0" + Math.floor(currentsong.currentTime / 60)).slice(-2);
        currentsec = ("0" + Math.floor(currentsong.currentTime)).slice(-2);
        durationmins = ("0" + Math.floor(currentsong.duration / 60)).slice(-2);
        durationsecs = ("0" + Math.floor(currentsong.duration)).slice(-2);

        progress.max = currentsong.duration;
        progress.value = currentsong.currentTime;
        songduration.innerHTML = (`${durationmins}:${durationsecs}`);
        currenttime.innerHTML = (`${currentmin}:${currentsec}`);

        if (currentsong.ended) {
            updatesongfn('next');
            playpausefn();
            change_thumbnail();
        }
    }
}, 800);

function updatetime() {
    currentsong.currentTime = progress.value;
}

function playlistfn2() {
    musicplayer.classList.remove("displaynone");
    playlist.classList.add("displaynone");
}

function playlistfn() {
    musicplayer.classList.add("displaynone");
    playlist.classList.remove("displaynone");
}

progress.addEventListener('input', () => {
    updatetime();
});

for (let index = 0; index < songs.length; index++) {
    const playlistbar = document.createElement("div");
    playlistbars.append(playlistbar);
    playlistbar.classList.add(`playlistbar`);
    playlistbar.classList.add(`playlistbar${index}`);

    const playlistimg = document.createElement("img");
    playlistbar.append(playlistimg);
    playlistimg.classList.add(`playlistimg`);
    playlistimg.setAttribute("src", `images/img${index + 1}.jpg`);

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
    var tapnplay = document.querySelector(`.playlistbar${index}`);

    tapnplay.addEventListener('click', () => {
        currentsong.pause();
        currentsong.currentTime = 0;
        currentsong = songs[index].ele;
        songname.textContent = songs[index].audioname;
        singer.textContent = songs[index].singer;
        playpausefn();
        current = index;
        change_thumbnail();
    });
}

document.querySelector(".playlistlogo0").addEventListener('click', () => {
    const songList = document.querySelector('.playlistbars').querySelectorAll(".playlistbar");

    Array.from(songList).forEach(function (song) {
 
            song.style.display = 'grid';
    })

    playlistfn();
});


document.querySelector(".playlistlogo").addEventListener('click', () => {
    document.querySelector('.searchbar').value=""
    playlistfn2();
});

document.querySelector('.lyricsbtn1').addEventListener("click", () => {
    document.querySelector("#lyricsSection").style.bottom = "0vh";
    document.querySelector("#lyricsSection").style.backgroundColor = "rgba(255, 255, 255, 0.15)";
    document.querySelector(".lyricsbtn1 .angleup").style.color = "transparent";
    document.querySelector(".lyricsbtn1 p").style.color = "transparent";
});

document.querySelector('.lyricsbtn2').addEventListener("click", () => {
    document.querySelector("#lyricsSection").style.bottom = "-65vh";
    document.querySelector("#lyricsSection").style.backgroundColor = "transparent";
    document.querySelector(".lyricsbtn1 .angleup").style.color = "red";
    document.querySelector(".lyricsbtn1 p").style.color = "white";
});

function searchsong() {
    const searchInput = document.querySelector('.searchbar');
    const songList = document.querySelector('.playlistbars').querySelectorAll(".playlistbar");

    searchInput.addEventListener("keyup", function () {
        const searchTerm = searchInput.value.toLowerCase();

        Array.from(songList).forEach(function (song) {
            const title = song.querySelector('.playlistbarname').innerText.toLowerCase();

            if (title.includes(searchTerm)) {
                song.style.display = 'grid';
            }
            else if(    document.querySelector('.searchbar').value===""){
                song.style.display = 'grid'; 
            }
            else {
                song.style.display = 'none';
            }
        });
    });

}

document.addEventListener('DOMContentLoaded', function () {
    searchsong();
});
let restorevolume;




currentsong.volume = 1;
volumerange.value = 100;
restorevolume=100

volumerange.addEventListener('input', function () {
    currentsong.volume = (Math.floor(volumerange.value) / 100);
    if ((Math.floor(volumerange.value) / 100) == 0) {
        document.querySelector(".volumelogo").classList.remove("fa-volume-high");
        document.querySelector(".volumelogo").classList.add("fa-volume-xmark");
    } else {
        document.querySelector(".volumelogo").classList.remove("fa-volume-xmark");
        document.querySelector(".volumelogo").classList.add("fa-volume-high");
    }
    restorevolume = (volumerange.value);
});

document.querySelector(".volumelogo").addEventListener('click', () => {
    if (currentsong.volume != 0) {
        currentsong.volume = 0;
        volumerange.value = 0;
        document.querySelector(".volumelogo").classList.remove("fa-volume-high");
        document.querySelector(".volumelogo").classList.add("fa-volume-xmark");
    } else {
        volumerange.value = restorevolume;
        currentsong.volume = restorevolume / 100;
        document.querySelector(".volumelogo").classList.remove("fa-volume-xmark");
        document.querySelector(".volumelogo").classList.add("fa-volume-high");
    }
});


document.addEventListener('keyup', function (e) {
    if (e.keyCode === 38) { 
        if (volumerange.value < 100) {
            volumerange.value = Math.min(100, parseInt(volumerange.value) + 10);
            currentsong.volume = volumerange.value / 100;
        }
    }
    if (e.keyCode === 40) { 
        if (volumerange.value > 0) {
            volumerange.value = Math.max(0, parseInt(volumerange.value) - 10);
            currentsong.volume = volumerange.value / 100;
        }
    }
})


const voiceAssistantBtn = document.querySelector(".voice-assistant");

voiceAssistantBtn.addEventListener("click", () => {
    if (!('SpeechRecognition' in window || 'webkitSpeechRecognition' in window)) {
        alert('Your browser does not support the Speech Recognition API. Please use a supported browser like Google Chrome.');
        return;
    }
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';

    recognition.onstart = function() {
        console.log('Voice recognition started. Try speaking into the microphone.');
    };

    recognition.onresult = function(event) {
        let song = event.results[0][0].transcript;
        console.log('You said: ' + song);
        song = song.replace(/\./g, ''); // Remove any full stops
        
        const searchInput = document.querySelector('.searchbar');
        searchInput.value = song;
        const searchTerm = searchInput.value.toLowerCase();
        const songList = document.querySelector('.playlistbars').querySelectorAll(".playlistbar");
        Array.from(songList).forEach(function (song) {
            const title = song.querySelector('.playlistbarname').innerText.toLowerCase();

            if (title.includes(searchTerm)) {
                song.style.display = 'grid';
            } else {
                song.style.display = 'none';
            }
        });
    };

    recognition.onerror = function(event) {
        console.error('Speech recognition error:', event.error);
    };

    recognition.start();
});