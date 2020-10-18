import '../scss/_non-critical.scss';
import '../scss/main.scss';

const userDevice = window.navigator.userAgent;

// UTM PARAMS
const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const utmSource = urlParams.get('utm_source');
const utmMedium = urlParams.get('utm_medium');
const utmCampaign = urlParams.get('utm_campaign');
const utmContent = urlParams.get('utm_content');
const utmTerm = urlParams.get('utm_term');


function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

// Handle module
const mainCta = document.getElementById('main-cta');
const orderCta = document.querySelectorAll('.btn-cta--order');
const moduleForm = document.getElementById('module-form');
const userNameModule = document.getElementById('user-name-module');

function closeModule(e){
  if(moduleForm.classList.contains('show') && e.target.contains(moduleForm) && e.target === moduleForm){
    moduleForm.classList.remove('show');
    document.body.removeEventListener('click', closeModule);
  }
}

// Open module if mainCta is clicked
mainCta.addEventListener('click', (e) => {

  moduleForm.classList.add('show');
  userNameModule.focus();

  document.body.addEventListener('click', closeModule);

  e.preventDefault();
})

// Open module if any order btn is clicked
orderCta.forEach(btn => {

  btn.addEventListener('click', (e) => {
  
    moduleForm.classList.add('show');
    userNameModule.focus();
    document.body.addEventListener('click', closeModule);

    e.preventDefault();
  })
});
//  /Handle module

// Menu
const menuToggler = document.getElementById('menu-toggle');
const navItemLinks = document.querySelectorAll('.nav-item__link');
menuToggler.addEventListener('click', function menuIsOpened() {
  navItemLinks.forEach(link => {
    link.addEventListener('click', function linkIsClicked() {
      menuToggler.checked = false;
      link.removeEventListener('click', linkIsClicked);
    })
  })
});

