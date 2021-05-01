/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/FriendlyFire.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/dialog/bird.dialog.json":
/*!****************************************!*\
  !*** ./assets/dialog/bird.dialog.json ***!
  \****************************************/
/*! exports provided: entry, chirp, who, what, quest, multijump, bye, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"♪ Chirp!\",\"►Who are you? @who\",\"►What are you up to? @what\",\"►[relevant]Can you help me in my quest? @quest\",\"►[not chirp]Did you just say “Chirp”? @chirp\",\"►You have strange flying technique. @multijump\",\"►Bye, bird. @bye\"],\"chirp\":[\"Yes, I did. ♪ Chirp. That's what birds say! !set chirp true @entry\"],\"who\":[\"I'm the bird around these parts. @entry\"],\"what\":[\"I do bird stuff, mostly.\",\"I fly from my nest to some bushes to find food.\",\"♪ Chirp.\",\"There isn't any, though. !set relevant true\",\"My adopted child might go hungry again.\",\"►You adopted a bird baby?\",\"No. ♪ Chirp!\",\"It's something else. But it's still my son.\",\"You can visit our nest on the tree in the west...\",\"if you can fly, that is.\",\"♪ Chirp! @entry\"],\"quest\":[\"What quest? I'm a bird!\",\"Whatever you're up to is not my concern, really.\",\"♪ Chirp. I'm just doing my daily bird things. @entry\"],\"multijump\":[\"I'm not actually flying, though.\",\"It's the multi-jump power-up that I got a while ago.\",\"♪ Chirp.\",\"They said it was a flying ability, but it's not really.\",\"But I don't care much. At least I don't have to flap my wings anymore. @entry\"],\"bye\":[\"Bye, human.\",\"♪ Chirp! @entry !end\"]}");

/***/ }),

/***/ "./assets/dialog/caveman1.dialog.json":
/*!********************************************!*\
  !*** ./assets/dialog/caveman1.dialog.json ***!
  \********************************************/
/*! exports provided: entry, stuck, doublejump, end, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Holy macaroni, another human!\",\"[$ismale] I thought I'd never see another dude anytime soon.\",\"[not $ismale] I thought I'd never see a woman ever again.\",\"Did you stone-skip-jump your way across the river as well?\",\"►Yes! @stuck\"],\"stuck\":[\"Well, then make yourself comfortable.\",\"At least I'm not stuck here alone anymore.\",\"►What? Can't we just exit the cave?\",\"The platforms on the way up are too high…\",\"►[$hasDoubleJump]But I can double jump! @doublejump\",\"►[not $hasDoubleJump]F…\",\"Game over, man!\",\"GAME OVER! !endgameC !end\"],\"doublejump\":[\"What?\",\"How?\",\"Why?\",\"►That's a long story.\",\"I'm at a loss of words… can you help me get out?\",\"►I wouldn't know how.\",\"Damn… !end @end\"],\"end\":[\"Please let me be… I really hoped you could help me. !end @end\"]}");

/***/ }),

/***/ "./assets/dialog/caveman2.dialog.json":
/*!********************************************!*\
  !*** ./assets/dialog/caveman2.dialog.json ***!
  \********************************************/
/*! exports provided: entry, stuck, visitedEntry, regulary, skipjump, bug, powerup, strange, questions, fire, cave, memories, shadows, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Holy macaroni, another human! !set $metcaveman\",\"[$ismale] I thought I'd never see another dude anytime soon.\",\"[not $ismale] I thought I'd never see a woman ever again.\",\"Did you stone-skip-jump your way across the river as well?\",\"►[$hasDoubleJump]No, I come here regulary. @regulary\",\"►[$hasDoubleJump]What's a stone-skip-jump? @skipjump\",\"►[not $hasDoubleJump]Yes! @stuck\"],\"stuck\":[\"Well, then make yourself comfortable.\",\"At least I'm not stuck here alone anymore.\",\"►What? Can't we just exit the cave?\",\"The platforms on the way up are too high…\",\"►F…\",\"Game over, man!\",\"GAME OVER! !endgameC !end\"],\"visitedEntry\":[\"[$ismale]Hey pal!\",\"[not $ismale]Greetings my lady.\",\"►Can I ask you some questions? @questions\",\"►I'm on my way. @visitedEntry !end\"],\"regulary\":[\"So there is a regular way to cross the river? !set visited\",\"►Yeah, it's a long story.\",\"I couldn't cross the broken bridge after falling down from the sky.\",\"I tried many times but I couldn't jump far enough.\",\"Since there wasn't anything better to do, I found out about the skip-jump by accident and ended up on this side of the river. @skipjump\"],\"skipjump\":[\"It's a secret jumping technique I mastered. !set visited\",\"Just at the moment of impact, I was able to jump on the water and cross the river this way!\",\"Just like a stone skips on water when you throw it at the right angle. Hence the name.\",\"Patent pending.\",\"And now I'm stuck here… @bug\"],\"bug\":[\"The fire up top wasn't very helpful.\",\"And after I entered the cave, I couldn't get back out.\",\"The platforms are to high for me to jump up.\",\"►The power-up fire? He gave me the ability to fly. @powerup\",\"►Keep going. @strange\"],\"powerup\":[\"Oh really? You can actually fly now?\",\"He was just repeating lines and blabbing about broken sequences.\",\"Maybe you can go talk to him?\",\"►If I have the time. Continue.\",\"Where was I? Ah! @strange\"],\"strange\":[\"But that's not all.\",\"There is something very strange going on here.\",\"►What do you mean?\",\"Don't you see it? The strange shrine in the clouds and the very supspicious fire people?\",\"How did we get here in the first place?\",\"It's like a feverish nightmare from which you can't wake up.\",\"I conducted some experiments down here and the results are alarming. @questions\"],\"questions\":[\"What do you want to know about?\",\"►How did you get here? @memories\",\"►Anything interesting about this cave? @cave\",\"►Why the open fire in the cave? @fire\",\"►Nevermind. @visitedEntry !end\"],\"fire\":[\"Good question! First of all, carbon monoxide poisoning is not something that happens here.\",\"Death in general seems to be impossible. Trust me, I tried.\",\"But the fire itself is very interesting.\",\"I made a lot of camp fires since I came here and they all look alike.\",\"I mean, practically identical. And not only that, they even resemble the fire in the entrance.\",\"Isn't that strange? It's like someone got really lazy and just made everything from the same template.\",\"►You're right, but the fire in the beginning looked different.\",\"Yeah, I remember. It looked fake.\",\"►I have other questions. @questions\"],\"cave\":[\"Yes! This cave is strange as well.\",\"It's the only cave I've seen so far that has nothing of interest in it.\",\"Very suspicious if you ask me.\",\"►Well, you are here.\",\"I don't like the tone of that…\",\"I'm a living person and not some kind of pawn that only exists to chat with anyone who enters this cave.\",\"As soon as I have the means to leave, I will.\",\"►We will see. I have other questions. @questions\"],\"memories\":[\"My memories are very hazy, I can't remember anything from before my arrival here.\",\"What about you?\",\"►No, it's all blank.\",\"Thought so… There's something sinister going on here behind the curtains.\",\"There's always a lingering feeling of being watched from the shadows.\",\"►Yeah, I met that guy under the bridge. @shadows\",\"►Creepy. I got other questions. @questions\"],\"shadows\":[\"What guy?\",\"►The shadow person. He taught me how to run.\",\"You seem to have had a very different experience than I did…\",\"►Apparently. I got other questions. @questions\"]}");

/***/ }),

/***/ "./assets/dialog/chicken.dialog.json":
/*!*******************************************!*\
  !*** ./assets/dialog/chicken.dialog.json ***!
  \*******************************************/
/*! exports provided: entry, social, touch, living, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"What?\",\"[not met]Never seen a glowing chicken before? !set met true\",\"►[not livingDialog]Are you living here? @living\",\"►[not touchDialog]What happens when I touch you? @touch\",\"►So you're not the social type… @social\"],\"social\":[\"Exactly. !end @entry\"],\"touch\":[\"Firstly, I'll fill up you health bar by five points. !set touchDialog true\",\"Secondly, I'm gonna reward you with salmonella.\",\"So, go right ahead.\",\"►I'm good, thanks.\",\"[$ismale] Good boy. @entry !end\",\"[not $ismale] Clever girl. @entry !end\"],\"living\":[\"Apparently. Living the life to it's fullest. !set livingDialog true\",\"I spent enough time just slaving my life away, being burried inside walls…\",\"…waiting for someone to accidentally free me from my prison.\",\"Just to be consumed for a cheap health buff.\",\"Used and forgotten.\",\"►Woah, that's kinda dark.\",\"It is. But we power-ups can live in peace here…\",\"The people tend to lack health bars, so I'm off the wanted list.\",\"But apparently I seem to be on the “being asked stupid questions” list.\",\"►I get the hint.\",\"Good. @entry !end\"]}");

/***/ }),

/***/ "./assets/dialog/fire0.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/fire0.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, variableExample, help, impressed, how, why, existence, bye, details, reminder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Hey, person! !talkedtofire\",\"►[$devmode]Hey!\",\"►[$devmode]I'm a dev, show me variables example! @variableExample\",\"I am starving, I fear to die very soon and my light will go out forever. @help !sad\"],\"variableExample\":[\"This example demonstrates variables. !set exampleSeen\",\"[exampleSeen]It's pretty cool!\",\"It is not perfect yet and a little buggy, some things don't work yet… sorry\",\"[exampleSeen]This line is conditional, and you should see it. !set fail\",\"[not fail]This line unfortunately is visible due to a bug, where conditions are evaluated one line too early.\",\"Variables sometimes only take effect after another sentence has been spoken. A little weird. Hopefully fixed in future.\",\"Variables also work with player options.\",\"►Say “hello” !set hello 1\",\"►Say “howdy” !set hello 0\",\"…\",\"[hello=1]Hello!\",\"[hello!=1]Howdy!\",\"What was the other word again?\",\"►[hello=1]Howdy!\",\"►[not hello=1]Hello!\",\"►I don't know… !set idk\",\"…\",\"[idk]You're a little forgetful…\",\"[not idk]Ah, right!\",\"Also, now setting a global variable which could be accessed from other dialogs. !set $test 42\",\"Which can be accessed using a dollar sign.\",\"[$test]Isn't that cool?\",\"►Yes!\",\"Bye! @entry !end\"],\"help\":[\"Would you help me out, kind stranger?\",\"►Oh my God, a talking fire?! @impressed\",\"►Why should I help you? @why\",\"►How can I help you? @how\",\"►I don't care! !angry\",\"Oh you son of a…! No, sorry, I get it. Well, maybe another time. !neutral\",\"Just be aware this whole game is pretty pointless if you don't help me out… @help !end\"],\"impressed\":[\"Well yes, I'm impressed too. Took me some time to get used to it. @help !amused\"],\"how\":[\"[not $ismale]I really need some wood. Surely a strong and marvelous woman like you can help an old fire out.\",\"[$ismale]I really need some wood. Surely a strong and marvelous man like you can help an old fire out.\",\"►Sounds boring. Maybe later… @bye\",\"►I'm in. @details\",\"►What do we say to the god of fire?\",\"I don't know, what?\",\"►Not today!\",\"But if you don't help me out, there may not be a tomorrow. @why\"],\"why\":[\"Because I am the essence of life. If I die, everything dies. Do you want everything to die?\",\"►Oh, I wouldn't want to be responsible for that! @details\",\"►I don't know, do I?\",\"►Yes!\",\"No!\",\"►OK\",\"So you'll help me then?\",\"►Definitely! @details\",\"►Do I even have a choice?\",\"Technically yes. Practically deciding against it would be a little stupid though.\",\"►Well OK then, you convinced me. @details\",\"►Why? @existence\"],\"existence\":[\"Because your sole existence in this world hinges on helping to keep me alive.\",\"That's why you're here. There's nothing else for you to do anyway.\",\"►Cool! I'll help you. @details\",\"►I'd rather think about this in private. @bye\"],\"bye\":[\"Sure, take your time. You'll come back eventually! @help !end\"],\"details\":[\"Great! I knew I could rely on you. I know a good person when I see one!\",\"►So what exactly should I do?\",\"It's easy! I just need a little firewood so I can keep burning a little longer.\",\"►I can get you some wood!\",\"Yes, yes! But it needs to be a special kind of wood.\",\"There's a good tree in the east. His wood is good. !treezoom\",\"Go get it! !gotFireQuest\",\"►Sure thing! @reminder !end\"],\"reminder\":[\"Hello again!\",\"►What do I need to do?\",\"►Bye! @reminder !end\",\"Go east. Ask tree for wood. Bring me wood. Soon!\",\"►On my way! @reminder !end\"]}");

/***/ }),

/***/ "./assets/dialog/fire1.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/fire1.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, holdup, secondthoughts, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Oh, you did it! That's the real deal. !amused !talkedToFireWithWood\",\"Good job on scalping that piece of junk.\",\"Just take the wood and throw it into my fire, just as we agreed.\",\"►Got it.\",\"►I have second thoughts… @secondthoughts\",\"Just do it! @holdup !end\"],\"holdup\":[\"What's the holdup? !angry\",\"Just take the wood and throw it into me! Seriously…\",\"►Got it. @holdup !end\"],\"secondthoughts\":[\"You can't be serious. Are you numb? !angry\",\"Take the WOOD and THROW it into ME, you understand? !angry\",\"Don't make me wait!\",\"►Wow, calm down.\",\"You calm down! Just give me the wood already! !angry @holdup !end\"]}");

/***/ }),

/***/ "./assets/dialog/fire2.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/fire2.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, noFriendship, friendship, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Omnmnommnomm, that was good!\",\"Hahahahaha!\",\"I am finally complete.\",\"►What are you doing?\",\"►Whyyy?\",\"I'm unstoppable!\",\"This was the last time I have to ask a filthy mortal for help!\",\"And now I'm going to devour the world.\",\"And I'll start with you!\",\"►It is how it is…\",\"►I thought we were friends!\",\"►Not so fast!\",\"►Stop right there!\",\"What do you want to do, stop me? You got nothing on me! You're a human! I'm literally fire!\",\"[not $hasFriendship]As a cherry on top of the fiery cake, I'm also gonna consume all of your power-ups. @noFriendship\",\"As a cherry on top of the fiery cake, I'm also gonna consume all of your power-ups. @friendship\"],\"noFriendship\":[\"All of the useful ones, that is. You can keep that annoying dancing Dave as eternal punishment!\",\"HAHAHAHAHA! !crazyzoom !end\"],\"friendship\":[\"Wait…\",\"Didn't you have a flying power-up before? Where did that go?\",\"I was really looking forward to consume it. It tastes like chicken…\",\"Oh well, doesn't matter.\",\"HAHAHAHAHA! !friendshipEnding !end\"]}");

/***/ }),

/***/ "./assets/dialog/fire3.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/fire3.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, nothing, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Whoops… !amused\",\"Well this is awkward.\",\"Seriously though… now I'm in serious risk of dying. !sad\",\"Are you happy now? Is this what you wanted?\",\"You sacrificed our deep friendship for the brief satisfaction of putting out a fire. !bored\",\"I'm disappointed.\",\"But let's not dwell in the past. Will you help me out of this?\",\"►Yes. @nothing\",\"►No.\",\"I see you've learned a lesson here.\",\"“Keep it alive”, they said, “it will be fun”. And you almost paid the price.\",\"Good for you the weather shifted. !bored\",\"Goodbye. Maybe see you in a sequel. !endgameA !end\"],\"nothing\":[\"Then you have learned nothing!!! !angry\",\"Thank you nonetheless, very kind of you.\",\"We're still coming to an end now. This game can't go on forever.\",\"You've made it. Good for you.\",\"Goodbye. !endgameA !end\"]}");

/***/ }),

/***/ "./assets/dialog/fire4.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/fire4.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"I give up… !bored\",\"That was too much. Keep that dog away from me. !bored\",\"I'm no match for this kind of special companionship.\",\"And now I'm in serious risk of dying… !sad\",\"But I have learned my lesson.\",\"I won't try to destroy the world anymore. This goal really isn't worth being put out like that. !bored\",\"It will take a while getting the stench off of me… !bored\",\"Goodbye. Maybe see you in a sequel. !endgameB !end\"]}");

/***/ }),

/***/ "./assets/dialog/flameboy1.dialog.json":
/*!*********************************************!*\
  !*** ./assets/dialog/flameboy1.dialog.json ***!
  \*********************************************/
/*! exports provided: entry, visited, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Hello humble adventurer, welcome to my…\",\"Wait, how did you get past the river? That's not how this works! !angry\",\"►Whoops, I'll be on my way.\",\"Yeah, do that please. @visited !end\"],\"visited\":[\"No no no no! Don't go breaking all the precious sequences! !angry\",\"Get back to the other side and do things in the correct order.\",\"►You might be right\",\"Hush hush! @visited !end\"]}");

/***/ }),

/***/ "./assets/dialog/flameboy2.dialog.json":
/*!*********************************************!*\
  !*** ./assets/dialog/flameboy2.dialog.json ***!
  \*********************************************/
/*! exports provided: entry, answers, attitude, otherfire, powerup, visited, more, finished, caveman, nodialog, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Hello humble adventurer, welcome to my sacred hut, yadda yadda. What do you need?\",\"►What's with that attitude? @attitude\",\"►I'm just here for some answers. @answers\"],\"answers\":[\"Answers? What? Do I look like some kind of prophet to you?\",\"►The stone from the mountain told me I should come here for answers.\",\"Ohhh, that guy. I bet he told you to throw him into the river.\",\"The fact that he floats should tell you everything about him. He's a real airhead.\",\"►So, no answers? I need to get a seed to grow.\",\"Not my problem. I'm only here to give away power-ups.\",\"►Power-ups? I'm interested @powerup\"],\"attitude\":[\"I've just had the worst day. Lost my job to some fancy pants high framerate fire jerk and was put here to give away free power-ups.\",\"►The other fire across the river? @otherfire\",\"►I don't care. I need answers! @answers\",\"►You said something about power-ups? @powerup\"],\"otherfire\":[\"Yeah, that jiggly eyed bastard!\",\"►He seemed pretty helpless to me.\",\"►I still don't care. I need answers! @answers\",\"►You said something about power-ups? @powerup\",\"Hah! That's just fantastic! Do whatever you like, just leave me out of it. And don't come back complaining after you get scorched.\",\"►Whatever. I need answers! @answers\",\"►OK… You said something about power-ups? @powerup\"],\"powerup\":[\"Yeah, I'm assigned to distribute the flying ability. It's popular amongst school children… and birds.\",\"►Nice, flying!\",\"Don't expect too much. It's more of a multi-jump if you ask me. But you know… marketing.\",\"►I'll take one.\",\"Sure, here you go. !multijump\",\"No refunds!\",\"Also, I'm obligated to tell you, that you should visit the cloud world.\",\"I personally wouldn't go there. The people there are really annoying.\",\"But that's just my opinion… @visited !end\"],\"visited\":[\"Sorry, we have a strict no return policy!\",\"►[$metcaveman]Did you know there's someone living in the caves? @caveman\",\"►I just wanted to talk some more. @more\",\"►Damn…\",\"Come on man! You didn't even pay anything. @finished !end\"],\"more\":[\"I already have a headache, thanks. Can't you just do like a bird… and multi-jump out of here? @finished !end\"],\"finished\":[\"Just let me do my job in peace. Go irritate the cloud people. They love that.\",\"►[$metcaveman] Did you know there's someone living in the caves? @caveman\",\"►Fine. @finished !end\"],\"caveman\":[\"Yeah, the best kind of neighbor: Quiet and seclusive.\",\"►Can't you just give him a free flying power-up?\",\"No, that's not how this works. He broke the sequence and messed up some triggers.\",\"That's irreversible, but not my problem.\",\"►Sequence? Triggers? What does all that mean?\",\"Whoops, don't mind me. Just giving away power-ups here.\",\"►But…\",\"Bye! @nodialog !end\"],\"nodialog\":[\"I really don't want to talk to you anymore. !end\"]}");

/***/ }),

/***/ "./assets/dialog/flameboy3.dialog.json":
/*!*********************************************!*\
  !*** ./assets/dialog/flameboy3.dialog.json ***!
  \*********************************************/
/*! exports provided: entry, tryOut, trust, back, first, meaning, next, idle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Thanks for the wood…\",\"But weren't you supposed to bring it somewhere else?\",\"►I just wanted to try this out first. @tryOut\",\"►I don't trust the other fire. @trust\",\"►Whoops, you're right. Can I have the wood back? @back\"],\"tryOut\":[\"Interesting. So no moral motivation? You're just driven by curiosity?\",\"Well, I take what I can get. At least you didn't just blindly follow the order of a psychotic flame.\",\"The others weren't so smart. @first\"],\"trust\":[\"Good call. I did tell you that this thing was nothing but trouble.\",\"Nice to see that you aren't as dense as the others. @first\"],\"back\":[\"No no! Don't you understand?\",\"You did good. Even if it was just by chance.\",\"I'll take what I can get. @first\"],\"first\":[\"You're actually the first one in a couple hundered years to break the cycle. !amused\",\"I'm proud of you. You can pat yourself on the back. !amused\",\"I would do so myself, but I don't have any arms in this form.\",\"►I don't understand anything… @meaning\",\"►What does this all mean?  @meaning\"],\"meaning\":[\"That's nothing that you should think too much about.\",\"Even a glimpse of the truth would instantaniously turn your sanity inside out.\",\"Let's just say this was all a dream, how about that?\",\"If you're lucky, you'll even forget that this happened at all.\",\"►What happens now? @next\"],\"next\":[\"Like I said, you can leave. I'll activate the portal here.\",\"Just go through and you're out of here.\",\"Don't dilly-dally for too long. I have a lot of paper work waiting for me.\",\"►Thanks… I guess.\",\"Yes yes. I have to thank you as well. You spared me a lot of work here. !amused\",\"The damage the fire would've done to this place, would you have fed the wood to it, is a pain to fix.\",\"I might even get some long overdue vacation time out of this. !amused\",\"So, see you around… or not. !activatefireportal !end @idle\"],\"idle\":[\"Still around?\",\"There isn't really much you can do here now.\",\"Just hop in the portal and off you go!\",\"►O-Okay… !end @idle\"]}");

/***/ }),

/***/ "./assets/dialog/flameboy4.dialog.json":
/*!*********************************************!*\
  !*** ./assets/dialog/flameboy4.dialog.json ***!
  \*********************************************/
/*! exports provided: entry, visited, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Oh come on… \",\"I can't believe this… !angry\",\"Don't bring that stupid grey guy to this side of river. !angry\",\"How did you even get over here?\",\"I can't help you like this. Go back und do it properly!\",\"Does nobody here care for a proper order of events?\",\"►Whoops, I'll be on my way.\",\"Yes! @visited !end\"],\"visited\":[\"No! Don't talk to me while carrying that stupid stone!\",\"►On my way!. @visited !end\"]}");

/***/ }),

/***/ "./assets/dialog/mimic.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/mimic.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, wakeup, who, main, questions, what, items, sleeping, sleeping_questions, eat, lucky, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"…\",\"…zZzZZ…\",\"(Someone seems to be asleep in there.)\",\"►I better force the chest open. @wakeup !wakeupchest !end\",\"►I better leave the chest alone. @entry !end\"],\"wakeup\":[\"Oh my, was I asleep?\",\"What time is it?\",\"►I have not the slightest idea…\",\"Well, no worries. @who\"],\"who\":[\"I haven't seen you before. Are you an item?\",\"►No, just a regular human.\",\"Ahh, one of those. @questions\"],\"main\":[\"Hello friend! @questions\"],\"questions\":[\"►What are you? @what\",\"►[not asked_about_items]Do you have any items? @items\",\"►[not asked_aboud_sleeping]I thought someone was sleeping in there. @sleeping\",\"►I'm off.\",\"Bye! @main !end\"],\"what\":[\"A mimic chest.\",\"But a basic one, I can't even move properly.\",\"It looks really silly when I jump to move forward, so I don't do it when people are around.\",\"►How did you get here then?\",\"Delivery services! @questions\"],\"items\":[\"No, we mimics usually don't carry items. !set asked_about_items true\",\"Some do, but that only incentivizes unnecessary violence.\",\"There's no need to attack a mimic who doesn't hold items, no?\",\"►True\",\"Yes, yes. @questions\"],\"sleeping\":[\"Oh, a common mistake! !set asked_aboud_sleeping true\",\"The people I eat usually don't have the capacity to make sleep noises anymore.\",\"But that was a long time ago. I'm living the vegan lifestyle now.\",\"I moved here when I heard how peaceful it was. @sleeping_questions\"],\"sleeping_questions\":[\"►What do you eat then? @eat\",\"►Lucky me… @lucky\"],\"eat\":[\"Vegetables, rice, and tofu.\",\"Or whatever is prepared when I'm around. I can't really cook for myself. @sleeping_questions\"],\"lucky\":[\"Indeed!\",\"If you had met me when I was still working as a trap for adventurers, you would be crushed and dismembered by now. @questions\"]}");

/***/ }),

/***/ "./assets/dialog/powershiba1.dialog.json":
/*!***********************************************!*\
  !*** ./assets/dialog/powershiba1.dialog.json ***!
  \***********************************************/
/*! exports provided: entry, met, powerup, past, brother, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"…\",\"Oh, hello mortal. !set $metPowerShiba\",\"►Hello. Who are you?\",\"I'm a power-up.\",\"But I wasn't always one.\",\"►Were you a dog before by any chance?\",\"I do not remember my past life and it doesn't really matter either.\",\"►How does one become a power-up?\",\"I was taught by my mentor and father figure, the almighty flying power-up.\",\"After years of meditation, I was able to transcend and leave my mortal shell behind.\",\"I lost my memories and the ability to move, but it was worth the sacrifice.\",\"►If you say so… @met\"],\"met\":[\"What is it you desire?\",\"►What kind of power do you inherit? @powerup\",\"►Aren't you interested in your past? @past\",\"►[$metShiba]Did you know, you have a brother? @brother\",\"►I'll leave you to yourself.\",\"Please do. @met !end\"],\"powerup\":[\"That I do not know.\",\"Usually, the designated power is bestowed upon birth.\",\"Since I transcended being a mortal like you, my power is unknown.\",\"But it doesn't matter either way.\",\"I have no intention to be consumed.\",\"►Not even… by me?\",\"Yes, not even by a person I met a minute ago.\",\"I shall contemplate about cloud related topics here for the rest of time.\",\"►Too bad… @met\"],\"past\":[\"No, the memories of my mortal past are but an ember of the flame I am now.\",\"This is how I must be. This is everything.\",\"►If you say so… @met\"],\"brother\":[\"I do not remember my past life.\",\"I also have no desire to involve myself with mortals.\",\"►That's harsh man… I gotta tell the other dog. @met\"]}");

/***/ }),

/***/ "./assets/dialog/powershiba2.dialog.json":
/*!***********************************************!*\
  !*** ./assets/dialog/powershiba2.dialog.json ***!
  \***********************************************/
/*! exports provided: entry, sacriface, sacrificeOptions, yourself, carry, yes, notyet, go, end, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"I… remember…\",\"A memento from the past.\",\"Thank you for bringing this to me.\",\"How is my brother? Tell me about him.\",\"►He is a good boy.\",\"Good to hear that.\",\"I can't believe I forgot about him…\",\"This is unacceptable.\",\"►Maybe you can make it up to him.\",\"Yes… I must do that.\",\"I must meet him. @sacriface\"],\"sacriface\":[\"I know that it's a lot to ask from you after you already did so much…\",\"…but would you be so kind and give away your power of multi-jumping to my brother?\",\"This is the only way for him to actually come to me. @sacrificeOptions\"],\"sacrificeOptions\":[\"►Can't you just leave the clouds yourself? @yourself\",\"►Can't I carry you down? @carry\",\"►Of course I will! @yes\",\"►Eh, no thanks. @sacriface !end\"],\"yourself\":[\"As a power-up, I lost all means to move by myself.\",\"I'm a slave to my own ambitions. @sacrificeOptions\"],\"carry\":[\"Touching me will most likely lead to a consumption of my unknown power.\",\"I might keep my consciousness, but that's not a risk I can take.\",\"Who knows how my power might manifest.\",\"I must meet him like I am now. @sacrificeOptions\"],\"yes\":[\"You… will?\",\"[not $seedgrown] Wait… @notyet\",\"This sacrifice will not be forgotten.\",\"Please go to my brother and grant him your power-up.\",\"►Of course I will! @go\"],\"notyet\":[\"Make sure you have done everything you need to do here up in the clouds.\",\"If you give away your multi-jump prematurely it could lead to a disaster.\",\"I can tell that you still have business here.\",\"►Thanks for heads up! !end @sacriface\"],\"go\":[\"Thank you human! !set $gotPowerShibaQuest true !end @end\"],\"end\":[\"Please grant your multi-jump to my mortal brother.\",\"Your sacrifice will not be forgotten.\",\"►Of course I will! @end !end\"]}");

/***/ }),

/***/ "./assets/dialog/powershiba3.dialog.json":
/*!***********************************************!*\
  !*** ./assets/dialog/powershiba3.dialog.json ***!
  \***********************************************/
/*! exports provided: entry, accept, idea, fate, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Human! Thank you for coming.\",\"Your selflessness brought an estranged family back together.\",\"This is something no amount of meditating could achieve.\",\"►Don't mention it!\",\"Please don't play this down.\",\"My brother and I came to the agreement that you should collect me.\",\"My unknown power might help you on your quest.\",\"►I don't know if I can accept that… @accept\",\"►Great idea! @idea\"],\"accept\":[\"We don't accept a “no” for an answer. @fate\"],\"idea\":[\"Good to see that you agree. @fate\"],\"fate\":[\"This is the inevitable fate of my existence.\",\"And I couldn't be happier to be at your side.\",\"►It's a deal then!\",\"I hope my power is useful to you.\",\"You should continue your quest now!\",\"Farewell! !friendship !end @entry\"]}");

/***/ }),

/***/ "./assets/dialog/seed1.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/seed1.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, visit, final, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"I have been born. I am alive!\",\"I thank you for bestowing the miracle of life onto me.\",\"My father will hear of this. Please speak to him to receive a proper reward.\",\"►I will, but please stop the creepy talk.\",\"I will not comply to this demand. Farewell! @visit !end\"],\"visit\":[\"I will drown in a very short amount of time. Can you stop the unending rush of fluids?\",\"►I guess there is no dry-dance, sorry.\",\"Oh father, why have you forsaken me?\",\"►Gotta go, fast! @final !end\"],\"final\":[\"My life was in vain… Avenge me! !end\"]}");

/***/ }),

/***/ "./assets/dialog/shadowpresence1.dialog.json":
/*!***************************************************!*\
  !*** ./assets/dialog/shadowpresence1.dialog.json ***!
  \***************************************************/
/*! exports provided: entry, what, visited, bridge, running, pokemon, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Greetings, human!\",\"[not $gotFireQuest]You might wanna talk to the flame first.\",\"[not $gotFireQuest]My hands are tied until then.\",\"►[$gotFireQuest]Oh my god, what are you? @what\",\"►I can't handle this darkness.\",\"[not $gotFireQuest]Sure, no hard feelings. @entry !end\",\"[$gotFireQuest]Sure, come around again if you're ready. @entry !end\"],\"what\":[\"[$ismale]No need to soil your pants.\",\"[not $ismale]No need to soil your skirt.\",\"Ever had the feeling someone was watching you from a dark corner at home?\",\"Or you're being followed at night but no one is there when you turn around?\",\"That's probably me, or one of my coworkers.\",\"But I'm on my break right now. It's nice to have a chat every once in a while. @visited\"],\"visited\":[\"[visited]Welcome back, friend!\",\"►[not taught]Any idea how to get over that bridge? @bridge\",\"►[not pokemon]What are you doing here exactly? @pokemon\",\"►[taught]How does the running work again? @running\",\"►I'll get going. !set visited\",\"Sure, keep up the good work. @visited !end\"],\"bridge\":[\"That bridge is pretty busted, isn't it? !set visited\",\"You can an easily vault over the gap if you gain enough speed.\",\"►I can only walk. I'm too slow.\",\"That's not a problem. I can teach you how to run.\",\"It's a pleasure seeing people run anyway.\",\"►How does it work?\",\"Close your eyes and envision that unique feeling.\",\"The creeping anxiety you feel on an empty walkway at night.\",\"Someone is behind you. Cold sweat oozes from your skin.\",\"You can almost feel the dark presence crawling up your spine.\",\"Your irrational fear swells up and blossoms to a beautiful raging panic!\",\"…or in other words: Just hold your run button. Fairly easy. !enableRunning !set taught\",\"►Awesome!\",\"Have fun with your new ability. @visited !end\"],\"running\":[\"Just remember that one feeling, that creeping anxiety at night.\",\"Someone is behind you. You can almost feel the cold presence on your skin.\",\"The fear swells up and bursts out as raging panic. Beautiful!\",\"…or in other words: just hold the run button. Fairly easy.\",\"►Thanks!\",\"See you around. @visited !end\"],\"pokemon\":[\"I'm hooked on Pokémon GO since last year.\",\"This bridge used to be a popular poke-stop, but the folks around here stopped playing.\",\"I might be the last one playing. Finishing raids like this is nearly impossible.\",\"►Can't you just stop playing as well?\",\"I already invested so much time and effort. How could I stop now?\",\"►Suit yourself. !set pokemon @visited\"]}");

/***/ }),

/***/ "./assets/dialog/shiba1.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/shiba1.dialog.json ***!
  \******************************************/
/*! exports provided: entry, met, met2, tree, reminder, search, found, boneReminder, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Hello! Friend!\",\"You smell nice.\",\"Are you here to play???\",\"►A talking dog, I'm not surprised.\",\"Yes. Talking!\",\"Mother taught me to speak.\",\"♪ Bark!\",\"I mean… ♪ Chirp. @met\"],\"met\":[\"Play???\",\"►[not inTree]Why are you in a tree? @tree\",\"►[inTree]Can you tell me about your brother again? @reminder\",\"►We'll play another time.\",\"►(Pet the dog already!) !petDoggo !end @met\",\"♪ OK friend. !end @met\"],\"met2\":[\"Did you find my brother?\",\"Also… Play???\",\"►[$metPowerShiba]I found your brother… @found\",\"►[inTree]Can you tell me about your brother again? @reminder\",\"►We'll play another time.\",\"►(Pet the dog already!) !petDoggo !end @met2\",\"♪ OK friend. !end @met2\"],\"tree\":[\"I fell from the sky. !set inTree\",\"Bird mother brought me here, gave me food.\",\"Brother is still missing… We separated.\",\"►There is another dog?\",\"Yes, in the clouds. I fell.\",\"Can you find brother? You can fly! !set $metShiba\",\"►[not $metPowerShiba]Sure, I can take a look. @search\",\"►[$metPowerShiba]I already found him. @found\"],\"reminder\":[\"Yes! Brother!\",\"I fell from the sky, my brother stayed.\",\"I howl every night, but no response.\",\"Please find brother!\",\"►I'll see what I can find in the clouds. @met2\"],\"search\":[\"Wow! Thanks!\",\"I want to smell brother!\",\"►I'll see what I can find in the clouds. @met2 !end\"],\"found\":[\"Wow! Really? !set $gotBoneQuest\",\"How does he smell?\",\"►Really nice… That's not the issue though.\",\"Did you bring him? Where is he?\",\"►He doesn't remember you…\",\"What??? Oh no… why?\",\"►It's complicated. Any ideas how to make him remember?\",\"Mmmh…\",\"Yes… the bone! ♪\",\"We had a bone… when we were with human.\",\"In a cave, when we came to the clouds.\",\"It's the favorite bone. He must remember the bone!\",\"Can you bring favorite bone?\",\"►The bone in the portal room… I remember that.\",\"Can you bring???\",\"►This might be tricky. The throw power-up seemed to know a lot about items.\",\"Please bring… @boneReminder !end\"],\"boneReminder\":[\"Hello friend!\",\"Can you bring favorite bone?\",\"it's in the cloud cave. You can fly!\",\"►Can't get items through doors… Gotta talk to the throw power-up @boneReminder !end\",\"►(Pet the dog already!) !petDoggo !end @boneReminder\"]}");

/***/ }),

/***/ "./assets/dialog/shiba2.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/shiba2.dialog.json ***!
  \******************************************/
/*! exports provided: entry, entry2, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"You found bone!\",\"Wow!!!\",\"Bring to brother please.\",\"►Sure, I'm on the way! !end @entry2\"],\"entry2\":[\"Friend!\",\"Go to brother.\",\"Bring bone. He will remember!\",\"►Sure, I'm on the way! !end @entry2\"]}");

/***/ }),

/***/ "./assets/dialog/shiba3.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/shiba3.dialog.json ***!
  \******************************************/
/*! exports provided: entry, main, meet, go, nevermind, giveaway, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"How was it? Did you give bone?\",\"►Yeah, your brother remembered you after all!\",\"Wow! I'm happy. Best day. @main\"],\"main\":[\"You are the best!\",\"►[$gotPowerShibaQuest]Do you want to meet your brother? @meet @entry\",\"►Have a nice day! !end @main\"],\"meet\":[\"Yes!!!\",\"Can he come?\",\"►No, that won't be possible…\",\"Awww…\",\"►But you can go to him. @go\",\"►There's nothing I can do. @main !end\"],\"go\":[\"How???\",\"►In theory, I could give you the power to go to him.\",\"I can fly?\",\"►Yes… you can now! @giveaway\",\"►On second thought… nevermind @nevermind\"],\"nevermind\":[\"What??? Nooo… !end @main\"],\"giveaway\":[\"I can feel it. Thank you!\",\"No time wasting!\",\"I will go get brother.\",\"Find us on the mountain. I will wait at bird feeding spot.\",\"►At the bird feeding spot… check!\",\"You are best friend!\",\"See you there. !shibaNextState !end\"]}");

/***/ }),

/***/ "./assets/dialog/shiba4.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/shiba4.dialog.json ***!
  \******************************************/
/*! exports provided: entry, entry2, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Hello best friend!\",\"Thank you for visiting.\",\"We have the best day.\",\"Brother is glowing!\",\"►He sure is. @entry2 !end\"],\"entry2\":[\"♪ Happy bark!\",\"Play???\",\"►Later. I have to deal with the fire first. @entry2 !end\"]}");

/***/ }),

/***/ "./assets/dialog/shiba5.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/shiba5.dialog.json ***!
  \******************************************/
/*! exports provided: entry, play, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"I helped!\",\"►You sure did, buddy.\",\"At last, time to play!!!\",\"►Just a minute! @play !end\"],\"play\":[\"Play with friend???\",\"►Just a minute! @play !end\"]}");

/***/ }),

/***/ "./assets/dialog/spider1.dialog.json":
/*!*******************************************!*\
  !*** ./assets/dialog/spider1.dialog.json ***!
  \*******************************************/
/*! exports provided: entry, nerve, rejected, nicetomeet, chosenone, whatsgoingon, spider, fairyschool, racist, magic, moregenders, swapgender, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"[not visited]Greetings, adventurer. Welcome to this ancient and mysterious land. !set $talkedToSpider true\",\"[not visited]I am your designated magical gender fairy and will guide you on your quest. I bet you have a lot of questions. !set visited\",\"[visited]How can I help?\",\"►[not option_nicetomeet]It's nice to meet you. @nicetomeet\",\"►What's going on here? @whatsgoingon\",\"►[not toggledgender]What is a gender fairy? @magic\",\"►[toggledgender]Can you “accidentally” change my gender again? @swapgender\",\"►Seriously? Magical FAIRY? @spider\",\"►[not visited]I got no time for this… @nerve\",\"►[visited]Gonna go…\",\"Byeeee! @entry !end\"],\"nerve\":[\"The nerve! @rejected !end\"],\"rejected\":[\"Look who comes crawling back…\",\"►Sorry, I actually do need some guidance. @entry\",\"►I just pressed the wrong button!\",\"Jerk! @rejected !end\"],\"nicetomeet\":[\"[not $ismale]Ho ho ho, what a sweet gal you are. The last one wasn't of the talkative kind. !set option_nicetomeet\",\"[$ismale]Ho ho ho, what a friendly fella you are. The last one wasn't of the talkative kind. !set option_nicetomeet\",\"He had the WORST time!\",\"But you and I will get along just fine.\",\"►What happened to the last one? @chosenone\",\"►Yeah sure, back to topic.\",\"Suuuure… @entry\"],\"chosenone\":[\"It wasn't a pretty sight. Lots of misunderstandings, some disrespectful verbal exchanges.\",\"Long story short, you won't see him anytime soon. Trust me.\",\"Some would say, he “burned” to “death”.\",\"…\",\"Subtlety is not my strong suit.\",\"►I can see that. Back to topic!\",\"Aye! @entry\"],\"whatsgoingon\":[\"[not talkedAboutQuest]Nothing really. Just make yourself at home. You're part of our world now.\",\"►[not talkedAboutQuest]Really? There's nothing to do?\",\"[not talkedAboutQuest]You can always approach the other habitants and have interesting chats with them.\",\"[not talkedAboutQuest]The one downstairs might even need some help.\",\"[talkedAboutQuest]Like I said, we just live our lives in peace here. There isn't really much to do.\",\"[talkedAboutQuest]You can go and meet the other habitants. You can start downstairs.\",\"►Sure, I'll give it a try.\",\"Great! !set talkedAboutQuest true @entry.\"],\"spider\":[\"[not isracist]What, don't you see the fairy wings on my back? My golden hair and cute make up?\",\"[not isracist]I worked really hard to earn all of these traits.\",\"[isracist]…\",\"►Can anyone become a fairy? @fairyschool\",\"►[not isracist]Since when are spiders allowed to be fairies? @racist\",\"►Nevermind. @entry\"],\"fairyschool\":[\"Are you kidding me?\",\"Of course not. Only the best of the best can become fairies.\",\"I went through six years of fairy university and another two years of unpaid internships as fairy assistant.\",\"Can't wait until I get my new pink fairy dress. The one I got at graduation didn't fit.\",\"►I cannot guess why… Back to topic. @entry\"],\"racist\":[\"I will ignore your racist remark in good faith… you racist! !set isracist !set askedaboutspider\",\"►Sorry… @spider\"],\"magic\":[\"[not askedformoregenders]Great that you ask!\",\"[not askedformoregenders]I'm not just a normal fairy, but one with an academic background.\",\"[not askedformoregenders]With my bachelor degree in gender studies, I know everything about genders.\",\"[not askedformoregenders]I can instantly tell that you've been born to be at least one of two genders!\",\"[askedformoregenders] Like I said, you have a gender!\",\"►[not askedformoregenders]Aren't there more? @moregenders\",\"►Is that all…?\",\"Ha! Not in the least. I have the power to accidentally change the gender of humans against their will.\",\"Abracadabra and it is done!\",\"►What… WAIT !set toggledgender !togglegender\",\"You are very welcome, gender swapped human!\",\"►It's not that bad, actually. @entry\",\"►You even changed the clothes, nice. @entry\"],\"moregenders\":[\"There's only so much you can do with this kind of pixel resolution…\",\"Also, don't question my bachelor knowledge!\",\"►Two genders is fine. !set askedformoregenders @magic\"],\"swapgender\":[\"Why? Don't you like your current gender?\",\"Whoops, there we go again. !togglegender\",\"►I feel sick. @entry\"]}");

/***/ }),

/***/ "./assets/dialog/stone1.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/stone1.dialog.json ***!
  \******************************************/
/*! exports provided: entry, tips, visitedentry, introduction, noteacher, ionlymaster, getthisdone, woman, man, beard, genderswap, touche, human, onmyown, yesmaster, soo, drink, rain, nottouchyou, lift, remember, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"[not met]I am the wise stone. Hard, but fair. !talkedToStone\",\"[not met]I oversee the sacred garden up that hill. What wisdom do you seek? !set met\",\"[met]Welcome back young human. What wisdom do you seek?\",\"►[not $seedplanted]I need to plant a seed. Any tips? @tips\",\"►[$seedplanted]I planted the seed but nothing happened… @introduction\",\"►Nevermind. @entry !end\"],\"tips\":[\"You can use the sacred garden of course. Just throw the seed directly onto the soil.\",\"The item will be absorbed by the blessed and fertile ground to help create new life.\",\"What a miracle!\",\"►It's just a gardening…\",\"►Will do.\",\"Good luck! @entry !end\"],\"visitedentry\":[\"I see that you still struggle with your task.\",\"►Yeah, kind of. @introduction\"],\"introduction\":[\"Well, if you are willing to listen, I would be willing to teach you the ways of the sacred soil.\",\"►I do not need a teacher. @noteacher\",\"►Sure, whatever will help me finally get this done. @getthisdone\",\"►Seriously, can everything talk here? @getthisdone\",\"►I can do this on my own, thanks. @onmyown\"],\"noteacher\":[\"Without my teachings your little tree will remain but a sad seed in the sand.\",\"Return to me when you've grown some wisdom! @visitedentry !end\"],\"ionlymaster\":[\"Fool! Out of my sight! @visitedentry !end\"],\"getthisdone\":[\"[$ismale]A bit more respect, young boy. Start by calling me master!\",\"[not $ismale]A bit more respect, young girl. Start by calling me master!\",\"►I am the only master I acknowledge! @ionlymaster\",\"►Fine, what can you teach me… master? @yesmaster\",\"►Forgive me, master. I am willing to learn. @yesmaster\",\"►[$ismale]When do you beings stop calling me “boy” for once?!\",\"►[not $ismale]When do you beings stop calling me “girl” for once?!\",\"[$ismale]What are you saying, boy?\",\"[not $ismale]What are you saying, girl?\",\"►[$ismale]I'm a girl! @genderswap\",\"►[not $ismale]I'm a woman! @woman\",\"►[$ismale]I'm a man! @man\",\"►[not $ismale]I'm a man! @genderswap\",\"►I'm a human, leave me alone with your gender talk! @human\"],\"woman\":[\"Great for you. @getthisdone\"],\"man\":[\"Ohohoh. Have you looked in a mirror? You have less facial hair than a stone.\",\"►You're right, master. @yesmaster\",\"►Touché! @touche\",\"►A man is defined by his actions, not by his beard.\",\"And for now you have neither. But I reckon this may change today.\",\"►You're right, master. @yesmaster\",\"►But I have accomplished so much!\",\"►Are you saying I'll grow a beard today? @beard\",\"So what, you talked to a fire, bounced off a mushroom and stuck a pine cone into the mud.\",\"Mediocre!\",\"But I'll lead you to greatness once you've accepted your current lack thereof.\",\"►Please do, master. @yesmaster\",\"►Just get to the point already.\",\"So impatient. I'll bless you with my teachings once you've demonstrated your willingness to accept them!\",\"►OK, master, you win. @yesmaster\",\"►Just tell me!\",\"Well, let me help you help yourself then…\",\"►Master master master master!\",\"See, easy! @yesmaster\"],\"beard\":[\"Well that's a miracle for another game. Your fate in this world is a different one, one of carrying and dancing, I presume.\",\"►OK, master. @yesmaster\",\"►But I want a beard!\",\"Are you sure this is what you desire?\",\"►No, master. But I'm ready for your teachings. @yesmaster\",\"►Sure!\",\"Aren't there more important things right now?\",\"►Yes, master. Let's discuss those instead. @yesmaster\",\"►No, I really want a beard!\",\"Well… I guess I could lend you a piece of mine. But please call me master first.\",\"►Master master master!\",\"Here you go. !givebeard\",\"But don't complain! I can only do white ones. This is your life now.\",\"►Thank you, master. Now back to your teachings. @yesmaster\",\"►Mphffpfhffhfpf.\",\"Takes some getting used to. But, where were we… right. @yesmaster\"],\"genderswap\":[\"Well I guess even my immense wisdom has its limits.\",\"Maybe you should switch up your appearance next time…\",\"►All righty. Maybe I'll do that.\",\"Where were we? Ah yes! @getthisdone\"],\"touche\":[\"…\",\"►…touché, master. @yesmaster\"],\"human\":[\"This… exceeds my expertise. Umm. Where were we. Ah, yes. @yesmaster\"],\"onmyown\":[\"Good luck, fool. @visitedentry !end\"],\"yesmaster\":[\"So, let an old and wise stone tell you: Basic gardening requires water. So…\",\"►Sooo…? @soo\",\"►I think I need a drink… a hard one. @drink\",\"►Wait… I want to talk about something else first. @introduction\"],\"soo\":[\"This is harder than I thought. @rain\"],\"drink\":[\"Me too, although I am hard enough already, hahahahaha. @rain\"],\"rain\":[\"[$ismale]You need some rain of course, you foolish man. Magical rain from the clouds above!\",\"[not $ismale]You need some rain of course, you foolish woman. Magical rain from the clouds above!\",\"You need to grow as person to get access to the cloud world. Not literally, but metaphorically.\",\"Though… literally might also work, but I digress.\",\"As a part of this trial, you have to bring me down to the river and toss me in. !riverzoom\",\"I will grant you incredible strength so you are able to carry me down the mountain.\",\"Beyond the river, you will find the answer to your quest in a sacred cave.\",\"►I am not sure if I really want to touch you… @nottouchyou\",\"►[$ismale]By the power of Grayskull! @lift\",\"►[not $ismale]For the honor of Greyskull! @lift\",\"►Yes, master. @lift\",\"►On second thought, I don't like this… at all.\",\"What a hard disappointment… @visitedentry !end\"],\"nottouchyou\":[\"This is the beauty about power, and now lift me up!\",\"►I… need… to… lift… my… master… @lift\"],\"lift\":[\"You are wooooorthy! @remember !pickupstone !end\"],\"remember\":[\"There you are again, my padawan. @remember !end\"]}");

/***/ }),

/***/ "./assets/dialog/stone2.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/stone2.dialog.json ***!
  \******************************************/
/*! exports provided: entry, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"At last, I can take a bath. @entry!end\"]}");

/***/ }),

/***/ "./assets/dialog/stonedisciple1.dialog.json":
/*!**************************************************!*\
  !*** ./assets/dialog/stonedisciple1.dialog.json ***!
  \**************************************************/
/*! exports provided: entry, no, yes, suspicious, onmyway, visited, introduction, onmyown, explaination, solution, end, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Hello! !set $talkedToStoneDisciple true\",\"I'm a stone monk and student of the wise stone atop the mountain peak.\",\"Are you here to climb the mountain?\",\"►Yes. @yes\",\"►Is there any other way to get up there? @no\"],\"no\":[\"No.\",\"[$ismale]Maybe flying, but you don't look like a bird man or man bird.\",\"[not $ismale]Maybe flying, but you don't look like a bird woman or woman bird.\",\"►Damn… then yes. @yes\"],\"yes\":[\"Good.\",\"In order to get up, just jump up the platforms here…\",\"It's easy. Just jump and that's it.\",\"…pfftttt. !amused\",\"Nothing special to consider.\",\"…hehe! !amused\",\"►Why the suspicious act? @suspicious\",\"►I'm on my way then. @onmyway\"],\"suspicious\":[\"That's part of the fun!\",\"►OK… I'm on my way then. @onmyway\"],\"onmyway\":[\"Pffttttt… !amused\",\"Good luck!@visited !end\"],\"visited\":[\"[not $gotTeleported]Go on, I'll wait here. !end\",\"[$gotTeleported]Welcome back… @introduction !set $talkedToStoneDiscipleAgain true\"],\"introduction\":[\"How far did you get? Pftttt… hihi! !amused\",\"►Not so far according to your reaction.\",\"Yes, very true.\",\"Just say a word if you need help.\",\"►I'm in a hurry, give me something to work with. @explaination\",\"►Riddles are my strong suit. I'll do it myself!\",\"Respectable. Good luck then! @onmyown !end\"],\"onmyown\":[\"How goes the riddling?\",\"►Progress is imminent! I can do this. @onmyown !end\",\"►I could use some help after all.\",\"I thought so! @explaination\"],\"explaination\":[\"This is a magical climbing chamber with unlimited height. !set $mountainRiddleExplained true\",\"We adopted the concept from a fire spitting turtle.\",\"He used it to keep some plumbers out. You can't make this stuff up.\",\"►I really don't care, how can I overcome the trial? @solution\"],\"solution\":[\"You might already have guessed that the distinct gates are the key.\",\"Just go through them in the right order and that's it.\",\"►And you're gonna tell me the order?\",\"No.\",\"Wouldn't be much of a trial I spoiled the solution here and now.\",\"►…\",\"Don't worry. I have a cryptic tip for you!\",\"Listen closely:\",\"The solution is represented outside on the wall to the right…\",\"►That is very specific and not cryptic at all.\",\"…whoops.\",\"I got the wrong tip sheet here.\",\"Well, good luck nontheless.\",\"►I'll try my best. @end !end\"],\"end\":[\"Still not finished?\",\"Remember the tip: The solution is represented outside on the wall to the right.\",\"►Yeah, thanks. @end !end\"]}");

/***/ }),

/***/ "./assets/dialog/stonedisciple2.dialog.json":
/*!**************************************************!*\
  !*** ./assets/dialog/stonedisciple2.dialog.json ***!
  \**************************************************/
/*! exports provided: entry, teaching, easy, struggled, end, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"You did it!\",\"[not $mountainRiddleExplained]And you even did it without my help.\",\"[not $mountainRiddleExplained]You rock!\",\"[not $mountainRiddleExplained]I have nothing left to teach to.\",\"[$mountainRiddleExplained]It was fairly easy with my help, wasn't it?\",\"►[not $mountainRiddleExplained]You didn't really teach me anything. @teaching\",\"►[$mountainRiddleExplained]Yeah. @easy\",\"►[$mountainRiddleExplained]I still struggled. @struggled\"],\"teaching\":[\"Don't be like that…\",\"Bye! @end !end\"],\"easy\":[\"I really should keep track of my tip sheets.\",\"I feel kinda bad for spoiling your fun…\",\"Well, bye! @end !end\"],\"struggled\":[\"What, really?\",\"Maybe I have to revisit the tip sheet for brain dead humans…\",\"Well, bye! @end !end\"],\"end\":[\"Hey again!\",\"You can still use this mountain trial in your free time, if you want. @end !end\"]}");

/***/ }),

/***/ "./assets/dialog/superthrow.dialog.json":
/*!**********************************************!*\
  !*** ./assets/dialog/superthrow.dialog.json ***!
  \**********************************************/
/*! exports provided: entry, sorry, collectible, hey, greetings, bone, throw, who, clouds, down, what, seed, seed2, bye, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"Hey! No touching!\",\"►Woah, sorry. @sorry\",\"►But aren't you collectible? @collectible\"],\"sorry\":[\"No hard feelings.\",\"Just keep your hands where I can see them. @greetings\",\"►Sure don't worry… @greetings\"],\"collectible\":[\"I am, that's why you shouldn't just go around touching me!\",\"You really don't want to own a power-up that hates you!\",\"►I guess… @greetings\"],\"hey\":[\"Hey there! @greetings\"],\"greetings\":[\"Need anything?\",\"►Who are you? @who\",\"►What are you up to? @what\",\"►[not talkedAboutSeed]I have this seed problem… @seed\",\"►[talkedAboutSeed]I still have this seed problem… @seed2\",\"►[$gotBoneQuest]I have this bone problem… @bone\",\"►I'm off… @bye\"],\"bone\":[\"A bone problem…?\",\"►[not gotBoneInfo]Yeah, I need to get a bone through a door\",\"►[gotBoneInfo]How did the trick work again? @throw\",\"Oh… that might be tricky.\",\"As you know, items won't go through doors.\",\"►Is there really nothing I can do?\",\"Well… I'll let you in on a little secret.\",\"Listen closely!\",\"It's not that items can't go through doors.\",\"They just don't want to.\",\"But you can trick them with a precise throw.\",\"►How would that help? @throw\"],\"throw\":[\"It's really easy.\",\"You pretend to go through the door without the item.\",\"Just throw it and enter the door as usual.\",\"The trick is, that you time the throw in a way, that you can still catch it.\",\"Going through a door takes some time after all!\",\"I hope that helps with your bone problem.\",\"►Awesome, I'll try that. !set gotBoneInfo @greetings\"],\"who\":[\"I'm the almighty super throw!\",\"Not that useful, but at least I'm not a dancing power-up.\",\"I live in the clouds with the rest of the family.\",\"►Like, literally in the clouds? @clouds\",\"►Why are you down here? @down\",\"►Back to topic. @greetings\"],\"clouds\":[\"Can you live there any other way?\",\"►Nevermind… @greetings\"],\"down\":[\"I'm excercising my throwing arm…\",\"Also, Dad has company over. I don't like the smell.\",\"►I really don't want any details… @greetings\"],\"what\":[\"I'm throwing stuff up the mountain to excercise.\",\"This is practically the best spot to do so in the entire world.\",\"►Any success?\",\"No, I ran out of stuff pretty quickly.\",\"►Too bad… @greetings\"],\"seed\":[\"What kind of problem?\",\"►I must get the seed up the mountain.\",\"I see. Items really hate going through doors.\",\"You're a human right? Humans can throw by default.\",\"Maybe try throwing the seed up the mountain?\",\"You won't find a better spot than this.\",\"►Good call, I'll try that. @greetings !set talkedAboutSeed true\"],\"seed2\":[\"Really? Still?\",\"Like I said, throw the seed up the mountain whenever possible.\",\"This spot here is a perfect start.\",\"This trick might come in handy later on as well.\",\"►Got it. @greetings\"],\"bye\":[\"See ya! @hey !end\"]}");

/***/ }),

/***/ "./assets/dialog/tree0.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/tree0.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, visited, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"You are the dancing tree,\\nOld and rough. !amused\",\"One hundred and seventeen,\\ndancing tree. !amused\",\"►Hello?\",\"Feel the beat from the tree topsee, oh yeah! !amused\",\"►He seems preoccupied with singing. @visited !end\"],\"visited\":[\"La la la…\",\"►Maybe I should talk to the fire first… @visited !end\"]}");

/***/ }),

/***/ "./assets/dialog/tree1.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/tree1.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, danced, dare, nothelpful, smile, request, prank, wood, sure, pinecones, lovethat, weird, notime, nevermind, definitely, missinggear, cool, reminder, reward, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"You are the dancing tree,\\nOld and rough. !amused !talkedtotree\",\"One hundred and seventeen,\\ndancing tree. !amused\",\"Feel the beat from the tree topsee, oh yeah! !amused\",\"►Hello?\",\"►Wait… what?\",\"You can dance\\nYou can grow. !amused\",\"Having the root of your life. !amused\",\"►Can you hear me?\",\"►What is this?\",\"►I know that song!\",\"Ooh, see that birch\\nWatch that tribe. !amused\",\"Digging the dancing tree. !amused\",\"►Are you done yet?\",\"Rude! !angry\",\"I'll talk to you after you prove you're worthy.\",\"[$ismale]Show me your moves, boy!\",\"[not $ismale]Show me your moves, girl!\",\"Follow the beat! Get ready! @danced !end !dance 1\"],\"danced\":[\"Your little dance amuses me. You're keeping the beat alive! !amused\",\"►Thanks for the compliment! @smile\",\"►There is nothing like putting a smile on a tree's face. How are you? @smile \",\"►How dare you?! @dare\"],\"dare\":[\"Oh you pesky human! Can't even take a compliment! @request !end\"],\"nothelpful\":[\"Oh you gnarly individual. I should have never trusted you in the first place… @request !end\"],\"smile\":[\"You seem like a decent lad! Maybe you can help me out with something.\",\"►Actually, I was about to ask you for something.\",\"Huh? You came here just for me? How nice! @request\"],\"request\":[\"What is it that made you come all this way?\",\"►I'd like to humbly ask you for a piece of your wood. @wood\",\"►I'm gonna cut you down.\",\"You… and what army?! !angry\",\"►Haha, it's just a prank bro! @prank\",\"►You're right, stupid idea. @request\",\"►Maybe we can help each other out.\",\"How? Why are you here?\",\"►I need a piece of you. @wood\"],\"prank\":[\"Go prank somebody else. I'm too old for this. @sure !end\"],\"wood\":[\"Sure sure. I can spare some. If you help me, you shall have your wood.\",\"►Awesome! @sure\",\"►What can I do for you? @sure\"],\"sure\":[\"I'm an old tree. I don't have any children.\",\"My pine cones never amount to anything…\",\"I could really need your help. With procreation.\",\"►I'd love that! @lovethat\",\"►Isn't that a little… weird? @weird\",\"►Oh no! What happens to your pine cones? @pinecones\",\"►Nah I'm not really the helpful kind. @nothelpful\"],\"pinecones\":[\"Well that's a super long story.\",\"But I'll gladly tell you, little one.\",\"►Um, nevermind. @nevermind\",\"►Cool! @cool\"],\"lovethat\":[\"I figured it all out.\",\"The only way I can get a son is if you plant one of my pine cones on the mountain in the west. !mountainzoom\",\"Would you do that for me?\",\"►Definitely! @definitely\",\"►Ain't nobody got time for that! @notime\"],\"weird\":[\"Oh you judgemental humanoid! Show some empathy! @request !end\"],\"notime\":[\"Oh you are not a very helpful life-form! @request !end\"],\"nevermind\":[\"Oh you rude leafless imposter! Won't even listen to my sad, sad story. @request !end\"],\"definitely\":[\"Awesome. @missinggear\"],\"missinggear\":[\"Oh, and I almost forgot!\",\"You will need some special gear to be able to climb that mountain. I hereby grant my personal pair of double jump boots!\",\"►Awesome, thanks! !doublejump\",\"I'll drop the seed for you now. Good luck on your journey! !spawnseed @reminder !end\"],\"cool\":[\"So the thing with pine cones, you see, is they need very special fertile ground to grow.\",\"Have you looked down? The soil here is rubbish. Nothing can grow here. No nutrients!\",\"Which, ironically, is why I'm too weak to throw my pine cones far enough onto better grounds.\",\"A vicious circle of non-procreation!\",\"So I need somebody to carry my pine cone to the best possible place in the area.\",\"I just want my child to have it easier than me, you know?\",\"►Definitely! @lovethat\",\"►Ain't nobody got time for that! @notime\"],\"reminder\":[\"You know, you wanted to help me procreate. Bring my cone to the highest place in this area.\",\"►Got it! @reminder !end\",\"►[not $seedplanted]Sorry, I lost your cone!\",\"►[$seedplanted]I planted the seed. How about the reward? @reward\",\"You did… what? Thank god I have an unlimited supply of them. @reminder !spawnseed !end\"],\"reward\":[\"You will get a reward when my offspring sprouts. That was the deal.\",\"►But... that might take forever!\",\"Ho ho, maybe you can go the extra mile and make the little cone grow faster?\",\"►I'll try... There might be some trick to it. !end @reminder\"]}");

/***/ }),

/***/ "./assets/dialog/tree2.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/tree2.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, alive, barelyalive, spoiled, returning, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"How did you fare?\",\"►There was a suspiciously convenient patch of soil at the top of the mountain.\",\"The sacred garden, yes. How about my seed?\",\"►He is alive and well. @alive\",\"►He is alive… for now. @barelyalive\",\"►He is alive but you might want to check if your seeds are not spoiled. @spoiled\"],\"alive\":[\"This is good news. This deed will not be forgotten.\",\"As promised, you may have a piece of my crusty bark.\",\"►Thanks! @returning !spawnwood !end\"],\"barelyalive\":[\"Trees are sturdy creatures. He will make me proud, I'm sure of it!\",\"►If you say so…\",\"Yes, yes… where were we? Ah yes, as promised, you may have a piece of my crusty bark.\",\"►Thanks! @returning !spawnwood !end\"],\"spoiled\":[\"Oh dear… what did he say? Was he making strange frog related puns?\",\"►That's a very specific… but no.\",\"Well, don't mind him then. It's just a phase, he will grow out of it.\",\"As promised, you may have a piece of my crusty bark.\",\"►Thanks! @returning !spawnwood !end\"],\"returning\":[\"Greetings, friend!\",\"►See you around! @returning !end\",\"►Sorry, I lost the wood you gave me earlier!\",\"You do this on purpose, right? Wood is not growing on trees! @returning !spawnwood !end\"]}");

/***/ }),

/***/ "./assets/dialog/window.dialog.json":
/*!******************************************!*\
  !*** ./assets/dialog/window.dialog.json ***!
  \******************************************/
/*! exports provided: entry, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"(The blinds on this window are only half closed.)\",\"(It is possible to take a look through the window.)\",\"►Take a look !end @entry !lookThroughWindow\",\"►Step back !end @entry\"]}");

/***/ }),

/***/ "./assets/dialog/wing1.dialog.json":
/*!*****************************************!*\
  !*** ./assets/dialog/wing1.dialog.json ***!
  \*****************************************/
/*! exports provided: entry, dontcallmethat, looking, jumping, noflying, pickup, seed, water, annoy, deal, giveaway, takecare, use, grown, sarcastic, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"entry\":[\"[visited]You again… Breaking into my home.\",\"[not visited]Who are you? Why are you breaking into my house…?\",\"►[not visited]I was just looking around. @looking\",\"►You… look like a flying ability power-up. @pickup\",\"►[$seedplanted]Do you know anything about growing seeds? @seed\",\"►[$seedgrown]I did it, the seed has grown. @grown\",\"►[not visited]What a strange person…\",\"►[visited]Bye power-up. @dontcallmethat\",\"Whatever. @entry !end\"],\"dontcallmethat\":[\"Don't call me that! @entry !end\"],\"looking\":[\"And you think this is an accepted behaviour?\",\"Nevermind, it's apparent what your standards are.\",\"How did you get up here in the first place?\",\"►Via jumping. @jumping\"],\"jumping\":[\"Aw man, another one of the multi-jump gang. Flying is better and you know it. !set visited\",\"►There was no flying ability available. @noflying\",\"►I like the multi-jump.\",\"Yeah, you look like someone who would. @entry\"],\"noflying\":[\"That's because I'm up here and don't let strangers touch me. That includes you! @entry !end\"],\"pickup\":[\"[$ismale]And you look like generic action guy.\",\"[not $ismale]And you look like a random japanese school girl.\",\"Go be generic somewhere else, it's unbearable. !set visited\",\"►Don't change the subject. You're even glowing.\",\"►Ouch! The truth hurts. @entry\",\"Yeah, so? That's none of your business and as if you needed a flying ability in the first place!\",\"I bet you got one of those multi-jump things! Even birds are falling for this scam nowadays.\",\"►Guilty as charged.\",\"I guessed so. @entry\"],\"seed\":[\"[not deal]Seeds? What is there to know? That's basic gardening. !set visited\",\"[not deal]Just put the thing in dirt and pour some liquids over it.\",\"►[not deal]I don't have any water.\",\"[not deal]Well, that's too bad. But not really my problem, is it?\",\"►[not deal]Then I will annoy you until it rains naturally. @annoy\",\"[not deal]Don't you have some water? @water\",\"[not $seedgrown]Seriously? I already gave you my stupid son and an instruction on how to get the water.\",\"►[not $seedgrown]Sorry, can you repeat it?\",\"[not $seedgrown]Wow… stand on top of the grey cloud next to my house.\",\"[not $seedgrown]It's very very simple. There shouldn't be any reason for me to repeat this.\",\"[not $seedgrown]Go away please!\",\"►[not $seedgrown]OK… !end @entry\",\"That's a trick question! I know that you already grew the seed.\",\"You really can't hold your side of our deal, can you?\",\"►Sorry, I just like being around you.\",\"Leave before I call the cops on you.\",\"►I'm on my way! !end @entry\"],\"water\":[\"Look around you! I'm living in the clouds.\",\"When I get thirsty, I just put my face in through my living room wall and breathe in.\",\"►Then I will annoy you until it rains naturally. @annoy\"],\"annoy\":[\"Company of a human is the last thing I need right now.\",\"OK, let's strike a deal.\",\"I get you your water and you leave me alone forever.\",\"How does that sound?\",\"►Best deal ever made. @deal\",\"►I might still send you emails in secret.\",\"Joke's on you, I forgot my email password a long time ago! @deal\",\"►OK OK, the deal is great. @deal\"],\"deal\":[\"So, listen closely. You can get water out of the darker clouds.\",\"Since waiting is not an option, there is the possibility of rain dancing.\",\"I think one of my children holds this kind of useless power.\",\"Let's see…\",\"…\",\"Yeah… Dave! That little misfit is nothing but trouble.\",\"You can have him.\",\"►Are you really just giving away your child? @giveaway\",\"►Thanks. I will take care of him. @takecare\"],\"giveaway\":[\"Don't worry. I have plenty more where this one comes from.\",\"Also, this might be the only opportunity for him to actually be of any importance.\",\"Plus, you have no idea how annoying he can be.\",\"So, win-win I guess? !learnraindance @use\"],\"takecare\":[\"Whatever. Just don't bring him back! !learnraindance @use\"],\"use\":[\"Where was I? Ah…\",\"Using the power is easy: Stand on top of the cloud and Dave should give you a hint on what to do.\",\"►I'm on my way then!\",\"Close the door on your way out. !end !set deal true @entry\"],\"grown\":[\"What a great achievement. I'm so proud of you. !set visited\",\"►Thanks!\",\"►Are you being sarcastic? @sarcastic\",\"That was sarcasm. I couldn't care less. @entry\"],\"sarcastic\":[\"Oh no, I have been found out!\",\"►Shame on you!\",\"I couldn't care less. @entry\"]}");

/***/ }),

/***/ "./assets/maps/level.json":
/*!********************************!*\
  !*** ./assets/maps/level.json ***!
  \********************************/
/*! exports provided: compressionlevel, editorsettings, height, infinite, layers, nextlayerid, nextobjectid, orientation, renderorder, tiledversion, tileheight, tilesets, tilewidth, type, version, width, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"compressionlevel\":0,\"editorsettings\":{\"export\":{\"target\":\".\"}},\"height\":109,\"infinite\":false,\"layers\":[{\"compression\":\"zlib\",\"data\":\"eAHtXbvSLDcRXv9UgbEJgCIwOGC5PgMG7ASeANuQQNVJiKB4BNcJ4AEIyblUUbwCtgkMGUTYxoENGSRcAy7Job/d+fb036uWNLuaHc1Mq6r/llpSt/Tpm57Z+W+7XZRA4AYIPLHbPSGym1rfYCsRYoMIkLd26559GPdx6f+EyNTaLivagcBoBMjlQd+JfgQnxn7WTgUqzKn2XfCTCh22QGAMAjY3Pyuce0bE2tkG/x+QlyYQx3i65NubZ+0mbDQDgfEIkMODLuVk9IP3eJ45K4OPs3vDYC/59uad2c8ChyEQGIeAzaWlnIx+j/fWl22XfNvxXnvcDmN0IJBAwOToUk5eYr5/8W63o7wk9SiBgM2ppZy8xHxPzkMH79tz/g1x+WuR37R3PZnHVyTfvx/eK5/Bke/xjn7s8z1CYK4tF73vt04K7eB9AaAru9+V+e+J/PFKP7eeDt4z79fk+yTnlQ/60hp7gm9bLnnfb32U2sH7EkKX9/9Jpv5b5D8i/73czawzkfspFy1E5nv5G/5Onx2Uc2981q7mR3VeBP4n4T8s5/4RkY+KbLHo/J7K4/peQnxS40p+ODd0INAFApl8j/x9yvccJ4vO5nWOs7qLzcYiAoEjAqU8rfP9JXme/gPvQOAaBHSuBSf5cznaJ75HRbsej/c/Z8XmZdM+y/emn++UivoscBgCgUoEhHM65+pcDA9og/MQ7+d1bCTmY0/rGDq2N96z27jRDgRqEQCndP62uRht8t7L94f5OqDxafO2jWH7q9s6ZtQDgTEICEd1zrW5uCbfY74uXn6m3cagfazWMaMeCIxBAFyLfD8GsRi7FgQi36/lJGMfoxEY8r599o7n+9FIxoQFIcBna/vsHc/3CzrEWOpVCOj3Njrfn7238aKYzwz2/Yy9p9j+6rYXP+yBwAUI6Pf0Ot8/MO9tPNe8d3ja3lO8cSW7Fz/sgcAsCBTyfXU+L/mZZXPbCvoX2S4kShmBUp5u1V9eSYy4FoHfigPw/nfXOor5gcCCEAjeL+iwYqnNENgK738viGmxAOo+1u2YaAcCS0KAPLaae7B2ttkfOhBYGgLk8CXa7jX+RodFJNq9InAJ3zlH7yn+No1GY9l1Ptuv+T0mOXyJ1qc7J+8/KQvB30KxotcX9XoENO/1e/w1XQeX8J1zNJK98V6vLerjEEjxnvxfy/t8cBiFXB6jjzOPX4P3Go1l14P3/vVgTzZ4bxFZbnsLvOfp1OT5H3Fw5/rw9z47X2PPy9sS7/U56GcfbV9KnZ9vl7Le3ta5Vd73dg5j1xO8LyOWezcTvC/j1+OI4L1/KpbT/sjjz2PyPQ71Wt7n5Pa91L7gvX9ylvfgs+UyxvxZhFzX2o71I0XPrRHweI93Tlsvwfv1MkDzHnXwfc73rD0hHbx3TqP0O37sd6b3YA7e+6cQvE9jU/u7gOnZfVjBe5bI90TiqIP39/E4tZjPS/o0ob9K8N4/k+B9Gptr8r1+vkh7v41V815HjM+1u13wXjNC1W2eV125KjkPvc8NvEGfx/sbhO4+RPA+fUQ236dH3bdqzgfv72PTWyt4P5yIze+2XXFwwfsKkDoZAt6XCsas/ftWNr/bdgkj9PfEe66lZt0xJo0Avj+7dt4X/3ZfGpp7VnKNen+v97YNruG2UZcdTf8cAneS+nkEjEvZOWdJ2uZ3267ZC7lGXTNnqjE9rGGqvU3hV3OedS8O+61ey7Xg7duzk2vU3jj8/vfe62xkL62hUZhVuLH8zbXBba8/eP/4WT9FjOB9CpV5bB6HPbv3vI/x5D3fFbE9z85uF5U5VutU9Kl5X4qfWtNctlcl8GsirzdcwA/lXZz3ee3b6BsK+elxPGXfBO+Hd5nYf03RfGM9NW9q3sN/Ln5qTXPY3pSgb4m8LfIHkXdEWpSfy7nZz2dsvxK8fwzxwG+bI1LXu2eDM3JN68dBHteu4T3mlsoSeP9X2cTfRP4u8g+Rf4r8S6RFaZ3vsSYv92k+8LmG9xG2W+xpCh/MBVbrPdn6d2Qh3x3wICaa77au130t77XvvTi2/pbA+w9IrnlS5IMiT4k8LfIhkRalRb5vsY7ufQje+n8367xv+c7292VTPxBhm3vUnGR9z85BW56a7mxTcxr+9yLWnx6TdTZj514w/5TIp0U+I/JZkc+JfF7k2nJtvr82/lLm2zyv2+S1/t/Ouh92Xch1rfd6gNQtT013tqk5vWTePye4fVHkSyJfFnle5AWRFmVMvrfxcN5bLeQs8j55j/sB7FHaIPA1wfNFkZdEXhb5usg3RJoV8ZW8hzcLsD5H5H2tXh8Cy9+RvSezvfydtdtBLb+9ce1WEp6aIdA63+NeZH02W+w8jjw+19rnWXVEzSHA/G51bk6uD34eKLGf63Jze+2r5bc3rtd9bXpdNjc77TuxPxKgqL2cjn7Ne8xZevH4XGtf+v7XuH6b5732s8LnZ0So7Thgg8/H6Ne8R33ppZbf3ril73+V6xdeJt/nGDvzPPVZvh/GJ/M9fS0UQI/PtfaFbnvVy7Z522szz1Pnxul8j3sExy4VyFp+e+OWuu/e1/30iAU+L2Nf0OOZiwuaeZ76knzPe4EOzzruOfpnQGnvQXt8rrX3sIe1rIHfj752P8zFJc08T+2NR7+X79mXWjPe++ifAU2NmctWy29v3FzrXmPcVrw/YePk+8OzvwxiLpZhSPUHOc1FZZjPnE7uH97nJPq0nXMZ457fDhoen2vtHWzh4iV8TM4O0ksh76FrCs4oV7z8zffvOhcDBg0F6pzPnE7e6+d73aftnKtj5NZ6675afnvjbr3eS+Lp88R8njF0j7y3fLZtiwGukz2Nsinmc5paaeB1KkMcfS/oPd/rs/b4XGs/4dBrhTzwdEfrZr7X2O8r1neP9zKe+Tw5lTgkO/NGmXoqzOdLyvdb4j3Px9Ong+yg0or32XxP3huNvH2YZ3UHuLT6jLAl3uOhJnmeg70VppfQAzzXpRXvc/neu/513uZz/CO9uDnrDc4KnN8S771zpn3Oz12a56DVcyL6GQf1vUipwM8+MSj3u1c2H+jndPIen1NvWfTvzOi4Lc5qa7y352vbc+d7zfPWvAePkMdT71nIJeoe8v2961QTX/aAe/Y1Z7U13vNcPd1Lvgf/Ne+/MLT3+vydei7fI48fnlcG7tjrnm0v39fOpx/qEkf1vY57nDLfA7otPeccqDKcObgl1YMwzx76Z/qiz34K3rfI97X3C5tXSvlE730/4D9lvkeIrfGeZ7I13oNHtfl66fme+Syl+YyzJd4DB957e+M9lmZLzX3IjkHu3FtH0r4m3zNX9Jrv9f0CW0/xnbat8p5nSN7r6yBBl8P9UGNl65jzcgOBH55NjU6Nh00X7hU2+GS+T/ofjPjMaPP9YbJy/EDGZN/vSL9+Xzzm+Z5hxjzfB++JWlrjaHGG+kzIBdpxPaBYfnttjP1eA4EfrK+lcE/0yXzNttZ4z8/rxL7PgV2PtXXOgx2FberS8/1x1v2vHt6wl4pdn25rv/TDe+almn561dg/z4KaXGDb27vGS9ex1955T/7zGqcmH9hPbfM9x5X02bnLBPvOEW2N3xT13Dp1PK7XO/NaO/30qoEHz5aaHGCb2u4ZUzVmrMPeK+95LVPzGqcmP9hPbfM9x9VqYIJCfzrf475C7KbSuXXqmMdVnn9/0J6918Z89PVegAfPgpocYJva2yvsFrteec9rmJrXODXtVl+a71N805wAbigavynqqXXQpuMdV3M578kR+ulVH2CXL7nne3KAe0ppi10L3vNcWmpew9S8xqlptxr9+nn/2jWRD/CjsZuqnluvjsl1pc54jI1+etXAI3XGqe/d1+wbGKL0ynt7/szz1LzGS9r6uaateTdVPbc+HfN4epHviQPuB7fmPWLnzqtFH/M8tc0BXrtFbPrQvJuqzlgprWPyvHnWX7nb7b4qwnatpp9eNXCwZ+txoGbPwBClRb6Hn9Q5TWFjvp/Cd8mn5t1U9dwadExgjsKz/qZw/lsr5b2HCfaOAg1siEVOYxzK0njPa93DYkq75t1U9dz6dczj6a3/aw4P9LEAmxzf2YdxKC14X1rbmvo196ao57DS8Y6nt/6vOTzQxwJswG1q2Ml1q9HXgvfwU1rfGvo176aq53DSMYH5FsqT75P/oRYSGEzEgV6voeB8XPdTciB4H/yakl+9+g7eB+975eaU6+qV97GuQGCLCPxUviexRfmZ7PsnIj++2z38lehakfGHeZirpYQhxjJmaWyr/jli6rX3fD29JuexRfmF7PuXIq8bedW0bT/adgzaJQwxBjExvzS2Vf8cMfXae+b9m3IOW5Q3zL7fkrYWYPL2ccxD2NEe9EPYUR/6qQ92D0uMRUz68sa1tCOW3WdL/yVfPfN+LWsrnUH03z6/9cytKT/Lh+94h9Ur94Obwc0pORC8D35Nya9efQfvg/e9cnPKdfXK+/8DCiNATA==\",\"encoding\":\"base64\",\"height\":109,\"id\":4,\"name\":\"background\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":190,\"x\":0,\"y\":0},{\"compression\":\"zlib\",\"data\":\"eAHtXVmvFUUQPtdXFXDhH6gIqP9AuODVRxKfVFB8g0SNGyq+cRI1bnAv+Oyu7AJqYtxQVvfEuMQXorJEAZf4AFFBI/gVnEqKvj37nHN6er5O6nZ3dXV31dc1PT3dc+Z2OgxEgAgQASJABIgAESACRIAICALrRjqd9aANoDJB6iq5bcw/r9PZgfJdJdsuow/rEIEkBFYbPxS/FL/dB5ow/KS6Ll99XmLX7xfB7xmIQCgIbHT8W3x/J6jMvKx+f7xE/eWOHqHgQz2IQBYCcr2UvWbsfSerH5YTgZARuKKn3AWIZ/TSUxIUpt8nAEN2XxAQn9RQda0xVRsqEdPvS4DGKrUgMEzfc58zajGIjRCBABEY63S6AapFlYgAESACRKAiAlWfHyp2z+pEoO8I+PZthvn80HeD2QERSECAfp8ADNlDQSDLH+UM9xhIzmOrhKx+qrTNukSgKAJ59hD1/YWibVv5PP1YeaaJQMwIcD8z5tEN27bpA1AP/s1ABKJDQNZCZd7j9AHBZwEfKuTFjgCfBWIf4cHbZ99FS+r9wqSCDP4SzPlLK+z7VK2foR6LiUDtCMh7xyvg813QdZ7Wk643+56y1p/lqU8WESACRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJEgAgQASJABIgAESACzUdgM84TXwNtAW0FMRCB2BHYAz/fC/oI9DHoE5AbfsrxfQvIMBCBxiDwPfz8B9CPoP2gAyA3nHIZnvx/Hl6TWN81SVnqWhmBP+Hnf4H+Bp0AnQRlBZn/Y5vf6fdZox5X+RR8h30qaBroItDFoKwg83/T5/csG1keNwIz4OdXgmaCZoFmgxiIABEgAkSACBABIhADAnn2KGOwkzYQAYsAnk+7Ns80EWgbApz72zbitFcQyHM+1TakRj37W6tynHG0Dacm2zsH4zkXNAqalzG2sZ1bFRm3HRnYFGmLssNH4CaM582gW0ALM8Y29nOrMfPcsxhDc7sZHt+37E0xkw1D4F74+n2g+0HLMvy+YaZRXSKQiMCT8PWnQE+DVrbc7/k/eBLdJLqCl+Hrr4BeBa1tud/zO6zRufckgw6OnN3Dfx++vh30AehD+v0knMggArEjEPN8v8Dszc5s+fyWx49xXzgnvIn7xBug10HbevcMFViIxCLQraDblNmgmN/dbtBg1aSqnNsKZTX3BXz9c9BnoE8dv1+Gyg+AHgQ9lNVQQOXXQ5cbAtKHqgwOAZzbdqu+t7MS6q4CjYMmBqc6eyICtSGAuX9S8PGs0Fpk1oHWgzbYAqaJQEMQ8L234+M1xByq2SIE3PV61nzdImhoaoQIbOjtwciaXd6n0v+vV/X9mo3AalOEeNGk5iOwDn6ufj8Ma6ah092gPcPonH22CgH7DGnn91aBQGNbh8AuWDwXNNqzXP6nni9c7jBXI7/G4TFLBIgAESACzUFgHGv8CRADEWgTAuvNs23S/wluEx60NT4ExjwmWb/3FJPVIgS2t8hW+n2LBttj6o1mjdumbz5bv/fdDzxQkRURAnfA7+8E3QX6IyK7skwRv9cz2jTZ+ea3CPOQxndjumnyVcpw/fWt7TJ6LQBGGjStsfA1rbHlab1Q40dg26Ogx4yNoepap17HPfaKT8O3u7afRcbvLR+yZ4Lv90duG7Ye02Eg8CzG/zmPD4Sh3XC0KPLNgLTfH/muieFYxF5dBN6Czx/Fb4KOgA6DfnZ+H+TKx5KfmmJIXf6ap53Q1jYpsERV9CX8fkTu7aDT8PlTLfH7tEHM8tfFqCzfCZuR1gjKstrJqJ6r+HmM3wugF0EvgcoEXHve4Fu35+V5GyQzOASWQ6OHa9bKtwaSZ2MJ9nn5LKfc37fh6++A3gW9V9LvtefzNcGYCASOwFfw9a9B34C+rej3gZvaavXkW9OyB9nUsAS6L+3pr98oKPuexCG08wvoV9BvoN9BDHEiIL8ZEb8XKvPbEd1/HBQ67vPzCujdBTUh5F3L++SaYF+TdKzq96Hbyv2dwY5Q78zmnE5DPH+R30odA8m5U57z1nMMQiZp78KV0+dOeQ5192UEK1d+2HnVd9h6sP96EJD53Q3i+2V83m0nLW/PaV2/13p5ryGV72ds9e1nPzG1HfLvL3RdU2YtnzZG7r0sbd3v249MaluuEaUkGcsvc+9w/49Uv8bPt27Py7M2hpqu26fqtFP8vuyapk490trqrRG7KuPeH2QN4l5nKlsmdu+BIY9fGfsGVacsbninoXMYdAR0FNSPMIg1jepd5L0creOLXb+3MnJfwXXQtbyiacHEhn6v+WxfMaXL+j3eaeicljHAWI6AJFyW8C6tnAUmlZ2pWODPtZCdU0A+r6j4a9m9dNtH1roIa/Gule9Xuk7M+6XjMNvdh/EeF/+NOOCMp9sv8/T8Sd/b6Vc/0u4SjJOee2k/Pp6WZcVXpwjkXcv75FKaDaZIz4GCUahliuA+mDusgN+7516Wl3ZPvSp3L/ELyjOj0E5Q0XBN0Qol5e14aZ/uPKX8kl14q40lrNm8wgWYdT1HFOhykujsSZz2Mdz1vew9FD0Hcf0wNBRD0i/tuXdYuLXxOpD53g2hnYNcCgXtvO/q65blnf99++eyTyjPO/3aF3d1rzvvYqHt+6796VroiX3r9rw8T3ONY8neG+75wYW8vu1TPG3PRfxennnkeT903/f5ss9e8iYjYNexab7kuxfKPBxLkPWdXOOyPy7vAInvu2vAkG31zfO8LkIesXTdioydb+y19SLt6Jwfgt+7eqetTdTWtNg3f4l82pyX1p4tuxtzxT2gpoQ6bB6WrVX9wNV7Chjq924Z8+kIPA6ff6JBfp80B6RbOZxSuUabfJ0WRS2vrXnlivZPeSKQB4Gqzzxpa7U8/VOmPAKhz//umre8pXHUzHutuGtC3iPCHv9LalbPHf+am2dzRIAIEAEiQASIABEgAkSACBABIkAEiAARIAJ9RmAN3st5pvdbSemq7rxP/br7cNsbRp95dPDpNWjeZoy1jzYl8FV2o6dc62isskVjra9xVn2V01jlVUfhC9n8NuRt2I/8gR7vIOJDvbTl27StK2lfH6KH9CllErb2YtXPxiJj85L28VwZm9e+tJ70ucXpU8u0nuRdnq9vldHY1te0G0v/oYa9sNtHexL4KrvbU651NFbZorHW1zirvspprPKqo/CFbF7HYxz8CbyHeQLxSZCEfxD/20srHzIdTZ+V6nRW9WTQRtfXh+ghfUqZDaqfjUXG5iXt47kyNq99aT1fn1qm9STv8nx9q4zGtr6m3dj2zzQRIAJEgAgQASJABIgAESACRIAIEAEiUB8C/wOkAQzq\",\"encoding\":\"base64\",\"height\":109,\"id\":6,\"name\":\"decoration\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":190,\"x\":0,\"y\":0},{\"compression\":\"zlib\",\"data\":\"eAHtXU3TbUdVfvOllgoOUG4CSajcOxAGWGAgqQIG3lQZPsoE9QeQ8yZvFSroVKK55UnQP2AJiYiQOaCUWsWHE6bqSEAHAiMKBoTwoVMHPs/reW49d93VvXvvs/c5+5yzu2rd/tirV3evfnr16t77PfdHd5yd/cjox0i/erbQSenA5n+FdKSLpCzyZPmh9TJZrWWAblNwzDNN3P/MQielg1cx38IB8XXjjrN1F2bBcwaedSseJY+yW+sM4WsCPZg0XsXE/ZsWOikdRNyX8PYJ4OLZAv0VylWPa0LpGNdkZLJdrmRl601tboP7B9DvL0DA50FM310gPsvoQZTfb89cVsZfku/lXs/lOY/S4lU+xnq+Tewyoxx/5unI15X3ukPTXW3weQn3EaPPgLcUnsazDKPCquLzioxMdpR7A/UlK4szGVmZ7Lxi2nuFHyDxQ9BfgqLe7zE+8bfGkrtChXNQlB3ztbbuQj+c33m7+q1+tPabfKqjdc01HkPW7iciE/IrEMf/9Camrj1kcnysxKznYzpr0+UrneGemK/hXHU9FkYvKr5MX9xTvuRmOI9l3p9aWnhXfO3Os7OfbuaSc8t5/RwEyPbLlmu+iQPO2zO1RsIzyX0W5XGumHd7zrn1tiI2HH+Sq+ZK8tXfyK96tbiljuuL/ed4/i4RGvvna5bsUQ5liaQTjV/lir3NFWSdg14BUX+cM6alB8f9DbRBLA3BJ0RWMUrZU8h17LMPLYF4j/vZzwH7rUE26bnWCsYXbTUxH+fe2C99J823l5fS6lu2tob0t9TO0PLYv1b73Le9uL5cH9SD414YGopP9u0pzKPkxHgbubL7WD/rKFf5Vt0Q99v0RTapDx7VtzjvjvsVmM5BtEmMo51HUWdQ33yelZ4KY52dMgb1jzba7bOxjJLM9Ox6mAr32juEScbbYI3KEPZd5gXkKt+qsG1x39pOxqd555rRfq31E21UbR/IZLNsBToHaY49lr2Xvz7EX4PogwjSM9cXSfrWWou4B17Xz4HvvRt6H+IsvN94xMv4T0HCYYwz3D9ekPMBlGehtp9k/FnZPnGf9Udl0UYNsc9x7TjutY6ir6X1oH6cQhxxH7HKNRCxT8zX8B1lKJ/JijjmuiM/eTPsR37JZtwa5op7t1GyS61jEl9cO457rSPinmtA+Nd6kIxS/C08+LbRd0qMHeUrPD8HvQIa4suh2tahhPsL86Pd/nfZdOIP2G22+R8Dr+7u411otj+Mhfs4pv9EP/qEFZjPQX5XwHnUXO7Lh/C1w/1d5Ovo8+in9n0+l5+F4stQ6vtrwPtao19COoYVCs5B0oXHukvxPUlrMcrx/AoZyXR9S57ztqYd98B6Ea9uV7uwHXmZ1zrKsKy+Rv894x0L97T5ovfgLufnQX2Cz53b1Jjehw+xwkCIE+KCcV+behd0w3EM6XuXXijzfsjmevO1iOJiqMkc0kc25LjP8Dp2GbH8ZrT7lsIoHftduL8BWd6/gsjbioV3xR8F5v8woT+qrAVhI+I85ulDlOznbR0bqSDipNWPUfPCZdwH9LwWq672Gcauk9iXFYSdg7QvaK0qz9jrx7Tktej4D2yOP4K05t8xNFWaWL6OsTwGKgXadGB63YX72MeSvFiu8Som7h3jK1QYMhecY9ow+hGad2JHa4S2aQWi7L42GFWaQ/TxW3yJZuEDGDV+YlY4lZi4RiOuVcdlOI/kacyt9j+z9/GdTvS/S8+d7wJjjLhkPvrVtbNrtjdM4ef4dwqcjyFzIf1rPj2WDeQakGzy00bJrj2NdJ/3vy4/pj+HAq29Vl8iyhgzL0wSr3ENSjeyE47pLK1x6Znkacyte1TEfe0bBWEus8OuJ/FluPeyLpue7Q2SfWHnbsn0PtTSsvOKr8He6zsF1otzoTnxmPoln+y79L1C/XMQ8ZzZdNkt4l5pzWHcD7QuuCYok/JK+/kq4fF+lOqh2uRBmGxZg9JJph+3LdJ99i1Ey4Ai7muYFuZqPGxTfMJjjB2zmSzVfw7Y4P2R36PqWZTJfGsQ3j2ONr9VVuSTPSeWZYuch/PFZ5pXxSrz+iwrUdzPh9bzvs0h7XtDHHumz6F93gfuHbM13IvPeabG/QqKPAeV7HWXnolr7gs12yZbxT1b+wbrMF2bd8eB2z72aWi9rvHs+rn2Bt9bu/TZ0scVmM5BmtcM91/H82+AvgnyQMzV/CDxZti82NTVGUDxMyiPQfVZh9h33Pt9P2X4nX+UU8q7nVda9t7t5pj2hX1Zgc5B7rcge0vQvDvGs3Ts29B6tzR+xBmfV+rTcX8DPrN8C317EH0MxyDVxO8MyPOkkXAre6041i2pOdav1XPekrxYLqx7LNy32OsorzUfdR9ttstx+91q++jDZ2tE9Wt7kLd9jGnNq3ThuBc+PXbMEWOep35KZS5D6Vi3pF/KxBq8eR9Uqzc27kt9GqPcsUx8Rpvtbch+t56XWZdzS376T/G87bKX9K32Xvj0mJiTLaeP8ScgBdp6fqcTcRlxK3mRT3IY+7ssxzLr1uo5r8urpd3OKy17X6u37TNhmTanr+31vSLuE/u8q9lWJ/uq38fexz4Kc9E3Kn2zVsPvdQh/bNOA5LasF/Jib1iTtzUI6x7vAvet/cv4tE9zn4i4vwtlLI93PJmcbcu+AgFfBf3ztoL2XH8M3AufXXFcHzpDxDium1o9521VpeNd6bnjXmMjxku4l08k3jHjeyHsPtCLoDXob0BXQCw/hODfKPCblNJ3ChcbG9qKOce87K+XDUmjDzd9/K76PA+0BmHd40PGPfeCKTHvev0iMl8G9P/BCw8w7fa+L866sFh7TpzWng951qp+x7vSh4L7XWI80+e/oPBfQf+WPTygMsf9EKzV6hBTxNOr0EdG/htlbwIffdQHjJgn8Zl4MzmlsofR7v0JCeseHwruDwhas+6q497xI5wp9mdMq5yYjMRn5BGuiCnxx1h1iW/e633StOX3fo79KKOUX3Bvypw4+WeQv97Q8xO3NYb4DPfCkTBZwhzLMxstfse9y/K0bPoXMBh+Y/T3Nijd+4nH67WkF9ybMrdI6iy7howSvYRnf72h7yKeeyjhnrhyTDMdscay+O6F9w3k49px3Au7WRzvJ6LOaPfl/2T1S2UL7qMm++U/A/bPgniWFaY9/vdQ/iUsC5x5z3jmZb2XQXMNNdw7HnmeEvYUy0b72Eq4V50s7nMX4b5PhneXv+DeZ2Z4WrjnPY7jvpQm7uceWnHfNY5fwJ3oL4Ic9+9C/mdBfX6LrKsd+T6Ob6Xj+llw36XNtue6w/lbsMOm32b7YfdvWQ+Hjnva0+xvJzJt8V35KyDWkZ+z7zuS30J/ngj0buTlfyke8nflEHNy4XsYMe8wSVwDmb3/NMoP4Y4z2nudaYlf2tFoQzGsNMgPmhPus45yDxDeFe97fWb9nHsZ14BwT59e6e/PveOb/mW4p712377PUNzPmSOeFtz3mc06r9t/7gGHgnmOalvcy6+nLPo6uvPhvvEQfPv/QNz3N5koa6qw4H4qzR6W3BLu5a8wpt9eI/KI5Nv7e6v4Ox270tAb0NBdG3oQ8VXQgnsoYQbhw3vuQ4Z7+fiy3S2x6jAm5h33+/J3dK7lWfadGz0vuM8Bl72b4jeXU4Xfm0pwo9yIe2HWcdySVj2PdW7U75H5bzNl3fO/PcmeDy17ARUX3Ne1xzv6eEe57X0kbfqVQrNzxb3jd2hauG+199eho8cKetq2+B4IKPk58fdztm3rEOvrjp73MrqPj7jnntBnD6hh+4N7VpLb+9q3lUOeCfdduLoXOrgPRH+cfvgUgbhnyPwc9rN1bf6/lOP9V/eT+t7AR8o9Ia4Ffx7TNdxH3l3np8S9zpSKiemaL0N//MmJFLDgvl2xsv3x/RPXRHZXWTqjHjLub8AWyta3/C4meS82deK37/Sxr4Om8mV8Zrl/oBs3A3Ff8nMWe39TTYMSJXzv25epDabV3g/5vaiI+0fQEdr+MX0Z+UbZ+ekdNvDF3psyRk7OGd+lobbivvZbCJL91MbOa3+IuFdedyuqt03c4hs9hAYW3G+j5eOrW8I9fJXL3+YQhsfGPX0O0rUdqXTxc3ak6ANppoR74V1xxP3jsO1dv/8h++7xu6CXqc6uJZXTz2+x978KxjeTeQlHr4GhuI8+jdaHx8T4E4F2hXn5/bwjpZ/fhXu9W+Nvq3S9X4O4JRyQBuJv59R+P8fxy/sZt/e8KxHudXcjfr//GdOPb1Gzm+ro9y9+TosGT4OH6yD+bhRwu87uK/13Makd4V54z+Jd497vb3wGfx8Z9eXU31v57x6soZc+9Dz4jyVkfo7b9tI454j7Ul+J9Y9vHp4y7on5l0D8FmEIfQr1jgX72+Cee0Nm51UmGwt1TRbctyk1It+ez0u4d//e/0/PY/D1+V3NGhQx/6Xwd7FcC/w+QWvi00j73xWC/4zYXwfq880Oqu49/ASguQpfR9/RCK9d9v79qOe/x6p6HtPPJ+55V0niOVPvrOI7Jp1BwdI7OKZLlcXDbyQy3B/739fq9xCE5w2+1573dPZd2vegO/1Nra8N/pYIv9nh74ZEehllcwxu64l94fY5pOMdpeczzMf7fspye0+88T7Ty6STeAZVeUssTJMXTaZBPNfxNMP9sX+TluHecZ6laefj9zn6bkd7gOLIl07CTAqjrSfu/S5Ga0Bx7Zl4YuwYr+F+G5UQ0/ruoXSuFe65rzwK0v6m+FRwTz8lwzhttpdn356BZXD4DGpyL3h5sIRxKmaYd3sf8Ts0736O4/7ucYZxKYVyfX1F0XDjbt7dc1/h314J74qjb38MPr3rgfZe2JaNLsUtmP8I5H3UGziQ9Fth21+fEPFNu/42gIXr3+2D9OZnnZLu6AfSB3Q8Cvf0dR4AyUYjuVVw3MdzAvNvBOkuhw2RX3hXfOz2Xv5JC6apo67w52D4iy6mGT53DBKHItl14d73PqaJ+RbdyZ8s4Z7t+TNkBwfacK4jnpnpw7hcjtMxj+xJ4p7j3jbwDnTdQM9v29CE9R+APb8voYh7P7cT961/a0Pcc68gBq9uiPj0bxbG/F7BZVMu27wGyvz9zN53/T0YRJ10IOZfAkU7yLz7BMx/CrSu0D7vPPXOqXRWdXsP/2at8fbBPeu47UW2OfCe1O+PsvQHwNMn6O+8MtzT3zl2X6ePrpy3hnnhAvbxJkZUFmOtj1YMeR/GSj+Nefb/51t2XvEvYy94fUKPo0xB32N+CGVrFDr9E/JDcd/yboD95F1rH+xfR58eA50S7l/EeNcbop3VncoT0N2TIM2h7Eo2l7Tzcd+PmFZeZ0Dls/gfIe950L5CxD5sf/XdK/cGf5+lPaO0Rrhu9PdV9L0jPYrn0rfH2bsBrccYl94zPALZsT3lH0VfdJ71+Bjt/W9CD7JfbrOEOc6hf1eoubyCehlmYbM77XqsF9cC8/SF9ol9YdfxRPxn36U9Cx3x2zTaCRL/D2eWReI+ojWk83IWvx269XbHTD8M2VmbKnO8Mz2H97X3AQu8f9L65H3XFdA2wXHtNksy+Vxz5foX/rVmWmNfL117xD6xn+G+5e9opbcs9n1EOMviOeF+LraePtjvwqZSX0PPRj4nPr/EvWyWYn/uuB+ablkvWhs8E3zXO7vDtGNUY83sQt8uSZ996+2KP9r7OeGemP9t0Ji4jz6q9Kx5cl9HOCjF4L30h6NPUDsvuiyuDWF/TmfcBfdCxe5j2nvtjWPg3u1aNq/CvXAZsew+bMR1lBdlSWYWC/v7xD1n1/scxzNk9iVvSN1d1Jm7vf8dKGEM3FOXmotsXuMZ7Rn4QqXANeTrIP4dEmVtznZN5zZiPztrl9qfopy60V73EvaxF5H/JGL5gUif9SmDjMuxT9HXMWRG3M/lvdXY9p66quF+DF26DN9fop2nr+Vl254jvd2haepG/crsQl+50nXfervij7hnfg4+PnEP3360cy31qbkYY15b5sexL1sa8c59o7a3tLQzBo90w/6NoR/JG6NvU8jIcD8Hm9/X3sNVuHnvqftPxneb0jQXY8yria0mHfuO+bHwVW28x0PpZqx+SV6PLuyUNcM9y/aN/Qz3D0EzV0F+ty+M81vTzf3P5R6hM7G+0+M7AM2F3vH1eceN6oNDPA/obBDPBYMbGKGidEPcn4J/L9yU4rG+ke47NRnuJcOfCd8e697fy3g29rnl/Gbfd/j3UNm3Ck9hY/F36mOundJvKWvcU8aumzH2Q8mbss/byCY2eEfuGGFa2BnrLqVvH1+wPqkPsvcR97zzif1Xns94Tshwz/ezsv3CMr8N0fkue/f0OuCea0aUrZ2+YyU/MV/6LeUh8vrWEU45rlPAffYNtpc9iHneVyC+gdtLzHofNuVcm7fg3b/tjml+k837RfoY8f5dGG6Js/NpXDtcQ333AX4/tM+7zFPDfddcj7H2HbN90rLrtNVXQdc2lf1vDITvj/cQ7HPcNf7W59ojxN+yD/g3oNxn+ug6+zvBt0PG0OA6OQX/vvZekrZxn2cvx/3Q+czqcY71jYFw6nGXTrRnZLbf5WT7gPyp96EPm35c+kxcN31wL93In+PeR/vwTsghPQLqExz3ffpRakPySs/3XT7GGKcawwsQzPnkN9x+H7lte5oTx6jSxHzLfbruaKLPVFtPaoPrhXr3frS2q7ET934u4763zd/teV/GwITkqb9zi8cY45RjIvbfDRrz7+/l5+s+0eMWzPt4Nb/CdIx5do5lzFPv3o9Su/Rn6L/wO+x7N8TvtN3e9/HxvO+e9nGMgQnJ8zbmlB5jjFOPh9iXPePd/b7uVrNxOnZ9/WRp/2anVe/Et+6zvH3hPnvmfK1p4lRr9BT8+0z/X4eyvgH6ZqvSdsjHM63/vfwOm966KflGXBMl+65G3gGemq8+Be61L2WYUL9a40Ow9/wb0w+C/H5B5y/G/reKY/rZrTpc+G7XQB/cl+bV59j/pvVUcC+tco1m5zL9rSLv0ulnzwn7d6I//q55Tn2TXqeIiXu+k2vxc2R7ac/ly8i2M473UqeIe9eH0sK97sz0zYvjzdP0v98TSH55LK/ls+9wvB2m9V0O+8b3srFvpXXgsh/F4nHbxzTvGbO/6eXZkudK2lDy7Ct02Xv3k4T7zKZpjj0+Ff9efo704zpg+n7g4g0g4or4qlHJBskv74OTjU27pU3ca96SZ1/YZqlPvg64Hh8CXQP574W9EWOLY+6yedRV7X4+rqOu97e/Ann8vcorIAWVxXI+78K9ZDAuzSvfGcRxM981dpddSqvN0vN9l/sY492E300T+/p+gWtAOOP9utKKW/belnFrbrM21FaM/U7b18i96LN/c6F5ifOuPd/1kvWV9cUbZWT52vtb3lX+GohjeRti4pyksljOZw+DWP7rG17VifE9GLf77lnfYlnX2DN9xDLpN5bPJV8bY+nbca0Bx7/jbWzcR2wPyfM3K3ysnBe+K+Ldit8vCgPOm82V5lX8LXEJ+1rfQ8bVVYfjLtn1Up+7xp7pI5ZJP7F8LvmuMfrdm9t/6kz+T9T9LnDv6yy2r7x4aOvpy3Cs8um4t+kbjLi+uR667hk1ryXslMqjb8QzgnCv/rL/vldpPK0x7x/EO+Q3ak7Jv38S+uddZi3EuebdQDzzRn+iJq/rGX1w31M0l4ojNkp+vua+tsZ9fXdhnv2Ouog4b7Gx1B/7JNxrXFlcGht5fb0wzzmQT5qdXaJ/Fvta0xPH3hKknxbeffD0GaPG4nMs3AuD0Z/YZkxsT/L7YMHnnfOvue8zVu+3/y2Kzqt9fWbXmadbcZ+Nv1TGOYjY9ja70kP15DoTVrxsTuk+Y9RYXG8Rl1PiHmvrtjN0Nvey795PpqOPQQx33bO0/jZvbKs1Pybu5d+Uxt+nT8Ko/ELlGbeUCSteb07pLizcAWycgf4XpLG4/hz37kePMUa25/IzjGdlfead4y9hP2KefomPfYx0X9z72hfOow76jD8bQx9bWJpnYaX0fN/lcdyc22wt0DZme7vjUvoeQ2/UC3WXnZ2jryv/1n2tOK6Ydz+gz3ijnG3zwj3GcPMsGnHcknffTn7dkL7R12efPkT9B3D+MfIf25Rlvp98QMdKEDGb7BDdeJ2pcc+2vI0WDGj9eT+Zjue3+HwfeeG+Ni6t6xoPx5ztR1jfvfeokh3IcN2ls9kAPXSkq998XtMdMSlbJbyNae/Zvt4X6I6iK97G3mX6qI0/4+9T5rjXflXDd+mZdN/Sdrb+ff/LxpvV6WqLdeYauvre9dxtsXQ/Nu67+nDIzx33JUyXymVv+Fy635cufN14H+aK+6VfiwYWDSwaWDSwaGDRwKKBRQOLBhYNHI8G/vvOs9/46YZ+jJj0k0JefIz71psb//9gDKCvYSyXhDF/DWO/JI0/63PUUcZD/bTw1dqpPdM8TNlGrf2WZ+wjdXw8K+U4RvJfuH8FrY9jNPMcBXW8hHlpYMH99POx4H56HfdtYcF9X431558z7uEjnsFfO4M/dsZ0LQ9f9pKPcY0vypkjP3zPM9AafVtj7GvoYI1+X5Lrw9MaVxx75CnpMvJ53tNd8ofy7rIe55w6XsKigUUDiwYWDSwaWDSwaGDRwKKBRQOLBqbWwP8BCeG8qA==\",\"encoding\":\"base64\",\"height\":109,\"id\":3,\"name\":\"map\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":190,\"x\":0,\"y\":0},{\"compression\":\"zlib\",\"data\":\"eAHt3U1OAjEUAODqKVx5ADFGNx5A2OhC3Ys7489elwaPbkkUVpAZQpl23jfJBCJD5/V7D9I0pabkIECAAAECBAgQIECAAAECBAgQIEBgDAKvRym95dNBIJLAItf8j7qPlHJ9DSLwcJzSYz4d5QQuc9NX5ZrX8g4C77nmP9T9DnLd33KbL73rfrkrCRAgQIAAAQIECBAgQIAAAQIECBAgQIAAAQIECBAgQIBAJwHrNzsxuWhkAtZvjiyhukOAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBCoWOMmxLU8HAQIp2ZtJFbQssOu+V0PvzTTN+0LN7A3VcukNGnur+17Nc80/q/tBa6e1m/+P2bs+ttY/8RIgQIAAAQIECBAgQIAAAQIECBAgQIAAgbEK2DdnrJnVr20C9s3ZpuM1AgQIEKhZYOL/9tacHrEVEpip+0KymiVAgMDwAvfWKg+fhEoiMEdZSSKEcVABc5QH5XYzAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAgQIECBAgAABAlUL+J1d1ekRXCEBv7MrBKtZAgQIECBQgcCpPUUqyIIQSgi82BOtBKs2CRAgQIAAAQIECBAgQIAAAQKDCVybyxzM3o0PI7Cc0/w2r7kXbGt79sKokcYErO1pLGF/4frebzNvoiZQQuDMOLAEa3VtWsewTslNrvmpul+DeBZC4CnX/Fzdh8j1pk5GHP9/5pr/ClD3F5uSHvTvxjxBE5+7PQnUdXPQgZKtqysBc9ArinBPuox1zkeiEnHMPpLU6UZPgb5jdp+NnsAub1Kg7+eiyU4KOryA7/PwJQCAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQ6CHwC0xVHZU=\",\"encoding\":\"base64\",\"height\":109,\"id\":2,\"name\":\"foreground\",\"opacity\":1,\"type\":\"tilelayer\",\"visible\":true,\"width\":190,\"x\":0,\"y\":0},{\"draworder\":\"topdown\",\"id\":7,\"name\":\"objects\",\"objects\":[{\"height\":0,\"id\":182,\"name\":\"exitportal\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":156,\"y\":1928},{\"height\":0,\"id\":133,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":0}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1980,\"y\":1742},{\"height\":0,\"id\":134,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":0}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2004,\"y\":1741},{\"height\":0,\"id\":135,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":0}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2028,\"y\":1741},{\"height\":0,\"id\":136,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1980,\"y\":1718},{\"height\":0,\"id\":137,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2004,\"y\":1717},{\"height\":0,\"id\":138,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2028,\"y\":1717},{\"height\":0,\"id\":139,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":2}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1980,\"y\":1694},{\"height\":0,\"id\":140,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":2}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2004,\"y\":1693},{\"height\":0,\"id\":141,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":2}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2028,\"y\":1693},{\"height\":0,\"id\":142,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":3}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1980,\"y\":1670},{\"height\":0,\"id\":143,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":3}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2004,\"y\":1669},{\"height\":0,\"id\":144,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":3}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2028,\"y\":1669},{\"height\":0,\"id\":145,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1980,\"y\":1646},{\"height\":0,\"id\":146,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2004,\"y\":1645},{\"height\":0,\"id\":147,\"name\":\"riddlestone\",\"point\":true,\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2028,\"y\":1645},{\"height\":0,\"id\":85,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Use “jump” to overcome obstacles.:::The longer you press, the higher the jump.\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3432,\"y\":563},{\"height\":0,\"id\":86,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Walk over items to carry them.:::You cannot interact with doors or other entities when carrying items.:::Press “throw” to throw your current item.\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3492,\"y\":443},{\"height\":0,\"id\":88,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"↓ A magical journey awaits you beneath the clouds.\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1140,\"y\":370},{\"height\":0,\"id\":89,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Be careful!\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":120,\"y\":250},{\"height\":0,\"id\":102,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"↑ Mountain\\n← Temple\\n→ Sacred Forest\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1392,\"y\":1999},{\"height\":0,\"id\":103,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Landmark: The Broken Bridge\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1668,\"y\":1977},{\"height\":0,\"id\":104,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"↑ Entrance to mountain hiking path.:::Good jumping skills required.\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2064,\"y\":2000},{\"height\":0,\"id\":109,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"◊ Popular bird feeding spot\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2016,\"y\":1235},{\"height\":0,\"id\":110,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Bouncy mushrooms ahead →\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3876,\"y\":534},{\"height\":0,\"id\":111,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"↑ Mountain trial\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1788,\"y\":1714},{\"height\":0,\"id\":161,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"You can check the controls in the pause menu at any time.\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3300,\"y\":439},{\"height\":0,\"id\":112,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"◊ Popular seed throwing spot\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2532,\"y\":1861},{\"height\":0,\"id\":82,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Hold “down” to fall through platforms.\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3336,\"y\":490},{\"height\":0,\"id\":148,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"◊ Advanced seed throwing spot\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1573,\"y\":1735},{\"height\":0,\"id\":4,\"name\":\"stone\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2090,\"y\":672},{\"height\":0,\"id\":2,\"name\":\"fire\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1212,\"y\":1968},{\"height\":0,\"id\":3,\"name\":\"tree\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3048,\"y\":1944},{\"height\":0,\"id\":9,\"name\":\"flameboy\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":156,\"y\":1930},{\"height\":0,\"id\":13,\"name\":\"wing\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3428,\"y\":850},{\"height\":0,\"id\":43,\"name\":\"campfire\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3480,\"y\":192},{\"height\":0,\"id\":42,\"name\":\"caveman\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3499,\"y\":177},{\"height\":0,\"id\":17,\"name\":\"river\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":864,\"y\":1945},{\"height\":0,\"id\":18,\"name\":\"forest\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":2907,\"y\":1890},{\"height\":0,\"id\":19,\"name\":\"mountain\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1932,\"y\":579},{\"height\":0,\"id\":20,\"name\":\"seedposition\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1932,\"y\":562},{\"height\":0,\"id\":24,\"name\":\"stone_floating_position\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":804,\"y\":2018},{\"height\":0,\"id\":25,\"name\":\"recover_floating_position\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":929,\"y\":2010},{\"height\":131,\"id\":26,\"name\":\"bird_nest_left\",\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":5,\"x\":163,\"y\":1011},{\"height\":0,\"id\":27,\"name\":\"rain_spawn_position\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1933,\"y\":288},{\"height\":42,\"id\":36,\"name\":\"door_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"cave\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"door_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":204,\"y\":2166},{\"height\":0,\"id\":55,\"name\":\"movingplatform\",\"point\":true,\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"up\"},{\"name\":\"distance\",\"type\":\"int\",\"value\":200},{\"name\":\"velocity\",\"type\":\"int\",\"value\":44}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1585,\"y\":1172},{\"height\":0,\"id\":56,\"name\":\"movingplatform\",\"point\":true,\"properties\":[{\"name\":\"direction\",\"type\":\"string\",\"value\":\"up\"},{\"name\":\"distance\",\"type\":\"int\",\"value\":100},{\"name\":\"velocity\",\"type\":\"int\",\"value\":44}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2364,\"y\":842},{\"height\":44,\"id\":37,\"name\":\"door_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"door_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3252,\"y\":148},{\"height\":288,\"id\":39,\"name\":\"cave1-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":480,\"x\":3168,\"y\":0},{\"height\":288,\"id\":44,\"name\":\"startingcave-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":480,\"x\":3168,\"y\":336},{\"height\":0,\"id\":60,\"name\":\"shadowpresence\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1862,\"y\":2136},{\"height\":44,\"id\":45,\"name\":\"startingdoor_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"startingdoor_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3540,\"y\":484},{\"height\":0,\"id\":80,\"name\":\"stonedisciple\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3480,\"y\":2204},{\"height\":44,\"id\":46,\"name\":\"startingdoor_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"cave\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"startingdoor_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":60,\"y\":220},{\"height\":42,\"id\":48,\"name\":\"forrest_door_left_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"cave\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"forrest_door_left_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":2604,\"y\":1998},{\"height\":42,\"id\":49,\"name\":\"forrest_door_right_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"cave\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"forrest_door_right_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":2724,\"y\":1998},{\"height\":624,\"id\":50,\"name\":\"forrest-cave-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":624,\"x\":3696,\"y\":0},{\"height\":42,\"id\":51,\"name\":\"forrest_door_left_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"forrest_door_left_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3804,\"y\":510},{\"height\":42,\"id\":52,\"name\":\"forrest_door_right_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"forrest_door_right_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":4188,\"y\":510},{\"height\":42,\"id\":53,\"name\":\"montain_door_floor_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"riddle\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_door_floor_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":2100,\"y\":1974},{\"height\":42,\"id\":54,\"name\":\"montain_door_top_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"riddle\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_door_top_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":2220,\"y\":1782},{\"height\":264,\"id\":57,\"name\":\"winghouse-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":480,\"x\":3168,\"y\":672},{\"height\":40,\"id\":58,\"name\":\"wing_house_door_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"radio\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"wing_house_door_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":2197,\"y\":224},{\"height\":40,\"id\":59,\"name\":\"wing_house_door_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"wing_house_door_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3348,\"y\":824},{\"height\":336,\"id\":61,\"name\":\"mountain-foot-cave-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":480,\"x\":3168,\"y\":984},{\"height\":42,\"id\":62,\"name\":\"montain_door_floor_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_door_floor_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3276,\"y\":1230},{\"height\":42,\"id\":63,\"name\":\"montain_door_top_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_door_top_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3492,\"y\":1063},{\"height\":960,\"id\":64,\"name\":\"mountain-foot-cave-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":480,\"x\":3168,\"y\":1344},{\"height\":42,\"id\":65,\"name\":\"montain_riddlecave_bottom_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"riddle\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_riddlecave_bottom_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":1741,\"y\":1686},{\"height\":42,\"id\":66,\"name\":\"montain_riddlecave_bottom_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_riddlecave_bottom_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3276,\"y\":2190},{\"height\":42,\"id\":77,\"name\":\"montain_riddlecave_top_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"riddle\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_riddlecave_top_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":1933,\"y\":1350},{\"height\":42,\"id\":78,\"name\":\"montain_riddlecave_top_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"overworld\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"montain_riddlecave_top_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3540,\"y\":1397},{\"height\":505,\"id\":79,\"name\":\"no_emit_trigger\",\"properties\":[{\"name\":\"disableParticles\",\"type\":\"bool\",\"value\":true}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":384,\"x\":3216,\"y\":1608},{\"height\":45,\"id\":81,\"name\":\"finish_mountain_riddle\",\"properties\":[{\"name\":\"setDialogEntity\",\"type\":\"string\",\"value\":\"stonedisciple\"},{\"name\":\"setDialogValue\",\"type\":\"string\",\"value\":\"stonedisciple2\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3384,\"y\":1443},{\"height\":0,\"id\":87,\"name\":\"skull\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3528,\"y\":432},{\"height\":0,\"id\":97,\"name\":\"wall\",\"point\":true,\"properties\":[{\"name\":\"identifier\",\"type\":\"string\",\"value\":\"wall0\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":4260,\"y\":1464},{\"height\":0,\"id\":98,\"name\":\"wall\",\"point\":true,\"properties\":[{\"name\":\"identifier\",\"type\":\"string\",\"value\":\"wall1\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":4452,\"y\":1464},{\"height\":912,\"id\":90,\"name\":\"inferno-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":912,\"x\":3648,\"y\":624},{\"height\":0,\"id\":91,\"name\":\"boss_spawn\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":4104,\"y\":1416},{\"height\":0,\"id\":92,\"name\":\"bosscloud\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":4089,\"y\":936},{\"height\":0,\"id\":93,\"name\":\"bosscloud\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":4056,\"y\":1293},{\"height\":0,\"id\":94,\"name\":\"bosscloud\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":4176,\"y\":1105},{\"height\":2304,\"id\":95,\"name\":\"overworld-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":3168,\"x\":0,\"y\":0},{\"height\":42,\"id\":100,\"name\":\"boss_door2\",\"properties\":[{\"name\":\"target\",\"type\":\"string\",\"value\":\"boss_door1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3684,\"y\":798},{\"height\":42,\"id\":101,\"name\":\"boss_door1\",\"properties\":[{\"name\":\"target\",\"type\":\"string\",\"value\":\"boss_door2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":4451,\"y\":822},{\"height\":0,\"id\":105,\"name\":\"chicken\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3504,\"y\":844},{\"height\":0,\"id\":106,\"name\":\"bird\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":168,\"y\":1131},{\"height\":24,\"id\":107,\"name\":\"raincloud_sky\",\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":72,\"x\":1897,\"y\":212},{\"height\":119,\"id\":108,\"name\":\"bird_nest_right\",\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":33,\"x\":2132,\"y\":1067},{\"height\":0,\"id\":113,\"name\":\"superthrow\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2592,\"y\":1863},{\"height\":3,\"id\":114,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":0}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3264,\"y\":2090},{\"height\":3,\"id\":115,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":0}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3384,\"y\":2090},{\"height\":3,\"id\":116,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":0}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3504,\"y\":2090},{\"height\":3,\"id\":117,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3264,\"y\":1994},{\"height\":3,\"id\":118,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3384,\"y\":1994},{\"height\":3,\"id\":119,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3504,\"y\":1994},{\"height\":3,\"id\":120,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":2}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3264,\"y\":1898},{\"height\":3,\"id\":121,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":2}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3384,\"y\":1898},{\"height\":3,\"id\":122,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":2}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3504,\"y\":1898},{\"height\":3,\"id\":123,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":3}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3264,\"y\":1802},{\"height\":3,\"id\":124,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":3}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3384,\"y\":1802},{\"height\":3,\"id\":125,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":3}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3504,\"y\":1802},{\"height\":3,\"id\":126,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":0},{\"name\":\"row\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3264,\"y\":1706},{\"height\":3,\"id\":127,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":1},{\"name\":\"row\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3384,\"y\":1706},{\"height\":3,\"id\":128,\"name\":\"mountaingate\",\"properties\":[{\"name\":\"col\",\"type\":\"int\",\"value\":2},{\"name\":\"row\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":48,\"x\":3504,\"y\":1706},{\"height\":5,\"id\":129,\"name\":\"reset_mountain\",\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":384,\"x\":3216,\"y\":2140},{\"height\":1,\"id\":130,\"name\":\"teleporter\",\"properties\":[{\"name\":\"teleportY\",\"type\":\"int\",\"value\":288}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":384,\"x\":3216,\"y\":1705},{\"height\":1,\"id\":131,\"name\":\"teleporter\",\"properties\":[{\"name\":\"teleportY\",\"type\":\"int\",\"value\":192}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":384,\"x\":3216,\"y\":1801},{\"height\":1,\"id\":132,\"name\":\"teleporter\",\"properties\":[{\"name\":\"teleportY\",\"type\":\"int\",\"value\":96}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":384,\"x\":3216,\"y\":1897},{\"height\":24,\"id\":151,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"A strange device…:::There is no manual available.\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":24,\"x\":3240,\"y\":417},{\"height\":24,\"id\":152,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"A little garden. Cute.\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":24,\"x\":1920,\"y\":542},{\"height\":46,\"id\":153,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"A collection of books regarding non euclidean architecture.:::Just thinking about the contents drives me mad.\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":30,\"x\":3558,\"y\":2162},{\"height\":0,\"id\":154,\"name\":\"portal\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3252,\"y\":439},{\"height\":0,\"id\":156,\"name\":\"mimic\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3288,\"y\":857},{\"height\":0,\"id\":160,\"name\":\"bone\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3564,\"y\":438},{\"height\":24,\"id\":157,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"A classic mailbox.:::It's welded shut.\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":14,\"x\":2141,\"y\":240},{\"height\":0,\"id\":158,\"name\":\"radio\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3552,\"y\":748},{\"height\":11,\"id\":159,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Just a regular old stereo…:::How disappointing.\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":30,\"x\":3537,\"y\":737},{\"height\":0,\"id\":47,\"name\":\"player\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3252,\"y\":426},{\"height\":0,\"id\":162,\"name\":\"shiba\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":184,\"y\":1231},{\"height\":0,\"id\":163,\"name\":\"powershiba\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":2712,\"y\":249},{\"height\":24,\"id\":164,\"name\":\"shiba_action\",\"properties\":[{\"name\":\"velocity\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":5,\"x\":150,\"y\":1224},{\"height\":24,\"id\":165,\"name\":\"shiba_action\",\"properties\":[{\"name\":\"velocity\",\"type\":\"int\",\"value\":-1}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":5,\"x\":264,\"y\":1224},{\"height\":24,\"id\":166,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"A small dog house entrance.:::I don't fit since I'm not a dog.\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":3,\"x\":144,\"y\":1224},{\"height\":12,\"id\":167,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Some kind of bird nest made out of twigs.:::Pretty normal.\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":22,\"x\":158,\"y\":1130},{\"height\":24,\"id\":168,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"This a great vantage point.:::I can see a large tree with a birds nest in the distance.\"}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":24,\"x\":1392,\"y\":1440},{\"height\":0,\"id\":170,\"name\":\"shiba_mountain_spawn\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1950,\"y\":1235},{\"height\":0,\"id\":171,\"name\":\"powershiba_mountain_spawn\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1979,\"y\":1234},{\"height\":0,\"id\":172,\"name\":\"friendship_player_position\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1179,\"y\":1968},{\"height\":0,\"id\":173,\"name\":\"friendship_shiba_spawn\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1477,\"y\":2010},{\"height\":47,\"id\":175,\"name\":\"shiba_stop\",\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":12,\"x\":1212,\"y\":1921},{\"height\":0,\"id\":176,\"name\":\"water_sound\",\"point\":true,\"properties\":[{\"name\":\"intensity\",\"type\":\"float\",\"value\":0.5},{\"name\":\"sound\",\"type\":\"string\",\"value\":\"stream\"},{\"name\":\"volume\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"sound\",\"visible\":true,\"width\":0,\"x\":732,\"y\":1992},{\"height\":0,\"id\":177,\"name\":\"wind_sound\",\"point\":true,\"properties\":[{\"name\":\"intensity\",\"type\":\"float\",\"value\":1},{\"name\":\"sound\",\"type\":\"string\",\"value\":\"wind\"},{\"name\":\"volume\",\"type\":\"float\",\"value\":0.6}],\"rotation\":0,\"type\":\"sound\",\"visible\":true,\"width\":0,\"x\":2029,\"y\":933},{\"height\":0,\"id\":178,\"name\":\"sign\",\"point\":true,\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"There is currently no way to save your progress.:::A single run is pretty short so we hope that it isn't too much of a problem.::: Sorry for any resulting inconveniences!\"}],\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":3336,\"y\":563},{\"height\":0,\"id\":179,\"name\":\"player_reset_position\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":1261,\"y\":1573},{\"height\":24,\"id\":180,\"name\":\"flameboy_action\",\"properties\":[{\"name\":\"velocity\",\"type\":\"int\",\"value\":1}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":5,\"x\":342,\"y\":1968},{\"height\":24,\"id\":181,\"name\":\"flameboy_action\",\"properties\":[{\"name\":\"velocity\",\"type\":\"int\",\"value\":-1}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":5,\"x\":504,\"y\":1968},{\"height\":44,\"id\":183,\"name\":\"exitportaldoor_1\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"awake\"},{\"name\":\"disabled\",\"type\":\"bool\",\"value\":true},{\"name\":\"enterSound\",\"type\":\"string\",\"value\":\"portal\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"exitportaldoor_2\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":144,\"y\":1887},{\"height\":44,\"id\":184,\"name\":\"exitportaldoor_2\",\"properties\":[{\"name\":\"bgm\",\"type\":\"string\",\"value\":\"cave\"},{\"name\":\"disabled\",\"type\":\"bool\",\"value\":true},{\"name\":\"exitFadeTime\",\"type\":\"float\",\"value\":5},{\"name\":\"exitSleepTime\",\"type\":\"float\",\"value\":5},{\"name\":\"exitSound\",\"type\":\"string\",\"value\":\"empty\"},{\"name\":\"target\",\"type\":\"string\",\"value\":\"exitportaldoor_1\"}],\"rotation\":0,\"type\":\"gate\",\"visible\":true,\"width\":24,\"x\":3360,\"y\":2452},{\"height\":264,\"id\":185,\"name\":\"laboratory-bounds\",\"rotation\":0,\"type\":\"bounds\",\"visible\":true,\"width\":3648,\"x\":0,\"y\":2328},{\"height\":41,\"id\":186,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"This door is locked. It says '100'\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":22,\"x\":2881,\"y\":2455},{\"height\":39,\"id\":187,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"I woke up in this strange capsule\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":19,\"x\":3362,\"y\":2457},{\"height\":39,\"id\":188,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"Some capsules are still closed. I can see a humanoid shape through the glass\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":19,\"x\":3266,\"y\":2456},{\"height\":39,\"id\":189,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"He seems to be dead for quite some time.\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":19,\"x\":2762,\"y\":2457},{\"height\":41,\"id\":190,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"The is door is locked as well. It says '200'\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":22,\"x\":2185,\"y\":2455},{\"height\":0,\"id\":191,\"name\":\"window\",\"point\":true,\"rotation\":0,\"type\":\"entity\",\"visible\":true,\"width\":0,\"x\":1680,\"y\":2476},{\"height\":41,\"id\":194,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"The blinds are shut tight.\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":23,\"x\":1740,\"y\":2455},{\"height\":41,\"id\":195,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"The blinds are shut tight.\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":23,\"x\":1812,\"y\":2455},{\"height\":41,\"id\":196,\"name\":\"readable\",\"properties\":[{\"name\":\"content\",\"type\":\"string\",\"value\":\"The blinds are shut tight.\"},{\"name\":\"duration\",\"type\":\"int\",\"value\":4}],\"rotation\":0,\"type\":\"trigger\",\"visible\":true,\"width\":23,\"x\":1596,\"y\":2455},{\"height\":0,\"id\":197,\"name\":\"windowzoomtarget\",\"point\":true,\"rotation\":0,\"type\":\"pointer\",\"visible\":true,\"width\":0,\"x\":275,\"y\":2465}],\"opacity\":1,\"type\":\"objectgroup\",\"visible\":true,\"x\":0,\"y\":0}],\"nextlayerid\":8,\"nextobjectid\":198,\"orientation\":\"orthogonal\",\"renderorder\":\"left-down\",\"tiledversion\":\"1.4.1\",\"tileheight\":24,\"tilesets\":[{\"columns\":25,\"firstgid\":1,\"image\":\"tilemap.png\",\"imageheight\":816,\"imagewidth\":600,\"margin\":0,\"name\":\"tilemap\",\"spacing\":0,\"tilecount\":850,\"tileheight\":24,\"tilewidth\":24,\"transparentcolor\":\"#ff00ff\"}],\"tilewidth\":24,\"type\":\"map\",\"version\":1.4,\"width\":190}");

/***/ }),

/***/ "./lib/Animator.js":
/*!*************************!*\
  !*** ./lib/Animator.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Animator = void 0;
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
/**
 * The Animator class can be used to orchestrate and draw aseprite animations of an entity
 */
class Animator {
    constructor(entity) {
        this.currentAnimation = {
            tag: "",
            start: 0,
            duration: 0,
            finished: false,
        };
        this.entity = entity;
    }
    assignSprite(sprite) {
        this.sprite = sprite;
    }
    /**
     * Updates the animation if all conditions are met regarding the currently playing animation.
     *
     * @param tag    - The animation tag to draw.
     * @param config - Optional animation configuration.
     */
    updateAnimation(tag, config) {
        var _a;
        // Early out if animation tag is already set as current animation
        if (!this.sprite)
            return;
        // Animation Update Logic
        // If current animation has a fixed duration, check if it was reached.
        // If so, the animation is set to finished.
        if (!this.currentAnimation.finished && this.currentAnimation.duration > 0) {
            const animationTime = (this.entity.scene.gameTime * 1000) - this.currentAnimation.start;
            if (animationTime + (this.entity.scene.dt * 1000) >= this.currentAnimation.duration) {
                this.currentAnimation.finished = true;
                if ((_a = this.currentAnimation.config) === null || _a === void 0 ? void 0 : _a.callback) {
                    this.currentAnimation.config.callback();
                }
            }
        }
        // Leave function if the provided animation tag is the one that is already playing since
        // there is no need to update the current animation settings.
        if (this.currentAnimation.tag === tag)
            return;
        // Update Animation with new payload
        this.currentAnimation.tag = tag;
        this.currentAnimation.start = this.entity.scene.gameTime * 1000;
        this.currentAnimation.config = config;
        this.currentAnimation.finished = false;
        this.currentAnimation.duration = this.sprite.getAnimationDurationByTag(tag) || 0;
    }
    /**
     * Method to call from draw method of the entity to draw a specific animation by tag.
     *
     * @param tag    - The animation tag to draw.
     * @param ctx    - The canvas context to draw to.
     * @param config - Optional animation configuration.
     */
    play(tag, direction, config) {
        this.currentAnimation.direction = direction;
        this.updateAnimation(tag, config);
        let animationTime = (this.entity.scene.gameTime * 1000) - this.currentAnimation.start;
        /**
         * Forcefully stop the loop at the last frame, if looping is disabled.
         * We subtract an arbitrary small number the animation duration, since the exact animation
         * duration time will play frame 1 of the animation.
         */
        if ((config === null || config === void 0 ? void 0 : config.loop) === false) {
            const lastFrameTime = this.currentAnimation.duration - 1;
            animationTime = Math.min(lastFrameTime, animationTime);
        }
        /**
         * Zero Animation timer fix.
         * Sometimes (?), an animation time of zero does not play the first but the last frame, thus
         * we just skip 0.
         */
        if (animationTime === 0)
            animationTime += 1;
        this.draw(animationTime);
    }
    draw(animationTime) {
        if (this.sprite) {
            this.entity.scene.renderer.addAseprite(this.sprite, this.currentAnimation.tag, this.entity.x, this.entity.y, Renderer_1.RenderingLayer.ENTITIES, this.currentAnimation.direction, animationTime);
        }
    }
}
exports.Animator = Animator;


/***/ }),

/***/ "./lib/Aseprite.js":
/*!*************************!*\
  !*** ./lib/Aseprite.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Aseprite = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const graphics_1 = __webpack_require__(/*! ./graphics */ "./lib/graphics.js");
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
/**
 * Sprite implementation which uses the Aseprite JSON format. Use the static asynchronous [[load]] method to load the
 * sprite and then use [[draw]] or [[drawTag]] to draw the sprite animation.
 */
class Aseprite {
    constructor(json, image) {
        var _a;
        this.json = json;
        this.image = image;
        this.frameTags = {};
        this.frameTagDurations = {};
        this.fallbackTag = "idle";
        this.frames = Object.values(json.frames);
        this.duration = this.frames.reduce((duration, frame) => duration + frame.duration, 0);
        for (const frameTag of (_a = json.meta.frameTags) !== null && _a !== void 0 ? _a : []) {
            let duration = 0;
            for (let i = frameTag.from; i <= frameTag.to; i++) {
                duration += this.frames[i].duration;
            }
            this.frameTags[frameTag.name] = frameTag;
            this.frameTagDurations[frameTag.name] = duration;
        }
    }
    /**
     * Loads the sprite from the given source.
     *
     * @param source - The URL pointing to the JSON file of the sprite.
     * @return The loaded sprite.
     */
    static load(source) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const json = yield (yield fetch(source)).json();
            const baseURL = new URL(source, location.href);
            const image = yield graphics_1.loadImage(new URL(json.meta.image, baseURL));
            return new Aseprite(json, image);
        });
    }
    /**
     * Returns the sprite width in pixels.
     *
     * @return The sprite width in pixels.
     */
    get width() {
        return this.frames[0].sourceSize.w;
    }
    /**
     * Returns the sprite height in pixels.
     *
     * @return The sprite height in pixels.
     */
    get height() {
        return this.frames[0].sourceSize.h;
    }
    calculateFrameIndex(time = util_1.now(), duration = this.duration, from = 0, to = this.frames.length - 1, direction = "forward") {
        let delta = direction === "reverse" ? -1 : 1;
        if (direction === "pingpong") {
            duration = duration * 2 - this.frames[from].duration - this.frames[to].duration;
        }
        let frameTime = time % duration;
        let frameIndex = direction === "reverse" ? to : from;
        while (((delta > 0 && frameIndex < to)
            || (delta < 0 && frameIndex > from)) && frameTime >= this.frames[frameIndex].duration) {
            frameTime -= this.frames[frameIndex].duration;
            frameIndex += delta;
            if (frameIndex === to) {
                delta = -delta;
            }
        }
        return frameIndex;
    }
    /**
     * Returns the frame index to be drawn at the given time.
     *
     * @param time - Optional time index of the animation. Current system time is used if not specified.
     * @return The frame index to draw.
     */
    getFrameIndex(time = util_1.now()) {
        return this.calculateFrameIndex(time);
    }
    /**
     * Draws a single sprite animation frame.
     *
     * @param ctx   - The canvas context to draw to.
     * @param index - The frame index to draw.
     * @param x     - The X position in pixels to draw to the sprite at.
     * @param y     - The Y position in pixels to draw to the sprite at.
     */
    drawFrame(ctx, index, x, y) {
        const frame = this.frames[index];
        if (frame == null) {
            throw new Error("Frame index not found: " + index);
        }
        ctx.drawImage(this.image, frame.frame.x, frame.frame.y, frame.frame.w, frame.frame.h, Math.round(x) + frame.spriteSourceSize.x, Math.round(y) + frame.spriteSourceSize.y, frame.spriteSourceSize.w, frame.spriteSourceSize.h);
    }
    /**
     * Returns the frame index of a tagged sprite animation at the given time.
     *
     * @param tag  - The animation tag to draw.
     * @param time - Optional time index of the animation. Current system time is used if not specified.
     * @return The frame index to draw.
     */
    getTaggedFrameIndex(tag, time = util_1.now()) {
        const frameTag = this.frameTags[tag] || this.frameTags[this.fallbackTag];
        if (frameTag == null) {
            throw new Error(`Frame tag not found and fallback is not available as well. Tag: '${tag}' | FallbackTag: '${this.fallbackTag}'`);
        }
        return this.calculateFrameIndex(time, this.frameTagDurations[tag], frameTag.from, frameTag.to, frameTag.direction);
    }
    /**
     * Return the full animation duration for a specific animation tag.
     *
     * @param tag - The animation tag to get the duration from.
     * @return The animation duration.
     */
    getAnimationDurationByTag(tag) {
        const duration = this.frameTagDurations[tag] || this.frameTagDurations[this.fallbackTag];
        if (duration == null) {
            throw new Error(`Frame tag not found and fallback is not available as well. Tag: '${tag}' | FallbackTag: '${this.fallbackTag}'`);
        }
        return duration;
    }
    /**
     * Draws a tagged sprite animation.
     *
     * @param ctx  - The canvas context to draw to.
     * @param tag  - The animation tag to draw.
     * @param x    - The X position in pixels to draw to the sprite at.
     * @param y    - The Y position in pixels to draw to the sprite at.
     * @param time - Optional time index of the animation. Current system time is used if not specified.
     */
    drawTag(ctx, tag, x, y, time = util_1.now()) {
        this.drawFrame(ctx, this.getTaggedFrameIndex(tag, time), x, y);
    }
    /**
     * Draws the untagged sprite animation (Simply all defined frames).
     *
     * @param ctx  - The canvas context to draw to.
     * @param x    - The X position in pixels to draw to the sprite at.
     * @param y    - The Y position in pixels to draw to the sprite at.
     * @param time - Optional time index of the animation. Current system time is used if not specified.
     */
    draw(ctx, x, y, time = util_1.now()) {
        const frameIndex = this.calculateFrameIndex(time);
        this.drawFrame(ctx, frameIndex, x, y);
    }
    /**
     * Returns the layer with the given name.
     *
     * @param name - The layer name.
     * @return The found layer. Null if none.
     */
    getLayer(name) {
        var _a, _b;
        return (_b = (_a = this.json.meta.layers) === null || _a === void 0 ? void 0 : _a.find(layer => layer.name === name)) !== null && _b !== void 0 ? _b : null;
    }
}
exports.Aseprite = Aseprite;


/***/ }),

/***/ "./lib/Assets.js":
/*!***********************!*\
  !*** ./lib/Assets.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Assets = exports.asset = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ./Aseprite */ "./lib/Aseprite.js");
const BitmapFont_1 = __webpack_require__(/*! ./BitmapFont */ "./lib/BitmapFont.js");
const graphics_1 = __webpack_require__(/*! ./graphics */ "./lib/graphics.js");
const Sound_1 = __webpack_require__(/*! ./Sound */ "./lib/Sound.js");
const assets = new Map();
class AssetRequest {
    constructor(target, propertyKey, src, options) {
        this.target = target;
        this.propertyKey = propertyKey;
        this.src = src;
        this.options = options;
    }
    resolve(asset) {
        this.target[this.propertyKey] = this.options.map ? this.options.map(asset) : asset;
    }
}
const assetRequests = [];
function asset(src, options = {}) {
    return (target, propertyKey) => {
        assetRequests.push(new AssetRequest(target, propertyKey, src, options));
    };
}
exports.asset = asset;
class Assets {
    loadAsset(src) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            let asset = assets.get(src);
            if (asset == null) {
                if (src.endsWith(".aseprite.json")) {
                    asset = yield Aseprite_1.Aseprite.load("assets/" + src);
                }
                else if (src.endsWith(".font.json")) {
                    asset = yield BitmapFont_1.BitmapFont.load("assets/" + src);
                }
                else if (src.endsWith(".png")) {
                    asset = yield graphics_1.loadImage(src);
                }
                else if (src.endsWith(".mp3")) {
                    asset = yield Sound_1.Sound.load("assets/" + src);
                }
                else if (src.endsWith(".ogg")) {
                    asset = yield Sound_1.Sound.load("assets/" + src);
                }
                else if (src === "appinfo.json") {
                    asset = (yield (yield fetch("appinfo.json")).json());
                }
                else {
                    throw new Error("Unknown asset format: " + src);
                }
                assets.set(src, asset);
            }
            return asset;
        });
    }
    load(onProgress) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const total = assetRequests.length;
            let loaded = 0;
            if (onProgress) {
                onProgress(total, loaded);
            }
            let request;
            while ((request = assetRequests.pop()) != null) {
                if (typeof request.src === "string") {
                    request.resolve(yield this.loadAsset(request.src));
                }
                else {
                    request.resolve(yield Promise.all(request.src.map(src => this.loadAsset(src))));
                }
                loaded++;
                if (onProgress) {
                    onProgress(total, loaded);
                }
            }
        });
    }
}
exports.Assets = Assets;


/***/ }),

/***/ "./lib/BitmapFont.js":
/*!***************************!*\
  !*** ./lib/BitmapFont.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BitmapFont = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const graphics_js_1 = __webpack_require__(/*! ./graphics.js */ "./lib/graphics.js");
const CHAR_SPACING = 1;
class BitmapFont {
    constructor(sourceImage, colors, charMap, charWidths, compactablePrecursors, charMargin = 1) {
        this.sourceImage = sourceImage;
        this.canvas = document.createElement("canvas");
        this.colorMap = this.prepareColors(colors);
        this.charMap = charMap;
        this.charWidths = charWidths;
        this.compactablePrecursors = compactablePrecursors;
        this.charStartPoints = [];
        this.charCount = charMap.length;
        this.charReverseMap = {};
        for (let i = 0; i < this.charCount; i++) {
            this.charStartPoints[i] = (i === 0) ? 0 : this.charStartPoints[i - 1] + this.charWidths[i - 1] + charMargin;
            const char = this.charMap[i];
            this.charReverseMap[char] = i;
        }
    }
    /**
     * Loads the sprite from the given source.
     *
     * @param source - The URL pointing to the JSON file of the sprite.
     * @return The loaded sprite.
     */
    static load(source) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const json = yield (yield fetch(source)).json();
            const baseURL = new URL(source, location.href);
            const image = yield graphics_js_1.loadImage(new URL(json.image, baseURL));
            const characters = json.characterMapping.map(charDef => charDef.char).join("");
            const widths = json.characterMapping.map(charDef => charDef.width);
            const compactablePrecursors = json.characterMapping.map(charDef => charDef.compactablePrecursors || []);
            return new BitmapFont(image, json.colors, characters, widths, compactablePrecursors, json.margin);
        });
    }
    prepareColors(colorMap) {
        const result = {};
        const colors = Object.keys(colorMap);
        const count = colors.length;
        const w = this.canvas.width = this.sourceImage.width;
        const h = this.sourceImage.height;
        this.canvas.height = h * count;
        this.charHeight = h;
        const ctx = this.canvas.getContext("2d");
        // Fill with font
        for (let i = 0; i < count; i++) {
            result[colors[i]] = i;
            ctx.drawImage(this.sourceImage, 0, h * i);
        }
        // Colorize
        ctx.globalCompositeOperation = "source-in";
        for (let i = 0; i < count; i++) {
            ctx.fillStyle = colorMap[colors[i]];
            ctx.save();
            ctx.beginPath();
            ctx.rect(0, h * i, w, h);
            ctx.clip();
            ctx.fillRect(0, 0, w, h * count);
            ctx.restore();
        }
        ctx.globalCompositeOperation = "source-over";
        return result;
    }
    getCharIndex(char) {
        let charIndex = this.charReverseMap[char];
        if (charIndex == null) {
            // To signalize missing char, use last char, which is a not-def glyph
            charIndex = this.charCount - 1;
        }
        return charIndex;
    }
    drawCharacter(ctx, char, color) {
        const colorIndex = this.colorMap[color];
        const charIndex = (typeof char === "number") ? char : this.getCharIndex(char);
        const charX = this.charStartPoints[charIndex], charY = colorIndex * this.charHeight;
        ctx.drawImage(this.canvas, charX, charY, this.charWidths[charIndex], this.charHeight, 0, 0, this.charWidths[charIndex], this.charHeight);
    }
    drawText(ctx, text, x, y, color, align = 0, alpha = 1) {
        ctx.save();
        ctx.translate(x, y);
        // Ugly hack to correct text position to exact pixel boundary because Chrome renders broken character images
        // when exactly between two pixels (Firefox doesn't have this problem).
        if (ctx.getTransform) {
            const transform = ctx.getTransform();
            ctx.translate(Math.round(transform.e) - transform.e, Math.round(transform.f) - transform.f);
        }
        text = "" + text;
        ctx.globalAlpha *= alpha;
        const { width } = this.measureText(text);
        ctx.translate(-align * width, 0);
        let precursorChar = null;
        for (const currentChar of text) {
            const index = this.getCharIndex(currentChar);
            const spaceReduction = precursorChar && this.compactablePrecursors[index].includes(precursorChar) ? 1 : 0;
            ctx.translate(-spaceReduction, 0);
            this.drawCharacter(ctx, index, color);
            ctx.translate(this.charWidths[index] + CHAR_SPACING, 0);
            precursorChar = currentChar;
        }
        ctx.restore();
    }
    measureText(text) {
        let width = 0;
        let precursorChar = null;
        for (const currentChar of text) {
            const index = this.getCharIndex(currentChar);
            const spaceReduction = precursorChar && this.compactablePrecursors[index].includes(precursorChar) ? 1 : 0;
            width += this.charWidths[index] - spaceReduction + CHAR_SPACING;
            precursorChar = currentChar;
        }
        if (text.length > 0) {
            width -= CHAR_SPACING;
        }
        return { width, height: this.charHeight };
    }
    drawTextWithOutline(ctx, text, xPos, yPos, textColor, outlineColor, align = 0) {
        for (let yOffset = yPos - 1; yOffset <= yPos + 1; yOffset++) {
            for (let xOffset = xPos - 1; xOffset <= xPos + 1; xOffset++) {
                if (xOffset !== xPos || yOffset !== yPos) {
                    this.drawText(ctx, text, xOffset, yOffset, outlineColor, align);
                }
            }
        }
        this.drawText(ctx, text, xPos, yPos, textColor, align);
    }
}
exports.BitmapFont = BitmapFont;


/***/ }),

/***/ "./lib/Camera.js":
/*!***********************!*\
  !*** ./lib/Camera.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
const Particles_1 = __webpack_require__(/*! ./Particles */ "./lib/Particles.js");
class Camera {
    constructor(scene, target, interpolationTime = 0.5, barHeight = 0.1) {
        this.scene = scene;
        this.target = target;
        this.barHeight = barHeight;
        this.x = 0;
        this.y = 0;
        this.zoom = 1;
        this.rotation = 0;
        this.focuses = [];
        this.time = 0;
        this.zoomingOut = false;
        this.currentBarTarget = 0;
        this.currentBarHeight = 0;
        if (interpolationTime > 1) {
            throw new Error("Camera interpolation time may not exceed 1");
        }
        this.interpolationTime = interpolationTime / 2;
        if (util_1.isDev()) {
            console.log("Dev mode, press “Tab” to zoom out & click somewhere to teleport there.");
            document.addEventListener("keydown", this.handleKeyDown.bind(this));
            document.addEventListener("keyup", this.handleKeyUp.bind(this));
            this.scene.game.canvas.addEventListener("click", this.handleClick.bind(this));
        }
        this.currentBarTarget = 0;
        this.currentBarHeight = 0;
        this.x = target.x;
        this.y = target.y;
    }
    setBounds(bounds) {
        this.bounds = bounds;
    }
    getBounds() {
        return this.bounds;
    }
    handleKeyDown(e) {
        if (e.key === "Tab") {
            if (!e.repeat) {
                this.zoomingOut = true;
            }
            e.stopPropagation();
            e.preventDefault();
        }
    }
    handleKeyUp(e) {
        if (e.key === "Tab") {
            this.zoomingOut = false;
            e.stopPropagation();
            e.preventDefault();
        }
    }
    handleClick(e) {
        if (this.zoomingOut) {
            const rect = this.scene.game.canvas.getBoundingClientRect();
            const cx = e.clientX - rect.x, cy = e.clientY - rect.y;
            const px = cx / rect.width, py = cy / rect.height;
            const worldRect = this.getVisibleRect();
            const tx = worldRect.x + px * worldRect.width, ty = worldRect.y + (1 - py) * worldRect.height;
            // Teleport player
            this.scene.player.x = tx;
            this.scene.player.y = ty;
            this.scene.player.setVelocity(0, 0);
            this.zoomingOut = false;
        }
    }
    getVisibleRect(x = this.x, y = this.y) {
        const cnv = this.scene.game.canvas;
        const cw = cnv.width;
        const ch = cnv.height;
        const offx = cw / 2 / this.zoom;
        const offy = ch / 2 / this.zoom;
        return {
            x: x - offx,
            y: y - offy,
            width: offx * 2,
            height: offy * 2
        };
    }
    isPointVisible(x, y, radius = 0) {
        const visibleRect = this.getVisibleRect();
        return (x >= visibleRect.x - radius
            && y >= visibleRect.y - radius
            && x <= visibleRect.x + visibleRect.width + radius
            && y <= visibleRect.y + visibleRect.height + radius);
    }
    setCinematicBar(target) {
        this.currentBarTarget = target;
    }
    getBaseCameraTarget() {
        // Base position always on target (player)
        let xTarget = this.target.x;
        let yTarget = this.target.y + 30;
        if (this.bounds) {
            const targetVisibleRect = this.getVisibleRect(xTarget, yTarget);
            const overBounds = {
                left: (targetVisibleRect.x < this.bounds.x),
                right: (targetVisibleRect.x + targetVisibleRect.width) > (this.bounds.x + this.bounds.width),
                top: (targetVisibleRect.y + targetVisibleRect.height) > this.bounds.y,
                bottom: targetVisibleRect.y < (this.bounds.y - this.bounds.height)
            };
            // Bound clip left / right
            if (targetVisibleRect.width >= this.bounds.width) {
                const visibleCenterX = targetVisibleRect.x + targetVisibleRect.width / 2;
                const boundCenterX = this.bounds.x + this.bounds.width / 2;
                const diff = boundCenterX - visibleCenterX;
                xTarget += diff;
            }
            else if (overBounds.left) {
                const diff = this.bounds.x - targetVisibleRect.x;
                xTarget += diff;
            }
            else if (overBounds.right) {
                const diff = (this.bounds.x + this.bounds.width) - (targetVisibleRect.x + targetVisibleRect.width);
                xTarget += diff;
            }
            // Bound clip top / bottom
            if (targetVisibleRect.height >= this.bounds.height) {
                const visibleCenterY = (targetVisibleRect.y + targetVisibleRect.height) - targetVisibleRect.height / 2;
                const boundCenterY = this.bounds.y - this.bounds.height / 2;
                const diff = boundCenterY - visibleCenterY;
                yTarget += diff;
            }
            else if (overBounds.top) {
                const diff = this.bounds.y - (targetVisibleRect.y + targetVisibleRect.height);
                yTarget += diff;
            }
            else if (overBounds.bottom) {
                const diff = (this.bounds.y - this.bounds.height) - targetVisibleRect.y;
                yTarget += diff;
            }
        }
        return {
            x: xTarget,
            y: yTarget
        };
    }
    update(dt, time) {
        this.time = time;
        // Base position always on target (player)
        const baseCamTarget = this.getBaseCameraTarget();
        this.x = baseCamTarget.x;
        this.y = baseCamTarget.y;
        // Cam Shake during apocalypse
        if (this.scene.fire.isAngry() || this.scene.apocalypse) {
            this.applyApocalypticShake(this.scene.fire);
        }
        this.zoom = this.zoomingOut ? 0.2 : 1;
        this.rotation = 0;
        // On top of that, apply cam focus(es)
        for (const focus of this.focuses) {
            this.updateAndApplyFocus(focus);
        }
        // Drop any focus that is done
        this.focuses = this.focuses.filter(f => !f.dead);
        // Update bar target towards goal
        this.currentBarHeight = util_1.shiftValue(this.currentBarHeight, this.currentBarTarget, dt * 1.5);
        // Reset bar to vanish automatically if not continuously set to 1
        this.currentBarTarget = 0;
    }
    applyApocalypticShake(shakeSource) {
        const dx = this.x - shakeSource.x, dy = this.y - shakeSource.y;
        const dis = Math.sqrt(dx * dx + dy * dy);
        const maxDis = 200;
        if (dis < maxDis) {
            const intensity = (shakeSource.intensity - 5) / 15;
            if (intensity > 0) {
                const shake = 5 * intensity * (1 - dis / maxDis) * (this.scene.player.playerConversation ? 0.5 : 1);
                this.x += util_1.rnd(-1, 1) * shake;
                this.y += util_1.rnd(-1, 1) * shake;
            }
        }
    }
    /**
     * Returns true if cam target (player) currently has full attention, or is showing something else for the moment.
     */
    isOnTarget() {
        return this.focuses.length === 0;
    }
    /**
     * Returns strength of camera focus on something other than the player. E.g. when camera focuses on some place to
     * show the player, the focus force will be between 0 and 1 during interpolation and exactly 1 while fully focusing
     * on that spot. This e.g. can be used for cinematic bars at top and bottom, scaling their height.
     */
    getFocusForce() {
        return this.focuses.reduce((a, b) => Math.max(a, b.force), 0);
    }
    applyTransform(ctx) {
        ctx.scale(this.zoom, this.zoom);
        ctx.rotate(this.rotation);
        ctx.translate(-this.x, this.y);
    }
    focusOn(duration, x, y, zoom = 1, rotation = 0, curve = Particles_1.valueCurves.cos(this.interpolationTime)) {
        const focus = {
            x,
            y,
            duration,
            zoom,
            rotation,
            startTime: this.time,
            endTime: this.time + duration,
            progress: 0,
            dead: false,
            force: 0,
            curve
        };
        this.focuses.push(focus);
        return new Promise((resolve, reject) => {
            focus.resolve = resolve;
            this.updateAndApplyFocus(focus);
        });
    }
    updateAndApplyFocus(focus) {
        focus.progress = util_1.clamp((this.time - focus.startTime) / focus.duration, 0, 1);
        focus.dead = (focus.progress >= 1);
        if (!focus.dead) {
            // Fade in and out of focus using force lerping from 0 to 1 and back to 0 over time
            const force = focus.force = focus.curve.get(focus.progress);
            // Apply to camera state
            const f1 = 1 - force;
            this.x = f1 * this.x + force * focus.x;
            this.y = f1 * this.y + force * focus.y;
            const originalSize = 1 / this.zoom, targetSize = 1 / focus.zoom;
            const currentSize = f1 * originalSize + force * targetSize;
            this.zoom = 1 / currentSize;
            this.rotation = f1 * this.rotation + force * focus.rotation;
        }
        else {
            if (focus.resolve) {
                focus.resolve();
                focus.resolve = undefined;
            }
        }
    }
    addCinematicBarsToRenderer(force = this.getFocusForce()) {
        force = Math.max(force, this.getFocusForce(), this.currentBarHeight);
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.BLACK_BARS,
            layer: Renderer_1.RenderingLayer.BLACK_BARS,
            color: "black",
            height: this.barHeight,
            force
        });
    }
    drawBars(ctx, force = this.getFocusForce()) {
        force = Math.max(force, this.getFocusForce(), this.currentBarHeight);
        ctx.save();
        ctx.fillStyle = "black";
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        const f = 0.5 - 0.5 * Math.cos(Math.PI * force);
        const h = ctx.canvas.height * this.barHeight * f;
        ctx.fillRect(0, 0, ctx.canvas.width, h);
        ctx.fillRect(0, ctx.canvas.height - h, ctx.canvas.width, h);
        ctx.restore();
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "./lib/Campaign.js":
/*!*************************!*\
  !*** ./lib/Campaign.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaign = exports.VoiceAsset = exports.CharacterAsset = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const caveman1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/caveman1.dialog.json */ "./assets/dialog/caveman1.dialog.json"));
const caveman2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/caveman2.dialog.json */ "./assets/dialog/caveman2.dialog.json"));
const Conversation_1 = __webpack_require__(/*! ./Conversation */ "./lib/Conversation.js");
const Face_1 = __webpack_require__(/*! ./Face */ "./lib/Face.js");
const fire0_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/fire0.dialog.json */ "./assets/dialog/fire0.dialog.json"));
const fire1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/fire1.dialog.json */ "./assets/dialog/fire1.dialog.json"));
const fire2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/fire2.dialog.json */ "./assets/dialog/fire2.dialog.json"));
const fire3_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/fire3.dialog.json */ "./assets/dialog/fire3.dialog.json"));
const fire4_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/fire4.dialog.json */ "./assets/dialog/fire4.dialog.json"));
const flameboy1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/flameboy1.dialog.json */ "./assets/dialog/flameboy1.dialog.json"));
const flameboy2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/flameboy2.dialog.json */ "./assets/dialog/flameboy2.dialog.json"));
const flameboy3_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/flameboy3.dialog.json */ "./assets/dialog/flameboy3.dialog.json"));
const flameboy4_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/flameboy4.dialog.json */ "./assets/dialog/flameboy4.dialog.json"));
const powershiba2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/powershiba2.dialog.json */ "./assets/dialog/powershiba2.dialog.json"));
const Quests_1 = __webpack_require__(/*! ./Quests */ "./lib/Quests.js");
const seed1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/seed1.dialog.json */ "./assets/dialog/seed1.dialog.json"));
const shadowpresence1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/shadowpresence1.dialog.json */ "./assets/dialog/shadowpresence1.dialog.json"));
const shiba1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/shiba1.dialog.json */ "./assets/dialog/shiba1.dialog.json"));
const shiba2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/shiba2.dialog.json */ "./assets/dialog/shiba2.dialog.json"));
const shiba3_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/shiba3.dialog.json */ "./assets/dialog/shiba3.dialog.json"));
const shiba4_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/shiba4.dialog.json */ "./assets/dialog/shiba4.dialog.json"));
const shiba5_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/shiba5.dialog.json */ "./assets/dialog/shiba5.dialog.json"));
const Signal_1 = __webpack_require__(/*! ./Signal */ "./lib/Signal.js");
const spider1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/spider1.dialog.json */ "./assets/dialog/spider1.dialog.json"));
const stone1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/stone1.dialog.json */ "./assets/dialog/stone1.dialog.json"));
const stone2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/stone2.dialog.json */ "./assets/dialog/stone2.dialog.json"));
const stonedisciple1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/stonedisciple1.dialog.json */ "./assets/dialog/stonedisciple1.dialog.json"));
const stonedisciple2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/stonedisciple2.dialog.json */ "./assets/dialog/stonedisciple2.dialog.json"));
const tree0_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/tree0.dialog.json */ "./assets/dialog/tree0.dialog.json"));
const tree1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/tree1.dialog.json */ "./assets/dialog/tree1.dialog.json"));
const tree2_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/tree2.dialog.json */ "./assets/dialog/tree2.dialog.json"));
const Particles_1 = __webpack_require__(/*! ./Particles */ "./lib/Particles.js");
const wing1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/dialog/wing1.dialog.json */ "./assets/dialog/wing1.dialog.json"));
const allDialogs = {
    "caveman1": caveman1_dialog_json_1.default,
    "caveman2": caveman2_dialog_json_1.default,
    "fire0": fire0_dialog_json_1.default,
    "fire1": fire1_dialog_json_1.default,
    "fire2": fire2_dialog_json_1.default,
    "fire3": fire3_dialog_json_1.default,
    "fire4": fire4_dialog_json_1.default,
    "stone1": stone1_dialog_json_1.default,
    "stone2": stone2_dialog_json_1.default,
    "stonedisciple1": stonedisciple1_dialog_json_1.default,
    "stonedisciple2": stonedisciple2_dialog_json_1.default,
    "seed1": seed1_dialog_json_1.default,
    "tree0": tree0_dialog_json_1.default,
    "tree1": tree1_dialog_json_1.default,
    "tree2": tree2_dialog_json_1.default,
    "shiba1": shiba1_dialog_json_1.default,
    "shiba2": shiba2_dialog_json_1.default,
    "shiba3": shiba3_dialog_json_1.default,
    "shiba4": shiba4_dialog_json_1.default,
    "shiba5": shiba5_dialog_json_1.default,
    "powershiba2": powershiba2_dialog_json_1.default,
    "spider1": spider1_dialog_json_1.default,
    "flameboy1": flameboy1_dialog_json_1.default,
    "flameboy2": flameboy2_dialog_json_1.default,
    "flameboy3": flameboy3_dialog_json_1.default,
    "flameboy4": flameboy4_dialog_json_1.default,
    "wing1": wing1_dialog_json_1.default,
    "shadowpresence1": shadowpresence1_dialog_json_1.default,
};
var CharacterAsset;
(function (CharacterAsset) {
    CharacterAsset[CharacterAsset["FEMALE"] = 0] = "FEMALE";
    CharacterAsset[CharacterAsset["MALE"] = 1] = "MALE";
    CharacterAsset[CharacterAsset["PATIENT"] = 2] = "PATIENT";
})(CharacterAsset = exports.CharacterAsset || (exports.CharacterAsset = {}));
var VoiceAsset;
(function (VoiceAsset) {
    VoiceAsset[VoiceAsset["FEMALE"] = 0] = "FEMALE";
    VoiceAsset[VoiceAsset["MALE"] = 1] = "MALE";
})(VoiceAsset = exports.VoiceAsset || (exports.VoiceAsset = {}));
class Campaign {
    constructor(game) {
        this.game = game;
        this.onStatesChanged = new Signal_1.Signal();
        this.states = ["start"];
        this.quests = [
            new Quests_1.QuestA(this),
            new Quests_1.QuestB(this),
            new Quests_1.QuestC(this),
            new Quests_1.QuestD(this),
            new Quests_1.QuestE(this)
        ];
        this.selectedCharacter = CharacterAsset.FEMALE;
        this.selectedVoice = VoiceAsset.FEMALE;
    }
    getQuest(key) {
        const ending = this.quests.find(ending => ending.key === key);
        if (!ending)
            throw new Error(`Cannot find quest with key ${key}`);
        return ending;
    }
    toggleCharacterAsset() {
        this.selectedCharacter = this.selectedCharacter === CharacterAsset.MALE ? CharacterAsset.FEMALE : CharacterAsset.MALE;
    }
    toggleVoiceAsset() {
        this.selectedVoice = this.selectedVoice === VoiceAsset.MALE ? VoiceAsset.FEMALE : VoiceAsset.MALE;
    }
    /**
     * Init campaign. Assign Game Scene and enable all initial dialog trees
     * @param gameScene Game Scene
     */
    begin(gameScene) {
        this.gameScene = gameScene;
        // Rest quest progress
        this.quests.forEach(q => {
            q.reset();
        });
        this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.JUST_ARRIVED);
        // Setup initial NPC dialogs
        this.runAction("enable", null, ["caveman", "caveman1"]);
        this.runAction("enable", null, ["fire", "fire0"]);
        this.runAction("enable", null, ["tree", "tree0"]);
        this.runAction("enable", null, ["stone", "stone1"]);
        this.runAction("enable", null, ["stonedisciple", "stonedisciple1"]);
        this.runAction("enable", null, ["flameboy", "flameboy1"]);
        this.runAction("enable", null, ["wing", "wing1"]);
        this.runAction("enable", null, ["spider", "spider1"]);
        this.runAction("enable", null, ["shadowpresence", "shadowpresence1"]);
    }
    hasState(state) {
        return this.states.includes(state);
    }
    setStates(states) {
        this.states = states;
        this.onStatesChanged.emit(this.states);
    }
    removeState(state) {
        if (this.hasState(state)) {
            this.states.splice(this.states.indexOf(state), 1);
            this.onStatesChanged.emit(this.states);
        }
    }
    addState(state) {
        if (!this.hasState(state)) {
            this.states.push(state);
            this.onStatesChanged.emit(this.states);
        }
    }
    /**
     * Run action is only allowed when active scene is GameScene
     * @param action - action string
     * @param npc    - targeted npc
     * @param params - params consisting of string array
     */
    runAction(action, npc, params = []) {
        var _a, _b, _c, _d, _e;
        if (this.gameScene) {
            switch (action) {
                case "angry":
                    (_a = npc === null || npc === void 0 ? void 0 : npc.face) === null || _a === void 0 ? void 0 : _a.setMode(Face_1.FaceModes.ANGRY);
                    break;
                case "neutral":
                    (_b = npc === null || npc === void 0 ? void 0 : npc.face) === null || _b === void 0 ? void 0 : _b.setMode(Face_1.FaceModes.NEUTRAL);
                    break;
                case "bored":
                    (_c = npc === null || npc === void 0 ? void 0 : npc.face) === null || _c === void 0 ? void 0 : _c.setMode(Face_1.FaceModes.BORED);
                    break;
                case "amused":
                    (_d = npc === null || npc === void 0 ? void 0 : npc.face) === null || _d === void 0 ? void 0 : _d.setMode(Face_1.FaceModes.AMUSED);
                    break;
                case "sad":
                    (_e = npc === null || npc === void 0 ? void 0 : npc.face) === null || _e === void 0 ? void 0 : _e.setMode(Face_1.FaceModes.SAD);
                    break;
                case "zoomin":
                    this.gameScene.camera.zoom += 1;
                    break;
                case "zoomout":
                    this.gameScene.camera.zoom -= 1;
                    break;
                case "treezoom":
                    const forestPointer = this.gameScene.pointsOfInterest.find(poi => poi.name === "forest");
                    if (forestPointer) {
                        this.gameScene.camera.focusOn(8, forestPointer.x, forestPointer.y, 1, 0, Particles_1.valueCurves.cos(0.35));
                    }
                    break;
                case "mountainzoom":
                    const mountainPointer = this.gameScene.pointsOfInterest.find(poi => poi.name === "mountain");
                    if (mountainPointer) {
                        this.gameScene.camera.focusOn(8, mountainPointer.x, mountainPointer.y, 1, 0, Particles_1.valueCurves.cos(0.35));
                    }
                    break;
                case "riverzoom":
                    const riverPointer = this.gameScene.pointsOfInterest.find(poi => poi.name === "river");
                    if (riverPointer) {
                        this.gameScene.camera.focusOn(8, riverPointer.x, riverPointer.y, 1, 0, Particles_1.valueCurves.cos(0.35));
                    }
                    break;
                case "crazyzoom":
                    this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.APOCALYPSE_STARTED);
                    const duration = 12;
                    this.gameScene.camera.focusOn(duration, this.gameScene.fire.x, this.gameScene.fire.y + 15, 8, -2 * Math.PI, Particles_1.valueCurves.cubic).then(() => this.gameScene.beginApocalypse());
                    this.gameScene.fire.conversation = null;
                    this.gameScene.fireFuryEndTime = this.gameScene.gameTime + duration + 8;
                    break;
                case "friendshipEnding":
                    this.gameScene.beginFriendshipEnding();
                    break;
                case "activatefireportal":
                    this.gameScene.exitPortal.activate();
                    this.gameScene.flameboy.nextState();
                    break;
                case "talkedtofire":
                    this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.TALKED_TO_FIRE);
                    break;
                case "giveWoodToFlameboy":
                    Conversation_1.Conversation.setGlobal("gaveWoodToFlameboy", "true");
                    this.gameScene.setGateDisabled("exitportaldoor_1", false);
                    this.gameScene.player.removeMultiJump();
                    this.gameScene.removeGameObject(this.gameScene.fire);
                    this.gameScene.removeGameObject(this.gameScene.shiba);
                    this.gameScene.removeGameObject(this.gameScene.powerShiba);
                    this.gameScene.removeGameObject(this.gameScene.bird);
                    this.gameScene.removeGameObject(this.gameScene.shadowPresence);
                    this.gameScene.removeGameObject(this.gameScene.tree);
                    this.gameScene.removeGameObject(this.gameScene.wing);
                    this.gameScene.removeGameObject(this.gameScene.mimic);
                    this.gameScene.removeGameObject(this.gameScene.stone);
                    this.gameScene.removeGameObject(this.gameScene.stoneDisciple);
                    this.runAction("enable", null, ["flameboy", "flameboy3"]);
                    break;
                case "giveBone":
                    Conversation_1.Conversation.setGlobal("gaveBoneToPowerShiba", "true");
                    this.runAction("enable", null, ["shiba", "shiba3"]);
                    this.runAction("enable", null, ["powershiba", "powershiba2"]);
                    break;
                case "shibaNextState":
                    this.gameScene.shiba.nextState();
                    break;
                case "talkedtotree":
                    this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.TALKED_TO_TREE);
                    break;
                case "gotFireQuest":
                    this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_QUEST_FROM_FIRE);
                    Conversation_1.Conversation.setGlobal("gotFireQuest", "true");
                    this.runAction("enable", null, ["tree", "tree1"]);
                    break;
                case "endgameA":
                    this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.BEAT_GAME);
                    this.getQuest(Quests_1.QuestKey.A).finish();
                    this.gameScene.fire.conversation = null;
                    this.gameScene.gameOver();
                    break;
                case "endgameB":
                    this.getQuest(Quests_1.QuestKey.B).finish();
                    this.gameScene.fire.conversation = null;
                    this.gameScene.gameOver();
                    break;
                case "endgameC":
                    this.getQuest(Quests_1.QuestKey.C).finish();
                    this.gameScene.caveman.conversation = null;
                    this.gameScene.gameOver();
                    break;
                case "game":
                    this.addState(params[0]);
                    break;
                case "enableRunning":
                    this.gameScene.player.enableRunning();
                    break;
                case "doublejump":
                    this.gameScene.player.enableDoubleJump();
                    break;
                case "multijump":
                    this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_MULTIJUMP);
                    this.gameScene.player.enableMultiJump();
                    break;
                case "friendship":
                    this.gameScene.player.enableFriendship();
                    break;
                case "spawnseed":
                    this.gameScene.tree.spawnSeed();
                    break;
                case "spawnwood":
                    this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.TREE_DROPPED_WOOD);
                    this.gameScene.tree.spawnWood();
                    break;
                case "talkedToStone":
                    if (this.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() === Quests_1.QuestATrigger.PLANTED_SEED) {
                        this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.TALKED_TO_STONE);
                    }
                    break;
                case "pickupstone":
                    this.gameScene.stone.pickUp();
                    break;
                case "learnraindance":
                    this.gameScene.player.enableRainDance();
                    break;
                case "talkedToFireWithWood":
                    if (this.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() === Quests_1.QuestATrigger.GOT_WOOD) {
                        this.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.TALKED_TO_FIRE_WITH_WOOD);
                    }
                    break;
                case "dance":
                    setTimeout(() => {
                        this.gameScene.player.startDance(+params[0] || 1);
                    }, 500);
                    break;
                case "wakeupchest":
                    this.gameScene.mimic.nextState();
                    break;
                case "petDoggo":
                    this.gameScene.beginPetEnding();
                    break;
                case "lookThroughWindow":
                    this.gameScene.beginWindowEnding();
                    break;
                case "enable":
                    const char = params[0], dialogName = params[1];
                    const npcMap = {
                        "fire": this.gameScene.fire,
                        "stone": this.gameScene.stone,
                        "stonedisciple": this.gameScene.stoneDisciple,
                        "tree": this.gameScene.tree,
                        "seed": this.gameScene.seed,
                        "flameboy": this.gameScene.flameboy,
                        "wing": this.gameScene.wing,
                        "caveman": this.gameScene.caveman,
                        "shadowpresence": this.gameScene.shadowPresence,
                        "shiba": this.gameScene.shiba,
                        "powershiba": this.gameScene.powerShiba
                    };
                    const targetNpc = npcMap[char];
                    const dialog = allDialogs[dialogName];
                    if (targetNpc && dialog) {
                        targetNpc.conversation = new Conversation_1.Conversation(dialog, targetNpc);
                    }
                    break;
                case "disable":
                    const char1 = params[0];
                    const npcMap1 = {
                        "fire": this.gameScene.fire,
                        "stone": this.gameScene.stone,
                        "stonedisciple": this.gameScene.stoneDisciple,
                        "tree": this.gameScene.tree,
                        "seed": this.gameScene.seed,
                        "flameboy": this.gameScene.flameboy,
                        "wing": this.gameScene.wing,
                        "caveman": this.gameScene.caveman,
                        "shadowpresence": this.gameScene.shadowPresence,
                        "shiba": this.gameScene.shiba,
                        "powershiba": this.gameScene.powerShiba
                    };
                    const targetNpc1 = npcMap1[char1];
                    if (targetNpc1) {
                        targetNpc1.conversation = null;
                    }
                    break;
            }
        }
    }
}
exports.Campaign = Campaign;


/***/ }),

/***/ "./lib/ColorGradient.js":
/*!******************************!*\
  !*** ./lib/ColorGradient.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorGradient = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const graphics_1 = __webpack_require__(/*! ./graphics */ "./lib/graphics.js");
class ColorGradient {
    constructor(mapping) {
        this.mapping = mapping;
    }
    get(p) {
        return this.mapping(util_1.clamp(p, 0, 0.9999999999));
    }
    getCss(p) {
        const color = this.get(p);
        return `rgba(${color[0]},${color[1]},${color[2]},${color[3]})`;
    }
    static fromTable(table) {
        const items = table.length;
        const grad = new ColorGradient((v) => {
            const index = Math.floor(v * items);
            return table[index];
        });
        return grad;
    }
    static fromImage(img) {
        const data = graphics_1.getImageData(img);
        const pixels = data.data;
        const w = img.naturalWidth, h = img.naturalHeight;
        let p = 0;
        if (h === 1) {
            // mapping each value to single unique color
            const colors = [];
            for (let x = 0; x < w; x++) {
                colors.push([pixels[p++], pixels[p++], pixels[p++], pixels[p++]]);
            }
            return ColorGradient.fromTable(colors);
        }
        else {
            // mapping each value to randomly selected color of given set
            const colors = [];
            for (let x = 0; x < w; x++) {
                colors[x] = [];
                for (let y = 0; y < h; y++) {
                    const p = 4 * (x + w * y);
                    colors[x].push([pixels[p], pixels[p + 1], pixels[p + 2], pixels[p + 3]]);
                }
            }
            const items = w;
            return new ColorGradient((v) => {
                const index = Math.floor(v * items);
                return util_1.rndItem(colors[index]);
            });
        }
    }
}
exports.ColorGradient = ColorGradient;


/***/ }),

/***/ "./lib/Conversation.js":
/*!*****************************!*\
  !*** ./lib/Conversation.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationLine = exports.Conversation = void 0;
// Actions that shall be executed before an NPC talks, not after
const earlyActions = [
    "angry",
    "sad",
    "amused",
    "neutral",
    "bored"
];
class Conversation {
    constructor(json, npc) {
        this.npc = npc;
        this.stateIndex = 0;
        this.endConversation = false;
        this.localVariables = {};
        this.skippedLines = 0; // help variable to make goBack() work with skipped dialog lines due to conditions
        this.states = Object.keys(json);
        this.data = {};
        for (const state of this.states) {
            this.data[state] = json[state].map(line => new ConversationLine(line, this));
        }
        this.setState("entry");
        this.endConversation = false;
    }
    setState(name = "entry") {
        if (!this.states.includes(name)) {
            throw new Error("State name " + name + " does not exist in conversation");
        }
        this.state = name;
        this.stateIndex = 0;
    }
    getNextInteraction() {
        if (this.endConversation) {
            this.endConversation = false;
            return null;
        }
        this.skippedLines = 0;
        const result = {
            npcLine: null,
            options: [],
            spoiledOptions: []
        };
        // Does NPC speak?
        const line = this.getNextLine();
        if (line == null) {
            // Conversation is over without changing state or anything
            return null;
        }
        else {
            if (line.isNpc) {
                result.npcLine = line;
            }
            else {
                this.goBack(1 + this.skippedLines);
            }
        }
        // Does Player react?
        this.skippedLines = 0;
        let option = this.getNextLine();
        while (option && !option.isNpc) {
            // TODO: Identify spoiled options (that don't lead to anything new for the player) and
            //       sort accordingly.
            result.options.push(option);
            this.skippedLines = 0;
            option = this.getNextLine();
        }
        if (option && !option.isNpc) {
            this.goBack();
        }
        else {
            this.goBack(1 + this.skippedLines);
        }
        this.skippedLines = 0;
        return result;
    }
    runAction(action) {
        switch (action[0]) {
            case "end":
                this.endConversation = true;
                break;
            case "set":
                this.setVariable(action[1], action[2]);
                break;
            default:
                this.npc.scene.game.campaign.runAction(action[0], this.npc, action.slice(1));
        }
    }
    setVariable(name = "", value = "true") {
        if (name.startsWith("$")) {
            // Global variable
            Conversation.globalVariables[name] = value;
        }
        else {
            // Local variable
            this.localVariables[name] = value;
        }
    }
    static setGlobal(varname, value = "true") {
        if (!varname.startsWith("$")) {
            varname = "$" + varname;
        }
        Conversation.globalVariables[varname] = value;
    }
    static getGlobals() {
        return Conversation.globalVariables;
    }
    static resetGlobals() {
        Conversation.globalVariables = {};
    }
    getVariable(name) {
        if (name.startsWith("$")) {
            return Conversation.globalVariables[name];
        }
        else {
            return this.localVariables[name];
        }
    }
    goBack(steps = 1) {
        if (steps <= 0) {
            return;
        }
        this.stateIndex -= steps;
        this.skippedLines = 0;
    }
    getNextLine(ignoreDisabled = false) {
        if (this.stateIndex >= this.data[this.state].length) {
            return null;
        }
        const line = this.data[this.state][this.stateIndex++];
        // console.log(line.condition);
        if (line.condition && (!ignoreDisabled && !this.testCondition(line.condition))) {
            this.skippedLines++;
            return this.getNextLine(ignoreDisabled);
        }
        return line;
    }
    testCondition(condition) {
        const self = this;
        const subconditions = condition.split(",");
        const result = subconditions.some(evaluateFragment);
        return result;
        function evaluateFragment(s) {
            if (s.startsWith("not ")) {
                return !evaluateFragment(s.substr(4));
            }
            else {
                if (s.includes("!=")) {
                    const values = s.split("!=").map(s => s.trim());
                    return self.getVariable(values[0]) !== values[1];
                }
                else if (s.includes("=")) {
                    const values = s.split("=").map(s => s.trim());
                    return self.getVariable(values[0]) === values[1];
                }
                else if (s.includes(">")) {
                    const values = s.split(">").map(s => s.trim());
                    return parseFloat(self.getVariable(values[0])) > parseFloat(values[1]);
                }
                else if (s.includes("<")) {
                    const values = s.split("<").map(s => s.trim());
                    return parseFloat(self.getVariable(values[0])) < parseFloat(values[1]);
                }
            }
            // Variable name only
            const v = self.getVariable(s.trim());
            return v != null && v !== "" && v !== "0" && v !== "false";
        }
    }
    hasEnded() {
        return this.endConversation;
    }
}
exports.Conversation = Conversation;
Conversation.globalVariables = {};
const MAX_CHARS_PER_LINE = 50;
class ConversationLine {
    constructor(full, conversation) {
        this.full = full;
        this.conversation = conversation;
        this.visited = false;
        this.isNpc = !full.startsWith("►");
        this.line = ConversationLine.extractText(full, this.isNpc);
        this.condition = ConversationLine.extractCondition(full);
        this.targetState = ConversationLine.extractState(full);
        this.actions = ConversationLine.extractActions(full);
        this.visited = false;
    }
    executeBeforeLine() {
        if (this.actions.length > 0) {
            for (const action of this.actions) {
                if (this.isEarlyAction(action[0])) {
                    this.conversation.runAction(action);
                }
            }
        }
    }
    execute() {
        this.visited = true;
        if (this.targetState != null) {
            this.conversation.setState(this.targetState);
        }
        if (this.actions.length > 0) {
            for (const action of this.actions) {
                if (!this.isEarlyAction(action[0])) {
                    this.conversation.runAction(action);
                }
            }
        }
    }
    isEarlyAction(s) {
        return earlyActions.includes(s);
    }
    wasVisited() {
        return this.visited;
    }
    static extractText(line, autoWrap = false) {
        // Remove player option sign
        if (line.startsWith(ConversationLine.OPTION_MARKER)) {
            line = line.substr(1);
        }
        // Remove conditions
        if (line.trim().startsWith("[") && line.includes("]")) {
            line = line.substr(line.indexOf("]") + 1).trim();
        }
        // Remove actions and state changes
        const atPos = line.indexOf("@");
        const exclPos = line.search(/\![a-zA-Z]/);
        if (atPos >= 0 || exclPos >= 0) {
            const minPos = (atPos >= 0 && exclPos >= 0) ? Math.min(atPos, exclPos) : (atPos >= 0) ? atPos : exclPos;
            line = line.substr(0, minPos).trim();
        }
        // Auto wrap to some character count
        if (autoWrap) {
            return ConversationLine.wrapString(line, MAX_CHARS_PER_LINE);
        }
        return line;
    }
    static extractCondition(line) {
        const conditionString = line.match(/\[[a-zA-Z0-9\_\<\>\!\=\$ ]+\]/g);
        if (conditionString && conditionString[0]) {
            return conditionString[0].substr(1, conditionString[0].length - 2);
        }
        return null;
    }
    static extractState(line) {
        const stateChanges = line.match(/(@[a-zA-Z0-9\_]+)/g);
        if (stateChanges && stateChanges.length > 0) {
            const stateName = stateChanges[0].substr(1);
            return stateName;
        }
        return null;
    }
    static extractActions(line) {
        let actions = line.match(/(\![a-zA-Z][a-zA-Z0-9\_\$ ]*)+/g);
        const result = [];
        if (actions) {
            actions = actions.join(" ").split("!").map(action => action.trim()).filter(s => s.length > 0);
            for (const action of actions) {
                const segments = action.split(" ");
                result.push(segments);
            }
        }
        return result;
    }
    static wrapString(s, charsPerLine) {
        let currentLength = 0, lastSpace = -1;
        for (let i = 0; i < s.length; i++) {
            const char = s[i];
            if (char === "\n") {
                // New line
                currentLength = 0;
            }
            else {
                if (char === " ") {
                    lastSpace = i;
                }
                currentLength++;
                if (currentLength >= charsPerLine) {
                    if (lastSpace >= 0) {
                        // Add cut at last space
                        s = s.substr(0, lastSpace) + "\n" + s.substr(lastSpace + 1);
                        currentLength = i - lastSpace;
                        lastSpace = -1;
                    }
                    else {
                        // Cut mid-word
                        s = s.substr(0, i + 1) + "\n" + s.substr(i + 1);
                        currentLength = 0;
                    }
                }
            }
        }
        return s;
    }
}
exports.ConversationLine = ConversationLine;
ConversationLine.OPTION_MARKER = "►";


/***/ }),

/***/ "./lib/ConversationProxy.js":
/*!**********************************!*\
  !*** ./lib/ConversationProxy.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ConversationProxy = void 0;
const Conversation_1 = __webpack_require__(/*! ./Conversation */ "./lib/Conversation.js");
const NPC_1 = __webpack_require__(/*! ./entities/NPC */ "./lib/entities/NPC.js");
class ConversationProxy extends NPC_1.NPC {
    constructor(scene, x, y, properties) {
        super(scene, x, y, 16, 16);
        this.conversation = this.generateConversation(this.prepareContent(properties.content));
        this.scene.addGameObject(this);
    }
    prepareContent(content) {
        if (!content) {
            return ["Nothing…"];
        }
        return content.split(":::");
    }
    generateConversation(lines) {
        const json = { "entry": [] };
        lines.forEach((line, index) => {
            if (index === lines.length - 1) {
                line += " @entry !end";
            }
            json.entry.push(line);
        });
        return new Conversation_1.Conversation(json, this);
    }
    draw(ctx) {
        if (this.scene.showBounds)
            this.drawBounds();
        this.speechBubble.draw(ctx);
    }
    update() {
        if (!this.hasActiveConversation()) {
            this.scene.removeGameObject(this);
        }
    }
}
exports.ConversationProxy = ConversationProxy;


/***/ }),

/***/ "./lib/Dance.js":
/*!**********************!*\
  !*** ./lib/Dance.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Dance = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ./Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const ControllerManager_1 = __webpack_require__(/*! ./input/ControllerManager */ "./lib/input/ControllerManager.js");
const GameScene_1 = __webpack_require__(/*! ./scenes/GameScene */ "./lib/scenes/GameScene.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ./Sound */ "./lib/Sound.js");
const Particles_1 = __webpack_require__(/*! ./Particles */ "./lib/Particles.js");
class Dance {
    constructor(scene, x, y, bpm = 128, keys = "", // can contain "1" or "2" for single keys, or "3" for both at once
    warmupBeats = 8, allowedMistakes = 3, timeTolerance = 0.75, withMusic = true, musicIndex = 1 // 0 tree-dance, 1 for raindance
    ) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.bpm = bpm;
        this.warmupBeats = warmupBeats;
        this.allowedMistakes = allowedMistakes;
        this.timeTolerance = timeTolerance;
        this.withMusic = withMusic;
        this.musicIndex = musicIndex;
        /** Progress time relative to startTime. So starts out negative during warmup. */
        this.progress = 0;
        this.currentKey = "";
        this.currentDistanceToIdealTime = 0;
        this.allKeys = ["1", "2"];
        this.mistakes = 0;
        this.lastMistake = 0;
        this.lastSuccess = 0;
        this.performance = [];
        this.currentIndex = 0;
        this.success = false;
        this.duration = keys.length;
        this.keys = [];
        this.performance = [];
        for (let i = 0; i < keys.length; i++) {
            const key = keys[i];
            this.keys[i] = key === " " ? "" : key === "3" ? "12" : key;
            this.performance[i] = {};
        }
        this.begin();
        this.alphaCurve = Particles_1.valueCurves.cos(0.15);
    }
    wasSuccessful() {
        return this.success;
    }
    hasStarted() {
        return this.progress > 0;
    }
    getTimeSinceLastMistake() {
        return this.progress - this.lastMistake;
    }
    getTimeSinceLastSuccess() {
        return this.progress - this.lastSuccess;
    }
    begin() {
        this.openTime = this.scene.gameTime;
        this.startTime = this.openTime + this.warmupBeats / this.bpm * 60;
        this.currentKey = "";
        this.currentDistanceToIdealTime = 0;
        this.mistakes = 0;
        this.lastMistake = -Infinity;
        this.lastSuccess = -Infinity;
        this.currentIndex = 0;
        this.performance = this.performance.map(() => ({}));
        this.success = false;
        Dance.raindance_music.stop();
        Dance.raindance_music.setVolume(0);
        Dance.treedance_music.stop();
        Dance.treedance_music.setVolume(0);
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    // Called by parent
    handleButtonDown(e) {
        if (!e.repeat && this.hasStarted()) {
            const key = e.isPlayerDance1 ? "1" : "2";
            if (this.allKeys.indexOf(key) >= 0) {
                if (this.currentKey.includes(key)) {
                    if (this.currentDistanceToIdealTime <= this.timeTolerance) {
                        this.keySuccess(key);
                        return;
                    }
                }
                const nxt = this.currentIndex + 1;
                if (this.keys[nxt] && this.keys[nxt].includes(key)) {
                    if (this.progress - (nxt + 0.5) < this.timeTolerance) {
                        this.keySuccess(key, nxt);
                        return;
                    }
                }
                this.keyFailure(key);
            }
        }
    }
    keySuccess(key, index = this.currentIndex) {
        for (const char of key) {
            if (index === this.currentIndex) {
                this.currentKey = this.currentKey.replace(char, "");
            }
            this.performance[index][char] = true;
        }
        if (index === this.currentIndex && this.currentKey.length === 0 || this.keys[index].length === 0) {
            this.lastSuccess = this.progress;
            Dance.successSound.stop();
        }
    }
    keyFailure(key) {
        if (!this.currentKey.includes(key)) {
            this.registerMistake();
            Dance.failSound.play();
        }
    }
    keyMissed(key) {
        if (this.performance[this.currentIndex]) {
            for (const char of key) {
                this.performance[this.currentIndex][char] = false;
            }
        }
        this.registerMistake();
    }
    registerMistake() {
        this.mistakes++;
        this.lastMistake = this.progress;
        Dance.failSound.play();
        if (this.mistakes > this.allowedMistakes) {
            this.loseGame();
        }
    }
    loseGame() {
        // Simply reset for now
        this.begin();
    }
    update() {
        const time = this.scene.gameTime - this.startTime;
        this.progress = time * this.bpm / 60;
        const prevIndex = this.currentIndex;
        this.currentIndex = Math.floor(this.progress);
        this.updateMusic();
        // Next key?
        if (this.currentIndex > prevIndex) {
            // Missed last one?
            if (this.currentKey.length > 0) {
                this.keyMissed(this.currentKey);
                this.currentKey = "";
                return false;
            }
            // Proceed
            this.currentKey = this.keys[this.currentIndex] || "";
            for (const char of this.currentKey) {
                if (this.performance[this.currentIndex] && this.performance[this.currentIndex][char]) {
                    this.currentKey = this.currentKey.replace(char, "");
                }
            }
        }
        if (this.progress >= this.duration) {
            // Done! Success! Yeah!
            this.success = true;
            this.resetMusic();
            return true;
        }
        if (this.currentKey) {
            this.currentDistanceToIdealTime = Math.abs(this.progress - (this.currentIndex + 0.5));
        }
        else {
            this.currentDistanceToIdealTime = 0;
        }
        return false;
    }
    updateMusic() {
        if (!this.withMusic) {
            return;
        }
        if (this.progress < 0 && !Dance.raindance_music.isPlaying()) {
            const fade = -this.progress / this.warmupBeats;
            this.scene.fadeActiveBackgroundTrack(fade);
        }
        else {
            // own music paused
            if (this.musicIndex === 0 && !Dance.treedance_music.isPlaying()) {
                Dance.treedance_music.setVolume(0.8);
                Dance.treedance_music.play();
                GameScene_1.GameScene.bgm1.setVolume(0);
                GameScene_1.GameScene.bgm2.setVolume(0);
            }
            if (this.musicIndex === 1 && !Dance.raindance_music.isPlaying()) {
                Dance.raindance_music.setVolume(0.8);
                Dance.raindance_music.play();
                GameScene_1.GameScene.bgm1.setVolume(0);
                GameScene_1.GameScene.bgm2.setVolume(0);
            }
        }
    }
    resetMusic() {
        Dance.raindance_music.stop();
        Dance.treedance_music.stop();
        this.scene.resetMusicVolumes();
    }
    addDanceToRenderQueue() {
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.DANCE,
            layer: Renderer_1.RenderingLayer.UI,
            dance: this
        });
    }
    draw(ctx) {
        const controller = ControllerManager_1.ControllerManager.getInstance().controllerSprite;
        ctx.save();
        ctx.translate(this.x, -this.y);
        // Key Bar
        const w = 100;
        const h = 18;
        const w2 = w / 2;
        const h2 = h / 2;
        ctx.drawImage(Dance.bar, Dance.bar.width / -2, 1 + Dance.bar.height / -2);
        // Feedback
        if (this.progress - this.lastMistake < 1) {
            ctx.fillStyle = "red";
            ctx.globalAlpha = (1 - this.progress + this.lastMistake) * 0.6;
            ctx.fillRect(-w2 + 2, -h2 + 1, w - 4, h);
        }
        if (this.progress - this.lastSuccess < 1) {
            ctx.fillStyle = "green";
            ctx.globalAlpha = (1 - this.progress + this.lastSuccess) * 0.1;
            ctx.fillRect(-w2 + 2, -h2 + 1, w - 4, h);
        }
        // Upcoming keys
        ctx.globalAlpha = 1;
        ctx.textAlign = "center";
        const sweetX = w2 - 16;
        const y1 = -8;
        const y2 = 1;
        ctx.fillStyle = "black";
        for (let i = Math.floor(this.progress) - 2; i < this.progress + 8; i++) {
            const keys = this.keys[i];
            if (keys) {
                const diff = i - this.progress;
                const x = sweetX - diff * 20 - 6;
                const xp = (x - (-w2)) / w;
                const alpha = this.alphaCurve.get(xp);
                ctx.globalAlpha = alpha;
                if (keys.includes("1")) {
                    ctx.strokeStyle = "#ff8010";
                    if (this.performance[i]["1"] != null) {
                        ctx.fillStyle = this.performance[i]["1"] ? "#70F070" : "#F06060";
                        ctx.fillRect(x - 4, y1, 9, 9);
                    }
                    else {
                        Dance.keys.drawTag(ctx, `${controller}-dance1`, x + Dance.keys.width / -2, y1);
                    }
                }
                if (keys.includes("2")) {
                    ctx.strokeStyle = "blue";
                    if (this.performance[i]["2"] != null) {
                        ctx.fillStyle = this.performance[i]["2"] ? "#70F070" : "#F06060";
                        ctx.fillRect(x - 4, y2, 9, 9);
                    }
                    else {
                        Dance.keys.drawTag(ctx, `${controller}-dance2`, x + Dance.keys.width / -2, y2);
                    }
                }
            }
        }
        // Sweet spot
        ctx.globalAlpha = 1;
        ctx.drawImage(Dance.indicator, sweetX - 8, 1 + Dance.indicator.height / -2);
        ctx.drawImage(Dance.indicator, sweetX + 4, 1 + Dance.indicator.height / -2);
        ctx.restore();
    }
}
tslib_1.__decorate([
    Assets_1.asset("sounds/dancing/success.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Dance, "successSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/dancing/fail.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Dance, "failSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/raindance.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Dance, "raindance_music", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/dancing_queen.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Dance, "treedance_music", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/dancing_ui_bar.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], Dance, "bar", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/dancing_ui_indicator.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], Dance, "indicator", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/dancing_ui_keys.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Dance, "keys", void 0);
exports.Dance = Dance;


/***/ }),

/***/ "./lib/DialoguePrompt.js":
/*!*******************************!*\
  !*** ./lib/DialoguePrompt.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DialoguePrompt = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ./Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
class DialoguePrompt {
    constructor(scene, x, y) {
        this.timeAlive = 0;
        this.floatAmount = 2;
        this.floatSpeed = 5;
        this.scene = scene;
        this.x = x;
        this.y = y;
    }
    draw() {
        const floatOffsetY = Math.sin(this.timeAlive * this.floatSpeed) * this.floatAmount;
        this.scene.renderer.addAseprite(DialoguePrompt.sprite, "idle", this.x, this.y - floatOffsetY, Renderer_1.RenderingLayer.ENTITIES);
    }
    update(dt, anchorX, anchorY) {
        this.timeAlive += dt;
        this.x = anchorX;
        this.y = anchorY;
    }
}
tslib_1.__decorate([
    Assets_1.asset("sprites/dialogue.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], DialoguePrompt, "sprite", void 0);
exports.DialoguePrompt = DialoguePrompt;


/***/ }),

/***/ "./lib/Entity.js":
/*!***********************!*\
  !*** ./lib/Entity.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Entity = exports.createEntity = exports.entity = void 0;
const Animator_1 = __webpack_require__(/*! ./Animator */ "./lib/Animator.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
const entities = new Map();
function entity(name) {
    return (type) => {
        entities.set(name, type);
    };
}
exports.entity = entity;
function createEntity(name, scene, x, y, properties) {
    const constructor = entities.get(name);
    if (!constructor) {
        throw new Error("Entity not found: " + name);
    }
    return new constructor(scene, x, y, properties);
}
exports.createEntity = createEntity;
class Entity {
    constructor(scene, x, y, width = 0, height = 0, isTrigger = true) {
        this.scene = scene;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isTrigger = isTrigger;
        this.timeAlive = 0;
        this.animator = new Animator_1.Animator(this);
    }
    update(dt) {
        this.timeAlive += dt;
    }
    distanceTo(entity) {
        const a = this.x - entity.x;
        const b = this.y - entity.y;
        return Math.sqrt(a * a + b * b);
    }
    get distanceToPlayer() {
        return this.distanceTo(this.scene.player);
    }
    getClosestEntityInRange(range) {
        const sortedEntityDistances = this.getEntitiesInRange(range).sort((a, b) => { return a.distance - b.distance; });
        if (sortedEntityDistances[0]) {
            return sortedEntityDistances[0].target;
        }
        else {
            return null;
        }
    }
    getEntitiesInRange(range) {
        const entitiesInRange = [];
        this.scene.gameObjects.forEach(gameObject => {
            if (gameObject instanceof Entity && gameObject !== this) {
                const distance = this.distanceTo(gameObject);
                if (distance < range) {
                    entitiesInRange.push({ source: this, target: gameObject, distance });
                }
            }
        });
        return entitiesInRange;
    }
    getClosestEntity() {
        const entitiesInRange = [];
        this.scene.gameObjects.forEach(gameObject => {
            if (gameObject instanceof Entity && gameObject !== this) {
                const distance = this.distanceTo(gameObject);
                entitiesInRange.push({ source: this, target: gameObject, distance });
            }
        });
        entitiesInRange.sort((a, b) => { return a.distance - b.distance; });
        return entitiesInRange[0].target;
    }
    getBounds(margin = 0) {
        const width = this.width + (margin * 2);
        const height = this.height + (margin * 2);
        const x = this.x - (this.width / 2) - margin;
        const y = this.y - -this.height + margin;
        return { x, y, width, height };
    }
    drawBounds() {
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.RECT,
            layer: Renderer_1.RenderingLayer.DEBUG,
            position: {
                x: this.getBounds().x,
                y: -this.getBounds().y
            },
            lineColor: "red",
            dimension: {
                width: this.getBounds().width,
                height: this.getBounds().height
            }
        });
    }
    /**
     * Checks wether this entity is currently colliding with the provided named trigger.
     * @param triggerName the trigger name to check against.
     */
    isCollidingWithTrigger(triggerName) {
        const collisions = this.scene.world.getTriggerCollisions(this);
        if (collisions.length === 0) {
            return false;
        }
        return collisions.findIndex(o => o.name === triggerName) > -1;
    }
    remove() {
        this.scene.removeGameObject(this);
    }
}
exports.Entity = Entity;


/***/ }),

/***/ "./lib/Face.js":
/*!*********************!*\
  !*** ./lib/Face.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Face = exports.EyeType = exports.FaceModes = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
var FaceModes;
(function (FaceModes) {
    FaceModes["BLINK"] = "blink";
    FaceModes["NEUTRAL"] = "neutral";
    FaceModes["ANGRY"] = "angry";
    FaceModes["BORED"] = "bored";
    FaceModes["AMUSED"] = "amused";
    FaceModes["SAD"] = "sad";
    FaceModes["DISGUSTED"] = "disgusted";
})(FaceModes = exports.FaceModes || (exports.FaceModes = {}));
var EyeType;
(function (EyeType) {
    EyeType[EyeType["STANDARD"] = 0] = "STANDARD";
    EyeType[EyeType["TREE"] = 1] = "TREE";
    EyeType[EyeType["STONE"] = 2] = "STONE";
    EyeType[EyeType["FLAMEBOY"] = 3] = "FLAMEBOY";
    EyeType[EyeType["STONEDISCIPLE"] = 4] = "STONEDISCIPLE";
    EyeType[EyeType["FLAMEBOY2"] = 5] = "FLAMEBOY2";
})(EyeType = exports.EyeType || (exports.EyeType = {}));
class Face {
    constructor(scene, owner, eyeType, offX = 0, offY = 20) {
        this.scene = scene;
        this.owner = owner;
        this.eyeType = eyeType;
        this.offX = offX;
        this.offY = offY;
        this.mode = FaceModes.NEUTRAL;
        this.direction = 1; // 1 = right, -1 = left
    }
    setMode(mode) {
        this.mode = mode;
    }
    setOffY(offY) {
        this.offY = offY;
    }
    draw(ctx) {
        const sprite = Face.sprites[this.eyeType];
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.ASEPRITE,
            layer: Renderer_1.RenderingLayer.ENTITIES,
            asset: sprite,
            scale: {
                x: this.direction,
                y: 1
            },
            translation: {
                x: this.owner.x + this.offX,
                y: -this.owner.y - this.offY
            },
            position: {
                x: -sprite.width >> 1,
                y: -sprite.height
            },
            animationTag: this.mode,
            time: this.scene.gameTime * 1000
        });
    }
    toggleDirection(direction = this.direction > 0 ? -1 : 1) {
        if (direction !== this.direction) {
            this.direction = direction;
        }
    }
    setDirection(direction) {
        this.direction = direction;
    }
}
tslib_1.__decorate([
    Assets_1.asset([
        "sprites/eyes/standard.aseprite.json",
        "sprites/eyes/tree.aseprite.json",
        "sprites/eyes/stone.aseprite.json",
        "sprites/eyes/flameboy.aseprite.json",
        "sprites/eyes/stonedisciple.aseprite.json",
        "sprites/eyes/flameboy2.aseprite.json",
    ]),
    tslib_1.__metadata("design:type", Array)
], Face, "sprites", void 0);
exports.Face = Face;


/***/ }),

/***/ "./lib/FireGfx.js":
/*!************************!*\
  !*** ./lib/FireGfx.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FireGfx = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const ColorGradient_1 = __webpack_require__(/*! ./ColorGradient */ "./lib/ColorGradient.js");
class FireGfx {
    constructor(w = 48, h = 64, coneShaped = true, updateMs = 33) {
        this.w = w;
        this.h = h;
        this.coneShaped = coneShaped;
        this.updateMs = updateMs;
        this.returnColor = [0, 0, 0, 255];
        this.bottomLine = [];
        this.nextUpdate = -Infinity;
        this.age = 0;
        this.startTime = 0;
        this.canvas = document.createElement("canvas");
        this.canvas.width = this.w;
        this.canvas.height = this.h;
        this.context = this.canvas.getContext("2d");
        this.imageData = this.context.getImageData(0, 0, this.w, this.h);
        this.data = [];
        this.decayData = [];
        this.init();
    }
    init() {
        this.age = 0;
        this.nextUpdate = -Infinity;
        this.startTime = Date.now();
        const decay = this.decayData;
        const data = this.data;
        for (let y = 0; y < this.h; y++) {
            const row = data[y] = [];
            const decayRow = decay[y] = [];
            const yrel = y / (this.h - 1);
            for (let x = 0; x < this.w; x++) {
                row[x] = 0;
                decayRow[x] = this.getDecay(x / (this.w - 1), yrel);
            }
        }
        const bottom = data[this.h - 1];
        for (let x = 0; x < this.w; x++) {
            const xrel = x / (this.w - 1);
            const stuffedXrel = this.coneShaped ? util_1.clamp(2 * xrel - 0.5, 0, 1) : xrel;
            const smooth = 0.5 - 0.5 * Math.cos(2 * Math.PI * stuffedXrel);
            bottom[x] = 1.25 * Math.pow(smooth, 0.5);
        }
        this.bottomLine = bottom.slice();
    }
    getDecay(xrel, yrel) {
        if (xrel > 0.5) {
            xrel = 1 - xrel;
        }
        if (this.coneShaped) {
            yrel = 1.2 * yrel;
            if (yrel > 1) {
                return 0.02;
            }
        }
        return 0.02 + (0.5 - xrel) * 0.1 + Math.pow(1 - yrel, 8);
    }
    update() {
        const t = Date.now();
        this.age = t - this.startTime;
        if (t >= this.nextUpdate) {
            this.nextUpdate = t + this.updateMs;
            this.updateStep();
            this.render();
        }
    }
    updateStep() {
        const data = this.data;
        let fromRow = data[0];
        let fromX = 0, toCenter = 0;
        let toCenter1 = 1;
        const midX = (this.w - 1) * 0.5;
        const yThreshold = this.coneShaped ? this.h * 0.8 : Infinity;
        // Let all fire rows move upward, so update rows from top to bottom
        for (let y = 0; y < this.h - 1; y++) {
            const row = fromRow, decayRow = this.decayData[y];
            fromRow = data[y + 1];
            if (y > yThreshold) {
                const yp = (y - yThreshold) / (this.h - yThreshold);
                toCenter = 0.15 * yp * yp;
                toCenter1 = 1 - toCenter;
            }
            for (let x = 0; x < this.w; x++) {
                fromX = util_1.clamp(x + util_1.rnd(-1, 1) * util_1.rnd(), 0.3, this.w - 1.3);
                if (toCenter) {
                    fromX = toCenter * midX + toCenter1 * fromX;
                }
                const fromX1 = Math.floor(fromX), fx = fromX - fromX1;
                const v = fx * fromRow[fromX1 + 1] + (1 - fx) * fromRow[fromX1] - decayRow[x] + util_1.rnd(-0.03, 0.02);
                row[x] = util_1.clamp(v, 0, Infinity);
            }
        }
        // Bottom line always stays mostly the same, only minor variations
        const row = data[this.h - 1];
        const t = this.age * 6 / 1000;
        const skew = 0.5 * util_1.orientPow(Math.sin(t) * Math.sin(t * 0.353) * Math.sin(t * 0.764)
            * Math.sin(t * 0.5433) * Math.sin(t * 1.634) * Math.sin(t * 1.342), 1.5);
        const exponent = (skew > 0) ? 1 + skew : 1 / (1 - skew);
        for (let x = 0; x < this.w; x++) {
            const f = 1.2 + Math.pow((0.8 * Math.sin(t) * Math.sin(0.1 * x * t) * Math.sin(-0.07 * x * t)), 2);
            const baseX = Math.floor((this.w - 1) * Math.pow((x / (this.w - 1)), exponent));
            row[x] = this.bottomLine[baseX] * f;
        }
    }
    render() {
        const pixels = this.imageData.data;
        const data = this.data;
        let p = 0, col = [0];
        for (let y = 0; y < this.h; y++) {
            const row = data[y];
            for (let x = 0; x < this.w; x++) {
                col = this.valueToColor(row[x]);
                pixels[p++] = col[0];
                pixels[p++] = col[1];
                pixels[p++] = col[2];
                pixels[p++] = col[3];
            }
        }
        this.context.putImageData(this.imageData, 0, 0);
    }
    valueToColor(v) {
        return FireGfx.gradient.get(util_1.clamp(v, 0, 1));
    }
    oldValueToColor(v) {
        v = util_1.clamp(v, 0, 1);
        const v255 = 255 * v;
        this.returnColor[0] = 255;
        this.returnColor[1] = v255;
        this.returnColor[2] = v255 * v;
        this.returnColor[3] = v255;
        return this.returnColor;
    }
    getImage() {
        return this.canvas;
    }
    draw(ctx, x = 0, y = 0) {
        const img = this.getImage();
        ctx.drawImage(img, x - img.width / 2, -y - img.height);
    }
}
tslib_1.__decorate([
    Assets_1.asset("gradients/fire.png", { map: (image) => ColorGradient_1.ColorGradient.fromImage(image) }),
    tslib_1.__metadata("design:type", ColorGradient_1.ColorGradient)
], FireGfx, "gradient", void 0);
exports.FireGfx = FireGfx;


/***/ }),

/***/ "./lib/FriendlyFire.js":
/*!*****************************!*\
  !*** ./lib/FriendlyFire.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FriendlyFire = void 0;
const Game_1 = __webpack_require__(/*! ./Game */ "./lib/Game.js");
const LoadingScene_1 = __webpack_require__(/*! ./scenes/LoadingScene */ "./lib/scenes/LoadingScene.js");
class FriendlyFire extends Game_1.Game {
    constructor() {
        super();
    }
}
exports.FriendlyFire = FriendlyFire;
const game = new FriendlyFire();
game.scenes.setScene(LoadingScene_1.LoadingScene);
window.game = game;
game.start();


/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const Campaign_1 = __webpack_require__(/*! ./Campaign */ "./lib/Campaign.js");
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const ControllerManager_1 = __webpack_require__(/*! ./input/ControllerManager */ "./lib/input/ControllerManager.js");
const graphics_1 = __webpack_require__(/*! ./graphics */ "./lib/graphics.js");
const constants_1 = __webpack_require__(/*! ./constants */ "./lib/constants.js");
const GamepadInput_1 = __webpack_require__(/*! ./input/GamepadInput */ "./lib/input/GamepadInput.js");
const Keyboard_1 = __webpack_require__(/*! ./input/Keyboard */ "./lib/input/Keyboard.js");
const Scenes_1 = __webpack_require__(/*! ./Scenes */ "./lib/Scenes.js");
/**
 * Max time delta (in s). If game freezes for a few seconds for whatever reason, we don't want
 * updates to jump too much.
 */
const MAX_DT = 0.1;
/** Number of seconds the mouse is visible after moving it */
const MOUSE_TIMEOUT = 2.0;
class Game {
    constructor(width = constants_1.GAME_CANVAS_WIDTH, height = constants_1.GAME_CANVAS_HEIGHT) {
        this.width = width;
        this.height = height;
        this.controllerManager = ControllerManager_1.ControllerManager.getInstance();
        this.keyboard = new Keyboard_1.Keyboard();
        this.gamepad = new GamepadInput_1.GamepadInput();
        this.scenes = new Scenes_1.Scenes(this);
        this.assets = new Assets_1.Assets();
        this.campaign = new Campaign_1.Campaign(this);
        this.backgroundColor = "black";
        this.gameLoopCallback = this.gameLoop.bind(this);
        this.gameLoopId = null;
        this.lastUpdateTime = performance.now();
        this.mouseTimeout = MOUSE_TIMEOUT;
        const canvas = this.canvas = graphics_1.createCanvas(width, height);
        // Desynchronized sounds like a good idea but unfortunately it prevents pixelated graphics
        // on some systems (Chrome+Windows+NVidia for example which forces bilinear filtering). So
        // it is deactivated here.
        this.ctx = graphics_1.getRenderingContext(canvas, "2d", { alpha: false, desynchronized: false });
        const style = canvas.style;
        style.position = "absolute";
        style.margin = "auto";
        style.left = style.top = style.right = style.bottom = "0";
        style.imageRendering = "pixelated";
        style.imageRendering = "crisp-edges";
        document.body.appendChild(this.canvas);
        this.updateCanvasSize();
        window.addEventListener("resize", () => this.updateCanvasSize());
        window.addEventListener("pointermove", () => this.mouseMoved());
        // Use Alt+Enter to toggle fullscreen mode.
        window.addEventListener("keydown", (event) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (event.altKey && event.key === "Enter") {
                const lockingEnabled = "keyboard" in navigator && "lock" in navigator.keyboard && typeof navigator.keyboard.lock === "function";
                // If the browser is in full screen mode AND fullscreen has been triggered by our own keyboard shortcut...
                if (window.matchMedia("(display-mode: fullscreen)").matches && document.fullscreenElement != null) {
                    if (lockingEnabled) {
                        navigator.keyboard.unlock();
                    }
                    yield document.exitFullscreen();
                }
                else {
                    if (lockingEnabled) {
                        yield navigator.keyboard.lock(["Escape"]);
                    }
                    yield document.body.requestFullscreen();
                }
            }
        }));
    }
    mouseMoved() {
        this.canvas.style.cursor = "default";
        this.mouseTimeout = MOUSE_TIMEOUT;
    }
    updateMouse(dt) {
        if (this.mouseTimeout > 0) {
            this.mouseTimeout = Math.max(0, this.mouseTimeout - dt);
            if (this.mouseTimeout === 0) {
                this.canvas.style.cursor = "none";
            }
        }
    }
    updateCanvasSize() {
        const { width, height } = this;
        const scale = Math.max(1, Math.floor(Math.min(window.innerWidth / width, window.innerHeight / height)));
        const style = this.canvas.style;
        style.width = width * scale + "px";
        style.height = height * scale + "px";
    }
    gameLoop() {
        const currentUpdateTime = performance.now();
        const dt = util_1.clamp((currentUpdateTime - this.lastUpdateTime) / 1000, 0, MAX_DT);
        this.update(dt);
        this.lastUpdateTime = currentUpdateTime;
        const { ctx, width, height } = this;
        ctx.save();
        ctx.imageSmoothingEnabled = false;
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(0, 0, width, height);
        this.draw(ctx, width, height);
        ctx.restore();
        this.nextFrame();
    }
    nextFrame() {
        this.gameLoopId = requestAnimationFrame(this.gameLoopCallback);
    }
    update(dt) {
        this.gamepad.update();
        this.updateMouse(dt);
        this.scenes.update(dt);
    }
    draw(ctx, width, height) {
        this.scenes.draw(ctx, width, height);
    }
    start() {
        if (this.gameLoopId == null) {
            this.lastUpdateTime = performance.now();
            this.nextFrame();
        }
    }
    stop() {
        if (this.gameLoopId != null) {
            cancelAnimationFrame(this.gameLoopId);
            this.gameLoopId = null;
        }
    }
}
exports.Game = Game;


/***/ }),

/***/ "./lib/GlobalState.js":
/*!****************************!*\
  !*** ./lib/GlobalState.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobalState = void 0;
var GlobalStateKey;
(function (GlobalStateKey) {
    GlobalStateKey["BEAT_GAME_ONCE"] = "beatGame";
    GlobalStateKey["ACHIEVED_ENDINGS"] = "achievedEndings";
})(GlobalStateKey || (GlobalStateKey = {}));
class GlobalState {
    static getParsedValueByKey(key, fallback) {
        const serialized = localStorage.getItem(key);
        if (serialized) {
            try {
                const parsed = JSON.parse(serialized);
                return parsed || fallback;
            }
            catch (e) {
                console.error(e);
                return fallback;
            }
        }
        else {
            return fallback;
        }
    }
    static setKeyValuePair(key, value) {
        try {
            const serialized = JSON.stringify(value);
            localStorage.setItem(key, serialized);
        }
        catch (e) {
            console.error(e);
        }
    }
    static getHasBeatenGame() {
        return GlobalState.getParsedValueByKey(GlobalStateKey.BEAT_GAME_ONCE, false);
    }
    static setHasBeatenGame() {
        GlobalState.setKeyValuePair(GlobalStateKey.BEAT_GAME_ONCE, true);
    }
    static getAchievedEndings() {
        return GlobalState.getParsedValueByKey(GlobalStateKey.ACHIEVED_ENDINGS, []);
    }
    static setAchievedEnding(questKey) {
        const achievedEndings = GlobalState.getParsedValueByKey(GlobalStateKey.ACHIEVED_ENDINGS, []);
        if (!achievedEndings.includes(questKey)) {
            achievedEndings.push(questKey);
            GlobalState.setKeyValuePair(GlobalStateKey.ACHIEVED_ENDINGS, achievedEndings);
        }
    }
}
exports.GlobalState = GlobalState;


/***/ }),

/***/ "./lib/MapInfo.js":
/*!************************!*\
  !*** ./lib/MapInfo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MapInfo = exports.MapObjectType = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const level_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../assets/maps/level.json */ "./assets/maps/level.json"));
var MapObjectType;
(function (MapObjectType) {
    MapObjectType["ENTITY"] = "entity";
    MapObjectType["TRIGGER"] = "trigger";
    MapObjectType["POINTER"] = "pointer";
    MapObjectType["GATE"] = "gate";
    MapObjectType["BOUNDS"] = "bounds";
    MapObjectType["SOUND"] = "sound";
})(MapObjectType = exports.MapObjectType || (exports.MapObjectType = {}));
class MapInfo {
    getLayer(type, name) {
        var _a;
        return (_a = level_json_1.default.layers.find(layer => layer.type === type && layer.name === name)) !== null && _a !== void 0 ? _a : null;
    }
    getObject(name) {
        var _a, _b;
        return (_b = (_a = this.getLayer("objectgroup", "objects")) === null || _a === void 0 ? void 0 : _a.objects.find(object => object.name === name)) !== null && _b !== void 0 ? _b : null;
    }
    getObjects(type) {
        var _a, _b;
        return (_b = (_a = this.getLayer("objectgroup", "objects")) === null || _a === void 0 ? void 0 : _a.objects.filter(object => !type || object.type === type)) !== null && _b !== void 0 ? _b : [];
    }
    getPlayerStart() {
        const mapHeight = MapInfo.getMapSize().height;
        const object = this.getObject("player");
        if (object) {
            return { x: object.x, y: mapHeight - object.y };
        }
        else {
            return { x: 0, y: 0 };
        }
    }
    getGameObjectInfos(type) {
        const mapHeight = MapInfo.getMapSize().height;
        return this.getObjects(type).map(object => {
            var _a;
            return ({
                name: object.name,
                x: object.x,
                y: mapHeight - object.y,
                type: object.type,
                width: object.width,
                height: object.height,
                properties: ((_a = object.properties) !== null && _a !== void 0 ? _a : []).reduce((props, property) => {
                    props[property.name] = property.value;
                    return props;
                }, {})
            });
        });
    }
    getEntities() {
        return this.getGameObjectInfos(MapObjectType.ENTITY);
    }
    getSounds() {
        return this.getGameObjectInfos(MapObjectType.SOUND);
    }
    getPointers() {
        return this.getGameObjectInfos(MapObjectType.POINTER);
    }
    getTriggerObjects() {
        return this.getGameObjectInfos(MapObjectType.TRIGGER);
    }
    getBoundObjects() {
        return this.getGameObjectInfos(MapObjectType.BOUNDS);
    }
    getGateObjects() {
        return this.getGameObjectInfos(MapObjectType.GATE);
    }
    static normalizeCoordinates(objects) {
        const mapHeight = MapInfo.getMapSize().height;
        objects.forEach(o => { o.y = mapHeight - o.y; });
        return objects;
    }
    static getMapSize() {
        return {
            width: level_json_1.default.width * level_json_1.default.tilewidth,
            height: level_json_1.default.height * level_json_1.default.tileheight
        };
    }
}
exports.MapInfo = MapInfo;


/***/ }),

/***/ "./lib/Menu.js":
/*!*********************!*\
  !*** ./lib/Menu.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuList = exports.MenuItem = exports.MenuAlignment = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const Signal_1 = __webpack_require__(/*! ./Signal */ "./lib/Signal.js");
const Sound_1 = __webpack_require__(/*! ./Sound */ "./lib/Sound.js");
const SceneNode_1 = __webpack_require__(/*! ./scene/SceneNode */ "./lib/scene/SceneNode.js");
var MenuAlignment;
(function (MenuAlignment) {
    MenuAlignment[MenuAlignment["LEFT"] = 0] = "LEFT";
    MenuAlignment[MenuAlignment["CENTER"] = 1] = "CENTER";
    MenuAlignment[MenuAlignment["RIGHT"] = 2] = "RIGHT";
})(MenuAlignment = exports.MenuAlignment || (exports.MenuAlignment = {}));
/**
 * Simple MenuItem Class for usage in a MenuList.
 * Currently, each item is only rendered as simple text. The focused state is visualized via an
 * additional `►` character as prefix. The item instances don't need to be manually drawn, since the
 * MenuList class' draw method will take care of it.
 */
class MenuItem {
    constructor(id, label, font, color, x, y, enabled = true) {
        this.id = id;
        this.label = label;
        this.font = font;
        this.color = color;
        this.x = x;
        this.y = y;
        this.enabled = enabled;
        this.focused = false;
    }
    /**
     * Draw method for a single ListItem. Is automatically called when the parent
     * MenuList's draw method is called.
     *
     * @param ctx CanvasRenderingContext2D
     */
    draw(ctx, align) {
        ctx.save();
        const alpha = this.enabled ? 1 : 0.35;
        let x = this.x;
        const y = this.y;
        const text = this.label;
        const width = this.font.measureText(text).width;
        if (align === MenuAlignment.CENTER) {
            x -= Math.round(width / 2);
        }
        this.font.drawText(ctx, text, x, y, this.color, 0, alpha);
        if (this.focused) {
            ctx.drawImage(MenuItem.selectorImage, x - 13, y + 2);
        }
        ctx.restore();
    }
}
tslib_1.__decorate([
    Assets_1.asset("sprites/menu_selector.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], MenuItem, "selectorImage", void 0);
exports.MenuItem = MenuItem;
/**
 * A simple MenuList that can hold MenuItems and navigate them in two directions via methods. On
 * each navigational change, the new MenuItem is focused. When calling the `executeAction` method a
 * signal is emitted containing the focused MenuItem's ID. Disabled MenuItems will be skipped
 * automatically when navigating. The draw method of the list instance has to be called to have all
 * containing buttons be drawn automatically.
 */
class MenuList extends SceneNode_1.SceneNode {
    constructor(_a = {}) {
        var { align = MenuAlignment.LEFT } = _a, args = tslib_1.__rest(_a, ["align"]);
        super(args);
        this.items = [];
        this.onActivated = new Signal_1.Signal();
        this.align = align;
    }
    /**
     * Adds an arbitrary number of menu items to the menu list
     * The first available menu item will be focused automatically
     * @param items
     */
    addItems(...items) {
        this.items.push(...items);
        this.focusFirstItem();
    }
    /**
     * Clears all menu items from the menu instance
     */
    reset() {
        this.items = [];
    }
    /**
     * Sets an arbitrary number of menu items to the menu list and overrides any previously added
     * items. The first available menu item will be focused automatically.
     */
    setItems(...items) {
        this.items = [...items];
        this.focusFirstItem();
        return this;
    }
    /**
     * Finds and focuses the first available item if no item was focused before.
     */
    focusFirstItem() {
        if (!this.getFocusedItem()) {
            const index = this.items.findIndex(item => item.enabled);
            if (index > -1) {
                this.items[index].focused = true;
            }
        }
    }
    getFocusedItem() {
        return this.items.find(item => item.focused);
    }
    getFocusedItemIndex() {
        return this.items.findIndex(item => item.focused);
    }
    unfocusAllItems() {
        this.items.forEach(item => { item.focused = false; });
    }
    focusItem(item) {
        this.unfocusAllItems();
        item.focused = true;
    }
    /**
     * Recursive method to focus the next item in the direction provided in the argument.
     * @param currentIndex - The index of the currently focused item in the items array
     * @param direction    - Direction in which the next item should be searched for.
     *                       Either 1 (forwards) or -1 (backwards)
     */
    findAndFocusNextItem(currentIndex, direction) {
        const min = direction > 0 ? 0 : (this.items.length - 1);
        const max = direction > 0 ? (this.items.length - 1) : 0;
        const nextIndex = (currentIndex === max) ? min : currentIndex + direction;
        const nextItem = this.items[nextIndex];
        if (nextItem.enabled) {
            this.focusItem(this.items[nextIndex]);
        }
        else {
            this.findAndFocusNextItem(nextIndex, direction);
        }
        MenuList.click.stop();
        MenuList.click.play();
    }
    /**
     * Method to navigate the focus of the menu list to the next item
     */
    next() {
        this.findAndFocusNextItem(this.getFocusedItemIndex(), 1);
    }
    /**
     * Method to navigate the focus of the menu list to the previous item
     */
    prev() {
        this.findAndFocusNextItem(this.getFocusedItemIndex(), -1);
    }
    executeAction(sound = MenuList.confirm) {
        const focusedButton = this.getFocusedItem();
        if (focusedButton && focusedButton.enabled) {
            sound.stop();
            sound.play();
            this.onActivated.emit(focusedButton.id);
        }
    }
    draw(ctx) {
        this.items.forEach(item => {
            item.draw(ctx, this.align);
        });
    }
}
tslib_1.__decorate([
    Assets_1.asset("sounds/interface/click.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], MenuList, "click", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/interface/confirm.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], MenuList, "confirm", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/interface/select.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], MenuList, "select", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/interface/bass.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], MenuList, "pause", void 0);
exports.MenuList = MenuList;


/***/ }),

/***/ "./lib/MountainRiddle.js":
/*!*******************************!*\
  !*** ./lib/MountainRiddle.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MountainRiddle = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Conversation_1 = __webpack_require__(/*! ./Conversation */ "./lib/Conversation.js");
const GameScene_1 = __webpack_require__(/*! ./scenes/GameScene */ "./lib/scenes/GameScene.js");
const Sound_1 = __webpack_require__(/*! ./Sound */ "./lib/Sound.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const AMOUNT_GATE_COLS = 3;
const AMOUNT_GATE_ROWS = 5;
class MountainRiddle {
    constructor() {
        this.attemptCount = 0;
        this.failed = false;
        this.cleared = false;
        this.solution = this.getRandomizedSolution();
    }
    getRandomizedSolution() {
        const solution = [];
        for (let index = 0; index < AMOUNT_GATE_ROWS; index++) {
            solution.push(Math.floor(Math.random() * Math.floor(AMOUNT_GATE_COLS)));
        }
        return solution;
    }
    isCorrectGate(col, row) {
        return this.solution[row] === col;
    }
    checkGate(col, row) {
        if (!this.failed && !this.cleared && !this.isCorrectGate(col, row)) {
            this.failRiddle();
        }
    }
    wasAttempted() {
        return this.attemptCount > 0;
    }
    registerAttempt() {
        this.attemptCount++;
    }
    failRiddle() {
        Conversation_1.Conversation.setGlobal("gotTeleported", "true");
        this.failed = true;
        this.registerAttempt();
        GameScene_1.GameScene.wrong.play();
    }
    isFailed() {
        return this.failed;
    }
    resetRiddle() {
        if (this.failed && !this.cleared) {
            this.solution = this.getRandomizedSolution();
            this.failed = false;
        }
    }
    isCleared() {
        return this.cleared;
    }
    clearRiddle() {
        if (!this.cleared) {
            MountainRiddle.sound.play();
            this.failed = false;
            this.cleared = true;
        }
    }
}
tslib_1.__decorate([
    Assets_1.asset("sounds/item/fanfare.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], MountainRiddle, "sound", void 0);
exports.MountainRiddle = MountainRiddle;


/***/ }),

/***/ "./lib/Particles.js":
/*!**************************!*\
  !*** ./lib/Particles.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.valueCurves = exports.ValueCurve = exports.Particle = exports.ParticleEmitter = exports.Particles = void 0;
const constants_1 = __webpack_require__(/*! ./constants */ "./lib/constants.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
class Particles {
    constructor(scene) {
        this.emitters = [];
        this.scene = scene;
    }
    update(dt) {
        this.emitters.forEach(emitter => emitter.update(dt));
    }
    addEmittersToRenderingQueue() {
        this.emitters.forEach(emitter => {
            this.scene.renderer.add({
                type: Renderer_1.RenderingType.PARTICLE_EMITTER,
                layer: emitter.renderingLayer,
                zIndex: emitter.zIndex,
                emitter
            });
        });
    }
    // Direct drawing of particles is deactivated since it's handled via rendering engine
    draw(ctx) { }
    addEmitter(emitter) {
        this.emitters.push(emitter);
    }
    dropEmitter(emitter) {
        const index = this.emitters.indexOf(emitter);
        if (index >= 0) {
            this.emitters.splice(index, 1);
            return true;
        }
        return false;
    }
    createEmitter(args) {
        const emitter = new ParticleEmitter(args);
        this.addEmitter(emitter);
        return emitter;
    }
}
exports.Particles = Particles;
class ParticleEmitter {
    constructor(args) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j;
        this.particles = [];
        this.x = args.position.x;
        this.y = args.position.y;
        this.offsetGenerator = toGenerator((_a = args.offset) !== null && _a !== void 0 ? _a : ({ x: 0, y: 0 }));
        this.velocityGenerator = toGenerator((_b = args.velocity) !== null && _b !== void 0 ? _b : ({ x: 0, y: 0 }));
        this.colorGenerator = toGenerator((_c = args.color) !== null && _c !== void 0 ? _c : "white");
        this.alphaGenerator = toGenerator((_d = args.alpha) !== null && _d !== void 0 ? _d : 1);
        this.sizeGenerator = toGenerator((_e = args.size) !== null && _e !== void 0 ? _e : 4);
        this.gravityGenerator = toGenerator((_f = args.gravity) !== null && _f !== void 0 ? _f : { x: 0, y: constants_1.GRAVITY });
        this.lifetimeGenerator = toGenerator((_g = args.lifetime) !== null && _g !== void 0 ? _g : 5);
        this.angleGenerator = toGenerator((_h = args.angle) !== null && _h !== void 0 ? _h : 0);
        this.angleSpeedGenerator = toGenerator((_j = args.angleSpeed) !== null && _j !== void 0 ? _j : 0);
        this.gravity = this.gravityGenerator();
        this.breakFactor = args.breakFactor || 1;
        this.blendMode = args.blendMode || "source-over";
        this.alphaCurve = args.alphaCurve || exports.valueCurves.constant;
        this.sizeCurve = args.sizeCurve || exports.valueCurves.constant;
        this.renderingLayer = args.renderingLayer || Renderer_1.RenderingLayer.PARTICLES;
        this.zIndex = args.zIndex !== undefined ? args.zIndex : 0;
        this.updateMethod = args.update;
        function toGenerator(obj) {
            if (obj instanceof Function) {
                return obj;
            }
            else {
                return () => obj;
            }
        }
    }
    setPosition(x, y) {
        this.x = x;
        this.y = y;
    }
    clear() {
        this.particles = [];
    }
    emit(count = 1) {
        for (let i = 0; i < count; i++) {
            this.emitSingle();
        }
    }
    emitSingle() {
        const v = this.velocityGenerator();
        const off = this.offsetGenerator();
        const particle = new Particle(this, this.x + off.x, this.y + off.y, v.x, v.y, this.angleGenerator(), this.angleSpeedGenerator(), this.colorGenerator(), this.sizeGenerator(), this.lifetimeGenerator(), this.alphaGenerator());
        this.particles.push(particle);
        return particle;
    }
    update(dt) {
        this.gravity = this.gravityGenerator();
        for (let i = this.particles.length - 1; i >= 0; i--) {
            if (this.particles[i].update(dt)) {
                this.particles.splice(i, 1);
            }
        }
        if (this.updateMethod) {
            for (const p of this.particles) {
                this.updateMethod(p);
            }
        }
    }
    draw(ctx) {
        ctx.save();
        ctx.globalCompositeOperation = this.blendMode;
        this.particles.forEach(p => p.draw(ctx));
        ctx.restore();
    }
}
exports.ParticleEmitter = ParticleEmitter;
class Particle {
    constructor(emitter, x, y, vx = 0, vy = 0, angle = 0, angleSpeed = 0, imageOrColor = "white", size = 4, lifetime = 1, alpha = 1) {
        this.emitter = emitter;
        this.x = x;
        this.y = y;
        this.vx = vx;
        this.vy = vy;
        this.angle = angle;
        this.angleSpeed = angleSpeed;
        this.imageOrColor = imageOrColor;
        this.size = size;
        this.lifetime = lifetime;
        this.alpha = alpha;
        this.progress = 0;
        this.halfSize = this.size / 2;
        this.originalLifetime = this.lifetime;
        this.progress = 0;
    }
    update(dt) {
        // Life
        this.lifetime -= dt;
        if (this.lifetime <= 0) {
            // Tell parent that it may eliminate this particle
            return true;
        }
        else {
            this.progress = 1 - (this.lifetime / this.originalLifetime);
        }
        // Gravity
        this.vx += this.emitter.gravity.x * dt;
        this.vy += this.emitter.gravity.y * dt;
        if (this.emitter.breakFactor !== 1) {
            const factor = Math.pow(this.emitter.breakFactor, dt);
            this.vx *= factor;
            this.vy *= factor;
        }
        // Movement
        this.x += this.vx * dt;
        this.y += this.vy * dt;
        this.angle += this.angleSpeed * dt;
        return false;
    }
    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.alpha * this.emitter.alphaCurve.get(this.progress);
        ctx.translate(this.x, -this.y);
        if (this.angle) {
            ctx.rotate(this.angle);
        }
        if (this.imageOrColor instanceof Object) {
            // Image
            const img = this.imageOrColor;
            const w = (img.naturalWidth || img.width), h = (img.naturalHeight || img.height);
            const sz = Math.max(w, h);
            ctx.drawImage(img, -this.halfSize, -this.halfSize, this.size * w / sz, this.size * h / sz);
        }
        else {
            // Color
            ctx.fillStyle = this.imageOrColor;
            ctx.fillRect(-this.halfSize, -this.halfSize, this.size, this.size);
        }
        ctx.restore();
    }
}
exports.Particle = Particle;
class ValueCurve {
    constructor(func, steps = 1023) {
        this.func = func;
        this.steps = steps;
        this.mapping = [];
        for (let i = 0; i <= steps; i++) {
            this.mapping[i] = func(i / steps);
        }
    }
    get(p) {
        const i = Math.round(p * this.steps);
        return this.mapping[i < 0 ? 0 : i > this.steps ? this.steps : i];
    }
    getExact(p) {
        return this.func(p);
    }
    invert() {
        return new ValueCurve((p) => this.getExact(1 - p), this.steps);
    }
    append(otherCurve, relativeLength = 1) {
        const total = 1 + relativeLength;
        const mid = (total - relativeLength) / total;
        return new ValueCurve((p) => p < mid ? this.getExact(p / mid) :
            otherCurve.getExact((p - mid) / relativeLength), Math.max(this.steps, otherCurve.steps));
    }
}
exports.ValueCurve = ValueCurve;
function trapezeFunction(v, v1 = v) {
    return (p) => p < v ? p / v : p > 1 - v1 ? (1 - p) / v1 : 1;
}
exports.valueCurves = {
    constant: new ValueCurve((p) => 1, 1),
    linear: new ValueCurve((p) => p),
    trapeze: (v = 0.1, v1 = v) => new ValueCurve(trapezeFunction(v, v1)),
    cos: (v = 0.1, v1 = v) => // smooth 0 to 1 to 0
     new ValueCurve((p) => 0.5 - 0.5 * Math.cos(Math.PI * trapezeFunction(v, v1)(p))),
    cubic: new ValueCurve((p) => 3 * p * p - 2 * p * p * p) // smooth 0 to 1
};


/***/ }),

/***/ "./lib/PlayerConversation.js":
/*!***********************************!*\
  !*** ./lib/PlayerConversation.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerConversation = void 0;
const Menu_1 = __webpack_require__(/*! ./Menu */ "./lib/Menu.js");
class PlayerConversation {
    constructor(player, npc, conversation, autoMove = true) {
        var _a, _b;
        this.player = player;
        this.npc = npc;
        this.conversation = conversation;
        this.autoMove = autoMove;
        this.interaction = null;
        this.selectedOption = -1;
        this.interaction = this.conversation.getNextInteraction();
        this.setSelectedOption(0);
        this.setBubblesContent();
        (_b = (_a = this.interaction) === null || _a === void 0 ? void 0 : _a.npcLine) === null || _b === void 0 ? void 0 : _b.executeBeforeLine();
        npc.meet();
        // Ensure safe distance to NPC
        if (this.autoMove) {
            const minDis = 20;
            if (Math.abs(player.x - npc.x) < minDis) {
                if (player.x < npc.x) {
                    player.startAutoMove(npc.x - minDis, true);
                }
                else {
                    player.startAutoMove(npc.x + minDis, true);
                }
            }
        }
    }
    /**
     * Returns true if conversation has been terminated (one way or the other)
     */
    update() {
        if (!this.interaction || this.conversation.hasEnded()) {
            if (this.player.playerConversation != null) {
                this.endConversation();
            }
            return true;
        }
        this.player.scene.camera.setCinematicBar(1);
        return false;
    }
    setBubblesContent() {
        if (this.interaction) {
            const optionsTexts = this.interaction.options.map(options => options.line);
            if (this.interaction.npcLine) {
                this.npc.speechBubble.setMessage(this.interaction.npcLine.line);
                this.npc.speechBubble.show();
            }
            if (optionsTexts.length > 0) {
                this.setSelectedOption(0);
                this.player.speechBubble.setOptions(optionsTexts, this.npc.speechBubble);
                this.player.speechBubble.show();
            }
        }
    }
    setSelectedOption(num = 0) {
        if (this.interaction && this.interaction.options && this.interaction.options.length > 0) {
            let sel = num % this.interaction.options.length;
            if (sel < 0) {
                sel += this.interaction.options.length;
            }
            this.selectedOption = sel;
        }
        else {
            this.selectedOption = -1;
        }
        this.player.speechBubble.selectedOptionIndex = this.selectedOption;
        return this.selectedOption;
    }
    handleButton(e) {
        if (e.isAbort && !e.isPause) {
            this.endConversation();
        }
        else if (!e.repeat) {
            // Enter to proceed
            if (e.isConfirm) {
                this.proceed();
            }
            const upDown = (e.isMenuDown ? 1 : 0) - (e.isMenuUp ? 1 : 0);
            if (upDown !== 0) {
                Menu_1.MenuList.click.stop();
                Menu_1.MenuList.click.play();
                this.setSelectedOption(this.selectedOption + upDown);
            }
        }
    }
    proceed() {
        var _a;
        if (this.interaction) {
            if (this.npc.speechBubble.isCurrentlyWriting || this.npc.speechBubble.preventUnwantedSelection) {
                this.npc.speechBubble.isCurrentlyWriting = false;
                return;
            }
            const options = this.interaction.options;
            if (options && options.length > 0) {
                // Player could choose between options, confirmed with Enter
                const index = (options.length === 1) ? 0 : this.selectedOption;
                const option = options[index];
                if (option) {
                    Menu_1.MenuList.select.play();
                    option.execute();
                }
                else {
                    console.error("Tried to execute invalid option at index " + index
                        + " in interaction around line: " + this.interaction.npcLine);
                }
            }
            if (this.interaction.npcLine) {
                Menu_1.MenuList.click.stop();
                Menu_1.MenuList.click.play();
                // NPC said something, player proceeds without any options
                this.interaction.npcLine.execute();
            }
            this.interaction = this.conversation.getNextInteraction();
            this.setSelectedOption(-1);
            this.setBubblesContent();
        }
        if (!this.interaction) {
            this.endConversation();
        }
        else {
            if (this.interaction.npcLine) {
                // Mostly NPCs execute actions at the beginning of their line, not afterwards
                (_a = this.npc.face) === null || _a === void 0 ? void 0 : _a.setMode(this.npc.defaultFaceMode);
                this.interaction.npcLine.executeBeforeLine();
            }
        }
    }
    endConversation() {
        this.player.playerConversation = null;
        this.player.speechBubble.hide();
        this.npc.speechBubble.hide();
        this.npc.registerEndedConversation();
    }
}
exports.PlayerConversation = PlayerConversation;


/***/ }),

/***/ "./lib/Quests.js":
/*!***********************!*\
  !*** ./lib/Quests.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.QuestE = exports.QuestD = exports.QuestC = exports.QuestB = exports.QuestA = exports.Quest = exports.QuestETrigger = exports.QuestDTrigger = exports.QuestCTrigger = exports.QuestBTrigger = exports.QuestATrigger = exports.QuestKey = void 0;
var QuestKey;
(function (QuestKey) {
    QuestKey["A"] = "questA";
    QuestKey["B"] = "questB";
    QuestKey["C"] = "questC";
    QuestKey["D"] = "questD";
    QuestKey["E"] = "questE";
})(QuestKey = exports.QuestKey || (exports.QuestKey = {}));
var QuestATrigger;
(function (QuestATrigger) {
    QuestATrigger[QuestATrigger["JUST_ARRIVED"] = 0] = "JUST_ARRIVED";
    QuestATrigger[QuestATrigger["TALKED_TO_FIRE"] = 1] = "TALKED_TO_FIRE";
    QuestATrigger[QuestATrigger["GOT_QUEST_FROM_FIRE"] = 2] = "GOT_QUEST_FROM_FIRE";
    QuestATrigger[QuestATrigger["GOT_RUNNING_ABILITY"] = 3] = "GOT_RUNNING_ABILITY";
    QuestATrigger[QuestATrigger["TALKED_TO_TREE"] = 4] = "TALKED_TO_TREE";
    QuestATrigger[QuestATrigger["GOT_QUEST_FROM_TREE"] = 5] = "GOT_QUEST_FROM_TREE";
    QuestATrigger[QuestATrigger["GOT_SEED"] = 6] = "GOT_SEED";
    QuestATrigger[QuestATrigger["PLANTED_SEED"] = 7] = "PLANTED_SEED";
    QuestATrigger[QuestATrigger["TALKED_TO_STONE"] = 8] = "TALKED_TO_STONE";
    QuestATrigger[QuestATrigger["GOT_STONE"] = 9] = "GOT_STONE";
    QuestATrigger[QuestATrigger["THROWN_STONE_INTO_WATER"] = 10] = "THROWN_STONE_INTO_WATER";
    QuestATrigger[QuestATrigger["GOT_MULTIJUMP"] = 11] = "GOT_MULTIJUMP";
    QuestATrigger[QuestATrigger["LEARNED_RAIN_DANCE"] = 12] = "LEARNED_RAIN_DANCE";
    QuestATrigger[QuestATrigger["MADE_RAIN"] = 13] = "MADE_RAIN";
    QuestATrigger[QuestATrigger["TREE_DROPPED_WOOD"] = 14] = "TREE_DROPPED_WOOD";
    QuestATrigger[QuestATrigger["GOT_WOOD"] = 15] = "GOT_WOOD";
    QuestATrigger[QuestATrigger["TALKED_TO_FIRE_WITH_WOOD"] = 16] = "TALKED_TO_FIRE_WITH_WOOD";
    QuestATrigger[QuestATrigger["THROWN_WOOD_INTO_FIRE"] = 17] = "THROWN_WOOD_INTO_FIRE";
    QuestATrigger[QuestATrigger["APOCALYPSE_STARTED"] = 18] = "APOCALYPSE_STARTED";
    QuestATrigger[QuestATrigger["BEAT_FIRE"] = 19] = "BEAT_FIRE";
    QuestATrigger[QuestATrigger["BEAT_GAME"] = 20] = "BEAT_GAME";
})(QuestATrigger = exports.QuestATrigger || (exports.QuestATrigger = {}));
var QuestBTrigger;
(function (QuestBTrigger) {
    QuestBTrigger[QuestBTrigger["ENDING_TRIGGERED"] = 0] = "ENDING_TRIGGERED";
})(QuestBTrigger = exports.QuestBTrigger || (exports.QuestBTrigger = {}));
var QuestCTrigger;
(function (QuestCTrigger) {
    QuestCTrigger[QuestCTrigger["ENDING_TRIGGERED"] = 0] = "ENDING_TRIGGERED";
})(QuestCTrigger = exports.QuestCTrigger || (exports.QuestCTrigger = {}));
var QuestDTrigger;
(function (QuestDTrigger) {
    QuestDTrigger[QuestDTrigger["ENDING_TRIGGERED"] = 0] = "ENDING_TRIGGERED";
})(QuestDTrigger = exports.QuestDTrigger || (exports.QuestDTrigger = {}));
var QuestETrigger;
(function (QuestETrigger) {
    QuestETrigger[QuestETrigger["ENDING_TRIGGERED"] = 0] = "ENDING_TRIGGERED";
})(QuestETrigger = exports.QuestETrigger || (exports.QuestETrigger = {}));
class Quest {
    constructor(key, campaign, title, triggerIndices) {
        this.triggers = [];
        this.finished = false;
        this.key = key;
        this.campaign = campaign;
        this.title = title;
        this.triggers = triggerIndices.map(index => ({
            index,
            isTriggered: false
        }));
    }
    reset() {
        this.finished = false;
        this.triggers.forEach((t, i) => { this.untrigger(i); });
    }
    trigger(index) {
        if (this.triggers[index]) {
            this.triggers[index].isTriggered = true;
        }
    }
    untrigger(index) {
        if (this.triggers[index]) {
            this.triggers[index].isTriggered = false;
        }
    }
    getTriggers() {
        return this.triggers;
    }
    isTriggered(index) {
        return this.triggers[index].isTriggered || false;
    }
    allTriggered() {
        return this.triggers.every(trigger => trigger.isTriggered);
    }
    getHighestTriggerIndex() {
        return Math.max(...this.triggers.filter(t => t.isTriggered).map(t => t.index), -1);
    }
    finish() {
        this.finished = true;
    }
    isFinished() {
        return this.finished;
    }
}
exports.Quest = Quest;
/**
 * Standard Ending A. Follow the questline and beat the fire at the end
 */
class QuestA extends Quest {
    constructor(campaign) {
        super(QuestKey.A, campaign, "[A]POCALYPSE NOT NOW", Object.values(QuestATrigger).filter((i) => typeof i === "number"));
    }
}
exports.QuestA = QuestA;
/**
 * Ending B. Helped Dog and Beat fire
 */
class QuestB extends Quest {
    constructor(campaign) {
        super(QuestKey.B, campaign, "GOOD [B]OY", Object.values(QuestBTrigger).filter((i) => typeof i === "number"));
    }
}
exports.QuestB = QuestB;
/**
 * Ending C. Sequence broken and soft locked in cave
 */
class QuestC extends Quest {
    constructor(campaign) {
        super(QuestKey.C, campaign, "SOFT LO[C]KED", Object.values(QuestCTrigger).filter((i) => typeof i === "number"));
    }
}
exports.QuestC = QuestC;
/**
 * Ending D. Petted the dog for quite some time and transcended
 */
class QuestD extends Quest {
    constructor(campaign) {
        super(QuestKey.D, campaign, "[D]ROWNED IN ECSTASY", Object.values(QuestDTrigger).filter((i) => typeof i === "number"));
    }
}
exports.QuestD = QuestD;
/**
 * Ending E. Petted the dog for quite some time and transcended
 */
class QuestE extends Quest {
    constructor(campaign) {
        super(QuestKey.E, campaign, "AWAK[E]", Object.values(QuestETrigger).filter((i) => typeof i === "number"));
    }
}
exports.QuestE = QuestE;


/***/ }),

/***/ "./lib/Renderer.js":
/*!*************************!*\
  !*** ./lib/Renderer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = exports.LAYER_ORDER = exports.RenderingLayer = exports.RenderingType = void 0;
const SpeechBubble_1 = __webpack_require__(/*! ./SpeechBubble */ "./lib/SpeechBubble.js");
var RenderingType;
(function (RenderingType) {
    RenderingType[RenderingType["PARTICLE_EMITTER"] = 0] = "PARTICLE_EMITTER";
    RenderingType[RenderingType["FIRE"] = 1] = "FIRE";
    RenderingType[RenderingType["DANCE"] = 2] = "DANCE";
    RenderingType[RenderingType["BLACK_BARS"] = 3] = "BLACK_BARS";
    RenderingType[RenderingType["DRAW_IMAGE"] = 4] = "DRAW_IMAGE";
    RenderingType[RenderingType["ASEPRITE"] = 5] = "ASEPRITE";
    RenderingType[RenderingType["RECT"] = 6] = "RECT";
    RenderingType[RenderingType["SPEECH_BUBBLE"] = 7] = "SPEECH_BUBBLE";
    RenderingType[RenderingType["TEXT"] = 8] = "TEXT";
})(RenderingType = exports.RenderingType || (exports.RenderingType = {}));
var RenderingLayer;
(function (RenderingLayer) {
    RenderingLayer["DEBUG"] = "debug";
    RenderingLayer["FULLSCREEN_FX"] = "fullscreenFX";
    RenderingLayer["UI"] = "ui";
    RenderingLayer["BLACK_BARS"] = "blackBars";
    RenderingLayer["TILEMAP_FOREGROUND"] = "tilemapForeground";
    RenderingLayer["PLAYER"] = "player";
    RenderingLayer["ENTITIES"] = "entities";
    RenderingLayer["PLATFORMS"] = "platforms";
    RenderingLayer["TILEMAP_MAP"] = "tilemapMap";
    RenderingLayer["TILEMAP_BACKGROUND"] = "tilemapBackground";
    RenderingLayer["PARTICLES"] = "particles";
})(RenderingLayer = exports.RenderingLayer || (exports.RenderingLayer = {}));
exports.LAYER_ORDER = [
    RenderingLayer.DEBUG,
    RenderingLayer.FULLSCREEN_FX,
    RenderingLayer.UI,
    RenderingLayer.BLACK_BARS,
    RenderingLayer.TILEMAP_FOREGROUND,
    RenderingLayer.PLAYER,
    RenderingLayer.ENTITIES,
    RenderingLayer.PARTICLES,
    RenderingLayer.PLATFORMS,
    RenderingLayer.TILEMAP_MAP,
    RenderingLayer.TILEMAP_BACKGROUND,
];
class Renderer {
    constructor(scene) {
        this.layers = exports.LAYER_ORDER;
        this.queue = [];
        this.scene = scene;
    }
    draw(ctx) {
        [...this.layers].reverse().forEach(layer => {
            const itemsInLayer = this.queue.filter(item => item.layer === layer);
            itemsInLayer.forEach(item => {
                if (item.type === RenderingType.BLACK_BARS) {
                    this.scene.camera.drawBars(ctx);
                }
                else if (item.type === RenderingType.PARTICLE_EMITTER) {
                    item.emitter.draw(ctx);
                }
                else if (item.type === RenderingType.FIRE) {
                    item.entity.drawToCanvas(ctx);
                }
                else if (item.type === RenderingType.DANCE) {
                    item.dance.draw(ctx);
                }
                else {
                    ctx.save();
                    if (item.translation)
                        ctx.translate(item.translation.x, item.translation.y);
                    if (item.scale)
                        ctx.scale(item.scale.x, item.scale.y);
                    if (item.relativeToScreen)
                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                    if (item.globalCompositeOperation)
                        ctx.globalCompositeOperation = item.globalCompositeOperation;
                    if (item.alpha !== undefined)
                        ctx.globalAlpha = item.alpha;
                    switch (item.type) {
                        case RenderingType.DRAW_IMAGE:
                            ctx.drawImage(item.asset, item.position.x, item.position.y);
                            break;
                        case RenderingType.ASEPRITE:
                            item.asset.drawTag(ctx, item.animationTag, item.position.x, item.position.y, item.time);
                            break;
                        case RenderingType.RECT:
                            if (item.lineColor) {
                                ctx.strokeStyle = item.lineColor;
                                ctx.lineWidth = item.lineWidth || 1;
                                ctx.strokeRect(item.position.x, item.position.y, item.dimension.width, item.dimension.height);
                            }
                            else if (item.fillColor) {
                                ctx.fillStyle = item.fillColor;
                                ctx.fillRect(item.position.x, item.position.y, item.dimension.width, item.dimension.height);
                            }
                            break;
                        case RenderingType.SPEECH_BUBBLE:
                            ctx.beginPath();
                            ctx = SpeechBubble_1.roundRect(ctx, Math.round(item.position.x), Math.round(item.position.y), Math.round(item.dimension.width), Math.round(item.dimension.height), item.radius, item.relativeToScreen, Math.round(item.offsetX));
                            ctx.fillStyle = item.fillColor;
                            ctx.fill();
                            ctx.closePath();
                            break;
                        case RenderingType.TEXT:
                            if (item.outlineColor) {
                                item.asset.drawTextWithOutline(ctx, item.text, item.position.x, item.position.y, item.textColor, item.outlineColor);
                            }
                            else {
                                item.asset.drawText(ctx, item.text, item.position.x, item.position.y, item.textColor);
                            }
                            break;
                    }
                    ctx.restore();
                }
            });
        });
        this.queue = [];
    }
    add(item) {
        this.queue.push(item);
    }
    addAseprite(sprite, animationTag, x, y, layer, direction = 1, time, alpha) {
        const scale = direction < 0 ? { x: -1, y: 1 } : undefined;
        this.add({
            type: RenderingType.ASEPRITE,
            layer,
            translation: {
                x: x,
                y: -y
            },
            position: {
                x: -sprite.width >> 1,
                y: -sprite.height
            },
            scale,
            alpha,
            asset: sprite,
            animationTag,
            time: time || this.scene.gameTime * 1000
        });
    }
}
exports.Renderer = Renderer;


/***/ }),

/***/ "./lib/Scene.js":
/*!**********************!*\
  !*** ./lib/Scene.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const ControllerManager_1 = __webpack_require__(/*! ./input/ControllerManager */ "./lib/input/ControllerManager.js");
const RootNode_1 = __webpack_require__(/*! ./scene/RootNode */ "./lib/scene/RootNode.js");
/**
 * Abstract base class of a scene.
 *
 * @param T - The game type.
 * @param A - Optional scene argument type. A value of this type must be specified when setting or pushing a scene.
 *            Defaults to no argument (void type)
 */
class Scene {
    constructor(game) {
        this.game = game;
        this.zIndex = 0;
        this.currentTransition = null;
        this.inTransition = null;
        this.outTransition = null;
        this.usedLayers = 0;
        this.hiddenLayers = 0;
        this.backgroundStyle = null;
        this.rootNode = new RootNode_1.RootNode(this, (update, draw) => {
            this.updateRootNode = update;
            this.drawRootNode = draw;
        });
        this.rootNode.resizeTo(this.game.width, this.game.height);
    }
    get keyboard() {
        return this.game.keyboard;
    }
    get input() {
        return ControllerManager_1.ControllerManager.getInstance();
    }
    get scenes() {
        return this.game.scenes;
    }
    /**
     * Shows the given layer when it was previously hidden.
     *
     * @param layer - The layer to show (0-31).
     */
    showLayer(layer) {
        this.hiddenLayers &= ~(1 << layer);
        return this;
    }
    /**
     * Hides the given layer when it was previously shown.
     *
     * @param layer - The layer to hide (0-31).
     */
    hideLayer(layer) {
        this.hiddenLayers |= 1 << layer;
        return this;
    }
    /**
     * Checks if given layer is hidden.
     *
     * @param layer - The layer to check (0-31).
     * @return True if layer is hidden, false if not.
     */
    isLayerHidden(layer) {
        return (this.hiddenLayers & (1 << layer)) !== 0;
    }
    /**
     * Checks if given layer is shown.
     *
     * @param layer - The layer to check (0-31).
     * @return True if layer is shown, false if not.
     */
    isLayerShown(layer) {
        return (this.hiddenLayers & (1 << layer)) === 0;
    }
    /**
     * Returns the scene node with the given id.
     *
     * @param id - The ID to look for.
     * @return The matching scene node or null if none.
     */
    getNodeById(id) {
        return this.rootNode.getDescendantById(id);
    }
    /**
     * Returns the background style of this scene. This style is used to fill the background of the scene when set.
     *
     * @return The scene background style.
     */
    getBackgroundStyle() {
        return this.backgroundStyle;
    }
    /**
     * Sets the background style of this scene. This style is used to fill the background of the scene when set.
     *
     * @param backgroundStyle - The background style to set.
     */
    setBackgroundStyle(backgroundStyle) {
        this.backgroundStyle = backgroundStyle;
        return this;
    }
    /**
     * Checks if this scene is active.
     *
     * @return True if scene is active, false it not.
     */
    isActive() {
        return this.scenes.activeScene === this;
    }
    /**
     * Called when the scene is pushed onto the stack and before any transitions.
     *
     * @param args - The scene arguments (if any).
     */
    setup(args) { }
    /**
     * Called when the scene becomes the top scene on the stack and after the on-stage transition is complete.
     */
    activate() { }
    /**
     * Called when the scene is no longer the top scene on the stack and before the off-stage transition begins.
     */
    deactivate() { }
    /**
     * Called when the scene is popped from the scene stack, after any transitions are complete.
     */
    cleanup() { }
    /**
     * Updates the scene. Scenes can overwrite this method to do its own drawing but when you are going to use the
     * scene graph then make sure to call the super method in your overwritten method or the scene graph will not be
     * updated.
     */
    update(dt) {
        this.usedLayers = this.updateRootNode(dt);
    }
    /**
     * Draws the scene. Scenes can overwrite this method to do its own drawing but when you are going to use the
     * scene graph then make sure to call the super method in your overwritten method or the scene graph will not be
     * rendered.
     *
     * @param ctx    - The rendering context.
     * @param width  - The scene width.
     * @param height - The scene height.
     */
    draw(ctx, width, height) {
        if (this.backgroundStyle != null) {
            ctx.save();
            ctx.fillStyle = this.backgroundStyle;
            ctx.fillRect(0, 0, width, height);
        }
        let layer = 1;
        let usedLayers = this.usedLayers & ~this.hiddenLayers;
        while (usedLayers !== 0) {
            if ((usedLayers & 1) === 1) {
                this.drawRootNode(ctx, layer, width, height);
            }
            usedLayers >>>= 1;
            layer <<= 1;
        }
    }
}
exports.Scene = Scene;


/***/ }),

/***/ "./lib/Scenes.js":
/*!***********************!*\
  !*** ./lib/Scenes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Scenes = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
class Scenes {
    constructor(game) {
        this.game = game;
        this.activeScene = null;
        this.sceneCache = new WeakMap();
        this.scenes = [];
        this.sortedScenes = [];
    }
    createScene(sceneClass) {
        let scene = this.sceneCache.get(sceneClass);
        if (scene == null) {
            scene = new sceneClass(this.game);
            this.sceneCache.set(sceneClass, scene);
        }
        return scene;
    }
    pushScene(sceneClass, args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.activeScene != null) {
                yield this.activeScene.deactivate();
            }
            const scene = this.createScene(sceneClass);
            yield scene.setup(args);
            this.scenes.push(scene);
            this.updateSortedScenes();
            if (scene.inTransition != null) {
                scene.currentTransition = scene.inTransition;
                yield scene.currentTransition.start("in");
                scene.currentTransition = null;
            }
            yield scene.activate();
            this.activeScene = scene;
        });
    }
    getPreviousScene() {
        var _a;
        return (_a = this.scenes[this.scenes.length - 2]) !== null && _a !== void 0 ? _a : null;
    }
    popScene({ noTransition = false } = {}) {
        var _a;
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const activeScene = this.activeScene;
            if (activeScene != null) {
                yield activeScene.deactivate();
                if (!noTransition && activeScene.outTransition != null) {
                    activeScene.currentTransition = activeScene.outTransition;
                    yield activeScene.currentTransition.start("out");
                    activeScene.currentTransition = null;
                }
                this.scenes.pop();
                this.updateSortedScenes();
                yield activeScene.cleanup();
                this.activeScene = (_a = this.scenes[this.scenes.length - 1]) !== null && _a !== void 0 ? _a : null;
                if (this.activeScene != null) {
                    yield this.activeScene.activate();
                }
            }
            return activeScene;
        });
    }
    setScene(newSceneClass, args) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const currentScene = this.activeScene;
            if (currentScene == null) {
                return this.pushScene(newSceneClass, args);
            }
            yield currentScene.deactivate();
            let outTransitionPromise = null;
            if (currentScene.outTransition) {
                currentScene.currentTransition = currentScene.outTransition;
                outTransitionPromise = currentScene.currentTransition.start("out");
            }
            const currentSceneIndex = this.scenes.length - 1;
            const newScene = this.createScene(newSceneClass);
            yield newScene.setup(args);
            this.scenes.push(newScene);
            this.updateSortedScenes();
            if (newScene.inTransition != null) {
                newScene.currentTransition = newScene.inTransition;
                yield newScene.currentTransition.start("in");
                newScene.currentTransition = null;
            }
            yield newScene.activate();
            this.activeScene = newScene;
            if (outTransitionPromise != null) {
                yield outTransitionPromise;
                currentScene.currentTransition = null;
            }
            this.scenes.splice(currentSceneIndex, 1);
            this.updateSortedScenes();
            currentScene.cleanup();
        });
    }
    updateSortedScenes() {
        this.sortedScenes = this.scenes.slice().sort((a, b) => {
            if (a.zIndex === b.zIndex) {
                return this.scenes.indexOf(a) - this.scenes.indexOf(b);
            }
            else {
                return a.zIndex - b.zIndex;
            }
        });
    }
    update(dt) {
        this.sortedScenes.forEach(scene => {
            var _a;
            (_a = scene.currentTransition) === null || _a === void 0 ? void 0 : _a.update(dt);
            scene.update(dt);
        });
    }
    draw(ctx, width, height) {
        this.sortedScenes.forEach(scene => {
            ctx.save();
            if (scene.currentTransition != null) {
                scene.currentTransition.draw(ctx, () => scene.draw(ctx, width, height), width, height);
            }
            else {
                scene.draw(ctx, width, height);
            }
            ctx.restore();
        });
    }
}
exports.Scenes = Scenes;


/***/ }),

/***/ "./lib/Signal.js":
/*!***********************!*\
  !*** ./lib/Signal.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Signal = void 0;
/**
 * Internally used container for a slot (A callback function with a calling context).
 */
class Slot {
    constructor(callback, context) {
        this.callback = callback;
        this.context = context;
    }
    call(value) {
        this.callback.call(this.context, value);
    }
}
/**
 * Light-weight and very fast signal/slot based event system. Just create a signal instance, connect slots
 * (event listeners) to it and then let the signal emit values which are then send to all connected slots.
 * Slots can be methods and it's easy to disconnect them again using the disconnect() method or calling the function
 * returned by connect().
 */
class Signal {
    /**
     * Creates a new signal with the given optional initialization function.
     *
     * @param onInit - Optional initialization function which is called when the first slot is connected to the signal.
     *                 This function can return an optional deinitialization function which is called after the last
     *                 slot has been disconnected.
     */
    constructor(onInit) {
        this.slots = [];
        this.onDone = null;
        this.onInit = onInit !== null && onInit !== void 0 ? onInit : null;
    }
    /**
     * Connects a slot to this signal.
     *
     * @param callback - The slot callback function to call when signal emits a value.
     * @param context  - Optional context to call the slot callback function on. This is useful for connecting methods.
     * @return A function which can be called to disconnect the slot from the signal again.
     */
    connect(callback, context) {
        if (this.onInit != null && this.slots.length === 0) {
            this.onDone = this.onInit(this) || null;
        }
        this.slots.push(new Slot(callback, context));
        return () => this.disconnect(callback, context);
    }
    /**
     * Disconnects a slot from this signal.
     *
     * @param callback - The slot callback function to disconnect from the signal.
     * @param context  - Optional context. Needed to disconnect methods.
     */
    disconnect(callback, context) {
        const index = this.slots.findIndex(slot => slot.callback === callback && slot.context === context);
        if (index >= 0) {
            this.slots.splice(index, 1);
        }
        if (this.onDone != null && this.slots.length === 0) {
            this.onDone(this);
            this.onDone = null;
        }
    }
    /**
     * Emits the given value to all connected slots.
     *
     * @param value - The value to emit.
     */
    emit(value) {
        this.slots.forEach(slot => slot.call(value));
    }
    /**
     * Returns a new signal which only emits the values matching the giving predicate.
     *
     * @parm predicate - The function which decides if the value is emitted or not.
     * @return The new signal.
     */
    filter(predicate) {
        return new Signal(signal => this.connect(value => {
            if (predicate(value)) {
                signal.emit(value);
            }
        }));
    }
    /**
     * Returns a new signal which maps all emitted values to something else.
     *
     * @param mapper - The function which maps the original value to something new.
     * @return The new signal.
     */
    map(mapper) {
        return new Signal(signal => this.connect(value => {
            return signal.emit(mapper(value));
        }));
    }
}
exports.Signal = Signal;


/***/ }),

/***/ "./lib/Sound.js":
/*!**********************!*\
  !*** ./lib/Sound.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sound = exports.getGlobalGainNode = exports.getAudioContext = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const ControllerManager_1 = __webpack_require__(/*! ./input/ControllerManager */ "./lib/input/ControllerManager.js");
// Get cross-browser AudioContext (Safari still uses webkitAudioContext…)
const AudioContext = (_a = window.AudioContext) !== null && _a !== void 0 ? _a : window.webkitAudioContext;
let audioContext = null;
let globalGainNode = null;
function getAudioContext() {
    const controllerManager = ControllerManager_1.ControllerManager.getInstance();
    if (audioContext == null) {
        audioContext = new AudioContext();
        // When audio context is suspended then try to wake it up on next key or pointer press
        if (audioContext.state === "suspended") {
            const resume = () => {
                audioContext === null || audioContext === void 0 ? void 0 : audioContext.resume();
            };
            controllerManager.onButtonDown.connect(resume);
            document.addEventListener("pointerdown", resume);
            audioContext.addEventListener("statechange", () => {
                if ((audioContext === null || audioContext === void 0 ? void 0 : audioContext.state) === "running") {
                    controllerManager.onButtonDown.disconnect(resume);
                    document.removeEventListener("pointerdown", resume);
                }
            });
        }
    }
    return audioContext;
}
exports.getAudioContext = getAudioContext;
function getGlobalGainNode() {
    if (globalGainNode == null) {
        const audioContext = getAudioContext();
        globalGainNode = audioContext.createGain();
        globalGainNode.connect(audioContext.destination);
    }
    return globalGainNode;
}
exports.getGlobalGainNode = getGlobalGainNode;
class Sound {
    constructor(buffer) {
        this.buffer = buffer;
        this.source = null;
        this.loop = false;
        this.gainNode = getAudioContext().createGain();
        this.gainNode.connect(getGlobalGainNode());
    }
    static load(url) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const arrayBuffer = yield (yield fetch(url)).arrayBuffer();
            return new Promise((resolve, reject) => {
                getAudioContext().decodeAudioData(arrayBuffer, buffer => resolve(new Sound(buffer)), error => reject(error));
            });
        });
    }
    isPlaying() {
        return this.source != null;
    }
    play() {
        if (!this.isPlaying()) {
            const source = getAudioContext().createBufferSource();
            source.buffer = this.buffer;
            source.loop = this.loop;
            source.connect(this.gainNode);
            source.addEventListener("ended", () => {
                if (this.source === source) {
                    this.source = null;
                }
            });
            this.source = source;
            source.start();
        }
    }
    stop() {
        if (this.source) {
            try {
                this.source.stop();
            }
            catch (e) {
                // Ignored. Happens on Safari sometimes. Can't stop a sound which may not be really playing?
            }
            this.source = null;
        }
    }
    setLoop(loop) {
        this.loop = loop;
        if (this.source) {
            this.source.loop = loop;
        }
    }
    setVolume(volume) {
        const gain = this.gainNode.gain;
        gain.value = util_1.clamp(volume, gain.minValue, gain.maxValue);
    }
}
exports.Sound = Sound;


/***/ }),

/***/ "./lib/SoundEmitter.js":
/*!*****************************!*\
  !*** ./lib/SoundEmitter.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundEmitter = void 0;
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const Entity_1 = __webpack_require__(/*! ./Entity */ "./lib/Entity.js");
/**
 * Sound emitters are invisible entities that emit a sound in relation to the player distance.
 * Might be better to set the volume according to the camera center in the future.
 */
class SoundEmitter extends Entity_1.Entity {
    constructor(scene, x, y, sound, maxVolume, intensity) {
        super(scene, x, y, 1, 1);
        this.sound = sound;
        this.maxVolume = maxVolume;
        this.intensity = intensity;
    }
    draw() { }
    update() {
        const vol = this.scene.paused ? 0 : util_1.calculateVolume(this.distanceToPlayer, this.maxVolume, this.intensity);
        if (vol) {
            this.sound.setVolume(vol);
            if (!this.sound.isPlaying())
                this.sound.play();
        }
        else {
            this.sound.stop();
        }
    }
    static fromGameObjectInfo(scene, gameObjectInfo) {
        const soundId = gameObjectInfo.properties.sound;
        const volume = gameObjectInfo.properties.volume || 1;
        const intensity = gameObjectInfo.properties.intensity || 1;
        if (soundId) {
            const sound = scene.ambientSounds[soundId];
            if (sound) {
                return new SoundEmitter(scene, gameObjectInfo.x, gameObjectInfo.y, sound, volume, intensity);
            }
            else {
                throw new Error(`Cannot create sound emitter because '${soundId}' is not a valid ambient sound ID.`);
            }
        }
        else {
            throw new Error("Cannot create sound emitter because 'sound' property is empty.");
        }
    }
}
exports.SoundEmitter = SoundEmitter;


/***/ }),

/***/ "./lib/SpeechBubble.js":
/*!*****************************!*\
  !*** ./lib/SpeechBubble.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpeechBubble = exports.roundRect = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ./BitmapFont */ "./lib/BitmapFont.js");
const Conversation_1 = __webpack_require__(/*! ./Conversation */ "./lib/Conversation.js");
const constants_1 = __webpack_require__(/*! ./constants */ "./lib/constants.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
function roundRect(ctx, x, y, w, h, r, up = false, tipOffset = 0) {
    const halfWidth = w / 2;
    const halfHeight = h / 2;
    const middlePos = x + halfWidth;
    const rightPos = x + w;
    const bottomPos = y + h;
    if (w < 2 * r) {
        r = halfWidth;
    }
    if (h < 2 * r) {
        r = halfHeight;
    }
    ctx.beginPath();
    ctx.moveTo(x + r, y);
    if (up) {
        ctx.lineTo(middlePos - 4, y);
        ctx.lineTo(middlePos, y - 4);
        ctx.lineTo(middlePos + 4, y);
    }
    ctx.arcTo(rightPos, y, rightPos, bottomPos, r);
    ctx.arcTo(rightPos, bottomPos, x, bottomPos, r);
    if (!up) {
        ctx.lineTo(middlePos - 4 + tipOffset, bottomPos);
        ctx.lineTo(middlePos + tipOffset, bottomPos + 4);
        ctx.lineTo(middlePos + 4 + tipOffset, bottomPos);
    }
    ctx.arcTo(x, bottomPos, x, y, r);
    ctx.arcTo(x, y, rightPos, y, r);
    ctx.closePath();
    return ctx;
}
exports.roundRect = roundRect;
class SpeechBubble {
    constructor(scene, anchorX, anchorY, lineHeightFactor = 1, paddingTop = 3, paddingBottom = 4, paddingLeft = 7, paddingRight = 7, color = "white", relativeToScreen = false) {
        this.scene = scene;
        this.anchorX = anchorX;
        this.anchorY = anchorY;
        this.lineHeightFactor = lineHeightFactor;
        this.paddingTop = paddingTop;
        this.paddingBottom = paddingBottom;
        this.paddingLeft = paddingLeft;
        this.paddingRight = paddingRight;
        this.color = color;
        this.relativeToScreen = relativeToScreen;
        this.messageLines = [];
        this.options = [];
        this.selectedOptionIndex = -1;
        this.fontSize = SpeechBubble.font.charHeight;
        this.lineHeight = this.fontSize;
        this.height = 0;
        this.offset = { x: 0, y: 40 };
        this.messageVelocity = 20;
        this.isCurrentlyWriting = false;
        this.preventUnwantedSelection = false;
        this.isVisible = false;
        this.content = [];
        this.longestLine = 0;
        this.partnersBubble = null;
        this.x = Math.round(anchorX + this.offset.x);
        this.y = Math.round(anchorY + this.offset.y);
        this.lineHeight = Math.round(this.fontSize * this.lineHeightFactor);
        this.paddingHorizontal = this.paddingLeft + this.paddingRight;
        this.paddingVertical = this.paddingTop + this.paddingBottom;
    }
    show() {
        this.isVisible = true;
    }
    hide() {
        this.isVisible = false;
    }
    hasContent() {
        return this.content.length > 0 &&
            (!this.partnersBubble || !this.partnersBubble.isCurrentlyWriting && this.selectedOptionIndex > -1);
    }
    setMessage(message) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.messageLines = [""];
            this.isCurrentlyWriting = true;
            this.longestLine = this.determineMaxLineLength(message.split("\n"));
            let index = 0;
            for (const char of message) {
                if (!char) {
                    index++;
                    continue;
                }
                if (char === "\n") {
                    index++;
                    this.messageLines.push("");
                    continue;
                }
                this.messageLines[index] += char;
                if (this.isCurrentlyWriting) {
                    yield util_1.sleep(this.messageVelocity);
                }
                this.updateContent();
            }
            this.preventUnwantedSelection = true;
            this.updateContent();
            this.isCurrentlyWriting = false;
            setTimeout(() => {
                this.preventUnwantedSelection = false;
            }, 300);
        });
    }
    setOptions(options, partnersBubble) {
        this.partnersBubble = partnersBubble;
        this.options = options;
        this.selectedOptionIndex = this.options.length > 0 ? 0 : -1;
        this.updateContent();
        this.longestLine = this.determineMaxLineLength(this.messageLines);
    }
    updateContent() {
        this.content = this.messageLines.concat(this.options);
        this.height = (this.content.length - 1) * this.lineHeight + this.fontSize + this.paddingVertical;
    }
    draw(ctx) {
        if (!this.isVisible
            || !this.hasContent()
            || !this.scene.camera.isOnTarget()
            || !this.scene.isActive()) {
            return;
        }
        let posX = this.x;
        let posY = this.y;
        let offsetX = 0;
        if (this.relativeToScreen) {
            posX = Math.round(ctx.canvas.width / 2);
            posY = Math.round(-ctx.canvas.height * 0.63 - this.height);
        }
        else {
            // Check if Speech Bubble clips the viewport and correct position
            const visibleRect = this.scene.camera.getVisibleRect();
            const relativeX = posX - visibleRect.x;
            const clipAmount = Math.max((this.longestLine / 2) + relativeX - constants_1.GAME_CANVAS_WIDTH, 0)
                || Math.min(relativeX - (this.longestLine / 2), 0);
            if (clipAmount !== 0) {
                offsetX = clipAmount + (10 * Math.sign(clipAmount));
            }
        }
        posX -= offsetX;
        const bubbleXPos = posX - Math.round(this.longestLine / 2) - this.paddingLeft;
        const bubbleYPos = -posY - this.height;
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.SPEECH_BUBBLE,
            layer: Renderer_1.RenderingLayer.UI,
            fillColor: this.color,
            position: {
                x: bubbleXPos,
                y: bubbleYPos
            },
            dimension: {
                width: this.longestLine + this.paddingHorizontal,
                height: this.height
            },
            radius: 5,
            relativeToScreen: this.relativeToScreen,
            offsetX
        });
        const textXPos = bubbleXPos + this.paddingLeft;
        const textColor = "black";
        for (let i = 0; i < this.messageLines.length; i++) {
            const textYPos = Math.round(bubbleYPos + this.paddingTop + i * this.lineHeight);
            this.scene.renderer.add({
                type: Renderer_1.RenderingType.TEXT,
                layer: Renderer_1.RenderingLayer.UI,
                text: this.messageLines[i],
                textColor: textColor,
                relativeToScreen: this.relativeToScreen,
                position: {
                    x: textXPos,
                    y: textYPos
                },
                asset: SpeechBubble.font,
            });
        }
        for (let i = 0; i < this.options.length; i++) {
            const isSelected = this.selectedOptionIndex === i;
            const textYPos = Math.round(bubbleYPos + this.paddingTop + i * this.lineHeight);
            if (isSelected) {
                this.scene.renderer.add({
                    type: Renderer_1.RenderingType.TEXT,
                    layer: Renderer_1.RenderingLayer.UI,
                    text: Conversation_1.ConversationLine.OPTION_MARKER,
                    textColor: textColor,
                    relativeToScreen: this.relativeToScreen,
                    position: {
                        x: textXPos,
                        y: textYPos
                    },
                    asset: SpeechBubble.font
                });
            }
            this.scene.renderer.add({
                type: Renderer_1.RenderingType.TEXT,
                layer: Renderer_1.RenderingLayer.UI,
                text: this.options[i],
                textColor: textColor,
                relativeToScreen: this.relativeToScreen,
                position: {
                    x: textXPos + SpeechBubble.OPTION_BUBBLE_INDENTATION,
                    y: textYPos
                },
                asset: SpeechBubble.font
            });
        }
    }
    update(anchorX, anchorY) {
        this.x = Math.round(anchorX + this.offset.x);
        this.y = Math.round(anchorY + this.offset.y);
    }
    determineMaxLineLength(message) {
        let lineLengths = message.map(line => SpeechBubble.font.measureText(line).width);
        lineLengths = lineLengths.concat(this.options.map(line => SpeechBubble.font.measureText(line).width + SpeechBubble.OPTION_BUBBLE_INDENTATION));
        return Math.max(...lineLengths);
    }
}
SpeechBubble.OPTION_BUBBLE_INDENTATION = 11;
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], SpeechBubble, "font", void 0);
exports.SpeechBubble = SpeechBubble;


/***/ }),

/***/ "./lib/Transition.js":
/*!***************************!*\
  !*** ./lib/Transition.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Transition = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const easings_1 = __webpack_require__(/*! ./easings */ "./lib/easings.js");
class Transition {
    constructor({ duration = 0.5, easing = easings_1.linear } = {}) {
        this.type = "out";
        this.elapsed = 0;
        this.resolve = null;
        this.promise = null;
        this.duration = duration;
        this.easing = easing;
    }
    valueOf() {
        const value = this.easing(util_1.clamp(this.elapsed / this.duration, 0, 1));
        return this.type === "out" ? value : (1 - value);
    }
    update(dt) {
        if (this.promise != null) {
            this.elapsed += dt;
            if (this.elapsed >= this.duration) {
                this.stop();
            }
        }
    }
    draw(ctx, draw, width, height) { }
    start(type) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.promise == null) {
                this.type = type;
                this.elapsed = 0;
                this.promise = new Promise(resolve => { this.resolve = resolve; });
            }
            return this.promise;
        });
    }
    stop() {
        if (this.resolve != null) {
            this.resolve();
            this.resolve = null;
            this.promise = null;
        }
    }
}
exports.Transition = Transition;


/***/ }),

/***/ "./lib/World.js":
/*!**********************!*\
  !*** ./lib/World.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.World = exports.validEnvironments = exports.Environment = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ./Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ./Entity */ "./lib/Entity.js");
const util_1 = __webpack_require__(/*! ./util */ "./lib/util.js");
const GameScene_1 = __webpack_require__(/*! ./scenes/GameScene */ "./lib/scenes/GameScene.js");
const graphics_1 = __webpack_require__(/*! ./graphics */ "./lib/graphics.js");
const Particles_1 = __webpack_require__(/*! ./Particles */ "./lib/Particles.js");
const Renderer_1 = __webpack_require__(/*! ./Renderer */ "./lib/Renderer.js");
const constants_1 = __webpack_require__(/*! ./constants */ "./lib/constants.js");
var Environment;
(function (Environment) {
    Environment[Environment["AIR"] = 0] = "AIR";
    Environment[Environment["SOLID"] = 4278190080] = "SOLID";
    Environment[Environment["PLATFORM"] = 4286545791] = "PLATFORM";
    Environment[Environment["BOUNCE"] = 4294901760] = "BOUNCE";
    Environment[Environment["WATER"] = 4278190335] = "WATER";
    Environment[Environment["SOIL"] = 4294967040] = "SOIL";
    Environment[Environment["RAINCLOUD"] = 4278255360] = "RAINCLOUD";
})(Environment = exports.Environment || (exports.Environment = {}));
exports.validEnvironments = Object.values(Environment);
class World {
    constructor(scene) {
        this.raining = false;
        this.scene = scene;
        const rainSpawnPosition = this.scene.pointsOfInterest.find(o => o.name === "rain_spawn_position");
        if (!rainSpawnPosition) {
            throw new Error("Missing 'rain_spawn_position' point in map data to place rain emitter");
        }
        this.rainEmitter = this.scene.particles.createEmitter({
            position: { x: rainSpawnPosition.x, y: rainSpawnPosition.y },
            offset: () => ({ x: util_1.rnd(-1, 1) * 26, y: util_1.rnd(-1, 1) * 5 }),
            velocity: () => ({ x: util_1.rnd(-1, 1) * 5, y: -util_1.rnd(50, 80) }),
            color: () => World.raindrop,
            size: 4,
            gravity: { x: 0, y: -100 },
            lifetime: () => 3,
            alpha: 0.6,
            alphaCurve: Particles_1.valueCurves.linear.invert()
        });
    }
    getWidth() {
        return World.foreground.width;
    }
    getHeight() {
        return World.foreground.height;
    }
    update() {
        if (this.raining) {
            this.rainEmitter.emit(util_1.rndInt(1, 4));
        }
    }
    draw(ctx, width, height) {
        const camX = this.scene.camera.x;
        const camY = this.scene.camera.y;
        const posXMultiplier = 1 - (camX / this.getWidth() * 2);
        let alpha = 1;
        if (this.scene.pettingCutscene) {
            alpha = Math.max(0, 1 - (this.scene.pettingCutsceneTime / constants_1.PETTING_ENDING_CUTSCENE_DURATION));
        }
        if (this.scene.windowCutscene) {
            alpha = Math.max(0, 1 - (this.scene.windowCutsceneTime / (constants_1.WINDOW_ENDING_CUTSCENE_DURATION / 1.5)));
        }
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.DRAW_IMAGE,
            layer: Renderer_1.RenderingLayer.TILEMAP_MAP,
            translation: { x: camX, y: -camY },
            position: { x: -camX, y: -this.getHeight() + camY },
            asset: World.foreground,
            alpha: alpha
        });
        for (const background of World.backgrounds) {
            const bgX = this.getWidth() / background.width;
            const bgY = this.getHeight() / background.height;
            this.scene.renderer.add({
                type: Renderer_1.RenderingType.DRAW_IMAGE,
                layer: Renderer_1.RenderingLayer.TILEMAP_BACKGROUND,
                translation: { x: camX, y: -camY },
                position: {
                    x: (-camX / bgX) + (-posXMultiplier * (width / 2)),
                    y: (-this.getHeight() + camY) / bgY
                },
                asset: background,
                alpha: alpha
            });
        }
    }
    getEnvironment(x, y) {
        const index = (this.getHeight() - 1 - Math.round(y)) * this.getWidth() + Math.round(x);
        if (index < 0 || index >= World.collisionMap.length) {
            return Environment.AIR;
        }
        return World.collisionMap[index];
    }
    /**
     * Checks if the given position collides with the world.
     *
     * @param x - X position within the world.
     * @param y - Y position within the world.
     * @return 0 if no collision. Anything else is a specific collision type (actually an RGBA color
     *         which has specific meaning which isn't defined yet).
     */
    collidesWith(x, y, ignoreObjects = [], ignore = []) {
        for (const gameObject of this.scene.gameObjects) {
            if (gameObject !== this
                && !ignoreObjects.includes(gameObject)
                && GameScene_1.isCollidableGameObject(gameObject)) {
                const environment = gameObject.collidesWith(x, y);
                if (environment !== Environment.AIR && !ignore.includes(environment)) {
                    return environment;
                }
            }
        }
        const index = (this.getHeight() - 1 - Math.round(y)) * this.getWidth() + Math.round(x);
        if (index < 0 || index >= World.collisionMap.length) {
            return 0;
        }
        const environment = this.getEnvironment(x, y);
        if (!exports.validEnvironments.includes(environment)
            || (ignore && ignore.includes(environment))) {
            return Environment.AIR;
        }
        return World.collisionMap[index];
    }
    /**
     * Checks if a specific entity (`sourceEntity`) collides with either of of the entities in the
     * gameObjects array of the GameScene and returns all entities that currently collide.
     * `Particles` are taken out of this check automatically.
     *
     * @param sourceEntity    - The entity to be checked against the other entities
     * @param margin          - Optional margin added to the bounding boxes of the entities to
     *                          extend collision radius
     * @param ignoreEntities  - Array of entities to be ignored with this check
     * @return                - An array containing all entities that collide with the source
     *                          entity.
     */
    getEntityCollisions(sourceEntity, margin = 0, ignoreEntities = []) {
        const collidesWith = [];
        for (const gameObject of this.scene.gameObjects) {
            if (gameObject !== sourceEntity
                && !(gameObject instanceof Particles_1.Particles)
                && gameObject instanceof Entity_1.Entity
                && gameObject.isTrigger
                && !ignoreEntities.includes(gameObject)) {
                const colliding = this.boundingBoxesCollide(sourceEntity.getBounds(margin), gameObject.getBounds(margin));
                if (colliding) {
                    collidesWith.push(gameObject);
                }
            }
        }
        return collidesWith;
    }
    /**
     * Returns all triggers that do collide with the provided entity
     * @param sourceEntity Entity to check collisions against trigger boxes
     */
    getTriggerCollisions(sourceEntity) {
        const collidesWith = [];
        for (const triggerObject of this.scene.triggerObjects) {
            const colliding = this.boundingBoxesCollide(sourceEntity.getBounds(), util_1.boundsFromMapObject(triggerObject));
            if (colliding) {
                collidesWith.push(triggerObject);
            }
        }
        return collidesWith;
    }
    getGateCollisions(sourceEntity) {
        const collidesWith = [];
        for (const gateObject of this.scene.gateObjects) {
            const colliding = this.boundingBoxesCollide(sourceEntity.getBounds(), util_1.boundsFromMapObject(gateObject, 0));
            if (colliding && !gateObject.properties.disabled) {
                collidesWith.push(gateObject);
            }
        }
        return collidesWith;
    }
    getCameraBounds(sourceEntity) {
        const collidesWith = [];
        for (const triggerObject of this.scene.boundObjects) {
            const colliding = this.boundingBoxesCollide(sourceEntity.getBounds(), util_1.boundsFromMapObject(triggerObject));
            if (colliding) {
                collidesWith.push(triggerObject);
            }
        }
        return collidesWith;
    }
    /**
     * Checks if the two provided bounding boxes are touching each other
     * @param box1 first bounding box
     * @param box2 second bounding box
     * @return `true` when the bounding boxes are touching, `false` if not.
     */
    boundingBoxesCollide(box1, box2) {
        return !(((box1.y - box1.height) > (box2.y)) ||
            (box1.y < (box2.y - box2.height)) ||
            ((box1.x + box1.width) < box2.x) ||
            (box1.x > (box2.x + box2.width)));
    }
    getObjectAt(x, y, ignoreObjects = [], ignore = []) {
        for (const gameObject of this.scene.gameObjects) {
            if (gameObject !== this
                && !ignoreObjects.includes(gameObject)
                && GameScene_1.isCollidableGameObject(gameObject)) {
                const environment = gameObject.collidesWith(x, y);
                if (environment !== Environment.AIR && !ignore.includes(environment)) {
                    return gameObject;
                }
            }
        }
        return null;
    }
    /**
     * Check collision of a vertical line with the world.
     *
     * @param x      - X position within the world.
     * @param y      - Y start position of the line in the world.
     * @param height - The height of the line to check
     * @return 0 if no collision. Type of first collision along the line otherwise.
     */
    collidesWithVerticalLine(x, y, height, ignoreObjects, ignore) {
        for (let i = 0; i < height; i++) {
            const collision = this.collidesWith(x, y - i, ignoreObjects, ignore);
            if (collision) {
                return collision;
            }
        }
        return 0;
    }
    /**
     * Returns the Y coordinate of the ground below the given world coordinate.
     *
     * @param x - X coordinate of current position.
     * @param y - Y coordinate of current position.
     * @return The Y coordinate of the ground below the given coordinate.
     */
    getGround(x, y, ignoreObjects, ignore) {
        while (y > 0 && !this.collidesWith(x, y, ignoreObjects, ignore)) {
            y--;
        }
        return y;
    }
    startRain() {
        this.raining = true;
    }
    stopRain() {
        this.raining = false;
    }
    isRaining() {
        return this.raining;
    }
}
tslib_1.__decorate([
    Assets_1.asset("maps/level.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], World, "foreground", void 0);
tslib_1.__decorate([
    Assets_1.asset("maps/level_collision.png", {
        map: (image) => new Uint32Array(graphics_1.getImageData(image).data.buffer)
    }),
    tslib_1.__metadata("design:type", Uint32Array)
], World, "collisionMap", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "maps/bg.png",
        "maps/bg2.png",
        "maps/bg3.png"
    ]),
    tslib_1.__metadata("design:type", Array)
], World, "backgrounds", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/raindrop.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], World, "raindrop", void 0);
exports.World = World;


/***/ }),

/***/ "./lib/constants.js":
/*!**************************!*\
  !*** ./lib/constants.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WINDOW_ENDING_FADE_DURATION = exports.WINDOW_ENDING_CUTSCENE_DURATION = exports.PETTING_ENDING_FADE_DURATION = exports.PETTING_ENDING_CUTSCENE_DURATION = exports.DIALOG_FONT = exports.PLAYER_CARRY_HEIGHT = exports.PLAYER_WIDTH = exports.PLAYER_HEIGHT = exports.DOUBLE_JUMP_COLORS = exports.PLAYER_JUMP_TIMING_THRESHOLD = exports.TERMINAL_VELOCITY = exports.PLAYER_BOUNCE_HEIGHT = exports.PLAYER_JUMP_HEIGHT = exports.PLAYER_ACCELERATION_AIR = exports.PLAYER_ACCELERATION = exports.MAX_PLAYER_RUNNING_SPEED = exports.MAX_PLAYER_SPEED = exports.DROWNING_VELOCITY = exports.SHORT_JUMP_GRAVITY = exports.GRAVITY = exports.SOUND_INTENSITY_MULTIPLIER = exports.METER_PER_PIXEL = exports.PIXEL_PER_METER = exports.GAME_CANVAS_HEIGHT = exports.GAME_CANVAS_WIDTH = void 0;
/**
 * Width of the game canvas in pixels.
 */
exports.GAME_CANVAS_WIDTH = 480;
/**
 * Height of the game canvas in pixels.
 */
exports.GAME_CANVAS_HEIGHT = 270;
/**
 * Number if pixels per meter on the world map. Used to convert from pixel coordinates to meters (for size and
 * physics calculations).
 */
exports.PIXEL_PER_METER = 18;
exports.METER_PER_PIXEL = 1 / exports.PIXEL_PER_METER;
exports.SOUND_INTENSITY_MULTIPLIER = 50;
/** Gravity in m/s² */
exports.GRAVITY = 35;
/** Gravity for short jumps (while flying upwards, after player releases jump key) in m/s² */
exports.SHORT_JUMP_GRAVITY = 70;
/** Drowning velocity in meters per second. */
exports.DROWNING_VELOCITY = -1;
/** Maximum movement speed of the player in m/s */
exports.MAX_PLAYER_SPEED = 5;
/** Maximum movement speed of the player in m/s */
exports.MAX_PLAYER_RUNNING_SPEED = 7;
/** Player movement acceleration on ground in m/s² */
exports.PLAYER_ACCELERATION = 30;
/** Player movement acceleration in air in m/s² */
exports.PLAYER_ACCELERATION_AIR = 12;
/** Player jump height in meters. */
exports.PLAYER_JUMP_HEIGHT = 3.75;
/** Player jump height in meters. */
exports.PLAYER_BOUNCE_HEIGHT = 10;
/** Terminal velocity in m/s */
exports.TERMINAL_VELOCITY = -30;
/** Threshold in seconds for allowing a jump after entering falling state */
exports.PLAYER_JUMP_TIMING_THRESHOLD = 0.1;
/** Color array containing all double jump particle colors */
exports.DOUBLE_JUMP_COLORS = ["#ffffff", "#cccccc", "#aaaaaa"];
/** Player dimensions */
exports.PLAYER_HEIGHT = 1.60 * exports.PIXEL_PER_METER;
exports.PLAYER_WIDTH = 0.5 * exports.PIXEL_PER_METER;
exports.PLAYER_CARRY_HEIGHT = 4;
/** Fonts */
exports.DIALOG_FONT = "fonts/pixcelsior.font.json";
/** Total duration in seconds until dog petting ending occurs */
exports.PETTING_ENDING_CUTSCENE_DURATION = 135;
exports.PETTING_ENDING_FADE_DURATION = 5;
/** Total duration in seconds of ending d cutscene */
exports.WINDOW_ENDING_CUTSCENE_DURATION = 50;
exports.WINDOW_ENDING_FADE_DURATION = 3;


/***/ }),

/***/ "./lib/easings.js":
/*!************************!*\
  !*** ./lib/easings.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.easeInOutBounce = exports.easeInBounce = exports.easeOutBounce = exports.easeInOutElastic = exports.easeOutElastic = exports.easeInElastic = exports.easeInOutBack = exports.easeOutBack = exports.easeInBack = exports.easeInOutCirc = exports.easeOutCirc = exports.easeInCirc = exports.easeInOutExpo = exports.easeOutExpo = exports.easeInExpo = exports.easeInOutQuint = exports.easeOutQuint = exports.easeInQuint = exports.easeInOutQuart = exports.easeOutQuart = exports.easeInQuart = exports.easeInOutCubic = exports.easeOutCubic = exports.easeInCubic = exports.easeInOutQuad = exports.easeOutQuad = exports.easeInQuad = exports.easeInOutSine = exports.easeOutSine = exports.easeInSine = exports.linear = void 0;
const { PI, cos, sin } = Math;
function linear(t) {
    return t;
}
exports.linear = linear;
function easeInSine(t) {
    return 1 - cos(t * PI / 2);
}
exports.easeInSine = easeInSine;
function easeOutSine(t) {
    return sin(t * PI / 2);
}
exports.easeOutSine = easeOutSine;
function easeInOutSine(t) {
    return 0.5 - cos(PI * t) / 2;
}
exports.easeInOutSine = easeInOutSine;
function easeInQuad(t) {
    return t * t;
}
exports.easeInQuad = easeInQuad;
function easeOutQuad(t) {
    return t * (2 - t);
}
exports.easeOutQuad = easeOutQuad;
function easeInOutQuad(t) {
    if (t < 0.5) {
        return 2 * t * t;
    }
    else {
        return 4 * t - 2 * t * t - 1;
    }
}
exports.easeInOutQuad = easeInOutQuad;
function easeInCubic(t) {
    return Math.pow(t, 3);
}
exports.easeInCubic = easeInCubic;
function easeOutCubic(t) {
    return Math.pow(t, 3) + 3 * (t - t * t);
}
exports.easeOutCubic = easeOutCubic;
function easeInOutCubic(t) {
    if (t < 0.5) {
        return 4 * Math.pow(t, 3);
    }
    else {
        return 4 * Math.pow(t, 3) + 12 * (t - t * t) - 3;
    }
}
exports.easeInOutCubic = easeInOutCubic;
function easeInQuart(t) {
    return Math.pow(t, 4);
}
exports.easeInQuart = easeInQuart;
function easeOutQuart(t) {
    return 1 - Math.pow((t - 1), 4);
}
exports.easeOutQuart = easeOutQuart;
function easeInOutQuart(t) {
    if (t < 0.5) {
        return 8 * Math.pow(t, 4);
    }
    else {
        return 1 - 8 * Math.pow((t - 1), 4);
    }
}
exports.easeInOutQuart = easeInOutQuart;
function easeInQuint(t) {
    return Math.pow(t, 5);
}
exports.easeInQuint = easeInQuint;
function easeOutQuint(t) {
    return 1 + Math.pow((t - 1), 5);
}
exports.easeOutQuint = easeOutQuint;
function easeInOutQuint(t) {
    if (t < 0.5) {
        return 16 * Math.pow(t, 5);
    }
    else {
        return 1 + 16 * Math.pow((t - 1), 5);
    }
}
exports.easeInOutQuint = easeInOutQuint;
function easeInExpo(t) {
    if (t <= 0) {
        return 0;
    }
    return Math.pow(2, (10 * (t - 1)));
}
exports.easeInExpo = easeInExpo;
function easeOutExpo(t) {
    if (t >= 1) {
        return 1;
    }
    return 1 - 1 / Math.pow(1024, t);
}
exports.easeOutExpo = easeOutExpo;
function easeInOutExpo(t) {
    if (t <= 0) {
        return 0;
    }
    if (t >= 1) {
        return 1;
    }
    if (t < 0.5) {
        return Math.pow(1048576, t) / 2048;
    }
    else {
        return 1 - 512 / Math.pow(1048576, t);
    }
}
exports.easeInOutExpo = easeInOutExpo;
function easeInCirc(t) {
    return 1 - Math.pow((1 - t * t), 0.5);
}
exports.easeInCirc = easeInCirc;
function easeOutCirc(t) {
    return Math.pow((2 * t - t * t), 0.5);
}
exports.easeOutCirc = easeOutCirc;
function easeInOutCirc(t) {
    if (t < 0.5) {
        return 0.5 - Math.pow((0.25 - t * t), 0.5);
    }
    else {
        return (Math.pow((4 * t * (2 - t) - 3), 0.5) + 1) / 2;
    }
}
exports.easeInOutCirc = easeInOutCirc;
function easeInBack(t) {
    return 2.70158 * Math.pow(t, 3) - 1.70158 * t * t;
}
exports.easeInBack = easeInBack;
function easeOutBack(t) {
    return 2.70158 * Math.pow(t, 3) - 6.40316 * t * t + 4.70158 * t;
}
exports.easeOutBack = easeOutBack;
function easeInOutBack(t) {
    if (t < 0.5) {
        return 14.379638 * Math.pow(t, 3) - 5.189819 * t * t;
    }
    else {
        return 14.379638 * Math.pow(t, 3) - 37.949095 * t * t + 32.759276 * t - 8.189819;
    }
}
exports.easeInOutBack = easeInOutBack;
function easeInElastic(t) {
    if (t <= 0) {
        return 0;
    }
    if (t >= 1) {
        return 1;
    }
    return Math.pow(1024, (t - 1)) * -sin(PI * (20 * t / 3 - 43 / 6));
}
exports.easeInElastic = easeInElastic;
function easeOutElastic(t) {
    if (t <= 0) {
        return 0;
    }
    if (t >= 1) {
        return 1;
    }
    return sin(PI * (20 * t / 3 - 0.5)) / (Math.pow(1024, t)) + 1;
}
exports.easeOutElastic = easeOutElastic;
function easeInOutElastic(t) {
    if (t <= 0) {
        return 0;
    }
    if (t >= 1) {
        return 1;
    }
    if (t < 0.5) {
        return Math.pow(1048576, t) / -2048 * sin(PI * (80 * t / 9 - 89 / 18));
    }
    else {
        return 512 / Math.pow(1048576, t) * sin(PI * (80 * t / 9 - 89 / 18)) + 1;
    }
}
exports.easeInOutElastic = easeInOutElastic;
function easeOutBounce(t) {
    if (t < 4 / 11) {
        return 121 * t * t / 16;
    }
    else if (t < 8 / 11) {
        return 121 * t * t / 16 - 33 * t / 4 + 3;
    }
    else if (t < 10 / 11) {
        return 121 * t * t / 16 - 99 * t / 8 + 6;
    }
    else {
        return 121 * t * t / 16 - 231 * t / 16 + 63 / 8;
    }
}
exports.easeOutBounce = easeOutBounce;
function easeInBounce(t) {
    return 1 - easeOutBounce(1 - t);
}
exports.easeInBounce = easeInBounce;
function easeInOutBounce(t) {
    if (t < 0.5) {
        return easeInBounce(t * 2) / 2;
    }
    else {
        return easeOutBounce(t * 2 - 1) / 2 + 0.5;
    }
}
exports.easeInOutBounce = easeInOutBounce;


/***/ }),

/***/ "./lib/entities/Bird.js":
/*!******************************!*\
  !*** ./lib/entities/Bird.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Bird_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bird = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ./../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ./../Assets */ "./lib/Assets.js");
const util_1 = __webpack_require__(/*! ./../util */ "./lib/util.js");
const Conversation_1 = __webpack_require__(/*! ./../Conversation */ "./lib/Conversation.js");
const bird_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./../../assets/dialog/bird.dialog.json */ "./assets/dialog/bird.dialog.json"));
const constants_1 = __webpack_require__(/*! ./../constants */ "./lib/constants.js");
const Entity_1 = __webpack_require__(/*! ./../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ./../World */ "./lib/World.js");
const GameScene_1 = __webpack_require__(/*! ./../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Particles_1 = __webpack_require__(/*! ./../Particles */ "./lib/Particles.js");
const Renderer_1 = __webpack_require__(/*! ./../Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ./../Sound */ "./lib/Sound.js");
var BirdState;
(function (BirdState) {
    BirdState[BirdState["WAITING_LEFT"] = 0] = "WAITING_LEFT";
    BirdState[BirdState["FLYING_RIGHT"] = 1] = "FLYING_RIGHT";
    BirdState[BirdState["WAITING_RIGHT"] = 2] = "WAITING_RIGHT";
    BirdState[BirdState["FLYING_LEFT"] = 3] = "FLYING_LEFT";
})(BirdState || (BirdState = {}));
const WAITING_TIME = 5;
const JUMP_INTERVAL = 0.3;
const MAX_SPEED = 4;
let Bird = Bird_1 = class Bird extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 28, 24);
        this.move = 1;
        this.jumpHeight = 1.5;
        this.waitTimer = 0;
        this.state = BirdState.WAITING_LEFT;
        this.jumpTimer = 0;
        this.minAltitude = y;
        this.conversation = new Conversation_1.Conversation(bird_dialog_json_1.default, this);
        this.doubleJumpEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            velocity: () => ({ x: util_1.rnd(-1, 1) * 90, y: util_1.rnd(-1, 0) * 100 }),
            color: () => util_1.rndItem(constants_1.DOUBLE_JUMP_COLORS),
            size: util_1.rnd(1, 2),
            gravity: { x: 0, y: -120 },
            lifetime: () => util_1.rnd(0.4, 0.6),
            alphaCurve: Particles_1.valueCurves.trapeze(0.05, 0.2)
        });
        this.setMaxVelocity(MAX_SPEED);
    }
    isWaiting() {
        return this.state === BirdState.WAITING_LEFT || this.state === BirdState.WAITING_RIGHT;
    }
    jump() {
        this.jumpTimer = JUMP_INTERVAL;
        this.setVelocityY(Math.sqrt(2 * this.jumpHeight * constants_1.GRAVITY));
        this.doubleJumpEmitter.setPosition(this.x, this.y + 20);
        if (!this.scene.pettingCutscene) {
            this.doubleJumpEmitter.emit(20);
            const vol = util_1.calculateVolume(this.distanceToPlayer, 0.4);
            if (vol > 0) {
                Bird_1.jumpSound.setVolume(vol);
                Bird_1.jumpSound.stop();
                Bird_1.jumpSound.play();
            }
        }
    }
    canJump() {
        return this.jumpTimer === 0;
    }
    updatePosition(newX, newY) {
        this.x = newX;
        this.y = newY;
        // Check collision with the environment and correct player position and movement
        if (this.pullOutOfGround() !== 0 || this.pullOutOfCeiling() !== 0) {
            this.setVelocityY(0);
        }
        if (this.pullOutOfWall() !== 0) {
            this.setVelocityX(0);
        }
    }
    pullOutOfGround() {
        let pulled = 0, col = 0;
        if (this.getVelocityY() <= 0) {
            const world = this.scene.world;
            const height = world.getHeight();
            col = world.collidesWith(this.x, this.y, [this], [World_1.Environment.WATER]);
            while (this.y < height && col) {
                pulled++;
                this.y++;
                col = world.collidesWith(this.x, this.y);
            }
        }
        return pulled;
    }
    pullOutOfCeiling() {
        let pulled = 0;
        const world = this.scene.world;
        while (this.y > 0
            && world.collidesWith(this.x, this.y + this.height, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
            pulled++;
            this.y--;
        }
        return pulled;
    }
    pullOutOfWall() {
        let pulled = 0;
        const world = this.scene.world;
        if (this.getVelocityX() > 0) {
            while (world.collidesWithVerticalLine(this.x + this.width / 2, this.y + this.height * 3 / 4, this.height / 2, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
                this.x--;
                pulled++;
            }
        }
        else {
            while (world.collidesWithVerticalLine(this.x - this.width / 2, this.y + this.height * 3 / 4, this.height / 2, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
                this.x++;
                pulled++;
            }
        }
        return pulled;
    }
    nextState() {
        if (this.state === BirdState.FLYING_LEFT) {
            this.state = BirdState.WAITING_LEFT;
        }
        else {
            this.state = this.state + 1;
        }
    }
    isReadyForConversation() {
        const superResult = super.isReadyForConversation();
        return (superResult && this.isWaiting());
    }
    draw(ctx) {
        let alpha;
        if (this.scene.pettingCutscene) {
            alpha = Math.max(0, 1 - (this.scene.pettingCutsceneTime / constants_1.PETTING_ENDING_CUTSCENE_DURATION));
        }
        this.scene.renderer.addAseprite(Bird_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction, undefined, alpha);
        if (this.scene.showBounds)
            this.drawBounds();
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.move = 0;
        // Triggers
        const triggerCollisions = this.scene.world.getTriggerCollisions(this);
        if (this.jumpTimer > 0) {
            this.jumpTimer -= dt;
            if (this.jumpTimer < 0) {
                this.jumpTimer = 0;
            }
        }
        if ((this.state === BirdState.WAITING_LEFT || this.state === BirdState.WAITING_RIGHT) && !this.hasActiveConversation()) {
            this.waitTimer += dt;
            if (this.waitTimer >= WAITING_TIME) {
                this.waitTimer = 0;
                this.nextState();
            }
        }
        if (this.state === BirdState.FLYING_RIGHT || this.state === BirdState.FLYING_LEFT) {
            this.move = this.state === BirdState.FLYING_RIGHT ? 1 : -1;
            if (this.y < this.minAltitude && this.canJump()) {
                this.jump();
            }
            if (this.state === BirdState.FLYING_RIGHT && triggerCollisions.length > 0 && triggerCollisions.find(t => t.name === "bird_nest_right")) {
                this.nextState();
            }
            if (this.state === BirdState.FLYING_LEFT && triggerCollisions.length > 0 && triggerCollisions.find(t => t.name === "bird_nest_left")) {
                this.nextState();
            }
        }
        // Bird acceleration
        if (this.move !== 0) {
            this.direction = this.move;
            this.accelerateX(constants_1.PLAYER_ACCELERATION_AIR * dt * this.move);
        }
        else {
            if (this.getVelocityX() > 0) {
                this.decelerateX(constants_1.PLAYER_ACCELERATION_AIR * dt);
            }
            else {
                this.decelerateX(-constants_1.PLAYER_ACCELERATION_AIR * dt);
            }
        }
        this.speechBubble.update(this.x, this.y);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/bird.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Bird, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/jumping/jump_neutral.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Bird, "jumpSound", void 0);
Bird = Bird_1 = tslib_1.__decorate([
    Entity_1.entity("bird"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Bird);
exports.Bird = Bird;


/***/ }),

/***/ "./lib/entities/Bone.js":
/*!******************************!*\
  !*** ./lib/entities/Bone.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Bone_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bone = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
let Bone = Bone_1 = class Bone extends PhysicsEntity_1.PhysicsEntity {
    constructor(scene, x, y) {
        super(scene, x, y, 20, 10);
    }
    draw() {
        this.scene.renderer.addAseprite(Bone_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    isCarried() {
        return this.scene.player.isCarrying(this);
    }
    update(dt) {
        super.update(dt);
        const player = this.scene.player;
        if (!this.isCarried() && this.distanceTo(player) < 20) {
            player.carry(this);
        }
        if (!this.isCarried() && this.scene.world.collidesWith(this.x, this.y - 5) === World_1.Environment.WATER) {
            const vx = this.getVelocityX();
            this.setVelocity(vx, 10);
        }
        if (Conversation_1.Conversation.getGlobals()["$gotBoneQuest"] && !this.isCarried() && this.distanceTo(this.scene.powerShiba) < 20) {
            Bone_1.successSound.play();
            this.scene.powerShiba.feed();
            this.scene.removeGameObject(this);
        }
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/bone.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Bone, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/throwing/success.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Bone, "successSound", void 0);
Bone = Bone_1 = tslib_1.__decorate([
    Entity_1.entity("bone"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Bone);
exports.Bone = Bone;


/***/ }),

/***/ "./lib/entities/Campfire.js":
/*!**********************************!*\
  !*** ./lib/entities/Campfire.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Campfire_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campfire = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let Campfire = Campfire_1 = class Campfire extends Entity_1.Entity {
    constructor(scene, x, y) {
        super(scene, x, y, 14, 28, false);
    }
    draw() {
        this.scene.renderer.addAseprite(Campfire_1.sprite, "idle", this.x, this.y - 2, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    update() { }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/campfire.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Campfire, "sprite", void 0);
Campfire = Campfire_1 = tslib_1.__decorate([
    Entity_1.entity("campfire"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Campfire);
exports.Campfire = Campfire;


/***/ }),

/***/ "./lib/entities/Caveman.js":
/*!*********************************!*\
  !*** ./lib/entities/Caveman.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Caveman_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caveman = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let Caveman = Caveman_1 = class Caveman extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 18, 24);
    }
    draw(ctx) {
        this.scene.renderer.addAseprite(Caveman_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.speechBubble.update(this.x, this.y);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/caveman.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Caveman, "sprite", void 0);
Caveman = Caveman_1 = tslib_1.__decorate([
    Entity_1.entity("caveman"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Caveman);
exports.Caveman = Caveman;


/***/ }),

/***/ "./lib/entities/Chicken.js":
/*!*********************************!*\
  !*** ./lib/entities/Chicken.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Chicken_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Chicken = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const chicken_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../assets/dialog/chicken.dialog.json */ "./assets/dialog/chicken.dialog.json"));
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let Chicken = Chicken_1 = class Chicken extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 24, 18);
        this.lookAtPlayer = false;
        this.conversation = new Conversation_1.Conversation(chicken_dialog_json_1.default, this);
    }
    getInteractionText() {
        if (!this.met) {
            return "Touch";
        }
        else {
            return "Talk";
        }
    }
    draw(ctx) {
        this.scene.renderer.addAseprite(Chicken_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.speechBubble.update(this.x, this.y);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/chicken.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Chicken, "sprite", void 0);
Chicken = Chicken_1 = tslib_1.__decorate([
    Entity_1.entity("chicken"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Chicken);
exports.Chicken = Chicken;


/***/ }),

/***/ "./lib/entities/Cloud.js":
/*!*******************************!*\
  !*** ./lib/entities/Cloud.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Cloud_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloud = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const Particles_1 = __webpack_require__(/*! ../Particles */ "./lib/Particles.js");
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
let Cloud = Cloud_1 = class Cloud extends PhysicsEntity_1.PhysicsEntity {
    constructor(scene, x, y, properties, canRain = false) {
        super(scene, x, y, 74, 5);
        this.raining = 0;
        this.isRainCloud = false;
        this.setFloating(true);
        this.startX = this.targetX = x;
        this.startY = this.targetY = y;
        this.isRainCloud = canRain;
        this.velocity = properties.velocity / constants_1.PIXEL_PER_METER;
        if (properties.direction === "right") {
            this.targetX = x + properties.distance;
            this.setVelocityX(this.velocity);
        }
        else if (properties.direction === "left") {
            this.targetX = x - properties.distance;
            this.setVelocityX(-this.velocity);
        }
        else if (properties.direction === "up") {
            this.targetY = y + properties.distance;
            this.setVelocityY(this.velocity);
        }
        else if (properties.direction === "down") {
            this.targetY = y - properties.distance;
            this.setVelocityY(-this.velocity);
        }
        this.rainEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            offset: () => ({ x: util_1.rnd(-1, 1) * 26, y: util_1.rnd(-1, 1) * 5 }),
            velocity: () => ({
                x: this.getVelocityX() * constants_1.PIXEL_PER_METER + util_1.rnd(-1, 1) * 5,
                y: this.getVelocityY() * constants_1.PIXEL_PER_METER - util_1.rnd(50, 80)
            }),
            color: () => Cloud_1.raindrop,
            size: 4,
            gravity: { x: 0, y: -100 },
            lifetime: () => util_1.rnd(0.7, 1.2),
            alpha: 0.6,
            alphaCurve: Particles_1.valueCurves.linear.invert()
        });
    }
    startRain(time = Infinity) {
        this.raining = time;
    }
    isRaining() {
        return this.raining > 0;
    }
    canRain() {
        return this.isRainCloud;
    }
    draw() {
        this.scene.renderer.addAseprite(Cloud_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.PLATFORMS);
    }
    update(dt) {
        super.update(dt);
        if (this.getVelocityY() > 0) {
            if (this.y >= Math.max(this.startY, this.targetY)) {
                this.y = Math.max(this.startY, this.targetY);
                this.setVelocityY(-this.velocity);
            }
        }
        else if (this.getVelocityY() < 0) {
            if (this.y <= Math.min(this.startY, this.targetY)) {
                this.y = Math.min(this.startY, this.targetY);
                this.setVelocityY(this.velocity);
            }
        }
        if (this.getVelocityX() > 0) {
            if (this.x >= Math.max(this.targetX, this.startX)) {
                this.x = Math.max(this.targetX, this.startX);
                this.setVelocityX(-this.velocity);
            }
        }
        else if (this.getVelocityX() < 0) {
            if (this.x <= Math.min(this.startX, this.targetX)) {
                this.x = Math.min(this.startX, this.targetX);
                this.setVelocityX(this.velocity);
            }
        }
        if (this.raining) {
            this.raining -= dt;
            if (this.raining <= 0) {
                this.raining = 0;
            }
            else {
                if (util_1.timedRnd(dt, 0.1)) {
                    this.rainEmitter.setPosition(this.x, this.y);
                    this.rainEmitter.emit(util_1.rndInt(1, 4));
                }
            }
        }
    }
    collidesWith(x, y) {
        if (x >= this.x - this.width / 2
            && x <= this.x + this.width / 2
            && y >= this.y
            && y <= this.y + this.height) {
            return World_1.Environment.PLATFORM;
        }
        return World_1.Environment.AIR;
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/cloud3.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Cloud, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/raindrop.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], Cloud, "raindrop", void 0);
Cloud = Cloud_1 = tslib_1.__decorate([
    Entity_1.entity("cloud"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number, Object, Object])
], Cloud);
exports.Cloud = Cloud;


/***/ }),

/***/ "./lib/entities/ExitPortal.js":
/*!************************************!*\
  !*** ./lib/entities/ExitPortal.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ExitPortal_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitPortal = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
var PortalAnimationState;
(function (PortalAnimationState) {
    PortalAnimationState[PortalAnimationState["OFF"] = 0] = "OFF";
    PortalAnimationState[PortalAnimationState["FADEIN"] = 1] = "FADEIN";
    PortalAnimationState[PortalAnimationState["IDLE"] = 2] = "IDLE";
})(PortalAnimationState || (PortalAnimationState = {}));
let ExitPortal = ExitPortal_1 = class ExitPortal extends Entity_1.Entity {
    constructor(scene, x, y) {
        super(scene, x, y, 32, 50, false);
        this.animationState = PortalAnimationState.OFF;
        this.animator.assignSprite(ExitPortal_1.sprite);
    }
    activate() {
        if (this.animationState === PortalAnimationState.OFF) {
            ExitPortal_1.sound.play();
            this.nextAnimationState();
        }
    }
    nextAnimationState() {
        this.animationState++;
    }
    draw() {
        switch (this.animationState) {
            case PortalAnimationState.OFF:
                this.animator.play("empty", 1);
                break;
            case PortalAnimationState.FADEIN:
                this.animator.play("fadein", 1, { loop: false, callback: this.nextAnimationState.bind(this) });
                break;
            case PortalAnimationState.IDLE:
                this.animator.play("idle", 1);
                break;
        }
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    update(dt) {
        super.update(dt);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/portal.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], ExitPortal, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/portal/portal.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], ExitPortal, "sound", void 0);
ExitPortal = ExitPortal_1 = tslib_1.__decorate([
    Entity_1.entity("exitportal"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], ExitPortal);
exports.ExitPortal = ExitPortal;


/***/ }),

/***/ "./lib/entities/Fire.js":
/*!******************************!*\
  !*** ./lib/entities/Fire.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Fire_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Fire = exports.FireState = exports.SHRINK_SIZE = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const FireGfx_1 = __webpack_require__(/*! ../FireGfx */ "./lib/FireGfx.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Particles_1 = __webpack_require__(/*! ../Particles */ "./lib/Particles.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const Shiba_1 = __webpack_require__(/*! ./Shiba */ "./lib/entities/Shiba.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const SoundEmitter_1 = __webpack_require__(/*! ../SoundEmitter */ "./lib/SoundEmitter.js");
exports.SHRINK_SIZE = 2;
var FireState;
(function (FireState) {
    FireState[FireState["IDLE"] = 0] = "IDLE";
    FireState[FireState["ANGRY"] = 1] = "ANGRY";
    FireState[FireState["BEING_PUT_OUT"] = 2] = "BEING_PUT_OUT";
    FireState[FireState["PUT_OUT"] = 3] = "PUT_OUT";
})(FireState = exports.FireState || (exports.FireState = {}));
let Fire = Fire_1 = class Fire extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 1.5 * constants_1.PIXEL_PER_METER, 1.85 * constants_1.PIXEL_PER_METER);
        this.intensity = 5;
        this.state = FireState.IDLE;
        this.angry = false; // fire will be angry once wood was fed
        this.beingPutOut = false;
        this.growthTarget = 5;
        this.growth = 1;
        this.averageParticleDelay = 0.1;
        this.averageSteamDelay = 0.05;
        this.isVisible = true;
        this.fireGfx = new FireGfx_1.FireGfx();
        this.soundEmitter = new SoundEmitter_1.SoundEmitter(this.scene, this.x, this.y, Fire_1.fireAmbience, 0.7, 0.2);
        this.smokeEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            offset: () => ({ x: util_1.rnd(-1, 1) * 3 * this.intensity, y: util_1.rnd(2) * this.intensity }),
            velocity: () => ({ x: util_1.rnd(-1, 1) * 15, y: 4 + util_1.rnd(3) }),
            color: () => Fire_1.smokeImage,
            size: () => util_1.rndInt(24, 32),
            gravity: { x: 0, y: 8 },
            lifetime: () => util_1.rnd(5, 8),
            alpha: () => util_1.rnd(0.2, 0.45),
            angleSpeed: () => util_1.rnd(-1, 1) * 1.5,
            blendMode: "source-over",
            alphaCurve: Particles_1.valueCurves.cos(0.1, 0.5),
            breakFactor: 0.85
        });
        this.steamEmitter = this.scene.particles.createEmitter({
            position: { x: this.x + 10, y: this.y },
            offset: () => ({ x: util_1.rnd(-1, 1) * 3, y: 0 }),
            velocity: () => ({ x: util_1.rnd(-1, 2) * 5, y: 50 + util_1.rnd(3) }),
            color: () => Fire_1.steamImage,
            size: () => util_1.rndInt(12, 18),
            gravity: { x: 0, y: 8 },
            lifetime: () => util_1.rnd(1, 3),
            alpha: () => util_1.rnd(0.5, 0.8),
            angleSpeed: () => util_1.rnd(-1, 1) * 3,
            blendMode: "source-over",
            alphaCurve: Particles_1.valueCurves.cos(0.1, 0.5),
            renderingLayer: Renderer_1.RenderingLayer.ENTITIES,
            zIndex: 1,
            breakFactor: 0.5
        });
        this.sparkEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            velocity: () => ({ x: util_1.rnd(-1, 1) * 30, y: util_1.rnd(50, 100) }),
            color: () => FireGfx_1.FireGfx.gradient.getCss(Math.pow(util_1.rnd(), 0.5)),
            size: 2,
            gravity: { x: 0, y: -100 },
            lifetime: () => util_1.rnd(1, 1.5),
            blendMode: "screen",
            alpha: () => util_1.rnd(0.3, 1),
            alphaCurve: Particles_1.valueCurves.trapeze(0.05, 0.2)
        });
        this.face = new Face_1.Face(scene, this, Face_1.EyeType.STANDARD, 0, 6);
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt()) {
            return false;
        }
        return (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() === Quests_1.QuestATrigger.JUST_ARRIVED ||
            (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() >= Quests_1.QuestATrigger.GOT_WOOD &&
                this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.TALKED_TO_FIRE_WITH_WOOD) ||
            this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() === Quests_1.QuestATrigger.THROWN_WOOD_INTO_FIRE ||
            this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() === Quests_1.QuestATrigger.BEAT_FIRE);
    }
    isRendered() {
        return this.isVisible;
    }
    isAngry() {
        return this.state === FireState.ANGRY;
    }
    isBeingPutOut() {
        return this.state === FireState.BEING_PUT_OUT;
    }
    isPutOut() {
        return this.state === FireState.PUT_OUT;
    }
    setState(state) {
        this.state = state;
        if (state === FireState.BEING_PUT_OUT || state === FireState.PUT_OUT) {
            Fire_1.fireAmbience.stop();
        }
    }
    drawToCanvas(ctx) {
        ctx.save();
        ctx.translate(this.x, -this.y);
        ctx.scale(this.intensity / 5, this.intensity / 5);
        this.fireGfx.draw(ctx, 0, 0);
        ctx.restore();
    }
    draw(ctx) {
        if (!this.isVisible) {
            return;
        }
        this.scene.renderer.add({ type: Renderer_1.RenderingType.FIRE, layer: Renderer_1.RenderingLayer.ENTITIES, entity: this });
        this.drawFace(ctx);
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        if (this.thinkBubble) {
            this.thinkBubble.draw(ctx);
        }
        this.speechBubble.draw(ctx);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    update(dt) {
        var _a, _b;
        if (this.state === FireState.ANGRY && !this.beingPutOut) {
            (_a = this.face) === null || _a === void 0 ? void 0 : _a.setMode(Face_1.FaceModes.ANGRY);
        }
        else if (this.state === FireState.BEING_PUT_OUT) {
            (_b = this.face) === null || _b === void 0 ? void 0 : _b.setMode(Face_1.FaceModes.DISGUSTED);
        }
        if (this.intensity !== this.growthTarget) {
            this.intensity = util_1.shiftValue(this.intensity, this.growthTarget, this.growth * dt);
        }
        if (this.scene.friendshipCutscene
            && this.scene.shiba.getState() === Shiba_1.ShibaState.KILLING_FIRE
            && this.intensity <= exports.SHRINK_SIZE) {
            this.scene.shiba.nextState();
        }
        if (!this.scene.camera.isPointVisible(this.x, this.y, 200)) {
            this.isVisible = false;
            return;
        }
        this.isVisible = true;
        if (!this.isBeingPutOut() && !this.isPutOut()) {
            let particleChance = dt - util_1.rnd() * this.averageParticleDelay;
            while (particleChance > 0) {
                if (util_1.rnd() < 0.5) {
                    this.sparkEmitter.emit();
                }
                if (util_1.rnd() < 0.32) {
                    this.smokeEmitter.emit();
                }
                particleChance -= util_1.rnd() * this.averageParticleDelay;
            }
            this.soundEmitter.update();
        }
        if (this.isBeingPutOut()) {
            let steamParticleChance = dt - util_1.rnd() * this.averageSteamDelay;
            while (steamParticleChance > 0) {
                this.steamEmitter.emit();
                steamParticleChance -= util_1.rnd() * this.averageSteamDelay;
            }
        }
        if (this.isVisible) {
            this.fireGfx.update();
        }
        if (this.showDialoguePrompt()) {
            this.dialoguePrompt.update(dt, this.x, this.y + 32);
        }
        this.speechBubble.update(this.x, this.y);
    }
    feed(wood) {
        wood.remove();
        // Handle end of the world
        this.state = FireState.ANGRY;
        this.growthTarget = 14;
        this.scene.startApocalypseMusic();
        // Disable remaining dialogs
        this.conversation = null;
        // Remove any reachable NPCs
        for (const npc of [this.scene.shadowPresence]) {
            if (npc) {
                this.scene.removeGameObject(npc);
            }
        }
        // Player thoughts
        [
            ["What…", 2, 2],
            ["What have I done?", 6, 3],
            ["I trusted you! I helped you!", 10, 3]
        ].forEach(line => setTimeout(() => {
            this.scene.player.think(line[0], line[2] * 1000);
        }, line[1] * 1000));
        // Give fire new dialog
        setTimeout(() => {
            this.scene.game.campaign.runAction("enable", null, ["fire", "fire2"]);
        }, 13500);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/smoke.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], Fire, "smokeImage", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/steam.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], Fire, "steamImage", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/fire/fire.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Fire, "fireAmbience", void 0);
Fire = Fire_1 = tslib_1.__decorate([
    Entity_1.entity("fire"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Fire);
exports.Fire = Fire;


/***/ }),

/***/ "./lib/entities/FlameBoy.js":
/*!**********************************!*\
  !*** ./lib/entities/FlameBoy.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var FlameBoy_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlameBoy = exports.FlameBoyState = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const SoundEmitter_1 = __webpack_require__(/*! ../SoundEmitter */ "./lib/SoundEmitter.js");
const ScriptableNPC_1 = __webpack_require__(/*! ./ScriptableNPC */ "./lib/entities/ScriptableNPC.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
var FlameBoyState;
(function (FlameBoyState) {
    FlameBoyState[FlameBoyState["VENDOR"] = 0] = "VENDOR";
    FlameBoyState[FlameBoyState["WAITING_FOR_DIALOG"] = 1] = "WAITING_FOR_DIALOG";
    FlameBoyState[FlameBoyState["IDLE"] = 2] = "IDLE";
})(FlameBoyState = exports.FlameBoyState || (exports.FlameBoyState = {}));
const IDLE_DURATION = [2, 3, 4];
const WALK_DURATION = [1, 1.5, 2];
const ACCELERATION = 15;
let FlameBoy = FlameBoy_1 = class FlameBoy extends ScriptableNPC_1.ScriptableNPC {
    constructor(scene, x, y) {
        super(scene, x, y, 26, 54);
        this.state = FlameBoyState.VENDOR;
        this.idleTimer = util_1.rndItem(IDLE_DURATION);
        this.walkTimer = null;
        this.autoMoveDirection = 1;
        this.setMaxVelocity(3);
        this.face = new Face_1.Face(scene, this, Face_1.EyeType.FLAMEBOY, 0, 5);
        this.defaultFaceMode = Face_1.FaceModes.BORED;
        this.face.setMode(this.defaultFaceMode);
        this.soundEmitter = new SoundEmitter_1.SoundEmitter(this.scene, this.x, this.y, FlameBoy_1.fireAmbience, 0.7, 0.2);
    }
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    feed(wood) {
        wood.remove();
        this.scene.game.campaign.runAction("giveWoodToFlameboy");
        this.think("Well, that was unexpected…", 2000);
        this.nextState();
    }
    nextState() {
        this.state++;
        if (this.state === FlameBoyState.WAITING_FOR_DIALOG) {
            this.defaultFaceMode = Face_1.FaceModes.NEUTRAL;
            this.face = new Face_1.Face(this.scene, this, Face_1.EyeType.FLAMEBOY2, 0, 2);
        }
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt()) {
            return false;
        }
        const thrownStoneIntoWater = (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() >= Quests_1.QuestATrigger.THROWN_STONE_INTO_WATER
            && this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.GOT_MULTIJUMP);
        const waitingForWoodDialog = this.state === FlameBoyState.WAITING_FOR_DIALOG;
        return thrownStoneIntoWater || waitingForWoodDialog;
    }
    getAnimationTag() {
        switch (this.state) {
            case FlameBoyState.VENDOR: return "idle";
            default: return "idle2";
        }
    }
    walkRandomly(triggerCollisions, dt) {
        if (triggerCollisions.length > 0) {
            const event = triggerCollisions.find(t => t.name === "flameboy_action");
            if (event && event.properties.velocity) {
                this.autoMoveDirection = event.properties.velocity > 0 ? 1 : -1;
                this.move = this.autoMoveDirection;
            }
        }
        if (this.idleTimer !== null && this.idleTimer >= 0) {
            this.idleTimer -= dt;
        }
        if (this.walkTimer !== null && this.walkTimer >= 0) {
            this.walkTimer -= dt;
        }
        if (this.idleTimer && this.idleTimer <= 0 && this.walkTimer === null) {
            this.walkTimer = util_1.rndItem(WALK_DURATION);
            this.idleTimer = null;
            this.move = this.autoMoveDirection;
        }
        if (this.walkTimer && this.walkTimer <= 0 && this.idleTimer === null) {
            this.idleTimer = util_1.rndItem(IDLE_DURATION);
            this.walkTimer = null;
            this.move = 0;
        }
    }
    draw(ctx) {
        if (this.move === 0) {
            this.scene.renderer.addAseprite(FlameBoy_1.sprite, this.getAnimationTag(), this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        }
        else {
            this.scene.renderer.addAseprite(FlameBoy_1.sprite, "walk", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        }
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.drawFace(ctx, false);
        if (this.thinkBubble) {
            this.thinkBubble.draw(ctx);
        }
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        // Triggers
        const triggerCollisions = this.scene.world.getTriggerCollisions(this);
        if (this.hasActiveConversation()) {
            this.move = 0;
        }
        else {
            if (this.state === FlameBoyState.IDLE) {
                this.walkRandomly(triggerCollisions, dt);
            }
        }
        if (this.move !== 0) {
            this.direction = this.move;
            this.accelerateX(ACCELERATION * dt * this.move);
        }
        else {
            if (this.getVelocityX() > 0) {
                this.decelerateX(ACCELERATION * dt);
            }
            else {
                this.decelerateX(-ACCELERATION * dt);
            }
        }
        if (this.thinkBubble) {
            this.thinkBubble.update(this.x, this.y);
        }
        this.dialoguePrompt.update(dt, this.x, this.y + 32);
        this.speechBubble.update(this.x, this.y);
        this.soundEmitter.update();
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/flameboy.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], FlameBoy, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/fire/fire2.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], FlameBoy, "fireAmbience", void 0);
FlameBoy = FlameBoy_1 = tslib_1.__decorate([
    Entity_1.entity("flameboy"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], FlameBoy);
exports.FlameBoy = FlameBoy;


/***/ }),

/***/ "./lib/entities/Mimic.js":
/*!*******************************!*\
  !*** ./lib/entities/Mimic.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Mimic_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mimic = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const mimic_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../assets/dialog/mimic.dialog.json */ "./assets/dialog/mimic.dialog.json"));
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
var MimicState;
(function (MimicState) {
    MimicState[MimicState["SLEEPING"] = 0] = "SLEEPING";
    MimicState[MimicState["OPEN_UP"] = 1] = "OPEN_UP";
    MimicState[MimicState["IDLE"] = 2] = "IDLE";
})(MimicState || (MimicState = {}));
let Mimic = Mimic_1 = class Mimic extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 46, 24);
        this.state = MimicState.SLEEPING;
        this.lookAtPlayer = false;
        this.direction = 1;
        this.conversation = new Conversation_1.Conversation(mimic_dialog_json_1.default, this);
        this.animator.assignSprite(Mimic_1.sprite);
    }
    nextState() {
        this.state++;
        if (this.state === MimicState.OPEN_UP) {
            Mimic_1.openingSound.play();
        }
    }
    getInteractionText() {
        if (!this.met) {
            return "Open";
        }
        else {
            return "Talk";
        }
    }
    draw(ctx) {
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        switch (this.state) {
            case MimicState.SLEEPING:
                this.animator.play("sleeping", this.direction);
                break;
            case MimicState.OPEN_UP:
                this.animator.play("open", this.direction, { loop: false, callback: this.nextState.bind(this) });
                break;
            case MimicState.IDLE:
                this.animator.play("idle", this.direction);
                break;
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.speechBubble.update(this.x, this.y);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/mimic.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Mimic, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/item/chest.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Mimic, "openingSound", void 0);
Mimic = Mimic_1 = tslib_1.__decorate([
    Entity_1.entity("mimic"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Mimic);
exports.Mimic = Mimic;


/***/ }),

/***/ "./lib/entities/MovingPlatform.js":
/*!****************************************!*\
  !*** ./lib/entities/MovingPlatform.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var MovingPlatform_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingPlatform = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let MovingPlatform = MovingPlatform_1 = class MovingPlatform extends PhysicsEntity_1.PhysicsEntity {
    constructor(scene, x, y, properties) {
        super(scene, x, y, 68, 12);
        this.setFloating(true);
        this.startX = this.targetX = x;
        this.startY = this.targetY = y;
        this.velocity = properties.velocity / constants_1.PIXEL_PER_METER;
        if (properties.direction === "right") {
            this.targetX = x + properties.distance;
            this.setVelocityX(this.velocity);
        }
        else if (properties.direction === "left") {
            this.targetX = x - properties.distance;
            this.setVelocityX(-this.velocity);
        }
        else if (properties.direction === "up") {
            this.targetY = y + properties.distance;
            this.setVelocityY(this.velocity);
        }
        else if (properties.direction === "down") {
            this.targetY = y - properties.distance;
            this.setVelocityY(-this.velocity);
        }
    }
    draw() {
        this.scene.renderer.addAseprite(MovingPlatform_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.PLATFORMS);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    update(dt) {
        super.update(dt);
        if (this.getVelocityY() > 0) {
            if (this.y >= Math.max(this.startY, this.targetY)) {
                this.y = Math.max(this.startY, this.targetY);
                this.setVelocityY(-this.velocity);
            }
        }
        else if (this.getVelocityY() < 0) {
            if (this.y <= Math.min(this.startY, this.targetY)) {
                this.y = Math.min(this.startY, this.targetY);
                this.setVelocityY(this.velocity);
            }
        }
        if (this.getVelocityX() > 0) {
            if (this.x >= Math.max(this.targetX, this.startX)) {
                this.x = Math.max(this.targetX, this.startX);
                this.setVelocityX(-this.velocity);
            }
        }
        else if (this.getVelocityX() < 0) {
            if (this.x <= Math.min(this.startX, this.targetX)) {
                this.x = Math.min(this.startX, this.targetX);
                this.setVelocityX(this.velocity);
            }
        }
    }
    collidesWith(x, y) {
        if (x >= this.x - this.width / 2
            && x <= this.x + this.width / 2
            && y >= this.y
            && y <= this.y + this.height) {
            return World_1.Environment.PLATFORM;
        }
        return World_1.Environment.AIR;
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/stoneplatform.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], MovingPlatform, "sprite", void 0);
MovingPlatform = MovingPlatform_1 = tslib_1.__decorate([
    Entity_1.entity("movingplatform"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number, Object])
], MovingPlatform);
exports.MovingPlatform = MovingPlatform;


/***/ }),

/***/ "./lib/entities/NPC.js":
/*!*****************************!*\
  !*** ./lib/entities/NPC.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NPC = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const DialoguePrompt_1 = __webpack_require__(/*! ../DialoguePrompt */ "./lib/DialoguePrompt.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const SpeechBubble_1 = __webpack_require__(/*! ../SpeechBubble */ "./lib/SpeechBubble.js");
// Seconds NPC can't be talked to after a conversation has ended
const PAUSE_AFTER_CONVERSATION = 1.5;
class NPC extends PhysicsEntity_1.PhysicsEntity {
    constructor() {
        super(...arguments);
        this.direction = 1;
        this.face = null;
        this.defaultFaceMode = Face_1.FaceModes.NEUTRAL;
        this.greeting = null;
        this.conversation = null;
        this.thinkBubble = null;
        this.speechBubble = new SpeechBubble_1.SpeechBubble(this.scene, this.x, this.y);
        this.lookAtPlayer = true;
        this.dialoguePrompt = new DialoguePrompt_1.DialoguePrompt(this.scene, this.x, this.y);
        this.lastEndedConversation = -Infinity;
        this.met = false;
    }
    drawFace(ctx, lookAtPlayer = true) {
        if (this.face) {
            // Look at player
            if (lookAtPlayer) {
                const dx = this.scene.player.x - this.x;
                this.face.toggleDirection((dx > 0) ? 1 : -1);
                this.face.draw(ctx);
            }
            else {
                this.face.setDirection(this.direction);
                this.face.draw(ctx);
            }
        }
    }
    think(message, time) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.thinkBubble) {
                this.thinkBubble.hide();
                this.thinkBubble = null;
            }
            const thinkBubble = this.thinkBubble = new SpeechBubble_1.SpeechBubble(this.scene, this.x, this.y);
            thinkBubble.setMessage(message);
            thinkBubble.show();
            yield util_1.sleep(time);
            if (this.thinkBubble === thinkBubble) {
                thinkBubble.hide();
                this.thinkBubble = null;
            }
        });
    }
    hasMet() {
        return false;
    }
    meet() {
        this.met = true;
    }
    getInteractionText() {
        return "Talk";
    }
    showDialoguePrompt() {
        if (this.hasActiveConversation() || !this.scene.player.isControllable) {
            return false;
        }
        return true;
    }
    drawDialoguePrompt() {
        this.dialoguePrompt.draw();
    }
    drawGreeting(ctx) {
        var _a;
        (_a = this.greeting) === null || _a === void 0 ? void 0 : _a.draw(ctx);
    }
    updateGreeting() {
        var _a;
        (_a = this.greeting) === null || _a === void 0 ? void 0 : _a.update();
    }
    registerEndedConversation() {
        this.lastEndedConversation = this.scene.gameTime;
    }
    isReadyForConversation() {
        return (this.conversation
            && !this.scene.player.isCarrying(this)
            && this.scene.gameTime - this.lastEndedConversation > PAUSE_AFTER_CONVERSATION);
    }
    hasActiveConversation() {
        return (this.scene.player.playerConversation !== null && this.scene.player.playerConversation.npc === this);
    }
    toggleDirection(direction = this.direction > 0 ? -1 : 1) {
        if (direction !== this.direction) {
            this.direction = direction;
        }
    }
    update(dt) {
        if (this.lookAtPlayer) {
            const dx = this.scene.player.x - this.x;
            this.toggleDirection((dx > 0) ? 1 : -1);
        }
        super.update(dt);
    }
}
exports.NPC = NPC;


/***/ }),

/***/ "./lib/entities/PhysicsEntity.js":
/*!***************************************!*\
  !*** ./lib/entities/PhysicsEntity.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PhysicsEntity = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const Player_1 = __webpack_require__(/*! ./Player */ "./lib/entities/Player.js");
class PhysicsEntity extends Entity_1.Entity {
    constructor() {
        super(...arguments);
        this.velocityX = 0;
        this.velocityY = 0;
        this.maxVelocityX = Infinity;
        this.maxVelocityY = Infinity;
        this.floating = false;
        this.ground = null;
        // This property describes how much the player hitbox grows when
        // this entity is carried. Defaults to the entities own height.
        this.carryHeight = this.height;
        this.lastGroundPosition = { x: 0, y: 0 };
    }
    setFloating(floating) {
        this.floating = floating;
        if (floating) {
            this.setVelocity(0, 0);
        }
    }
    isFloating() {
        return this.floating;
    }
    setMaxVelocity(maxVelocityX, maxVelocityY = maxVelocityX) {
        this.maxVelocityX = maxVelocityX;
        this.maxVelocityY = maxVelocityY;
    }
    accelerate(x, y) {
        this.accelerateX(x);
        this.accelerateY(y);
    }
    accelerateX(x) {
        if (x > 0) {
            this.velocityX = Math.min(this.maxVelocityX, this.velocityX + x);
        }
        else {
            this.velocityX = Math.max(-this.maxVelocityX, this.velocityX + x);
        }
    }
    accelerateY(y) {
        this.velocityY = Math.min(this.maxVelocityY, this.velocityY + y);
    }
    decelerate(x, y) {
        this.decelerateX(x);
        this.decelerateY(y);
    }
    decelerateX(x) {
        if (x > 0) {
            this.velocityX = Math.max(0, this.velocityX - x);
        }
        else {
            this.velocityX = Math.min(0, this.velocityX - x);
        }
    }
    decelerateY(y) {
        this.velocityY = Math.max(0, this.velocityY - y);
    }
    setVelocity(x, y) {
        this.velocityX = x;
        this.velocityY = y;
    }
    setVelocityX(x) {
        this.velocityX = x;
    }
    setVelocityY(y) {
        this.velocityY = y;
    }
    getVelocityX() {
        return this.velocityX;
    }
    getVelocityY() {
        return this.velocityY;
    }
    checkCollision(x, y, ignore) {
        return this.scene.world.collidesWith(x, y, [this], ignore);
    }
    checkCollisionBox(x, y, ignore) {
        for (let i = -this.width / 2; i < this.width / 2; i++) {
            let env = this.checkCollision(x + i, y, ignore);
            if (env !== World_1.Environment.AIR) {
                return env;
            }
            env = this.checkCollision(x + i, y + this.height, ignore);
            if (env !== World_1.Environment.AIR) {
                return env;
            }
        }
        for (let i = 0; i < this.height; i++) {
            let env = this.checkCollision(x - this.width / 2, y + i, ignore);
            if (env !== World_1.Environment.AIR) {
                return env;
            }
            env = this.checkCollision(x + this.width / 2, y + i, ignore);
            if (env !== World_1.Environment.AIR) {
                return env;
            }
        }
        return World_1.Environment.AIR;
    }
    updatePosition(newX, newY) {
        if (this.floating) {
            this.x = newX;
            this.y = newY;
        }
        else {
            const env = this.checkCollisionBox(newX, newY, newY > this.y ? [World_1.Environment.PLATFORM] : []);
            if (env === World_1.Environment.AIR || env === World_1.Environment.WATER) {
                this.x = newX;
                this.y = newY;
            }
            else {
                this.setVelocity(0, 0);
            }
        }
    }
    update(dt) {
        super.update(dt);
        const world = this.scene.world;
        const ground = world.getObjectAt(this.x, this.y - 5, [this]);
        if (ground instanceof PhysicsEntity) {
            this.x += ground.getVelocityX() * constants_1.PIXEL_PER_METER * dt;
            this.y += ground.getVelocityY() * constants_1.PIXEL_PER_METER * dt;
        }
        this.ground = ground;
        this.updatePosition(this.x + this.velocityX * constants_1.PIXEL_PER_METER * dt, this.y + this.velocityY * constants_1.PIXEL_PER_METER * dt);
        // Object dropping down when there is no ground below
        if (!this.floating) {
            const environment = world.collidesWith(this.x, this.y - 1, [this], this instanceof Player_1.Player && this.jumpDown ? [World_1.Environment.PLATFORM] : []);
            if (environment === World_1.Environment.AIR) {
                this.velocityY -= this.getGravity() * dt;
                // Apply terminal velocity to falling entities
                if (this.velocityY < 0) {
                    this.velocityY = Math.max(this.velocityY, constants_1.TERMINAL_VELOCITY);
                }
            }
            else if (environment === World_1.Environment.WATER) {
                this.velocityY = constants_1.DROWNING_VELOCITY;
                this.velocityX = 0;
            }
            else if (this.velocityY < 0) {
                this.velocityY = 0;
                if (!(this instanceof Player_1.Player)) {
                    this.velocityX = 0;
                }
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
            }
            else {
                // is on ground
                this.lastGroundPosition.x = this.x;
                this.lastGroundPosition.y = this.y;
            }
        }
    }
    getGravity() {
        return constants_1.GRAVITY;
    }
    getGround() {
        return this.ground;
    }
}
exports.PhysicsEntity = PhysicsEntity;


/***/ }),

/***/ "./lib/entities/Player.js":
/*!********************************!*\
  !*** ./lib/entities/Player.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Player_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = exports.Gender = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const Campaign_1 = __webpack_require__(/*! ../Campaign */ "./lib/Campaign.js");
const Cloud_1 = __webpack_require__(/*! ./Cloud */ "./lib/entities/Cloud.js");
const ControllerFamily_1 = __webpack_require__(/*! ../input/ControllerFamily */ "./lib/input/ControllerFamily.js");
const ControllerManager_1 = __webpack_require__(/*! ../input/ControllerManager */ "./lib/input/ControllerManager.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const ConversationProxy_1 = __webpack_require__(/*! ../ConversationProxy */ "./lib/ConversationProxy.js");
const Dance_1 = __webpack_require__(/*! ../Dance */ "./lib/Dance.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const GotItemScene_1 = __webpack_require__(/*! ../scenes/GotItemScene */ "./lib/scenes/GotItemScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Particles_1 = __webpack_require__(/*! ../Particles */ "./lib/Particles.js");
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const PlayerConversation_1 = __webpack_require__(/*! ../PlayerConversation */ "./lib/PlayerConversation.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Seed_1 = __webpack_require__(/*! ./Seed */ "./lib/entities/Seed.js");
const Sign_1 = __webpack_require__(/*! ./Sign */ "./lib/entities/Sign.js");
const Snowball_1 = __webpack_require__(/*! ./Snowball */ "./lib/entities/Snowball.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const SpeechBubble_1 = __webpack_require__(/*! ../SpeechBubble */ "./lib/SpeechBubble.js");
const Stone_1 = __webpack_require__(/*! ./Stone */ "./lib/entities/Stone.js");
const Wall_1 = __webpack_require__(/*! ./Wall */ "./lib/entities/Wall.js");
const Wood_1 = __webpack_require__(/*! ./Wood */ "./lib/entities/Wood.js");
const groundColors = [
    "#806057",
    "#504336",
    "#3C8376",
    "#908784"
];
const bounceColors = [
    "#f06060",
    "#e87f7f",
    "#ff7070"
];
const drownThoughts = [
    { message: "OK, I'm not Jesus. Noted!", duration: 4000 },
    { message: "Looks like I can't swim… But I can respawn, nice!", duration: 5000 },
    { message: "Well, that was strange… And wet.", duration: 4000 }
];
const drowningThoughts = [
    { message: "Waah!", duration: 1000 },
    { message: "Help!", duration: 1000 },
    { message: "Mama!", duration: 1000 },
    { message: "Ieeh!", duration: 1000 },
    { message: "Argh!", duration: 1000 }
];
var Gender;
(function (Gender) {
    Gender[Gender["FEMALE"] = 0] = "FEMALE";
    Gender[Gender["MALE"] = 1] = "MALE";
})(Gender = exports.Gender || (exports.Gender = {}));
/** The number of seconds until player gets a hint. */
const HINT_TIMEOUT = 90;
let Player = Player_1 = class Player extends PhysicsEntity_1.PhysicsEntity {
    constructor(scene, x, y) {
        super(scene, x, y, constants_1.PLAYER_WIDTH, constants_1.PLAYER_HEIGHT);
        this.controllerSpriteMapRecords = {
            [ControllerFamily_1.ControllerSpriteMap.KEYBOARD]: Player_1.buttons[0],
            [ControllerFamily_1.ControllerSpriteMap.XBOX]: Player_1.buttons[1],
            [ControllerFamily_1.ControllerSpriteMap.PLAYSTATION]: Player_1.buttons[2]
        };
        this.lastHint = Date.now();
        this.flying = false;
        this.direction = 1;
        this.playerSpriteMetadata = null;
        this.animation = "idle";
        this.moveLeft = false;
        this.moveRight = false;
        this.visible = false;
        this.running = false;
        this.jumpThresholdTimer = constants_1.PLAYER_JUMP_TIMING_THRESHOLD;
        this.jumpDown = false;
        this.jumpKeyPressed = false;
        this.drowning = 0;
        this.dance = null;
        this.currentFailAnimation = 1;
        this.carrying = null;
        this.canRun = false;
        this.canRainDance = false;
        this.doubleJump = false;
        this.multiJump = false;
        this.hasFriendship = false;
        this.usedJump = false;
        this.usedDoubleJump = false;
        this.autoMove = null;
        this.isControllable = true;
        this.showHints = false;
        this.isPettingDog = false;
        this.playerConversation = null;
        this.speechBubble = new SpeechBubble_1.SpeechBubble(this.scene, this.x, this.y, undefined, undefined, undefined, undefined, undefined, undefined, true);
        this.thinkBubble = null;
        this.closestNPC = null;
        this.disableParticles = false;
        this.isControllable = false;
        this.setFloating(true);
        // Apply selected character traits
        this.characterAsset = this.scene.game.campaign.selectedCharacter;
        this.voiceAsset = this.scene.game.campaign.selectedVoice;
        Conversation_1.Conversation.setGlobal("ismale", this.characterAsset === Campaign_1.CharacterAsset.MALE ? "true" : "false");
        setTimeout(() => {
            this.isControllable = true;
            this.visible = true;
            this.setFloating(false);
        }, 2200);
        document.addEventListener("keydown", event => this.handleKeyDown(event));
        if (util_1.isDev()) {
            console.log("Dev mode, press “C” to dance anywhere, “P” to spawn the stone, “O” to spawn the "
                + "seed, “I” to spawn wood, “T” to throw useless snowball, “K” to learn all "
                + "abilities, “M” to show bounds of entities and triggers.");
        }
        this.setMaxVelocity(constants_1.MAX_PLAYER_RUNNING_SPEED);
        this.dustEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            velocity: () => ({ x: util_1.rnd(-1, 1) * 26, y: util_1.rnd(0.7, 1) * 45 }),
            color: () => util_1.rndItem(groundColors),
            size: util_1.rnd(1, 2),
            gravity: { x: 0, y: -100 },
            lifetime: () => util_1.rnd(0.5, 0.8),
            alphaCurve: Particles_1.valueCurves.trapeze(0.05, 0.2)
        });
        this.bounceEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            velocity: () => ({ x: util_1.rnd(-1, 1) * 90, y: util_1.rnd(0.7, 1) * 60 }),
            color: () => util_1.rndItem(bounceColors),
            size: util_1.rnd(1.5, 3),
            gravity: { x: 0, y: -120 },
            lifetime: () => util_1.rnd(0.4, 0.6),
            alphaCurve: Particles_1.valueCurves.trapeze(0.05, 0.2)
        });
        this.doubleJumpEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            velocity: () => ({ x: util_1.rnd(-1, 1) * 90, y: util_1.rnd(-1, 0) * 100 }),
            color: () => util_1.rndItem(constants_1.DOUBLE_JUMP_COLORS),
            size: util_1.rnd(1.5, 3),
            gravity: { x: 0, y: -120 },
            lifetime: () => util_1.rnd(0.4, 0.6),
            alphaCurve: Particles_1.valueCurves.trapeze(0.05, 0.2)
        });
    }
    getControllable() {
        return this.isControllable;
    }
    setControllable(isControllable) {
        this.isControllable = isControllable;
    }
    startAutoMove(x, turnAround) {
        if (!this.autoMove) {
            this.autoMove = {
                destinationX: x,
                lastX: this.x,
                turnAround
            };
        }
        // Failsafe to stop automove after 1 second.
        setTimeout(() => {
            if (this.autoMove)
                this.stopAutoMove();
        }, 1000);
    }
    stopAutoMove() {
        var _a;
        if ((_a = this.autoMove) === null || _a === void 0 ? void 0 : _a.turnAround) {
            this.direction = this.direction * -1;
        }
        this.autoMove = null;
        this.moveRight = false;
        this.moveLeft = false;
    }
    startPettingDog() {
        this.isPettingDog = true;
        this.x = this.scene.shiba.direction > 0 ? this.scene.shiba.x + 18 : this.scene.shiba.x - 18;
    }
    stopPettingDog() {
        this.isPettingDog = false;
    }
    enableRunning() {
        this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_RUNNING_ABILITY);
        if (!this.canRun) {
            this.scene.scenes.pushScene(GotItemScene_1.GotItemScene, GotItemScene_1.Item.RUNNING);
            this.canRun = true;
        }
    }
    enableRainDance() {
        this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.LEARNED_RAIN_DANCE);
        if (!this.canRainDance) {
            this.scene.scenes.pushScene(GotItemScene_1.GotItemScene, GotItemScene_1.Item.RAINDANCE);
            this.canRainDance = true;
        }
    }
    enableDoubleJump() {
        Conversation_1.Conversation.setGlobal("hasDoubleJump", "true");
        this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_QUEST_FROM_TREE);
        if (!this.doubleJump) {
            this.scene.scenes.pushScene(GotItemScene_1.GotItemScene, GotItemScene_1.Item.DOUBLEJUMP);
            this.doubleJump = true;
        }
    }
    enableMultiJump() {
        this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_MULTIJUMP);
        if (!this.multiJump) {
            this.scene.scenes.pushScene(GotItemScene_1.GotItemScene, GotItemScene_1.Item.MULTIJUMP);
            this.multiJump = true;
        }
    }
    disableMultiJump() {
        this.multiJump = false;
    }
    enableFriendship() {
        if (!this.hasFriendship) {
            this.scene.scenes.pushScene(GotItemScene_1.GotItemScene, GotItemScene_1.Item.FRIENDSHIP);
            this.hasFriendship = true;
            Conversation_1.Conversation.setGlobal("hasFriendship", "true");
            this.scene.removeGameObject(this.scene.powerShiba);
        }
    }
    removePowerUps() {
        this.multiJump = false;
        this.doubleJump = false;
        this.canRun = false;
    }
    removeMultiJump() {
        this.multiJump = false;
    }
    switchToReality() {
        this.canRun = false;
        this.multiJump = false;
        this.characterAsset = Campaign_1.CharacterAsset.PATIENT;
        this.direction = -1;
    }
    getDance() {
        return this.dance;
    }
    cancelDance() {
        this.dance = null;
    }
    handleButtonDown(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.scene.paused || !this.isControllable || this.autoMove) {
                return;
            }
            if (this.isPettingDog) {
                if (event.isPlayerMoveLeft || event.isPlayerMoveRight || event.isPlayerAction) {
                    this.scene.cancelPatEnding();
                }
                return;
            }
            if (this.dance) {
                this.dance.handleButtonDown(event);
                return;
            }
            if (!this.scene.camera.isOnTarget() || event.repeat) {
                return;
            }
            if (this.playerConversation) {
                this.playerConversation.handleButton(event);
                return;
            }
            if (this.canRun && event.isPlayerRun) {
                this.running = true;
            }
            if (event.isPlayerMoveRight) {
                this.moveRight = true;
                this.moveLeft = false;
            }
            else if (event.isPlayerMoveLeft) {
                this.moveLeft = true;
                this.moveRight = false;
            }
            else if (event.isPlayerEnterDoor) {
                if (!this.canEnterDoor())
                    return;
                const gate = this.scene.world.getGateCollisions(this)[0];
                this.enterGate(gate);
            }
            else if (event.isPlayerInteract) {
                // Check for gates / doors
                if (!this.flying) {
                    if (this.closestNPC
                        && this.closestNPC.isReadyForConversation()
                        && this.closestNPC.conversation) {
                        const conversation = this.closestNPC.conversation;
                        // Disable auto movement to a safe talking distance for the stone in the river
                        const autoMove = (this.closestNPC instanceof Sign_1.Sign
                            || (this.closestNPC instanceof Stone_1.Stone
                                && this.closestNPC.state !== Stone_1.StoneState.DEFAULT) ? false : true);
                        this.playerConversation = new PlayerConversation_1.PlayerConversation(this, this.closestNPC, conversation, autoMove);
                    }
                    else if (this.readableTrigger) {
                        const proxy = new ConversationProxy_1.ConversationProxy(this.scene, this.x, this.y, this.readableTrigger.properties);
                        this.playerConversation = new PlayerConversation_1.PlayerConversation(this, proxy, proxy.conversation, false);
                    }
                    else if (this.canDanceToMakeRain()) {
                        this.startDance(this.scene.apocalypse ? 3 : 2);
                        this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.MADE_RAIN);
                    }
                }
            }
            else if (event.isPlayerAction) {
                if (this.isCarrying())
                    this.throw();
            }
            else if (event.isPlayerJump && this.canJump()) {
                this.jumpKeyPressed = true;
                this.jump();
            }
            else if (event.isPlayerDrop) {
                this.jumpDown = true;
            }
        });
    }
    throw() {
        if (!this.carrying || (this.carrying instanceof Stone_1.Stone && !this.canThrowStoneIntoWater())) {
            return;
        }
        if (this.carrying instanceof Stone_1.Stone) {
            this.carrying.setVelocity(10 * this.direction, 10);
        }
        else {
            this.carrying.setVelocity(5 * this.direction, 5);
        }
        this.height = constants_1.PLAYER_HEIGHT;
        this.carrying = null;
        Player_1.throwingSound.stop();
        Player_1.throwingSound.play();
    }
    // Used in dev mode to enable some special keys that can only be triggered by using a keyboard.
    handleKeyDown(event) {
        if (this.scene.paused) {
            return;
        }
        if (!this.scene.camera.isOnTarget() || event.repeat) {
            return;
        }
        if (util_1.isDev()) {
            if (event.key === "c") {
                // TODO Just for debugging. Real dancing is with action key on rain cloud
                this.startDance(3);
            }
            else if (event.key === "p" && !this.carrying) {
                // TODO Just for debugging, this must be removed later
                this.carry(this.scene.stone);
            }
            else if (event.key === "o" && !this.carrying) {
                this.carry(this.scene.tree.spawnSeed());
            }
            else if (event.key === "u" && !this.carrying) {
                this.carry(this.scene.bone);
            }
            else if (event.key === "i" && !this.carrying) {
                this.carry(this.scene.tree.seed.spawnWood());
            }
            else if (event.key === "t") {
                this.scene.gameObjects.push(new Snowball_1.Snowball(this.scene, this.x, this.y + this.height * 0.75, 20 * this.direction, 10));
                Player_1.throwingSound.stop();
                Player_1.throwingSound.play();
            }
            else if (event.key === "k") {
                this.multiJump = true;
                this.doubleJump = true;
                this.canRun = true;
                this.canRainDance = true;
                this.think("I can do everything now.", 1500);
            }
            else if (event.key === "m") {
                this.scene.showBounds = !this.scene.showBounds;
                this.think("Toggling bounds.", 1500);
            }
        }
    }
    think(message, time) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.thinkBubble) {
                this.thinkBubble.hide();
                this.thinkBubble = null;
            }
            const thinkBubble = this.thinkBubble = new SpeechBubble_1.SpeechBubble(this.scene, this.x, this.y);
            thinkBubble.setMessage(message);
            thinkBubble.show();
            yield util_1.sleep(time);
            if (this.thinkBubble === thinkBubble) {
                thinkBubble.hide();
                this.thinkBubble = null;
            }
        });
    }
    startDance(difficulty = 1) {
        if (!this.dance) {
            switch (difficulty) {
                case 1:
                    this.dance = new Dance_1.Dance(this.scene, this.x, this.y - 25, 100, "  1 1 2 2 1 2 1 3", undefined, 1, undefined, true, 0);
                    break;
                case 2:
                    this.dance = new Dance_1.Dance(this.scene, this.x, this.y - 25, 192, "1   2   1 1 2 2 121 212 121 212 3    ", undefined, 3);
                    break;
                case 3:
                    this.dance = new Dance_1.Dance(this.scene, this.x, this.y - 25, 192, "112 221 312 123 2121121 111 222 3    ", undefined, 4);
                    break;
                default:
                    this.dance = new Dance_1.Dance(this.scene, this.x, this.y - 25, 192, "3");
            }
        }
    }
    /**
     * Teleport the player from the source gate to it's corresponding target gate.
     * The teleport is not instant but accompanied by a fade to black to obscure the teleportation.
     * Also sets the camera bounds to the target position
     * @param gate the source the player enters
     */
    enterGate(gate) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (gate && gate.properties.target) {
                this.isControllable = false;
                this.moveRight = false;
                this.moveLeft = false;
                const targetGate = this.scene.gateObjects.find(target => target.name === gate.properties.target);
                const targetBgmId = gate.properties.bgm;
                if (targetGate) {
                    if (gate.properties.enterSound) {
                        if (gate.properties.enterSound === "portal") {
                            Player_1.enterPortalSound.stop();
                            Player_1.enterPortalSound.play();
                        }
                    }
                    else {
                        Player_1.enterGateSound.stop();
                        Player_1.enterGateSound.play();
                    }
                    this.scene.fadeToBlack(0.8, GameScene_1.FadeDirection.FADE_OUT)
                        .then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                        if (targetBgmId) {
                            this.scene.setActiveBgmTrack(targetBgmId);
                        }
                        if (targetGate.properties.exitSound) {
                            if (targetGate.properties.exitSound === "portal") {
                                Player_1.enterPortalSound.stop();
                                Player_1.enterPortalSound.play();
                            }
                        }
                        else {
                            Player_1.leaveGateSound.stop();
                            Player_1.leaveGateSound.play();
                        }
                        this.x = targetGate.x + (targetGate.width / 2);
                        this.y = targetGate.y - targetGate.height;
                        this.scene.camera.setBounds(this.getCurrentMapBounds());
                        if (targetGate.name === "exitportaldoor_2") {
                            this.switchToReality();
                        }
                        if (targetGate.properties.exitSleepTime) {
                            yield util_1.sleep(targetGate.properties.exitSleepTime * 1000);
                        }
                        const fadeInTime = targetGate.properties.exitFadeTime ? targetGate.properties.exitFadeTime : 0.8;
                        this.scene.fadeToBlack(fadeInTime, GameScene_1.FadeDirection.FADE_IN).then(() => {
                            this.isControllable = true;
                        });
                    }));
                }
            }
        });
    }
    canJump() {
        if (this.characterAsset === Campaign_1.CharacterAsset.PATIENT)
            return false;
        if (this.multiJump) {
            return true;
        }
        else if (!this.usedJump && this.jumpThresholdTimer > 0) {
            return true;
        }
        else if (this.doubleJump) {
            return !this.usedDoubleJump;
        }
        return !this.flying;
    }
    jump() {
        if (this.drowning > 0)
            return;
        this.setVelocityY(Math.sqrt(2 * constants_1.PLAYER_JUMP_HEIGHT * constants_1.GRAVITY));
        Player_1.jumpingSounds[this.voiceAsset].stop();
        Player_1.jumpingSounds[this.voiceAsset].play();
        if (this.flying && this.usedJump) {
            this.usedDoubleJump = true;
            if (!this.disableParticles && this.visible) {
                this.doubleJumpEmitter.setPosition(this.x, this.y + 20);
                this.doubleJumpEmitter.emit(20);
            }
        }
        this.usedJump = true;
    }
    handleButtonUp(event) {
        if (this.scene.paused || !this.isControllable || this.autoMove) {
            return;
        }
        if (event.isPlayerMoveRight) {
            this.moveRight = false;
        }
        else if (event.isPlayerMoveLeft) {
            this.moveLeft = false;
        }
        else if (event.isPlayerJump) {
            this.jumpKeyPressed = false;
        }
        else if (event.isPlayerDrop) {
            this.jumpDown = false;
        }
        else if (event.isPlayerRun) {
            this.running = false;
        }
    }
    drawTooltip(text, buttonTag = ControllerFamily_1.ControllerAnimationTags.ACTION) {
        if (!this.isControllable)
            return;
        const controllerSprite = ControllerManager_1.ControllerManager.getInstance().controllerSprite;
        const measure = Player_1.font.measureText(text);
        const gap = 6;
        const offsetY = 12;
        const textPositionX = Math.round(Math.round(this.x) - ((measure.width - this.controllerSpriteMapRecords[controllerSprite].width + gap) / 2));
        const textPositionY = -this.y + offsetY;
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.ASEPRITE,
            layer: Renderer_1.RenderingLayer.UI,
            position: {
                x: textPositionX - this.controllerSpriteMapRecords[controllerSprite].width - gap,
                y: textPositionY
            },
            asset: this.controllerSpriteMapRecords[controllerSprite],
            animationTag: buttonTag,
        });
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.TEXT,
            layer: Renderer_1.RenderingLayer.UI,
            text,
            textColor: "white",
            outlineColor: "black",
            position: {
                x: textPositionX,
                y: textPositionY
            },
            asset: Player_1.font,
        });
    }
    draw(ctx) {
        if (!this.visible) {
            return;
        }
        const sprite = Player_1.playerSprites[this.characterAsset];
        let animation = this.animation;
        // TODO: Implement animation state concept instead of `animation === "idle" || animation === "walk" || …`
        if (this.carrying
            && (animation === "idle" || animation === "walk" || animation === "jump" || animation === "fall")) {
            animation = animation + "-carry";
        }
        this.scene.renderer.addAseprite(sprite, animation, this.x, this.y - 1, Renderer_1.RenderingLayer.PLAYER, this.direction);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        if (this.closestNPC
            && !this.dance
            && !this.playerConversation
            && this.closestNPC.isReadyForConversation()) {
            this.drawTooltip(this.closestNPC.getInteractionText(), ControllerFamily_1.ControllerAnimationTags.INTERACT);
        }
        else if (this.readableTrigger) {
            this.drawTooltip("Examine", ControllerFamily_1.ControllerAnimationTags.INTERACT);
        }
        else if (this.canEnterDoor()) {
            this.drawTooltip("Enter", ControllerFamily_1.ControllerAnimationTags.OPEN_DOOR);
        }
        else if (this.canThrowStoneIntoWater()) {
            this.drawTooltip("Throw stone", ControllerFamily_1.ControllerAnimationTags.ACTION);
        }
        else if (this.canThrowSeedIntoSoil()) {
            this.drawTooltip("Plant seed", ControllerFamily_1.ControllerAnimationTags.ACTION);
        }
        else if (this.canDanceToMakeRain()) {
            this.drawTooltip("Dance", ControllerFamily_1.ControllerAnimationTags.INTERACT);
        }
        if (this.dance) {
            this.dance.addDanceToRenderQueue();
        }
        this.speechBubble.draw(ctx);
        if (this.thinkBubble) {
            this.thinkBubble.draw(ctx);
        }
    }
    canThrowStoneIntoWater() {
        return (this.carrying instanceof Stone_1.Stone
            && (this.direction === -1
                && this.scene.world.collidesWith(this.x - 30, this.y - 20) === World_1.Environment.WATER));
    }
    canThrowSeedIntoSoil() {
        return (this.carrying instanceof Seed_1.Seed
            && (this.direction === -1
                && this.scene.world.collidesWith(this.x - 30, this.y + 2) === World_1.Environment.SOIL));
    }
    debugCollisions() {
        console.log("Entities: ", this.scene.world.getEntityCollisions(this));
        console.log("Triggers: ", this.scene.world.getTriggerCollisions(this));
        console.log("Gates: ", this.scene.world.getGateCollisions(this));
    }
    getReadableTrigger() {
        const triggers = this.scene.world.getTriggerCollisions(this);
        if (triggers.length === 0)
            return undefined;
        return triggers.find(t => t.name === "readable");
    }
    canDanceToMakeRain() {
        if (!this.canRainDance)
            return false;
        const ground = this.getGround();
        return ((this.isCollidingWithTrigger("raincloud_sky")
            && !this.scene.world.isRaining()
            && this.carrying === null
            && !this.scene.apocalypse) || (ground instanceof Cloud_1.Cloud
            && this.scene.apocalypse
            && !ground.isRaining()
            && ground.canRain()));
    }
    canEnterDoor() {
        return !this.flying && !this.carrying && this.scene.world.getGateCollisions(this).length > 0;
    }
    /**
     * Returns the bounds of the map area the player currently resides in
     */
    getCurrentMapBounds() {
        const collisions = this.scene.world.getCameraBounds(this);
        if (collisions.length === 0)
            return undefined;
        return util_1.boundsFromMapObject(collisions[0]);
    }
    respawn() {
        this.x = this.lastGroundPosition.x;
        this.y = this.lastGroundPosition.y + 10;
        this.setVelocity(0, 0);
    }
    getPlayerSpriteMetadata() {
        if (this.playerSpriteMetadata == null) {
            this.playerSpriteMetadata = Player_1.playerSprites.map(sprite => {
                var _a;
                const metaDataJSON = (_a = sprite.getLayer("Meta")) === null || _a === void 0 ? void 0 : _a.data;
                return metaDataJSON ? JSON.parse(metaDataJSON) : {};
            });
        }
        return this.playerSpriteMetadata;
    }
    resetJumps() {
        this.usedJump = false;
        this.usedDoubleJump = false;
        this.jumpThresholdTimer = constants_1.PLAYER_JUMP_TIMING_THRESHOLD;
    }
    isOutOfBounds() {
        if (!this.isControllable)
            return false;
        const mapBounds = this.scene.camera.getBounds();
        if (!mapBounds)
            return false;
        return !this.scene.world.boundingBoxesCollide(this.getBounds(), {
            x: mapBounds.x + 4,
            y: mapBounds.y - 4,
            width: mapBounds.width - 8,
            height: mapBounds.height - 8
        });
    }
    update(dt) {
        var _a;
        super.update(dt);
        const triggerCollisions = this.scene.world.getTriggerCollisions(this);
        // Check if the player left the current map bounds and teleport him back to a valid position.
        if (this.isOutOfBounds()) {
            const pos = this.scene.apocalypse ?
                this.scene.pointsOfInterest.find(poi => poi.name === "boss_spawn") :
                this.scene.pointsOfInterest.find(poi => poi.name === "player_reset_position");
            if (pos) {
                this.x = pos.x;
                this.y = pos.y;
                this.scene.camera.setBounds(this.getCurrentMapBounds());
            }
        }
        this.speechBubble.update(this.x, this.y);
        if (this.thinkBubble) {
            this.thinkBubble.update(this.x, this.y);
        }
        if (this.playerConversation) {
            this.playerConversation.update();
        }
        if (this.showHints) {
            if ((Date.now() - this.lastHint) / 1000 > HINT_TIMEOUT) {
                this.showHint();
            }
        }
        if (this.carrying) {
            if (this.running) {
                this.running = false;
                this.animation = "walk";
            }
            this.carrying.x = this.x;
            const currentFrameIndex = Player_1.playerSprites[this.characterAsset].getTaggedFrameIndex(this.animation + "-carry", this.scene.gameTime * 1000);
            const carryOffsetFrames = (_a = this.getPlayerSpriteMetadata()[this.characterAsset].carryOffsetFrames) !== null && _a !== void 0 ? _a : [];
            const offset = carryOffsetFrames.includes(currentFrameIndex + 1) ? 0 : -1;
            this.carrying.y = this.y + (this.height - this.carrying.carryHeight) - offset;
            if (this.carrying instanceof Stone_1.Stone) {
                this.carrying.direction = this.direction;
            }
        }
        const isDrowning = this.scene.world.collidesWith(this.x, this.y) === World_1.Environment.WATER;
        if (isDrowning) {
            if (!this.thinkBubble) {
                const thought = drowningThoughts[util_1.rndInt(0, drowningThoughts.length)];
                this.think(thought.message, thought.duration);
            }
            if (this.carrying instanceof Stone_1.Stone) {
                this.carrying.setVelocity(-2, 10);
                this.carrying = null;
            }
            if (this.drowning === 0) {
                Player_1.drowningSound.play();
            }
            this.setVelocityX(0);
            this.drowning += dt;
            if (this.drowning > 3) {
                Player_1.drowningSound.stop();
                this.respawn();
                const thought = drownThoughts[util_1.rndInt(0, drownThoughts.length)];
                this.think(thought.message, thought.duration);
            }
        }
        else {
            this.drowning = 0;
        }
        const world = this.scene.world;
        const wasFlying = this.flying;
        const prevVelocity = this.getVelocityY();
        // Apply auto movement
        if (this.autoMove) {
            if ((this.autoMove.lastX - this.autoMove.destinationX) * (this.x - this.autoMove.destinationX) <= 0) {
                // Reached or overreached destination
                this.stopAutoMove();
            }
            else {
                // Not yet reached, keep going
                this.autoMove.lastX = this.x;
                if (this.x < this.autoMove.destinationX) {
                    this.moveRight = true;
                    this.moveLeft = false;
                }
                else {
                    this.moveRight = false;
                    this.moveLeft = true;
                }
            }
        }
        // Player movement
        if (!this.scene.camera.isOnTarget()) {
            this.moveRight = false;
            this.moveLeft = false;
        }
        const acceleration = this.flying ? constants_1.PLAYER_ACCELERATION_AIR : constants_1.PLAYER_ACCELERATION;
        if (!isDrowning) {
            if (this.running) {
                this.setMaxVelocity(constants_1.MAX_PLAYER_RUNNING_SPEED);
            }
            else {
                this.setMaxVelocity(this.characterAsset === Campaign_1.CharacterAsset.PATIENT ? 3 : constants_1.MAX_PLAYER_SPEED);
            }
            if (this.moveRight) {
                this.direction = 1;
                if (!this.flying) {
                    Player_1.walkingSound.play();
                }
                this.accelerateX(acceleration * dt);
            }
            else if (this.moveLeft) {
                this.direction = -1;
                if (!this.flying) {
                    Player_1.walkingSound.play();
                }
                this.accelerateX(-acceleration * dt);
            }
            else {
                Player_1.walkingSound.stop();
                if (this.getVelocityX() > 0) {
                    this.decelerateX(acceleration * dt);
                }
                else {
                    this.decelerateX(-acceleration * dt);
                }
            }
        }
        // Set sprite index depending on movement
        if (this.getVelocityX() === 0 && this.getVelocityY() === 0) {
            this.animation = "idle";
            this.flying = false;
            this.resetJumps();
        }
        else {
            if (this.getVelocityY() > 0) {
                this.animation = "jump";
                this.flying = true;
            }
            else if (isDrowning
                || (this.getVelocityY() < 0
                    && this.y - world.getGround(this.x, this.y) > 10)) {
                if (this.jumpThresholdTimer < 0 || this.usedJump) {
                    this.animation = "fall";
                }
                this.flying = true;
            }
            else {
                this.animation = (this.running && !this.carrying) ? "run" : "walk";
                this.flying = false;
                this.resetJumps();
            }
        }
        if (wasFlying && !this.flying) {
            Player_1.landingSound.stop();
            Player_1.landingSound.play();
        }
        // Reduce jump threshold timer when player did not jump yet when falling off an edge
        if (this.flying && !this.usedJump && this.jumpThresholdTimer > 0) {
            this.jumpThresholdTimer -= dt;
        }
        // Check for NPC's that can be interacted with. Reset closestNPC and get all entities that
        // collide with the player with an added 5 px of margin. If there are multiple NPCs
        // colliding, the closest one will be chosen.
        this.closestNPC = null;
        const entities = this.scene.world.getEntityCollisions(this, 5);
        if (entities.length > 0) {
            const closestEntity = entities.length > 1 ? this.getClosestEntity() : entities[0];
            if (closestEntity instanceof NPC_1.NPC) {
                this.closestNPC = closestEntity;
            }
        }
        // Check for readables in player trigger collisions
        this.readableTrigger = this.getReadableTrigger();
        // Spawn random dust particles while walking
        if (!this.disableParticles && this.visible) {
            if (!this.flying && (Math.abs(this.getVelocityX()) > 1 || wasFlying)) {
                if (util_1.timedRnd(dt, 0.2) || wasFlying) {
                    this.dustEmitter.setPosition(this.x, this.y);
                    const count = wasFlying ? Math.ceil(Math.abs(prevVelocity) / 5) : 1;
                    this.dustEmitter.emit(count);
                }
            }
        }
        // Reset jump key state when on ground
        if (!this.flying && this.jumpKeyPressed != null) {
            this.jumpKeyPressed = null;
        }
        // Bounce
        if (this.scene.world.collidesWith(this.x, this.y - 2, [this]) === World_1.Environment.BOUNCE) {
            this.bounce();
        }
        // Dance
        if (this.dance) {
            if (this.dance.hasStarted()) {
                // Basic dancing or error?
                const err = this.dance.getTimeSinceLastMistake();
                const suc = this.dance.getTimeSinceLastSuccess();
                if (err < 1 || suc < 3) {
                    if (err <= suc) {
                        if (err === 0) {
                            this.currentFailAnimation = util_1.rndInt(1, 3);
                        }
                        this.animation = "dance-fluke-" + this.currentFailAnimation;
                    }
                    else {
                        this.animation = "dance";
                    }
                }
            }
            this.dance.setPosition(this.x, this.y - 16);
            const done = this.dance.update();
            if (done) {
                // On cloud -> make it rain
                if (this.dance.wasSuccessful()) {
                    // (Useless because wrong cloud but hey…)
                    const ground = this.getGround();
                    if (ground && ground instanceof Cloud_1.Cloud) {
                        ground.startRain(this.scene.apocalypse ? Infinity : 15);
                        // Camera focus to boss for each triggered rain cloud
                        const bossPointer = this.scene.pointsOfInterest.find(poi => poi.name === "boss_spawn");
                        if (bossPointer) {
                            this.scene.camera.focusOn(3, bossPointer.x, bossPointer.y + 60, 1, 0, Particles_1.valueCurves.cos(0.35));
                        }
                        // Remove a single boss fight barrier
                        const rainingCloudCount = this.scene.gameObjects.filter(o => o instanceof Cloud_1.Cloud && o.isRaining()).length;
                        const wallIdentifier = `wall${rainingCloudCount - 1}`;
                        const targetWall = this.scene.gameObjects.find(o => o instanceof Wall_1.Wall && o.identifier === wallIdentifier);
                        if (targetWall) {
                            targetWall.crumble();
                        }
                    }
                    if (this.isCollidingWithTrigger("raincloud_sky")) {
                        this.scene.world.startRain();
                    }
                }
                this.dance = null;
            }
        }
        this.disableParticles = false;
        // Pet Dog Animation
        if (this.isPettingDog) {
            this.animation = "petting";
        }
        // Logic from triggers
        if (triggerCollisions.length > 0) {
            triggerCollisions.forEach(trigger => {
                // Handle MountainRiddle logic
                if (trigger.name === "reset_mountain") {
                    this.scene.mountainRiddle.resetRiddle();
                }
                if (trigger.name === "mountaingate") {
                    const row = trigger.properties.row;
                    const col = trigger.properties.col;
                    if (col != null && row != null) {
                        this.scene.mountainRiddle.checkGate(col, row);
                    }
                }
                if (trigger.name === "teleporter"
                    && this.scene.mountainRiddle.isFailed()
                    && !this.scene.mountainRiddle.isCleared()) {
                    const teleportY = trigger.properties.teleportY;
                    if (teleportY) {
                        this.y -= teleportY;
                    }
                }
                if (trigger.name === "finish_mountain_riddle") {
                    this.scene.mountainRiddle.clearRiddle();
                }
                // Disable particle effects while in trigger
                const disableParticles = trigger.properties.disableParticles;
                if (disableParticles) {
                    this.disableParticles = true;
                }
                // Set Global Conversation Variables from map triggers
                const globalConversationProps = {
                    key: trigger.properties.setGlobalKey,
                    value: trigger.properties.setGlobalVal
                };
                if (globalConversationProps.key && globalConversationProps.value) {
                    Conversation_1.Conversation.setGlobal(globalConversationProps.key, globalConversationProps.value);
                }
                // Enable Conversion Trees from map triggers
                const enableConversationProps = {
                    key: trigger.properties.setDialogEntity,
                    value: trigger.properties.setDialogValue
                };
                if (enableConversationProps.key && enableConversationProps.value) {
                    this.scene.game.campaign.runAction("enable", null, [enableConversationProps.key, enableConversationProps.value]);
                }
            });
        }
    }
    /**
     * If given coordinate collides with the world then the first free y coordinate above is
     * returned. This can be used to unstuck an object after a new position was set.
     *
     * @param x - X coordinate of current position.
     * @param y - Y coordinate of current position.
     * @return The Y coordinate of the ground below the given coordinate.
     */
    pullOutOfGround() {
        let pulled = 0, col = 0;
        if (this.getVelocityY() <= 0) {
            const world = this.scene.world;
            const height = world.getHeight();
            col = world.collidesWith(this.x, this.y, [this], this.jumpDown ? [World_1.Environment.PLATFORM, World_1.Environment.WATER] : [World_1.Environment.WATER]);
            while (this.y < height && col) {
                pulled++;
                this.y++;
                col = world.collidesWith(this.x, this.y);
            }
        }
        return pulled;
    }
    bounce() {
        this.setVelocityY(Math.sqrt(2 * constants_1.PLAYER_BOUNCE_HEIGHT * constants_1.GRAVITY));
        // Nice bouncy particles
        this.bounceEmitter.setPosition(this.x, this.y - 12);
        this.bounceEmitter.emit(20);
        this.dustEmitter.clear();
        Player_1.bouncingSound.stop();
        Player_1.bouncingSound.play();
    }
    /**
     * If given coordinate collides with the world then the first free y coordinate above is
     * returned. This can be used to unstuck an object after a new position was set.
     *
     * @param x - X coordinate of current position.
     * @param y - Y coordinate of current position.
     * @return The Y coordinate of the ground below the given coordinate.
     */
    pullOutOfCeiling() {
        let pulled = 0;
        const world = this.scene.world;
        while (this.y > 0
            && world.collidesWith(this.x, this.y + this.height, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
            pulled++;
            this.y--;
        }
        return pulled;
    }
    pullOutOfWall() {
        let pulled = 0;
        const world = this.scene.world;
        if (this.getVelocityX() > 0) {
            while (world.collidesWithVerticalLine(this.x + this.width / 2, this.y + this.height * 3 / 4, this.height / 2, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
                this.x--;
                pulled++;
            }
        }
        else {
            while (world.collidesWithVerticalLine(this.x - this.width / 2, this.y + this.height * 3 / 4, this.height / 2, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
                this.x++;
                pulled++;
            }
        }
        return pulled;
    }
    updatePosition(newX, newY) {
        this.x = newX;
        this.y = newY;
        // Check collision with the environment and correct player position and movement
        if (this.pullOutOfGround() !== 0 || this.pullOutOfCeiling() !== 0) {
            this.setVelocityY(0);
        }
        if (this.pullOutOfWall() !== 0) {
            this.setVelocityX(0);
        }
    }
    getGravity() {
        if (this.flying && this.jumpKeyPressed === false && this.getVelocityY() > 0) {
            return constants_1.SHORT_JUMP_GRAVITY;
        }
        else {
            return constants_1.GRAVITY;
        }
    }
    carry(object) {
        if (!this.carrying) {
            this.height = constants_1.PLAYER_HEIGHT + object.carryHeight + constants_1.PLAYER_CARRY_HEIGHT;
            if (object instanceof Seed_1.Seed
                && this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.GOT_SEED) {
                this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_SEED);
            }
            if (object instanceof Wood_1.Wood
                && this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.GOT_WOOD) {
                this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_WOOD);
                this.scene.game.campaign.runAction("enable", null, ["fire", "fire1"]);
            }
            if (object instanceof Stone_1.Stone
                && this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.GOT_STONE) {
                this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.GOT_STONE);
            }
            this.carrying = object;
            object.setFloating(false);
            if (object instanceof Stone_1.Stone) {
                object.state = Stone_1.StoneState.DEFAULT;
            }
            if (object instanceof Seed_1.Seed) {
                object.state = Seed_1.SeedState.FREE;
            }
            if (object instanceof Wood_1.Wood) {
                object.state = Wood_1.WoodState.FREE;
            }
            object.x = this.x;
            object.y = this.y + this.height;
            object.setVelocity(0, 0);
        }
    }
    isCarrying(object) {
        if (object) {
            return this.carrying === object;
        }
        else {
            return this.carrying != null;
        }
    }
    showHint() {
        if (this.playerConversation === null) {
            switch (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex()) {
                case Quests_1.QuestATrigger.JUST_ARRIVED:
                    this.think("I should talk to someone.", 3000);
                    break;
                case Quests_1.QuestATrigger.TALKED_TO_FIRE:
                    this.think("I think the fire needs my help.", 3000);
                    break;
                case Quests_1.QuestATrigger.GOT_QUEST_FROM_FIRE:
                    this.think("The fire told me to visit the tree in the east.", 3000);
                    break;
                case Quests_1.QuestATrigger.TALKED_TO_TREE:
                    this.think("Maybe I should talk to the tree again.", 3000);
                    break;
                case Quests_1.QuestATrigger.GOT_QUEST_FROM_TREE:
                    this.think("I need to pick up the seed by the tree.", 3000);
                    break;
                case Quests_1.QuestATrigger.GOT_SEED:
                    this.think("I should check the mountains for a good place for the seed.", 3000);
                    break;
                case Quests_1.QuestATrigger.PLANTED_SEED:
                    this.think("The seed needs something to grow, I think.", 3000);
                    break;
                case Quests_1.QuestATrigger.TALKED_TO_STONE:
                    this.think("I should talk to that crazy stone again.", 3000);
                    break;
                case Quests_1.QuestATrigger.GOT_STONE:
                    this.think("My arms get heavy. I really should throw that thing in the river.", 3000);
                    break;
                case Quests_1.QuestATrigger.THROWN_STONE_INTO_WATER:
                    this.think("There must be something interesting west of the river.", 3000);
                    break;
                case Quests_1.QuestATrigger.GOT_MULTIJUMP:
                    this.think("I should check the clouds. The seed still needs something to grow.", 3000);
                    break;
                case Quests_1.QuestATrigger.MADE_RAIN:
                    this.think("I should talk to that singing tree again.", 3000);
                    break;
                case Quests_1.QuestATrigger.GOT_WOOD:
                    this.think("Quick! The fire needs wood!", 3000);
                    break;
            }
        }
        this.lastHint = Date.now();
    }
};
tslib_1.__decorate([
    Assets_1.asset([
        "sprites/pc/female.aseprite.json",
        "sprites/pc/male.aseprite.json",
        "sprites/pc/patient.aseprite.json"
    ]),
    tslib_1.__metadata("design:type", Array)
], Player, "playerSprites", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "sprites/buttons_keyboard.aseprite.json",
        "sprites/buttons_xbox.aseprite.json",
        "sprites/buttons_playstation.aseprite.json"
    ]),
    tslib_1.__metadata("design:type", Array)
], Player, "buttons", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/drowning/drowning.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "drowningSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/feet-walking/steps_single.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "walkingSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/throwing/throwing.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "throwingSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/gate/door_open.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "enterGateSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/portal/enter-portal.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "enterPortalSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/gate/door_close.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "leaveGateSound", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "sounds/jumping/jumping_female.mp3",
        "sounds/jumping/jumping.mp3"
    ]),
    tslib_1.__metadata("design:type", Array)
], Player, "jumpingSounds", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/jumping/landing.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "landingSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/jumping/squish.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Player, "bouncingSound", void 0);
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], Player, "font", void 0);
Player = Player_1 = tslib_1.__decorate([
    Entity_1.entity("player"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Player);
exports.Player = Player;


/***/ }),

/***/ "./lib/entities/Portal.js":
/*!********************************!*\
  !*** ./lib/entities/Portal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Portal_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Portal = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
var PortalAnimationState;
(function (PortalAnimationState) {
    PortalAnimationState[PortalAnimationState["WAITING"] = 0] = "WAITING";
    PortalAnimationState[PortalAnimationState["FADEIN"] = 1] = "FADEIN";
    PortalAnimationState[PortalAnimationState["IDLE"] = 2] = "IDLE";
    PortalAnimationState[PortalAnimationState["FADEOUT"] = 3] = "FADEOUT";
    PortalAnimationState[PortalAnimationState["GONE"] = 4] = "GONE";
})(PortalAnimationState || (PortalAnimationState = {}));
let Portal = Portal_1 = class Portal extends Entity_1.Entity {
    constructor(scene, x, y) {
        super(scene, x, y, 32, 50, false);
        this.animationState = PortalAnimationState.WAITING;
        this.animator.assignSprite(Portal_1.sprite);
    }
    nextAnimationState() {
        this.animationState++;
    }
    draw() {
        switch (this.animationState) {
            case PortalAnimationState.WAITING:
                this.animator.play("empty", 1);
                break;
            case PortalAnimationState.FADEIN:
                this.animator.play("fadein", 1, { loop: false, callback: this.nextAnimationState.bind(this) });
                break;
            case PortalAnimationState.IDLE:
                this.animator.play("idle", 1);
                break;
            case PortalAnimationState.FADEOUT:
                this.animator.play("fadeout", 1, { loop: false, callback: this.nextAnimationState.bind(this) });
                break;
            case PortalAnimationState.GONE:
                this.animator.play("empty", 1);
                break;
        }
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    update(dt) {
        super.update(dt);
        if (this.animationState === PortalAnimationState.WAITING) {
            if (this.timeAlive >= 1) {
                this.nextAnimationState();
                Portal_1.sound.play();
            }
        }
        else if (this.animationState === PortalAnimationState.IDLE) {
            if (this.timeAlive >= 4) {
                this.nextAnimationState();
            }
        }
        else if (this.animationState === PortalAnimationState.GONE) {
            this.scene.removeGameObject(this);
        }
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/portal.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Portal, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/portal/portal.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Portal, "sound", void 0);
Portal = Portal_1 = tslib_1.__decorate([
    Entity_1.entity("portal"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Portal);
exports.Portal = Portal;


/***/ }),

/***/ "./lib/entities/Radio.js":
/*!*******************************!*\
  !*** ./lib/entities/Radio.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Radio_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Radio = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let Radio = Radio_1 = class Radio extends Entity_1.Entity {
    constructor(scene, x, y) {
        super(scene, x, y, 24, 24, false);
    }
    draw() {
        this.scene.renderer.addAseprite(Radio_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    update() { }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/radio.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Radio, "sprite", void 0);
Radio = Radio_1 = tslib_1.__decorate([
    Entity_1.entity("radio"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Radio);
exports.Radio = Radio;


/***/ }),

/***/ "./lib/entities/RiddleStone.js":
/*!*************************************!*\
  !*** ./lib/entities/RiddleStone.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RiddleStone = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
class RiddleStone extends Entity_1.Entity {
    constructor(scene, x, y, properties) {
        super(scene, x, y, 16, 16, false);
        this.col = properties.col || 0;
        this.row = properties.row || 0;
    }
    draw() {
        if (this.scene.mountainRiddle.isCorrectGate(this.col, this.row)) {
            this.scene.renderer.addAseprite(RiddleStone.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES);
            if (this.scene.showBounds) {
                this.drawBounds();
            }
        }
    }
    update() { }
}
tslib_1.__decorate([
    Assets_1.asset("sprites/riddlestone.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], RiddleStone, "sprite", void 0);
exports.RiddleStone = RiddleStone;


/***/ }),

/***/ "./lib/entities/ScriptableNPC.js":
/*!***************************************!*\
  !*** ./lib/entities/ScriptableNPC.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptableNPC = void 0;
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
class ScriptableNPC extends NPC_1.NPC {
    constructor() {
        super(...arguments);
        this.move = 0;
    }
    updatePosition(newX, newY) {
        this.x = newX;
        this.y = newY;
        // Check collision with the environment and correct player position and movement
        if (this.pullOutOfGround() !== 0 || this.pullOutOfCeiling() !== 0) {
            this.setVelocityY(0);
        }
        if (this.pullOutOfWall() !== 0) {
            this.setVelocityX(0);
        }
    }
    pullOutOfGround() {
        let pulled = 0, col = 0;
        if (this.getVelocityY() <= 0) {
            const world = this.scene.world;
            const height = world.getHeight();
            col = world.collidesWith(this.x, this.y, [this], [World_1.Environment.WATER]);
            while (this.y < height && col) {
                pulled++;
                this.y++;
                col = world.collidesWith(this.x, this.y);
            }
        }
        return pulled;
    }
    pullOutOfCeiling() {
        let pulled = 0;
        const world = this.scene.world;
        while (this.y > 0
            && world.collidesWith(this.x, this.y + this.height, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
            pulled++;
            this.y--;
        }
        return pulled;
    }
    pullOutOfWall() {
        let pulled = 0;
        const world = this.scene.world;
        if (this.getVelocityX() > 0) {
            while (world.collidesWithVerticalLine(this.x + this.width / 2, this.y + this.height * 3 / 4, this.height / 2, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
                this.x--;
                pulled++;
            }
        }
        else {
            while (world.collidesWithVerticalLine(this.x - this.width / 2, this.y + this.height * 3 / 4, this.height / 2, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
                this.x++;
                pulled++;
            }
        }
        return pulled;
    }
    update(dt) {
        super.update(dt);
    }
}
exports.ScriptableNPC = ScriptableNPC;


/***/ }),

/***/ "./lib/entities/Seed.js":
/*!******************************!*\
  !*** ./lib/entities/Seed.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Seed_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Seed = exports.SeedState = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const Wood_1 = __webpack_require__(/*! ./Wood */ "./lib/entities/Wood.js");
var SeedState;
(function (SeedState) {
    SeedState[SeedState["FREE"] = 0] = "FREE";
    SeedState[SeedState["PLANTED"] = 1] = "PLANTED";
    SeedState[SeedState["SWIMMING"] = 2] = "SWIMMING";
    SeedState[SeedState["GROWN"] = 3] = "GROWN";
})(SeedState = exports.SeedState || (exports.SeedState = {}));
let Seed = Seed_1 = class Seed extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 24, 24);
        this.state = SeedState.FREE;
        this.wood = new Wood_1.Wood(scene, x, y);
        this.face = new Face_1.Face(scene, this, Face_1.EyeType.STANDARD, 0, 8);
        const floatingPosition = this.scene.pointsOfInterest.find(poi => poi.name === "recover_floating_position");
        if (!floatingPosition) {
            throw new Error("Could not find “recover_floating_position” point of interest in game scene.");
        }
        this.floatingPosition = floatingPosition;
    }
    resetState() {
        this.setFloating(false);
        this.state = SeedState.FREE;
    }
    getSpriteTag() {
        switch (this.state) {
            case SeedState.PLANTED:
                return "planted";
            case SeedState.GROWN:
                return "grown";
            default:
                return "free";
        }
    }
    draw(ctx) {
        this.scene.renderer.addAseprite(Seed_1.sprite, this.getSpriteTag(), this.x, this.y - 1, Renderer_1.RenderingLayer.ENTITIES, undefined);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        if (this.state === SeedState.GROWN) {
            this.drawFace(ctx);
        }
        this.speechBubble.draw(ctx);
    }
    isCarried() {
        return this.scene.player.isCarrying(this);
    }
    grow() {
        if (this.state === SeedState.PLANTED) {
            this.state = SeedState.GROWN;
            this.scene.seed = this;
            Conversation_1.Conversation.setGlobal("seedgrown", "true");
            this.scene.game.campaign.runAction("enable", null, ["tree", "tree2"]);
            this.scene.game.campaign.runAction("enable", null, ["seed", "seed1"]);
        }
    }
    update(dt) {
        super.update(dt);
        if (this.state === SeedState.SWIMMING) {
            const diffX = this.floatingPosition.x - this.x;
            const moveX = Math.min(20, Math.abs(diffX)) * Math.sign(diffX);
            this.x += moveX * dt;
            this.setVelocityY(Math.abs(((util_1.now() % 2000) - 1000) / 1000) - 0.5);
        }
        if (this.state === SeedState.FREE || this.state === SeedState.SWIMMING) {
            const player = this.scene.player;
            if (!this.isCarried() && this.distanceTo(player) < 20) {
                player.carry(this);
            }
            if (!this.isCarried()
                && this.scene.world.collidesWith(this.x, this.y - 8) === World_1.Environment.SOIL) {
                const seedPosition = this.scene.pointsOfInterest.find(poi => poi.name === "seedposition");
                if (!seedPosition)
                    throw new Error("Seed position is missing in points of interest array");
                this.state = SeedState.PLANTED;
                this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.PLANTED_SEED);
                this.setFloating(true);
                this.x = seedPosition.x;
                this.y = seedPosition.y;
                Seed_1.successSound.play();
                Conversation_1.Conversation.setGlobal("seedplanted", "true");
            }
            if (!this.isCarried()
                && this.state !== SeedState.SWIMMING
                && this.scene.world.collidesWith(this.x, this.y - 5) === World_1.Environment.WATER) {
                this.state = SeedState.SWIMMING;
                this.setVelocity(0, 0);
                this.setFloating(true);
                this.y = this.floatingPosition.y;
            }
        }
        else if (this.state === SeedState.PLANTED) {
            if (this.scene.world.isRaining()) {
                this.grow();
            }
        }
        else if (this.state === SeedState.GROWN) {
            // TODO Special update behavior when grown
        }
        this.speechBubble.update(this.x, this.y);
    }
    spawnWood() {
        if (!this.scene.gameObjects.includes(this.wood)) {
            this.scene.addGameObject(this.wood);
        }
        this.wood.x = this.x;
        this.wood.y = this.y + this.height / 2;
        this.wood.setVelocity(-5, 0);
        return this.wood;
    }
    startDialog() { }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/seed.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Seed, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/throwing/success.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Seed, "successSound", void 0);
Seed = Seed_1 = tslib_1.__decorate([
    Entity_1.entity("seed"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Seed);
exports.Seed = Seed;


/***/ }),

/***/ "./lib/entities/ShadowPresence.js":
/*!****************************************!*\
  !*** ./lib/entities/ShadowPresence.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ShadowPresence_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShadowPresence = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const SoundEmitter_1 = __webpack_require__(/*! ../SoundEmitter */ "./lib/SoundEmitter.js");
var AnimationTag;
(function (AnimationTag) {
    AnimationTag["INVISIBLE"] = "invisible";
    AnimationTag["IDLE"] = "idle";
})(AnimationTag || (AnimationTag = {}));
let ShadowPresence = ShadowPresence_1 = class ShadowPresence extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 12, 46);
        this.isNearPlayer = false;
        this.direction = -1;
        this.lookAtPlayer = false;
        this.soundEmitter = new SoundEmitter_1.SoundEmitter(this.scene, this.x, this.y, ShadowPresence_1.caveAmbience, 0.3, 1);
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt()) {
            return false;
        }
        return (this.isNearPlayer
            && this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).isTriggered(Quests_1.QuestATrigger.TALKED_TO_FIRE)
            && !this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).isTriggered(Quests_1.QuestATrigger.GOT_RUNNING_ABILITY));
    }
    draw(ctx) {
        const scale = this.direction < 0 ? { x: -1, y: 1 } : undefined;
        const animationTag = this.isNearPlayer ? AnimationTag.IDLE : AnimationTag.INVISIBLE;
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.ASEPRITE,
            layer: Renderer_1.RenderingLayer.ENTITIES,
            translation: { x: this.x, y: -this.y },
            position: {
                x: -ShadowPresence_1.sprite.width >> 1,
                y: -ShadowPresence_1.sprite.height
            },
            scale,
            asset: ShadowPresence_1.sprite,
            animationTag,
            time: this.scene.gameTime * 1000
        });
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        this.speechBubble.draw(ctx);
    }
    checkPlayerDistance() {
        this.isNearPlayer = false;
        if (this.distanceTo(this.scene.player) < 60) {
            this.isNearPlayer = true;
        }
    }
    update(dt) {
        super.update(dt);
        this.checkPlayerDistance();
        this.dialoguePrompt.update(dt, this.x, this.y + 48);
        this.speechBubble.update(this.x, this.y + 12);
        this.soundEmitter.update();
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/shadowpresence.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], ShadowPresence, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/ambient/cave.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], ShadowPresence, "caveAmbience", void 0);
ShadowPresence = ShadowPresence_1 = tslib_1.__decorate([
    Entity_1.entity("shadowpresence"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], ShadowPresence);
exports.ShadowPresence = ShadowPresence;


/***/ }),

/***/ "./lib/entities/Shiba.js":
/*!*******************************!*\
  !*** ./lib/entities/Shiba.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Shiba_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shiba = exports.ShibaState = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const bird_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../assets/dialog/bird.dialog.json */ "./assets/dialog/bird.dialog.json"));
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const Fire_1 = __webpack_require__(/*! ./Fire */ "./lib/entities/Fire.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Particles_1 = __webpack_require__(/*! ../Particles */ "./lib/Particles.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const ScriptableNPC_1 = __webpack_require__(/*! ./ScriptableNPC */ "./lib/entities/ScriptableNPC.js");
const shiba1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../assets/dialog/shiba1.dialog.json */ "./assets/dialog/shiba1.dialog.json"));
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const IDLE_DURATION = [2, 3, 4];
const WALK_DURATION = [0.5, 1, 1.2, 1.5];
const ACCELERATION = 15;
var ShibaState;
(function (ShibaState) {
    ShibaState[ShibaState["ON_TREE"] = 0] = "ON_TREE";
    ShibaState[ShibaState["FLYING_AWAY"] = 1] = "FLYING_AWAY";
    ShibaState[ShibaState["ON_MOUNTAIN"] = 2] = "ON_MOUNTAIN";
    ShibaState[ShibaState["GOING_TO_FIRE"] = 3] = "GOING_TO_FIRE";
    ShibaState[ShibaState["KILLING_FIRE"] = 4] = "KILLING_FIRE";
    ShibaState[ShibaState["FIRE_KILLED"] = 5] = "FIRE_KILLED";
})(ShibaState = exports.ShibaState || (exports.ShibaState = {}));
const FLYING_DURATION = 8;
const JUMP_INTERVAL = 0.3;
const HEART_PARTICLE_DELAY = 0.5;
let Shiba = Shiba_1 = class Shiba extends ScriptableNPC_1.ScriptableNPC {
    constructor(scene, x, y) {
        super(scene, x, y, 28, 24);
        this.state = ShibaState.ON_TREE;
        this.idleTimer = util_1.rndItem(IDLE_DURATION);
        this.walkTimer = null;
        this.autoMoveDirection = 1;
        this.jumpHeight = 1.5;
        this.jumpTimer = 0;
        this.flyingTime = 0;
        this.saidFarewell = false;
        this.peeing = false;
        this.isBeingPetted = false;
        this.nextHeartParticle = HEART_PARTICLE_DELAY;
        this.minAltitude = y;
        this.conversation = new Conversation_1.Conversation(bird_dialog_json_1.default, this);
        this.setMaxVelocity(2);
        this.conversation = new Conversation_1.Conversation(shiba1_dialog_json_1.default, this);
        this.doubleJumpEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            velocity: () => ({ x: util_1.rnd(-1, 1) * 90, y: util_1.rnd(-1, 0) * 100 }),
            color: () => util_1.rndItem(constants_1.DOUBLE_JUMP_COLORS),
            size: util_1.rnd(1, 2),
            gravity: { x: 0, y: -120 },
            lifetime: () => util_1.rnd(0.4, 0.6),
            alphaCurve: Particles_1.valueCurves.trapeze(0.05, 0.2)
        });
        this.heartEmitter = this.scene.particles.createEmitter({
            position: { x: this.x, y: this.y },
            offset: () => ({ x: util_1.rnd(-8, 8), y: 18 }),
            velocity: () => ({ x: 0, y: 5 }),
            color: () => Shiba_1.heartImage,
            size: 3,
            gravity: { x: 0, y: 0 },
            lifetime: () => util_1.rnd(1.5, 3),
            blendMode: "source-over",
            alphaCurve: Particles_1.valueCurves.cos(0.1, 0.5),
        });
    }
    setState(state) {
        this.state = state;
    }
    getState() {
        return this.state;
    }
    nextState() {
        this.state++;
        if (this.state === ShibaState.FLYING_AWAY) {
            this.lookAtPlayer = false;
            this.scene.player.disableMultiJump();
            this.setMaxVelocity(3);
        }
        else if (this.state === ShibaState.ON_MOUNTAIN) {
            this.move = 0;
            const spawn = this.scene.pointsOfInterest.find(poi => poi.name === "shiba_mountain_spawn");
            if (!spawn)
                throw new Error("Shiba mountain spawn missing");
            this.x = spawn.x;
            this.y = spawn.y;
            this.scene.game.campaign.runAction("enable", null, ["shiba", "shiba4"]);
            this.scene.powerShiba.nextState();
        }
        else if (this.state === ShibaState.GOING_TO_FIRE) {
            this.scene.camera.setCinematicBar(1);
            const shibaSpawnPos = this.scene.pointsOfInterest.find(poi => poi.name === "friendship_shiba_spawn");
            this.lookAtPlayer = false;
            this.setMaxVelocity(2);
            this.scene.startFriendshipMusic();
            if (!shibaSpawnPos)
                throw new Error("'friendship_shiba_spawn' point in map is missing");
            this.x = shibaSpawnPos.x;
            this.y = shibaSpawnPos.y;
        }
        else if (this.state === ShibaState.KILLING_FIRE) {
            this.move = 0;
            setTimeout(() => this.think("Wow!", 1500), 500);
            setTimeout(() => (this.direction = 1), 1000);
            setTimeout(() => {
                this.think("Bad fire!", 2000);
                this.scene.fire.setState(Fire_1.FireState.BEING_PUT_OUT);
                this.scene.fire.growthTarget = Fire_1.SHRINK_SIZE;
                this.peeing = true;
                Shiba_1.putOutSound.setVolume(.3);
                Shiba_1.putOutSound.play();
            }, 2000);
            setTimeout(() => this.scene.fire.think("Oh God…", 2000), 4500);
            setTimeout(() => this.scene.fire.think("Disgusting…", 3000), 8000);
        }
        else if (this.state === ShibaState.FIRE_KILLED) {
            this.peeing = false;
            this.scene.fire.state = Fire_1.FireState.PUT_OUT;
            Shiba_1.putOutSound.stop();
            setTimeout(() => (this.direction = -1), 1000);
            setTimeout(() => this.think("I help friend!", 1500), 1500);
            setTimeout(() => {
                var _a;
                this.scene.fire.think("Yeah, great.", 2000);
                (_a = this.scene.fire.face) === null || _a === void 0 ? void 0 : _a.setMode(Face_1.FaceModes.BORED);
                this.scene.player.isControllable = true;
                this.scene.friendshipCutscene = false;
                this.lookAtPlayer = true;
                this.scene.game.campaign.runAction("enable", null, ["fire", "fire4"]);
                this.scene.game.campaign.runAction("enable", null, ["shiba", "shiba5"]);
                this.scene.game.campaign.getQuest(Quests_1.QuestKey.B).finish();
            }, 3500);
        }
    }
    jump() {
        this.jumpTimer = JUMP_INTERVAL;
        this.setVelocityY(Math.sqrt(2 * this.jumpHeight * constants_1.GRAVITY));
        this.doubleJumpEmitter.setPosition(this.x, this.y + 20);
        this.doubleJumpEmitter.emit(20);
        const vol = util_1.calculateVolume(this.distanceToPlayer, 0.4);
        if (vol > 0) {
            Shiba_1.jumpSound.setVolume(vol);
            Shiba_1.jumpSound.stop();
            Shiba_1.jumpSound.play();
        }
    }
    canJump() {
        return this.jumpTimer === 0;
    }
    startBeingPetted() {
        this.isBeingPetted = true;
        const x = this.direction > 0 ? this.x + 5 : this.x - 5;
        this.heartEmitter.setPosition(x, this.y);
    }
    stopBeingPetted() {
        this.isBeingPetted = false;
    }
    getAnimationTag() {
        if (this.peeing)
            return "peeing";
        if (this.isBeingPetted)
            return "petted";
        return "idle";
    }
    draw(ctx) {
        if (this.move === 0) {
            this.scene.renderer.addAseprite(Shiba_1.sprite, this.getAnimationTag(), this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        }
        else {
            this.scene.renderer.addAseprite(Shiba_1.sprite, "walk", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        }
        if (this.scene.showBounds)
            this.drawBounds();
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        if (this.thinkBubble) {
            this.thinkBubble.draw(ctx);
        }
        this.speechBubble.draw(ctx);
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt())
            return false;
        return false;
    }
    update(dt) {
        super.update(dt);
        // Heart Emitter
        if (this.isBeingPetted) {
            this.nextHeartParticle -= dt;
            if (this.nextHeartParticle < 0) {
                this.heartEmitter.emit(1);
                this.nextHeartParticle = HEART_PARTICLE_DELAY;
            }
            this.heartEmitter.update(dt);
        }
        // Triggers
        const triggerCollisions = this.scene.world.getTriggerCollisions(this);
        if (this.hasActiveConversation() || this.isBeingPetted) {
            this.move = 0;
        }
        else {
            if (this.state === ShibaState.ON_TREE) {
                this.onTreeUpdateLogic(triggerCollisions, dt);
            }
            else if (this.state === ShibaState.FLYING_AWAY) {
                this.flyingAwayUpdateLogic(dt);
            }
            else if (this.state === ShibaState.GOING_TO_FIRE) {
                this.walkToFireLogic(triggerCollisions);
            }
        }
        if (this.move !== 0) {
            this.direction = this.move;
            this.accelerateX(ACCELERATION * dt * this.move);
        }
        else {
            if (this.getVelocityX() > 0) {
                this.decelerateX(ACCELERATION * dt);
            }
            else {
                this.decelerateX(-ACCELERATION * dt);
            }
        }
        this.dialoguePrompt.update(dt, this.x, this.y + 20);
        this.speechBubble.update(this.x, this.y);
        if (this.thinkBubble) {
            this.thinkBubble.update(this.x, this.y);
        }
    }
    isReadyForConversation() {
        const superResult = super.isReadyForConversation();
        return (superResult && this.state !== ShibaState.FLYING_AWAY && !this.isBeingPetted);
    }
    walkToFireLogic(triggerCollisions) {
        this.move = -1;
        if (this.scene.world.collidesWithVerticalLine(this.x - (this.width / 2), this.y + this.height, this.height, [this], [World_1.Environment.PLATFORM, World_1.Environment.WATER])) {
            this.jump();
        }
        if (triggerCollisions.length > 0) {
            const event = triggerCollisions.find(t => t.name === "shiba_stop");
            if (event) {
                this.nextState();
            }
        }
    }
    onTreeUpdateLogic(triggerCollisions, dt) {
        if (triggerCollisions.length > 0) {
            const event = triggerCollisions.find(t => t.name === "shiba_action");
            if (event && event.properties.velocity) {
                this.autoMoveDirection = event.properties.velocity > 0 ? 1 : -1;
                this.move = this.autoMoveDirection;
            }
        }
        if (this.idleTimer !== null && this.idleTimer >= 0) {
            this.idleTimer -= dt;
        }
        if (this.walkTimer !== null && this.walkTimer >= 0) {
            this.walkTimer -= dt;
        }
        if (this.idleTimer && this.idleTimer <= 0 && this.walkTimer === null) {
            this.walkTimer = util_1.rndItem(WALK_DURATION);
            this.idleTimer = null;
            this.move = this.autoMoveDirection;
        }
        if (this.walkTimer && this.walkTimer <= 0 && this.idleTimer === null) {
            this.idleTimer = util_1.rndItem(IDLE_DURATION);
            this.walkTimer = null;
            this.move = 0;
        }
        // Check if bone is near
        if (Conversation_1.Conversation.getGlobals()["$gotBoneQuest"]
            && !Conversation_1.Conversation.getGlobals()["$broughtBone"]
            && this.distanceTo(this.scene.bone) < 100) {
            Conversation_1.Conversation.setGlobal("broughtBone", "true");
            this.think("Wow! Bone!!!", 2000);
            this.scene.game.campaign.runAction("enable", null, ["shiba", "shiba2"]);
        }
    }
    flyingAwayUpdateLogic(dt) {
        this.move = 1;
        this.minAltitude += 20 * dt;
        if (this.jumpTimer > 0) {
            this.jumpTimer -= dt;
            if (this.jumpTimer < 0) {
                this.jumpTimer = 0;
            }
        }
        if (this.y < this.minAltitude && this.canJump()) {
            this.jump();
        }
        this.flyingTime += dt;
        if (!this.saidFarewell && this.flyingTime > 2) {
            this.saidFarewell = true;
            this.think("See you on the mountain!", 3000);
        }
        if (this.flyingTime >= FLYING_DURATION) {
            this.nextState();
        }
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/shiba.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Shiba, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/ending/putout.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Shiba, "putOutSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/jumping/jump_neutral.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Shiba, "jumpSound", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/heart.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], Shiba, "heartImage", void 0);
Shiba = Shiba_1 = tslib_1.__decorate([
    Entity_1.entity("shiba"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Shiba);
exports.Shiba = Shiba;


/***/ }),

/***/ "./lib/entities/Sign.js":
/*!******************************!*\
  !*** ./lib/entities/Sign.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Sign_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sign = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let Sign = Sign_1 = class Sign extends NPC_1.NPC {
    constructor(scene, x, y, properties) {
        super(scene, x, y, 16, 16);
        this.conversation = this.generateConversation(this.prepareContent(properties.content));
    }
    prepareContent(content) {
        if (!content) {
            return ["The sign is empty."];
        }
        return content.split(":::");
    }
    getInteractionText() {
        return "Read sign";
    }
    generateConversation(lines) {
        const json = { "entry": [] };
        lines.forEach((line, index) => {
            if (index === lines.length - 1) {
                line += " @entry !end";
            }
            json.entry.push(line);
        });
        return new Conversation_1.Conversation(json, this);
    }
    draw(ctx) {
        this.scene.renderer.add({
            type: Renderer_1.RenderingType.ASEPRITE,
            layer: Renderer_1.RenderingLayer.ENTITIES,
            translation: { x: this.x, y: -this.y },
            position: {
                x: -Sign_1.sprite.width >> 1,
                y: -Sign_1.sprite.height
            },
            asset: Sign_1.sprite,
            animationTag: "idle",
            time: this.scene.gameTime * 1000
        });
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.speechBubble.draw(ctx);
    }
    update() { }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/sign.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Sign, "sprite", void 0);
Sign = Sign_1 = tslib_1.__decorate([
    Entity_1.entity("sign"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number, Object])
], Sign);
exports.Sign = Sign;


/***/ }),

/***/ "./lib/entities/Skull.js":
/*!*******************************!*\
  !*** ./lib/entities/Skull.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Skull_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Skull = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let Skull = Skull_1 = class Skull extends PhysicsEntity_1.PhysicsEntity {
    constructor(scene, x, y) {
        super(scene, x, y, 16, 16);
    }
    draw() {
        this.scene.renderer.addAseprite(Skull_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    isCarried() {
        return this.scene.player.isCarrying(this);
    }
    update(dt) {
        super.update(dt);
        const player = this.scene.player;
        if (!this.isCarried() && this.distanceTo(player) < 20) {
            player.carry(this);
        }
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/skull.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Skull, "sprite", void 0);
Skull = Skull_1 = tslib_1.__decorate([
    Entity_1.entity("skull"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Skull);
exports.Skull = Skull;


/***/ }),

/***/ "./lib/entities/Snowball.js":
/*!**********************************!*\
  !*** ./lib/entities/Snowball.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Snowball = void 0;
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
class Snowball extends PhysicsEntity_1.PhysicsEntity {
    constructor(scene, x, y, velocityX, velocityY) {
        super(scene, x, y, 0.25 * constants_1.PIXEL_PER_METER, 0.25 * constants_1.PIXEL_PER_METER);
        this.setVelocity(velocityX, velocityY);
    }
    draw(ctx) {
        ctx.save();
        ctx.beginPath();
        ctx.translate(this.x, -this.y);
        ctx.strokeStyle = "black";
        ctx.fillStyle = "white";
        ctx.beginPath();
        ctx.arc(0, -this.height / 2, this.width / 2, 0, Math.PI * 2, false);
        ctx.fill();
        ctx.stroke();
        ctx.restore();
    }
}
exports.Snowball = Snowball;


/***/ }),

/***/ "./lib/entities/Stone.js":
/*!*******************************!*\
  !*** ./lib/entities/Stone.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Stone_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stone = exports.StoneState = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
var StoneState;
(function (StoneState) {
    StoneState[StoneState["DEFAULT"] = 0] = "DEFAULT";
    StoneState[StoneState["SWIMMING"] = 1] = "SWIMMING";
    StoneState[StoneState["FLOATING"] = 2] = "FLOATING";
})(StoneState = exports.StoneState || (exports.StoneState = {}));
let Stone = Stone_1 = class Stone extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 26, 50);
        this.state = StoneState.DEFAULT;
        this.direction = -1;
        this.face = new Face_1.Face(scene, this, Face_1.EyeType.STONE, 0, 21);
        this.lookAtPlayer = false;
        this.carryHeight = 16;
        const floatingPosition = this.scene.pointsOfInterest.find(poi => poi.name === "stone_floating_position");
        if (!floatingPosition) {
            throw new Error("Could not find \"stone_floating_position\" point of interest in game scene");
        }
        this.floatingPosition = floatingPosition;
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt()) {
            return false;
        }
        return (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() >= Quests_1.QuestATrigger.PLANTED_SEED &&
            this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.GOT_STONE);
    }
    draw(ctx) {
        this.scene.renderer.addAseprite(Stone_1.sprite, "idle", this.x, this.y - 1, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.drawFace(ctx, false);
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        if (this.state === StoneState.DEFAULT) {
            if (this.scene.world.collidesWith(this.x, this.y - 5) === World_1.Environment.WATER) {
                this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.THROWN_STONE_INTO_WATER);
                this.state = StoneState.SWIMMING;
                this.setVelocity(0, 0);
                this.setFloating(true);
                this.y = this.floatingPosition.y;
                Stone_1.successSound.play();
                this.scene.game.campaign.runAction("enable", null, ["stone", "stone2"]);
                this.scene.game.campaign.runAction("enable", null, ["flameboy", "flameboy2"]);
                this.scene.game.campaign.runAction("enable", null, ["caveman", "caveman2"]);
            }
        }
        else if (this.state === StoneState.SWIMMING) {
            const diffX = this.floatingPosition.x - this.x;
            this.direction = Math.sign(diffX);
            const moveX = Math.min(20, Math.abs(diffX)) * Math.sign(diffX);
            this.x += moveX * dt;
            if (Math.abs(moveX) < 2) {
                this.state = StoneState.FLOATING;
            }
            this.setVelocityY(Math.abs(((util_1.now() % 2000) - 1000) / 1000) - 0.5);
        }
        else if (this.state === StoneState.FLOATING) {
            this.x = this.floatingPosition.x;
            this.direction = -1;
            this.setVelocityY(Math.abs(((util_1.now() % 2000) - 1000) / 1000) - 0.5);
        }
        this.dialoguePrompt.update(dt, this.x, this.y + 48);
        this.speechBubble.update(this.x, this.y);
    }
    collidesWith(x, y) {
        if (this.state === StoneState.FLOATING || this.state === StoneState.SWIMMING) {
            if (x >= this.x - this.width / 2
                && x <= this.x + this.width / 2
                && y >= this.y
                && y <= this.y + this.height) {
                return World_1.Environment.SOLID;
            }
        }
        return World_1.Environment.AIR;
    }
    isCarried() {
        return this.scene.player.isCarrying(this);
    }
    pickUp() {
        var _a;
        (_a = this.face) === null || _a === void 0 ? void 0 : _a.setMode(Face_1.FaceModes.AMUSED);
        this.scene.player.carry(this);
        this.scene.game.campaign.runAction("enable", null, ["flameboy", "flameboy4"]);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/stone.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Stone, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/throwing/success.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Stone, "successSound", void 0);
Stone = Stone_1 = tslib_1.__decorate([
    Entity_1.entity("stone"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Stone);
exports.Stone = Stone;


/***/ }),

/***/ "./lib/entities/StoneDisciple.js":
/*!***************************************!*\
  !*** ./lib/entities/StoneDisciple.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var StoneDisciple_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoneDisciple = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let StoneDisciple = StoneDisciple_1 = class StoneDisciple extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 32, 26);
        this.direction = -1;
        this.lookAtPlayer = true;
        this.face = new Face_1.Face(scene, this, Face_1.EyeType.STONEDISCIPLE, 0, 0);
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt()) {
            return false;
        }
        const talkedToStoneDisciple = Conversation_1.Conversation.getGlobals()["$talkedToStoneDisciple"];
        const talkedToStoneDiscipleAgain = Conversation_1.Conversation.getGlobals()["$talkedToStoneDiscipleAgain"];
        const gotTeleported = Conversation_1.Conversation.getGlobals()["$gotTeleported"];
        return (talkedToStoneDisciple === undefined
            || (gotTeleported !== undefined && talkedToStoneDiscipleAgain === undefined));
    }
    draw(ctx) {
        this.scene.renderer.addAseprite(StoneDisciple_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        this.drawFace(ctx, false);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.dialoguePrompt.update(dt, this.x, this.y + this.height);
        this.speechBubble.update(this.x, this.y);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/stonedisciple.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], StoneDisciple, "sprite", void 0);
StoneDisciple = StoneDisciple_1 = tslib_1.__decorate([
    Entity_1.entity("stonedisciple"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], StoneDisciple);
exports.StoneDisciple = StoneDisciple;


/***/ }),

/***/ "./lib/entities/SuperThrow.js":
/*!************************************!*\
  !*** ./lib/entities/SuperThrow.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var SuperThrow_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SuperThrow = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const superthrow_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../assets/dialog/superthrow.dialog.json */ "./assets/dialog/superthrow.dialog.json"));
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let SuperThrow = SuperThrow_1 = class SuperThrow extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 18, 22);
        this.floatAmount = 4;
        this.floatSpeed = 2;
        this.lookAtPlayer = false;
        this.conversation = new Conversation_1.Conversation(superthrow_dialog_json_1.default, this);
    }
    getInteractionText() {
        if (!this.met) {
            return "Touch";
        }
        else {
            return "Talk";
        }
    }
    draw(ctx) {
        const floatOffsetY = Math.sin(this.timeAlive * this.floatSpeed) * this.floatAmount;
        this.scene.renderer.addAseprite(SuperThrow_1.sprite, "idle", this.x, this.y - floatOffsetY, Renderer_1.RenderingLayer.ENTITIES, this.direction);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.speechBubble.update(this.x, this.y);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/superthrow.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], SuperThrow, "sprite", void 0);
SuperThrow = SuperThrow_1 = tslib_1.__decorate([
    Entity_1.entity("superthrow"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], SuperThrow);
exports.SuperThrow = SuperThrow;


/***/ }),

/***/ "./lib/entities/Tree.js":
/*!******************************!*\
  !*** ./lib/entities/Tree.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Tree_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tree = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const Face_1 = __webpack_require__(/*! ../Face */ "./lib/Face.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Seed_1 = __webpack_require__(/*! ./Seed */ "./lib/entities/Seed.js");
const Wood_1 = __webpack_require__(/*! ./Wood */ "./lib/entities/Wood.js");
let Tree = Tree_1 = class Tree extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 78, 140);
        this.face = new Face_1.Face(scene, this, Face_1.EyeType.TREE, 5, 94);
        this.seed = new Seed_1.Seed(scene, x, y);
        this.wood = new Wood_1.Wood(scene, x, y);
        this.startDialog();
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt()) {
            return false;
        }
        return (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() >= Quests_1.QuestATrigger.GOT_QUEST_FROM_FIRE
            && this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.GOT_QUEST_FROM_TREE) || (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() >= Quests_1.QuestATrigger.MADE_RAIN
            && this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).getHighestTriggerIndex() < Quests_1.QuestATrigger.TREE_DROPPED_WOOD);
    }
    draw(ctx) {
        this.scene.renderer.addAseprite(Tree_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.drawFace(ctx);
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        if (this.showDialoguePrompt()) {
            this.dialoguePrompt.update(dt, this.x + 4, this.y + 128);
        }
    }
    startDialog() {
        this.speechBubble.update(this.x, this.y);
    }
    spawnSeed() {
        if (!this.scene.gameObjects.includes(this.seed)) {
            this.scene.addGameObject(this.seed);
        }
        this.seed.resetState();
        this.seed.x = this.x;
        this.seed.y = this.y + this.height / 2;
        this.seed.setVelocity(5, 0);
        return this.seed;
    }
    spawnWood() {
        if (!this.scene.gameObjects.includes(this.wood)) {
            this.scene.addGameObject(this.wood);
        }
        this.wood.resetState();
        this.wood.x = this.x;
        this.wood.y = this.y + this.height / 2;
        this.wood.setVelocity(5, 0);
        return this.wood;
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/tree.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Tree, "sprite", void 0);
Tree = Tree_1 = tslib_1.__decorate([
    Entity_1.entity("tree"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Tree);
exports.Tree = Tree;


/***/ }),

/***/ "./lib/entities/Wall.js":
/*!******************************!*\
  !*** ./lib/entities/Wall.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Wall_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wall = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
var WallState;
(function (WallState) {
    WallState[WallState["SOLID"] = 0] = "SOLID";
    WallState[WallState["CRUMBLED"] = 1] = "CRUMBLED";
})(WallState || (WallState = {}));
let Wall = Wall_1 = class Wall extends Entity_1.Entity {
    constructor(scene, x, y, properties) {
        super(scene, x, y, 24, 72, false);
        this.state = WallState.SOLID;
        if (!properties.identifier) {
            throw new Error("Cannot create Wall entity with no identifier property");
        }
        this.identifier = properties.identifier;
    }
    draw() {
        const animationTag = this.state === WallState.SOLID ? "solid" : "crumbled";
        this.scene.renderer.addAseprite(Wall_1.sprite, animationTag, this.x, this.y, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
    }
    update() { }
    crumble() {
        this.state = WallState.CRUMBLED;
    }
    collidesWith(x, y) {
        if (this.state === WallState.SOLID
            && x >= this.x - this.width / 2
            && x <= this.x + this.width / 2
            && y >= this.y
            && y <= this.y + this.height) {
            return World_1.Environment.SOLID;
        }
        return World_1.Environment.AIR;
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/wall.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Wall, "sprite", void 0);
Wall = Wall_1 = tslib_1.__decorate([
    Entity_1.entity("wall"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number, Object])
], Wall);
exports.Wall = Wall;


/***/ }),

/***/ "./lib/entities/Window.js":
/*!********************************!*\
  !*** ./lib/entities/Window.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Window = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const window_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ./../../assets/dialog/window.dialog.json */ "./assets/dialog/window.dialog.json"));
let Window = class Window extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 16, 16);
        this.conversation = new Conversation_1.Conversation(window_dialog_json_1.default, this);
    }
    getInteractionText() {
        return "Check window";
    }
    draw(ctx) {
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        this.speechBubble.draw(ctx);
    }
    update() { }
};
Window = tslib_1.__decorate([
    Entity_1.entity("window"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Window);
exports.Window = Window;


/***/ }),

/***/ "./lib/entities/Wing.js":
/*!******************************!*\
  !*** ./lib/entities/Wing.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Wing_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wing = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ./NPC */ "./lib/entities/NPC.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
let Wing = Wing_1 = class Wing extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 24, 24);
        this.floatAmount = 4;
        this.floatSpeed = 2;
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt()) {
            return false;
        }
        return (this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).isTriggered(Quests_1.QuestATrigger.PLANTED_SEED)
            && !this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).isTriggered(Quests_1.QuestATrigger.LEARNED_RAIN_DANCE));
    }
    draw(ctx) {
        const floatOffsetY = Math.sin(this.timeAlive * this.floatSpeed) * this.floatAmount;
        this.scene.renderer.addAseprite(Wing_1.sprite, "idle", this.x, this.y - floatOffsetY, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds) {
            this.drawBounds();
        }
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.dialoguePrompt.update(dt, this.x, this.y + 16);
        this.speechBubble.update(this.x, this.y);
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/wing.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Wing, "sprite", void 0);
Wing = Wing_1 = tslib_1.__decorate([
    Entity_1.entity("wing"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Wing);
exports.Wing = Wing;


/***/ }),

/***/ "./lib/entities/Wood.js":
/*!******************************!*\
  !*** ./lib/entities/Wood.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Wood_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wood = exports.WoodState = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const GameScene_1 = __webpack_require__(/*! ../scenes/GameScene */ "./lib/scenes/GameScene.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const PhysicsEntity_1 = __webpack_require__(/*! ./PhysicsEntity */ "./lib/entities/PhysicsEntity.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
var WoodState;
(function (WoodState) {
    WoodState[WoodState["FREE"] = 0] = "FREE";
    WoodState[WoodState["SWIMMING"] = 1] = "SWIMMING";
})(WoodState = exports.WoodState || (exports.WoodState = {}));
let Wood = Wood_1 = class Wood extends PhysicsEntity_1.PhysicsEntity {
    constructor(scene, x, y) {
        super(scene, x, y, 26, 16);
        this.state = WoodState.FREE;
        const floatingPosition = this.scene.pointsOfInterest.find(poi => poi.name === "recover_floating_position");
        if (!floatingPosition) {
            throw new Error("Could not find \"recover_floating_position\" point of interest in game scene.");
        }
        this.floatingPosition = floatingPosition;
    }
    resetState() {
        this.setFloating(false);
        this.state = WoodState.FREE;
    }
    draw() {
        this.scene.renderer.addAseprite(Wood_1.sprite, "idle", this.x, this.y, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds)
            this.drawBounds();
    }
    isCarried() {
        return this.scene.player.isCarrying(this);
    }
    update(dt) {
        super.update(dt);
        if (this.state === WoodState.SWIMMING) {
            const diffX = this.floatingPosition.x - this.x;
            const moveX = Math.min(20, Math.abs(diffX)) * Math.sign(diffX);
            this.x += moveX * dt;
            this.setVelocityY(Math.abs(((util_1.now() % 2000) - 1000) / 1000) - 0.5);
        }
        if (this.state === WoodState.FREE || this.state === WoodState.SWIMMING) {
            const player = this.scene.player;
            if (!this.isCarried() && this.distanceTo(player) < 20) {
                player.carry(this);
            }
            if (!this.isCarried()
                && this.state !== WoodState.SWIMMING
                && this.scene.world.collidesWith(this.x, this.y - 5) === World_1.Environment.WATER) {
                this.state = WoodState.SWIMMING;
                this.setVelocity(0, 0);
                this.setFloating(true);
                this.y = this.floatingPosition.y + 8;
            }
        }
        if (!this.isCarried() && this.distanceTo(this.scene.fire) < 20) {
            this.scene.fire.feed(this);
            this.scene.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.THROWN_WOOD_INTO_FIRE);
            Wood_1.successSound.play();
        }
        if (!this.isCarried() && this.distanceTo(this.scene.flameboy) < 20) {
            this.scene.flameboy.feed(this);
            Wood_1.successSound.play();
        }
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/wood.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], Wood, "sprite", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/throwing/success.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], Wood, "successSound", void 0);
Wood = Wood_1 = tslib_1.__decorate([
    Entity_1.entity("wood"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], Wood);
exports.Wood = Wood;


/***/ }),

/***/ "./lib/geom/Direction.js":
/*!*******************************!*\
  !*** ./lib/geom/Direction.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Direction = void 0;
var Direction;
(function (Direction) {
    Direction[Direction["CENTER"] = 0] = "CENTER";
    Direction[Direction["LEFT"] = 1] = "LEFT";
    Direction[Direction["RIGHT"] = 2] = "RIGHT";
    Direction[Direction["TOP"] = 4] = "TOP";
    Direction[Direction["BOTTOM"] = 8] = "BOTTOM";
    Direction[Direction["TOP_LEFT"] = 5] = "TOP_LEFT";
    Direction[Direction["BOTTOM_LEFT"] = 9] = "BOTTOM_LEFT";
    Direction[Direction["TOP_RIGHT"] = 6] = "TOP_RIGHT";
    Direction[Direction["BOTTOM_RIGHT"] = 10] = "BOTTOM_RIGHT";
})(Direction = exports.Direction || (exports.Direction = {}));
(function (Direction) {
    function isLeft(direction) {
        return (direction & Direction.LEFT) !== 0;
    }
    Direction.isLeft = isLeft;
    function isRight(direction) {
        return (direction & Direction.RIGHT) !== 0;
    }
    Direction.isRight = isRight;
    function isTop(direction) {
        return (direction & Direction.TOP) !== 0;
    }
    Direction.isTop = isTop;
    function isBottom(direction) {
        return (direction & Direction.BOTTOM) !== 0;
    }
    Direction.isBottom = isBottom;
    function isHorizontal(direction) {
        return isLeft(direction) || isRight(direction);
    }
    Direction.isHorizontal = isHorizontal;
    function isVertical(direction) {
        return isLeft(direction) || isRight(direction);
    }
    Direction.isVertical = isVertical;
    function isEdge(direction) {
        return direction === Direction.LEFT
            || direction === Direction.RIGHT
            || direction === Direction.TOP
            || direction === Direction.BOTTOM;
    }
    Direction.isEdge = isEdge;
    function isCorner(direction) {
        return direction === Direction.TOP_LEFT
            || direction === Direction.TOP_RIGHT
            || direction === Direction.BOTTOM_LEFT
            || direction === Direction.BOTTOM_RIGHT;
    }
    Direction.isCorner = isCorner;
    function getX(direction) {
        return isLeft(direction) ? -1 : isRight(direction) ? 1 : 0;
    }
    Direction.getX = getX;
    function getY(direction) {
        return isTop(direction) ? -1 : isBottom(direction) ? 1 : 0;
    }
    Direction.getY = getY;
})(Direction = exports.Direction || (exports.Direction = {}));


/***/ }),

/***/ "./lib/graphics.js":
/*!*************************!*\
  !*** ./lib/graphics.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getImageData = exports.createContext2D = exports.getRenderingContext = exports.createCanvas = exports.loadImage = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
function loadImage(source) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const img = new Image();
        return new Promise((resolve, reject) => {
            img.onload = () => {
                resolve(img);
            };
            img.onerror = () => {
                reject(new Error(`Unable to load image '${source}'`));
            };
            img.src = source instanceof URL ? source.href : `assets/${source}`;
        });
    });
}
exports.loadImage = loadImage;
function createCanvas(width, height) {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    return canvas;
}
exports.createCanvas = createCanvas;
function getRenderingContext(canvas, contextId, options) {
    const ctx = canvas.getContext(contextId, options);
    if (ctx == null) {
        throw new Error(`Canvas doesn't support context with id '${contextId}'`);
    }
    return ctx;
}
exports.getRenderingContext = getRenderingContext;
function createContext2D(width, height) {
    return getRenderingContext(createCanvas(width, height), "2d");
}
exports.createContext2D = createContext2D;
function getImageData(image) {
    const ctx = createContext2D(image.width, image.height);
    ctx.drawImage(image, 0, 0, image.width, image.height);
    return ctx.getImageData(0, 0, image.width, image.height);
}
exports.getImageData = getImageData;


/***/ }),

/***/ "./lib/graphics/AffineTransform.js":
/*!*****************************************!*\
  !*** ./lib/graphics/AffineTransform.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AffineTransform = void 0;
/**
 * Affine transformation matrix. It behaves like a 3x3 matrix where the third row is always assumed to be 0 0 1.
 * This matrix is useful for 2D transformations and is compatible to the transformations done in a Canvas for example.
 */
class AffineTransform {
    constructor(m11 = 1, m12 = 0, m21 = 0, m22 = 1, dx = 0, dy = 0) {
        this.m11 = m11;
        this.m12 = m12;
        this.m21 = m21;
        this.m22 = m22;
        this.dx = dx;
        this.dy = dy;
    }
    /**
     * Creates a new affine transformation from the given DOM matrix object.
     *
     * @aram domMatrix - The DOM matrix object. Must be a 2D matrix.
     * @return The created affine transformation.
     */
    static fromDOMMatrix(domMatrix) {
        if (!domMatrix.is2D) {
            throw new Error("Can only create Matrix3 from 2D DOMMatrix");
        }
        return new AffineTransform(domMatrix.a, domMatrix.b, domMatrix.c, domMatrix.d, domMatrix.e, domMatrix.f);
    }
    /**
     * Returns a clone of this matrix.
     *
     * @return The cloned matrix.
     */
    clone() {
        return new AffineTransform(this.m11, this.m12, this.m21, this.m22, this.dx, this.dy);
    }
    /**
     * Converts this matrix into a DOM matrix.
     *
     * @return The created DOM matrix.
     */
    toDOMMatrix() {
        return new DOMMatrix([this.m11, this.m12, this.m21, this.m22, this.dx, this.dy]);
    }
    /**
     * Returns a human-readable string representation of the matrix.
     *
     * @return The human-readable string representation of the matrix.
     */
    toString() {
        return `[ ${this.m11}, ${this.m12}, ${this.m21}, ${this.m22}, ${this.dx}, ${this.dy} ]`;
    }
    /**
     * Sets the matrix component values.
     *
     * @param m11 - The horizontal scaling. A value of 1 results in no scaling.
     * @param m12 - The vertical skewing.
     * @param m21 - The horizontal skewing.
     * @param m22 - The vertical scaling. A value of 1 results in no scaling.
     * @param dx  - The horizontal translation (moving).
     * @param dy  - The vertical translation (moving).
     */
    setComponents(m11, m12, m21, m22, dx, dy) {
        this.m11 = m11;
        this.m12 = m12;
        this.m21 = m21;
        this.m22 = m22;
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    /**
     * Sets the matrix component values from another matrix.
     *
     * @param matrix - The matrix to copy the component values from.
     */
    setMatrix(matrix) {
        this.m11 = matrix.m11;
        this.m12 = matrix.m12;
        this.m21 = matrix.m21;
        this.m22 = matrix.m22;
        this.dx = matrix.dx;
        this.dy = matrix.dy;
        return this;
    }
    /**
     * Checks if matrix is identity.
     *
     * @return True if identity, false if not.
     */
    isIdentity() {
        return this.m11 === 1
            && this.m12 === 0
            && this.m21 === 0
            && this.m22 === 1
            && this.dx === 0
            && this.dy === 0;
    }
    /**
     * Resets this matrix to identity.
     */
    reset() {
        this.m11 = 1;
        this.m12 = 0;
        this.m21 = 0;
        this.m22 = 1;
        this.dx = 0;
        this.dy = 0;
        return this;
    }
    /**
     * Multiplies this matrix with the specified matrix (`this = this * other`).
     *
     * @param other - The other matrix to multiply this one with.
     */
    mul(other) {
        const a11 = this.m11, a12 = this.m12;
        const a21 = this.m21, a22 = this.m22;
        const a31 = this.dx, a32 = this.dy;
        const b11 = other.m11, b12 = other.m12;
        const b21 = other.m21, b22 = other.m22;
        const b31 = other.dx, b32 = other.dy;
        this.m11 = a11 * b11 + a21 * b12;
        this.m12 = a12 * b11 + a22 * b12;
        this.m21 = a11 * b21 + a21 * b22;
        this.m22 = a12 * b21 + a22 * b22;
        this.dx = a11 * b31 + a21 * b32 + a31;
        this.dy = a12 * b31 + a22 * b32 + a32;
        return this;
    }
    /**
     * Divides this matrix by the specified matrix (`this = this / other` which is the same as
     * `this = this * inverse(other)`).
     *
     * @param other - The other matrix to divide this one by.
     */
    div(other) {
        // a = this, b = other
        const a11 = this.m11, a12 = this.m12;
        const a21 = this.m21, a22 = this.m22;
        const a31 = this.dx, a32 = this.dy;
        const b11 = other.m11, b12 = other.m12;
        const b21 = other.m21, b22 = other.m22;
        const b31 = other.dx, b32 = other.dy;
        // d = determinant(b)
        const d = b11 * b22 - b21 * b12;
        // c = invert(b)
        const c11 = b22 / d;
        const c12 = -b12 / d;
        const c21 = -b21 / d;
        const c22 = b11 / d;
        const c31 = (b21 * b32 - b31 * b22) / d;
        const c32 = (b31 * b12 - b11 * b32) / d;
        // this = this * c
        this.m11 = a11 * c11 + a21 * c12;
        this.m12 = a12 * c11 + a22 * c12;
        this.m21 = a11 * c21 + a21 * c22;
        this.m22 = a12 * c21 + a22 * c22;
        this.dx = a11 * c31 + a21 * c32 + a31;
        this.dy = a12 * c31 + a22 * c32 + a32;
        return this;
    }
    /**
     * Returns the determinant of this matrix.
     *
     * @return The determinant of this matrix.
     */
    getDeterminant() {
        return this.m11 * this.m22 - this.m21 * this.m12;
    }
    /**
     * Inverts this matrix.
     */
    invert() {
        const m11 = this.m11, m12 = this.m12;
        const m21 = this.m21, m22 = this.m22;
        const m31 = this.dx, m32 = this.dy;
        const d = m11 * m22 - m21 * m12;
        this.m11 = m22 / d;
        this.m12 = -m12 / d;
        this.m21 = -m21 / d;
        this.m22 = m11 / d;
        this.dx = (m21 * m32 - m31 * m22) / d;
        this.dy = (m31 * m12 - m11 * m32) / d;
        return this;
    }
    /**
     * Translates this matrix by the specified values.
     *
     * @param dx - The X translation.
     * @param dy - The Y translation.
     */
    translate(dx, dy) {
        this.dx += dx * this.m11 + dy * this.m21;
        this.dy += dx * this.m12 + dy * this.m22;
        return this;
    }
    /**
     * Translates this matrix by the specified X delta.
     *
     * @param d - The X translation delta.
     */
    translateX(d) {
        this.dx += d * this.m11;
        this.dy += d * this.m12;
        return this;
    }
    /**
     * Returns the X translation of the matrix.
     *
     * @return The X translation.
     */
    getTranslationX() {
        return this.dx;
    }
    /**
     * Translates this matrix by the specified Y delta.
     *
     * @param d - The Y translation delta.
     */
    translateY(d) {
        this.dx += d * this.m21;
        this.dy += d * this.m22;
        return this;
    }
    /**
     * Returns the Y translation of the matrix.
     *
     * @return The Y translation.
     */
    getTranslationY() {
        return this.dy;
    }
    /**
     * Sets matrix to a translation matrix.
     *
     * @param dx - The X translation.
     * @param dy - The Y translation.
     */
    setTranslation(dx, dy) {
        this.m11 = 1;
        this.m12 = 0;
        this.m21 = 0;
        this.m22 = 1;
        this.dx = dx;
        this.dy = dy;
        return this;
    }
    /**
     * Creates matrix initialized to a translation matrix.
     *
     * @param dx - The X translation.
     * @param dy - The Y translation.
     */
    static createTranslation(dx, dy) {
        return new AffineTransform().setTranslation(dx, dy);
    }
    /**
     * Scales this matrix by the specified factor.
     *
     * @param sx - The X scale factor.
     * @param sy - The Y scale factor. Defaults to X scale factor.
     */
    scale(sx, sy = sx) {
        this.m11 *= sx;
        this.m12 *= sx;
        this.m21 *= sy;
        this.m22 *= sy;
        return this;
    }
    /**
     * Sets matrix to a scale matrix.
     *
     * @param sx - The X scale factor.
     * @param sy - The Y scale factor. Defaults to X scale factor.
     */
    setScale(sx, sy = sx) {
        this.m11 = sx;
        this.m12 = 0;
        this.m21 = 0;
        this.m22 = sy;
        this.dx = 0;
        this.dy = 0;
        return this;
    }
    /**
     * Scales this matrix by the specified factor along the X axis.
     *
     * @param s - The scale factor.
     */
    scaleX(s) {
        this.m11 *= s;
        this.m12 *= s;
        return this;
    }
    /**
     * Returns the X scale factor of the matrix.
     *
     * @return The X scale factor of the matrix.
     */
    getScaleX() {
        return Math.hypot(this.m11, this.m21);
    }
    /**
     * Scales this matrix by the specified factor along the Y axis.
     *
     * @param s - The scale factor.
     */
    scaleY(s) {
        this.m21 *= s;
        this.m22 *= s;
        return this;
    }
    /**
     * Returns the Y scale factor of the matrix.
     *
     * @return The Y scale factor of the matrix.
     */
    getScaleY() {
        return Math.hypot(this.m12, this.m22);
    }
    /**
     * Creates matrix initialized to a scale matrix.
     *
     * @param sx - The X scale factor.
     * @param sy - The Y scale factor. Defaults to X scale factor.
     */
    static createScale(sx, sy) {
        return new AffineTransform().setScale(sx, sy);
    }
    /**
     * Rotates this matrix by the given angle.
     *
     * @param angle - The rotation angle in RAD.
     */
    rotate(angle) {
        const m11 = this.m11, m12 = this.m12;
        const m21 = this.m21, m22 = this.m22;
        const s = Math.sin(angle), c = Math.cos(angle);
        this.m11 = c * m11 + s * m21;
        this.m12 = c * m12 + s * m22;
        this.m21 = c * m21 - s * m11;
        this.m22 = c * m22 - s * m12;
        return this;
    }
    /**
     * Returns the rotation of this matrix in radians.
     *
     * @return The rotation angle in radians.
     */
    getRotation() {
        const m11 = this.m11, m12 = this.m12;
        const m21 = this.m21, m22 = this.m22;
        if (m11 !== 0 || m21 !== 0) {
            const acos = Math.acos(m11 / Math.hypot(m11, m21));
            return m21 > 0 ? -acos : acos;
        }
        else if (m12 !== 0 || m22 !== 0) {
            const acos = Math.acos(m12 / Math.hypot(m12, m22));
            return Math.PI / 2 + (m22 > 0 ? -acos : acos);
        }
        else {
            return 0;
        }
    }
    /**
     * Sets matrix to a rotation matrix.
     *
     * @param angle - The rotation angle in RAD.
     */
    setRotation(angle) {
        const s = Math.sin(angle), c = Math.cos(angle);
        this.m11 = c;
        this.m12 = s;
        this.m21 = -s;
        this.m22 = c;
        this.dx = 0;
        this.dy = 0;
        return this;
    }
    /**
     * Create new matrix initialized to a rotation matrix.
     *
     * @param angle - The rotation angle in RAD.
     */
    static createRotation(angle) {
        return new AffineTransform().setRotation(angle);
    }
    /**
     * Transforms the given 2D canvas rendering context.
     *
     * @param ctx - The 2D canvas rendering context to transform.
     */
    transformCanvas(ctx) {
        ctx.transform(this.m11, this.m12, this.m21, this.m22, this.dx, this.dy);
        return this;
    }
    /**
     * Sets the transformation of the given 2D canvas rendering context.
     *
     * @param ctx - The 2D canvas rendering context to set the transformation on.
     */
    setCanvasTransform(ctx) {
        ctx.setTransform(this.m11, this.m12, this.m21, this.m22, this.dx, this.dy);
        return this;
    }
}
exports.AffineTransform = AffineTransform;


/***/ }),

/***/ "./lib/graphics/Line2.js":
/*!*******************************!*\
  !*** ./lib/graphics/Line2.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Line2 = void 0;
const Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./lib/graphics/Vector2.js");
/**
 * A line connecting two vertices.
 */
class Line2 {
    /**
     * Creates a new line from vertex a to vertex b.
     *
     * @param start - The start of the line.
     * @param end   - The end of the line.
     */
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.normal = null;
        this.center = null;
    }
    /**
     * Returns the normal of the line. For a line in a clock-wise polygon this normal points to the outside of the
     * polygon.
     *
     * @return The line normal. Normalized to a unit vector.
     */
    getNormal() {
        var _a;
        return ((_a = this.normal) !== null && _a !== void 0 ? _a : (this.normal = new Vector2_1.Vector2())).setComponents(this.end.y - this.start.y, this.start.x - this.end.x).normalize();
    }
    /**
     * Returns the center of the line.
     *
     * @return The center of the line.
     */
    getCenter() {
        var _a;
        return ((_a = this.center) !== null && _a !== void 0 ? _a : (this.center = new Vector2_1.Vector2())).setComponents((this.start.x + this.end.x) / 2, (this.start.y + this.end.y) / 2);
    }
    /**
     * Draws the line to the given 2D canvas rendering context. This only applies the line geometry,
     * you have to stroke it yourself.
     *
     * @param ctx - The canvas rendering context.
     */
    draw(ctx) {
        const { start: a, end: b } = this;
        ctx.moveTo(a.x, a.x);
        ctx.lineTo(b.x, a.y);
        return this;
    }
    /**
     * Draws the line normal to the given 2D canvas rendering context. This only applies the line geometry,
     * you have to stroke it yourself.
     *
     * @param ctx - The canvas rendering context.
     * @param len - Optional custom normal line length.
     */
    drawNormal(ctx, len = 25) {
        const normal = this.getNormal();
        const center = this.getCenter();
        ctx.moveTo(center.x, center.y);
        ctx.lineTo(center.x + normal.x * len, center.y + normal.y * len);
        return this;
    }
}
exports.Line2 = Line2;


/***/ }),

/***/ "./lib/graphics/Polygon2.js":
/*!**********************************!*\
  !*** ./lib/graphics/Polygon2.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Polygon2 = void 0;
const Line2_1 = __webpack_require__(/*! ./Line2 */ "./lib/graphics/Line2.js");
const Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./lib/graphics/Vector2.js");
/**
 * A polygon with any number of vertices.
 */
class Polygon2 {
    /**
     * Creates a polygon with the given initial vertices.
     *
     * @param vertices - The polygon vertices.
     */
    constructor(...vertices) {
        var _a;
        this.edges = [];
        this.normals = [];
        this.vertices = vertices;
        for (let i = 0, max = vertices.length; i < max; ++i) {
            this.edges.push(new Line2_1.Line2(vertices[i], (_a = vertices[i + 1]) !== null && _a !== void 0 ? _a : vertices[0]));
        }
    }
    /**
     * Checks if polygon has at least one vertex.
     *
     * @return True if polygon has at least on vertex, false if not.
     */
    hasVertices() {
        return this.vertices.length > 0;
    }
    /**
     * Adds the given vertex at the given index. Polygon edges are automatically corrected.
     *
     * @param vertex - The vertex to add.
     * @param index  - Optional insertion index. If not specified then vertex is added at the end of the polygon.
     */
    addVertex(vertex, index = this.vertices.length) {
        const edge = new Line2_1.Line2(vertex, vertex);
        this.vertices.splice(index, 0, vertex);
        const previousEdge = this.edges[index - 1];
        this.edges.splice(index, 0, edge);
        if (previousEdge != null) {
            edge.end = previousEdge.end;
            previousEdge.end = vertex;
        }
        else {
            edge.end = this.vertices[0];
        }
        return this;
    }
    /**
     * Removes the vertex at the given index. Polygon edges are automatically corrected.
     *
     * @param index - The index of the vertex to remove.
     */
    removeVertex(index) {
        var _a, _b;
        const edges = this.edges;
        const edge = edges[index];
        if (edge != null) {
            const previousEdge = (_a = edges[index - 1]) !== null && _a !== void 0 ? _a : edges[edges.length - 1];
            const nextEdge = (_b = edges[index + 1]) !== null && _b !== void 0 ? _b : edges[0];
            if (previousEdge !== edge && nextEdge !== edge) {
                nextEdge.start = edge.end;
                previousEdge.end = edge.end;
            }
            this.vertices.splice(index, 1);
            this.edges.splice(index, 1);
        }
        return this;
    }
    /**
     * Removes all vertices from the polygon.
     */
    clear() {
        this.vertices.length = 0;
        this.edges.length = 0;
        this.normals.length = 0;
        return this;
    }
    /**
     * Returns the vertex normal for the vertex with the given index.
     *
     * @param index - The vertex index.
     * @return The vertex normal.
     */
    getVertexNormal(index) {
        var _a, _b, _c;
        const normal = (_b = (_a = this.normals[index]) === null || _a === void 0 ? void 0 : _a.reset()) !== null && _b !== void 0 ? _b : (this.normals[index] = new Vector2_1.Vector2());
        const edges = this.edges;
        const edge = edges[index];
        if (edge != null) {
            normal.add(edge.getNormal());
            const previousEdge = (_c = edges[index - 1]) !== null && _c !== void 0 ? _c : edges[edges.length - 1];
            if (previousEdge != null) {
                normal.add(previousEdge.getNormal());
            }
        }
        return normal.normalize();
    }
    /**
     * Draws the polygon to the given 2D canvas rendering context. This only applies the closed geometry, you have to
     * fill/stroke/clip it yourself.
     *
     * @param ctx - The 2D canvas rendering context to render to.
     */
    draw(ctx) {
        const vertices = this.vertices;
        if (vertices.length > 0) {
            const first = vertices[0];
            ctx.moveTo(first.x, first.y);
            for (let i = 1, max = vertices.length; i < max; ++i) {
                const next = vertices[i];
                ctx.lineTo(next.x, next.y);
            }
        }
        ctx.closePath();
        return this;
    }
    /**
     * Draws the polygon edge normals to the given 2D canvas rendering context. This only applies the line geometries,
     * you have to stroke it yourself.
     *
     * @param ctx - The canvas rendering context.
     * @param len - Optional custom normal line length.
     */
    drawNormals(ctx, len) {
        for (const edge of this.edges) {
            edge.drawNormal(ctx, len);
        }
        return this;
    }
    /**
     * Draws the vertex normals to the given 2D canvas rendering context. This only applies the line geometries,
     * you have to stroke it yourself.
     *
     * @param ctx - The canvas rendering context.
     * @param len - Optional custom normal line length.
     */
    drawVertexNormals(ctx, len = 25) {
        this.vertices.forEach((vertex, index) => {
            ctx.moveTo(vertex.x, vertex.y);
            const normal = this.getVertexNormal(index);
            ctx.lineTo(vertex.x + normal.x * len, vertex.y + normal.y * len);
        });
        return this;
    }
}
exports.Polygon2 = Polygon2;


/***/ }),

/***/ "./lib/graphics/Vector2.js":
/*!*********************************!*\
  !*** ./lib/graphics/Vector2.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
/**
 * Vector with two floating point components.
 */
class Vector2 {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    /** @inheritDoc */
    toString() {
        return `[ ${this.x}, ${this.y} ]`;
    }
    /**
     * Sets the vector component values.
     *
     * @param x - The X component value to set.
     * @param y - The Y component value to set.
     */
    setComponents(x, y) {
        this.x = x;
        this.y = y;
        return this;
    }
    /**
     * Sets the vector component values by copying them from the given vector.
     *
     * @param vector - The vector to copy the X and Y component values from.
     */
    setVector(vector) {
        this.x = vector.x;
        this.y = vector.y;
        return this;
    }
    /** @inheritDoc */
    clone() {
        return new Vector2(this.x, this.y);
    }
    /** @inheritDoc */
    getSquareLength() {
        return Math.pow(this.x, 2) + Math.pow(this.y, 2);
    }
    /** @inheritDoc */
    getLength() {
        return Math.sqrt(this.getSquareLength());
    }
    /** @inheritDoc */
    getSquareDistance(v) {
        return Math.pow((this.x - v.x), 2) + Math.pow((this.y - v.y), 2);
    }
    /** @inheritDoc */
    getDistance(v) {
        return Math.sqrt(this.getSquareDistance(v));
    }
    /** @inheritDoc */
    dot(v) {
        return this.x * v.x + this.y * v.y;
    }
    /**
     * Negates this vector.
     */
    negate() {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    }
    /**
     * Resets all components of this vector to 0.
     */
    reset() {
        this.x = this.y = 0;
        return this;
    }
    /**
     * Translates the vector by the given deltas.
     *
     * @param x - The x delta.
     * @param y - The y delta.
     */
    translate(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
    /**
     * Adds the given vector to this vector.
     *
     * @param summand - The vector to add.
     */
    add(summand) {
        this.x += summand.x;
        this.y += summand.y;
        return this;
    }
    /**
     * Subtracts the given vector from this vector.
     *
     * @param subtrahend - The vector to subtract from this vector.
     */
    sub(subtrahend) {
        this.x -= subtrahend.x;
        this.y -= subtrahend.y;
        return this;
    }
    /**
     * Multiplies this vector with the specified matrix (In GLSL: `this = matrix * this`).
     *
     * @param matrix - The matrix to multiply this vector with.
     */
    mul(arg) {
        const x = this.x;
        const y = this.y;
        this.x = x * arg.m11 + y * arg.m21 + arg.dx;
        this.y = x * arg.m12 + y * arg.m22 + arg.dy;
        return this;
    }
    /**
     * Multiplies this vector with the inverse of the specified matrix (In GLSL: `this = matrix / this`).
     *
     * @param matrix - The matrix to divide this vector by.
     */
    div(arg) {
        const b11 = arg.m11, b12 = arg.m12;
        const b21 = arg.m21, b22 = arg.m22;
        const x = this.x;
        const y = this.y;
        const d = b11 * b22 - b12 * b21;
        const c11 = b22 / d;
        const c12 = -b12 / d;
        const c21 = -b21 / d;
        const c22 = b11 / d;
        const b31 = arg.dx, b32 = arg.dy;
        this.x = x * c11 + y * c21 + (b21 * b32 - b31 * b22) / d;
        this.y = x * c12 + y * c22 + (b31 * b12 - b11 * b32) / d;
        return this;
    }
    /**
     * Normalizes this vector to a length of 1.
     */
    normalize() {
        const len = this.getLength();
        this.x /= len;
        this.y /= len;
        return this;
    }
}
exports.Vector2 = Vector2;


/***/ }),

/***/ "./lib/input/ControllerEvent.js":
/*!**************************************!*\
  !*** ./lib/input/ControllerEvent.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GamepadControllerEvent = exports.ControllerEvent = void 0;
const ControllerFamily_1 = __webpack_require__(/*! ./ControllerFamily */ "./lib/input/ControllerFamily.js");
const ControllerIntent_1 = __webpack_require__(/*! ./ControllerIntent */ "./lib/input/ControllerIntent.js");
const controllerFamilySymbol = Symbol("controllerFamily");
const intentsSymbol = Symbol("intent");
const eventTypeSymbol = Symbol("eventType");
const repeatSymbol = Symbol("repeat");
class ControllerEvent extends Object {
    constructor(controllerFamily, eventType, intents, repeat = false) {
        super();
        this[controllerFamilySymbol] = controllerFamily;
        this[intentsSymbol] = intents.reduce((prev, curr) => prev | curr);
        this[eventTypeSymbol] = eventType;
        this[repeatSymbol] = repeat;
    }
    get controllerFamily() {
        return this[controllerFamilySymbol];
    }
    get eventType() {
        return this[eventTypeSymbol];
    }
    get repeat() {
        return this[repeatSymbol];
    }
    get isMenuLeft() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.MENU_LEFT) === ControllerIntent_1.ControllerIntent.MENU_LEFT;
    }
    get isMenuRight() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.MENU_RIGHT) === ControllerIntent_1.ControllerIntent.MENU_RIGHT;
    }
    get isMenuUp() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.MENU_UP) === ControllerIntent_1.ControllerIntent.MENU_UP;
    }
    get isMenuDown() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.MENU_DOWN) === ControllerIntent_1.ControllerIntent.MENU_DOWN;
    }
    get isPlayerMoveLeft() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_MOVE_LEFT) === ControllerIntent_1.ControllerIntent.PLAYER_MOVE_LEFT;
    }
    get isPlayerMoveRight() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_MOVE_RIGHT) === ControllerIntent_1.ControllerIntent.PLAYER_MOVE_RIGHT;
    }
    get isPlayerJump() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_JUMP) === ControllerIntent_1.ControllerIntent.PLAYER_JUMP;
    }
    get isPlayerDrop() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_DROP) === ControllerIntent_1.ControllerIntent.PLAYER_DROP;
    }
    get isPlayerEnterDoor() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_ENTER_DOOR) === ControllerIntent_1.ControllerIntent.PLAYER_ENTER_DOOR;
    }
    get isPlayerInteract() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_INTERACT) === ControllerIntent_1.ControllerIntent.PLAYER_INTERACT;
    }
    get isPlayerAction() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_ACTION) === ControllerIntent_1.ControllerIntent.PLAYER_ACTION;
    }
    get isPlayerRun() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_RUN) === ControllerIntent_1.ControllerIntent.PLAYER_RUN;
    }
    get isPlayerDance1() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_DANCE_1) === ControllerIntent_1.ControllerIntent.PLAYER_DANCE_1;
    }
    get isPlayerDance2() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PLAYER_DANCE_2) === ControllerIntent_1.ControllerIntent.PLAYER_DANCE_2;
    }
    get isPause() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.PAUSE) === ControllerIntent_1.ControllerIntent.PAUSE;
    }
    get isConfirm() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.CONFIRM) === ControllerIntent_1.ControllerIntent.CONFIRM;
    }
    get isAbort() {
        return (this[intentsSymbol] & ControllerIntent_1.ControllerIntent.ABORT) === ControllerIntent_1.ControllerIntent.ABORT;
    }
}
exports.ControllerEvent = ControllerEvent;
const gamepadModelSymbol = Symbol("gamepadModel");
class GamepadControllerEvent extends ControllerEvent {
    constructor(gamepadModel, eventType, intents, repeat = false) {
        super(ControllerFamily_1.ControllerFamily.GAMEPAD, eventType, intents, repeat);
        this[gamepadModelSymbol] = gamepadModel;
    }
    get gamepadModel() {
        return this[gamepadModelSymbol];
    }
}
exports.GamepadControllerEvent = GamepadControllerEvent;


/***/ }),

/***/ "./lib/input/ControllerEventType.js":
/*!******************************************!*\
  !*** ./lib/input/ControllerEventType.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerEventType = void 0;
var ControllerEventType;
(function (ControllerEventType) {
    ControllerEventType["UP"] = "up";
    ControllerEventType["DOWN"] = "down";
    ControllerEventType["PRESS"] = "press";
})(ControllerEventType = exports.ControllerEventType || (exports.ControllerEventType = {}));


/***/ }),

/***/ "./lib/input/ControllerFamily.js":
/*!***************************************!*\
  !*** ./lib/input/ControllerFamily.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerAnimationTags = exports.ControllerSpriteMap = exports.ControllerFamily = void 0;
/**
 * This enumeration is used to classify the various known input methods.
 */
var ControllerFamily;
(function (ControllerFamily) {
    ControllerFamily["KEYBOARD"] = "keyboard";
    ControllerFamily["GAMEPAD"] = "gamepad";
})(ControllerFamily = exports.ControllerFamily || (exports.ControllerFamily = {}));
/**
 * This enum consists of all supported button aseprite sheets
 */
var ControllerSpriteMap;
(function (ControllerSpriteMap) {
    ControllerSpriteMap["KEYBOARD"] = "keyboard";
    ControllerSpriteMap["XBOX"] = "xbox";
    ControllerSpriteMap["PLAYSTATION"] = "playstation";
})(ControllerSpriteMap = exports.ControllerSpriteMap || (exports.ControllerSpriteMap = {}));
/**
 * This enum consists of all available animation tags supported by the button aseprite sheets
 */
var ControllerAnimationTags;
(function (ControllerAnimationTags) {
    ControllerAnimationTags["CONFIRM"] = "confirm";
    ControllerAnimationTags["JUMP"] = "jump";
    ControllerAnimationTags["ACTION"] = "action";
    ControllerAnimationTags["INTERACT"] = "interact";
    ControllerAnimationTags["OPEN_DOOR"] = "up";
    ControllerAnimationTags["BACK"] = "back";
})(ControllerAnimationTags = exports.ControllerAnimationTags || (exports.ControllerAnimationTags = {}));


/***/ }),

/***/ "./lib/input/ControllerIntent.js":
/*!***************************************!*\
  !*** ./lib/input/ControllerIntent.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerIntent = void 0;
/**
 * Enumeration of the different intents that may be emitted by a single button,
 * whereas a button might either be a physical key on a keyboard, a mapped axis
 * on a gamepad or a touch screen event.
 *
 * Right now, these events are stored in a bit mask to be extra efficient, …
 * …maybe that's not really necessary and should be changed to improve
 * readability at some point…
 */
var ControllerIntent;
(function (ControllerIntent) {
    /** Used for unknown / unmapped buttons. */
    ControllerIntent[ControllerIntent["NONE"] = 0] = "NONE";
    /** Player movement: left */
    ControllerIntent[ControllerIntent["PLAYER_MOVE_LEFT"] = 1] = "PLAYER_MOVE_LEFT";
    /** Player movement: right */
    ControllerIntent[ControllerIntent["PLAYER_MOVE_RIGHT"] = 2] = "PLAYER_MOVE_RIGHT";
    /** Player movement: jump */
    ControllerIntent[ControllerIntent["PLAYER_JUMP"] = 4] = "PLAYER_JUMP";
    /** Player movement: DROP (or: duck/crouch) */
    ControllerIntent[ControllerIntent["PLAYER_DROP"] = 8] = "PLAYER_DROP";
    /** Talk to NPCs, read signs etc */
    ControllerIntent[ControllerIntent["PLAYER_INTERACT"] = 16] = "PLAYER_INTERACT";
    /** Action, throw stuff */
    ControllerIntent[ControllerIntent["PLAYER_ACTION"] = 32] = "PLAYER_ACTION";
    /** Dance move no. 1 */
    ControllerIntent[ControllerIntent["PLAYER_DANCE_1"] = 64] = "PLAYER_DANCE_1";
    /** Dance move no. 2 */
    ControllerIntent[ControllerIntent["PLAYER_DANCE_2"] = 128] = "PLAYER_DANCE_2";
    // Menu navigation
    ControllerIntent[ControllerIntent["MENU_LEFT"] = 256] = "MENU_LEFT";
    ControllerIntent[ControllerIntent["MENU_RIGHT"] = 512] = "MENU_RIGHT";
    ControllerIntent[ControllerIntent["MENU_UP"] = 1024] = "MENU_UP";
    ControllerIntent[ControllerIntent["MENU_DOWN"] = 2048] = "MENU_DOWN";
    /** The key usually known as "enter" or something alike. */
    ControllerIntent[ControllerIntent["CONFIRM"] = 4096] = "CONFIRM";
    /** Go through doors */
    ControllerIntent[ControllerIntent["PLAYER_ENTER_DOOR"] = 8192] = "PLAYER_ENTER_DOOR";
    /** Pause/unpause. */
    ControllerIntent[ControllerIntent["PAUSE"] = 16384] = "PAUSE";
    /** Back / abort / get-me-the-hell-out-of-here. */
    ControllerIntent[ControllerIntent["ABORT"] = 32768] = "ABORT";
    /** Run modifier */
    ControllerIntent[ControllerIntent["PLAYER_RUN"] = 65536] = "PLAYER_RUN";
    ControllerIntent[ControllerIntent["UNUSED_1"] = 131072] = "UNUSED_1";
    ControllerIntent[ControllerIntent["UNUSED_2"] = 262144] = "UNUSED_2";
    ControllerIntent[ControllerIntent["UNUSED_3"] = 524288] = "UNUSED_3";
})(ControllerIntent = exports.ControllerIntent || (exports.ControllerIntent = {}));


/***/ }),

/***/ "./lib/input/ControllerManager.js":
/*!****************************************!*\
  !*** ./lib/input/ControllerManager.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerManager = void 0;
const ControllerFamily_1 = __webpack_require__(/*! ./ControllerFamily */ "./lib/input/ControllerFamily.js");
const GamepadStyle_1 = __webpack_require__(/*! ./GamepadStyle */ "./lib/input/GamepadStyle.js");
const Signal_1 = __webpack_require__(/*! ../Signal */ "./lib/Signal.js");
/** Symbol to identify the current/active controller family */
const currentControllerFamilySymbol = Symbol("currentControllerFamily");
class ControllerManager {
    constructor(initialControllerFamily = ControllerFamily_1.ControllerFamily.KEYBOARD) {
        this.onButtonDown = new Signal_1.Signal();
        this.onButtonUp = new Signal_1.Signal();
        this.onButtonPress = new Signal_1.Signal();
        this.onControllerFamilyChange = new Signal_1.Signal();
        this.selectedGamepadStyle = GamepadStyle_1.GamepadStyle.XBOX;
        this.currentControllerFamily = initialControllerFamily;
        this.onButtonDown.connect(e => {
            if (this.currentControllerFamily !== e.controllerFamily) {
                this.currentControllerFamily = e.controllerFamily;
            }
        });
    }
    static getInstance() {
        return ControllerManager.INSTANCE;
    }
    set currentControllerFamily(controllerFamily) {
        if (controllerFamily !== this[currentControllerFamilySymbol]) {
            this[currentControllerFamilySymbol] = controllerFamily;
            this.onControllerFamilyChange.emit(controllerFamily);
        }
    }
    /**
     * Returns the current (a.k.a. most recently used!) controller family.
     * Can be used to determine which tooltips (gamepad buttons or keyboard indicators) to show.
     */
    get currentControllerFamily() {
        return this[currentControllerFamilySymbol];
    }
    toggleSelectedGamepadStyle() {
        this.selectedGamepadStyle = this.selectedGamepadStyle === GamepadStyle_1.GamepadStyle.XBOX ? GamepadStyle_1.GamepadStyle.PLAYSTATION : GamepadStyle_1.GamepadStyle.XBOX;
    }
    get controllerSprite() {
        if (this.currentControllerFamily === ControllerFamily_1.ControllerFamily.GAMEPAD) {
            switch (ControllerManager.getInstance().selectedGamepadStyle) {
                case GamepadStyle_1.GamepadStyle.PLAYSTATION:
                    return ControllerFamily_1.ControllerSpriteMap.PLAYSTATION;
                case GamepadStyle_1.GamepadStyle.XBOX:
                    return ControllerFamily_1.ControllerSpriteMap.XBOX;
            }
        }
        // Fallback to Keyboard
        return ControllerFamily_1.ControllerSpriteMap.KEYBOARD;
    }
}
exports.ControllerManager = ControllerManager;
ControllerManager.INSTANCE = new ControllerManager();


/***/ }),

/***/ "./lib/input/GamepadInput.js":
/*!***********************************!*\
  !*** ./lib/input/GamepadInput.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GamepadInput = void 0;
const ControllerManager_1 = __webpack_require__(/*! ./ControllerManager */ "./lib/input/ControllerManager.js");
const ControllerIntent_1 = __webpack_require__(/*! ./ControllerIntent */ "./lib/input/ControllerIntent.js");
const ControllerEventType_1 = __webpack_require__(/*! ./ControllerEventType */ "./lib/input/ControllerEventType.js");
const ControllerEvent_1 = __webpack_require__(/*! ./ControllerEvent */ "./lib/input/ControllerEvent.js");
const GamepadModel_1 = __webpack_require__(/*! ./GamepadModel */ "./lib/input/GamepadModel.js");
/**
 * Game Pad Buttons
 */
var GamePadButtonId;
(function (GamePadButtonId) {
    /** Button A / Cross*/
    GamePadButtonId[GamePadButtonId["BUTTON_1"] = 0] = "BUTTON_1";
    /** Button B / Circle*/
    GamePadButtonId[GamePadButtonId["BUTTON_2"] = 1] = "BUTTON_2";
    /** Button X / Square*/
    GamePadButtonId[GamePadButtonId["BUTTON_3"] = 2] = "BUTTON_3";
    /** Button Y / Triangle */
    GamePadButtonId[GamePadButtonId["BUTTON_4"] = 3] = "BUTTON_4";
    GamePadButtonId[GamePadButtonId["SHOULDER_TOP_LEFT"] = 4] = "SHOULDER_TOP_LEFT";
    GamePadButtonId[GamePadButtonId["SHOULDER_TOP_RIGHT"] = 5] = "SHOULDER_TOP_RIGHT";
    GamePadButtonId[GamePadButtonId["SHOULDER_BOTTOM_LEFT"] = 6] = "SHOULDER_BOTTOM_LEFT";
    GamePadButtonId[GamePadButtonId["SHOULDER_BOTTOM_RIGHT"] = 7] = "SHOULDER_BOTTOM_RIGHT";
    GamePadButtonId[GamePadButtonId["SELECT"] = 8] = "SELECT";
    GamePadButtonId[GamePadButtonId["START"] = 9] = "START";
    GamePadButtonId[GamePadButtonId["STICK_BUTTON_LEFT"] = 10] = "STICK_BUTTON_LEFT";
    GamePadButtonId[GamePadButtonId["STICK_BUTTON_RIGHT"] = 11] = "STICK_BUTTON_RIGHT";
    GamePadButtonId[GamePadButtonId["D_PAD_UP"] = 12] = "D_PAD_UP";
    GamePadButtonId[GamePadButtonId["D_PAD_DOWN"] = 13] = "D_PAD_DOWN";
    GamePadButtonId[GamePadButtonId["D_PAD_LEFT"] = 14] = "D_PAD_LEFT";
    GamePadButtonId[GamePadButtonId["D_PAD_RIGHT"] = 15] = "D_PAD_RIGHT";
    GamePadButtonId[GamePadButtonId["VENDOR"] = 16] = "VENDOR";
})(GamePadButtonId || (GamePadButtonId = {}));
var StickAxisId;
(function (StickAxisId) {
    /** Left stick X axis */
    StickAxisId[StickAxisId["LEFT_LEFT_RIGHT"] = 0] = "LEFT_LEFT_RIGHT";
    /** Left stick Y axis */
    StickAxisId[StickAxisId["LEFT_UP_DOWN"] = 1] = "LEFT_UP_DOWN";
    /** Right stick X axis */
    StickAxisId[StickAxisId["RIGHT_LEFT_RIGHT"] = 2] = "RIGHT_LEFT_RIGHT";
    /** Right stick Y axis */
    StickAxisId[StickAxisId["RIGHT_UP_DOWN"] = 3] = "RIGHT_UP_DOWN";
})(StickAxisId || (StickAxisId = {}));
const axisMapping = new Map();
axisMapping.set(StickAxisId.LEFT_LEFT_RIGHT, { button1: GamePadButtonId.D_PAD_LEFT, button2: GamePadButtonId.D_PAD_RIGHT });
axisMapping.set(StickAxisId.LEFT_UP_DOWN, { button1: GamePadButtonId.D_PAD_UP, button2: GamePadButtonId.D_PAD_DOWN });
const intentMappings = new Map();
intentMappings.set(GamePadButtonId.D_PAD_UP, [ControllerIntent_1.ControllerIntent.PLAYER_ENTER_DOOR, ControllerIntent_1.ControllerIntent.MENU_UP]);
intentMappings.set(GamePadButtonId.D_PAD_DOWN, [ControllerIntent_1.ControllerIntent.PLAYER_DROP, ControllerIntent_1.ControllerIntent.MENU_DOWN]);
intentMappings.set(GamePadButtonId.D_PAD_LEFT, [ControllerIntent_1.ControllerIntent.PLAYER_MOVE_LEFT, ControllerIntent_1.ControllerIntent.MENU_LEFT]);
intentMappings.set(GamePadButtonId.D_PAD_RIGHT, [ControllerIntent_1.ControllerIntent.PLAYER_MOVE_RIGHT, ControllerIntent_1.ControllerIntent.MENU_RIGHT]);
intentMappings.set(GamePadButtonId.BUTTON_1, [ControllerIntent_1.ControllerIntent.PLAYER_JUMP, ControllerIntent_1.ControllerIntent.CONFIRM]);
intentMappings.set(GamePadButtonId.BUTTON_2, [ControllerIntent_1.ControllerIntent.ABORT]);
intentMappings.set(GamePadButtonId.BUTTON_3, [ControllerIntent_1.ControllerIntent.PLAYER_RUN]);
intentMappings.set(GamePadButtonId.BUTTON_4, [ControllerIntent_1.ControllerIntent.PLAYER_INTERACT]);
intentMappings.set(GamePadButtonId.SHOULDER_TOP_LEFT, [ControllerIntent_1.ControllerIntent.PLAYER_DANCE_1, ControllerIntent_1.ControllerIntent.PLAYER_ACTION]);
intentMappings.set(GamePadButtonId.SHOULDER_TOP_RIGHT, [ControllerIntent_1.ControllerIntent.PLAYER_DANCE_2, ControllerIntent_1.ControllerIntent.PLAYER_ACTION]);
intentMappings.set(GamePadButtonId.START, [ControllerIntent_1.ControllerIntent.PAUSE]);
class GamepadButtonWrapper {
    constructor(index, wrapped, gamepad) {
        this.index = index;
        this.pressed = wrapped.pressed;
        this.gamepad = gamepad;
    }
    setPressed(pressed) {
        const controllerManager = ControllerManager_1.ControllerManager.getInstance();
        const oldPressed = this.pressed;
        this.pressed = pressed;
        if (oldPressed !== pressed) {
            if (pressed) {
                controllerManager.onButtonDown.emit(new ControllerEvent_1.GamepadControllerEvent(this.gamepad.gamepadModel, ControllerEventType_1.ControllerEventType.DOWN, intentMappings.get(this.index) || [ControllerIntent_1.ControllerIntent.NONE]));
            }
            else {
                controllerManager.onButtonUp.emit(new ControllerEvent_1.GamepadControllerEvent(this.gamepad.gamepadModel, ControllerEventType_1.ControllerEventType.UP, intentMappings.get(this.index) || [ControllerIntent_1.ControllerIntent.NONE]));
            }
        }
    }
}
class GamepadAxisWrapper {
    constructor(index, gamepad) {
        /**
         * Threshold to use to emulate virtual buttons.
         * Values between 0.1 (slight touches of the axis trigger button presses)
         * 0.9 (much force needed) can be used here.
         *
         * Avoid using 0.0 and 1.0 as they cannot be reached on some gamepads or
         * might lead to button flibber flubber...
         */
        this.threshold = 0.5;
        this.value = 0.0;
        this.index = index;
        this.gamepad = gamepad;
    }
    setValue(newValue) {
        var _a, _b, _c, _d;
        const controllerManager = ControllerManager_1.ControllerManager.getInstance();
        const oldValue = this.value;
        this.value = newValue;
        let emulatedButtonId = undefined;
        if (oldValue <= -this.threshold && newValue > -this.threshold) {
            // Virtual button 1 released
            emulatedButtonId = (_a = axisMapping.get(this.index)) === null || _a === void 0 ? void 0 : _a.button1;
            if (emulatedButtonId != null) {
                controllerManager.onButtonUp.emit(new ControllerEvent_1.GamepadControllerEvent(this.gamepad.gamepadModel, ControllerEventType_1.ControllerEventType.UP, intentMappings.get(emulatedButtonId) || [ControllerIntent_1.ControllerIntent.NONE]));
            }
        }
        else if (oldValue > -this.threshold && newValue <= -this.threshold) {
            // Virtual button 1 pressed
            emulatedButtonId = (_b = axisMapping.get(this.index)) === null || _b === void 0 ? void 0 : _b.button1;
            if (emulatedButtonId != null) {
                controllerManager.onButtonDown.emit(new ControllerEvent_1.GamepadControllerEvent(this.gamepad.gamepadModel, ControllerEventType_1.ControllerEventType.DOWN, intentMappings.get(emulatedButtonId) || [ControllerIntent_1.ControllerIntent.NONE]));
            }
        }
        if (oldValue > this.threshold && newValue <= this.threshold) {
            // Virtual button 2 released
            emulatedButtonId = (_c = axisMapping.get(this.index)) === null || _c === void 0 ? void 0 : _c.button2;
            if (emulatedButtonId != null) {
                controllerManager.onButtonUp.emit(new ControllerEvent_1.GamepadControllerEvent(this.gamepad.gamepadModel, ControllerEventType_1.ControllerEventType.UP, intentMappings.get(emulatedButtonId) || [ControllerIntent_1.ControllerIntent.NONE]));
            }
        }
        else if (oldValue < this.threshold && newValue >= this.threshold) {
            // Virtual button 2 pressed
            emulatedButtonId = (_d = axisMapping.get(this.index)) === null || _d === void 0 ? void 0 : _d.button2;
            if (emulatedButtonId != null) {
                controllerManager.onButtonDown.emit(new ControllerEvent_1.GamepadControllerEvent(this.gamepad.gamepadModel, ControllerEventType_1.ControllerEventType.DOWN, intentMappings.get(emulatedButtonId) || [ControllerIntent_1.ControllerIntent.NONE]));
            }
        }
    }
}
/**
 * Some obscure magic to make sure that gamepad buttons and axes are mapped onto unified controller
 * events.
 */
class GamepadWrapper {
    constructor(gamepad) {
        this.index = gamepad.index;
        this.id = gamepad.id;
        this.gamepadModel = GamepadModel_1.GamepadModel.fromString(this.id);
        this.buttons = new Array(gamepad.buttons.length);
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i] = new GamepadButtonWrapper(i, gamepad.buttons[i], this);
        }
        this.axes = new Array(gamepad.axes.length);
        for (let i = 0; i < this.axes.length; i++) {
            this.axes[i] = new GamepadAxisWrapper(i, this);
        }
    }
    update() {
        const gamepad = navigator.getGamepads()[this.index];
        if (gamepad != null) {
            this.buttons.forEach(button => button.setPressed(gamepad.buttons[button.index].pressed));
            this.axes.forEach(axis => axis.setValue(gamepad.axes[axis.index]));
        }
    }
    toString() {
        return `Gamepad (index: ${this.index}, id: ${this.id})`;
    }
}
class GamepadInput {
    constructor() {
        this.gamepads = new Map();
        window.addEventListener("gamepadconnected", (e) => {
            console.debug("Gamepad connected: ", e);
            const gamepad = e.gamepad;
            if (gamepad != null) {
                this.gamepads.set(gamepad.id, new GamepadWrapper(gamepad));
            }
        });
        window.addEventListener("gamepaddisconnected", (e) => {
            console.debug("Gamepad disconnected: ", e);
            const gamepad = e.gamepad;
            if (gamepad != null) {
                this.gamepads.delete(gamepad.id);
            }
        });
    }
    update() {
        this.gamepads.forEach(gamepad => gamepad.update());
    }
}
exports.GamepadInput = GamepadInput;


/***/ }),

/***/ "./lib/input/GamepadModel.js":
/*!***********************************!*\
  !*** ./lib/input/GamepadModel.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// See https://gamepad-tester.com/controllers for a list of some possible controller IDs.
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_GAMEPAD_MODEL = exports.GamepadModel = void 0;
const GamepadStyle_1 = __webpack_require__(/*! ./GamepadStyle */ "./lib/input/GamepadStyle.js");
const typemap = new Map();
/* spell-checker: disable */
typemap.set(/^.*?[Xx][Ii][Nn][Pp][Uu][Tt].*$/, GamepadStyle_1.GamepadStyle.XBOX);
// Vendor ID of Microsoft Corp.
typemap.set(/^.*045e.*$/, GamepadStyle_1.GamepadStyle.XBOX);
typemap.set(/^.*?[Ss]tadia\ [Cc]ontroller.*$/, GamepadStyle_1.GamepadStyle.STADIA);
// Anything with playstation in its name
typemap.set(/^.*?[Pp][Ll][Aa][Yy][Ss][Tt][Aa][Ii][Oo][Nn].*$/, GamepadStyle_1.GamepadStyle.XBOX);
// Vendor ID of Sony Inc.
typemap.set(/^.*054c.*$/, GamepadStyle_1.GamepadStyle.PLAYSTATION);
/**
 * Regular expression to extract vendor and product identifier.
 */
const productAndVendorMatcher = /^.*?[Vv]endor:?\s*(?<vendorId>.{4}).*?[Pp]roduct:?\s*(?<productId>.{4}).*?$/;
/* spell-checker: enable */
class GamepadModel {
    constructor(style, vendorId, productId) {
        this.style = style;
    }
    /**
     * Parses a gamepad identifier string and returns an object that encapsulates
     * @param str
     *   Gamepad identifier string as reported by the Gamepad API.
     */
    static fromString(str) {
        var _a, _b;
        for (const [key, value] of typemap) {
            if (key.exec(str)) {
                const productAndVendorMatch = productAndVendorMatcher.exec(str);
                let vendorId;
                let productId;
                if (productAndVendorMatch !== null) {
                    vendorId = (_a = productAndVendorMatch.groups) === null || _a === void 0 ? void 0 : _a.vendorId;
                    productId = (_b = productAndVendorMatch.groups) === null || _b === void 0 ? void 0 : _b.productId;
                }
                return new GamepadModel(value, parseInt(vendorId || "-1", 16), parseInt(productId || "-1"));
            }
        }
        // Nothing matches? Well,... that's bad luck...
        return exports.DEFAULT_GAMEPAD_MODEL;
    }
}
exports.GamepadModel = GamepadModel;
exports.DEFAULT_GAMEPAD_MODEL = new GamepadModel(GamepadStyle_1.GamepadStyle.UNKNOWN);


/***/ }),

/***/ "./lib/input/GamepadStyle.js":
/*!***********************************!*\
  !*** ./lib/input/GamepadStyle.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GamepadStyle = void 0;
/**
 * Enumeration of the different gamepad styles.
 *
 * Mainly used to adjust button mappings to offer the best possible *expected* gaming
 * experience and to make sure that graphics are displayed in-game that match the
 * controller being used.
 */
var GamepadStyle;
(function (GamepadStyle) {
    /** Default gamepad type if nothing else matches. */
    GamepadStyle["UNKNOWN"] = "unknown";
    GamepadStyle["XBOX"] = "xbox";
    GamepadStyle["PLAYSTATION"] = "playstation";
    GamepadStyle["STADIA"] = "stadia";
})(GamepadStyle = exports.GamepadStyle || (exports.GamepadStyle = {}));


/***/ }),

/***/ "./lib/input/Keyboard.js":
/*!*******************************!*\
  !*** ./lib/input/Keyboard.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Keyboard = void 0;
const ControllerEvent_1 = __webpack_require__(/*! ./ControllerEvent */ "./lib/input/ControllerEvent.js");
const ControllerEventType_1 = __webpack_require__(/*! ./ControllerEventType */ "./lib/input/ControllerEventType.js");
const ControllerFamily_1 = __webpack_require__(/*! ./ControllerFamily */ "./lib/input/ControllerFamily.js");
const ControllerIntent_1 = __webpack_require__(/*! ./ControllerIntent */ "./lib/input/ControllerIntent.js");
const ControllerManager_1 = __webpack_require__(/*! ./ControllerManager */ "./lib/input/ControllerManager.js");
const Signal_1 = __webpack_require__(/*! ../Signal */ "./lib/Signal.js");
const preventDefaultKeyCodes = [
    "ArrowUp", "ArrowDown", "ArrowRight", "ArrowLeft", "Space"
];
const keyToIntentMappings = new Map();
keyToIntentMappings.set("Space", [ControllerIntent_1.ControllerIntent.PLAYER_JUMP]);
keyToIntentMappings.set("KeyW", [ControllerIntent_1.ControllerIntent.PLAYER_ENTER_DOOR, ControllerIntent_1.ControllerIntent.MENU_UP]);
keyToIntentMappings.set("KeyA", [ControllerIntent_1.ControllerIntent.PLAYER_MOVE_LEFT, ControllerIntent_1.ControllerIntent.MENU_LEFT]);
keyToIntentMappings.set("KeyS", [ControllerIntent_1.ControllerIntent.PLAYER_DROP, ControllerIntent_1.ControllerIntent.MENU_DOWN]);
keyToIntentMappings.set("KeyD", [ControllerIntent_1.ControllerIntent.PLAYER_MOVE_RIGHT, ControllerIntent_1.ControllerIntent.MENU_RIGHT]);
keyToIntentMappings.set("ArrowUp", [ControllerIntent_1.ControllerIntent.PLAYER_ENTER_DOOR, ControllerIntent_1.ControllerIntent.MENU_UP]);
keyToIntentMappings.set("ArrowDown", [ControllerIntent_1.ControllerIntent.PLAYER_DROP, ControllerIntent_1.ControllerIntent.MENU_DOWN]);
keyToIntentMappings.set("ArrowLeft", [ControllerIntent_1.ControllerIntent.PLAYER_MOVE_LEFT, ControllerIntent_1.ControllerIntent.MENU_LEFT]);
keyToIntentMappings.set("ArrowRight", [ControllerIntent_1.ControllerIntent.PLAYER_MOVE_RIGHT, ControllerIntent_1.ControllerIntent.MENU_RIGHT]);
keyToIntentMappings.set("Enter", [ControllerIntent_1.ControllerIntent.PLAYER_INTERACT, ControllerIntent_1.ControllerIntent.CONFIRM]);
keyToIntentMappings.set("NumpadEnter", [ControllerIntent_1.ControllerIntent.PLAYER_INTERACT, ControllerIntent_1.ControllerIntent.CONFIRM]);
keyToIntentMappings.set("Escape", [ControllerIntent_1.ControllerIntent.ABORT, ControllerIntent_1.ControllerIntent.PAUSE]);
keyToIntentMappings.set("ShiftLeft", [ControllerIntent_1.ControllerIntent.PLAYER_RUN]);
keyToIntentMappings.set("ShiftRight", [ControllerIntent_1.ControllerIntent.PLAYER_RUN]);
keyToIntentMappings.set("KeyE", [ControllerIntent_1.ControllerIntent.PLAYER_INTERACT, ControllerIntent_1.ControllerIntent.CONFIRM]);
keyToIntentMappings.set("KeyF", [ControllerIntent_1.ControllerIntent.PLAYER_ACTION]);
keyToIntentMappings.set("Digit1", [ControllerIntent_1.ControllerIntent.PLAYER_DANCE_1]);
keyToIntentMappings.set("Digit2", [ControllerIntent_1.ControllerIntent.PLAYER_DANCE_2]);
keyToIntentMappings.set("Numpad1", [ControllerIntent_1.ControllerIntent.PLAYER_DANCE_1]);
keyToIntentMappings.set("Numpad2", [ControllerIntent_1.ControllerIntent.PLAYER_DANCE_2]);
class Keyboard {
    constructor() {
        this.onKeyDown = new Signal_1.Signal();
        this.onKeyUp = new Signal_1.Signal();
        this.onKeyPress = new Signal_1.Signal();
        this.pressed = new Set();
        this.controllerManager = ControllerManager_1.ControllerManager.getInstance();
        document.addEventListener("keypress", event => this.handleKeyPress(event));
        document.addEventListener("keydown", event => this.handleKeyDown(event));
        document.addEventListener("keyup", event => this.handleKeyUp(event));
    }
    handleKeyPress(event) {
        this.onKeyPress.emit(event);
        // Quick workaround to make sure, that modifier keys never trigger a game-related
        // controller event. Especially necessary to make other non-game related actions
        // possible. (Shift is used as a modifier key to enable running and is therefore
        // excluded from the list below)
        if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
        }
        this.controllerManager.onButtonPress.emit(new ControllerEvent_1.ControllerEvent(ControllerFamily_1.ControllerFamily.KEYBOARD, ControllerEventType_1.ControllerEventType.PRESS, keyToIntentMappings.get(event.code) || [ControllerIntent_1.ControllerIntent.NONE], event.repeat));
    }
    handleKeyDown(event) {
        if (preventDefaultKeyCodes.includes(event.code)) {
            event.preventDefault();
        }
        if (!event.repeat) {
            this.pressed.add(event.key);
        }
        this.onKeyDown.emit(event);
        if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
        }
        this.controllerManager.onButtonDown.emit(new ControllerEvent_1.ControllerEvent(ControllerFamily_1.ControllerFamily.KEYBOARD, ControllerEventType_1.ControllerEventType.DOWN, keyToIntentMappings.get(event.code) || [ControllerIntent_1.ControllerIntent.NONE], event.repeat));
    }
    handleKeyUp(event) {
        if (!event.repeat) {
            this.pressed.delete(event.key);
        }
        this.onKeyUp.emit(event);
        if (event.altKey || event.ctrlKey || event.metaKey) {
            return;
        }
        this.controllerManager.onButtonUp.emit(new ControllerEvent_1.ControllerEvent(ControllerFamily_1.ControllerFamily.KEYBOARD, ControllerEventType_1.ControllerEventType.UP, keyToIntentMappings.get(event.code) || [ControllerIntent_1.ControllerIntent.NONE], event.repeat));
    }
    isPressed(key) {
        return this.pressed.has(key);
    }
}
exports.Keyboard = Keyboard;


/***/ }),

/***/ "./lib/scene/AsepriteNode.js":
/*!***********************************!*\
  !*** ./lib/scene/AsepriteNode.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AsepriteNode = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const SceneNode_1 = __webpack_require__(/*! ./SceneNode */ "./lib/scene/SceneNode.js");
/**
 * Scene node for displaying an [[Aseprite]].
 *
 * @param T - Optional owner game class.
 */
class AsepriteNode extends SceneNode_1.SceneNode {
    /**
     * Creates a new scene node displaying the given Aseprite.
     */
    constructor(_a) {
        var _b;
        var { aseprite } = _a, args = tslib_1.__rest(_a, ["aseprite"]);
        super(Object.assign({ width: aseprite.width, height: aseprite.height }, args));
        /** The current time index of the animation. */
        this.time = 0;
        this.aseprite = aseprite;
        this.tag = (_b = args.tag) !== null && _b !== void 0 ? _b : null;
    }
    /**
     * Returns the displayed Aseprite.
     *
     * @return The displayed Aseprite.
     */
    getAseprite() {
        return this.aseprite;
    }
    /**
     * Sets the Aseprite.
     *
     * @param aseprite - The Aseprite to draw.
     */
    setAseprite(aseprite) {
        if (aseprite !== this.aseprite) {
            this.aseprite = aseprite;
            this.resizeTo(aseprite.width, aseprite.height);
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the current animation tag. Null if whole animation is displayed.
     *
     * @return The current animation tag or null for whole animation.
     */
    getTag() {
        return this.tag;
    }
    /**
     * Sets the animation tag. Null to display whole animation.
     *
     * @param tag - The animation tag to set. Null to unset.
     */
    setTag(tag) {
        if (tag !== this.tag) {
            this.tag = tag;
            this.invalidate();
        }
        return this;
    }
    /** @inheritDoc */
    update(dt) {
        this.time += dt;
    }
    /** @inheritDoc */
    draw(ctx) {
        if (this.tag != null) {
            this.aseprite.drawTag(ctx, this.tag, 0, 0, this.time * 1000);
        }
        else {
            this.aseprite.draw(ctx, 0, 0, this.time * 1000);
        }
    }
}
exports.AsepriteNode = AsepriteNode;


/***/ }),

/***/ "./lib/scene/ControlTooltipNode.js":
/*!*****************************************!*\
  !*** ./lib/scene/ControlTooltipNode.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlTooltipNode = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const SceneNode_1 = __webpack_require__(/*! ./SceneNode */ "./lib/scene/SceneNode.js");
const ControllerFamily_1 = __webpack_require__(/*! ../input/ControllerFamily */ "./lib/input/ControllerFamily.js");
const ControllerManager_1 = __webpack_require__(/*! ../input/ControllerManager */ "./lib/input/ControllerManager.js");
const AsepriteNode_1 = __webpack_require__(/*! ./AsepriteNode */ "./lib/scene/AsepriteNode.js");
const TextNode_1 = __webpack_require__(/*! ./TextNode */ "./lib/scene/TextNode.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
class ControlTooltipNode extends SceneNode_1.SceneNode {
    constructor(_a) {
        var { control: key, label } = _a, args = tslib_1.__rest(_a, ["control", "label"]);
        super(Object.assign({ childAnchor: Direction_1.Direction.LEFT }, args));
        this.controllerSpriteMapRecords = {
            [ControllerFamily_1.ControllerSpriteMap.KEYBOARD]: ControlTooltipNode.buttons[0],
            [ControllerFamily_1.ControllerSpriteMap.XBOX]: ControlTooltipNode.buttons[1],
            [ControllerFamily_1.ControllerSpriteMap.PLAYSTATION]: ControlTooltipNode.buttons[2]
        };
        this.controllerManager = ControllerManager_1.ControllerManager.getInstance();
        this.gap = 6;
        this.icon = new AsepriteNode_1.AsepriteNode({
            aseprite: this.controllerSpriteMapRecords[this.controllerManager.controllerSprite],
            tag: key,
            anchor: Direction_1.Direction.LEFT
        }).appendTo(this);
        this.label = new TextNode_1.TextNode({
            font: ControlTooltipNode.font,
            anchor: Direction_1.Direction.LEFT,
            text: label,
            color: "white",
            outlineColor: "black",
            y: -1
        }).appendTo(this);
        this.updateLayout();
    }
    /** @inheritDoc */
    activate() {
        this.controllerManager.onControllerFamilyChange.connect(this.updateControllerFamily, this);
    }
    /** @inheritDoc */
    deactivate() {
        this.controllerManager.onControllerFamilyChange.disconnect(this.updateControllerFamily, this);
    }
    updateControllerFamily() {
        this.icon.setAseprite(this.controllerSpriteMapRecords[this.controllerManager.controllerSprite]);
        this.updateLayout();
    }
    updateLayout() {
        const iconWidth = this.icon.getWidth();
        this.label.setX(iconWidth + this.gap);
        this.resizeTo(iconWidth + this.gap + this.label.getWidth(), Math.max(this.icon.getHeight(), this.label.getHeight()));
    }
}
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], ControlTooltipNode, "font", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "sprites/buttons_keyboard.aseprite.json",
        "sprites/buttons_xbox.aseprite.json",
        "sprites/buttons_playstation.aseprite.json"
    ]),
    tslib_1.__metadata("design:type", Array)
], ControlTooltipNode, "buttons", void 0);
exports.ControlTooltipNode = ControlTooltipNode;


/***/ }),

/***/ "./lib/scene/ImageNode.js":
/*!********************************!*\
  !*** ./lib/scene/ImageNode.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ImageNode = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const SceneNode_1 = __webpack_require__(/*! ./SceneNode */ "./lib/scene/SceneNode.js");
/**
 * Scene node for displaying an HTMLImageElement.
 *
 * @param T - Optional owner game class.
 */
class ImageNode extends SceneNode_1.SceneNode {
    /**
     * Creates a new scene node displaying the given image.
     */
    constructor(_a) {
        var { image } = _a, args = tslib_1.__rest(_a, ["image"]);
        super(Object.assign({ width: image.width, height: image.height }, args));
        this.image = image;
    }
    /**
     * Returns the displayed image.
     *
     * @return The displayed image.
     */
    getImage() {
        return this.image;
    }
    /** @inheritDoc */
    draw(ctx) {
        ctx.drawImage(this.image, 0, 0);
    }
}
exports.ImageNode = ImageNode;


/***/ }),

/***/ "./lib/scene/ProgressBarNode.js":
/*!**************************************!*\
  !*** ./lib/scene/ProgressBarNode.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBarNode = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const SceneNode_1 = __webpack_require__(/*! ./SceneNode */ "./lib/scene/SceneNode.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const DEFAULT_BACKGROUND_STYLE = "#111";
const DEFAULT_BORDER_STYLE = "#222";
const DEFAULT_PROGRESS_STYLE = "#888";
const DEFAULT_WIDTH = 200;
const DEFAULT_HEIGHT = 8;
/**
 * Scene node for displaying a progress bar.
 *
 * @param T - Optional owner game class.
 */
class ProgressBarNode extends SceneNode_1.SceneNode {
    /**
     * Creates a new scene node displaying the given image.
     */
    constructor(_a = {}) {
        var { backgroundStyle = DEFAULT_BACKGROUND_STYLE, borderStyle = DEFAULT_BORDER_STYLE, progressStyle = DEFAULT_PROGRESS_STYLE } = _a, args = tslib_1.__rest(_a, ["backgroundStyle", "borderStyle", "progressStyle"]);
        super(Object.assign({ width: DEFAULT_WIDTH, height: DEFAULT_HEIGHT }, args));
        this.progress = 0;
        this.backgroundStyle = backgroundStyle;
        this.borderStyle = borderStyle;
        this.progressStyle = progressStyle;
    }
    setProgress(progress) {
        progress = util_1.clamp(progress, 0, 1);
        if (progress !== this.progress) {
            this.progress = progress;
            this.invalidate();
        }
        return this;
    }
    getProgress() {
        return this.progress;
    }
    /** @inheritDoc */
    draw(ctx) {
        ctx.save();
        const width = this.getWidth();
        const height = this.getHeight();
        // Draw background
        ctx.fillStyle = this.backgroundStyle;
        ctx.fillRect(0, 0, width, height);
        // Draw progress bar
        ctx.fillStyle = this.progressStyle;
        ctx.fillRect(0, 0, width * this.progress, height);
        // Draw border
        ctx.save();
        ctx.strokeStyle = this.borderStyle;
        ctx.lineWidth = 2;
        ctx.rect(0, 0, width, height);
        ctx.clip();
        ctx.stroke();
        ctx.restore();
        ctx.restore();
    }
}
exports.ProgressBarNode = ProgressBarNode;


/***/ }),

/***/ "./lib/scene/RootNode.js":
/*!*******************************!*\
  !*** ./lib/scene/RootNode.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RootNode = void 0;
const SceneNode_1 = __webpack_require__(/*! ./SceneNode */ "./lib/scene/SceneNode.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
/**
 * The root node of a scene.
 *
 * @param T - Optional owner game class.
 */
class RootNode extends SceneNode_1.SceneNode {
    /**
     * Creates a new root scene node for the given scene. Functions for updating and drawing the root node (and its
     * child nodes) is exposed to the scene through the second parameter. Only the scene can use these exposed
     * functions, no one else can by accident.
     *
     * @param scene - The scene this root node is meant for.
     * @param expose - Callback for exposing the update/draw methods of the root node to the scene so the scene can
     *                 call it without making the methods public.
     */
    constructor(scene, expose) {
        super({ anchor: Direction_1.Direction.TOP_LEFT, childAnchor: Direction_1.Direction.TOP_LEFT });
        this.scene = scene;
        expose(this.updateAll.bind(this), this.drawAllWithBounds.bind(this));
    }
    /**
     * Draws this node and its child nodes recursively and then renders the node bounds when enabled.
     *
     * @param ctx    - The rendering context.
     * @param width  - The scene width.
     * @param height - The scene height.
     * @return Hints which suggests further actions after drawing.
     */
    drawAllWithBounds(ctx, layer, width, height) {
        const flags = this.drawAll(ctx, layer, width, height);
        if ((flags & SceneNode_1.PostDrawHints.DRAW_BOUNDS) !== 0) {
            this.drawBounds(ctx);
        }
        return flags;
    }
}
exports.RootNode = RootNode;


/***/ }),

/***/ "./lib/scene/SceneNode.js":
/*!********************************!*\
  !*** ./lib/scene/SceneNode.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneNode = exports.PostDrawHints = void 0;
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const SceneNodeAnimation_1 = __webpack_require__(/*! ./SceneNodeAnimation */ "./lib/scene/SceneNodeAnimation.js");
const AffineTransform_1 = __webpack_require__(/*! ../graphics/AffineTransform */ "./lib/graphics/AffineTransform.js");
const Polygon2_1 = __webpack_require__(/*! ../graphics/Polygon2 */ "./lib/graphics/Polygon2.js");
const Vector2_1 = __webpack_require__(/*! ../graphics/Vector2 */ "./lib/graphics/Vector2.js");
/**
 * Hints which are returned to the scene after drawing the scene graph. These hints can suggest further actions after
 * drawing like requesting continuous drawing because of running animations.
 */
var PostDrawHints;
(function (PostDrawHints) {
    /** As long as this hint is present the scene must be continuously redrawn to keep animations running. */
    PostDrawHints[PostDrawHints["CONTINUE_DRAWING"] = 1] = "CONTINUE_DRAWING";
    /**
     * When this flag is set then at least one node has the showBounds flag set to true. The root node already
     * handles this flag by drawing the bounds when this hint is present.
     */
    PostDrawHints[PostDrawHints["DRAW_BOUNDS"] = 2] = "DRAW_BOUNDS";
})(PostDrawHints = exports.PostDrawHints || (exports.PostDrawHints = {}));
/**
 * Base scene node. Is used as base class for more specialized scene nodes but can also be used standalone as parent
 * node for other nodes (similar to a DIV element in HTML for example).
 *
 * TODO Implement scene invalidation properly.
 */
class SceneNode {
    /**
     * Creates a new scene node with the given initial settings.
     */
    constructor({ id = null, x = 0, y = 0, width = 0, height = 0, anchor = Direction_1.Direction.CENTER, childAnchor = Direction_1.Direction.CENTER, opacity = 1, showBounds = false, layer = 0 } = {}) {
        /** The parent node. Null if none. */
        this.parent = null;
        /** The next sibling node. Null if none. */
        this.nextSibling = null;
        /** The previous sibling node. Null if none. */
        this.previousSibling = null;
        /** The first child node. Null if none. */
        this.firstChild = null;
        /** The last child node. Null if none. */
        this.lastChild = null;
        /** The scene this node is connected to. Null if none. */
        this.scene = null;
        /**
         * The bounds polygon. This is updated on demand and automatically invalidated when node size changes. Node
         * has to call [[invalidateBounds]] manually when something else influences the bounds.
         */
        this.boundsPolygon = new Polygon2_1.Polygon2();
        /**
         * The transformation matrix of this node. This transformation is applied to the node before moving the node to
         * its position (X/Y coordinates). So in simple cases this transformation is not needed at all and its up to you
         * if you want to use the coordinates and/or the transformation matrix.
         */
        this.transformation = new AffineTransform_1.AffineTransform();
        /**
         * The transformation matrix combining the nodes transformation with all the parent transformations. This is
         * calculated on-the-fly when a scene node is updated.
         */
        this.sceneTransformation = new AffineTransform_1.AffineTransform();
        /** Array with currently active animations. Animations are automatically removed from the array when finished.*/
        this.animations = [];
        this.id = id;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.opacity = opacity;
        this.anchor = anchor;
        this.childAnchor = childAnchor;
        this.showBounds = showBounds;
        this.layer = 1 << layer;
    }
    /**
     * Returns the node ID.
     *
     * @return The ID of the node or null if none.
     */
    getId() {
        return this.id;
    }
    /**
     * Sets (or removes) the node ID.
     *
     * @param id - The id to set or null to unset.
     */
    setId(id) {
        this.id = id;
        return this;
    }
    /**
     * Returns the X position of the node relative to the parent node.
     *
     * @return The X position.
     */
    getX() {
        return this.x;
    }
    /**
     * Sets the horizontal position relative to the parent node.
     *
     * @param x - The horizontal position to set.
     */
    setX(x) {
        if (x !== this.x) {
            this.x = x;
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the Y position of the node relative the parent node.
     *
     * @return The Y position.
     */
    getY() {
        return this.y;
    }
    /**
     * Sets the vertical position relative to the parent node.
     *
     * @param y - The vertical position to set.
     */
    setY(y) {
        if (y !== this.y) {
            this.y = y;
            this.invalidate();
        }
        return this;
    }
    /**
     * Moves the node by the given deltas.
     *
     * @param x - The horizontal delta to move the node by.
     * @param y - The vertical delta to move the node by.
     */
    moveBy(x, y) {
        if (x !== 0 || y !== 0) {
            this.x += x;
            this.y += y;
            this.invalidate();
        }
        return this;
    }
    /**
     * Moves the node to the given position relative to its parent node.
     *
     * @param x - The horizontal position to move to.
     * @param y - The vertical position to move to.
     */
    moveTo(x, y) {
        if (x !== this.x || y !== this.y) {
            this.x = x;
            this.y = y;
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the width of the node.
     *
     * @return The node width.
     */
    getWidth() {
        return this.width;
    }
    /**
     * Sets the width of the node.
     *
     * @param width - The width to set.
     */
    setWidth(width) {
        if (width !== this.width) {
            this.width = width;
            this.invalidate();
            this.invalidateBounds();
        }
        return this;
    }
    /**
     * Returns the width of the node.
     *
     * @return The node width.
     */
    getHeight() {
        return this.height;
    }
    /**
     * Sets the height of the node.
     *
     * @param height - The height to set.
     */
    setHeight(height) {
        if (height !== this.height) {
            this.height = height;
            this.invalidate();
            this.invalidateBounds();
        }
        return this;
    }
    /**
     * Resizes the node to the given width and height.
     *
     * @param width  - The width to set.
     * @param height - The height to set.
     */
    resizeTo(width, height) {
        if (width !== this.width || height !== this.height) {
            this.width = width;
            this.height = height;
            this.invalidate();
            this.invalidateBounds();
        }
        return this;
    }
    /**
     * Returns the current opacity of the node.
     *
     * @return The opacity. 0.0 means fully transparent, 1.0 means fully opaque.
     */
    getOpacity() {
        return this.opacity;
    }
    /**
     * Sets the nodes opacity.
     *
     * @pram opacity - The opacity to set. 0.0 means fully transparent, 1.0 means fully opaque. Can be larger than 1.0
     *                 to compensate transparency of its parent.
     */
    setOpacity(opacity) {
        opacity = Math.max(0, opacity);
        if (opacity !== this.opacity) {
            this.opacity = opacity;
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the effective node opacity which is the nodes opacity multiplied by the parents effective opacity.
     *
     * @return The effective node opacity clamped to valid range of 0.0 to 1.0.
     */
    getEffectiveOpacity() {
        var _a, _b;
        if (this.opacity === Infinity) {
            return 1;
        }
        return Math.max(0, Math.min(1, ((_b = (_a = this.parent) === null || _a === void 0 ? void 0 : _a.getEffectiveOpacity()) !== null && _b !== void 0 ? _b : 1) * this.opacity));
    }
    /**
     * Returns the node anchor which defines the meaning of the X/Y coordinates of the node. CENTER means the X/Y
     * coordinates define the center of the node. TOP_LEFT means the X/Y coordinates define the upper left corner of
     * the node.
     *
     * @return The node anchor.
     */
    getAnchor() {
        return this.anchor;
    }
    /**
     * Sets the node anchor which defines the meaning of the X/Y coordinates of the node. CENTER means the X/Y
     * coordinates define the center of the node. TOP_LEFT means the X/Y coordinates define the upper left corner of
     * the node.
     *
     * @param anchor - The node anchor to set.
     */
    setAnchor(anchor) {
        if (anchor !== this.anchor) {
            this.anchor = anchor;
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the child anchor which defines the origin of the local coordinate system to which the coordinates of
     * child nodes are relative to.
     *
     * @return The child anchor.
     */
    getChildAnchor() {
        return this.childAnchor;
    }
    /**
     * Sets the child anchor which defines the origin of the local coordinate system to which the coordinates of
     * child nodes are relative to.
     *
     * @param childAnchor - The child anchor to set.
     */
    setChildAnchor(childAnchor) {
        if (childAnchor !== this.childAnchor) {
            this.childAnchor = childAnchor;
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the custom transformation of this node which can be manipulated by the [[transform]] method. This
     * transformation is applied to the node before it is rendered at its intended position. Transformation and
     * node position can complement each other or you can only use one of them, that's up to you.
     *
     * @return The custom node transformation.
     */
    getTransformation() {
        return this.transformation;
    }
    /**
     * Modifies the custom transformation matrix of this node. Calls the given transformer function which can then
     * modify the given transformation matrix. After this the node is invalidated to recalculate bounds and redraw it.
     *
     * @param transformer - Function to call with transformation matrix as argument.
     */
    transform(transformer) {
        transformer(this.transformation);
        return this.invalidate();
    }
    /**
     * Returns the scene the node is currently attached to. Null if none.
     *
     * @return The current scene or null if none.
     */
    getScene() {
        return this.scene;
    }
    /**
     * Sets the scene this node and all its children belongs to. This is called internally when a node is added to
     * the scene.
     *
     * @param scene - The scene the node belongs to from now on. null to unset the current scene.
     */
    setScene(scene) {
        if (scene !== this.scene) {
            if (this.scene) {
                this.deactivate();
            }
            this.scene = scene;
            if (scene) {
                this.activate();
            }
            this.forEachChild(node => node.setScene(scene));
        }
    }
    /**
     * Called when node is added to scene. Can be overwritten to connect event handlers for example.
     */
    activate() { }
    /**
     * Called when node is removed from scene. Can be overwritten to disconnect event handlers for example.
     */
    deactivate() { }
    /**
     * Returns the parent node of this node or null if node is not attached to a parent or is the root node.
     *
     * @return The parent node or null if unattached or root element.
     */
    getParent() {
        return this.parent;
    }
    /**
     * Returns the next node at the same level.
     *
     * @return The next sibling or null if none.
     */
    getNextSibling() {
        return this.nextSibling;
    }
    /**
     * Returns the previous node at the same level.
     *
     * @return The previous sibling or null if none.
     */
    getPreviousSibling() {
        return this.previousSibling;
    }
    /**
     * Returns the first child node.
     *
     * @return The first child node or null if none.
     */
    getFirstChild() {
        return this.firstChild;
    }
    /**
     * Returns the last child node.
     *
     * @return The last child node or null if none.
     */
    getLastChild() {
        return this.lastChild;
    }
    /**
     * Checks if this node has child nodes.
     *
     * @return True if it child nodes are present, false if not.
     */
    hasChildNodes() {
        return this.firstChild != null;
    }
    /**
     * Appends the given child node so it becomes the last child of this node.
     *
     * @param node - The child node to append.
     */
    appendChild(node) {
        if (node === this) {
            throw new Error("Node can not be appended to itself");
        }
        // Remove from old parent if there is one
        const oldParent = node.parent;
        if (oldParent) {
            oldParent.removeChild(node);
        }
        // Append the child
        node.previousSibling = this.lastChild;
        const oldLastChild = this.lastChild;
        if (oldLastChild) {
            oldLastChild.nextSibling = node;
        }
        this.lastChild = node;
        if (!this.firstChild) {
            this.firstChild = node;
        }
        node.parent = this;
        node.setScene(this.scene);
        node.invalidate();
        this.invalidate();
        return this;
    }
    /**
     * Prepends the given child node so it becomes the first child of this node.
     *
     * @param node - The child node to prepend.
     */
    prependChild(node) {
        if (this.firstChild != null) {
            return this.insertBefore(node, this.firstChild);
        }
        else {
            return this.appendChild(node);
        }
    }
    /**
     * Removes the given child node
     *
     * @param child - The child node to remove.
     */
    removeChild(node) {
        if (node.parent !== this) {
            throw new Error("Node must be a child node");
        }
        // Remove node from linked list
        const next = node.nextSibling;
        const prev = node.previousSibling;
        if (next) {
            next.previousSibling = prev;
        }
        if (prev) {
            prev.nextSibling = next;
        }
        // Correct first/last reference
        if (node === this.firstChild) {
            this.firstChild = next;
        }
        if (node === this.lastChild) {
            this.lastChild = prev;
        }
        // Remove all references from node
        node.parent = null;
        node.nextSibling = null;
        node.previousSibling = null;
        node.setScene(null);
        node.invalidate();
        this.invalidate();
        return this;
    }
    /**
     * Removes this node from the scene. The node is then a detached node ready to be added to the scene (or some
     * other scene) again.
     */
    remove() {
        if (this.parent) {
            this.parent.removeChild(this);
        }
        return this;
    }
    /**
     * Removes all child nodes.
     */
    clear() {
        while (this.lastChild) {
            this.removeChild(this.lastChild);
        }
        return this;
    }
    /**
     * Inserts the given child node before the specified reference child node.
     *
     * @param newNode - The child node to insert.
     * @param refNode - The reference node. The child node is inserted before this one.
     */
    insertBefore(newNode, refNode) {
        if (newNode === this) {
            throw new Error("Node can not be inserted into itself");
        }
        if (refNode.parent !== this) {
            throw new Error("Reference node must be a child node");
        }
        // Remove from old parent if there is one
        const oldParent = newNode.parent;
        if (oldParent) {
            oldParent.removeChild(newNode);
        }
        // Insert the node
        const oldPrevious = refNode.previousSibling;
        if (!oldPrevious) {
            this.firstChild = newNode;
        }
        else {
            oldPrevious.nextSibling = newNode;
        }
        refNode.previousSibling = newNode;
        newNode.previousSibling = oldPrevious;
        newNode.nextSibling = refNode;
        newNode.parent = this;
        newNode.setScene(this.scene);
        return this.invalidate();
    }
    /**
     * Replaces the given child node with a new node.
     *
     * @param oldNode - The old child node to replace.
     * @param newNode - The new node to replace the old one with.
     */
    replaceChild(oldNode, newNode) {
        if (newNode === this) {
            throw new Error("newNode must not be the parent node");
        }
        if (oldNode.parent !== this) {
            throw new Error("oldNode must be a child node");
        }
        // If new node is the same as the old node then do nothing
        if (newNode === oldNode) {
            return this;
        }
        const next = oldNode.nextSibling;
        this.removeChild(oldNode);
        if (next) {
            this.insertBefore(newNode, next);
        }
        else {
            this.appendChild(newNode);
        }
        return this;
    }
    /**
     * Replace the given node with this one.
     *
     * @param node - The node to replace.
     */
    replace(node) {
        if (this.parent) {
            this.parent.replaceChild(this, node);
        }
        return this;
    }
    /**
     * Appends this node to the given parent node.
     *
     * @param node - The parent node to append this node to.
     */
    appendTo(node) {
        node.appendChild(this);
        return this;
    }
    /**
     * Prepends this node to the given parent node.
     *
     * @param node - The parent node to prepend this node to.
     */
    prependTo(node) {
        node.prependChild(this);
        return this;
    }
    /**
     * Iterates over all child nodes and calls the given callback with the currently iterated node as parameter.
     *
     * @param callback - The callback to call for each child node.
     * @param thisArg  - Optional value to use as `this` when executing `callback`.
     */
    forEachChild(callback, thisArg = this) {
        let index = 0;
        let node = this.firstChild;
        while (node) {
            const next = node.nextSibling;
            callback.call(thisArg, node, index++);
            node = next;
        }
        return this;
    }
    /**
     * Iterates over all descendant nodes and calls the given callback with the currently iterated node as parameter.
     *
     * @param callback - The callback to call for each descendant node.
     * @param thisArg  - Optional value to use as `this` when executing `callback`.
     */
    forEachDescendant(callback, thisArg = this) {
        var _a, _b;
        let node = this.firstChild;
        while (node != null && node !== this) {
            let next = node.firstChild;
            if (next == null) {
                next = node.nextSibling;
            }
            if (next == null) {
                next = (_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.nextSibling) !== null && _b !== void 0 ? _b : null;
            }
            callback.call(thisArg, node);
            node = next;
        }
        return this;
    }
    /**
     * Returns the first child node for which the given callback returns true.
     *
     * @param callback - The callback which checks if the iterated node is the one to look for.
     * @return The found matching child node or null if none.
     */
    findChild(callback, thisArg = this) {
        let index = 0;
        let node = this.firstChild;
        while (node) {
            const next = node.nextSibling;
            if (callback.call(thisArg, node, index++)) {
                return node;
            }
            node = next;
        }
        return null;
    }
    /**
     * Returns the first descendant node for which the given callback returns true.
     *
     * @param callback - The callback which checks if the iterated node is the one to look for.
     * @return The found matching descendant node or null if none.
     */
    findDescendant(callback, thisArg = this) {
        var _a, _b;
        let node = this.firstChild;
        while (node != null && node !== this) {
            let next = node.firstChild;
            if (next == null) {
                next = node.nextSibling;
            }
            if (next == null) {
                next = (_b = (_a = node.parent) === null || _a === void 0 ? void 0 : _a.nextSibling) !== null && _b !== void 0 ? _b : null;
            }
            if (callback.call(thisArg, node)) {
                return node;
            }
            node = next;
        }
        return null;
    }
    /**
     * Tests whether at least one child node passes the test implemented by the provided function.
     *
     * @param callback - The callback to call for each child node returning a boolean.
     * @param thisArg  - Optional value to use as `this` when executing `callback`.
     * @return True if at least one child node returned true in the given callback, false if none did.
     */
    someChildren(callback, thisArg = this) {
        let index = 0;
        let node = this.firstChild;
        while (node) {
            const next = node.nextSibling;
            if (callback.call(thisArg, node, index++)) {
                return true;
            }
            node = next;
        }
        return false;
    }
    /**
     * Returns a new array with all child nodes.
     *
     * @return All child nodes.
     */
    getChildren() {
        const children = [];
        let node = this.firstChild;
        while (node) {
            children.push(node);
            node = node.nextSibling;
        }
        return children;
    }
    /**
     * Returns the descendant node with the given id.
     *
     * @param id - The ID to look for.
     * @return The matching descendant node or null if none.
     */
    getDescendantById(id) {
        return this.findDescendant(node => node.getId() === id);
    }
    /**
     * Invalidates the bounds of the node. AUtomatically called when node size is changed. Must be called manually
     * when some other aspect of the node which may influence the bounds is changed.
     */
    invalidateBounds() {
        this.boundsPolygon.clear();
        return this;
    }
    /**
     * Updates the bounds polygon of the node. The default implementation simply sets a bounding box. Specialized nodes
     * can overwrite this method to define a more specific polygon.
     *
     * @param bounds - The empty bounds polygon to be filled with points by this method.
     */
    updateBoundsPolygon(bounds) {
        bounds.addVertex(new Vector2_1.Vector2(0, 0));
        bounds.addVertex(new Vector2_1.Vector2(this.width, 0));
        bounds.addVertex(new Vector2_1.Vector2(this.width, this.height));
        bounds.addVertex(new Vector2_1.Vector2(0, this.height));
    }
    /**
     * Returns the bounds polygon of the node.
     *
     * @return The bounds polygon.
     */
    getBoundsPolygon() {
        if (!this.boundsPolygon.hasVertices()) {
            this.updateBoundsPolygon(this.boundsPolygon);
        }
        return this.boundsPolygon;
    }
    /**
     * Marks this node, all parent nodes and the scene as invalid to trigger a scene revalidation. This must be
     * called every time when some aspect of the node is changed which requires a redraw of the scene node.
     *
     * TODO Not yet implemented, currently the scene is constantly redrawn.
     */
    invalidate() {
        /*
        if (this.valid) {
            this.valid = false;
            if (this.parent) {
                this.parent.invalidate();
            } else if (this.scene) {
                void this.scene.invalidate();
            }
        }
        */
        return this;
    }
    /**
     * Adds a new animation to the scene.
     *
     * @param animationArgs - The arguments defining the animation to add.
     */
    animate(animationArgs) {
        this.animations.push(new SceneNodeAnimation_1.SceneNodeAnimation(this, animationArgs));
        return this;
    }
    /**
     * Finishes all currently running animations. This calls all animator functions with their last animation index
     * (1.0) and then removes the animations.
     */
    finishAnimations() {
        for (const animation of this.animations) {
            animation.finish();
        }
        return this.forEachChild(child => child.finishAnimations());
    }
    /**
     * Checks if node has running animations.
     *
     * @return True if node has animations, false if not.
     */
    hasAnimations() {
        return this.animations.length > 0 || this.someChildren(child => child.hasAnimations());
    }
    /**
     * Enables or disables showing node bounds. This may be useful for debugging.
     *
     * @param showBounds - True to enable showing node bounds, false to disable it.
     */
    setShowBounds(showBounds) {
        if (showBounds !== this.showBounds) {
            this.showBounds = showBounds;
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns true if node bounds are currently shown for debugging purposes.
     *
     * @return True if node bounds are shown, false if not.
     */
    isShowBounds() {
        return this.showBounds;
    }
    /**
     * Returns the layer of this node.
     *
     * @return The node's layer (0-31).
     */
    getLayer() {
        return Math.log2(this.layer);
    }
    /**
     * Sets the layer this node should appear on.
     *
     * @param layer - The layer to set (0-31).
     */
    setLayer(layer) {
        if (layer < 0 || layer > 31) {
            throw new Error(`Valid layer range is 0-31 but was ${layer}`);
        }
        layer = 1 << layer;
        if (layer !== this.layer) {
            this.layer = layer;
            this.invalidate();
        }
        return this;
    }
    /**
     * Updates the animations and removes finished animations.
     */
    updateAnimations(dt) {
        const animations = this.animations;
        let numAnimations = animations.length;
        let i = 0;
        while (i < numAnimations) {
            if (animations[i].update(dt)) {
                animations.splice(i, 1);
                numAnimations--;
            }
            else {
                i++;
            }
        }
    }
    /**
     * Updates this node and its child nodes recursively.
     *
     * @param dt - The time in seconds since the last update.
     * @return Bit mask with used layers.
     */
    updateAll(dt) {
        // Update this node and run animations
        const postUpdate = this.update(dt);
        this.updateAnimations(dt);
        // Update the scene transformation for this node
        const parent = this.parent;
        if (parent != null) {
            this.sceneTransformation.setMatrix(parent.sceneTransformation);
            this.sceneTransformation.translate((Direction_1.Direction.getX(parent.childAnchor) + 1) / 2 * parent.width, (Direction_1.Direction.getY(parent.childAnchor) + 1) / 2 * parent.height);
        }
        else {
            this.sceneTransformation.reset();
        }
        this.sceneTransformation.translate(this.x, this.y);
        this.sceneTransformation.mul(this.transformation);
        this.sceneTransformation.translate(-(Direction_1.Direction.getX(this.anchor) + 1) / 2 * this.width, -(Direction_1.Direction.getY(this.anchor) + 1) / 2 * this.height);
        // Update child nodes
        const layers = this.updateChildren(dt) | this.layer;
        // When update method returned a post-update function then call it now
        if (postUpdate != null) {
            postUpdate();
        }
        return layers;
    }
    /**
     * Updates the child nodes of this node recursively.
     *
     * @param dt - The time in seconds since the last update.
     * @return Bit mask with used layers.
     */
    updateChildren(dt) {
        let layers = 0;
        this.forEachChild(child => {
            layers |= child.updateAll(dt);
        });
        return layers;
    }
    /**
     * Updates this node. This is done before updating the child nodes of this node. The method can return an optional
     * function which is called after the child nodes are updated so this can be used for post-updating operations.
     *
     * @param dt - The time in seconds since the last update.
     * @return Optional post-update function which is called after updating the child nodes.
     */
    update(dt) { }
    /**
     * Recursively draws the bounds for this node and alls its child nodes as long as the [[showBounds]] for the node
     * is set to true.
     *
     * @param ctx - The rendering context.
     */
    drawBounds(ctx) {
        if (this.showBounds) {
            const bounds = this.getBoundsPolygon();
            ctx.save();
            this.sceneTransformation.setCanvasTransform(ctx);
            ctx.beginPath();
            bounds.draw(ctx);
            ctx.clip();
            ctx.save();
            ctx.lineWidth = 2;
            ctx.strokeStyle = "red";
            ctx.stroke();
            ctx.setLineDash([4, 4]);
            ctx.strokeStyle = "white";
            ctx.lineDashOffset = Math.round(Date.now() / 100) % 8;
            ctx.stroke();
            ctx.restore();
            ctx.restore();
        }
        return this.forEachChild(child => child.drawBounds(ctx));
    }
    /**
     * Draws this scene node and its child nodes recursively
     *
     * @param ctx    - The rendering context.
     * @param layer  - The layer to render. Nodes which doesn't belong to this layer are not drawn.
     * @param width  - The scene width.
     * @param height - The scene height.
     * @return Hints which suggests further actions after drawing.
     */
    drawAll(ctx, layer, width, height) {
        ctx.save();
        ctx.globalAlpha *= this.getEffectiveOpacity();
        ctx.translate(this.x, this.y);
        this.transformation.transformCanvas(ctx);
        ctx.translate(-(Direction_1.Direction.getX(this.anchor) + 1) / 2 * this.width, -(Direction_1.Direction.getY(this.anchor) + 1) / 2 * this.height);
        const postDraw = layer === this.layer ? this.draw(ctx, width, height) : null;
        ctx.save();
        ctx.translate((Direction_1.Direction.getX(this.childAnchor) + 1) / 2 * this.width, (Direction_1.Direction.getY(this.childAnchor) + 1) / 2 * this.height);
        let flags = this.drawChildren(ctx, layer, width, height);
        ctx.restore();
        if (postDraw != null) {
            if (postDraw === true) {
                flags |= PostDrawHints.CONTINUE_DRAWING;
            }
            else if (postDraw !== false) {
                postDraw();
            }
        }
        ctx.restore();
        return this.showBounds ? flags | PostDrawHints.DRAW_BOUNDS | PostDrawHints.CONTINUE_DRAWING : flags;
    }
    /**
     * Draws all child nodes of this scene node recursively.
     *
     * @param ctx    - The rendering context.
     * @param layer  - The layer to render. Nodes which doesn't belong to this layer are not drawn.
     * @param width  - The scene width.
     * @param height - The scene height.
     * @return Hints which suggests further actions after drawing.
     */
    drawChildren(ctx, layer, width, height) {
        let flags = 0;
        this.forEachChild(child => {
            flags |= child.drawAll(ctx, layer, width, height);
        });
        return flags;
    }
    /**
     * Draws this node. This is done before drawing the child nodes of this node. The method can return a boolean
     * which indicates if the scene is not finished yet and must be drawn continuously (for animations for example).
     * The method can also return an optional function which is called after the child nodes are drawn so this can be
     * used for post-drawing operations. This post-draw function then can again return an optional boolean which
     * indicates that scene must be continuously draw itself.
     *
     * @param ctx    - The rendering context.
     * @param width  - The scene width.
     * @param height - The scene height.
     * @return Optional boolean to indicate if scene must be redrawn continuously (Defaults to false) or a post-draw
     *         function which is called after drawing the child nodes and which again can return a flag indicating
     *         continuos redraw.
     */
    draw(ctx, width, height) { }
}
exports.SceneNode = SceneNode;


/***/ }),

/***/ "./lib/scene/SceneNodeAnimation.js":
/*!*****************************************!*\
  !*** ./lib/scene/SceneNodeAnimation.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneNodeAnimation = void 0;
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
/**
 * Scene node animation. Instance is created internally within [[SceneNode]] when you call [[SceneNode.animate]].
 *
 * @param T - Optional owner game class.
 */
class SceneNodeAnimation {
    /**
     * Creates scene node animation for the given scene node and with the given animation arguments. You usually
     * don't create an instance of this class yourself. Instead you have to use the [[SceneNode.animate]] method.
     */
    constructor(sceneNode, { animator, delay = 0, duration = 1, easing = easings_1.linear }) {
        /** Time elapsed so far within the animation (including delay). */
        this.elapsed = 0;
        this.sceneNode = sceneNode;
        this.animator = animator;
        this.delay = delay;
        this.duration = duration;
        this.easing = easing;
        this.lifetime = delay + duration;
    }
    /**
     * Updates the animation.
     *
     * @param dt - The time in seconds since the last update.
     */
    update(dt) {
        this.elapsed += dt;
        if (this.elapsed < this.lifetime) {
            if (this.elapsed > this.delay) {
                const timeIndex = ((this.elapsed - this.delay) / this.duration) % 1;
                this.animator(this.sceneNode, this.easing(timeIndex), this.elapsed);
            }
            return false;
        }
        else {
            this.animator(this.sceneNode, 1, this.lifetime);
            return true;
        }
    }
    /**
     * Finishes the animation by fast-forwarding the animation index to the end of the animation lifetime.
     */
    finish() {
        this.elapsed = this.lifetime;
    }
}
exports.SceneNodeAnimation = SceneNodeAnimation;


/***/ }),

/***/ "./lib/scene/TextNode.js":
/*!*******************************!*\
  !*** ./lib/scene/TextNode.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TextNode = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const SceneNode_1 = __webpack_require__(/*! ./SceneNode */ "./lib/scene/SceneNode.js");
/**
 * Scene node for displaying a text with an optional icon left to it.
 *
 * @param T - Optional owner game class.
 */
class TextNode extends SceneNode_1.SceneNode {
    /**
     * Creates a new scene node displaying the given image.
     */
    constructor(_a) {
        var { font, text = "", color = "white", outlineColor = null } = _a, args = tslib_1.__rest(_a, ["font", "text", "color", "outlineColor"]);
        super(args);
        this.font = font;
        this.text = text;
        this.color = color;
        this.outlineColor = outlineColor;
        this.updateSize();
    }
    /**
     * Returns the displayed text.
     *
     * @return The displayed text.
     */
    getText() {
        return this.text;
    }
    /**
     * Sets the displayed text.
     *
     * @param text - The text to set.
     */
    setText(text) {
        if (text !== this.text) {
            this.text = text;
            this.updateSize();
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the bitmap font used to draw the text.
     *
     * @return The used bitmap font.
     */
    getFont() {
        return this.font;
    }
    /**
     * Sets the bitmap font used to draw the text.
     *
     * @param font - The bitmap font to use.
     */
    setFont(font) {
        if (font !== this.font) {
            this.font = font;
            this.updateSize();
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the text color.
     *
     * @return The text color.
     */
    getColor() {
        return this.color;
    }
    /**
     * Sets the text color.
     *
     * @param color - The text color to set.
     */
    setColor(color) {
        if (color !== this.color) {
            this.color = color;
            this.invalidate();
        }
        return this;
    }
    /**
     * Returns the text outline color. Null if none.
     *
     * @return The text outline color. Null if none.
     */
    getOutlineColor() {
        return this.outlineColor;
    }
    /**
     * Sets the text outline color.
     *
     * @param outlineColor - The text outline color to set.
     */
    setOutlineColor(outlineColor) {
        if (outlineColor !== this.outlineColor) {
            this.outlineColor = outlineColor;
            this.invalidate();
        }
        return this;
    }
    /**
     * Updates the node size according to the text measurements.
     */
    updateSize() {
        const size = this.font.measureText(this.text);
        this.resizeTo(size.width, size.height);
    }
    /** @inheritDoc */
    draw(ctx) {
        if (this.outlineColor != null) {
            this.font.drawTextWithOutline(ctx, this.text, 0, 0, this.color, this.outlineColor);
        }
        else {
            this.font.drawText(ctx, this.text, 0, 0, this.color);
        }
    }
}
exports.TextNode = TextNode;


/***/ }),

/***/ "./lib/scenes/CharacterSelectionScene.js":
/*!***********************************************!*\
  !*** ./lib/scenes/CharacterSelectionScene.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CharacterSelectionScene = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const Campaign_1 = __webpack_require__(/*! ../Campaign */ "./lib/Campaign.js");
const ControllerFamily_1 = __webpack_require__(/*! ../input/ControllerFamily */ "./lib/input/ControllerFamily.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
const GameScene_1 = __webpack_require__(/*! ./GameScene */ "./lib/scenes/GameScene.js");
const Menu_1 = __webpack_require__(/*! ../Menu */ "./lib/Menu.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const SlideTransition_1 = __webpack_require__(/*! ../transitions/SlideTransition */ "./lib/transitions/SlideTransition.js");
const TitleScene_1 = __webpack_require__(/*! ./TitleScene */ "./lib/scenes/TitleScene.js");
const ImageNode_1 = __webpack_require__(/*! ../scene/ImageNode */ "./lib/scene/ImageNode.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const TextNode_1 = __webpack_require__(/*! ../scene/TextNode */ "./lib/scene/TextNode.js");
const ControlTooltipNode_1 = __webpack_require__(/*! ../scene/ControlTooltipNode */ "./lib/scene/ControlTooltipNode.js");
const AsepriteNode_1 = __webpack_require__(/*! ../scene/AsepriteNode */ "./lib/scene/AsepriteNode.js");
var MenuItemKey;
(function (MenuItemKey) {
    MenuItemKey["CHARACTER"] = "character";
    MenuItemKey["VOICE"] = "voice";
    MenuItemKey["START"] = "start";
})(MenuItemKey || (MenuItemKey = {}));
const menuItemX = 12;
const characterMenuItemY = 20;
const voiceMenuItemY = 50;
const startMenuItemY = 124;
const selectionItemsYDistance = 12;
const selectionItemsXDistance = 12;
class CharacterSelectionScene extends Scene_1.Scene {
    activate() {
        this.input.onButtonDown.connect(this.handleButtonDown, this);
        this.menu.onActivated.connect(this.handleMenuAction, this);
    }
    deactivate() {
        this.input.onButtonDown.disconnect(this.handleButtonDown, this);
        this.menu.onActivated.disconnect(this.handleMenuAction, this);
    }
    handleMenuAction(buttonId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            switch (buttonId) {
                case MenuItemKey.CHARACTER:
                    this.game.campaign.toggleCharacterAsset();
                    this.updateSelection();
                    break;
                case MenuItemKey.VOICE:
                    this.game.campaign.toggleVoiceAsset();
                    this.updateSelection();
                    CharacterSelectionScene.voices[this.game.campaign.selectedVoice].play();
                    break;
                case MenuItemKey.START:
                    yield this.game.scenes.popScene({ noTransition: false });
                    TitleScene_1.TitleScene.music.stop();
                    this.game.scenes.setScene(GameScene_1.GameScene);
            }
        });
    }
    handleButtonDown(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (event.isAbort) {
                this.scenes.popScene();
            }
            else if (event.isConfirm) {
                this.menu.executeAction();
            }
            else if (event.isMenuUp) {
                this.menu.prev();
            }
            else if (event.isMenuDown) {
                this.menu.next();
            }
        });
    }
    updateSelection() {
        if (this.game.campaign.selectedCharacter === Campaign_1.CharacterAsset.MALE) {
            this.variant1.setColor("grey").setOutlineColor(null);
            this.variant2.setColor("white").setOutlineColor("black");
        }
        else {
            this.variant1.setColor("white").setOutlineColor("black");
            this.variant2.setColor("grey").setOutlineColor(null);
        }
        if (this.game.campaign.selectedVoice === Campaign_1.VoiceAsset.MALE) {
            this.voice1.setColor("grey").setOutlineColor(null);
            this.voice2.setColor("white").setOutlineColor("black");
        }
        else {
            this.voice1.setColor("white").setOutlineColor("black");
            this.voice2.setColor("grey").setOutlineColor(null);
        }
        this.character.setAseprite(CharacterSelectionScene.playerSprites[this.game.campaign.selectedCharacter]);
    }
    setup() {
        this.setBackgroundStyle("rgba(0, 0, 0, 0.8)");
        this.zIndex = 2;
        this.inTransition = new SlideTransition_1.SlideTransition({ duration: 0.5, direction: "top", easing: easings_1.easeOutCubic });
        this.outTransition = new SlideTransition_1.SlideTransition({ duration: 0.25 });
        const charSelectionTextY = characterMenuItemY + selectionItemsYDistance;
        const charSelectionTextX = menuItemX + selectionItemsXDistance;
        const charSelectionTextGap = 55;
        const voiceSelectionTextY = voiceMenuItemY + selectionItemsYDistance;
        const voiceSelectionTextX = menuItemX + selectionItemsXDistance;
        const voiceSelectionTextGap = 55;
        const character = this.game.campaign.selectedCharacter;
        const panel = new ImageNode_1.ImageNode({
            image: CharacterSelectionScene.panelImage,
            childAnchor: Direction_1.Direction.TOP_LEFT,
            x: this.game.width >> 1,
            y: (this.game.height >> 1) - 16
        }).appendChild(new TextNode_1.TextNode({
            font: CharacterSelectionScene.headlineFont,
            text: "CHARACTER CUSTOMIZATION",
            anchor: Direction_1.Direction.BOTTOM_LEFT,
            y: -5,
            color: "white"
        })).appendChild(this.variant1 = new TextNode_1.TextNode({
            font: CharacterSelectionScene.font,
            text: "Variant 1",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: charSelectionTextX,
            y: charSelectionTextY,
            color: "grey"
        })).appendChild(this.variant2 = new TextNode_1.TextNode({
            font: CharacterSelectionScene.font,
            text: "Variant 2",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: charSelectionTextX + charSelectionTextGap,
            y: charSelectionTextY,
            color: "grey"
        })).appendChild(this.voice1 = new TextNode_1.TextNode({
            font: CharacterSelectionScene.font,
            text: "High Pitch",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: voiceSelectionTextX,
            y: voiceSelectionTextY,
            color: "grey"
        })).appendChild(this.voice2 = new TextNode_1.TextNode({
            font: CharacterSelectionScene.font,
            text: "Low Pitch",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: voiceSelectionTextX + voiceSelectionTextGap,
            y: voiceSelectionTextY,
            color: "grey"
        })).appendChild(this.character = new AsepriteNode_1.AsepriteNode({
            aseprite: CharacterSelectionScene.playerSprites[character],
            tag: "idle",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 213,
            y: 46
        })).appendChild(new ControlTooltipNode_1.ControlTooltipNode({
            control: ControllerFamily_1.ControllerAnimationTags.CONFIRM,
            label: "Select or Change",
            anchor: Direction_1.Direction.TOP_LEFT,
            y: CharacterSelectionScene.panelImage.height + 2
        })).appendChild(new ControlTooltipNode_1.ControlTooltipNode({
            control: ControllerFamily_1.ControllerAnimationTags.BACK,
            label: "Back",
            anchor: Direction_1.Direction.TOP_LEFT,
            y: CharacterSelectionScene.panelImage.height + 18
        })).appendTo(this.rootNode);
        this.menu = new Menu_1.MenuList().setItems(new Menu_1.MenuItem(MenuItemKey.CHARACTER, "Character:", CharacterSelectionScene.font, "black", menuItemX, characterMenuItemY), new Menu_1.MenuItem(MenuItemKey.VOICE, "Voice:", CharacterSelectionScene.font, "black", menuItemX, voiceMenuItemY), new Menu_1.MenuItem(MenuItemKey.START, "Start Game", CharacterSelectionScene.font, "black", menuItemX, startMenuItemY)).appendTo(panel);
        this.updateSelection();
    }
    cleanup() {
        this.rootNode.clear();
    }
}
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], CharacterSelectionScene, "font", void 0);
tslib_1.__decorate([
    Assets_1.asset("fonts/credits.font.json"),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], CharacterSelectionScene, "headlineFont", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "sprites/pc/female.aseprite.json",
        "sprites/pc/male.aseprite.json"
    ]),
    tslib_1.__metadata("design:type", Array)
], CharacterSelectionScene, "playerSprites", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "sounds/jumping/jumping_female.mp3",
        "sounds/jumping/jumping.mp3"
    ]),
    tslib_1.__metadata("design:type", Array)
], CharacterSelectionScene, "voices", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/panel.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], CharacterSelectionScene, "panelImage", void 0);
exports.CharacterSelectionScene = CharacterSelectionScene;


/***/ }),

/***/ "./lib/scenes/ControlsScene.js":
/*!*************************************!*\
  !*** ./lib/scenes/ControlsScene.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ControlsScene = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const ControllerFamily_1 = __webpack_require__(/*! ../input/ControllerFamily */ "./lib/input/ControllerFamily.js");
const ControllerManager_1 = __webpack_require__(/*! ../input/ControllerManager */ "./lib/input/ControllerManager.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const SlideTransition_1 = __webpack_require__(/*! ../transitions/SlideTransition */ "./lib/transitions/SlideTransition.js");
const ImageNode_1 = __webpack_require__(/*! ../scene/ImageNode */ "./lib/scene/ImageNode.js");
const AsepriteNode_1 = __webpack_require__(/*! ../scene/AsepriteNode */ "./lib/scene/AsepriteNode.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const TextNode_1 = __webpack_require__(/*! ../scene/TextNode */ "./lib/scene/TextNode.js");
const ControlTooltipNode_1 = __webpack_require__(/*! ../scene/ControlTooltipNode */ "./lib/scene/ControlTooltipNode.js");
class ControlsScene extends Scene_1.Scene {
    constructor() {
        super(...arguments);
        this.controls = [
            "Walk",
            "Jump",
            "Interact",
            "Run",
            "Throw",
            "Enter doors",
            "Pause"
        ];
    }
    setup() {
        this.setBackgroundStyle("rgba(0, 0, 0, 0.8)");
        this.zIndex = 2;
        this.inTransition = new SlideTransition_1.SlideTransition({ duration: 0.5, direction: "top", easing: easings_1.easeOutCubic });
        this.outTransition = new SlideTransition_1.SlideTransition({ duration: 0.25 });
        const controllerManager = ControllerManager_1.ControllerManager.getInstance();
        const gamepadStyle = controllerManager.selectedGamepadStyle;
        const panel = new ImageNode_1.ImageNode({
            image: ControlsScene.panelImage,
            x: this.game.width / 2,
            y: this.game.height / 2 - 16,
            childAnchor: Direction_1.Direction.TOP_LEFT
        }).appendChild(this.gamepadSelection = new AsepriteNode_1.AsepriteNode({
            aseprite: ControlsScene.gamepadSelection,
            tag: gamepadStyle,
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 204,
            y: 2
        })).appendChild(new ImageNode_1.ImageNode({
            image: ControlsScene.keyboardKeys,
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 123,
            y: 35
        })).appendChild(this.gamepadControls = new AsepriteNode_1.AsepriteNode({
            aseprite: ControlsScene.gamepadControls,
            tag: gamepadStyle,
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 206,
            y: 35
        })).appendChild(new ControlTooltipNode_1.ControlTooltipNode({
            label: "Toggle Gamepad Button Prompts",
            control: ControllerFamily_1.ControllerAnimationTags.ACTION,
            anchor: Direction_1.Direction.TOP_LEFT,
            y: ControlsScene.panelImage.height + 2
        })).appendChild(new ControlTooltipNode_1.ControlTooltipNode({
            label: "Back",
            control: ControllerFamily_1.ControllerAnimationTags.BACK,
            anchor: Direction_1.Direction.TOP_LEFT,
            y: ControlsScene.panelImage.height + 18
        })).appendTo(this.rootNode);
        this.controls.forEach((label, index) => {
            panel.appendChild(new TextNode_1.TextNode({
                font: ControlsScene.font,
                text: label,
                anchor: Direction_1.Direction.TOP_LEFT,
                x: 10,
                y: 35 + index * 20,
                color: "black"
            }));
        });
    }
    cleanup() {
        this.rootNode.clear();
    }
    activate() {
        this.input.onButtonDown.connect(this.handleButtonDown, this);
    }
    deactivate() {
        this.input.onButtonDown.disconnect(this.handleButtonDown, this);
    }
    handleButtonDown(event) {
        if (event.isAbort || event.isPause) {
            this.scenes.popScene();
        }
        if (event.isPlayerAction) {
            const controllerManager = ControllerManager_1.ControllerManager.getInstance();
            controllerManager.toggleSelectedGamepadStyle();
            this.gamepadControls.setTag(controllerManager.selectedGamepadStyle);
            this.gamepadSelection.setTag(controllerManager.selectedGamepadStyle);
        }
    }
}
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], ControlsScene, "font", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/controls.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], ControlsScene, "panelImage", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/controls_keyboard.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], ControlsScene, "keyboardKeys", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/gamepad_selection.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], ControlsScene, "gamepadSelection", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/controls_gamepad.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], ControlsScene, "gamepadControls", void 0);
exports.ControlsScene = ControlsScene;


/***/ }),

/***/ "./lib/scenes/CreditsScene.js":
/*!************************************!*\
  !*** ./lib/scenes/CreditsScene.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditsScene = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
const FadeTransition_1 = __webpack_require__(/*! ../transitions/FadeTransition */ "./lib/transitions/FadeTransition.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const TitleScene_1 = __webpack_require__(/*! ./TitleScene */ "./lib/scenes/TitleScene.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const TextNode_1 = __webpack_require__(/*! ../scene/TextNode */ "./lib/scene/TextNode.js");
const SceneNode_1 = __webpack_require__(/*! ../scene/SceneNode */ "./lib/scene/SceneNode.js");
const ImageNode_1 = __webpack_require__(/*! ../scene/ImageNode */ "./lib/scene/ImageNode.js");
const AsepriteNode_1 = __webpack_require__(/*! ../scene/AsepriteNode */ "./lib/scene/AsepriteNode.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Campaign_1 = __webpack_require__(/*! ../Campaign */ "./lib/Campaign.js");
class CreditsScene extends Scene_1.Scene {
    constructor() {
        super(...arguments);
        this.starPositions = [
            [318, 10],
            [288, 19],
            [260, 100],
            [370, 91],
            [409, 49],
            [446, 19],
            [436, 97],
            [185, 93],
            [159, 49],
            [322, 72],
            [153, 10],
            [211, 20],
            [59, 22],
            [17, 11],
            [102, 108]
        ];
        this.lineSpacing = 4;
        this.targetMusic = null;
    }
    getCorrectBackgroundTrack() {
        const ending = this.game.campaign.quests.find(q => q.isFinished());
        if (ending && ending.key === Quests_1.QuestKey.E)
            return CreditsScene.music[2];
        if (this.game.campaign.selectedCharacter === Campaign_1.CharacterAsset.FEMALE)
            return CreditsScene.music[1];
        if (this.game.campaign.selectedCharacter === Campaign_1.CharacterAsset.MALE)
            return CreditsScene.music[0];
        return CreditsScene.music[2];
    }
    setup() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const ending = this.game.campaign.quests.find(q => q.isFinished());
            this.zIndex = 2;
            this.inTransition = new FadeTransition_1.FadeTransition({ duration: 0.5, easing: easings_1.easeOutCubic });
            this.outTransition = new FadeTransition_1.FadeTransition({ duration: 0.25 });
            this.targetMusic = this.getCorrectBackgroundTrack();
            if (ending && ending.key === Quests_1.QuestKey.E) {
                // The background
                new ImageNode_1.ImageNode({
                    image: CreditsScene.backgroundImageSpace,
                    anchor: Direction_1.Direction.TOP_LEFT
                }).appendTo(this.rootNode);
                // Spaceship
                new AsepriteNode_1.AsepriteNode({
                    aseprite: CreditsScene.spaceship,
                    tag: "idle",
                    anchor: Direction_1.Direction.TOP_LEFT,
                    x: constants_1.GAME_CANVAS_WIDTH,
                    y: 200
                }).animate({
                    animator: (node, value) => node.setX((constants_1.GAME_CANVAS_WIDTH + 50) - value * constants_1.GAME_CANVAS_WIDTH),
                    duration: 100,
                }).appendTo(this.rootNode);
                // Spaceship
                new AsepriteNode_1.AsepriteNode({
                    aseprite: CreditsScene.spaceshipsmall,
                    tag: "idle",
                    anchor: Direction_1.Direction.TOP_LEFT,
                    x: constants_1.GAME_CANVAS_WIDTH,
                    y: 185
                }).animate({
                    animator: (node, value) => node.setX((constants_1.GAME_CANVAS_WIDTH + 10) - value * constants_1.GAME_CANVAS_WIDTH),
                    duration: 200,
                }).appendTo(this.rootNode);
            }
            else {
                // The background
                new ImageNode_1.ImageNode({
                    image: CreditsScene.backgroundImage,
                    anchor: Direction_1.Direction.TOP_LEFT
                }).appendTo(this.rootNode);
                // The blinking stars
                this.starPositions.forEach((pos, index) => {
                    new AsepriteNode_1.AsepriteNode({
                        aseprite: CreditsScene.stars[index % CreditsScene.stars.length],
                        tag: "idle",
                        anchor: Direction_1.Direction.TOP_LEFT,
                        x: pos[0],
                        y: pos[1]
                    }).appendTo(this.rootNode);
                });
                // The tree leaf
                new AsepriteNode_1.AsepriteNode({
                    aseprite: CreditsScene.leaf,
                    tag: "idle",
                    anchor: Direction_1.Direction.TOP_LEFT,
                    x: 414,
                    y: 163
                }).appendTo(this.rootNode);
            }
            // The gradient background behind the scrolling credits text
            new ImageNode_1.ImageNode({
                image: CreditsScene.overlayImage,
                anchor: Direction_1.Direction.TOP_LEFT,
                opacity: 0.75
            }).appendTo(this.rootNode);
            // The scrolling credits text
            this.createCreditsNode().appendTo(this.rootNode);
            // Shortened Git commit hash to provide support
            new TextNode_1.TextNode({
                font: CreditsScene.standardFont,
                text: CreditsScene.appInfo.gitCommitHash.substr(0, 16),
                anchor: Direction_1.Direction.BOTTOM_RIGHT,
                x: this.game.width - 7,
                y: this.game.height - 4,
                color: "white"
            }).appendTo(this.rootNode);
        });
    }
    cleanup() {
        this.rootNode.clear();
    }
    createCreditsNode() {
        const startY = this.game.height + 50;
        let totalCrawlHeight = 0;
        const credits = new SceneNode_1.SceneNode().appendTo(this.rootNode).animate({
            animator: (node, value, elapsed) => {
                node.setY(startY - (elapsed * 1000 / 36) % (totalCrawlHeight + startY));
            },
            duration: Infinity
        });
        const x = 20;
        let y = this.addTitle(credits, 0, x);
        y = this.addParagraph(credits, y, x, [
            "Originally made as a team",
            "effort for Ludum Dare 46",
            "in three days by"
        ]);
        y = this.addParagraph(credits, y, x, [
            "Eduard But, Nico Hülscher,",
            "Benjamin Jung, Nils Kreutzer,",
            "Bastian Lang, Ranjit Mevius,",
            "Markus Over, Klaus Reimer,",
            "and Jennifer van Veen"
        ], 50);
        y = this.addCredit(credits, y, x, "GAME DESIGN", ["Everyone"]);
        y = this.addCredit(credits, y, x, "STORY", [
            "Markus Over",
            "Jennifer van Veen",
            "Ranjit Mevius",
            "Nils Kreutzer"
        ]);
        y = this.addCredit(credits, y, x, "PROGRAMMING", [
            "Nico Hülscher",
            "Benjamin Jung",
            "Nils Kreutzer",
            "Ranjit Mevius",
            "Markus Over",
            "Klaus Reimer",
            "Eduard But",
            "Matthias Wetter"
        ]);
        y = this.addCredit(credits, y, x, "SCRIPTING", [
            "Markus Over",
            "Eduard But"
        ]);
        y = this.addCredit(credits, y, x, "ART DIRECTION", ["Eduard But"]);
        y = this.addCredit(credits, y, x, "2D ART", [
            "Eduard But",
            "Nils Kreutzer",
            "Christina Schneider",
            "Jennifer van Veen",
            "Matthias Wetter"
        ]);
        y = this.addCredit(credits, y, x, "WRITING", [
            "Markus Over",
            "Jennifer van Veen",
            "Eduard But"
        ]);
        y = this.addCredit(credits, y, x, "LEVEL DESIGN", [
            "Eduard But",
            "Nils Kreutzer",
            "Jennifer van Veen"
        ]);
        y = this.addCredit(credits, y, x, "DISTRIBUTION", [
            "Benjamin Jung",
        ]);
        y = this.addCredit(credits, y, x, "MUSIC", [
            "Bastian Lang",
            "Benjamin Jung",
            "Eduard But",
            "Matthias Wetter"
        ]);
        y = this.addCredit(credits, y, x, "QA", [
            "Jennifer van Veen",
            "Matthias Wetter"
        ]);
        y = this.addCredit(credits, y, x, "SFX", ["freesound.org"]);
        totalCrawlHeight = y;
        return credits;
    }
    activate() {
        if (this.targetMusic) {
            this.targetMusic.setLoop(true);
            this.targetMusic.setVolume(1);
            this.targetMusic.play();
        }
        this.input.onButtonDown.connect(this.handleButtonDown, this);
    }
    deactivate() {
        if (this.targetMusic) {
            this.targetMusic.stop();
        }
        this.input.onButtonDown.disconnect(this.handleButtonDown, this);
    }
    handleButtonDown(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.game.scenes.getPreviousScene() instanceof TitleScene_1.TitleScene) {
                this.game.scenes.popScene();
            }
            else {
                yield this.game.scenes.popScene({ noTransition: true });
                this.game.scenes.setScene(TitleScene_1.TitleScene);
            }
        });
    }
    addTitle(credits, y, x) {
        const gap = 5;
        const titleText = "Friendly Fire";
        const versionText = util_1.isDev() ? "DEVELOPMENT VERSION" : `Version ${CreditsScene.appInfo.version}`;
        y += new TextNode_1.TextNode({
            font: CreditsScene.headlineFont,
            text: titleText,
            anchor: Direction_1.Direction.TOP_LEFT,
            x, y,
            color: "white"
        }).appendTo(credits).getHeight();
        y += gap;
        y += new TextNode_1.TextNode({
            font: CreditsScene.standardFont,
            text: versionText,
            anchor: Direction_1.Direction.TOP_LEFT,
            x, y,
            color: "white"
        }).appendTo(credits).getHeight();
        return y + gap + 20;
    }
    addParagraph(credits, y, x, lines, marginBottom = 10) {
        lines.forEach(line => {
            y += new TextNode_1.TextNode({
                font: CreditsScene.standardFont,
                text: line,
                anchor: Direction_1.Direction.TOP_LEFT,
                x, y,
                color: "white"
            }).appendTo(credits).getHeight();
        });
        return y + marginBottom;
    }
    addCredit(credits, y, x, title, names) {
        const gap = 5;
        y += new TextNode_1.TextNode({
            font: CreditsScene.creditsFont,
            text: title,
            anchor: Direction_1.Direction.TOP_LEFT,
            x, y,
            color: "white"
        }).appendTo(credits).getHeight();
        y += this.lineSpacing + gap;
        names.forEach(name => {
            y += new TextNode_1.TextNode({
                font: CreditsScene.standardFont,
                text: name,
                anchor: Direction_1.Direction.TOP_LEFT,
                x, y,
                color: "white"
            }).appendTo(credits).getHeight();
        });
        return y + 40;
    }
}
tslib_1.__decorate([
    Assets_1.asset([
        "music/a-vision-of-fire-acoustic.ogg",
        "music/a-vision-of-fire-orchestral.ogg",
        "music/a-vision-of-fire.ogg",
    ]),
    tslib_1.__metadata("design:type", Array)
], CreditsScene, "music", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "sprites/stars/star1.aseprite.json",
        "sprites/stars/star2.aseprite.json",
        "sprites/stars/star3.aseprite.json",
        "sprites/stars/star4.aseprite.json",
        "sprites/stars/star5.aseprite.json"
    ]),
    tslib_1.__metadata("design:type", Array)
], CreditsScene, "stars", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/credits/leaf.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], CreditsScene, "leaf", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/credits/spaceship.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], CreditsScene, "spaceship", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/credits/spaceshipsmall.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], CreditsScene, "spaceshipsmall", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/credits/bg.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], CreditsScene, "backgroundImage", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/credits/bg-space.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], CreditsScene, "backgroundImageSpace", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/credits/overlay.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], CreditsScene, "overlayImage", void 0);
tslib_1.__decorate([
    Assets_1.asset("fonts/headline.font.json"),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], CreditsScene, "headlineFont", void 0);
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], CreditsScene, "standardFont", void 0);
tslib_1.__decorate([
    Assets_1.asset("fonts/credits.font.json"),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], CreditsScene, "creditsFont", void 0);
tslib_1.__decorate([
    Assets_1.asset("appinfo.json"),
    tslib_1.__metadata("design:type", Object)
], CreditsScene, "appInfo", void 0);
exports.CreditsScene = CreditsScene;


/***/ }),

/***/ "./lib/scenes/EndScene.js":
/*!********************************!*\
  !*** ./lib/scenes/EndScene.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.EndScene = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const ControllerFamily_1 = __webpack_require__(/*! ../input/ControllerFamily */ "./lib/input/ControllerFamily.js");
const CreditsScene_1 = __webpack_require__(/*! ./CreditsScene */ "./lib/scenes/CreditsScene.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const ImageNode_1 = __webpack_require__(/*! ../scene/ImageNode */ "./lib/scene/ImageNode.js");
const TextNode_1 = __webpack_require__(/*! ../scene/TextNode */ "./lib/scene/TextNode.js");
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const GlobalState_1 = __webpack_require__(/*! ../GlobalState */ "./lib/GlobalState.js");
class EndScene extends Scene_1.Scene {
    constructor() {
        super(...arguments);
        this.subtitleDelay = 2;
        this.inputDelay = 4;
    }
    setup() {
        var _a;
        const ending = this.game.campaign.quests.find(q => q.isFinished());
        if (ending) {
            GlobalState_1.GlobalState.setAchievedEnding(ending.key);
            GlobalState_1.GlobalState.setHasBeatenGame();
        }
        // The logo image
        new ImageNode_1.ImageNode({
            image: EndScene.logo,
            x: this.game.width >> 1,
            y: (this.game.height >> 1) - 15
        }).appendTo(this.rootNode);
        // Fade in subtitle after a delay
        new TextNode_1.TextNode({
            font: EndScene.font,
            text: (_a = ending === null || ending === void 0 ? void 0 : ending.title) !== null && _a !== void 0 ? _a : "Unknown [E]nding",
            x: this.game.width >> 1,
            y: (this.game.height >> 1) + 11,
            color: "red",
            opacity: 0
        }).animate({
            animator: (node, value) => node.setOpacity(value),
            delay: this.subtitleDelay,
            duration: 0.5,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        // Inform the user, that it's possible to return to the title
        const text = `Press any ${this.input.currentControllerFamily === ControllerFamily_1.ControllerFamily.KEYBOARD
            ? "key" : "button"} to continue.`;
        new TextNode_1.TextNode({
            font: EndScene.font,
            text,
            anchor: Direction_1.Direction.BOTTOM,
            x: this.game.width >> 1,
            y: this.game.height - 15,
            color: "darkgrey",
            opacity: 0
        }).animate({
            animator: (node, value) => node.setOpacity(value),
            delay: this.inputDelay,
            duration: 0.5,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
    }
    activate() {
        setTimeout(() => {
            EndScene.boom.setLoop(false);
            EndScene.boom.play();
        }, this.subtitleDelay * 1000);
        setTimeout(() => {
            this.input.onButtonDown.connect(this.gotoCreditsScene, this);
        }, this.inputDelay * 1000);
    }
    deactivate() {
        this.input.onButtonDown.disconnect(this.gotoCreditsScene, this);
    }
    gotoCreditsScene() {
        this.game.scenes.setScene(CreditsScene_1.CreditsScene);
    }
    cleanup() {
        this.rootNode.clear();
    }
}
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], EndScene, "font", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/ending/ff.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], EndScene, "logo", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/ending/boom.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], EndScene, "boom", void 0);
exports.EndScene = EndScene;


/***/ }),

/***/ "./lib/scenes/GameScene.js":
/*!*********************************!*\
  !*** ./lib/scenes/GameScene.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameScene = exports.AmbientSoundId = exports.BgmId = exports.isCollidableGameObject = exports.FadeDirection = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Player_1 = __webpack_require__(/*! ../entities/Player */ "./lib/entities/Player.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Bird_1 = __webpack_require__(/*! ../entities/Bird */ "./lib/entities/Bird.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const Bone_1 = __webpack_require__(/*! ../entities/Bone */ "./lib/entities/Bone.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const Camera_1 = __webpack_require__(/*! ../Camera */ "./lib/Camera.js");
const Campfire_1 = __webpack_require__(/*! ../entities/Campfire */ "./lib/entities/Campfire.js");
const Caveman_1 = __webpack_require__(/*! ../entities/Caveman */ "./lib/entities/Caveman.js");
const Chicken_1 = __webpack_require__(/*! ../entities/Chicken */ "./lib/entities/Chicken.js");
const Cloud_1 = __webpack_require__(/*! ../entities/Cloud */ "./lib/entities/Cloud.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const EndScene_1 = __webpack_require__(/*! ./EndScene */ "./lib/scenes/EndScene.js");
const Fire_1 = __webpack_require__(/*! ../entities/Fire */ "./lib/entities/Fire.js");
const FireGfx_1 = __webpack_require__(/*! ../FireGfx */ "./lib/FireGfx.js");
const FlameBoy_1 = __webpack_require__(/*! ../entities/FlameBoy */ "./lib/entities/FlameBoy.js");
const MapInfo_1 = __webpack_require__(/*! ../MapInfo */ "./lib/MapInfo.js");
const Menu_1 = __webpack_require__(/*! ../Menu */ "./lib/Menu.js");
const Mimic_1 = __webpack_require__(/*! ../entities/Mimic */ "./lib/entities/Mimic.js");
const MountainRiddle_1 = __webpack_require__(/*! ../MountainRiddle */ "./lib/MountainRiddle.js");
const MovingPlatform_1 = __webpack_require__(/*! ../entities/MovingPlatform */ "./lib/entities/MovingPlatform.js");
const Particles_1 = __webpack_require__(/*! ../Particles */ "./lib/Particles.js");
const PauseScene_1 = __webpack_require__(/*! ./PauseScene */ "./lib/scenes/PauseScene.js");
const Portal_1 = __webpack_require__(/*! ../entities/Portal */ "./lib/entities/Portal.js");
const PowerShiba_1 = __webpack_require__(/*! ./PowerShiba */ "./lib/scenes/PowerShiba.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
const Radio_1 = __webpack_require__(/*! ../entities/Radio */ "./lib/entities/Radio.js");
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
const RiddleStone_1 = __webpack_require__(/*! ../entities/RiddleStone */ "./lib/entities/RiddleStone.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const ShadowPresence_1 = __webpack_require__(/*! ../entities/ShadowPresence */ "./lib/entities/ShadowPresence.js");
const Shiba_1 = __webpack_require__(/*! ../entities/Shiba */ "./lib/entities/Shiba.js");
const Skull_1 = __webpack_require__(/*! ../entities/Skull */ "./lib/entities/Skull.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const SoundEmitter_1 = __webpack_require__(/*! ../SoundEmitter */ "./lib/SoundEmitter.js");
const Stone_1 = __webpack_require__(/*! ../entities/Stone */ "./lib/entities/Stone.js");
const StoneDisciple_1 = __webpack_require__(/*! ../entities/StoneDisciple */ "./lib/entities/StoneDisciple.js");
const SuperThrow_1 = __webpack_require__(/*! ../entities/SuperThrow */ "./lib/entities/SuperThrow.js");
const Tree_1 = __webpack_require__(/*! ../entities/Tree */ "./lib/entities/Tree.js");
const Wing_1 = __webpack_require__(/*! ../entities/Wing */ "./lib/entities/Wing.js");
const World_1 = __webpack_require__(/*! ../World */ "./lib/World.js");
const ExitPortal_1 = __webpack_require__(/*! ../entities/ExitPortal */ "./lib/entities/ExitPortal.js");
const Window_1 = __webpack_require__(/*! ../entities/Window */ "./lib/entities/Window.js");
var FadeDirection;
(function (FadeDirection) {
    FadeDirection[FadeDirection["FADE_IN"] = 0] = "FADE_IN";
    FadeDirection[FadeDirection["FADE_OUT"] = 1] = "FADE_OUT";
})(FadeDirection = exports.FadeDirection || (exports.FadeDirection = {}));
function isCollidableGameObject(object) {
    return typeof object.collidesWith === "function";
}
exports.isCollidableGameObject = isCollidableGameObject;
var BgmId;
(function (BgmId) {
    BgmId["OVERWORLD"] = "overworld";
    BgmId["INFERNO"] = "inferno";
    BgmId["CAVE"] = "cave";
    BgmId["RIDDLE"] = "riddle";
    BgmId["RADIO"] = "radio";
    BgmId["WINGS"] = "wings";
    BgmId["ECSTASY"] = "ecstasy";
    BgmId["AWAKE"] = "awake";
})(BgmId = exports.BgmId || (exports.BgmId = {}));
var AmbientSoundId;
(function (AmbientSoundId) {
    AmbientSoundId["STREAM"] = "stream";
    AmbientSoundId["WIND"] = "wind";
})(AmbientSoundId = exports.AmbientSoundId || (exports.AmbientSoundId = {}));
class GameScene extends Scene_1.Scene {
    constructor() {
        super(...arguments);
        this.ambientSounds = {
            [AmbientSoundId.STREAM]: GameScene.ambientStream,
            [AmbientSoundId.WIND]: GameScene.ambientWind
        };
        this.backgroundTracks = [
            {
                active: false,
                id: BgmId.OVERWORLD,
                sound: GameScene.bgm1,
                baseVolume: 0.25
            },
            {
                active: false,
                id: BgmId.CAVE,
                sound: GameScene.bgmCave,
                baseVolume: 1
            },
            {
                active: false,
                id: BgmId.INFERNO,
                sound: GameScene.bgm2,
                baseVolume: 0.10
            },
            {
                active: false,
                id: BgmId.RIDDLE,
                sound: GameScene.bgmRiddle,
                baseVolume: 1
            },
            {
                active: false,
                id: BgmId.RADIO,
                sound: GameScene.bgmRadio,
                baseVolume: 1
            },
            {
                active: false,
                id: BgmId.WINGS,
                sound: GameScene.bgmWings,
                baseVolume: 0.75
            },
            {
                active: false,
                id: BgmId.AWAKE,
                sound: GameScene.bgmAwake,
                baseVolume: 0.75
            },
            {
                active: false,
                id: BgmId.ECSTASY,
                sound: GameScene.bgmEcstasy,
                baseVolume: 1
            }
        ];
        this.petEndingTexts = [
            { label: "The sensation lacks any kind of comparison.", enter: 0.1 },
            { label: "All worldly matters seem so insignificant now.", enter: 0.2 },
            { label: "Reality around me begins to fade.", enter: 0.3 },
            { label: "Soon, I will be swept away in ecstasy.", enter: 0.5 },
            { label: "Can I muster up the strength to break free?", enter: 0.6 },
            { label: "If I don't stop now, there will be no going back.", enter: 0.7 },
            { label: "Is this really how it all ends?", enter: 0.8 },
            { label: "I regret nothing…", enter: 0.9 },
            { label: "Farewell, cruel world…", enter: 1 }
        ];
        this.windowEndingTexts = [
            { label: "I wiped off the heavy dust layer on the glass.", enter: 0.1 },
            { label: "The surface was as cold as the corpses around me.", enter: 0.2 },
            { label: "It was hard to make out anything in the darkness on the other side…", enter: 0.3 },
            { label: "", enter: 0.4 },
            { label: "My legs gave away when I realized what I was looking at.", enter: 0.5 },
            { label: "Nothing can compare to the dread I felt in this moment.", enter: 0.6 },
            { label: "", enter: 0.7 },
            { label: "I wished I could go back to the dream I faintly remember.", enter: 0.8 },
            { label: "But there was nothing but an inevitable death waiting for me…", enter: 0.9 },
        ];
        /* Total game time (time passed while game not paused) */
        this.gameTime = 0;
        this.gameObjects = [];
        this.soundEmitters = [];
        this.pointsOfInterest = [];
        this.triggerObjects = [];
        this.boundObjects = [];
        this.gateObjects = [];
        this.paused = false;
        this.particles = new Particles_1.Particles(this);
        this.fireFuryEndTime = 0;
        this.apocalypse = false;
        this.friendshipCutscene = false;
        this.pettingCutscene = false;
        this.windowCutscene = false;
        this.windowCutsceneTime = 0;
        this.pettingCutsceneTime = 0;
        this.pettingEndingTriggered = false;
        this.windowEndingTriggered = false;
        this.apocalypseFactor = 1;
        this.fireEffects = [];
        this.frameCounter = 0;
        this.framesPerSecond = 0;
        this.showBounds = false;
        this.scale = 1;
        this.dt = 0;
        this.fpsInterval = null;
        this.fadeToBlackEndTime = 0;
        this.fadeToBlackStartTime = 0;
        this.fadeToBlackFactor = 0;
        this.fadeToBlackDirection = FadeDirection.FADE_OUT;
        this.renderer = new Renderer_1.Renderer(this);
        this.mountainRiddle = new MountainRiddle_1.MountainRiddle();
    }
    setup() {
        this.mapInfo = new MapInfo_1.MapInfo();
        this.soundEmitters = this.mapInfo.getSounds().map(o => SoundEmitter_1.SoundEmitter.fromGameObjectInfo(this, o));
        this.pointsOfInterest = this.mapInfo.getPointers();
        this.triggerObjects = this.mapInfo.getTriggerObjects();
        this.boundObjects = this.mapInfo.getBoundObjects();
        this.gateObjects = this.mapInfo.getGateObjects();
        this.gameTime = 0;
        this.fadeToBlackEndTime = 0;
        this.fadeToBlackStartTime = 0;
        this.fadeToBlackFactor = 0;
        this.apocalypse = false;
        this.fireFuryEndTime = 0;
        this.pettingCutscene = false;
        this.pettingCutsceneTime = 0;
        this.pettingEndingTriggered = false;
        this.windowCutscene = false;
        this.windowCutsceneTime = 0;
        this.windowEndingTriggered = false;
        Conversation_1.Conversation.resetGlobals();
        this.gameObjects = [
            this.world = new World_1.World(this),
            this.particles,
            ...this.soundEmitters,
            ...this.mapInfo.getEntities().map(entity => {
                switch (entity.name) {
                    case "riddlestone":
                        return new RiddleStone_1.RiddleStone(this, entity.x, entity.y, entity.properties);
                    case "campfire":
                        return new Campfire_1.Campfire(this, entity.x, entity.y);
                    case "radio":
                        return new Radio_1.Radio(this, entity.x, entity.y);
                    case "movingplatform":
                        return new MovingPlatform_1.MovingPlatform(this, entity.x, entity.y, entity.properties);
                    case "skull":
                        return new Skull_1.Skull(this, entity.x, entity.y);
                    case "chicken":
                        return new Chicken_1.Chicken(this, entity.x, entity.y);
                    case "superthrow":
                        return new SuperThrow_1.SuperThrow(this, entity.x, entity.y);
                    case "portal":
                        return new Portal_1.Portal(this, entity.x, entity.y);
                    case "window":
                        return new Window_1.Window(this, entity.x, entity.y);
                    default:
                        return Entity_1.createEntity(entity.name, this, entity.x, entity.y, entity.properties);
                }
            })
        ];
        this.player = this.getGameObject(Player_1.Player);
        this.fire = this.getGameObject(Fire_1.Fire);
        this.stone = this.getGameObject(Stone_1.Stone);
        this.stoneDisciple = this.getGameObject(StoneDisciple_1.StoneDisciple);
        this.tree = this.getGameObject(Tree_1.Tree);
        this.flameboy = this.getGameObject(FlameBoy_1.FlameBoy);
        this.wing = this.getGameObject(Wing_1.Wing);
        this.bird = this.getGameObject(Bird_1.Bird);
        this.shiba = this.getGameObject(Shiba_1.Shiba);
        this.powerShiba = this.getGameObject(PowerShiba_1.PowerShiba);
        this.shadowPresence = this.getGameObject(ShadowPresence_1.ShadowPresence);
        this.mimic = this.getGameObject(Mimic_1.Mimic);
        this.caveman = this.getGameObject(Caveman_1.Caveman);
        this.bone = this.getGameObject(Bone_1.Bone);
        this.exitPortal = this.getGameObject(ExitPortal_1.ExitPortal);
        this.camera = new Camera_1.Camera(this, this.player);
        this.camera.setBounds(this.player.getCurrentMapBounds());
        this.fpsInterval = setInterval(() => {
            this.framesPerSecond = this.frameCounter;
            this.frameCounter = 0;
        }, 1000);
        this.game.campaign.begin(this);
        this.playBackgroundTrack(BgmId.CAVE);
        Conversation_1.Conversation.setGlobal("devmode", util_1.isDev() + "");
        this.loadApocalypse();
    }
    cleanup() {
        if (this.fpsInterval != null) {
            clearInterval(this.fpsInterval);
        }
    }
    addGameObject(object) {
        // Insert new item right before the player so player is always in front
        this.gameObjects.splice(this.gameObjects.indexOf(this.player) - 1, 0, object);
    }
    removeGameObject(object) {
        const index = this.gameObjects.indexOf(object);
        if (index >= 0) {
            this.gameObjects.splice(index, 1);
        }
    }
    setGateDisabled(gateId, disabled) {
        const gate = this.gateObjects.find(o => o.name === gateId);
        if (!gate) {
            console.error(`cannot set disabled status of gate '${gateId}' because it does not exist`);
            return;
        }
        gate.properties.disabled = disabled;
    }
    getBackgroundTrack(id) {
        const found = this.backgroundTracks.find(track => track.id === id);
        if (!found) {
            console.error(`Missing background track with ID '${id}'.`);
            return this.backgroundTracks[0];
        }
        return found;
    }
    fadeActiveBackgroundTrack(fade, inverse = false) {
        this.backgroundTracks.forEach(t => {
            if (t.active) {
                if (inverse) {
                    t.sound.setVolume(t.baseVolume * (1 - fade));
                }
                else {
                    t.sound.setVolume(t.baseVolume * fade);
                }
            }
        });
    }
    setActiveBgmTrack(id) {
        this.backgroundTracks.forEach(t => { t.active = false; });
        const track = this.backgroundTracks.find(t => t.id === id);
        if (track) {
            track.active = true;
            if (!track.sound.isPlaying()) {
                track.sound.setLoop(true);
                track.sound.play();
            }
        }
    }
    fadeToBackgroundTrack(id) {
        const track = this.getBackgroundTrack(id);
        this.muteMusic();
        this.backgroundTracks.forEach(t => { t.active = false; });
        track.active = true;
        track.sound.setVolume(track.baseVolume);
        if (!track.sound.isPlaying()) {
            track.sound.setLoop(true);
            track.sound.play();
        }
    }
    playBackgroundTrack(id) {
        const track = this.getBackgroundTrack(id);
        this.backgroundTracks.forEach(t => t.sound.stop());
        track.active = true;
        track.sound.setVolume(track.baseVolume);
        track.sound.setLoop(true);
        track.sound.play();
    }
    getGameObject(type) {
        for (const gameObject of this.gameObjects) {
            if (gameObject instanceof type) {
                return gameObject;
            }
        }
        throw new Error(`Game object of type ${type.name} not found.`);
    }
    activate() {
        this.input.onButtonDown.connect(this.handleButtonDown, this);
        this.input.onButtonDown.connect(this.player.handleButtonDown, this.player);
        this.input.onButtonUp.connect(this.player.handleButtonUp, this.player);
        this.resume();
    }
    deactivate() {
        this.pause();
        this.input.onButtonDown.disconnect(this.handleButtonDown, this);
        this.input.onButtonDown.disconnect(this.player.handleButtonDown, this.player);
        this.input.onButtonUp.disconnect(this.player.handleButtonUp, this.player);
    }
    handleButtonDown(event) {
        var _a;
        if (event.isAbort || event.isPause) {
            if (this.player.getDance()) {
                (_a = this.player.getDance()) === null || _a === void 0 ? void 0 : _a.resetMusic();
                this.player.cancelDance();
            }
        }
        if (event.isPause) {
            this.scenes.pushScene(PauseScene_1.PauseScene);
        }
    }
    gameOver() {
        GameScene.bgm1.stop();
        GameScene.bgm2.stop();
        GameScene.swell.setVolume(0.5);
        GameScene.swell.play();
        setTimeout(() => {
            this.game.scenes.setScene(EndScene_1.EndScene);
        }, 2000);
    }
    isActive() {
        return !this.paused;
    }
    update(dt) {
        if (this.paused) {
            dt = 0;
        }
        this.dt = dt;
        this.gameTime += dt;
        for (const obj of this.gameObjects) {
            obj.update(dt);
        }
        this.camera.update(dt, this.gameTime);
        if (this.fadeToBlackEndTime > this.gameTime) {
            let fade = (this.gameTime - this.fadeToBlackStartTime) / (this.fadeToBlackEndTime - this.fadeToBlackStartTime);
            if (this.fadeToBlackDirection === FadeDirection.FADE_IN) {
                fade = 1 - fade;
            }
            this.fadeToBlackFactor = fade;
        }
        if (this.friendshipCutscene) {
            this.updateFriendshipEndingCutscene(dt);
        }
        if (this.pettingCutscene) {
            this.updatePettingEndingCutscene(dt);
        }
        if (this.windowCutscene) {
            this.updateWindowEndingCutscene(dt);
        }
    }
    draw(ctx, width, height) {
        ctx.save();
        // Center coordinate system
        ctx.translate(ctx.canvas.width / 2, ctx.canvas.height / 2);
        // Scale by three because everything was based on 480x300 canvas and now its three times larger
        ctx.scale(this.scale, this.scale);
        // Draw stuff
        this.camera.applyTransform(ctx);
        for (const obj of this.gameObjects) {
            obj.draw(ctx, width, height);
        }
        // Add all particle emitters to rendering queue
        this.particles.addEmittersToRenderingQueue();
        // Add all debug bounds to rendering queue
        this.addAllDebugBoundsToRenderingQueue();
        // Apocalypse
        if (this.fireFuryEndTime) {
            this.camera.setCinematicBar(1);
            // Fade out
            const diff = this.fireFuryEndTime - this.gameTime;
            const p = diff / 16;
            const fade = Particles_1.valueCurves.trapeze(0.4).get(p);
            this.drawFade(ctx, fade, "black");
        }
        if (this.apocalypse) {
            this.drawApocalypseOverlay(ctx);
        }
        // Gate Fade
        if (this.fadeToBlackFactor > 0) {
            this.fadeActiveBackgroundTrack(this.fadeToBlackFactor, true);
            this.drawFade(ctx, this.fadeToBlackFactor, "black");
        }
        // Cinematic bars
        this.camera.addCinematicBarsToRenderer();
        // Draw stuff from Rendering queue
        this.renderer.draw(ctx);
        ctx.restore();
        // Display FPS counter
        if (util_1.isDev()) {
            GameScene.font.drawText(ctx, `${this.framesPerSecond} FPS`, 2 * this.scale, 2 * this.scale - 3, "white");
        }
        this.frameCounter++;
    }
    addSingleDebugBoundsToRenderingQueue(bounds, color) {
        this.renderer.add({
            type: Renderer_1.RenderingType.RECT,
            layer: Renderer_1.RenderingLayer.DEBUG,
            position: {
                x: bounds.x,
                y: -bounds.y
            },
            lineColor: color,
            dimension: {
                width: bounds.width,
                height: bounds.height
            }
        });
    }
    addAllDebugBoundsToRenderingQueue() {
        if (this.showBounds) {
            // Draw trigger bounds for collisions
            for (const obj of this.triggerObjects) {
                const bounds = util_1.boundsFromMapObject(obj);
                this.addSingleDebugBoundsToRenderingQueue(bounds, "blue");
            }
            for (const obj of this.boundObjects) {
                const bounds = util_1.boundsFromMapObject(obj);
                this.addSingleDebugBoundsToRenderingQueue(bounds, "yellow");
            }
            for (const obj of this.gateObjects) {
                const bounds = util_1.boundsFromMapObject(obj);
                this.addSingleDebugBoundsToRenderingQueue(bounds, "green");
            }
        }
    }
    startApocalypseMusic() {
        this.playBackgroundTrack(BgmId.INFERNO);
    }
    startFriendshipMusic() {
        this.playBackgroundTrack(BgmId.WINGS);
    }
    muteMusic() {
        this.backgroundTracks.forEach(t => t.sound.setVolume(0));
    }
    resetMusicVolumes() {
        this.backgroundTracks.forEach(t => {
            if (t.active)
                t.sound.setVolume(t.baseVolume);
        });
    }
    fadeToBlack(duration, direction) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                this.fadeToBlackStartTime = this.gameTime;
                this.fadeToBlackEndTime = this.gameTime + duration;
                this.fadeToBlackDirection = direction;
                setTimeout(() => {
                    if (direction === FadeDirection.FADE_OUT) {
                        this.fadeToBlackFactor = 1;
                    }
                    else {
                        this.fadeToBlackFactor = 0;
                    }
                    resolve();
                }, duration * 1000);
            });
        });
    }
    updateApocalypse() {
        this.fireEmitter.setPosition(this.player.x, this.player.y);
        this.fireEffects.forEach(e => e.update());
        if (util_1.timedRnd(this.dt, 0.8)) {
            this.fireEmitter.emit();
        }
        this.fire.growthTarget = Math.max(2, 20 - 6 * this.gameObjects.filter(o => o instanceof Cloud_1.Cloud && o.isRaining()).length);
        if (this.fire.intensity < 6) {
            this.fire.intensity = Math.max(this.fire.intensity, 4);
            this.apocalypseFactor = util_1.clamp((this.fire.intensity - 4) / 2, 0, 1);
            if (this.apocalypseFactor <= 0.001) {
                // End apocalypse
                this.apocalypseFactor = 0;
                this.apocalypse = false;
                this.fire.state = Fire_1.FireState.PUT_OUT;
                this.game.campaign.getQuest(Quests_1.QuestKey.A).trigger(Quests_1.QuestATrigger.BEAT_FIRE);
                this.game.campaign.runAction("enable", null, ["fire", "fire3"]);
                // Music
                GameScene.bgm2.stop();
            }
        }
    }
    updateFriendshipEndingCutscene(dt) {
        this.camera.setCinematicBar(1);
    }
    updateWindowEndingCutscene(dt) {
        this.windowCutsceneTime += dt;
        if (!this.windowEndingTriggered && this.windowCutsceneTime > constants_1.WINDOW_ENDING_CUTSCENE_DURATION + constants_1.WINDOW_ENDING_FADE_DURATION) {
            this.windowEndingTriggered = true;
            this.game.campaign.getQuest(Quests_1.QuestKey.E).finish();
            this.gameOver();
        }
        this.windowEndingTexts.forEach((t, index) => {
            if (this.windowCutsceneTime / constants_1.WINDOW_ENDING_CUTSCENE_DURATION > t.enter) {
                const fadeTime = 0.5;
                const enterTime = constants_1.WINDOW_ENDING_CUTSCENE_DURATION * t.enter;
                const alpha = Math.max(0, Math.min(1, (this.windowCutsceneTime - enterTime) / fadeTime));
                const measure = GameScene.font.measureText(t.label);
                this.renderer.add({
                    type: Renderer_1.RenderingType.TEXT, layer: Renderer_1.RenderingLayer.UI, textColor: "white", relativeToScreen: true, alpha,
                    text: t.label, position: {
                        x: (constants_1.GAME_CANVAS_WIDTH / 2) - (measure.width / 2),
                        y: measure.height * index + (index * 3) + 50
                    }, asset: GameScene.font,
                });
            }
        });
    }
    updatePettingEndingCutscene(dt) {
        this.pettingCutsceneTime += dt;
        if (!this.pettingEndingTriggered && this.pettingCutsceneTime > constants_1.PETTING_ENDING_CUTSCENE_DURATION + constants_1.PETTING_ENDING_FADE_DURATION) {
            this.pettingEndingTriggered = true;
            this.game.campaign.getQuest(Quests_1.QuestKey.D).finish();
            this.gameOver();
        }
        this.petEndingTexts.forEach((t, index) => {
            if (this.pettingCutsceneTime / constants_1.PETTING_ENDING_CUTSCENE_DURATION > t.enter) {
                const fadeTime = 0.5;
                const enterTime = constants_1.PETTING_ENDING_CUTSCENE_DURATION * t.enter;
                const yOffset = Math.pow((this.pettingCutsceneTime - enterTime) / 2, 2) * -1;
                const alpha = Math.max(0, Math.min(1, (this.pettingCutsceneTime - enterTime) / fadeTime));
                const measure = GameScene.font.measureText(t.label);
                this.renderer.add({
                    type: Renderer_1.RenderingType.TEXT, layer: Renderer_1.RenderingLayer.UI, textColor: "white", relativeToScreen: true, alpha,
                    text: t.label, position: {
                        x: (constants_1.GAME_CANVAS_WIDTH / 2) - (measure.width / 2),
                        //y: measure.height * index + (index * 3) + 20
                        y: 100 + yOffset
                    }, asset: GameScene.font,
                });
            }
        });
    }
    drawApocalypseOverlay(ctx) {
        this.updateApocalypse();
        this.camera.setCinematicBar(this.apocalypseFactor);
        this.renderer.add({
            type: Renderer_1.RenderingType.RECT,
            layer: Renderer_1.RenderingLayer.FULLSCREEN_FX,
            position: { x: 0, y: 0 },
            fillColor: "darkred",
            globalCompositeOperation: "color",
            alpha: 0.7 * this.apocalypseFactor,
            relativeToScreen: true,
            dimension: { width: ctx.canvas.width, height: ctx.canvas.height }
        });
    }
    drawFade(ctx, alpha, color = "black") {
        this.renderer.add({
            type: Renderer_1.RenderingType.RECT,
            layer: Renderer_1.RenderingLayer.FULLSCREEN_FX,
            position: { x: 0, y: 0 },
            fillColor: color,
            alpha,
            relativeToScreen: true,
            dimension: { width: ctx.canvas.width, height: ctx.canvas.height }
        });
    }
    loadApocalypse() {
        this.fireEffects = [1, 2].map(num => new FireGfx_1.FireGfx(32, 24, true, 2));
        this.fireEmitter = this.particles.createEmitter({
            position: { x: this.player.x, y: this.player.y },
            offset: () => ({ x: util_1.rnd(-1, 1) * 300, y: 200 }),
            velocity: () => ({ x: 0, y: -25 }),
            color: () => util_1.rndItem(this.fireEffects).getImage(),
            size: () => util_1.rnd(16, 32),
            gravity: { x: -10, y: -30 },
            lifetime: () => util_1.rnd(5, 15),
            alpha: 1,
            breakFactor: 0.9,
            alphaCurve: Particles_1.valueCurves.cos(0.2, 0.1),
            update: particle => {
                if (this.world.collidesWith(particle.x, particle.y - particle.size / 4)) {
                    particle.vx = 0;
                    particle.vy = 0;
                }
            }
        });
    }
    beginWindowEnding() {
        this.windowCutscene = true;
        this.player.setControllable(false);
        this.fadeToBlackDirection = FadeDirection.FADE_OUT;
        this.fadeToBlackStartTime = this.gameTime + constants_1.WINDOW_ENDING_CUTSCENE_DURATION;
        this.fadeToBlackEndTime = this.fadeToBlackStartTime + (constants_1.WINDOW_ENDING_FADE_DURATION);
        const target = this.pointsOfInterest.find(poi => poi.name === "windowzoomtarget");
        if (target) {
            this.camera.focusOn(constants_1.WINDOW_ENDING_CUTSCENE_DURATION + constants_1.PETTING_ENDING_FADE_DURATION, target.x, this.camera.y, 1, 0, Particles_1.valueCurves.cubic);
        }
    }
    beginPetEnding() {
        this.pettingCutscene = true;
        this.player.startPettingDog();
        this.shiba.startBeingPetted();
        this.fadeToBlackDirection = FadeDirection.FADE_OUT;
        this.fadeToBlackStartTime = this.gameTime + constants_1.PETTING_ENDING_CUTSCENE_DURATION;
        this.fadeToBlackEndTime = this.fadeToBlackStartTime + (constants_1.PETTING_ENDING_FADE_DURATION);
        this.playBackgroundTrack(BgmId.ECSTASY);
    }
    cancelPatEnding() {
        if (this.canCancelPatEnding()) {
            this.pettingCutscene = false;
            this.pettingCutsceneTime = 0;
            this.player.stopPettingDog();
            this.shiba.stopBeingPetted();
            this.fadeToBlackEndTime = 0;
            this.fadeToBlackStartTime = 0;
            this.fadeToBlackFactor = 0;
            this.playBackgroundTrack(BgmId.OVERWORLD);
        }
    }
    canCancelPatEnding() {
        return this.pettingCutsceneTime < constants_1.PETTING_ENDING_CUTSCENE_DURATION + constants_1.PETTING_ENDING_FADE_DURATION;
    }
    beginFriendshipEnding() {
        this.friendshipCutscene = true;
        this.shiba.setState(Shiba_1.ShibaState.ON_MOUNTAIN);
        this.shiba.nextState();
        const playerTargetPos = this.pointsOfInterest.find(poi => poi.name === "friendship_player_position");
        if (!playerTargetPos) {
            throw new Error("cannot initiate friendship ending because some points of interest are missing");
        }
        this.player.startAutoMove(playerTargetPos.x, true);
        this.player.setControllable(false);
    }
    beginApocalypse() {
        this.apocalypse = true;
        this.world.stopRain();
        const bossPosition = this.pointsOfInterest.find(poi => poi.name === "boss_spawn");
        const cloudPositions = this.pointsOfInterest.filter(poi => poi.name === "bosscloud");
        if (bossPosition && cloudPositions.length > 0) {
            cloudPositions.forEach(pos => {
                const cloud = new Cloud_1.Cloud(this, pos.x, pos.y, {
                    velocity: 0,
                    distance: 1
                }, true);
                this.gameObjects.push(cloud);
            });
            // Teleport player and fire to boss spawn position
            this.player.x = bossPosition.x - 36;
            this.player.y = bossPosition.y;
            this.player.removePowerUps();
            this.player.enableRainDance();
            this.fire.x = bossPosition.x;
            this.fire.y = bossPosition.y;
            this.camera.setBounds(this.player.getCurrentMapBounds());
            // Some helpful thoughts
            setTimeout(() => this.player.think("This is not over…", 2000), 9000);
            setTimeout(() => this.player.think("There's still something I can do.", 4000), 12000);
        }
        else {
            throw new Error("Cannot begin apocalypse because boss_spawn or bosscloud trigger is missing in map.");
        }
    }
    togglePause(paused = !this.paused) {
        this.paused = paused;
    }
    pause() {
        this.muteMusic();
        Menu_1.MenuList.pause.stop();
        Menu_1.MenuList.pause.play();
        this.togglePause(true);
    }
    resume() {
        this.resetMusicVolumes();
        this.togglePause(false);
    }
}
tslib_1.__decorate([
    Assets_1.asset("music/theme_01.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgm1", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/inferno.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgm2", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/cave.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgmCave", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/riddle.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgmRiddle", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/radio.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgmRadio", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/ecstasy.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgmEcstasy", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/wings.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgmWings", void 0);
tslib_1.__decorate([
    Assets_1.asset("music/awake.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "bgmAwake", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/ambient/stream.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "ambientStream", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/ambient/wind.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "ambientWind", void 0);
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], GameScene, "font", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/ending/swell.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "swell", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/gate/wrong.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GameScene, "wrong", void 0);
exports.GameScene = GameScene;


/***/ }),

/***/ "./lib/scenes/GotItemScene.js":
/*!************************************!*\
  !*** ./lib/scenes/GotItemScene.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GotItemScene = exports.Item = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const SlideTransition_1 = __webpack_require__(/*! ../transitions/SlideTransition */ "./lib/transitions/SlideTransition.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const ImageNode_1 = __webpack_require__(/*! ../scene/ImageNode */ "./lib/scene/ImageNode.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const AsepriteNode_1 = __webpack_require__(/*! ../scene/AsepriteNode */ "./lib/scene/AsepriteNode.js");
const SceneNode_1 = __webpack_require__(/*! ../scene/SceneNode */ "./lib/scene/SceneNode.js");
const TextNode_1 = __webpack_require__(/*! ../scene/TextNode */ "./lib/scene/TextNode.js");
var Item;
(function (Item) {
    Item[Item["RUNNING"] = 0] = "RUNNING";
    Item[Item["DOUBLEJUMP"] = 1] = "DOUBLEJUMP";
    Item[Item["MULTIJUMP"] = 2] = "MULTIJUMP";
    Item[Item["RAINDANCE"] = 3] = "RAINDANCE";
    Item[Item["FRIENDSHIP"] = 4] = "FRIENDSHIP";
})(Item = exports.Item || (exports.Item = {}));
class GotItemScene extends Scene_1.Scene {
    constructor() {
        super(...arguments);
        this.floatAmount = 3;
        this.floatSpeed = 4;
        this.titles = [
            "Fear of the Dark",
            "Double-Jump Boots",
            "Flying Wings Knock-off",
            "Dancing Dave",
            "Eternal Friendship"
        ];
        this.subtitles = [
            [
                "Run and never look back",
                "An exceptional ally",
                "There is something in that dark corner"
            ],
            [
                "Not suitable for step dancing",
                "An all-time classic",
                "Still in mint condition",
                "Even work without wearing them",
                "Why would a tree have those?"
            ],
            [
                "Birds love it!",
                "Feels like cheating",
                "Free stuff is the best",
                "M-m-m-multi-jump"
            ],
            [
                "Like tears in the rain"
            ],
            [
                "Dogs are the best!",
                "What might this be good for?",
                "Powered by unconditional love",
                "Nothing can stop us!"
            ]
        ];
    }
    setup(item) {
        GotItemScene.sound.setVolume(0.7);
        GotItemScene.sound.play();
        this.inTransition = new SlideTransition_1.SlideTransition({ duration: .5, direction: "bottom", easing: easings_1.easeOutExpo });
        this.outTransition = new SlideTransition_1.SlideTransition({ duration: .5, direction: "bottom", easing: easings_1.easeInExpo });
        const subtitle = "“" + this.subtitles[item][Math.floor(Math.random() * this.subtitles[item].length)] + "”";
        const image = GotItemScene.itemImages[item];
        // The powerup name
        new TextNode_1.TextNode({
            font: GotItemScene.headlineFont,
            text: this.titles[item],
            x: this.game.width >> 1,
            y: (this.game.height >> 1) + 17,
            color: "white"
        }).appendTo(this.rootNode);
        // The powerup subtitle
        new TextNode_1.TextNode({
            font: GotItemScene.font,
            text: subtitle,
            color: "white",
            x: this.game.width >> 1,
            y: (this.game.height >> 1) + 36
        }).appendTo(this.rootNode);
        // The power up image bobbling up and down
        new SceneNode_1.SceneNode({
            x: this.game.width >> 1,
            y: this.game.height >> 1
        }).animate({
            animator: node => node.transform(m => m.setScale(2).translateY(Math.sin(Date.now() / 1000
                * this.floatSpeed) * this.floatAmount)),
            duration: Infinity
        }).appendChild(image instanceof HTMLImageElement
            ? new ImageNode_1.ImageNode({ image, anchor: Direction_1.Direction.BOTTOM })
            : new AsepriteNode_1.AsepriteNode({ aseprite: image, tag: "idle", anchor: Direction_1.Direction.BOTTOM })).appendTo(this.rootNode);
    }
    activate() {
        // Close this scene after 4 seconds
        setTimeout(() => this.scenes.popScene(), 4000);
    }
    cleanup() {
        this.rootNode.clear();
    }
    draw(ctx, width, height) {
        ctx.save();
        ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
        ctx.fillRect(0, (height >> 1) - 1, width, 50);
        ctx.restore();
        super.draw(ctx, width, height);
    }
}
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], GotItemScene, "font", void 0);
tslib_1.__decorate([
    Assets_1.asset("fonts/headline.font.json"),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], GotItemScene, "headlineFont", void 0);
tslib_1.__decorate([
    Assets_1.asset("sounds/item/fanfare.mp3"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], GotItemScene, "sound", void 0);
tslib_1.__decorate([
    Assets_1.asset([
        "sprites/powerup_running.png",
        "sprites/powerup_doublejump.png",
        "sprites/powerup_multijump.png",
        "sprites/powerup_raindance.png",
        "sprites/powerup_friendship.aseprite.json"
    ]),
    tslib_1.__metadata("design:type", Array)
], GotItemScene, "itemImages", void 0);
exports.GotItemScene = GotItemScene;


/***/ }),

/***/ "./lib/scenes/LoadingScene.js":
/*!************************************!*\
  !*** ./lib/scenes/LoadingScene.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadingScene = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const TitleScene_1 = __webpack_require__(/*! ./TitleScene */ "./lib/scenes/TitleScene.js");
const ProgressBarNode_1 = __webpack_require__(/*! ../scene/ProgressBarNode */ "./lib/scene/ProgressBarNode.js");
class LoadingScene extends Scene_1.Scene {
    setup() {
        this.progressBar = new ProgressBarNode_1.ProgressBarNode({
            x: this.game.width >> 1,
            y: this.game.height >> 1
        }).appendTo(this.rootNode);
    }
    cleanup() {
        this.rootNode.clear();
    }
    activate() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.game.assets.load(this.updateProgress.bind(this));
            this.game.scenes.setScene(TitleScene_1.TitleScene);
        });
    }
    updateProgress(total, loaded) {
        if (loaded < total) {
            this.progressBar.setProgress(loaded / total);
        }
        else {
            this.progressBar.remove();
        }
    }
}
exports.LoadingScene = LoadingScene;


/***/ }),

/***/ "./lib/scenes/PauseScene.js":
/*!**********************************!*\
  !*** ./lib/scenes/PauseScene.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PauseScene = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const ControlsScene_1 = __webpack_require__(/*! ./ControlsScene */ "./lib/scenes/ControlsScene.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const Menu_1 = __webpack_require__(/*! ../Menu */ "./lib/Menu.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const SlideTransition_1 = __webpack_require__(/*! ../transitions/SlideTransition */ "./lib/transitions/SlideTransition.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const TitleScene_1 = __webpack_require__(/*! ./TitleScene */ "./lib/scenes/TitleScene.js");
const TextNode_1 = __webpack_require__(/*! ../scene/TextNode */ "./lib/scene/TextNode.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
var MenuItemKey;
(function (MenuItemKey) {
    MenuItemKey["RESUME"] = "resume";
    MenuItemKey["CONTROLS"] = "controls";
    MenuItemKey["EXIT"] = "exit";
})(MenuItemKey || (MenuItemKey = {}));
class PauseScene extends Scene_1.Scene {
    cleanup() {
        this.rootNode.clear();
    }
    setup() {
        this.setBackgroundStyle("rgba(0, 0, 0, 0.8)");
        this.inTransition = new SlideTransition_1.SlideTransition({ duration: 1, direction: "top", easing: easings_1.easeOutBounce });
        this.outTransition = new SlideTransition_1.SlideTransition({ duration: 0.25 });
        PauseScene.music.setLoop(true);
        PauseScene.music.setVolume(0.5);
        PauseScene.music.play();
        new TextNode_1.TextNode({
            font: PauseScene.headlineFont,
            text: "GAME PAUSED",
            color: "white",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 75,
            y: 100
        }).appendTo(this.rootNode);
        new TextNode_1.TextNode({
            font: PauseScene.font,
            text: util_1.isDev() ? "DEVELOPMENT VERSION" : PauseScene.appInfo.version,
            color: "white",
            anchor: Direction_1.Direction.BOTTOM_RIGHT,
            x: this.game.width - 7,
            y: this.game.height - 4,
            opacity: 0.6
        }).appendTo(this.rootNode);
        this.menu = new Menu_1.MenuList().appendTo(this.rootNode).setItems(new Menu_1.MenuItem(MenuItemKey.RESUME, "Resume", PauseScene.font, "white", 75, 130), new Menu_1.MenuItem(MenuItemKey.CONTROLS, "Controls and Options", PauseScene.font, "white", 75, 145), new Menu_1.MenuItem(MenuItemKey.EXIT, "Back to title", PauseScene.font, "white", 75, 160));
    }
    activate() {
        this.input.onButtonDown.connect(this.handleButtonDown, this);
        this.menu.onActivated.connect(this.handleMenuAction, this);
    }
    deactivate() {
        this.input.onButtonDown.disconnect(this.handleButtonDown, this);
        this.menu.onActivated.disconnect(this.handleMenuAction, this);
    }
    handleMenuAction(buttonId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            switch (buttonId) {
                case MenuItemKey.RESUME:
                    PauseScene.music.stop();
                    this.scenes.popScene();
                    break;
                case MenuItemKey.CONTROLS:
                    this.game.scenes.pushScene(ControlsScene_1.ControlsScene);
                    break;
                case MenuItemKey.EXIT:
                    PauseScene.music.stop();
                    yield this.game.scenes.popScene({ noTransition: true });
                    this.game.scenes.setScene(TitleScene_1.TitleScene);
                    break;
            }
        });
    }
    handleButtonDown(event) {
        if (event.isAbort || event.isPause) {
            PauseScene.music.stop();
            this.scenes.popScene();
        }
        else if (event.isConfirm) {
            this.menu.executeAction();
        }
        else if (event.isMenuUp) {
            this.menu.prev();
        }
        else if (event.isMenuDown) {
            this.menu.next();
        }
    }
}
tslib_1.__decorate([
    Assets_1.asset("music/pause.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], PauseScene, "music", void 0);
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], PauseScene, "font", void 0);
tslib_1.__decorate([
    Assets_1.asset("fonts/headline.font.json"),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], PauseScene, "headlineFont", void 0);
tslib_1.__decorate([
    Assets_1.asset("appinfo.json"),
    tslib_1.__metadata("design:type", Object)
], PauseScene, "appInfo", void 0);
exports.PauseScene = PauseScene;


/***/ }),

/***/ "./lib/scenes/PowerShiba.js":
/*!**********************************!*\
  !*** ./lib/scenes/PowerShiba.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var PowerShiba_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PowerShiba = exports.PowerShibaState = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const Conversation_1 = __webpack_require__(/*! ../Conversation */ "./lib/Conversation.js");
const Entity_1 = __webpack_require__(/*! ../Entity */ "./lib/Entity.js");
const GameScene_1 = __webpack_require__(/*! ./GameScene */ "./lib/scenes/GameScene.js");
const NPC_1 = __webpack_require__(/*! ../entities/NPC */ "./lib/entities/NPC.js");
const powershiba1_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../assets/dialog/powershiba1.dialog.json */ "./assets/dialog/powershiba1.dialog.json"));
const powershiba3_dialog_json_1 = tslib_1.__importDefault(__webpack_require__(/*! ../../assets/dialog/powershiba3.dialog.json */ "./assets/dialog/powershiba3.dialog.json"));
const Renderer_1 = __webpack_require__(/*! ../Renderer */ "./lib/Renderer.js");
var PowerShibaState;
(function (PowerShibaState) {
    PowerShibaState[PowerShibaState["IN_CLOUDS"] = 0] = "IN_CLOUDS";
    PowerShibaState[PowerShibaState["ON_MOUNTAIN"] = 1] = "ON_MOUNTAIN";
    PowerShibaState[PowerShibaState["CONSUMED"] = 2] = "CONSUMED";
})(PowerShibaState = exports.PowerShibaState || (exports.PowerShibaState = {}));
let PowerShiba = PowerShiba_1 = class PowerShiba extends NPC_1.NPC {
    constructor(scene, x, y) {
        super(scene, x, y, 22, 22);
        this.state = PowerShibaState.IN_CLOUDS;
        this.floatAmount = 4;
        this.floatSpeed = 2;
        this.conversation = new Conversation_1.Conversation(powershiba1_dialog_json_1.default, this);
    }
    nextState() {
        this.state++;
        if (this.state === PowerShibaState.ON_MOUNTAIN) {
            const spawn = this.scene.pointsOfInterest.find(poi => poi.name === "powershiba_mountain_spawn");
            if (!spawn)
                throw new Error("PowerShiba mountain spawn missing");
            this.floatSpeed = 2;
            this.floatAmount = 4;
            this.x = spawn.x;
            this.y = spawn.y;
            this.conversation = new Conversation_1.Conversation(powershiba3_dialog_json_1.default, this);
        }
    }
    showDialoguePrompt() {
        if (!super.showDialoguePrompt())
            return false;
        else if (Conversation_1.Conversation.getGlobals()["$gaveBoneToPowerShiba"] && !Conversation_1.Conversation.getGlobals()["$seedgrown"])
            return true;
        else if (Conversation_1.Conversation.getGlobals()["$gaveBoneToPowerShiba"] && Conversation_1.Conversation.getGlobals()["$seedgrown"] && !Conversation_1.Conversation.getGlobals()["$gotPowerShibaQuest"])
            return true;
        else if (this.state === PowerShibaState.ON_MOUNTAIN)
            return true;
        return false;
    }
    feed() {
        this.floatSpeed = 3;
        this.floatAmount = 5;
        this.scene.game.campaign.runAction("giveBone");
        this.think("Oh… I remember…", 3000);
    }
    draw(ctx) {
        const floatOffsetY = Math.sin(this.timeAlive * this.floatSpeed) * this.floatAmount;
        this.scene.renderer.addAseprite(PowerShiba_1.sprite, "idle", this.x, this.y - floatOffsetY, Renderer_1.RenderingLayer.ENTITIES);
        if (this.scene.showBounds)
            this.drawBounds();
        if (this.showDialoguePrompt()) {
            this.drawDialoguePrompt();
        }
        if (this.thinkBubble) {
            this.thinkBubble.draw(ctx);
        }
        this.speechBubble.draw(ctx);
    }
    update(dt) {
        super.update(dt);
        this.dialoguePrompt.update(dt, this.x, this.y + 16);
        this.speechBubble.update(this.x, this.y);
        if (this.thinkBubble) {
            this.thinkBubble.update(this.x, this.y);
        }
    }
};
tslib_1.__decorate([
    Assets_1.asset("sprites/powershiba.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], PowerShiba, "sprite", void 0);
PowerShiba = PowerShiba_1 = tslib_1.__decorate([
    Entity_1.entity("powershiba"),
    tslib_1.__metadata("design:paramtypes", [GameScene_1.GameScene, Number, Number])
], PowerShiba);
exports.PowerShiba = PowerShiba;


/***/ }),

/***/ "./lib/scenes/TitleScene.js":
/*!**********************************!*\
  !*** ./lib/scenes/TitleScene.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TitleScene = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Aseprite_1 = __webpack_require__(/*! ../Aseprite */ "./lib/Aseprite.js");
const Assets_1 = __webpack_require__(/*! ../Assets */ "./lib/Assets.js");
const BitmapFont_1 = __webpack_require__(/*! ../BitmapFont */ "./lib/BitmapFont.js");
const ControlsScene_1 = __webpack_require__(/*! ./ControlsScene */ "./lib/scenes/ControlsScene.js");
const CreditsScene_1 = __webpack_require__(/*! ./CreditsScene */ "./lib/scenes/CreditsScene.js");
const CurtainTransition_1 = __webpack_require__(/*! ../transitions/CurtainTransition */ "./lib/transitions/CurtainTransition.js");
const constants_1 = __webpack_require__(/*! ../constants */ "./lib/constants.js");
const easings_1 = __webpack_require__(/*! ../easings */ "./lib/easings.js");
const FadeTransition_1 = __webpack_require__(/*! ../transitions/FadeTransition */ "./lib/transitions/FadeTransition.js");
const util_1 = __webpack_require__(/*! ../util */ "./lib/util.js");
const Menu_1 = __webpack_require__(/*! ../Menu */ "./lib/Menu.js");
const Scene_1 = __webpack_require__(/*! ../Scene */ "./lib/Scene.js");
const Sound_1 = __webpack_require__(/*! ../Sound */ "./lib/Sound.js");
const CharacterSelectionScene_1 = __webpack_require__(/*! ./CharacterSelectionScene */ "./lib/scenes/CharacterSelectionScene.js");
const AsepriteNode_1 = __webpack_require__(/*! ../scene/AsepriteNode */ "./lib/scene/AsepriteNode.js");
const Direction_1 = __webpack_require__(/*! ../geom/Direction */ "./lib/geom/Direction.js");
const ImageNode_1 = __webpack_require__(/*! ../scene/ImageNode */ "./lib/scene/ImageNode.js");
const SceneNode_1 = __webpack_require__(/*! ../scene/SceneNode */ "./lib/scene/SceneNode.js");
const GlobalState_1 = __webpack_require__(/*! ../GlobalState */ "./lib/GlobalState.js");
const Quests_1 = __webpack_require__(/*! ../Quests */ "./lib/Quests.js");
var MenuItemKey;
(function (MenuItemKey) {
    MenuItemKey["START"] = "start";
    MenuItemKey["CONTROLS"] = "controls";
    MenuItemKey["CREDITS"] = "credits";
    MenuItemKey["EXIT"] = "exit";
})(MenuItemKey || (MenuItemKey = {}));
const MenuLabels = {
    [MenuItemKey.START]: { label: "Start Game" },
    [MenuItemKey.CONTROLS]: { label: "Controls and Options" },
    [MenuItemKey.CREDITS]: { label: "Credits" },
    [MenuItemKey.EXIT]: { label: "Exit Game", electronOnly: true },
};
class TitleScene extends Scene_1.Scene {
    constructor() {
        super(...arguments);
        this.animationDuration = 3;
        this.titleBasePosition = {
            x: this.game.width / 2 - TitleScene.logoImage.width / 2,
            y: 60
        };
        this.titleLayer1Position = { x: 0, y: 70 };
        this.titleLayer2Position = { x: 0, y: 163 };
        this.titleLayer3Position = { x: 0, y: -125 };
        this.menuBasePosition = {
            x: this.game.width / 2,
            y: 190,
            gap: 15,
        };
    }
    cleanup() {
        this.rootNode.clear();
    }
    setup() {
        this.zIndex = 1;
        this.inTransition = new FadeTransition_1.FadeTransition();
        this.outTransition = new CurtainTransition_1.CurtainTransition({ easing: easings_1.easeInSine });
        // The sky background layer
        new AsepriteNode_1.AsepriteNode({
            id: "titleLayer3",
            aseprite: TitleScene.titleLayer3,
            tag: "idle",
            x: this.titleLayer3Position.x,
            y: this.titleLayer3Position.y,
            anchor: Direction_1.Direction.TOP_LEFT
        }).animate({
            animator: (node, value) => node.setY(this.titleLayer3Position.y + (1 - value) * 100),
            duration: this.animationDuration,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        // The background layer with the sea animated to move in from the bottom
        new AsepriteNode_1.AsepriteNode({
            id: "titleLayer2",
            aseprite: TitleScene.titleLayer2,
            tag: "idle",
            x: this.titleLayer2Position.x,
            y: this.titleLayer2Position.y,
            anchor: Direction_1.Direction.TOP_LEFT
        }).animate({
            animator: (node, value) => node.setY(this.titleLayer2Position.y + (1 - value) * 200),
            duration: this.animationDuration,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        // The two floating islands in the background animated to moving in from the bottom
        new SceneNode_1.SceneNode().appendChild(new AsepriteNode_1.AsepriteNode({
            id: "titleIsland1",
            aseprite: TitleScene.titleIsland1,
            tag: "idle",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 90,
            y: 168
        })).appendChild(new AsepriteNode_1.AsepriteNode({
            id: "titleIsland2",
            aseprite: TitleScene.titleIsland2,
            tag: "idle",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 323,
            y: 178
        })).animate({
            animator: (node, value) => node.setY((1 - value) * 250),
            duration: this.animationDuration,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        // The girl standing on the ground animated to move in from the bottom
        new AsepriteNode_1.AsepriteNode({
            id: "person",
            aseprite: TitleScene.person,
            tag: "idle",
            x: 22,
            y: 155,
            anchor: Direction_1.Direction.TOP_LEFT
        }).animate({
            animator: (node, value) => node.setY(155 + (1 - value) * 330),
            duration: this.animationDuration,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        // The ground layer animated to move in from the bottom
        new AsepriteNode_1.AsepriteNode({
            id: "titleLayer1",
            aseprite: TitleScene.titleLayer1,
            tag: "idle",
            x: this.titleLayer1Position.x,
            y: this.titleLayer1Position.y,
            anchor: Direction_1.Direction.TOP_LEFT
        }).animate({
            animator: (node, value) => node.setY(this.titleLayer1Position.y + (1 - value) * 300),
            duration: this.animationDuration,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        // The title text with flame icon fading in and moving to the top
        new SceneNode_1.SceneNode({
            opacity: 0,
            x: this.titleBasePosition.x,
            y: this.titleBasePosition.y
        }).appendChild(new AsepriteNode_1.AsepriteNode({
            id: "flameicon",
            aseprite: TitleScene.flameicon,
            tag: "idle",
            anchor: Direction_1.Direction.TOP_LEFT,
            x: 147,
            y: -10
        })).appendChild(new ImageNode_1.ImageNode({
            id: "logoImage",
            image: TitleScene.logoImage,
            anchor: Direction_1.Direction.TOP_LEFT
        })).animate({
            animator: (node, value) => node.setY(this.titleBasePosition.y - 10 + 150 * (1 - value)),
            duration: this.animationDuration,
            easing: easings_1.easeOutQuad
        }).animate({
            animator: (node, value) => node.setOpacity(value),
            delay: this.animationDuration / 2,
            duration: this.animationDuration / 2,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        this.menu = new Menu_1.MenuList({
            id: "menu",
            opacity: 0,
            align: Menu_1.MenuAlignment.CENTER
        }).animate({
            animator: (node, value) => node.setOpacity(value),
            delay: 2.5,
            duration: 0.5,
            easing: easings_1.easeOutQuad
        }).appendTo(this.rootNode);
        if (GlobalState_1.GlobalState.getHasBeatenGame()) {
            new SceneNode_1.SceneNode({
                opacity: 0,
                x: 118,
                y: 108,
            })
                .appendChild(this.addEndingCard(0, Quests_1.QuestKey.A))
                .appendChild(this.addEndingCard(1, Quests_1.QuestKey.B))
                .appendChild(this.addEndingCard(2, Quests_1.QuestKey.C))
                .appendChild(this.addEndingCard(3, Quests_1.QuestKey.D))
                .appendChild(this.addEndingCard(4, Quests_1.QuestKey.E))
                .animate({
                animator: (node, value) => node.setOpacity(value),
                delay: 2.5,
                duration: 0.5,
                easing: easings_1.easeOutQuad
            }).appendTo(this.rootNode);
        }
        Object.values(MenuItemKey).forEach((key, index) => {
            if (!MenuLabels[key].electronOnly || (util_1.isElectron() || window.opener)) {
                this.menu.addItems(new Menu_1.MenuItem(key, MenuLabels[key].label, TitleScene.font, "white", this.menuBasePosition.x, this.menuBasePosition.y + this.menuBasePosition.gap * index));
            }
        });
    }
    animationIsDone() {
        return !this.rootNode.hasAnimations();
    }
    finishAnimation() {
        this.rootNode.finishAnimations();
    }
    addEndingCard(index, key) {
        let tag = "";
        switch (key) {
            case Quests_1.QuestKey.A:
                tag = "a_";
                break;
            case Quests_1.QuestKey.B:
                tag = "b_";
                break;
            case Quests_1.QuestKey.C:
                tag = "c_";
                break;
            case Quests_1.QuestKey.D:
                tag = "d_";
                break;
            case Quests_1.QuestKey.E:
                tag = "e_";
                break;
        }
        const isAchieved = GlobalState_1.GlobalState.getAchievedEndings().includes(key);
        tag += isAchieved ? "on" : "off";
        return new AsepriteNode_1.AsepriteNode({
            id: `endingCard_${key}`,
            aseprite: TitleScene.endingCards,
            tag,
            anchor: Direction_1.Direction.TOP_LEFT,
            x: index * 40 + (index * 10),
            y: 0
        });
    }
    handleMenuAction(buttonId) {
        switch (buttonId) {
            case MenuItemKey.START:
                // this.stopMusicTrack();
                this.game.scenes.pushScene(CharacterSelectionScene_1.CharacterSelectionScene);
                // this.game.scenes.setScene(GameScene);
                break;
            case MenuItemKey.CONTROLS:
                this.game.scenes.pushScene(ControlsScene_1.ControlsScene);
                break;
            case MenuItemKey.CREDITS:
                this.stopMusicTrack();
                this.game.scenes.pushScene(CreditsScene_1.CreditsScene);
                break;
            case MenuItemKey.EXIT:
                window.close();
                break;
        }
    }
    activate() {
        this.input.onButtonDown.connect(this.handleButtonDown, this);
        this.menu.onActivated.connect(this.handleMenuAction, this);
        this.playMusicTrack();
    }
    deactivate() {
        this.input.onButtonDown.disconnect(this.handleButtonDown, this);
        this.menu.onActivated.disconnect(this.handleMenuAction, this);
    }
    handleButtonDown(event) {
        if (this.animationIsDone()) {
            if (event.isConfirm) {
                this.menu.executeAction();
            }
            else if (event.isMenuUp) {
                this.menu.prev();
            }
            else if (event.isMenuDown) {
                this.menu.next();
            }
        }
        else {
            if (event.isConfirm) {
                this.finishAnimation();
            }
        }
    }
    stopMusicTrack() {
        TitleScene.music.stop();
    }
    playMusicTrack() {
        TitleScene.music.setLoop(true);
        TitleScene.music.setVolume(0.30);
        TitleScene.music.play();
    }
}
tslib_1.__decorate([
    Assets_1.asset("music/cerulean-expanse.ogg"),
    tslib_1.__metadata("design:type", Sound_1.Sound)
], TitleScene, "music", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/title/layer1.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "titleLayer1", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/title/layer2.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "titleLayer2", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/title/island1.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "titleIsland1", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/title/island2.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "titleIsland2", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/title/layer3.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "titleLayer3", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/title/person.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "person", void 0);
tslib_1.__decorate([
    Assets_1.asset("images/logo.png"),
    tslib_1.__metadata("design:type", HTMLImageElement)
], TitleScene, "logoImage", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/flameicon.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "flameicon", void 0);
tslib_1.__decorate([
    Assets_1.asset("sprites/ending_cards.aseprite.json"),
    tslib_1.__metadata("design:type", Aseprite_1.Aseprite)
], TitleScene, "endingCards", void 0);
tslib_1.__decorate([
    Assets_1.asset(constants_1.DIALOG_FONT),
    tslib_1.__metadata("design:type", BitmapFont_1.BitmapFont)
], TitleScene, "font", void 0);
exports.TitleScene = TitleScene;


/***/ }),

/***/ "./lib/transitions/CurtainTransition.js":
/*!**********************************************!*\
  !*** ./lib/transitions/CurtainTransition.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CurtainTransition = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Transition_1 = __webpack_require__(/*! ../Transition */ "./lib/Transition.js");
class CurtainTransition extends Transition_1.Transition {
    constructor(_a) {
        var { direction = "horizontal" } = _a, options = tslib_1.__rest(_a, ["direction"]);
        super(options);
        this.direction = direction;
    }
    draw(ctx, draw, width, height) {
        const value = this.valueOf();
        if (this.direction === "horizontal") {
            // Draw left half
            ctx.save();
            ctx.translate(Math.round(-width * value / 2), 0);
            ctx.beginPath();
            ctx.rect(0, 0, Math.round(width / 2), height);
            ctx.clip();
            draw();
            ctx.restore();
            // Draw right half
            ctx.save();
            ctx.translate(Math.round(width * value / 2), 0);
            ctx.beginPath();
            ctx.rect(Math.round(width / 2), 0, Math.round(width), height);
            ctx.clip();
            draw();
            ctx.restore();
        }
        else if (this.direction === "vertical") {
            // Draw upper half
            ctx.save();
            ctx.translate(0, Math.round(-height * value / 2));
            ctx.beginPath();
            ctx.rect(0, 0, width, Math.round(height / 2));
            ctx.clip();
            draw();
            ctx.restore();
            // Draw lower half
            ctx.save();
            ctx.translate(0, Math.round(height * value / 2));
            ctx.beginPath();
            ctx.rect(0, Math.round(height / 2), width, Math.round(height / 2));
            ctx.clip();
            draw();
            ctx.restore();
        }
    }
}
exports.CurtainTransition = CurtainTransition;


/***/ }),

/***/ "./lib/transitions/FadeTransition.js":
/*!*******************************************!*\
  !*** ./lib/transitions/FadeTransition.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.FadeTransition = void 0;
const Transition_1 = __webpack_require__(/*! ../Transition */ "./lib/Transition.js");
class FadeTransition extends Transition_1.Transition {
    draw(ctx, draw) {
        ctx.globalAlpha = 1 - this.valueOf();
        draw();
    }
}
exports.FadeTransition = FadeTransition;


/***/ }),

/***/ "./lib/transitions/SlideTransition.js":
/*!********************************************!*\
  !*** ./lib/transitions/SlideTransition.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SlideTransition = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const Transition_1 = __webpack_require__(/*! ../Transition */ "./lib/Transition.js");
class SlideTransition extends Transition_1.Transition {
    constructor(_a = {}) {
        var { direction = "top" } = _a, options = tslib_1.__rest(_a, ["direction"]);
        super(options);
        this.direction = direction;
    }
    draw(ctx, draw, width, height) {
        const value = this.valueOf();
        if (this.direction === "top") {
            ctx.translate(0, -height * value);
        }
        else if (this.direction === "bottom") {
            ctx.translate(0, height * value);
        }
        else if (this.direction === "left") {
            ctx.translate(-width * value, 0);
        }
        else if (this.direction === "right") {
            ctx.translate(width * value, 0);
        }
        draw();
    }
}
exports.SlideTransition = SlideTransition;


/***/ }),

/***/ "./lib/util.js":
/*!*********************!*\
  !*** ./lib/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeDegrees = exports.normalizeRadians = exports.degrees = exports.radians = exports.calculateVolume = exports.isDev = exports.isElectron = exports.boundsFromMapObject = exports.shuffle = exports.sleep = exports.shiftValue = exports.now = exports.orientPow = exports.clamp = exports.timedRnd = exports.rndItem = exports.rndInt = exports.rnd = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.js");
const constants_1 = __webpack_require__(/*! ./constants */ "./lib/constants.js");
function rnd(minOrMax = 1, max) {
    if (max != null) {
        return minOrMax + Math.random() * (max - minOrMax);
    }
    else {
        return Math.random() * minOrMax;
    }
}
exports.rnd = rnd;
function rndInt(minOrMax, max) {
    if (max != null) {
        return Math.floor(minOrMax + Math.random() * (max - minOrMax));
    }
    else {
        return Math.floor(Math.random() * minOrMax);
    }
}
exports.rndInt = rndInt;
function rndItem(array) {
    const index = Math.floor(Math.random() * array.length);
    return array[index];
}
exports.rndItem = rndItem;
function timedRnd(dt, averageDelay) {
    let count = 0;
    let chance = dt - Math.random() * averageDelay;
    while (chance > 0) {
        count++;
        chance -= Math.random() * averageDelay;
    }
    return count;
}
exports.timedRnd = timedRnd;
function clamp(v, min, max) {
    return v < min ? min : v > max ? max : v;
}
exports.clamp = clamp;
function orientPow(v, exp) {
    if (v < 0) {
        return -(Math.pow((-v), exp));
    }
    else {
        return Math.pow(v, exp);
    }
}
exports.orientPow = orientPow;
const timeDelta = Date.now() - performance.now();
function now() {
    return performance.now() + timeDelta;
}
exports.now = now;
function shiftValue(v, trg, inc) {
    if (v === trg) {
        return trg;
    }
    if (v < trg) {
        v += inc;
        if (v >= trg) {
            return trg;
        }
    }
    else {
        v -= inc;
        if (v <= trg) {
            return trg;
        }
    }
    return v;
}
exports.shiftValue = shiftValue;
function sleep(ms = 0) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    });
}
exports.sleep = sleep;
/**
 * Inplace array shuffling.
 * @param array The array.
 * @return The same array. But shuffled.
 */
function shuffle(array) {
    for (let i = 1; i < array.length; i++) {
        const j = Math.floor(Math.random() * (i + 1));
        if (i !== j) {
            const tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
    return array;
}
exports.shuffle = shuffle;
function boundsFromMapObject(o, margin = 0) {
    const width = o.width + (margin * 2);
    const height = o.height + (margin * 2);
    const x = o.x - margin;
    const y = o.y + margin;
    return { x, y, width, height };
}
exports.boundsFromMapObject = boundsFromMapObject;
function isElectron() {
    return !!navigator.userAgent.match(/\belectron\b/i);
}
exports.isElectron = isElectron;
/**
 * Figures out if development mode is enabled or not.
 */
function isDev() {
    // Legacy behavior.
    if (window.location.port === "8000") {
        return true;
    }
    if (!!window.location.search) {
        return !!window.location.search.substr(1).split("&").find(key => {
            if (key.toLowerCase().startsWith("dev")) {
                return key.length === 3 || key.endsWith("=true");
            }
            return false;
        });
    }
    return false;
}
exports.isDev = isDev;
/**
 * Calculates the volume of a sound in regards to a distance and some additional properties.
 * @param distance  - the distance of the audio source to the audio listener (px)
 * @param intensity - Defines how "loud" the sound is or in other terms, how far it can be heard. Defaults to 1.
 * @param maxVolume - Defines the maximum volume of the sound (when distance is 0).
 *                    The sound will never be louder than this. Defaults to 1.
 */
function calculateVolume(distance, maxVolume = 1, intensity = 1) {
    return Math.max(0, maxVolume - ((distance * constants_1.METER_PER_PIXEL) / (constants_1.SOUND_INTENSITY_MULTIPLIER * intensity)));
}
exports.calculateVolume = calculateVolume;
/** Factor to convert radians to degrees. */
const RAD_TO_DEG = 180 / Math.PI;
/**
 * Converts degrees to radians.
 *
 * @param degrees - The value in degrees to convert to radians.
 * @return The given value converted to radians.
 */
function radians(degrees) {
    return degrees / RAD_TO_DEG;
}
exports.radians = radians;
/**
 * Converts radians to degrees.
 *
 * @param radians - The value in radians to convert to degrees.
 * @return The given value converted to degrees.
 */
function degrees(radians) {
    return radians * RAD_TO_DEG;
}
exports.degrees = degrees;
/**
 * Normalizes an angle in radians so it is between 0 (inclusive) and 2*PI (exclusive).
 *
 * @param degrees - The angle to normalize.
 * @return The normalized angle.
 */
function normalizeRadians(angle) {
    const pi2 = Math.PI * 2;
    return ((angle % pi2) + pi2) % pi2;
}
exports.normalizeRadians = normalizeRadians;
/**
 * Normalizes an angle in degrees so it is between 0 (inclusive) and 360 (exclusive).
 *
 * @param degrees - The angle to normalize.
 * @return The normalized angle.
 */
function normalizeDegrees(degrees) {
    return ((degrees % 360) + 360) % 360;
}
exports.normalizeDegrees = normalizeDegrees;


/***/ }),

/***/ "./node_modules/tslib/tslib.js":
/*!*************************************!*\
  !*** ./node_modules/tslib/tslib.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global global, define, System, Reflect, Promise */
var __extends;
var __assign;
var __rest;
var __decorate;
var __param;
var __metadata;
var __awaiter;
var __generator;
var __exportStar;
var __values;
var __read;
var __spread;
var __spreadArrays;
var __spreadArray;
var __await;
var __asyncGenerator;
var __asyncDelegator;
var __asyncValues;
var __makeTemplateObject;
var __importStar;
var __importDefault;
var __classPrivateFieldGet;
var __classPrivateFieldSet;
var __createBinding;
(function (factory) {
    var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (exports) { factory(createExporter(root, createExporter(exports))); }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    else {}
    function createExporter(exports, previous) {
        if (exports !== root) {
            if (typeof Object.create === "function") {
                Object.defineProperty(exports, "__esModule", { value: true });
            }
            else {
                exports.__esModule = true;
            }
        }
        return function (id, v) { return exports[id] = previous ? previous(id, v) : v; };
    }
})
(function (exporter) {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };

    __extends = function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };

    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };

    __rest = function (s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    };

    __decorate = function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };

    __param = function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };

    __metadata = function (metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    };

    __awaiter = function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };

    __generator = function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };

    __exportStar = function(m, o) {
        for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    };

    __createBinding = Object.create ? (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
    }) : (function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    });

    __values = function (o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };

    __read = function (o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    };

    /** @deprecated */
    __spread = function () {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    };

    /** @deprecated */
    __spreadArrays = function () {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    __spreadArray = function (to, from) {
        for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
            to[j] = from[i];
        return to;
    };

    __await = function (v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    };

    __asyncGenerator = function (thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);  }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    };

    __asyncDelegator = function (o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    };

    __asyncValues = function (o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    };

    __makeTemplateObject = function (cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    var __setModuleDefault = Object.create ? (function(o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function(o, v) {
        o["default"] = v;
    };

    __importStar = function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    };

    __importDefault = function (mod) {
        return (mod && mod.__esModule) ? mod : { "default": mod };
    };

    __classPrivateFieldGet = function (receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    };

    __classPrivateFieldSet = function (receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    };

    exporter("__extends", __extends);
    exporter("__assign", __assign);
    exporter("__rest", __rest);
    exporter("__decorate", __decorate);
    exporter("__param", __param);
    exporter("__metadata", __metadata);
    exporter("__awaiter", __awaiter);
    exporter("__generator", __generator);
    exporter("__exportStar", __exportStar);
    exporter("__createBinding", __createBinding);
    exporter("__values", __values);
    exporter("__read", __read);
    exporter("__spread", __spread);
    exporter("__spreadArrays", __spreadArrays);
    exporter("__spreadArray", __spreadArray);
    exporter("__await", __await);
    exporter("__asyncGenerator", __asyncGenerator);
    exporter("__asyncDelegator", __asyncDelegator);
    exporter("__asyncValues", __asyncValues);
    exporter("__makeTemplateObject", __makeTemplateObject);
    exporter("__importStar", __importStar);
    exporter("__importDefault", __importDefault);
    exporter("__classPrivateFieldGet", __classPrivateFieldGet);
    exporter("__classPrivateFieldSet", __classPrivateFieldSet);
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ });
//# sourceMappingURL=FriendlyFire.js.map