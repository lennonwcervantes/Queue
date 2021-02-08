var i = 0;
var mi = 0;
var ci = 0;
var si = 0;
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
var dots = document.getElementsByClassName("dots");
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

var dh = document.getElementsByClassName("discoverHeader");
var dp1 = document.getElementsByClassName("discoverPic1");
var dt1 = document.getElementsByClassName("discoverTitle1");
var dtext1 = document.getElementsByClassName("discoverText1");

var dbl1 = document.getElementsByClassName("discoverBandcamp1");
var dsl1 = document.getElementsByClassName("discoverSpotify1");
var dil1 = document.getElementsByClassName("discoverInstagram1");

var dp2 = document.getElementsByClassName("discoverPic2");
var dt2 = document.getElementsByClassName("discoverTitle2");
var dtext2 = document.getElementsByClassName("discoverText2");

var dbl2 = document.getElementsByClassName("discoverBandcamp2");
var dsl2 = document.getElementsByClassName("discoverSpotify2");
var dil2 = document.getElementsByClassName("discoverInstagram2");
var dfl2 = document.getElementsByClassName("discoverFacebook2");

var dp3 = document.getElementsByClassName("discoverPic3");
var dt3 = document.getElementsByClassName("discoverTitle3");
var dtext3 = document.getElementsByClassName("discoverText3");

var dil3 = document.getElementsByClassName("discoverInstagram3");
var dsol3 = document.getElementsByClassName("discoverSoundcloud3");

var dp4 = document.getElementsByClassName("discoverPic4");
var dt4 = document.getElementsByClassName("discoverTitle4");
var dtext4 = document.getElementsByClassName("discoverText4");

var dsl4 = document.getElementsByClassName("discoverSpotify4");
var dil4 = document.getElementsByClassName("discoverInstagram4");

var eh = document.getElementsByClassName("eventsHeader");
var ep1 = document.getElementsByClassName("eventsPic1");
var et1 = document.getElementsByClassName("eventsTitle1");
var etext1 = document.getElementsByClassName("eventsText1");
var ei1 = document.getElementsByClassName("eventsInstagram1");

var ep2 = document.getElementsByClassName("eventsPic2");
var et2 = document.getElementsByClassName("eventsTitle2");
var etext2 = document.getElementsByClassName("eventsText2");
var ei2 = document.getElementsByClassName("eventsInstagram2");

var ep3 = document.getElementsByClassName("eventsPic3");
var et3 = document.getElementsByClassName("eventsTitle3");
var etext3 = document.getElementsByClassName("eventsText3");

var ep4 = document.getElementsByClassName("eventsPic4");
var et4 = document.getElementsByClassName("eventsTitle4");
var etext4 = document.getElementsByClassName("eventsText4");
var ei4 = document.getElementsByClassName("eventsInstagram4");

var ep5 = document.getElementsByClassName("eventsPic5");
var et5 = document.getElementsByClassName("eventsTitle5");
var etext5 = document.getElementsByClassName("eventsText5");
var ei5 = document.getElementsByClassName("eventsInstagram5");

var vh = document.getElementsByClassName("venueHeader");
var vp1 = document.getElementsByClassName("venuePic1");
var vt1 = document.getElementsByClassName("venueTitle1");
var vtext1 = document.getElementsByClassName("venueText1");

var vp2 = document.getElementsByClassName("venuePic2");
var vt2 = document.getElementsByClassName("venueTitle2");
var vtext2 = document.getElementsByClassName("venueText2");

var vp3 = document.getElementsByClassName("venuePic3");
var vt3 = document.getElementsByClassName("venueTitle3");
var vtext3 = document.getElementsByClassName("venueText3");

var vp4 = document.getElementsByClassName("venuePic4");
var vt4 = document.getElementsByClassName("venueTitle4");
var vtext4 = document.getElementsByClassName("venueText4");

var vp5 = document.getElementsByClassName("venuePic5");
var vt5 = document.getElementsByClassName("venueTitle5");
var vtext5 = document.getElementsByClassName("venueText5");

var ct = document.getElementsByClassName("contactText");
//<div class="venuePic1"></div>
//<div class="venueTitle1"></div>
//<div class="venueText1"></div>

function startUp(){
	i = arguments[0];
if(i==0) {
	
	//bo[0].style.backgroundImage="url('backgroundImage.png')";
	bo[0].style.backgroundColor="none";
	
	m[0].innerHTML="<img src='backgroundImage.png' height='100%' width='100%' onclick='startUp(1)'></img>";
	//m[0].innerHTML="";
	m[0].style.opacity="1";
	
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
	
	//mt[0].style.display="inline";
	//mt[0].style.position="absolute";
	//mt[0].style.marginTop="33vh";
	//mt[0].style.marginLeft="60vw";
	//mt[0].style.height="15vh";
	//mt[0].style.width="35vw";
	//mt[0].style.color="#DAC826";
	//mt[0].style.fontSize="5vw";
	//mt[0].style.fontFamily="komu-a, sans-serif";
	//mt[0].style.fontStretch="ultra-condensed";
	//mt[0].style.fontWeight="400";
	//mt[0].style.fontStyle="normal";
	//mt[0].innerHTML="DISCOVER NEW MUSIC";
	
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
	
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
	
	dot[i].style.backgroundColor="#717171";
	dot[i + 5].style.backgroundColor="#bbb";
	dot[i + 4].style.backgroundColor="#bbb";
	dot[i + 3].style.backgroundColor="#bbb";
	dot[i + 2].style.backgroundColor="#bbb";
	dot[i + 1].style.backgroundColor="#bbb";
	
	
    i += 1;
	//clearInterval(time);
} else if (i ==1) {
	
	bo[0].style.backgroundImage="none";
	
	m[0].innerHTML="<img src='backgroundImage.png' height='100%' width='100%' onclick='startUp(2)'></img>";
	m[0].style.opacity="0";
	
	mt[0].innerHTML="01.";
	mt[0].style.fontFamily="export-stencil";
	mt[0].style.color="#F3C93F";
	mt[0].style.fontSize="5.4vw";
	mt[0].style.marginLeft="21vw";
	mt[0].style.marginTop="19vh";
	mt[0].style.width="80vw";
	mt[0].style.display="block";
	mt[0].style.height="15vh";
	mt[0].style.fontWeight="400";
	mt[0].style.fontStyle="normal";
	mt[0].style.position="absolute";
	mt[0].style.fontStretch="ultra-condensed";
	

	
	mt2[0].innerHTML="ARTIST OF THE";
	mt2[0].style.marginTop="29vh";
	mt2[0].style.fontSize="7.5vw";
	mt2[0].style.marginLeft="21vw";
	mt2[0].style.width="80vw";
	mt2[0].style.fontFamily="export-stencil";
	mt2[0].style.display="block";
	mt2[0].style.position="absolute";
	mt2[0].style.height="15vh";
	mt2[0].style.color="#DAC826";
	mt2[0].style.fontStretch="ultra-condensed";
	mt2[0].style.fontWeight="400";
	mt2[0].style.fontStyle="normal";

	
	mt3[0].innerHTML="MONTH";
	mt3[0].style.fontSize="11vw";
	mt3[0].style.marginTop="40vh";
	mt3[0].style.marginLeft="43.5vw";
	mt3[0].style.fontFamily="export-stencil";
	mt3[0].style.display="block";
	mt3[0].style.color="#F3C93F";
	
	mt4[0].innerHTML="BAZOOKA SHARKZ";
	mt4[0].style.fontFamily="komu-a, sans-serif";
	mt4[0].style.marginTop="58vh";
	mt4[0].style.marginLeft="21vw";
	mt4[0].style.width="90vw";
	mt4[0].style.fontSize="11vw";
	mt4[0].style.color="#FA4D3D";
	mt4[0].style.display="block";
	

	bo[0].style.backgroundColor="#2E313B";
	
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
	
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";

	dot[5].style.backgroundColor="#bbb";
	dot[4].style.backgroundColor="#bbb";
	dot[3].style.backgroundColor="#bbb";
	dot[2].style.backgroundColor="#bbb";
	dot[0].style.backgroundColor="#bbb";

	dot[i].style.backgroundColor="#717171";
	
	i += 1;
	//clearInterval(time);
} else if (i==2) {
	
	bo[0].style.backgroundImage="none";
	bo[0].style.backgroundColor="#2E313B";
	//<span onclick=menuOpen(1);>CLOSE</span>
	
	m[0].innerHTML="<img src='backgroundImage.png' height='100%' width='100%' onclick='startUp(3)'></img>";
	m[0].style.opacity="0";
	
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
	p3bp[0].style.marginTop="22.5vh";
	p3bp[0].style.marginLeft="7vw";
	p3bp[0].style.height="33vh";
	p3bp[0].style.width="21vw";
	p3bp[0].style.display="inline";
	
	p3ap[0].innerHTML="<img src='albumPic.png' height='100%' width='100%'></img>";
	p3ap[0].style.position="absolute";
	p3ap[0].style.marginTop="22.5vh";
	p3ap[0].style.marginLeft="50.5vw";
	p3ap[0].style.height="40vh";
	p3ap[0].style.width="20.5vw";
	p3ap[0].style.display="inline";

	
	p3a[0].innerHTML="ABOUT THE BAZOOKA SHARKZ";
	p3a[0].style.position="absolute";
	p3a[0].style.marginTop="22.3vh";
	p3a[0].style.marginLeft="28.7vw";
	p3a[0].style.height="6vh";
	p3a[0].style.width="20vw";
	p3a[0].style.color="#F3C93F";
	
	//p3a[0].style.border="solid";
	//p3a[0].style.borderColor="red";
	//p3a[0].style.fontFamily="komu-a, sans-serif";
	p3a[0].style.fontFamily="komu-a, sans-serif";
	p3a[0].style.fontSize="2.5vw";
	p3a[0].style.display="inline";

	
	p3d[0].innerHTML="A tatto artist, a fisherman, an epileptic punk rocker, a general manager,a mechanic, and a chef converge togther in bazooka sharkz, a punk band based out of Portland, Oregon.<br><br>Together they produce a fast and dirty old school punk vibe that brings people together through their music. Drawing from all walks of life they have a unique following, and share their passion for the genre onstage. Members of the Bazooka Sharkz have been deeply engaged in the punk scenearound Portland for over fifteen years, each of them coming from other well known bands.<br><br>Formed in 2017 they have played with bands like Rum Rebellion, Boss' daughter, The Brass, Get Dead, NOFU, Voice of addiction, Some kind of nightmare, C.C. Potatoe, Wolfhounds, Rise and Strike, and Burn Burn Burn at various venues throughout Oregon.";
	p3d[0].style.position="absolute";
	p3d[0].style.marginTop="27vh";
	p3d[0].style.marginLeft="29vw";
	p3d[0].style.height="40vh";
	p3d[0].style.width="20vw";
	p3d[0].style.color="#DADDD8";
	//p3d[0].style.border="solid";
	//p3d[0].style.borderColor="blue";
	p3d[0].style.display="inline";
	p3d[0].style.fontWeight="700";

	
	
	p3al[0].innerHTML="RECOMMENDED ALBUM<br>ALBUM NAME<br>YEAR";
	p3al[0].style.position="absolute";
	p3al[0].style.marginTop="22vh";
	p3al[0].style.marginLeft="71.8vw";
	p3al[0].style.height="15vh";
	p3al[0].style.width="20vw";
	p3al[0].style.color="#F3C93F";
	p3al[0].style.fontFamily="komu-a, sans-serif";
	p3al[0].style.fontSize="2.3vw";
	p3al[0].style.display="inline";
	//p3al[0].style.border="solid";
	//p3al[0].style.borderColor="red";

	
	p3ad[0].innerHTML="This album is everything we could ever want in a fast dirty punk album. It's got everything from hardcore to ska elements and brings it all together. There is a song for everyone and something that any punk fan will love.";
	p3ad[0].style.position="absolute";
	p3ad[0].style.marginTop="38vh";
	p3ad[0].style.marginLeft="71.8vw";
	p3ad[0].style.height="20vh";
	p3ad[0].style.width="20vw";
	p3ad[0].style.color="#DADDD8";
	p3ad[0].style.fontFamily="serif";
	p3ad[0].style.fontWeight="700";
	p3ad[0].style.display="inline";
	//p3ad[0].style.border="solid";
	//p3ad[0].style.borderColor="red";

	
	p3il[0].innerHTML='<a href="https://www.instagram.com/bazooka_sharkz/?hl=en" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	p3il[0].style.position="absolute";
	p3il[0].style.marginTop="53.1vh";
	p3il[0].style.marginLeft="7.2vw";
	p3il[0].style.height="6vh";
	p3il[0].style.width="3vw";
	p3il[0].style.zIndex="2";
	p3il[0].style.display="inline";

	
	p3fl[0].innerHTML='<a href="https://www.facebook.com/Bazookasharkz/?view_public_for=226665381472319" target="_blank"><img src="facebookRedLink.png" height="100%" width="100%"></img></a>';
	p3fl[0].style.position="absolute";
	p3fl[0].style.marginTop="53.1vh";
	p3fl[0].style.marginLeft="10.3vw";
	p3fl[0].style.height="6vh";
	p3fl[0].style.width="3vw";
	p3fl[0].style.zIndex="2";
	p3fl[0].style.display="inline";

	
	
	p3bl[0].innerHTML='<a href="https://bazookasharkz.bandcamp.com/releases" target="_blank"><img src="bandcampRedLink.png" height="100%" width="100%"></img></a>';
	p3bl[0].style.position="absolute";
	p3bl[0].style.marginTop="63vh";
	p3bl[0].style.marginLeft="50.5vw";
	p3bl[0].style.height="6vh";
	p3bl[0].style.width="3vw";
	p3bl[0].style.zIndex="2";
	p3bl[0].style.display="inline";

	p3sl[0].innerHTML='<a href="https://open.spotify.com/artist/212VFnm7CQdUTd8TtiioJX?si=x60sNBKySuum8QLkSHC6Sg" target="_blank"><img src="spotifyRedLink.png" height="100%" width="100%"></img></a>';
	p3sl[0].style.position="absolute";
	p3sl[0].style.marginTop="63vh";
	p3sl[0].style.marginLeft="54.5vw";
	p3sl[0].style.height="6vh";
	p3sl[0].style.width="3vw";
	p3sl[0].style.zIndex="2";
	p3sl[0].style.display="inline";

	p3rl[0].innerHTML='<a href="https://www.reverbnation.com/bazookasharkz" target="_blank"><img src="reverbnationRedLink.png" height="100%" width="100%"></img></a>';
	p3rl[0].style.position="absolute";
	p3rl[0].style.marginTop="63vh";
	p3rl[0].style.marginLeft="58.5vw";
	p3rl[0].style.height="6vh";
	p3rl[0].style.width="3vw";
	p3rl[0].style.zIndex="2";
	p3rl[0].style.display="inline";

	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
	
	dot[5].style.backgroundColor="#bbb";
	dot[4].style.backgroundColor="#bbb";
	dot[3].style.backgroundColor="#bbb";
	dot[0].style.backgroundColor="#bbb";
	dot[1].style.backgroundColor="#bbb";
	dot[i].style.backgroundColor="#717171";
	
	
	i += 1;
	
	//clearInterval(time);
} else if (i==3) {
	m[0].innerHTML="<img src='Homepage4.png' height='100%' width='100%' onclick='startUp(4)'></img>";
	m[0].style.opacity="0";
	
	mt[0].innerHTML="02.";
	mt[0].style.display="block";
	mt[0].style.marginTop="21vh";
	mt[0].style.marginLeft="22vw";
	mt[0].style.height="15vh";
	mt[0].style.width="35vw";
	mt[0].style.fontSize="5vw";
	mt[0].style.fontFamily="export-stencil";
	mt[0].style.position="absolute";
	mt[0].style.color="#DAC826";
	mt[0].style.fontStretch="ultra-condensed";
	mt[0].style.fontWeight="400";
	mt[0].style.fontStyle="normal";
	
	mt2[0].innerHTML="CHECK OUT OUR";
	mt2[0].style.display="block";
mt2[0].style.marginTop="29vh";
mt2[0].style.fontSize="7.5vw";
mt2[0].style.marginLeft="21vw";
mt2[0].style.width="80vw";
mt2[0].style.fontFamily="export-stencil";
mt2[0].style.position="absolute";
mt2[0].style.height="15vh";
mt2[0].style.color="#DAC826";
mt2[0].style.fontStretch="ultra-condensed";
mt2[0].style.fontWeight="400";
mt2[0].style.fontStyle="normal";
	
	
	mt3[0].innerHTML="PLAYLISTS";
	mt3[0].style.display="block";
	mt3[0].style.color="#FA4D3D";
	mt3[0].style.marginLeft="41vw";
	mt3[0].style.marginTop="42.9vh";
	mt3[0].style.fontFamily="komu-a, sans-serif";
	
	p4o[0].innerHTML='<a href="https://open.spotify.com/playlist/7epbMyoV1w0v0N0lA5hv1L?si=76RSGyMeRiaEvIb4kUiv9A" target="_blank"><img src="onTheRise.png" height="100%" width="100%"></img></a>';
	p4o[0].style.zIndex="2";
	p4o[0].style.display="block";
	p4s[0].innerHTML='<a href="https://open.spotify.com/playlist/30pBT6pgXcoeSH9z5PVeVH?si=h-ijTmVDQUKtGPszV-HyeQ" target="_blank"><img src="showcase.png" height="100%" width="100%"></img></a>';
	p4s[0].style.zIndex="2";
	p4s[0].style.display="block";
	p4e[0].innerHTML='<a href="https://open.spotify.com/playlist/4c6qPLjSjdKpBYLdE1M82W?si=ExHgbHmLTw2ey5pe2zZfbg" target="_blank"><img src="essentials.png" height="100%" width="100%"></img></a>';
	p4e[0].style.display="block";
	p4e[0].style.zIndex="2";

	
	mt4[0].style.display="none";
	
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
	
	
	
	
	dot[5].style.backgroundColor="#bbb";
	dot[4].style.backgroundColor="#bbb";
	dot[0].style.backgroundColor="#bbb";
	dot[2].style.backgroundColor="#bbb";
	dot[1].style.backgroundColor="#bbb";
	dot[i].style.backgroundColor="#717171";
	
	
	i +=1;
	
	//clearInterval(time);
} else if (i==4) {
	m[0].innerHTML="<img src='Homepage5.png' height='100%' width='100%' onclick='startUp(5)'></img>";
	m[0].style.opacity="0";
	
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
	
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
	il[0].style.display="none";
	
	sl[0].style.display="none";
	
	tl[0].style.display="none";
	
	fu[0].style.display="none";
	
	mt[0].innerHTML="03.";
	mt[0].style.display="block";
	
mt[0].style.display="inline";
mt[0].style.position="absolute";
	mt[0].style.marginTop="21vh";
	mt[0].style.marginLeft="22vw";
mt[0].style.height="15vh";
mt[0].style.width="35vw";
	mt[0].style.fontSize="5vw";
mt[0].style.fontFamily="export-stencil";
mt[0].style.color="#DAC826";
mt[0].style.fontStretch="ultra-condensed";
	mt[0].style.fontWeight="400";
	mt[0].style.fontStyle="normal";
	
	mt2[0].innerHTML="ABOUT";
	mt2[0].style.display="block";
	
	//mt2[0].innerHTML="CHECK OUT OUR";
	//mt2[0].style.display="block";
//mt2[0].style.marginTop="29vh";
//mt2[0].style.fontSize="7.5vw";
//mt2[0].style.marginLeft="21vw";
//mt2[0].style.width="80vw";
//mt2[0].style.fontFamily="export-stencil";
//mt2[0].style.position="absolute";
//mt2[0].style.height="15vh";
//mt2[0].style.color="#DAC826";
//mt2[0].style.fontStretch="ultra-condensed";
//mt2[0].style.fontWeight="400";
//mt2[0].style.fontStyle="normal";
	
	mt3[0].innerHTML="US";
	mt3[0].style.display="block";
	mt3[0].style.color="#FA4D3D";
	mt3[0].style.marginTop="41vh";
	mt3[0].style.marginLeft="36vw";
	mt3[0].style.height="60vh";
	mt3[0].style.width="27vw";
	
	
	mt4[0].innerHTML="HERE AT QUEUE WE FEEL IT IS IMPORTANT TO EMPOWER BOTH THE ARTIST AND THE LISTENER.<br><br>QUEUE TAKES AN IN DEPTH LOOK AT SOME OFTHE MOST TALENTED LOCAL ARTIST BASED IN OREGON. IT'S AN ESSENTIAL HOME FOR FANS OF ALL TYPES OF MUSIC AND ARTISTS.";
	mt4[0].style.display="block";
	mt4[0].style.color="#DADDD8";
	mt4[0].style.fontSize="2.5vw";
	mt4[0].style.marginTop="30.5vh";
	mt4[0].style.marginLeft="50.5vw";
	mt4[0].style.height="60vh";
	mt4[0].style.width="27vw";
	//mt4[0].style.border="solid";
	//mt4[0].style.borderColor="red";
	
	dot[5].style.backgroundColor="#bbb";
	dot[0].style.backgroundColor="#bbb";
	dot[3].style.backgroundColor="#bbb";
	dot[2].style.backgroundColor="#bbb";
	dot[1].style.backgroundColor="#bbb";
	dot[i].style.backgroundColor="#717171";
	
	
	i += 1;
	
	//clearInterval(time);
} else if (i==5) {
	m[0].innerHTML="<img src='backgroundImage.png' height='100%' width='100%' onclick='startUp(0)'></img>";
	m[0].style.opacity="1";
	
	mt[0].style.display="block";
	mt[0].innerHTML='<div class="contactPageLink" onclick="contact()">WOULD YOU LIKE TO BE FEATURED? HEAD OVER TO THE <span style="text-decoration:underline">CONTACT PAGE</span></div>';
	mt[0].style.marginTop="36.5vh";
	mt[0].style.marginLeft="30.5vw";
	mt[0].style.height="40vh";
	mt[0].style.width="39vw";
	mt[0].style.fontSize="3vw";
	mt[0].style.fontFamily="export-stencil";
	//mt[0].style.border="solid";
	//mt[0].style.borderColor="red";
	
	mt[0].style.position="absolute";
	
	
	mt[0].style.color="#DAC826";
	mt[0].style.fontStretch="ultra-condensed";
	mt[0].style.fontWeight="400";
	mt[0].style.fontStyle="normal";
	
	mt2[0].style.display="none";
	
	mt3[0].style.display="none";
	
	mt4[0].style.display="none";
	
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
	
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
	
	dot[i].style.backgroundColor="#717171";
	dot[0].style.backgroundColor="#bbb";
	dot[4].style.backgroundColor="#bbb";
	dot[3].style.backgroundColor="#bbb";
	dot[2].style.backgroundColor="#bbb";
	dot[1].style.backgroundColor="#bbb";
	
	
	
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
	
	mi = arguments[0];
	if (mi==0) {
		
		bo[0].style.overflowX="hidden";
		bo[0].style.overflowY="hidden";
		//me[0].onclick = menuOpen(1);
		me[0].style.display="inline-flex";
		me[0].style.marginTop="8vh";
		me[0].style.marginLeft="0vw";
		me[0].style.height="85vh";
		me[0].style.width="100vw";
		//me[0].style.border="solid";
		//me[0].style.borderColor="red";
		me[0].style.backgroundColor="#2E313B";
		me[0].style.opacity="0.5";
		me[0].style.paddingLeft="10vw";
		me[0].style.paddingTop="10vh";
		me[0].innerHTML="<span onclick=menuOpen(1);>CLOSE</span>";
		
		
		
		h[0].style.zIndex="3";
		h[0].style.display="block";
		h[0].innerHTML="HOME";
		h[0].style.fontFamily="export-stencil";
		h[0].style.color="#DAC826";
		h[0].style.fontSize="3vw";
		d[0].style.zIndex="3";
		d[0].style.display="block";
		d[0].innerHTML="DISCOVER";
		d[0].style.fontFamily="export-stencil";
		d[0].style.color="#DAC826";
		d[0].style.fontSize="3vw";
		e[0].style.zIndex="3";
		e[0].style.display="block";
		e[0].innerHTML="EVENTS";
		e[0].style.fontFamily="export-stencil";
		e[0].style.color="#DAC826";
		e[0].style.fontSize="3vw";
		v[0].style.zIndex="3";
		v[0].style.display="block";
		v[0].innerHTML="VENUES";
		v[0].style.fontFamily="export-stencil";
		v[0].style.color="#DAC826";
		v[0].style.fontSize="3vw";
		c[0].style.zIndex="3";
		c[0].style.display="block";
		c[0].innerHTML="CONTACT";
		c[0].style.fontFamily="export-stencil";
		c[0].style.color="#DAC826";
		c[0].style.fontSize="3vw";
		mi += 1;
	} else if (mi==1){
		
		
		if (si == 0) {
			bo[0].style.overflow="hidden";
		} else if (si == 1) {
			bo[0].style.overflowX="hidden";
			bo[0].style.overflowY="scroll";
		}
		//bo[0].style.overflowY="scroll";
		
		//me[0].onclick = menuOpen(0);
		me[0].style.display="inline-flex";
		me[0].style.marginTop="13vh";
		me[0].style.marginLeft="7.3vw";
		me[0].style.height="4vh";
		me[0].style.width="4vw";
		me[0].style.opacity="1";
		//me[0].style.border="solid";
		//me[0].style.borderColor="red";
		me[0].style.padding="0";
		me[0].style.backgroundColor="";
		me[0].innerHTML="<span onclick=menuOpen(0);>MENU</span>";
		
		h[0].style.display="none";
		d[0].style.display="none";
		e[0].style.display="none";
		v[0].style.display="none";
		c[0].style.display="none";
		mi -= 1;
	}
	
	
};

function home() {
	
	m[0].style.width="100vw";
	m[0].style.height="107vh";
	
	bo[0].style.overflow="hidden";
	si = 0;
	menuOpen(1);
	startUp(0);
	dots[0].style.display="block";
	
	
	
dh[0].style.display="none";

dp1[0].style.display="none";
dt1[0].style.display="none";
dtext1[0].style.display="none";
dbl1[0].style.display="none";
dsl1[0].style.display="none";
dil1[0].style.display="none";

dp2[0].style.display="none";
dt2[0].style.display="none";
dtext2[0].style.display="none";
dbl2[0].style.display="none";
dsl2[0].style.display="none";
dil2[0].style.display="none";
dfl2[0].style.display="none";

dp3[0].style.display="none";
dt3[0].style.display="none";
dtext3[0].style.display="none";
dsol3[0].style.display="none";
dil3[0].style.display="none";

dp4[0].style.display="none";
dt4[0].style.display="none";
dtext4[0].style.display="none";
dsl4[0].style.display="none";
dil4[0].style.display="none";

ep1[0].style.display="none";
et1[0].style.display="none";
etext1[0].style.display="none";
ei1[0].style.display="none";
	
ep2[0].style.display="none";
et2[0].style.display="none";
etext2[0].style.display="none";
ei2[0].style.display="none";
	
ep3[0].style.display="none";
et3[0].style.display="none";
etext3[0].style.display="none";
	
ep4[0].style.display="none";
et4[0].style.display="none";
etext4[0].style.display="none";
ei4[0].style.display="none";
	
ep5[0].style.display="none";
et5[0].style.display="none";
etext5[0].style.display="none";
ei5[0].style.display="none";

vp1[0].style.display="none";
vt1[0].style.display="none";
vtext1[0].style.display="none";
	
vp2[0].style.display="none";
vt2[0].style.display="none";
vtext2[0].style.display="none";
	
vp3[0].style.display="none";
vt3[0].style.display="none";
vtext3[0].style.display="none";
	
vp4[0].style.display="none";
vt4[0].style.display="none";
vtext4[0].style.display="none";
	
vp5[0].style.display="none";
vt5[0].style.display="none";
vtext5[0].style.display="none";

ct[0].style.display="none";

eh[0].style.display="none";

};

function discover() {
	menuOpen(1);
	si = 1;
	
	m[0].style.width="100vw";
	m[0].style.height="510vh";
	
	bo[0].style.overflowX="hidden";
	bo[0].style.overflowY="scroll";
	bo[0].style.backgroundImage="none";
	bo[0].style.backgroundColor="#2E313B";
	m[0].innerHTML="<img src='DISCOVER.png' height='100%' width='100%'></img>";
	m[0].style.display="block";
		m[0].style.opacity="0";

// take out



dp1[0].style.display="block";
dt1[0].style.display="block";
dtext1[0].style.display="block";
dbl1[0].style.display="block";
dsl1[0].style.display="block";
dil1[0].style.display="block";

dp2[0].style.display="block";
dt2[0].style.display="block";
dtext2[0].style.display="block";
dbl2[0].style.display="block";
dsl2[0].style.display="block";
dil2[0].style.display="block";
dfl2[0].style.display="block";

dp3[0].style.display="block";
dt3[0].style.display="block";
dtext3[0].style.display="block";
dsol3[0].style.display="block";
dil3[0].style.display="block";

dp4[0].style.display="block";
dt4[0].style.display="block";
dtext4[0].style.display="block";
dsl4[0].style.display="block";
dil4[0].style.display="block";

//dh[0].style.display="none";
dh[0].style.display="block";
dh[0].innerHTML="DISCOVER";
dh[0].style.position="absolute";
dh[0].style.marginTop="10.3vh";
dh[0].style.marginLeft="43.4vw";
dh[0].style.width="13vw";
dh[0].style.height="6vh";
dh[0].style.fontSize="2.8vw";
dh[0].style.fontFamily="export-stencil";
dh[0].style.color="#DADDD8";
//dh[0].style.borderColor="red";
//dh[0].style.border="solid";



	dp1[0].innerHTML="<img src='dp1.jpg' height='100%' width='100%'></img>";
	dp1[0].style.position="absolute";
	dp1[0].style.marginTop="25vh";
	dp1[0].style.marginLeft="7.5vw";
	dp1[0].style.height="92vh";
	dp1[0].style.width="42vw";
	dp1[0].style.padding="0";
	
	dt1[0].innerHTML="01.<br>Y LA BAMBA";
	dt1[0].style.position="absolute";
	dt1[0].style.marginTop="25vh";
	dt1[0].style.marginLeft="57.8vw";
	dt1[0].style.height="15vh";
	dt1[0].style.width="35vw";
	dt1[0].style.padding="0";
	dt1[0].style.color="#F3C93F";
	dt1[0].style.fontSize="3vw";
	dt1[0].style.fontFamily="komu-a, sans-serif";
	//dt1[0].style.border="solid";
	//dt1[0].style.borderColor="red";
	
	
	dtext1[0].innerHTML="Elena Luz Mendoza is an expert at demonstrating herself by showing us through her music what it means to be a mexican american woman that is surronded by misogyny in her family. <br> Y LA BAMBA is an ever evolving band; sometimes there re six members,sometimes its a solo just her. In her latest release an EP consisting of seven songs, she sings about introspection over self produced folk tracks. In this project we see an intimate insight to a relationship of two where her voice trembles and fills the tracks.<br>Y LA BAMBA have been making music since2008 and are based in portland, Oregon. in 2016, NPR ranked there album in the top 50 best albums and this shows us that Y La Bamba are here to stay.<br><br>Similiar to: Angel Olsen, Helado Negro, Divino Nino";
	dtext1[0].style.position="absolute";
	dtext1[0].style.marginTop="40vh";
	dtext1[0].style.marginLeft="57.8vw";
	dtext1[0].style.height="37vh";
	dtext1[0].style.width="35vw";
	dtext1[0].style.padding="0";
	dtext1[0].style.fontSize="1.2vw";
	dtext1[0].style.color="#DADDD8";
	//dtext1[0].style.border="solid";
	//dtext1[0].style.borderColor="red";
	
	dbl1[0].innerHTML='<a href="https://ylabamba.bandcamp.com/" target="_blank"><img src="bandcampRedLink.png" height="100%" width="100%"></img></a>';
	dbl1[0].style.zIndex="2";
	dbl1[0].style.position="absolute";
	dbl1[0].style.marginTop="82vh";
	dbl1[0].style.marginLeft="58vw";
	dbl1[0].style.height="6vh";
	dbl1[0].style.width="3vw";
	dbl1[0].style.display="inline";
	
dsl1[0].innerHTML='<a href="https://open.spotify.com/artist/6eb2gxfoBSQhmDYkQKz93b?si=P3fUf0uaR4q_zvbyXp7wnw" target="_blank"><img src="spotifyRedLink.png" height="100%" width="100%"></img></a>';
	dsl1[0].style.zIndex="2";
	//dsl1[0].innerHTML="<img src='spotifyRedLink.png' height='100%' width='100%'></img>";
	dsl1[0].style.position="absolute";
	dsl1[0].style.marginTop="82vh";
	dsl1[0].style.marginLeft="65vw";
	dsl1[0].style.height="6vh";
	dsl1[0].style.width="3vw";
	dsl1[0].style.display="inline";
	
dil1[0].innerHTML='<a href="https://www.instagram.com/ylabamba/" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	dil1[0].style.zIndex="2";
	//dil1[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	dil1[0].style.position="absolute";
	dil1[0].style.marginTop="82vh";
	dil1[0].style.marginLeft="73vw";
	dil1[0].style.height="6vh";
	dil1[0].style.width="3vw";
	dil1[0].style.display="inline";
	//change to second
	
	
	dp2[0].innerHTML="<img src='dp2.png' height='100%' width='100%'></img>";
	dp2[0].style.display="block";
	dp2[0].style.position="absolute";
	dp2[0].style.marginTop="134vh";
	dp2[0].style.marginLeft="50vw";
	dp2[0].style.height="50vh";
	dp2[0].style.width="43vw";
	dp2[0].style.padding="0";
	
	dt2[0].innerHTML="02.<br>QUESTION TUESDAY";
	dt2[0].style.position="absolute";
	dt2[0].style.marginTop="132.5vh";
	dt2[0].style.marginLeft="7vw";
	dt2[0].style.height="13.5vh";
	dt2[0].style.width="36vw";
	dt2[0].style.padding="0";
	dt2[0].style.color="#F3C93F";
	//dt2[0].style.border="solid";
	//dt2[0].style.borderColor="red";
	dt2[0].style.fontSize="3.5vw";
	dt2[0].style.fontFamily="komu-a, sans-serif";
	
	
	
	dtext2[0].innerHTML='Question Tuesday is a garage style punk band from Gresham Oregon. This group of hard punk rockers are inspired by all kinds of rock and roll, and it shows in their wild sound that inspires crowds to get up and move. notably they have played a show with popular punkband GBH.<br>They currently have two albums out, the first titled "we dont need what your selling" came out in 2017 and has six fast paced songs. The latest album was recently released in 2020 and is title "doesnt smell like popcorn". This album is packed with ten songs to put yu to th mood to jump around and bang your head.<br>Their music is available on spotify and Reverbnation, they also have a facebook and Instagram. Give these guys a look and support their journey!';
	dtext2[0].style.position="absolute";
	dtext2[0].style.marginTop="147vh";
	dtext2[0].style.marginLeft="7vw";
	dtext2[0].style.height="38vh";
	dtext2[0].style.width="36vw";
	dtext2[0].style.padding="0";
	dtext2[0].style.fontSize="1.2vw";
	dtext2[0].style.color="#DADDD8";
	//dtext2[0].style.border="solid";
	//dtext2[0].style.borderColor="red";
	
dbl2[0].innerHTML='<a href="" target="_blank"><img src="bandcampRedLink.png" height="100%" width="100%"></img></a>';
	dbl2[0].style.zIndex="2";
	//dbl2[0].innerHTML="<img src='bandcampRedLink.png' height='100%' width='100%'></img>";
	dbl2[0].style.position="absolute";
	dbl2[0].style.marginTop="190vh";
	dbl2[0].style.marginLeft="7vw";
	dbl2[0].style.height="6vh";
	dbl2[0].style.width="3vw";
	dbl2[0].style.display="inline";
	
dsl2[0].innerHTML='<a href="https://open.spotify.com/artist/4xQnLloZNdBgbfkrhuOFDV?si=kVvjZW6GSPuu7KbbQbQtCA" target="_blank"><img src="spotifyRedLink.png" height="100%" width="100%"></img></a>';
	dsl2[0].style.zIndex="2";
	//dsl2[0].innerHTML="<img src='spotifyRedLink.png' height='100%' width='100%'></img>";
	dsl2[0].style.position="absolute";
	dsl2[0].style.marginTop="190vh";
	dsl2[0].style.marginLeft="15vw";
	dsl2[0].style.height="6vh";
	dsl2[0].style.width="3vw";
	dsl2[0].style.display="inline";
	
dil2[0].innerHTML='<a href="https://www.instagram.com/questiontuesday/" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	dil2[0].style.zIndex="2";
	//dil2[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	dil2[0].style.position="absolute";
	dil2[0].style.marginTop="190vh";
	dil2[0].style.marginLeft="22vw";
	dil2[0].style.height="6vh";
	dil2[0].style.width="3vw";
	dil2[0].style.display="inline";
	
dfl2[0].innerHTML='<a href="https://www.facebook.com/QuestionTuesday" target="_blank"><img src="facebookRedLink.png" height="100%" width="100%"></img></a>';
	dfl2[0].style.zIndex="2";
	//dfl2[0].innerHTML="<img src='facebookRedLink.png' height='100%' width='100%'></img>";
	dfl2[0].style.position="absolute";
	dfl2[0].style.marginTop="190vh";
	dfl2[0].style.marginLeft="30vw";
	dfl2[0].style.height="6vh";
	dfl2[0].style.width="3vw";
	dfl2[0].style.display="inline";
	
	//change to 3
	dp3[0].innerHTML="<img src='dp3.png' height='100%' width='100%'></img>";
	dp3[0].style.display="block";
	dp3[0].style.position="absolute";
	dp3[0].style.marginTop="212.5vh";
	dp3[0].style.marginLeft="7.5vw";
	dp3[0].style.height="92.5vh";
	dp3[0].style.width="42vw";
	dp3[0].style.padding="0";
	
	dt3[0].innerHTML="03.<br>DJ EMOJI HEAP";
	dt3[0].style.position="absolute";
	dt3[0].style.marginTop="210vh";
	dt3[0].style.marginLeft="58vw";
	dt3[0].style.height="15vh";
	dt3[0].style.width="37vw";
	dt3[0].style.padding="0";
	dt3[0].style.color="#F3C93F";
	dt3[0].style.fontSize="3.5vw";
	dt3[0].style.fontFamily="komu-a, sans-serif";
	//dt3[0].style.border="solid";
	//dt3[0].style.borderColor="red";
	
	dtext3[0].innerHTML='AKA Peggy Sisouvong, you can find emoji heap under flashing lights and bass-filled venuesin portland. she describes her sets as "anime girls on adderall, really cute really hyper with references to spirituality, gender, technology, and ancestry." She is able to incorporate "gender" into her music by being unapologetically herself as a trans dj ina male dominated scene. Her upbeats sets will have you dancing all night long and make you forget that you have work in the morning.';
	dtext3[0].style.position="absolute";
	dtext3[0].style.marginTop="225vh";
	dtext3[0].style.marginLeft="58vw";
	dtext3[0].style.height="20vh";
	dtext3[0].style.width="37vw";
	dtext3[0].style.padding="0";
	dtext3[0].style.fontSize="1.2vw";
	dtext3[0].style.color="#DADDD8";
	//dtext3[0].style.border="solid";
	//dtext3[0].style.borderColor="red";
	
dil3[0].innerHTML='<a href="https://www.instagram.com/emoji.heap/" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	dil3[0].style.zIndex="2";
	//dil3[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	dil3[0].style.position="absolute";
	dil3[0].style.marginTop="250vh";
	dil3[0].style.marginLeft="58vw";
	dil3[0].style.height="6vh";
	dil3[0].style.width="3vw";
	dil3[0].style.display="inline";
	
	dsol3[0].innerHTML='<a href="https://soundcloud.com/emojiheap" target="_blank"><img src="soundcloudRedLink.png" height="100%" width="100%"></img></a>';
	dsol3[0].style.zIndex="2";
	//dsol3[0].innerHTML="<img src='soundcloudRedLink.png' height='100%' width='100%'></img>";
	dsol3[0].style.position="absolute";
	dsol3[0].style.marginTop="250vh";
	dsol3[0].style.marginLeft="63vw";
	dsol3[0].style.height="6vh";
	dsol3[0].style.width="3vw";
	dsol3[0].style.display="inline";
	// change to 4 
	

	dp4[0].innerHTML="<img src='dp4.png' height='100%' width='100%'></img>";
	dp4[0].style.display="block";
	dp4[0].style.position="absolute";
	dp4[0].style.marginTop="334.6vh";
	dp4[0].style.marginLeft="50vw";
	dp4[0].style.height="58vh";
	dp4[0].style.width="43vw";
	dp4[0].style.padding="0";
	
	dt4[0].innerHTML="04.<br>POTATO FAMINE";
	dt4[0].style.position="absolute";
	dt4[0].style.marginTop="334.6vh";
	dt4[0].style.marginLeft="7vw";
	dt4[0].style.height="15vh";
	dt4[0].style.width="35vw";
	dt4[0].style.padding="0";
	dt4[0].style.color="#F3C93F";
	dt4[0].style.fontSize="3.5vw";
	dt4[0].style.fontFamily="komu-a, sans-serif";
	//dt4[0].style.border="solid";
	//dt4[0].style.borderColor="red";
	
	dtext4[0].innerHTML='Potato Famine started one day when Chris Hooper and Devin Skelton decided they wanted to do a st patricks day gig. we wanted to cover Dropkick murphys and flogging molly. We picked up richard along the way. St Patty came andwent and we decided that we wantedto continue the group because we were having too much fun. <br> We started writing our own music and the fun just kept going. we got to the point where we decided we liked what we were doing. we figured we would keep playing, and if peope liked it they liked it. if they didnt like it, fuck em. We got lucky because people wanted us to keep playing. Thats our story.<br>Then, one day Chris decided he neede to move on. well thats when Devin and Richard decided to go electric full time. so they pulled ben in on the bass because, well, bens canadian and canadians are nice(oh and he really knows how to play the bass). Then Chris moved up from california after leaving his band Inspecter 77; so we had our drummer. a couple of years later, chris joined the army, we enlisted our roadie, bobby as our drummer and so here we are, playing full throttle, punk-irish-pirate-folk-whatever the fuck it is- music. -reverbnation band bio, written by Potatoe Famine';
	dtext4[0].style.position="absolute";
	dtext4[0].style.marginTop="350vh";
	dtext4[0].style.marginLeft="7vw";
	dtext4[0].style.height="55vh";
	dtext4[0].style.width="35vw";
	dtext4[0].style.padding="0";
	dtext4[0].style.fontSize="1.2vw";
	dtext4[0].style.color="#DADDD8";
	//dtext4[0].style.border="solid";
	//dtext4[0].style.borderColor="red";
	
	dil4[0].innerHTML='<a href="" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	dil4[0].style.zIndex="2";
	//dil4[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	dil4[0].style.position="absolute";
	dil4[0].style.marginTop="408vh";
	dil4[0].style.marginLeft="13vw";
	dil4[0].style.height="6vh";
	dil4[0].style.width="3vw";
	dil4[0].style.display="inline";
	
	dsl4[0].innerHTML='<a href="https://open.spotify.com/artist/5e5Gdblq7OkgQ7FrMDkJgJ?si=NnQV0mQ1ThGx7-3FZQe4Nw" target="_blank"><img src="spotifyRedLink.png" height="100%" width="100%"></img></a>';
	dsl4[0].style.zIndex="2";
	//dsl4[0].innerHTML="<img src='spotifyRedLink.png' height='100%' width='100%'></img>";
	dsl4[0].style.position="absolute";
	dsl4[0].style.marginTop="408vh";
	dsl4[0].style.marginLeft="7vw";
	dsl4[0].style.height="6vh";
	dsl4[0].style.width="3vw";
	dsl4[0].style.display="inline";
	
//var ep1 = document.getElementsByClassName("eventsPic1");
//var et1 = document.getElementsByClassName("eventsTitle1");
//var etext1 = document.getElementsByClassName("eventsText1");
//var ei1 = document.getElementsByClassName("eventsInstagram1");
	
	//ep1[0].style.display="none";
	//et1[0].style.display="none";
	//etext1[0].style.display="none";
	//ei1[0].style.display="none";
	
	//ep2[0].style.display="none";
	//et2[0].style.display="none";
	//etext2[0].style.display="none";
	//ei2[0].style.display="none";
	
	//ep3[0].style.display="none";
	//et3[0].style.display="none";
	//etext2[0].style.display="none";
	
	//ep4[0].style.display="none";
	//et4[0].style.display="none";
	//etext1[0].style.display="none";
	//ei4[0].style.display="none";
	
	//ep5[0].style.display="none";
	//et5[0].style.display="none";
	//etext5[0].style.display="none";
	//ei5[0].style.display="none";
ep1[0].style.display="none";
et1[0].style.display="none";
etext1[0].style.display="none";
ei1[0].style.display="none";
	
ep2[0].style.display="none";
et2[0].style.display="none";
etext2[0].style.display="none";
ei2[0].style.display="none";
	
ep3[0].style.display="none";
et3[0].style.display="none";
etext3[0].style.display="none";
	
ep4[0].style.display="none";
et4[0].style.display="none";
etext4[0].style.display="none";
ei4[0].style.display="none";
	
ep5[0].style.display="none";
et5[0].style.display="none";
etext5[0].style.display="none";
ei5[0].style.display="none";
	
	//venues
	
	vp1[0].style.display="none";
vt1[0].style.display="none";
vtext1[0].style.display="none";
	
vp2[0].style.display="none";
vt2[0].style.display="none";
vtext2[0].style.display="none";
	
vp3[0].style.display="none";
vt3[0].style.display="none";
vtext3[0].style.display="none";
	
vp4[0].style.display="none";
vt4[0].style.display="none";
vtext4[0].style.display="none";
	
vp5[0].style.display="none";
vt5[0].style.display="none";
vtext5[0].style.display="none";
//take out 	
ct[0].style.display="none";
	dots[0].style.display="none";
	mt[0].style.display="none";
	mt2[0].style.display="none";
	mt3[0].style.display="none";
	mt4[0].style.display="none";
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
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
	// take this to reset it
	
eh[0].style.display="none";

	
};

function events() {
	menuOpen(1);
	si = 1;
	
	m[0].style.width="100vw";
	m[0].style.height="400vh";
	
	bo[0].style.overflowX="hidden";
	bo[0].style.overflowY="scroll";
	bo[0].style.backgroundImage="none";
	bo[0].style.backgroundColor="#2E313B";
	m[0].innerHTML="<img src='EVENTS.png' height='100%' width='100%'></img>";
	m[0].style.opacity="0";
	
	
	//eh[0].style.display="none";
eh[0].style.display="block";
eh[0].innerHTML="EVENTS";
eh[0].style.position="absolute";
eh[0].style.marginTop="10.3vh";
eh[0].style.marginLeft="43.4vw";
eh[0].style.width="13vw";
eh[0].style.height="6vh";
eh[0].style.fontSize="2.8vw";
eh[0].style.fontFamily="export-stencil";
eh[0].style.color="#DADDD8";
//eh[0].style.borderColor="red";
//eh[0].style.border="solid";

	
	ep1[0].innerHTML="<img src='ep1.png' height='100%' width='100%'></img>";
	ep1[0].style.position="absolute";
	ep1[0].style.marginTop="27vh";
	ep1[0].style.marginLeft="21.5vw";
	ep1[0].style.height="40vh";
	ep1[0].style.width="21vw";
	ep1[0].style.display="inline";
	
	et1[0].innerHTML="01.<br>DJ EMOJI HEAP";
	et1[0].style.position="absolute";
	et1[0].style.marginTop="27vh";
	et1[0].style.marginLeft="43vw";
	et1[0].style.height="10vh";
	et1[0].style.width="20vw";
	et1[0].style.padding="0";
	et1[0].style.color="#F3C93F";
	et1[0].style.fontFamily="komu-a, sans-serif";
	et1[0].style.fontSize="2vw";
	//et1[0].style.border="solid";
	//et1[0].style.borderColor="red";
	
	etext1[0].innerHTML="Techno<br>Friday Feb. 6th<br>8pm<br>via Instagram live";
	etext1[0].style.position="absolute";
	etext1[0].style.marginTop="37vh";
	etext1[0].style.marginLeft="43vw";
	etext1[0].style.height="17vh";
	etext1[0].style.width="20vw";
	etext1[0].style.padding="0";
	etext1[0].style.color="#DADDD8";
	etext1[0].style.fontSize="1.8vw";
	//etext1[0].style.border="solid";
	//etext1[0].style.borderColor="red";
	
	ei1[0].innerHTML='<a href="https://open.spotify.com/playlist/7epbMyoV1w0v0N0lA5hv1L?si=76RSGyMeRiaEvIb4kUiv9A" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	ei1[0].style.zIndex="2";
	//ei1[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	ei1[0].style.position="absolute";
	ei1[0].style.marginTop="54vh";
	ei1[0].style.marginLeft="43vw";
	ei1[0].style.height="6vh";
	ei1[0].style.width="3vw";
	ei1[0].style.display="inline";

	ep2[0].innerHTML="<img src='ep2.png' height='100%' width='100%'></img>";
	ep2[0].style.position="absolute";
	ep2[0].style.marginTop="94vh";
	ep2[0].style.marginLeft="50vw";
	ep2[0].style.height="40vh";
	ep2[0].style.width="21vw";
	ep2[0].style.display="inline";
	
	et2[0].innerHTML="02.<br>Y LA BAMBA";
	et2[0].style.position="absolute";
	et2[0].style.marginTop="93vh";
	et2[0].style.marginLeft="72vw";
	et2[0].style.height="8vh";
	et2[0].style.width="20vw";
	et2[0].style.padding="0";
	et2[0].style.color="#F3C93F";
	et2[0].style.fontSize="2vw";
	et2[0].style.fontFamily="komu-a, sans-serif";
	//et2[0].style.border="solid";
	//et2[0].style.borderColor="red";
	
	etext2[0].innerHTML="Alternative Rock<br>Saturday, Feb. 8th<br>4pm<br>via Instagram live";
	etext2[0].style.position="absolute";
	etext2[0].style.marginTop="102vh";
	etext2[0].style.marginLeft="72vw";
	etext2[0].style.height="16vh";
	etext2[0].style.width="20vw";
	etext2[0].style.padding="0";
	etext2[0].style.color="#DADDD8";
	etext2[0].style.fontSize="1.8vw";
	//etext2[0].style.border="solid";
	//etext2[0].style.borderColor="red";
	
	
	ei2[0].innerHTML='<a href="https://open.spotify.com/playlist/7epbMyoV1w0v0N0lA5hv1L?si=76RSGyMeRiaEvIb4kUiv9A" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	ei2[0].style.zIndex="2";
	//ei2[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	ei2[0].style.position="absolute";
	ei2[0].style.marginTop="120vh";
	ei2[0].style.marginLeft="72vw";
	ei2[0].style.height="6vh";
	ei2[0].style.width="3vw";
	ei2[0].style.display="inline";
	
	ep3[0].innerHTML="<img src='ep3.png' height='100%' width='100%'></img>";
	ep3[0].style.position="absolute";
	ep3[0].style.marginTop="161vh";
	ep3[0].style.marginLeft="36vw";
	ep3[0].style.height="40vh";
	ep3[0].style.width="21vw";
	ep3[0].style.display="inline";
	
	et3[0].innerHTML="03.<br>MANE";
	et3[0].style.position="absolute";
	et3[0].style.marginTop="161vh";
	et3[0].style.marginLeft="58vw";
	et3[0].style.height="9vh";
	et3[0].style.width="20vw";
	et3[0].style.padding="0";
	et3[0].style.color="#F3C93F";
	et3[0].style.fontSize="2vw";
	et3[0].style.fontFamily="komu-a, sans-serif";
	//et3[0].style.border="solid";
	//et3[0].style.borderColor="red";
	
	etext3[0].innerHTML="Latin & POP<br>Friday Feb. 12th<br>6pm<br>via Twitch";
	etext3[0].style.position="absolute";
	etext3[0].style.marginTop="170vh";
	etext3[0].style.marginLeft="58vw";
	etext3[0].style.height="20vh";
	etext3[0].style.width="20vw";
	etext3[0].style.padding="0";
	etext3[0].style.color="#DADDD8";
	etext3[0].style.fontSize="1.8vw";
	etext3[0].style.display="block";
	//etext3[0].style.border="solid";
	//etext3[0].style.borderColor="red";
	
	ep4[0].innerHTML="<img src='ep4.png' height='100%' width='100%'></img>";
	ep4[0].style.position="absolute";
	ep4[0].style.marginTop="228.1vh";
	ep4[0].style.marginLeft="7.2vw";
	ep4[0].style.height="40vh";
	ep4[0].style.width="21vw";
	ep4[0].style.display="inline";
	
	et4[0].innerHTML="04.<br>GET DEAD";
	et4[0].style.position="absolute";
	et4[0].style.marginTop="228.1vh";
	et4[0].style.marginLeft="29vw";
	et4[0].style.height="9vh";
	et4[0].style.width="20vw";
	et4[0].style.padding="0";
	et4[0].style.color="#F3C93F";
	et4[0].style.fontFamily="komu-a, sans-serif";
	et4[0].style.fontSize="2vw";
	//et4[0].style.border="solid";
	//et4[0].style.borderColor="red";
	
	etext4[0].innerHTML="Punk<br>Sunday Feb. 21st<br>12pm<br>via Instagram live";
	etext4[0].style.position="absolute";
	etext4[0].style.marginTop="238vh";
	etext4[0].style.marginLeft="29vw";
	etext4[0].style.height="17vh";
	etext4[0].style.width="20vw";
	etext4[0].style.padding="0";
	etext4[0].style.color="#DADDD8";
	etext4[0].style.fontSize="1.8vw";
	etext4[0].style.display="block";
	//etext4[0].style.border="solid";
	//etext4[0].style.borderColor="red";
	
	
	ei4[0].innerHTML='<a href="https://open.spotify.com/playlist/7epbMyoV1w0v0N0lA5hv1L?si=76RSGyMeRiaEvIb4kUiv9A" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	ei4[0].style.zIndex="2";
	//ei4[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	ei4[0].style.position="absolute";
	ei4[0].style.marginTop="256vh";
	ei4[0].style.marginLeft="29.1vw";
	ei4[0].style.height="6vh";
	ei4[0].style.width="3vw";
	ei4[0].style.display="inline";
	
	ep5[0].innerHTML="<img src='ep5.png' height='100%' width='100%'></img>";
	ep5[0].style.position="absolute";
	ep5[0].style.marginTop="295.7vh";
	ep5[0].style.marginLeft="31.5vw";
	ep5[0].style.height="40vh";
	ep5[0].style.width="21vw";
	ep5[0].style.display="inline";
	
	et5[0].innerHTML="05.<br>NOCHE LIBRE";
	et5[0].style.position="absolute";
	et5[0].style.marginTop="295.7vh";
	et5[0].style.marginLeft="53vw";
	et5[0].style.height="8vh";
	et5[0].style.width="20vw";
	et5[0].style.padding="0";
	et5[0].style.color="#F3C93F";
	et5[0].style.fontFamily="komu-a, sans-serif";
	et5[0].style.fontSize="2vw";
	//et5[0].style.border="solid";
	//et5[0].style.borderColor="red";
	
	etext5[0].innerHTML="Neoperreo<br>Friday Feb. 26th<br>8pm<br>via Instagram live";
	etext5[0].style.position="absolute";
	etext5[0].style.marginTop="305vh";
	etext5[0].style.marginLeft="53vw";
	etext5[0].style.height="17vh";
	etext5[0].style.width="20vw";
	etext5[0].style.padding="0";
	etext5[0].style.color="#DADDD8";
	etext5[0].style.fontSize="1.8vw";
	//etext5[0].style.border="solid";
	//etext5[0].style.borderColor="red";
	
	ei5[0].innerHTML='<a href="" target="_blank"><img src="instagramRedLink.png" height="100%" width="100%"></img></a>';
	ei5[0].style.zIndex="2";
	//ei5[0].innerHTML="<img src='instagramRedLink.png' height='100%' width='100%'></img>";
	ei5[0].style.position="absolute";
	ei5[0].style.marginTop="322.1vh";
	ei5[0].style.marginLeft="52.9vw";
	ei5[0].style.height="6vh";
	ei5[0].style.width="3vw";
	ei5[0].style.display="inline";
	
	
ep1[0].style.display="block";
et1[0].style.display="block";
etext1[0].style.display="block";
ei1[0].style.display="block";
	
ep2[0].style.display="block";
et2[0].style.display="block";
etext2[0].style.display="block";
ei2[0].style.display="block";
	
ep3[0].style.display="block";
et3[0].style.display="block";
etext2[0].style.display="block";
	
ep4[0].style.display="block";
et4[0].style.display="block";
etext1[0].style.display="block";
ei4[0].style.display="block";
	
ep5[0].style.display="block";
et5[0].style.display="block";
etext5[0].style.display="block";
ei5[0].style.display="block";
	
dh[0].style.display="none";
vh[0].style.display="none";

dp1[0].style.display="none";
dt1[0].style.display="none";
dtext1[0].style.display="none";
dbl1[0].style.display="none";
dsl1[0].style.display="none";
dil1[0].style.display="none";

dp2[0].style.display="none";
dt2[0].style.display="none";
dtext2[0].style.display="none";
dbl2[0].style.display="none";
dsl2[0].style.display="none";
dil2[0].style.display="none";
dfl2[0].style.display="none";

dp3[0].style.display="none";
dt3[0].style.display="none";
dtext3[0].style.display="none";
dsol3[0].style.display="none";
dil3[0].style.display="none";

dp4[0].style.display="none";
dt4[0].style.display="none";
dtext4[0].style.display="none";
dsl4[0].style.display="none";
dil4[0].style.display="none";

vp1[0].style.display="none";
vt1[0].style.display="none";
vtext1[0].style.display="none";
	
vp2[0].style.display="none";
vt2[0].style.display="none";
vtext2[0].style.display="none";
	
vp3[0].style.display="none";
vt3[0].style.display="none";
vtext3[0].style.display="none";
	
vp4[0].style.display="none";
vt4[0].style.display="none";
vtext4[0].style.display="none";
	
vp5[0].style.display="none";
vt5[0].style.display="none";
vtext5[0].style.display="none";

ct[0].style.display="none";

	dots[0].style.display="none";
	mt[0].style.display="none";
	mt2[0].style.display="none";
	mt3[0].style.display="none";
	mt4[0].style.display="none";
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
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
	
};


function venues() {
	menuOpen(1);
	si = 1;
	bo[0].style.backgroundImage="none";
	bo[0].style.backgroundColor="#2E313B";
	m[0].style.width="100vw";
	m[0].style.height="370vh";
	bo[0].style.overflowX="hidden";
	bo[0].style.overflowY="scroll";
	m[0].innerHTML="<img src='VENUES.png' height='100%' width='100%'></img>";
	m[0].style.opacity="0";

//vh[0].style.display="none";
vh[0].style.display="block";
vh[0].innerHTML="VENUES";
vh[0].style.position="absolute";
vh[0].style.marginTop="10.3vh";
vh[0].style.marginLeft="43.4vw";
vh[0].style.width="13vw";
vh[0].style.height="6vh";
vh[0].style.fontSize="2.8vw";
vh[0].style.fontFamily="export-stencil";
vh[0].style.color="#DADDD8";
//vh[0].style.borderColor="red";
//vh[0].style.border="solid";
	
	vp1[0].style.display="block";
	vt1[0].style.display="block";
	vtext1[0].style.display="block";
	
	vp2[0].style.display="block";
	vt2[0].style.display="block";
	vtext2[0].style.display="block";
	
	vp3[0].style.display="block";
	vt3[0].style.display="block";
	vtext3[0].style.display="block";
	
	vp4[0].style.display="block";
	vt4[0].style.display="block";
	vtext4[0].style.display="block";
	
	vp5[0].style.display="block";
	vt5[0].style.display="block";
	vtext5[0].style.display="block";
	
	vp1[0].innerHTML="<img src='vp1.png' height='100%' width='100%'></img>";
	vp1[0].style.position="absolute";
	vp1[0].style.marginTop="28vh";
	vp1[0].style.marginLeft="13.3vw";
	vp1[0].style.height="44vh";
	vp1[0].style.width="35vw";
	vp1[0].style.display="inline";
	
	vt1[0].innerHTML="01.<br>THE HOLOCENE";
	vt1[0].style.position="absolute";
	vt1[0].style.marginTop="26vh";
	vt1[0].style.marginLeft="56vw";
	vt1[0].style.height="10vh";
	vt1[0].style.width="37vw";
	vt1[0].style.padding="0";
	vt1[0].style.color="#F3C93F";
	vt1[0].style.fontFamily="komu-a, sans-serif";
	vt1[0].style.fontSize="2vw";
	//vt1[0].style.border="solid";
	//vt1[0].style.borderColor="red";
	
	vtext1[0].innerHTML="Holocene is a music + art venue, nightclub and events space in the core of inner-SE portland. Since the summer of 2003, Holocene has been hosting touring acts from folk to minimal techno, Portland's own most exciting musicians, unforgettable dance parties, and all manner of arts and multimedia parties that blur the line between highbrow and down-and-dirty.<br><br> Portland, Oregon<br>1001 SE, Morrison St.<br>(503)225-7639";
	vtext1[0].style.position="absolute";
	vtext1[0].style.marginTop="37vh";
	vtext1[0].style.marginLeft="56vw";
	vtext1[0].style.height="36vh";
	vtext1[0].style.width="37vw";
	vtext1[0].style.color="#DADDD8";
	vtext1[0].style.padding="0";
	vtext1[0].style.fontSize="1.5vw";
	//vtext1[0].style.border="solid";
	//vtext1[0].style.borderColor="red";
	
	
	vp2[0].innerHTML="<img src='vp2.png' height='100%' width='100%'></img>";
	vp2[0].style.position="absolute";
	vp2[0].style.marginTop="86vh";
	vp2[0].style.marginLeft="13.3vw";
	vp2[0].style.height="44vh";
	vp2[0].style.width="35vw";
	vp2[0].style.display="inline";
	
	vt2[0].innerHTML="02.<br>THE CRYSTAL BALLROOM";
	vt2[0].style.position="absolute";
	vt2[0].style.marginTop="86vh";
	vt2[0].style.marginLeft="56vw";
	vt2[0].style.height="10vh";
	vt2[0].style.width="37vw";
	vt2[0].style.padding="0";
	vt2[0].style.fontFamily="komu-a, sans-serif";
	vt2[0].style.fontSize="2vw";
	vt2[0].style.color="#F3C93F";
	//vt2[0].style.border="solid";
	//vt2[0].style.borderColor="red";
	
	vtext2[0].innerHTML="The historic Crysral Ballroom -- now over a century old -- is one of those rare concert halls that can point to  proud, diverse history while also laying claim to an ongoing musical legacy. Every time you enter this majestic ballroom, let your imagination sense the tremors resonating from a century's worth of gatherings, and realize that you are joining a thriving, generations-long procession of show-goers<br><br>Portland,Oregon<br>1332 W. Burnside St.<br>(503)225-0047";
	vtext2[0].style.position="absolute";
	vtext2[0].style.marginTop="96vh";
	vtext2[0].style.marginLeft="56vw";
	vtext2[0].style.height="40vh";
	vtext2[0].style.width="37vw";
	vtext2[0].style.padding="0";
	vtext2[0].style.color="#DADDD8";
	vtext2[0].style.fontSize="1.5vw";
	//vtext2[0].style.border="solid";
	//vtext2[0].style.borderColor="red";
	
	vp3[0].innerHTML="<img src='vp3.png' height='100%' width='100%'></img>";
	vp3[0].style.position="absolute";
	vp3[0].style.marginTop="144vh";
	vp3[0].style.marginLeft="13.3vw";
	vp3[0].style.height="44vh";
	vp3[0].style.width="35vw";
	vp3[0].style.display="inline";
	
	vt3[0].innerHTML="03.<br>INFINITY Room";
	vt3[0].style.position="absolute";
	vt3[0].style.marginTop="144vh";
	vt3[0].style.marginLeft="56vw";
	vt3[0].style.height="10vh";
	vt3[0].style.width="37vw";
	vt3[0].style.padding="0";
	vt3[0].style.color="#F3C93F";
	vt3[0].style.fontFamily="komu-a, sans-serif";
	vt3[0].style.fontSize="2vw";
	//vt3[0].style.border="solid";
	//vt3[0].style.borderColor="red";
	
	vtext3[0].innerHTML="Infinity Room is a marriage of the performing arts in Salem, combining the stellar kitchen, bar and stage of the Space Concert club and the top-shelf improvised and Stan-up comedy of the capitol city Theater. Culinary, Comedy, Visual Art and live music converge here to create yur future ome for live entertainment. The history of the beautiful city projected through the world-class local performers, national and international touring act, incredible vegan kitchen, and this mportant community atmosphere.<br><br>Salem, Oregon<br>210 SE Liberty St. Ste. 150<br>(971)599-1871";
	vtext3[0].style.position="absolute";
	vtext3[0].style.marginTop="154vh";
	vtext3[0].style.marginLeft="56vw";
	vtext3[0].style.height="43vh";
	vtext3[0].style.width="37vw";
	vtext3[0].style.padding="0";
	vtext3[0].style.color="#DADDD8";
	vtext3[0].style.fontSize="1.5vw";
	//vtext3[0].style.border="solid";
	//vtext3[0].style.borderColor="red";
	
	vp4[0].innerHTML="<img src='vp4.png' height='100%' width='100%'></img>";
	vp4[0].style.position="absolute";
	vp4[0].style.marginTop="202vh";
	vp4[0].style.marginLeft="13.3vw";
	vp4[0].style.height="44vh";
	vp4[0].style.width="35vw";
	vp4[0].style.display="inline";
	
	vt4[0].innerHTML="04.<br>WOW HALL";
	vt4[0].style.position="absolute";
	vt4[0].style.marginTop="202vh";
	vt4[0].style.marginLeft="56vw";
	vt4[0].style.height="10vh";
	vt4[0].style.width="37vw";
	vt4[0].style.padding="0";
	vt4[0].style.color="#F3C93F";
	vt4[0].style.fontFamily="komu-a, sans-serif";
	vt4[0].style.fontSize="2vw";
	//vt4[0].style.border="solid";
	//vt4[0].style.borderColor="red";
	
	vtext4[0].innerHTML="The W.O.W. Hall is owned and operated by the Community Center for the Performing Arts, a nonprofit 501(c)3 organization dedicated to: providing cultural arts and educational opportunities for all ages and income levels, preserving and operating the historic Woodmen of the World Hall as a multipurpose community arts center, and maintaining a supportive enviroment for local artist and their creative efforts.<br><br>Eugene, Oregon<br>291 W 8th Ave.<br>(541)687-2746";
	vtext4[0].style.position="absolute";
	vtext4[0].style.marginTop="212vh";
	vtext4[0].style.marginLeft="56vw";
	vtext4[0].style.height="43vh";
	vtext4[0].style.width="37vw";
	vtext4[0].style.padding="0";
	vtext4[0].style.color="#DADDD8";
	vtext4[0].style.fontSize="1.5vw";
	//vtext4[0].style.border="solid";
	//vtext4[0].style.borderColor="red";
	
	vp5[0].innerHTML="<img src='vp5.png' height='100%' width='100%'></img>";
	vp5[0].style.position="absolute";
	vp5[0].style.marginTop="260vh";
	vp5[0].style.marginLeft="13.3vw";
	vp5[0].style.height="44vh";
	vp5[0].style.width="35vw";
	vp5[0].style.display="inline";
	
	vt5[0].innerHTML="05.<br>SESSIONS MUSIC HALL";
	vt5[0].style.position="absolute";
	vt5[0].style.marginTop="260vh";
	vt5[0].style.marginLeft="56vw";
	vt5[0].style.height="10vh";
	vt5[0].style.width="37vw";
	vt5[0].style.padding="0";
	vt5[0].style.color="#F3C93F";
	vt5[0].style.fontFamily="komu-a, sans-serif";
	vt5[0].style.fontSize="2vw";
	//vt5[0].style.border="solid";
	//vt5[0].style.borderColor="red";
	
	//vt5[0].style.color="#DADDD8";
	
	vtext5[0].innerHTML="Sessions Music Hall offers a variety of live music performances in genres selected to meet the demands of the local demographic, creating a mid-sized venue space and Lounge that will serve to builf and promote musical acts for concerts and events for touring and local bands. the venue model is designed to asit with band development for popular acts and up-and-coming artists, with the Lounge having free admission for many events, and a low cover charge for other, with ticketed events in the main hall.<br>Eugene, Oregon<br>44 E. 7th Ave.<br>(541)343-1117";
	vtext5[0].style.position="absolute";
	vtext5[0].style.marginTop="270vh";
	vtext5[0].style.marginLeft="56vw";
	vtext5[0].style.height="43vh";
	vtext5[0].style.width="37vw";
	vtext5[0].style.padding="0";
	vtext5[0].style.color="#DADDD8";
	vtext5[0].style.fontSize="1.5vw";
	//vtext5[0].style.border="solid";
	//vtext5[0].style.borderColor="red";
	
	
dh[0].style.display="none";
eh[0].style.display="none";

	ep1[0].style.display="none";
et1[0].style.display="none";
etext1[0].style.display="none";
ei1[0].style.display="none";
	
ep2[0].style.display="none";
et2[0].style.display="none";
etext2[0].style.display="none";
ei2[0].style.display="none";
	
ep3[0].style.display="none";
et3[0].style.display="none";
etext3[0].style.display="none";
	
ep4[0].style.display="none";
et4[0].style.display="none";
etext4[0].style.display="none";
ei4[0].style.display="none";
	
ep5[0].style.display="none";
et5[0].style.display="none";
etext5[0].style.display="none";
ei5[0].style.display="none";
	
	ct[0].style.display="none";
	
dp1[0].style.display="none";
dt1[0].style.display="none";
dtext1[0].style.display="none";
dbl1[0].style.display="none";
dsl1[0].style.display="none";
dil1[0].style.display="none";

dp2[0].style.display="none";
dt2[0].style.display="none";
dtext2[0].style.display="none";
dbl2[0].style.display="none";
dsl2[0].style.display="none";
dil2[0].style.display="none";
dfl2[0].style.display="none";

dp3[0].style.display="none";
dt3[0].style.display="none";
dtext3[0].style.display="none";
dsol3[0].style.display="none";
dil3[0].style.display="none";

dp4[0].style.display="none";
dt4[0].style.display="none";
dtext4[0].style.display="none";
dsl4[0].style.display="none";
dil4[0].style.display="none";
	dots[0].style.display="none";
	mt[0].style.display="none";
	mt2[0].style.display="none";
	mt3[0].style.display="none";
	mt4[0].style.display="none";
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
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
};

function contact() {
	menuOpen(1);
	m[0].innerHTML="<img src='backgroundImage.png' height='100%' width='100%'></img>";
	m[0].style.display="block";
	m[0].style.opacity="1";
	//m[0].innerHTML="";
	m[0].style.height="107vh";
	bo[0].style.overflow="hidden";
	
	ct[0].innerHTML="WOULD YOU LIKE TO BE FEATURED? EMAIL US AT QUEUE.OR@GMAIL.COM WITH LINKS TO YOUR MUSIC AND SOCIALS.";
	ct[0].style.display="block";
	ct[0].style.fontFamily="export-stencil";
	//ct[0].style.border="solid";
	//ct[0].style.borderColor="red";
	ct[0].style.marginTop="41.8vh";
	ct[0].style.marginLeft="35.5vw";
	ct[0].style.color="#F3C93F";
	ct[0].style.width="30vw";
	ct[0].style.height="28vh";
	ct[0].style.fontSize="2.1vw";

dh[0].style.display="none";
eh[0].style.display="none";
vh[0].style.display="none";

ep1[0].style.display="none";
et1[0].style.display="none";
etext1[0].style.display="none";
ei1[0].style.display="none";
	
ep2[0].style.display="none";
et2[0].style.display="none";
etext2[0].style.display="none";
ei2[0].style.display="none";
	
ep3[0].style.display="none";
et3[0].style.display="none";
etext3[0].style.display="none";
	
ep4[0].style.display="none";
et4[0].style.display="none";
etext4[0].style.display="none";
ei4[0].style.display="none";
	
ep5[0].style.display="none";
et5[0].style.display="none";
etext5[0].style.display="none";
ei5[0].style.display="none";

dp1[0].style.display="none";
dt1[0].style.display="none";
dtext1[0].style.display="none";
dbl1[0].style.display="none";
dsl1[0].style.display="none";
dil1[0].style.display="none";

dp2[0].style.display="none";
dt2[0].style.display="none";
dtext2[0].style.display="none";
dbl2[0].style.display="none";
dsl2[0].style.display="none";
dil2[0].style.display="none";
dfl2[0].style.display="none";

dp3[0].style.display="none";
dt3[0].style.display="none";
dtext3[0].style.display="none";
dsol3[0].style.display="none";
dil3[0].style.display="none";

dp4[0].style.display="none";
dt4[0].style.display="none";
dtext4[0].style.display="none";
dsl4[0].style.display="none";
dil4[0].style.display="none";

vp1[0].style.display="none";
vt1[0].style.display="none";
vtext1[0].style.display="none";
	
vp2[0].style.display="none";
vt2[0].style.display="none";
vtext2[0].style.display="none";
	
vp3[0].style.display="none";
vt3[0].style.display="none";
vtext3[0].style.display="none";
	
vp4[0].style.display="none";
vt4[0].style.display="none";
vtext4[0].style.display="none";
	
vp5[0].style.display="none";
vt5[0].style.display="none";
vtext5[0].style.display="none";
	
	dots[0].style.display="none";
	mt[0].style.display="none";
	mt2[0].style.display="none";
	mt3[0].style.display="none";
	mt4[0].style.display="none";
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
	p4o[0].style.display="none";
	p4s[0].style.display="none";
	p4e[0].style.display="none";
};