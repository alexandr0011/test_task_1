const slides = document.querySelectorAll('.slide_img');
const prev = document.querySelector('.prev_arrow_btn');
const next = document.querySelector('.next_arrow_btn');
const openMobileMenuBtn = document.querySelector('.burger_btn');
const closeMobileMenuBtn = document.querySelector('.close_menu_btn');
const mobileMenu = document.querySelector('.mobile_menu_wrapper');
const mediaQuery = window.matchMedia('(min-width: 616px)');

let slidesIndex = 1;

function showeSlides(n) {
    if (n > slides.length) {
        slidesIndex = 1;
    }

    if (n <1) {
        slidesIndex = slides.length;
    }

    slides.forEach(item => item.classList.add('hide'));
    slides[slidesIndex - 1].classList.remove('hide');
    slides[slidesIndex - 1].classList.add('show');
}

function plusSlides(n) {
    showeSlides(slidesIndex += n);
}

prev.addEventListener('click', () => {
    plusSlides(-1);
});

next.addEventListener('click', () => {
    plusSlides(+1);
});

function closeMobileMenu() {
    mobileMenu.classList.remove('show');
    mobileMenu.classList.add('hide');
    document.body.style.overflow = "";
}

function openMobileMenu() {
    mobileMenu.classList.remove('hide');
    mobileMenu.classList.add('show');
    document.body.style.overflow = "hidden";
}

function handleTabletChange(e) {
  if (e.matches) {
    closeMobileMenu();
  }
}

class MenuNews {
    constructor(src, alt, description, date, parentSelector){
        this.src = src;
        this.alt = alt;
        this.description = description;
        this.date = date;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('news_item');
        element.innerHTML = `
            <div class="news_item_img">
                <img src=${this.src} alt=${this.alt}>
            </div>
            <div class="news_item_description">
                <p class="news_item_title">${this.description}</p>
                <p class="news_item_date">${this.date}</p>
            </div>
        `;
        this.parent.append(element);
    }
}

class MenuBaners {
    constructor(src, alt, description, parentSelector){
        this.src = src;
        this.alt = alt;
        this.description = description;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('baner_item');
        element.innerHTML = `
            <div class="baner_img">
                <img src=${this.src} alt=${this.alt}>
            </div>
            <div class="baner_text">
                <p>${this.description}</p>
            </div>
        `;
        this.parent.append(element);
    }
}

class MenuInfo {
    constructor(src, alt, description, date, parentSelector){
        this.src = src;
        this.alt = alt;
        this.description = description;
        this.date = date;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('info_card_item');
        element.innerHTML = `
            <div class="card_img">
                <img src=${this.src} alt=${this.alt}>
            </div>
            <div class="card_description">
                <p class="card_text">${this.description}</p>
                <p class="card_date">${this.date}</p>
            </div>
        `;
        this.parent.append(element);
    }
}

class MenuCircleLinks {
    constructor(src, alt, description, parentSelector){
        this.src = src;
        this.alt = alt;
        this.description = description;
        this.parent = document.querySelector(parentSelector);
    }

    render() {
        const element = document.createElement('div');
        element.classList.add('link_circle_item');
        element.innerHTML = `
            <div class="circle_item">
                <img src=${this.src} alt=${this.alt}>
            </div>
            <a href="#">${this.description}</a>
        `;
        this.parent.append(element);
    }
}

mediaQuery.addListener(handleTabletChange);
closeMobileMenuBtn.addEventListener('click', closeMobileMenu);
openMobileMenuBtn.addEventListener('click', openMobileMenu);
mobileMenu.addEventListener("click", (e) => {
    if(e.target === mobileMenu){
        closeMobileMenu();
    }
});

showeSlides(slidesIndex);

new MenuNews(
    "./img/news_item_1.png",
    "img",
    "По иску прокуратуры взысканы денежные средства в пользу Учреждения «Минское городское управление Министерства по чрезвычайным ситуациям Республики Беларусь»",
    "12.12.2021",
    ".news_list_container"
).render();

new MenuNews(
    "./img/news_item_2.png",
    "img",
    "Районные соревнования по волейболу среди команд учреждений среднего специального и профессионально-технического образования",
    "12.12.2021",
    ".news_list_container"
).render();

new MenuNews(
    "./img/news_item_3.png",
    "img",
    "В мемориальном комплексе «Тростенец» почтили память защитников Отечества и жертв войн",
    "12.12.2021",
    ".news_list_container"
).render();

new MenuNews(
    "./img/news_item_4.png",
    "img",
    "Завершились районные соревнования по волейболу среди трудовых коллективов, организаций и предприятий",
    "12.12.2021",
    ".news_list_container"
).render();

new MenuBaners(
    "./img/baner_img.png",
    "img",
    "Административно-правовые и правоохранительные структуры",
    ".baners_container"
).render();

new MenuBaners(
    "./img/baner_img.png",
    "img",
    "Организации собственников",
    ".baners_container"
).render();

new MenuBaners(
    "./img/baner_img.png",
    "img",
    "График прямой телефонной",
    ".baners_container"
).render();

new MenuBaners(
    "./img/baner_img.png",
    "img",
    "Административно-правовые и правоохранительные структуры",
    ".baners_container"
).render();

new MenuBaners(
    "./img/baner_img.png",
    "img",
    "Административно-правовые и правоохранительные структуры",
    ".baners_container"
).render();

new MenuInfo(
    "./img/Card_1.png",
    "img",
    "Налоговая инспекция напоминает",
    "12.12.2021",
    ".info_card_container"
).render();

new MenuInfo(
    "./img/Card_1.png",
    "img",
    "О некоторых вопросах ответственности за нарушения общественного порядка",
    "12.12.2021",
    ".info_card_container"
).render();

new MenuInfo(
    "./img/Card_1.png",
    "img",
    "К сведению физических лиц, осуществляющих деятельность, не относящуюся к предпринимательской",
    "12.12.2021",
    ".info_card_container"
).render();

new MenuInfo(
    "./img/Card_1.png",
    "img",
    "Выжигание травы – преступление против природы",
    "12.12.2021",
    ".info_card_container"
).render();

new MenuCircleLinks(
    "./img/circle_item_1.png",
    "img",
    "Информация о выдаче трудовых книжек",
    ".link_block_container"
).render();

new MenuCircleLinks(
    "./img/circle_item_2.png",
    "img",
    "Охрана труда",
    ".link_block_container"
).render();

new MenuCircleLinks(
    "./img/circle_item_3.png",
    "img",
    "Информация об удаляемых объектах растительного мира",
    ".link_block_container"
).render();

new MenuCircleLinks(
    "./img/circle_item_4.png",
    "img",
    "Мая рэспублiка Рэспублiканскi партал гарадской гаспадаркi",
    ".link_block_container"
).render();

new MenuCircleLinks(
    "./img/circle_item_5.png",
    "img",
    "Хочу сделать свою страну лучше!",
    ".link_block_container"
).render();

new MenuCircleLinks(
    "./img/circle_item_6.png",
    "img",
    "Наведем порядок вместе!",
    ".link_block_container"
).render();