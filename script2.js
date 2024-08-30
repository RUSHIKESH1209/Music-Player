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
const songimg = document.querySelector(".songimg")
const lyricscontent = document.querySelector(".lyricscontent")
const volumerange = document.querySelector("#volumerange")
const song_volume = document.querySelector(".song_volume")


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
const aud14 = new Audio('./songsfolder/Paniyon-Sa.mp3');
const aud15 = new Audio('./songsfolder/Sanam-re.mp3');
const aud16 = new Audio('./songsfolder/skechers.mp3');
const aud17 = new Audio('./songsfolder/teri_baaton_me.mp3');
const aud18 = new Audio('./songsfolder/Teri-Jhalak-Ashrafi-Srivalli.mp3');
const aud19 = new Audio('./songsfolder/Tu-Hai-Kahan.mp3');
const aud20 = new Audio('./songsfolder/Tu-Hi-Yaar-Mera.mp3');
const aud21 = new Audio('./songsfolder/tum-hi-ho.mp3');
const aud22 = new Audio('./songsfolder/Ved-Lavlay.mp3');
const aud23 = new Audio('./songsfolder/wrecking-ball.mp3');




const script1=`Kaisi hai lagdi kamaal \n Teri akhiyaan gulaab \n Ke na jaave sadda pyar \n Tainu chhadd ke \n \n Ho jaave tera hi deedar \n Te koyi na sambhal vi \n Paave sadda pyar tu chhadd ke \n \n Kaisi hai lagdi kamaal \n Teri ankhiyan gulaab \n Ke na ja ave sadda pyar \n Tainu chhadd ke \n \n Ho jaave tera hi deedar \n`

const script2="I said, ooh, I'm blinded by the lights \n No, I can't sleep until I feel your touch \n I said, ooh, I'm drowning in the night \n Oh, when I'm like this, you're the one I trust \n \n I'm just walking by to let you know (by to let you know) \n I can never say it on the phone (say it on the phone)"

const script3=" Cheri, cheri lady\n Goin' through a motion\n Love is where you find it\n Listen to your heart\n \n Cheri, cheri lady\n Living in devotion\n It's always like the first time\n Let me take a part \n \n Cheri, cheri lady\n Goin' through a motion\n Love is where you find it\n Listen to your heart\n \n Cheri, cheri lady\n Living in devotion\n It's always like the first time\n Let me take a part"

const script4="Teri aawaz hai havaaon mein \n Pyar ka rang hai phizaaon \n Dhadkanon mein tere geet hain mile hue \n Kya kahun ke sharm se hain lub sile hue \n  \n Dekha ek khwaab to yeh silsile hue \n Phool bhi ho darmiyaan to faasle hue"

const script5=
"Quiero desnudarte \n Despacito (¡Plo!) \n a besos despacito (Yeah-eh) \n Firmar las paredes  \n de tu laberinto \n Y hacer de tu cuerpo \n todo un manuscrito \n (Sube, sube, sube, sube, sube) \n  \n Quiero ver bailar tu pelo, \n quiero ser tu ritmo (Eh, woh, eh) \n Que le enseñes a mi boca (Woh, eh) \n Tus lugares"

const script6=" \n Kachhi doriyon, doriyon, doriyon se \n Mainu tu bandh le \n Pakki yaariyon, yaariyon, yaariyon mein \n Aunde na faasle \n \n Eh narazgi kaagzi saari teri \n Mere sohneya sun lai meri \n \n Dil diyan gallan"

const script7= " Aankh Surme Se Bharke Taiyar Ki, \n Kheench-Kheench Ke Nishane Hoon Main Maarti, \n Khud Zyada Tu Umeed Mat Rakh Soneya, \n Zyaada Tu Umeed Mat Rakh Soneya, \n Tera Level Nahin Mere Yaar Varga, \n  \n Mundeya Nu Suli Utte Tangi Rakhda Ve, \n Mera Nakhra Eh Tikhi Talwar Warga, \n Mundeya Nu Sooli Utte Tangi Rakhda Ve, \n Mera Nakhra Eh Tikhi Talvaar Varga."

const script8= 
"Kaisi dil lagaai kar gaye \n Rooh ki rubaai bann gaye \n Khaali khaali dono thhe jo \n Thoda sa dono bhar gaye Main aur Tum \n  \n Chalo ji aaj saaf saaf kehta hoon \n Itni si baat hai mujhe tumse pyar hai \n "

const script9="Dehleez pe mere dil ki \n Jo rakhe hain tune kadam \n Tere naam pe meri zindagi \n Likh di mere humdum \n  \n Haan seekha maine jeena \n jeena kaise jeena \n Haan seekha maine \n jeena mere humdum \n Na seekha kabhi jeena \n jeena kaise jeena \n Na seekha jeena \n tere bina humdum"

const script10="Kabhi Kabhi Aditi Zindagi Me Yuhi Koi Apna Lagtha Hai \n Kabhi Kabhi Adithi Wo Bichad Jaye To Ik Sapna Lagtha Hai \n Aise Me Koi Kasie Apane Aansu Bahenese Roke \n Aur Kaise Koi Soch Wo Everythings On We Ok \n Kabhi Kabhi To Lage Jindge Mai Rangeen Kushi Aur Na Maza \n Kabhi Kabhi To Lage Har Din Mushkil \n Aur Har Pal Ik Saja Aise Me Koi Kasie Muskuraye \n Kaise Hasde Khush Hoke \n Aur Kaise Koi Soch De Everythings On We Ok"

const script11="Tu maan meri jaan \n main tujhe jaane na dunga \n main tujhko apni baahon mein chhupa ke rakhunga. \n Tu maan meri jaan \n main tujhe jaane na dunga \n main tujhko apni aankho mein basake rakhunga. \n Tu maan meri jaan"

const script12= "Why you always in a mood? (Mood) \n Fuckin 'round, actin' brand new (new) \n I ain't tryna tell you what to do \n But try to play it cool (cool) \n Baby, I ain't playin' by your rules (rules) \n Everything look better with a view \n Why you always in a mood? (Mood) \n Fuckin 'round, actin' brand new (new) \n I ain't tryna tell you what to do \n But try to play it cool (cool) \n Baby, I ain't playin' by your rules (rules) \n Everything look better with a view \n So why you tryin' to fake your love on the regular? (Regular) \n When you could be blowin' up just like my cellular \n I won't ever let a shorty go and set me up (set me up) \n Only thing I need to know is if you wet enough (enough)"

const script13="Goriye tu kinni gori hai \n Tu zameen pe chand ki chudi hai \n Buri ye badi buri hai \n Duniya ki neeyat chhoriye \n Nazar na lag jaaye jaanu \n Thought ye ghabraaye saanu \n Nazar na lag jaaye jaanu \n Thought ye ghabraaye saanu " 

const script14="ChupHain Batein \n DilKaiseBayaan Mai Karun \n Tu Hi Kahde \n Jo Baat Mai Kah Na Sakun \n Ki Sang Tere Paniyon Sa Paniyo Sa Paniyon Sa Bahta Rahun  \n Tu Sunti Rahe Mai Kahaaniyaan Si Kahta Rahun  \n Ki Sang Tere Badlon Sa Badlon Sa Badlon Sa Udta Rahun  \n Tere Ak IsharaPe Teri Or MudtaRahun"

const script15="Bheegi bheegi sadkon pe main \n Tera intezaar karun \n Dheere dheere dil ki zameen ko \n Tere hi naam karun \n Khudko main yoon kho doon \n Ke phir na kabhi paaun \n Haule haule zindagi ko \n Ab tere hawaale karun \n Sanam re, sanam re \n Tu mera sanam hua re \n Sanam re, sanam re \n Tu mera sanam hua re"

const script16=" Light Up Light Up Sketchers \n Light Up Light Up My World \n I Like Your Skechers \n You Like Me My Gucci Shoes \n I’ll Buy You That Purse \n Only If You Show Me Your Boobs \n You Like Me Too \n I Like Your Skecher \n Bring Your Friends \n All Of Us In The Pool \n Bad Lil Bich \n All My Drip Make Her Drool \n Brand New Whip \n Come And Sit In The Coupe"

const script17= "teree baaton mein aisa ulajha jiya \n  baithe hee baithe mainne dil kho diya \n teree baaton mein aisa ulajha jiya \n baithe hee baithe mainne dil kho diya"

const script18="Teri Jhalak Asharfi \n \n Srivalli Naina Madak Barfi,\n \n Teri Jhalak Asharfi Srivalli \n \n Batein Kare Do Harfi"

const script19="tu sanbhaal le filhaal \n Yeh sawal bicha jaal kya main chaal chaloon \n Chaal chal tu apni main tujhe pehchan lunga \n Main apni mehfilon mein sirf tera hi naam lunga \n Tujhe pasand hai dheema lehja or bas khamoshiyan \n Main tere khatir apni khud ki saansein tham lunga \n Kya tere sare aansu mere ho sakte hai \n Aisa hai to tere khatir hum bhi ro sakte hai \n Tere khatir mere rone par ab tum bas has dena \n Ek bar teri muskurahat ke piche hum sab kuch kho sakte hai \n Kya meri mohabbaton ka koi hisab nahi hai"

const script20="Dhadkan Ye Kehti hein \n Dil Tere Bina Dhadke Na \n Ik Tu Hi Yaar Mera \n Mujhko Kya Dunia se Lenaa \n  \n Dhadkan Ye Kehti hein \n Dil Tere Bina Dhadke Na \n Ik Tu Hi Yaar Mera \n Mujhko Kya Dunia se Lenaa"

const script21="Kyunki tum hi ho \n Ab tum hi ho \n Zindagi ab tum hi ho \n Chain bhi, mera dard bhi \n Meri aashiqui ab tum hi ho \n Tumhi ho... Tumhi ho... \n Kyunki tum hi ho \n Ab tum hi ho \n Meri aashiqui ab tum hi ho \n Tumhi ho... Tumhi ho..."

const script22="  Ar Nashibane Miltay Pn \n Tu Kaava Tula Sarkavlay \n Gurmine Premala Khadda \n Paadun Adkavlay \n Mala Yed Lavlay Lai Raav Tine Yed Lavlay \n Mala Yed Lavlay Lai Raav Tine Yed Lavlay \n "

const script23="Don't you ever say I just walked away \n I will always want you \n I came in like a wrecking ball \n I never hit so hard in love \n All I wanted was to break your walls \n All you ever did was wreck me \n I came in like a wrecking ball \n Yeah, I just closed my eyes and swung" 


const songs = [

    {lyr:script1 ,ele: aud1, audioname: "Akhiyann Gulaab", singer: "Mitraz" },
    {lyr:script2 ,ele: aud2, audioname: "Blinding Lights", singer: "Weeknd" },
    {lyr:script3 ,ele: aud3, audioname: "Cheri Cheri Lady", singer: "Modern Talking" },
    {lyr:script4 ,ele: aud4, audioname: "Dekha Ek Khwab", singer: "Amitabh Bacchan, Kishor Kumar, Lata Mangeshkar" },
    {lyr:script5 ,ele: aud5, audioname: "Despacito", singer: "Luis Fonsi" },
    {lyr:script6 ,ele: aud6, audioname: "Dil Diyan Gallan", singer: "Atif Aslam" },
    {lyr:script7 ,ele: aud7, audioname: "illegal Weapons", singer: "Garry Sandhu" },
    {lyr:script8 ,ele: aud8, audioname: "Itni Si Baat Hain", singer: "Arijit Singh, Antara Mitra" },
    {lyr:script9 ,ele: aud9, audioname: "Jeena Jeena", singer: "Atif Aslam" },
    {lyr:script10 ,ele: aud10, audioname: "Kabhi Kabhi Aditi Zindagi", singer: "Rashid Ali" },
    {lyr:script11 ,ele: aud11, audioname: "maan Meri Jaan", singer: "King" },
    {lyr:script12 ,ele: aud12, audioname: "Mood", singer: "24kGoldn" },
    {lyr:script13 ,ele: aud13, audioname: "Nazar na lag jaye", singer: "Ash King, Sachin-Jigar" },
    {lyr:script14 ,ele: aud14, audioname: "Paniyon Sa", singer: "Atif Aslam, Tulsi Kumar" },
    {lyr:script15 ,ele: aud15, audioname: "Sanam Re", singer: "Arijit Singh, Mithoon" },
    {lyr:script16 ,ele: aud16, audioname: "Skechers", singer: "Carbine, DripReport" },
    {lyr:script17 ,ele: aud17, audioname: "Teri baaton me", singer: "Des" },
    {lyr:script19 ,ele: aud18, audioname: "Teri Jhalak Ashrafi Srivalli", singer: "Javed Ali, Devi Sri Prasad" },
    {lyr:script19 ,ele: aud19, audioname: "Tu Hai Kahan", singer: "AUR" },
    {lyr:script20 ,ele: aud20, audioname: "Tu Hi Yaar Mera", singer: "Arijit Singh, Rochak Kohli, Neha Kakkar" },
    {lyr:script21 ,ele: aud21, audioname: "Tum hi ho", singer: "Arijit Singh, Mithoon" },
    {lyr:script22 ,ele: aud22, audioname: "Ved Lavlay", singer: "Ajay-Atul, Vishal Dadlani" },
    {lyr:script23 ,ele: aud23, audioname: "Wrecking Ball", singer: "miley Cyrus" }

];
