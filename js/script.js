
// TOGGLE TEME 
const themeToggleButton = document.querySelector('.theme-toggle-button');
const bodyElement = document.body;
const currentTheme = localStorage.getItem('darkTheme');

if(currentTheme){
    bodyElement.classList.add('dark-theme');
}

const toggleTheme = () => {
    bodyElement.classList.toggle('dark-theme');

    if(bodyElement.classList.contains('dark-theme')){
        localStorage.setItem('darkTheme', 'active');
    }else{
        localStorage.removeItem('darkTheme');
    }
};
themeToggleButton.addEventListener('click', toggleTheme);

// CONTACT
const input = document.getElementById('message');
const label = document.querySelector('.input-label');

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    label.classList.add('active');
  } else {
    label.classList.remove('active');
  }
});



  AOS.init({
    duration: 1500,
    throttleDelay: 99
  });

  window.addEventListener('load', function() {
    // Check if the device is a mobile device
    if (/Mobi|Android/i.test(navigator.userAgent)) {
      // Remove AOS initialization on mobile devices
      AOS.init({ disable: true });
    }
  });