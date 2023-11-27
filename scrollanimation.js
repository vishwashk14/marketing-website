gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(
  ".nav_bar",
  { y: "-80", opacity: 0 },

  { y: "6", opacity: 1, duration: 0.5 }
);

gsap.fromTo(
  ".rocket_img",
  { y: 100, opacity: 0 },

  { y: 0, opacity: 1, duration: 0.5 }
);

gsap.fromTo(
  ".btn_div",
  { y: 30, opacity: 0 },

  { y: 0, opacity: 1, duration: 0.5 }
);

gsap.fromTo(
  ".social_div ",
  { x: -100, opacity: 0 },
  { duration: 0.5, x: 0, opacity: 1 }
);

gsap.fromTo(
  ".red_card_wrapper",
  { x: -100, opacity: 0, scale: 0.9 },
  {
    duration: 0.5,
    scale: 1,
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".blue_card_wrapper",
      start: "top 80%",
      end: "bottom center",
    },
  }
);

gsap.fromTo(
  ".blue_card_wrapper",
  { x: 100, opacity: 0, scale: 0.9 },
  {
    duration: 0.5,
    scale: 1,
    opacity: 1,
    x: 0,
    scrollTrigger: {
      trigger: ".blue_card_wrapper",
      start: "top 80%",
      end: "bottom center",
    },
  }
);


gsap.fromTo('.proven_image', {x: -100, opacity: 0}, {duration: 0.5,opacity: 1, x: 0, scrollTrigger: {
    trigger: '.proven_image',
    start: 'top 65%',
    end: 'end 10%',
    margkers : true
}})

gsap.fromTo('.proven_content_wrapper', {x: 100, opacity: 0}, {duration: 0.5,opacity: 1, x: 0, scrollTrigger: {
    trigger: '.proven_content_wrapper',
    start: 'top 95%',
    end: 'end 10%',
}})

