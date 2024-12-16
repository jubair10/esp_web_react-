import { gsap, Expo, Power4 } from "gsap";

export function startUp ()  {
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
export function ModalPopUp() {
  gsap.from(".modal",{
    scale:0,
    duration:2,
    ease:Expo.easeInOut
  })
}

export const handleMouseEnter = (btnRef) => {
  // Calculate the magnet strength
  const magnetStrength = 0.5; // Reduce the magnet strength

  // Get the window size
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Define a function to update the button's position based on the mouse position
  const updatePosition = (e) => {
    // Calculate the distance between the button's center and the mouse position
    const { left, top, width, height } =
      btnRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const dx = e.clientX - centerX;
    const dy = e.clientY - centerY;

    // Apply magnetism to the button's position
    let newX = centerX + dx * magnetStrength;
    let newY = centerY + dy * magnetStrength;

    // Ensure the element stays within the window boundaries
    newX = Math.max(0, Math.min(newX, windowWidth - width));
    newY = Math.max(0, Math.min(newY, windowHeight - height));

    // Update the button's position using GSAP
    gsap.to(btnRef.current, {
      x: newX - centerX,
      y: newY - centerY,
      duration: 0.2,
      ease: Power3.easeOut,
    });
  };

  // Add event listener to track mouse movement while hovering over the button
  btnRef.current.addEventListener("mousemove", updatePosition);

  // Remove event listener when mouse leaves the button
  btnRef.current.addEventListener("mouseleave", () => {
    btnRef.current.removeEventListener("mousemove", updatePosition);
  });
};

export const handleMouseLeave = (btnRef) => {
  gsap.to(btnRef.current, {
    scale: 1,
    duration: .7,
    x: 0,
    y: 0,
    ease: Power3.easeOut,
  });
};

export const magnet = (btnRef, scale, magnetStrength) => {
  const handleMouseEnter = () => {
    // Define a function to update the button's position based on the mouse position
    const updatePosition = (e) => {
      // Calculate the distance between the button's center and the mouse position
      const { left, top, width, height } = btnRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;
      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;

      // Apply magnetism to the button's position
      let newX = centerX + dx * magnetStrength;
      let newY = centerY + dy * magnetStrength;

      // Ensure the element stays within the window boundaries
      newX = Math.max(0, Math.min(newX, window.innerWidth - width));
      newY = Math.max(0, Math.min(newY, window.innerHeight - height));

      // Update the button's position using GSAP
      gsap.to(btnRef.current, {
        scale:scale,
        x: newX - centerX,
        y: newY - centerY,
        duration: 0.2,
        ease: Power4.easeOut
      });
    };

    // Add event listener to track mouse movement while hovering over the button
    btnRef.current.addEventListener("mousemove", updatePosition);

    // Remove event listener when mouse leaves the button
    btnRef.current.addEventListener("mouseleave", () => {
      btnRef.current.removeEventListener("mousemove", updatePosition);
      handleMouseLeave();
    });
  };

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, {
      // delay: 0.2,
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: Power3.easeOut,

    });
  };

  // Return the handleMouseEnter function to be called externally
  return handleMouseEnter;
};

