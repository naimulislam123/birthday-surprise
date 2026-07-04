const scene1 = document.getElementById("scene1");
const scene2 = document.getElementById("scene2");
const scene3 = document.getElementById("scene3");

const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");
const music = document.getElementById("music");

const message = document.getElementById("message");

const letter = `Happy Birthday, Jesmin! 🎉

Wishing you a day as beautiful and wonderful as you are.

May your life always be filled with happiness, love, good health and endless success.

I hope every dream you hold close to your heart comes true.

Never stop smiling.

May Allah bless you always.

With lots of love ❤️

— Jawra`;

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
