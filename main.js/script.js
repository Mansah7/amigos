
document.addEventListener("DOMContentLoaded", function () {
  const customCursor = document.querySelector(".custom-cursor");

  document.addEventListener("mousemove", (e) => {
      // Update the custom cursor position to match the default cursor
      customCursor.style.left = `${e.clientX}px`;
      customCursor.style.top = `${e.clientY}px`;
  });

  // Add a class to the custom cursor when hovering over clickable elements
  const clickableElements = document.querySelectorAll("a, button, .clickable-element");

  clickableElements.forEach((element) => {
      element.addEventListener("mouseenter", () => {
          customCursor.classList.add("cursor-hover");
      });
      element.addEventListener("mouseleave", () => {
          customCursor.classList.remove("cursor-hover");
      });
  });
});



gsap.registerPlugin(ScrollTrigger);



function runHeadingAnim() {
    const headingAnim = document.querySelectorAll('h1 div.mask');
    const paragraphAnim = document.querySelector('.mask_p p');
    const btnAnim = document.querySelector('.mask_btn a')
    const imageAnim = document.querySelector('.mask_img img')


    gsap.to(headingAnim, {
      duration:2,
      y: 0,
      stagger: 0.1
    })

    gsap.to(paragraphAnim, {
      duration:2,
      y:0,
      opacity:1,
      stagger: 0.1,
      delay:1
      
    })

    gsap.to(btnAnim, {
      
      duration:.5,
      y:0,
      opacity:1,
      stagger: 0.1,
      delay:2
      
      
    })

    gsap.to(imageAnim, {
      
      duration:2,
      y:0,
      stagger: 0.1,
      delay:1.5
    })

};


function otherAnimations() {

      const headingAnim2 = document.querySelector(".text");
      const projectButton = document.querySelector(".content a span");
      const projectImage = document.querySelector(".content .image-box img");
      const projectText = document.querySelector(".content p span");
      const contactText = document.querySelector(".contact-message p span");
      const contactDetails = document.querySelectorAll(".contact-details p span");
      const inPageHeroAnimHeading = document.querySelectorAll('.right h4 span')
      const inPageHeroAnimParagraph = document.querySelectorAll('.right .right-p span');
      const pillarHeading = document.querySelectorAll('.pillar h6 span');
      const pillarParagraph = document.querySelectorAll('.pillar p span');
      const approachHeading = document.querySelector('.approach-description h5 span');
      const approachParagraph = document.querySelector('.approach-description p span');
      const methodologyHeading = document.querySelector('.project-methodology h5 span');
      const methodologyParagraph = document.querySelector('.project-methodology p span');
      const methodologyImage = document.querySelector('.project-methodology .image-box img');
      const ctaHeading = document.querySelector('.newsletter h4 span');
      const ctaParagrah = document.querySelector('.newsletter p span');
      const ctaInput = document.querySelector('.input-container div');



      // other animations

      gsap.to(headingAnim2, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: headingAnim2,
          start: "top 80%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      gsap.to(projectImage, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: projectImage,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      gsap.to(projectText, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: projectText,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      gsap.to(projectButton, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: projectButton,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      gsap.to(contactText, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: contactText,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      contactDetails.forEach((element) => {
        gsap.to(element, {
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            toggleActions: 'play play play reverse',
            // markers: true,
          },
        });
      });
      
      gsap.to(ctaHeading, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ctaHeading,
          start: "top 80%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      gsap.to(ctaParagrah, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ctaParagrah,
          start: "top 80%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      
      gsap.to(ctaInput, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: ctaInput,
          start: "top 80%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      inPageHeroAnimHeading.forEach((element) => {
        gsap.to(element, {
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            toggleActions: 'play play play reverse',
            // markers: true,
          },
        });
      });
      
      inPageHeroAnimParagraph.forEach((element) => {
        gsap.to(element, {
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            toggleActions: 'play play play reverse',
            // markers: true,
          },
        });
      });
      
      pillarHeading.forEach((element) => {
        gsap.to(element, {
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            toggleActions: 'play play play reverse',
            // markers: true,
          },
        });
      });
      
      
      
      pillarParagraph.forEach((element) => {
        gsap.to(element, {
          y: 0,
          duration: 2,
          scrollTrigger: {
            trigger: element,
            start: "top 80%", // Adjust as needed
            end: "top 20%", // Adjust as needed
            toggleActions: 'play play play reverse',
            // markers: true,
          },
        });
      });
      
      gsap.to(approachHeading, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: approachHeading,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      gsap.to(approachParagraph, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: approachParagraph,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      
      gsap.to(methodologyHeading, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: methodologyHeading,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      gsap.to(methodologyParagraph, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: methodologyParagraph,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
      
      
      gsap.to(methodologyImage, {
        y: 0,
        duration: 2,
        scrollTrigger: {
          trigger: methodologyImage,
          start: "top 100%", // Adjust as needed
          end: "top 20%", // Adjust as needed
          toggleActions: 'play play play reverse'
          // markers: true,
        },
      });
  
};



function countUpTo9_1() {
  var element = document.querySelector('.number-count');
  var count = 0;
  var increment = 0.1;
  var target = 9;

  if (!element) {
    // Check if the element is not found and return early
    return;
  }

  function updateCount() {
      if (count < target) {
          count += increment;
          element.textContent = count.toFixed(1) + "M"; // Ensure one decimal place
          setTimeout(updateCount, 10); // Change the delay to control the speed
      }
  }

  updateCount();
}

function countUpTo20() {
  var element = document.querySelector('.partners-number');
  var count = 0;
  var increment = 1;
  var target = 20;

  if (!element) {
    // Check if the element is not found and return early
    return;
  }

  function updateCount() {
      if (count < target) {
          count += increment;
          element.textContent = count;
          setTimeout(updateCount, 60); // Change the delay to control the speed
      }
  }

  updateCount();
}

function reinitAnimations() {
  runHeadingAnim();
  otherAnimations();
  countUpTo9_1();
  countUpTo20();
}


document.addEventListener('DOMContentLoaded', function () {
  reinitAnimations();

  barba.hooks.afterEnter((data) => {
    reinitAnimations();
  });
});

// Page transition

const allBandes = document.querySelectorAll('.bande');
const bandesContainer = document.querySelector('.bande-container'); // Use querySelector to select the container
const TlAnime = gsap.timeline();

function delay(n) {
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
}

barba.init({
  sync: true,
  transitions: [
    {
      async leave() {
        const done = this.async();
        // Animate the bandesContainer's height to 100vh
        TlAnime.to(bandesContainer, { height: '100vh', duration: 0.5 });
        TlAnime.to(allBandes, { height: '100%', stagger: 0.05 });
        await delay(1500);
        done();
      },
      enter() {
        // Animate the bandesContainer's height back to 0vh
        TlAnime.to(allBandes, { height: '0%', stagger: 0.05, onComplete: reinitAnimations  });
        TlAnime.to(bandesContainer, { height: '0vh', duration: 0.5 });
        
      },
    },
  ],
});


// Before and After


$("#slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
});

$("#slider").on("input change", (e)=>{
  const sliderPos = e.target.value;
  // Update the width of the foreground image
  $('.foreground-img').css('width', `${sliderPos}%`)
  // Update the position of the slider button
  $('.slider-button').css('left', `calc(${sliderPos}% - 18px)`)
});



function validateInput(input) {
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+/;
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("adresse_email");

  // Check for empty input
  if (input.value.trim() === "") {
    input.classList.remove("valid");
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    
    // Check for valid email format (only for the email input)
    if (input === emailInput && !input.value.match(emailRegex)) {
      input.classList.remove("valid");
      input.classList.add("error");
    } else if (input === nameInput) {
      // Add your validation rule for the name input here
      // For example, check if the name has at least 3 characters
      if (input.value.trim().length >= 3) {
        input.classList.remove("error");
        input.classList.add("valid");
      } else {
        input.classList.remove("valid");
        input.classList.add("error");
      }
    } else {
      input.classList.remove("error");
      input.classList.add("valid");
    }
  }

  // Check if both name and email inputs are filled and valid
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "" && emailInput.classList.contains("valid")) {
    nameInput.classList.add("valid");
    emailInput.classList.add("valid");
  } else {
    nameInput.classList.remove("valid");
    emailInput.classList.remove("valid");
  }
}

// Attach the validateInput function to the onblur event of all inputs
var inputs = document.querySelectorAll("input[type='text'], input[type='email']");
inputs.forEach(function(input) {
  input.addEventListener("blur", function() {
    validateInput(input);
  });
});


function validateName(input) {
  var nameInput = document.getElementById("name");

  // Check for empty input or if it has at least 3 characters
  if (input.value.trim() === "" || input.value.trim().length < 3) {
    input.classList.remove("valid");
    input.classList.add("error");
  } else {
    input.classList.remove("error");
    input.classList.add("valid");
  }
}

var nameInput = document.getElementById("name");
nameInput.addEventListener("blur", function() {
  validateName(this);
});





    const lenis = new Lenis()

    lenis.on('scroll', (e) => {
      console.log(e)
    })
    
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    
    requestAnimationFrame(raf)