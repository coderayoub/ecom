// ===============================
// Luxury Landing Page Script
// ===============================

// Navbar Shadow on Scroll
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".hidden").forEach(el=>{

    observer.observe(el);

});

// ===============================
// Smooth Scroll
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(this.getAttribute("href"))
        .scrollIntoView({

            behavior:"smooth"

        });

    });

});

// ===============================
// Countdown Timer
// ===============================

const endDate = new Date();

endDate.setDate(endDate.getDate()+3);

function countdown(){

    const now = new Date().getTime();

    const distance = endDate - now;

    const days=Math.floor(distance/(1000*60*60*24));

    const hours=Math.floor((distance%(1000*60*60*24))/(1000*60*60));

    const minutes=Math.floor((distance%(1000*60*60))/(1000*60));

    const seconds=Math.floor((distance%(1000*60))/1000);

    const d=document.getElementById("days");
    const h=document.getElementById("hours");
    const m=document.getElementById("minutes");
    const s=document.getElementById("seconds");

    if(d){

        d.innerHTML=days;
        h.innerHTML=hours;
        m.innerHTML=minutes;
        s.innerHTML=seconds;

    }

}

setInterval(countdown,1000);

countdown();

// ===============================
// Counter Animation
// ===============================

const counters=document.querySelectorAll(".counter");

counters.forEach(counter=>{

    counter.innerText="0";

    const update=()=>{

        const target=+counter.getAttribute("data-target");

        const c=+counter.innerText;

        const inc=target/120;

        if(c<target){

            counter.innerText=Math.ceil(c+inc);

            setTimeout(update,15);

        }else{

            counter.innerText=target;

        }

    }

    update();

});

// ===============================
// Image Zoom
// ===============================

document.querySelectorAll(".gallery img").forEach(img=>{

    img.addEventListener("click",()=>{

        img.classList.toggle("zoom");

    });

});

// ===============================
// FAQ
// ===============================

document.querySelectorAll(".faq-item").forEach(item=>{

    item.addEventListener("click",()=>{

        item.classList.toggle("active");

    });

});

// ===============================
// Back To Top
// ===============================

const topBtn=document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.pageYOffset>400){

        topBtn.classList.add("show");

    }else{

        topBtn.classList.remove("show");

    }

});

if(topBtn){

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

}

// ===============================
// Fake Orders Popup
// ===============================

const customers=[

"محمد من الجزائر",

"أحمد من وهران",

"ياسين من سطيف",

"سمير من عنابة",

"عبد الله من قسنطينة",

"يوسف من الشلف",

"سارة من الجزائر",

"ريم من بجاية",

"كمال من باتنة",

"نور من تيبازة"

];

function randomOrder(){

const popup=document.getElementById("order-popup");

if(!popup)return;

const customer=customers[Math.floor(Math.random()*customers.length)];

popup.innerHTML=`

<i class="fa-solid fa-cart-shopping"></i>

<strong>${customer}</strong>

<br>

قام بطلب هذا المنتج منذ لحظات.

`;

popup.classList.add("active");

setTimeout(()=>{

popup.classList.remove("active");

},5000);

}

setInterval(randomOrder,12000);

// ===============================
// Floating Product Animation
// ===============================

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

let angle=0;

setInterval(()=>{

angle+=0.03;

heroImage.style.transform=

`translateY(${Math.sin(angle)*10}px)`;

},20);

}

// ===============================
// Button Ripple Effect
// ===============================

document.querySelectorAll(".btn1,.btn-nav").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(button.clientWidth,button.clientHeight);

circle.style.width=

circle.style.height=

`${diameter}px`;

circle.style.left=

`${e.clientX-button.offsetLeft-diameter/2}px`;

circle.style.top=

`${e.clientY-button.offsetTop-diameter/2}px`;

circle.classList.add("ripple");

const ripple=button.getElementsByClassName("ripple")[0];

if(ripple){

ripple.remove();

}

button.appendChild(circle);

});

});

// ===============================
// Lazy Loading Images
// ===============================

document.querySelectorAll("img").forEach(img=>{

img.loading="lazy";

});

// ===============================
// Current Year
// ===============================

const year=document.getElementById("year");

if(year){

year.innerHTML=new Date().getFullYear();

}


const orderBtn = document.getElementById("orderBtn");

if(orderBtn){

orderBtn.addEventListener("click", function(){

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const wilaya = document.getElementById("wilaya").value;
    const note = document.getElementById("note").value.trim();

    if(name === "" || phone === "" || wilaya === ""){

        alert("يرجى ملء جميع المعلومات.");

        return;
    }

    const message =
`🛍️ طلب جديد

👤 الاسم: ${name}

📞 الهاتف: ${phone}

📍 الولاية: ${wilaya}

📝 ملاحظات:
${note}

شكراً لكم.`;

    const whatsapp =
    "https://wa.me/213662061903?text=" +
    encodeURIComponent(message);

    window.open(whatsapp, "_blank");

});

const productPrice = 1600;
const shippingPrices = {
    "1":700,
    "2":450,
    "3":600,
    "4":500,
    "5":500,
    "6":450,
    "7":600,
    "8":700,
    "9":400,
    "10":450,
    "11":1000,
    "12":550,
    "13":650,
    "14":600,
    "15":450,
    "16":400,
    "17":600,
    "18":450,
    "19":500,
    "20":650,
    "21":450,
    "22":650,
    "23":450,
    "24":500,
    "25":500,
    "26":450,
    "27":600,
    "28":550,
    "29":650,
    "30":700,
    "31":600,
    "32":700,
    "33":1000,
    "34":500,
    "35":400,
    "36":500,
    "37":1000,
    "38":600,
    "39":700,
    "40":550,
    "41":500,
    "42":400,
    "43":500,
    "44":500,
    "45":750,
    "46":650,
    "47":700,
    "48":600,
    "49":900,
    "50":1200,
    "51":650,
    "52":900,
    "53":1000,
    "54":1200,
    "55":700,
    "56":1100,
    "57":700,
    "58":800
};

const wilaya = document.getElementById("wilaya");

wilaya.addEventListener("change", function () {

    if (this.value === "") {

        document.getElementById("shippingPrice").textContent = "اختر الولاية";
        document.getElementById("totalPrice").textContent = "--";
        return;
    }

    const shipping = shippingPrices[this.value];

    document.getElementById("shippingPrice").textContent = shipping + " دج";
    document.getElementById("totalPrice").textContent = (productPrice + shipping) + " دج";

});

}