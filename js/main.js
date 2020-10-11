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
