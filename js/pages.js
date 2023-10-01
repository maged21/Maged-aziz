var t1 = new TimelineMax({paused: true});

t1.to(".title-one", 0.5, {
    y: 80,
    opacity: 0,
    ease:Expo.easeOut,
    delay: -1.5
}, 0.2);

t1.to(".title-two", 0.7, {
    y: 90,
    opacity: 0,
    ease:Expo.easeOut,
    delay: -1.9
}, 0.3);

t1.to(".title-three", 1.2, {
    y: 100,
    opacity: 0,
    ease:Expo.easeOut,
    delay: -2.5
}, 0.4);

t1.to(".one", 0.8, {
     y: 6,
     rotation: 45,
     ease: Expo.easeInOut
});
t1.to(".two", 0.8, {
     y: 1,
     rotation: -45,
     ease: Expo.easeInOut,
     delay: -0.8
});

t1.to(".menu", 2, {
     top: "0%",
     ease: Expo.easeInOut,
     delay: -2
});

t1.staggerFrom(".menu ul li", 2, {
    x: -200, 
    opacity: 0, 
    ease:Expo.easeOut
}, 0.3);

t1.reverse();
$(document).on("click", ".toggle-btn", function() {
    t1.reversed(!t1.reversed());
});
$(document).on("click", "a.list-link", function() {
    t1.reversed(!t1.reversed());
});


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