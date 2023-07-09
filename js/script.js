// TOGGLE NAV
const menuToggleButton = document.querySelector('.menu-toggle-button');
const menuElement = document.querySelector('.menu');

const toggleMenu = () => {
    menuElement.classList.toggle('active');
    menuToggleButton.classList.toggle('active');
};

menuToggleButton.addEventListener('click', toggleMenu);

// REMOVE ACTIVE CLASS
const removeActiveLinkClass = e => {
    if(e.target.classList.contains('list-link')){
        menuElement.classList.remove('active');
        menuToggleButton.classList.remove('active');
    } 
}

document.addEventListener('click', removeActiveLinkClass);

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

const input = document.getElementById('message');
const label = document.querySelector('.input-label');

input.addEventListener('input', () => {
  if (input.value.trim() !== '') {
    label.classList.add('active');
  } else {
    label.classList.remove('active');
  }
});

const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
  });
  r.init();

  AOS.init({
    disable: false,
    duration: 1500,
    throttleDelay: 99
  });