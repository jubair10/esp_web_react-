function startUp() {
  let tl = gsap.timeline();

  tl.set(".t1, .t2, .t3, .t4, .t5, .t6, .t7", { opacity: 0 });

  // Define the animation sequence
  tl.to(".t1", {
    opacity:1,
    duration:0.8,
    ease: Expo.easeInOut,
  })
  .to(".t1", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  }, "+=1") // Start the fade-out animation of ".t1" 1 second after it fades in
  .from(".t2", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  })
  .to(".t2", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  }, "+=1") // Start the fade-out animation of ".t2" 1 second after it fades in
  .from(".t3", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  })
  .to(".t3", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  }, "+=1")  
  .from(".t4", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  })
  .to(".t4", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  }, "+=1")  
  .from(".t5", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  })
  .to(".t5", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  }, "+=1")  
  .from(".t6", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  })
  .to(".t6", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  }, "+=1")  
  .from(".t7", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  })
  .to(".t7", {
    opacity: 0,
    duration:0.8,
    ease: Expo.easeInOut,
  }, "+=1")  
  .to("#first", {
    width: 0,
    delay: .8,
    duration: 1.5,
    ease: Expo.easeInOut,
    x: -1000,
  })
    .from("header", {
      height: 0,
      duration: 1.5,
      ease: Expo.easeInOut,
      scale: 0,
      delay: -1,
    })
    .from(".gridTable", {
      height: 0,
      duration: 2,
      ease: Expo.easeInOut,
      // y:-1000,
      scale: 0,
      delay: -1.5,
    });
}

// startUp();


Shery.mouseFollower();

Shery.makeMagnet(".text-5xl, .btn, nav ul li span, .card" /* Element to target.*/, {
    //Parameters are optional.
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
