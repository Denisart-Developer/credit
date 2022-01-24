/*================BURGER-MENU==================*/
const menu = document.querySelector('.header__burger');
const burger = document.querySelector('.burger');
menu.addEventListener("click", function (e) {
   burger.classList.toggle('_active');
   menu.classList.toggle('active');
});
/*===============About-Hover=================*/
const CardAbouts = document.querySelectorAll('.card-about');
const imageCards = document.querySelectorAll('.card-about__image');


if(CardAbouts.length > 0) {
  for (let index = 0; index < CardAbouts.length; index++) {
    const CardAbout = CardAbouts[index];
    CardAbout.addEventListener("mouseover", function (e){
      const imageCard = imageCards[index];
      imageCard.classList.add("active");
      e.preventDefault();
      
    });
  }
}
if(CardAbouts.length > 0) {
  for (let index = 0; index < CardAbouts.length; index++) {
    const CardAbout = CardAbouts[index];
    CardAbout.addEventListener("mouseout", function (e){
      const imageCard = imageCards[index];
      imageCard.classList.remove("active");
      e.preventDefault();
      
    });
  }
}
/*==============Button(credit-zaym)================*/
const btnCredits = document.querySelectorAll('.buttons-loan__btn-credit');
const btnZayms = document.querySelectorAll('.buttons-loan__btn-zaym');
const credits = document.querySelectorAll('.loan__body-credit');
const zayms = document.querySelectorAll('.loan__body-zaym');

if(btnCredits.length > 0) {
  for (let index = 0; index < btnCredits.length; index++) {
    const btnCredit = btnCredits[index];
    btnCredit.addEventListener("click", function (e){
      const btnZaym = btnZayms[index];
      const zaym = zayms[index];
      const credit = credits[index];
      
      btnZaym.classList.remove("active");
      btnCredit.classList.remove("active");
      zaym.classList.remove("active");
      credit.classList.remove("no-active");
      e.preventDefault();
      
    });
  }
}
if(btnZayms.length > 0) {
  for (let index = 0; index < btnZayms.length; index++) {
    const btnZaym = btnZayms[index];
    btnZaym.addEventListener("click", function (e){
      const btnCredit = btnCredits[index];
      const credit = credits[index];
      const zaym = zayms[index];
      btnZaym.classList.add("active");
      btnCredit.classList.add("active");
      zaym.classList.add("active");
      credit.classList.add("no-active");
      e.preventDefault();
      
    });
  }
}
/*====================TAB-CARD-LOAN============*/
const btnDocuments = document.querySelectorAll('.card-loan-offer__documents-btn');
const btnConditions = document.querySelectorAll('.card-loan-offer__conditions-btn');
const Conditions = document.querySelectorAll('.block-conditions');
const Documents = document.querySelectorAll('.block-documents');


if(btnDocuments.length > 0) {
  for (let index = 0; index < btnDocuments.length; index++) {
    const btnDocument = btnDocuments[index];
    btnDocument.addEventListener("click", function (e){
      const btnCondition = btnConditions[index];
      const Condition = Conditions[index];
      const Document = Documents[index];
      Condition.classList.add("no-active");
      Document.classList.add("active");
      btnCondition.classList.add("no-active");
      btnDocument.classList.add("active");
      e.preventDefault();
      
    });
  }
}
if(btnConditions.length > 0) {
  for (let index = 0; index < btnConditions.length; index++) {
    const btnCondition = btnConditions[index];
    btnCondition.addEventListener("click", function (e){
      const btnDocument = btnDocuments[index];
      const Condition = Conditions[index];
      const Document = Documents[index];
      Condition.classList.remove("no-active");
      Document.classList.remove("active");
      btnDocument.classList.remove("active");
      btnCondition.classList.remove("no-active");
      e.preventDefault();
      
    });
  }
}

const tabs = document.querySelectorAll('.card-loan-offer__collumn');
const tabButtons = document.querySelectorAll('.card-loan-offer__arrow');

if(tabButtons.length > 0) {
  for (let index = 0; index < tabButtons.length; index++) {
    const tabButton = tabButtons[index];
    tabButton.addEventListener("click", function (e){
      const tab = tabs[index];
      tabButton.classList.toggle("active");
      tab.classList.toggle("active");
      
      e.preventDefault();
      
    });
  }
}
/*==================SPOILER===================*/
const bodys = document.querySelectorAll('.spoiler-reject__body');
const buttons = document.querySelectorAll('.spoiler-reject__arrow');
const spoilers = document.querySelectorAll('.spoiler-reject__row');

if(spoilers.length > 0) {
  for (let index = 0; index < spoilers.length; index++) {
    const spoiler = spoilers[index];
    spoiler.addEventListener("click", function (e){
      const button = buttons[index];
      const body = bodys[index];
      body.classList.toggle("active");
      button.classList.toggle("active");
      spoiler.classList.toggle("active");
      
      e.preventDefault();
      
    });
  }
}


/*===============Language=================*/
const Language = document.querySelector('.header__language');

const LanguageList = document.querySelector('.language__list');

Language.addEventListener("click", function(){
  Language.classList.toggle("active");
  LanguageList.classList.toggle("active");
})

/*==================filter=============*/
const btnZaym = document.getElementById('zaym-btn');
const btnCredit = document.getElementById('credit-btn');
const zaym = document.getElementById('zaym');
const credit = document.getElementById('credit');

btnZaym.addEventListener("click", function(){
  zaym.classList.add('active');
  credit.classList.add('no-active');
})

btnCredit.addEventListener("click", function(){
  zaym.classList.remove('active');
  credit.classList.remove('no-active');
})

const drops = document.querySelectorAll('.drop-down');
const btns = document.querySelectorAll('.filter__btn');

if(btns.length > 0) {
  for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];
    btn.addEventListener("click", function (e){
      const drop = drops[index];
      
      drop.classList.toggle("active");
      
      
      e.preventDefault();
      
    });
  }
}

