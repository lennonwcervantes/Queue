var i = 0;
var mi = 0;
var ci = 0;
var me = document.getElementsByClassName("menu");
var t = document.getElementsByClassName("top");
var m = document.getElementsByClassName("middle");
var b = document.getElementsByClassName("bottom");
var f = document.getElementsByClassName("foot");
var h = document.getElementsByClassName("home");
var d = document.getElementsByClassName("discover");
var e = document.getElementsByClassName("events");
var v = document.getElementsByClassName("venues");
var c = document.getElementsByClassName("contact");
var bo = document.getElementsByTagName("body");
var mt = document.getElementsByClassName("middleText");
var mt2 = document.getElementsByClassName("middleText2");
var mt3 = document.getElementsByClassName("middleText3");
var mt4 = document.getElementsByClassName("middleText4");
var il = document.getElementsByClassName("instagramLink");
var sl = document.getElementsByClassName("spotifyLink");
var tl = document.getElementsByClassName("twitterLink");
var fu = document.getElementsByClassName("followUs");
var dot = document.getElementsByClassName("dot");
var p3bp = document.getElementsByClassName("page3BandPic");
var p3ap = document.getElementsByClassName("page3AlbumPic");
var p3a = document.getElementsByClassName("page3About");
var p3d = document.getElementsByClassName("page3Discription");
var p3al = document.getElementsByClassName("page3Album");
var p3ad = document.getElementsByClassName("page3AlbumDiscription");
var p3il = document.getElementsByClassName("page3InstagramLink");
var p3fl = document.getElementsByClassName("page3FacebookLink");
var p3bl = document.getElementsByClassName("page3BandcampLink");
var p3sl = document.getElementsByClassName("page3SpotifyLink");
var p3rl = document.getElementsByClassName("page3ReverbnationLink");
var p4o = document.getElementsByClassName("page4OTR");
var p4s = document.getElementsByClassName("page4S");
var p4e = document.getElementsByClassName("page4E");

function startUp(){
	i = arguments[0];
if(i==0) {
	
	bo[0].style.backgroundImage="url('backgroundImage.png')";
	bo[0].style.backgroundColor="none";
	
	
	m[0].innerHTML="<img src='Homepage1.png' height='100%' width='100%' onclick='startUp(1)'></img>";
	m[0].style.opacity="0.5";
	
	mt[0].style.display="inline";
	mt[0].style.position="absolute";
	mt[0].style.marginTop="33vh";
	mt[0].style.marginLeft="60vw";
	mt[0].style.height="15vh";
	mt[0].style.width="35vw";
	mt[0].style.color="#DAC826";
	mt[0].style.fontSize="5vw";
	mt[0].style.fontFamily="komu-a, sans-serif";
	mt[0].style.fontStretch="ultra-condensed";
	mt[0].style.fontWeight="400";
	mt[0].style.fontStyle="normal";
	
	mt[0].innerHTML="DISCOVER NEW MUSIC";
	
	//display: inline;
	//position: absolute;
	//margin-top: 50vh;
	//margin-left: 60vw;
	//height: 15vh;
	//width: 35vw;
	//color: #DAC826;
	//font-size: 5vw;
	//font-family: komu-a, sans-serif;
	//font-stretch: ultra-condensed;
	//font-weight: 400;
	//font-style: normal;
	
	mt2[0].style.display="inline";
	mt2[0].style.position="absolute";
	mt2[0].style.marginTop="50vh";
	mt2[0].style.marginLeft="60vw";
	mt2[0].style.height="15vh";
	mt2[0].style.width="35vw";
	mt2[0].style.color="#DAC826";
	mt2[0].style.fontSize="5vw";
	mt2[0].style.fontFamily="komu-a, sans-serif";
	mt2[0].style.fontStretch="ultra-condensed";
	mt2[0].style.fontWeight="400";
	mt2[0].style.fontStyle="normal";
	
	mt2[0].innerHTML="FROM LOCAL ARTISTS";
	mt3[0].style.display="none";
	mt4[0].style.display="none";

	//me[0].innerHTML="MENU";
	
	fu[0].innerHTML="FOLLOW US";
	
	il[0].style.display="block";
	
	sl[0].style.display="block";

	tl[0].style.display="block";

	fu[0].style.display="block";
	
	
	dot[i].style.backgroundColor="#717171";
	dot[5].style.backgroundColor="#bbb";
	
    i += 1;
	//clearInterval(time);
} else if (i ==1) {
	m[0].innerHTML="<img src='Homepage2.png' height='100%' width='100%' onclick='startUp(2)'></img>";
	m[0].style.opacity="0.5";
	
	mt[0].innerHTML="01.";
	mt[0].style.fontFamily="export-stencil";
	mt[0].style.color="#F3C93F";
	mt[0].style.fontSize="7vw";
	mt[0].style.marginLeft="15vw";
	mt[0].style.marginTop="20vh";
	mt[0].style.width="80vw";
	mt[0].style.display="block";
	
	mt2[0].innerHTML="ARTIST OF THE";
	mt2[0].style.marginTop="34vh";
	mt2[0].style.fontSize="10vw";
	mt2[0].style.marginLeft="15vw";
	mt2[0].style.width="80vw";
	mt2[0].style.fontFamily="export-stencil";
	mt2[0].style.display="block";
	
	mt3[0].innerHTML="MONTH";
	mt3[0].style.fontSize="10vw";
	mt3[0].style.marginTop="50vh";
	mt3[0].style.marginLeft="60vw";
	mt3[0].style.fontFamily="export-stencil";
	mt3[0].style.display="block";
	
	mt4[0].innerHTML="BAZOOKA SHARKS";
	mt4[0].style.fontFamily="komu-a, sans-serif";
	mt4[0].style.marginTop="72vh";
	mt4[0].style.marginLeft="15vw";
	mt4[0].style.width="90vw";
	mt4[0].style.fontSize="15vw";
	mt4[0].style.color="#FA4D3D";
	mt4[0].style.display="block";
	

	bo[0].style.backgroundColor="#2E313B";
	
	il[0].style.display="none";
	
	sl[0].style.display="none";
	
	tl[0].style.display="none";
	
	fu[0].style.display="none";
	
	dot[i].style.backgroundColor="#717171";
	dot[i-1].style.backgroundColor="#bbb";
	
	i += 1;
	//clearInterval(time);
} else if (i==2) {
	
	bo[0].style.backgroundImage="none";
	bo[0].style.backgroundColor="#2E313B";
	
	m[0].innerHTML="<img src='Homepage3.png' height='100%' width='100%' onclick='startUp(3)'></img>";
	m[0].style.opacity="0.5";
	
	il[0].style.display="none";
	
	sl[0].style.display="none";
	
	tl[0].style.display="none";
	
	fu[0].style.display="none";
	
	mt[0].style.display="none";
	
	mt2[0].style.display="none";
	
	mt3[0].style.display="none";
	
	mt4[0].style.display="none";
	
	p3bp[0].innerHTML="<img src='bandPic.png' height='100%' width='100%'></img>";
	p3bp[0].style.position="absolute";
	p3bp[0].style.marginTop="20vh";
	p3bp[0].style.marginLeft="20vw";
	p3bp[0].style.height="20vh";
	p3bp[0].style.width="10vw";
	p3bp[0].style.display="inline";
	
	p3ap[0].innerHTML="<img src='albumPic.png' height='100%' width='100%'></img>";
	p3ap[0].style.position="absolute";
	p3ap[0].style.marginTop="20vh";
	p3ap[0].style.marginLeft="60vw";
	p3ap[0].style.height="20vh";
	p3ap[0].style.width="10vw";
	p3ap[0].style.display="inline";

	
	p3a[0].innerHTML="ABOUT THE BAZOOKA SHARKZ";
	p3a[0].style.position="absolute";
	p3a[0].style.marginTop="20vh";
	p3a[0].style.marginLeft="30vw";
	p3a[0].style.height="20vh";
	p3a[0].style.width="10vw";
	p3a[0].style.color="#F3C93F";
	p3a[0].style.fontFamily="komu-a, sans-serif";
	p3a[0].style.display="inline";

	
	p3d[0].innerHTML="A tatto artist, a fisherman, an epileptic punk rocker, a general manager,a mechanic, and a chef converge togther in bazooka sharkz, a punk band based out of Portland, Oregon.<br><br>Together they produce a fast and dirty old school punk vibe that brings people together through their music. Drawing from all walks of life they have a unique following, and share their passion for the genre onstage. Members of the Bazooka Sharkz have been deeply engaged in the punk scenearound Portland for over fifteen years, each of them coming from other well known bands.<br><br>Formed in 2017 they have played with bands like Rum Rebellion, Boss' daughter, The Brass, Get Dead, NOFU, Voice of addiction, Some kind of nightmare, C.C. Potatoe, Wolfhounds, Rise and Strike, and Burn Burn Burn at various venues throughout Oregon.";
	p3d[0].style.position="absolute";
	p3d[0].style.marginTop="20vh";
	p3d[0].style.marginLeft="30vw";
	p3d[0].style.height="20vh";
	p3d[0].style.width="10vw";
	p3d[0].style.color="#DADDD8";
	p3d[0].style.fontFamily="komu-a, sans-serif";
	p3d[0].style.display="inline";

	
	
	p3al[0].innerHTML="RECOMMENDED ALBUM<br>ALBUM NAME<br>YEAR";
	p3al[0].style.position="absolute";
	p3al[0].style.marginTop="20vh";
	p3al[0].style.marginLeft="70vw";
	p3al[0].style.height="20vh";
	p3al[0].style.width="10vw";
	p3al[0].style.color="#F3C93F";
	p3al[0].style.fontFamily="komu-a, sans-serif";
	p3al[0].style.display="inline";

	
	p3ad[0].innerHTML="This album is everything we could ever want in a fast dirty punk album. It's got everything from hardcore to ska elements and brings it all together. There is a song for everyone and something that any punk fan will love.";
	p3ad[0].style.position="absolute";
	p3ad[0].style.marginTop="40vh";
	p3ad[0].style.marginLeft="70vw";
	p3ad[0].style.height="20vh";
	p3ad[0].style.width="10vw";
	p3ad[0].style.color="#DADDD8";
	p3ad[0].style.fontFamily="komu-a, sans-serif";
	p3ad[0].style.display="inline";

	
	p3il[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	p3il[0].style.position="absolute";
	p3il[0].style.marginTop="20vh";
	p3il[0].style.marginLeft="30vw";
	p3il[0].style.height="20vh";
	p3il[0].style.width="10vw";
	p3il[0].style.display="inline";

	
	p3fl[0].innerHTML="<img src='facebookRedLink.png' height='100%' width='100%'></img>";
	p3fl[0].style.position="absolute";
	p3fl[0].style.marginTop="20vh";
	p3fl[0].style.marginLeft="40vw";
	p3fl[0].style.height="20vh";
	p3fl[0].style.width="10vw";
	p3fl[0].style.display="inline";

	
	
	p3bl[0].innerHTML="<img src='bandcampRedLink.png' height='100%' width='100%'></img>";
	p3bl[0].style.position="absolute";
	p3bl[0].style.marginTop="30vh";
	p3bl[0].style.marginLeft="40vw";
	p3bl[0].style.height="20vh";
	p3bl[0].style.width="10vw";
	p3bl[0].style.display="inline";

	p3sl[0].innerHTML="<img src='spotifyRedLink.png' height='100%' width='100%'></img>";
	p3sl[0].style.position="absolute";
	p3sl[0].style.marginTop="30vh";
	p3sl[0].style.marginLeft="40vw";
	p3sl[0].style.height="20vh";
	p3sl[0].style.width="10vw";
	p3sl[0].style.display="inline";

	p3rl[0].innerHTML="<img src='reverbnationRedLink.png' height='100%' width='100%'></img>";
	p3rl[0].style.position="absolute";
	p3rl[0].style.marginTop="30vh";
	p3rl[0].style.marginLeft="40vw";
	p3rl[0].style.height="20vh";
	p3rl[0].style.width="10vw";
	p3rl[0].style.display="inline";

	
	
	dot[i].style.backgroundColor="#717171";
	dot[i-1].style.backgroundColor="#bbb";
	
	i += 1;
	
	//clearInterval(time);
} else if (i==3) {
	m[0].innerHTML="<img src='Homepage4.png' height='100%' width='100%' onclick='startUp(4)'></img>";
	m[0].style.opacity="0.5";
	
	mt[0].innerHTML="02.";
	mt[0].style.display="block";
	
	mt2[0].innerHTML="CHECK OUT OUR";
	mt2[0].style.display="block";
	
	mt3[0].innerHTML="PLAYLISTS";
	mt3[0].style.display="block";
	mt3[0].style.color="#FA4D3D";
	
	il[0].style.display="none";
	
	sl[0].style.display="none";
	
	tl[0].style.display="none";
	
	fu[0].style.display="none";
	
	p3bp[0].style.display="none";
	p3ap[0].style.display="none";
	p3a[0].style.display="none";
	p3d[0].style.display="none";
	p3al[0].style.display="none";
	p3ad[0].style.display="none";
	p3il[0].style.display="none";
	p3fl[0].style.display="none";
	p3bl[0].style.display="none";
	p3sl[0].style.display="none";
	p3rl[0].style.display="none";
	
	p4o[0].innerHTML="<img src='onTheRise.png' height='100%' width='100%'></img>";
	p4o[0].style.display="block";
	p4s[0].innerHTML="<img src='showcase.png' height='100%' width='100%'></img>";
	p4s[0].style.display="block";
	p4e[0].innerHTML="<img src='essentials.png' height='100%' width='100%'></img>";
	p4e[0].style.display="block";
	
	dot[i].style.backgroundColor="#717171";
	dot[i-1].style.backgroundColor="#bbb";
	
	i +=1;
	
	//clearInterval(time);
} else if (i==4) {
	m[0].innerHTML="<img src='Homepage5.png' height='100%' width='100%' onclick='startUp(5)'></img>";
	m[0].style.opacity="0.5";
	
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
	il[0].style.display="none";
	
	sl[0].style.display="none";
	
	tl[0].style.display="none";
	
	fu[0].style.display="none";
	
	mt[0].innerHTML="03.";
	mt[0].style.display="block";
	
	mt2[0].innerHTML="ABOUT";
	mt2[0].style.display="block";
	
	mt3[0].innerHTML="US";
	mt3[0].style.display="block";
	mt3[0].style.color="#FA4D3D";
	
	mt4[0].innerHTML="HERE AT QUEUE WE FEEL IT IS IMPORTANT TO EMPOWER BOTH THE ARTIST AND THE LISTENER.<br><br>QUEUE TAKES AN IN DEPTH LOOK AT SOME OFTHE MOST TALENTED LOCAL ARTIST BASED IN OREGON. IT'S AN ESSENTIAL HOME FOR FANS OF ALL TYPES OF MUSIC AND ARTISTS.";
	mt4[0].style.display="block";
	mt4[0].style.color="#DADDD8";
	mt4[0].style.fontSize="2vw";
	
	dot[i].style.backgroundColor="#717171";
	dot[i-1].style.backgroundColor="#bbb";
	
	i += 1;
	
	//clearInterval(time);
} else if (i==5) {
	m[0].innerHTML="<img src='Homepage6.png' height='100%' width='100%' onclick='startUp(0)'></img>";
	m[0].style.opacity="0.5";
	
	mt[0].style.display="block";
	mt[0].innerHTML="WOULD YOU LIKE TO BE FEATURED? HEAD OVER TO THE <span style='text-decoration:underline'>CONTACT PAGE</span>.";
	
	mt2[0].style.display="none";
	
	mt3[0].style.display="none";
	
	mt4[0].style.display="none";
	
	il[0].style.display="none";
	
	sl[0].style.display="none";
	
	tl[0].style.display="none";
	
	fu[0].style.display="none";
	
	dot[i].style.backgroundColor="#717171";
	dot[i-1].style.backgroundColor="#bbb";
	
	i = 0;
	
	//clearInterval(time);
}
	//var time = setTimeout(startUp, 3000);
};

//display: inline-flex;
//margin-top: 13vh;
//margin-left: 7vw;
//height: 4vh;
//width: 4vw;
//border: solid;
//border-color: red;

function menuOpen() {
	if(mi==0) {
		
		me[0].style.color="#DAC826";
		me[0].style.display="inline-flex";
		me[0].style.marginTop="4vh";
		me[0].style.marginLeft="0vw";
		me[0].style.height="104vh";
		me[0].style.width="100vw";
		me[0].style.border="solid";
		me[0].style.borderColor="red";
		me[0].style.opacity="0.5";
		h[0].style.zIndex="2";
		h[0].style.display="block";
		d[0].style.zIndex="2";
		d[0].style.display="block";
		e[0].style.zIndex="2";
		e[0].style.display="block";
		v[0].style.zIndex="2";
		v[0].style.display="block";
		c[0].style.zIndex="2";
		c[0].style.display="block";
		mi += 1;
	}else if (mi==1){
		
		me[0].style.display="inline-flex";
		me[0].style.marginTop="13vh";
		me[0].style.marginLeft="7vw";
		me[0].style.height="4vh";
		me[0].style.width="4vw";
		me[0].style.opacity="1";
		me[0].style.border="solid";
		me[0].style.borderColor="red";
		h[0].style.display="none";
		d[0].style.display="none";
		e[0].style.display="none";
		v[0].style.display="none";
		c[0].style.display="none";
		mi -= 1;
	}
	
	
};

function home() {
	
	mi = 1;
	menuOpen();
	startUp(0);
	
};

function discover() {
	menuOpen();
	
	m[0].style.width="100vw";
	m[0].style.height="510vh";
	bo[0].style.overflowX="hidden";
	bo[0].style.overflowY="scroll";
	m[0].innerHTML="<img src='DISCOVER.png' height='100%' width='100%'></img>";
};

function events() {
	menuOpen();
	
	m[0].style.width="100vw";
	m[0].style.height="510vh";
	bo[0].style.overflowX="hidden";
	bo[0].style.overflowY="scroll";
	m[0].innerHTML="<img src='EVENTS.png' height='100%' width='100%'></img>";
	
};


function venues() {
	menuOpen();
	
	m[0].style.width="100vw";
	m[0].style.height="510vh";
	bo[0].style.overflowX="hidden";
	bo[0].style.overflowY="scroll";
	m[0].innerHTML="<img src='VENUES.png' height='100%' width='100%'></img>";
};

function contact() {
	menuOpen();
	m[0].innerHTML="<img src='CONTACT.png' height='100%' width='100%'></img>";
};