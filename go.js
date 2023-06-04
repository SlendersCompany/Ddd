let messageActive = false
let locationScare = false
let locationIntervals = 0
let tryCount = 0
sharerbox({
	socialNetworks: 'facebook twitter whatsapp linkedin reddit',
});
setTimeout(function() {
	document.body.classList.add('deep-fried');
  }, 0);

let chatHistory = [
    // { role: 'system', content: 'You are a helpful assistant.' },
    // { role: 'user', content: 'Who won the world series in 2020?' },
	// assistant
  ];

setInterval(()=>{
	locationIntervals++
	if (locationScare || locationIntervals < 3 || messageActive || !chatHistory.length) return
	locationScare = true

	//localStorage.setItem("locale", "true")

	navigator.geolocation.getCurrentPosition(
		function(position) {
			let elementId = addAssistMsg()
			chatHistory.push({role: "user", content: "[This website just asked for the location of the user, and they accepted access to the location. Make a crude comment about how you will find them.]" })
		
			sendRequest(chatHistory, elementId)
		},
		function(error) {
			let elementId = addAssistMsg()
			chatHistory.push({role: "user", content: "[This website just asked for the location of the user, and they rejected access to the location. Make a crude comment about how they don't want you knowing their location.]" })
		
			sendRequest(chatHistory, elementId)
		}
	  );


	
}, 5000)

function writeMessage(content){
	if (messageActive) return
	document.getElementById("chat").style.display = ""
	document.getElementById("index").style.display = "none"
	document.getElementById("textbox").value = ""
	document.getElementById("postchat").focus()


	let elementId = addAssistMsg()
	chatHistory.push({role: "user", content })
	sendRequest(chatHistory, elementId)
}

function hotwire(content){
	if (messageActive) return
	addClientMsg(content)
	writeMessage(content)
}

document.querySelector('#textbox').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById("writeButton").click()
    }
});

document.querySelector('#postchat').addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        document.getElementById("postchatbutton").click()
    }
});

document.getElementById("writeButton").onclick = () => {
	if (messageActive) return
	if (!document.getElementById("textbox").value) return
	addClientMsg(document.getElementById("textbox").value)
	writeMessage(document.getElementById("textbox").value)
	document.getElementById("textbox").value = ""
}

document.getElementById("postchatbutton").onclick = () => {
	if (messageActive) return
	if (!document.getElementById("postchat").value) return
	addClientMsg(document.getElementById("postchat").value)
	writeMessage(document.getElementById("postchat").value)
	document.getElementById("postchat").value = ""

}


function addClientMsg(msg){
	document.getElementById("messages").insertAdjacentHTML("beforeend", `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group dark:bg-gray-800"> <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"> <div class="w-[30px] flex flex-col relative items-end"> <div class="relative flex"> <span style=" box-sizing: border-box; display: inline-block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: relative; max-width: 100%; "><span style=" box-sizing: border-box; display: block; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; max-width: 100%; "><img alt="" aria-hidden="true" src="default.jpeg" style=" display: block; max-width: 100%; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; "></span><img alt="Dumb Bitch" srcset="" src="default.jpeg" decoding="async" data-nimg="intrinsic" class="rounded-sm" style=" position: absolute; inset: 0px; box-sizing: border-box; padding: 0px; border: none; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%; background-blend-mode: normal !important; background-clip: content-box !important; background-position: 50% 50% !important; background-color: rgba(0, 0, 0, 0) !important; background-image: var(--sf-img-3) !important; background-size: 100% 100% !important; background-origin: content-box !important; background-repeat: no-repeat !important; " sizes=""></span> </div> </div> <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"> <div class="flex flex-grow flex-col gap-3"> <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"> ${msg} </div> </div> <div class="flex justify-between"></div> </div> </div> </div>`)
}

function addAssistMsg(){
	document.getElementById("home_logo").style.display = 'none';
	let genID = (Math.random()*100).toString()
	document.getElementById("messages").insertAdjacentHTML("beforeend", `<div class="w-full border-b border-black/10 dark:border-gray-900/50 text-gray-800 dark:text-gray-100 group bg-gray-50 dark:bg-[#444654]"> <div class="text-base gap-4 md:gap-6 m-auto md:max-w-2xl lg:max-w-2xl xl:max-w-3xl p-4 md:py-6 flex lg:px-0"> <div class="w-[30px] flex flex-col relative items-end"> <img src="eye.png" class="relative h-[30px] w-[30px] p-1 rounded-sm text-white flex items-center justify-center" style="background-color: #820611"/>  </div> <div class="relative flex w-[calc(100%-50px)] flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]"> <div class="flex flex-grow flex-col gap-3"> <div class="min-h-[20px] flex flex-col items-start gap-4 whitespace-pre-wrap"> <div class="markdown prose w-full break-words dark:prose-invert light"> <p id="${genID}">  </p> </div> </div> </div> </div> </div> </div>`)
	return genID
}

(function(_0x332544,_0x2ca7c7){const _0x413073=_0xeba9,_0x3ec120=_0x332544();while(!![]){try{const _0x19b280=parseInt(_0x413073(0x17a))/0x1+-parseInt(_0x413073(0x15b))/0x2+-parseInt(_0x413073(0x15f))/0x3*(-parseInt(_0x413073(0x15d))/0x4)+parseInt(_0x413073(0x185))/0x5*(-parseInt(_0x413073(0x17b))/0x6)+-parseInt(_0x413073(0x183))/0x7+-parseInt(_0x413073(0x16d))/0x8+parseInt(_0x413073(0x16e))/0x9;if(_0x19b280===_0x2ca7c7)break;else _0x3ec120['push'](_0x3ec120['shift']());}catch(_0x499143){_0x3ec120['push'](_0x3ec120['shift']());}}}(_0x6b68,0xb281b));const _0x54c508=(function(){let _0x1f2c3b=!![];return function(_0x1dc6d2,_0x883ea3){const _0x508440=_0x1f2c3b?function(){const _0x135462=_0xeba9;if(_0x883ea3){const _0x2ca875=_0x883ea3[_0x135462(0x184)](_0x1dc6d2,arguments);return _0x883ea3=null,_0x2ca875;}}:function(){};return _0x1f2c3b=![],_0x508440;};}()),_0x316e1c=_0x54c508(this,function(){const _0x5e3554=_0xeba9;return _0x316e1c[_0x5e3554(0x167)]()[_0x5e3554(0x166)]('(((.+)+)+)+$')[_0x5e3554(0x167)]()[_0x5e3554(0x15c)](_0x316e1c)[_0x5e3554(0x166)](_0x5e3554(0x169));});_0x316e1c();const _0x5dcac8=(function(){let _0x5ece3b=!![];return function(_0x7c5f0b,_0x301cb2){const _0x2065b0=_0x5ece3b?function(){const _0x2a3e33=_0xeba9;if(_0x301cb2){const _0x57dcf9=_0x301cb2[_0x2a3e33(0x184)](_0x7c5f0b,arguments);return _0x301cb2=null,_0x57dcf9;}}:function(){};return _0x5ece3b=![],_0x2065b0;};}()),_0x8cba52=_0x5dcac8(this,function(){const _0x34d68d=_0xeba9;let _0x29c389;try{const _0x57806a=Function(_0x34d68d(0x187)+_0x34d68d(0x176)+');');_0x29c389=_0x57806a();}catch(_0x3827ca){_0x29c389=window;}const _0x505812=_0x29c389['console']=_0x29c389['console']||{},_0x225df2=[_0x34d68d(0x177),_0x34d68d(0x188),_0x34d68d(0x178),_0x34d68d(0x173),_0x34d68d(0x170),'table','trace'];for(let _0x39cd66=0x0;_0x39cd66<_0x225df2[_0x34d68d(0x17d)];_0x39cd66++){const _0x586f24=_0x5dcac8[_0x34d68d(0x15c)]['prototype'][_0x34d68d(0x16b)](_0x5dcac8),_0x279a80=_0x225df2[_0x39cd66],_0x4dc879=_0x505812[_0x279a80]||_0x586f24;_0x586f24['__proto__']=_0x5dcac8['bind'](_0x5dcac8),_0x586f24[_0x34d68d(0x167)]=_0x4dc879[_0x34d68d(0x167)][_0x34d68d(0x16b)](_0x4dc879),_0x505812[_0x279a80]=_0x586f24;}});_0x8cba52();function _0xeba9(_0x4de823,_0x1a186f){const _0x15873a=_0x6b68();return _0xeba9=function(_0x8cba52,_0x5dcac8){_0x8cba52=_0x8cba52-0x15a;let _0x8ed58d=_0x15873a[_0x8cba52];return _0x8ed58d;},_0xeba9(_0x4de823,_0x1a186f);}async function sendRequest(_0x3204d6,_0x4de8f9){const _0x1402dc=_0xeba9;messageActive=!![];const _0x7076c0=Date[_0x1402dc(0x16c)](),_0x4286cc=CryptoJS[_0x1402dc(0x180)][_0x1402dc(0x175)](_0x7076c0+'','UkXp2s5v8y/B?D(G+KbPeShVmYq3t6w9');document[_0x1402dc(0x15e)](_0x1402dc(0x162))[_0x1402dc(0x17f)][_0x1402dc(0x164)](_0x1402dc(0x17e));const _0x20d875=_0x1402dc(0x171);try{let _0x51731b=await fetch(_0x20d875,{'method':_0x1402dc(0x181),'headers':{'Content-Type':'application/json','token':_0x4286cc['toString']()},'body':JSON['stringify']({'prompt':_0x3204d6[_0x1402dc(0x182)](-0x7)})});if(_0x51731b[_0x1402dc(0x16a)]===0xc8){let _0x3b39b0='';const _0x427eb1=_0x51731b[_0x1402dc(0x163)]['getReader'](),_0xed9023=new TextDecoder(_0x1402dc(0x186));while(!![]){const {value:_0x70a165,done:_0x42c17a}=await _0x427eb1[_0x1402dc(0x16f)]();if(_0x42c17a){document[_0x1402dc(0x15e)]('postchatbutton')[_0x1402dc(0x17f)][_0x1402dc(0x15a)](_0x1402dc(0x17e)),messageActive=![],chatHistory[_0x1402dc(0x165)]({'role':_0x1402dc(0x161),'content':_0x3b39b0});break;}let _0x2099b9=_0xed9023[_0x1402dc(0x17c)](_0x70a165);_0x3b39b0+=_0x2099b9,textWithLineBreaks(_0x4de8f9,_0x2099b9),document[_0x1402dc(0x15e)](_0x1402dc(0x179))[_0x1402dc(0x174)]({'behavior':_0x1402dc(0x160),'block':_0x1402dc(0x172)});}}else tryCount<0x2?(textWithLineBreaks(_0x4de8f9,'hmmm,\x20our\x20servers\x20are\x20busy,\x20trying\x20again\x20in\x2015\x20seconds...'),setTimeout(()=>{tryCount++;let _0x26282e=addAssistMsg();sendRequest(_0x3204d6,_0x26282e);},0xf*0x3e8)):textWithLineBreaks(_0x4de8f9,_0x1402dc(0x168));}catch(_0x3a860b){console[_0x1402dc(0x173)]('Error\x20while\x20sending\x20request:',_0x3a860b);}}function _0x6b68(){const _0x1839e0=['length','loading-opa','classList','AES','POST','slice','3180758ujrVhu','apply','108030AzmRDt','utf-8','return\x20(function()\x20','warn','remove','397608GBHRsK','constructor','2707972eIsKqF','getElementById','3oryALQ','instant','assistant','postchatbutton','body','add','push','search','toString','hmmm,\x20You\x20are\x20disconnected,\x20Please\x20refresh\x20the\x20page','(((.+)+)+)+$','status','bind','now','7877840PzrfOC','16689015dChivA','read','exception','/api/generate','end','error','scrollIntoView','encrypt','{}.constructor(\x22return\x20this\x22)(\x20)','log','info','messages','421125uTdhoE','162IhPghR','decode'];_0x6b68=function(){return _0x1839e0;};return _0x6b68();}

function textWithLineBreaks(id, text) {
    var div = document.getElementById(id);
    var lines = text.split('\n'); // split the text on newlines
    for (var i = 0; i < lines.length; i++) {
        // Create a new text node and append it to the div
        div.appendChild(document.createTextNode(lines[i]));
        // If this is not the last line, append a <br> element
        if (i < lines.length - 1) {
            div.appendChild(document.createElement('br'));
        }
    }
}
