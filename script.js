const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");

const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");
const music = document.getElementById("music");

const message = document.getElementById("message");
const letter = `Happy Birthday, Jesmin! 🎉🤍

Many many happy returns of the day! 🥳💖

আজ তোমার জীবনের সবচেয়ে special দিনগুলোর একটি। এই সুন্দর দিনে আল্লাহর কাছে আমার একটাই দোয়া—তোমার জীবনের প্রতিটি মুহূর্ত যেন happiness, peace, success আর endless blessings-এ ভরে থাকে। তুমি সব সময় সুস্থ থাকো, ভালো থাকো, আর তোমার মুখের হাসিটা যেন কখনো ম্লান না হয়।

May Allah bless you with a beautiful life, good health, endless joy, and countless opportunities. তোমার সব dreams, wishes আর goals যেন এক এক করে সত্যি হয়। জীবনের প্রতিটি নতুন chapter তোমার জন্য আরও সুন্দর আর সফল হয়ে উঠুক।

Thank you for being such a wonderful friend. তোমার মতো একজন মানুষকে জীবনে পাওয়া সত্যিই অনেক সুন্দর একটি ব্যাপার। সব সময় নিজের মতো থেকো, keep smiling, keep shining, and never stop believing in yourself.

Enjoy every moment of your special day, make lots of beautiful memories, and celebrate it with the people who love you the most.

Once again, Happy Birthday, Jesmin! 🎂🎈✨

Wishing you a year full of love, laughter, success, and happiness.

Stay Blessed Always! 💖

— With lots of love,
Jawra 🌸`;

startBtn.onclick = () => {

    scene1.classList.remove("active");
    scene2.classList.add("active");

    music.play().catch(() => {});

};

giftBox.onclick = () => {

    giftBox.style.transform = "scale(1.2) rotate(10deg)";

    setTimeout(() => {

        scene2.classList.remove("active");
        scene3.classList.add("active");

        typeLetter();

        hearts();

    },1000);

};

function typeLetter(){

    let i=0;

    const speed=35;

    function typing(){

        if(i<letter.length){

            message.innerHTML+=letter.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}

function hearts(){

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML=["❤️","🌹","✨"][Math.floor(Math.random()*3)];

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*25)+"px";
heart.style.pointerEvents="none";
heart.style.animation="fly 5s linear";

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),5000);

},250);

}

const style=document.createElement("style");

style.innerHTML=`
@keyframes fly{
0%{
transform:translateY(0);
opacity:1;
}
100%{
transform:translateY(-120vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
const replayBtn = document.getElementById("replayBtn");

giftBox.addEventListener("click", () => {

    setTimeout(() => {
        replayBtn.style.display = "block";
    }, 3000);

});

replayBtn.onclick = () => {
    location.reload();
};
function fireworks(){

    for(let i=0;i<25;i++){

        const spark=document.createElement("div");

        spark.innerHTML="✨";

        spark.style.position="fixed";
        spark.style.left=Math.random()*100+"vw";
        spark.style.top=Math.random()*100+"vh";
        spark.style.fontSize="30px";
        spark.style.pointerEvents="none";

        document.body.appendChild(spark);

        setTimeout(()=>spark.remove(),1500);

    }

}

giftBox.addEventListener("click",()=>{

    setTimeout(fireworks,1200);

});
