import '../scss/_non-critical.scss';

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

const mainCta = document.getElementById('main-cta');
const footer = document.getElementById('section-footer');
const orderCta = document.querySelectorAll('.btn-cta--order');

mainCta.addEventListener('click', (e) => {

  footer.scrollIntoView({
    behavior: 'smooth',
  });

  e.preventDefault();
})

orderCta.forEach(btn => {
  btn.addEventListener('click', (e) => {
    footer.scrollIntoView({
      behavior: 'smooth',
    });
  
    e.preventDefault();
  })
});

// Menu
// navItemLinks[0].addEventListener('click', (e) => {
//   // window.location = "#about";
//   const aboutSection = document.getElementById('about');
//   aboutSection.scrollIntoView({
//     behavior: 'smooth',
//   });
//   menuToggler.checked = false;
//   e.preventDefault();
// });

// navItemLinks[1].addEventListener('click', (e) => {
//   // window.location = "#partners";
//   const partnersSection = document.getElementById('partners');
//   partnersSection.scrollIntoView({
//     behavior: 'smooth',
//   });
//   menuToggler.checked = false;
//   e.preventDefault();
// });

// navItemLinks[2].addEventListener('click', (e) => {
//   // window.location = "#trusted-by";
//   const trustedBySection = document.getElementById('trusted-by');
//   trustedBySection.scrollIntoView({
//     behavior: 'smooth',
//   });
//   menuToggler.checked = false;
//   e.preventDefault();
// });