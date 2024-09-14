// content.js
var Races = ["Leaf shinobi", "Sand shinobi", "Water shinobi", "Lightning shinobi", "Stone shinobi", "the Uzimaki clan", "the Uchiha clan", "The Akamichi clan"];
var clans = ["the Uzimaki clan", "the Uchiha clan", "The Akamichi clan"]
var stuff = [
    "Ichiraku Ramen",
    "Genjutsu",
    "Taijutsu",
    "Ninjutsu",
    "the rasengan",
    "the sharingan",
    "the byakugan",
    "the shadow clone jutsu",
    "calling Haku a dude",
]
var groups = ["Kunoichi", "Shinobi", "medical ninja", "Itachitards", "Madaratards", "The cult of Tsunade's mommy milkers", "jinchuriki"];
var badthings = ["stealing the scroll of forbiden ninjutsu", "telling Naruto that he has a demon fox sealed inside of him", "bullying jinchuriki",
    "leaving curse marks on minors", "abandoning your friends", 'reading "make-out tactics" in public', "teaching a genin forbidden ninjutsu", "questioning your nindo"];
var goodthings = ["spamming the rasengan during a fight", "the sexy jutsu", "stopping your family's coup attempt via genocide", "using condiments on your Ichiraku ramen before trying it"];
var punisments = ["fines", "prison time", "the death penalty"];
var levelsables = ["the minimum genin age", "the amount of genin per jonin squad", "the amount of tailed beasts", "ninjatool prices",
    "the amount of Rasengan users"];

function randomstring(aray) {
    return aray[random(aray.length)];
}

function random(max) {
    var min = 0;
    var Numb = Math.floor(Math.random() * (max - min + 1)) + min;
    while (Numb >= max) {
        Numb = Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return Numb;
}

function main() {
    var foramats = [
        `Proj 2025 is going to put ${randomstring(clans)} in concentration camps`,
        `Proj 2025 calls for the genocide of ${randomstring(clans)}`,
        `Proj 2025 is going to put ${randomstring(groups)} in re-education camps`,
        `Proj 2025 is going to make ${randomstring(clans)} and ${randomstring(clans)} fight to the death`,
        `Proj 2025 is going to turn ${randomstring(clans)} into 2nd class citizens`,
        `Proj 2025 is going to ban ${randomstring(stuff)}`,
        `Proj 2025 is going to put ${randomstring(groups)} on a watch-list`,
        `Under Proj 2025: ${randomstring(groups)} will be put on an island, away from society`,
        `Proj 2025 wants to legalize ${randomstring(badthings)}`,
        `Proj 2025 wants to normalize ${randomstring(badthings)}`,
        `Proj 2025 wants to punish ${randomstring(badthings)} with ${randomstring(punisments)}`,
        `Proj 2025 wants to punish ${randomstring(goodthings)} with ${randomstring(punisments)}`,
        `Proj 2025 is going to raise ${randomstring(levelsables)}`,
        `Proj 2025 is wants to lower ${randomstring(levelsables)}`,
        `Proj 2025 wants to elemenate ${randomstring(levelsables)}`,
        `Proj 2025 wants to elemenate ${randomstring(Races)}`,
    ]
    return `${randomstring(foramats)}🐱‍👤!`;
}
function ReplaceByEleTag(tag) {
    var blocks = document.getElementsByTagName(tag);
    for (var i = 0; i < blocks.length; i++) {
        var sents = blocks[i].innerText.split(".");
        for (var j = 0; j < sents.length; j++) {
            var g = sents[j];

            if (g.toLowerCase().includes("project 2025") | (g.includes("2025") & g.toLowerCase().includes("project"))) {
                blocks[i].innerText = blocks[i].innerText.replace(g, main);
            }
        }
    }
}
function ReplaceByclass(tag) {
    var blocks = document.getElementsByClassName(tag);
    for (var i = 0; i < blocks.length; i++) {
        var sents = blocks[i].innerText.split(".");
        for (var j = 0; j < sents.length; j++) {
            var g = sents[j];
            if (g.toLowerCase().includes("project 2025") | (g.includes("2025") & g.toLowerCase().includes("project"))) {
                blocks[i].innerText = blocks[i].innerText.replace(g, main);
            }
        }
    }
}

function Find() {
    
    ReplaceByEleTag("a");
    ReplaceByEleTag("p");
    ReplaceByEleTag("h1");
    ReplaceByEleTag("span");
    ReplaceByEleTag("strong");
    ReplaceByclass("xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs x126k92a");

    ReplaceByclass("x11i5rnm xat24cr x1mh8g0r x1vvkbs xtlvy1s x126k92a");

    ReplaceByclass("xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs");
    ReplaceByclass("xdj266r x11i5rnm xat24cr x1mh8g0r x1vvkbs");
}

Find();

const observer = new MutationObserver(Find);

// Observe changes to the entire document subtree
observer.observe(document.body, { subtree: true, childList: true });
