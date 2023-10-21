gsap.from(".shadow-title div", 1.5, {
  yPercent: 100,
  ease: "power4.inOut",
  stagger: {
      amount: 0.5,
  },
});

gsap.to(".shadow-title", 1.5, {
  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
  ease: "power4.inOut",
  stagger: {
      amount: 0.5
  },
});

document.addEventListener("DOMContentLoaded",
function () {
  let overlay = document.querySelector(".overlay");
  overlay.addEventListener("click", function () {
      gsap.to(".shadow-title div", 1.5, {
          yPercent: -100,
          ease: "power4.inOut",
          stagger: {
              amount: 0.5,
          },
      });

      gsap.to(".shadow-title", 1.5, {
          clipPath: "polygon(0 85%, 100% 85%, 100% 100%, 0 100%)",
          ease: "power4.inOut",
          stagger: {
              amount: 0.5,
          },
      }, 0);
      
      gsap.to(".overlay", 2, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          ease: "power4.inOut",
      });

      gsap.to(".loader-img", 2, {
          clipPath: "polygon(0 100%, 100% 100%, 100% 0%, 0% 0%)",
          ease: "power4.inOut",
          stagger: {
              amount: 1.5,
          },
      });

      gsap.to(".loader", 2, {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0 0%)",
          ease: "power4.inOut",
          delay: 2,
      });
  });
});
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
  