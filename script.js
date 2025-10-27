gsap.registerPlugin(ScrollTrigger);
// gsap.registerPlugin(MotionPathPlugin);

//캐릭터
// main_wrap
let assemble = gsap.timeline({
  scrollTrigger: {
    trigger: ".main_wrap",
    start: "top top", 
    scrub: true,
    // markers: true 
  }
});

assemble.to(".body", {
  rotate: -10,           
  duration: .1,
  ease: "back.out(2)"
});

assemble.to(".body", {
  right: 70,     
  rotate: 0,    
  duration: .5,
  ease: "power2.out"
});

assemble.to(".head", {
  y: -25,          
  duration: .3,
  ease: "power2.out"
}, "-=.5");

// Profile_wrap
let assemble_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Profile_wrap",
    start: "top 20%", 
    end: "bottom 80%",
    scrub: true,
    // markers: true 
  }
});

assemble_2.to(".right-arm", {
  rotate: -10,           
  duration: .1,
  ease: "back.out(2)"
});

assemble_2.to(".right-arm", {
  right: 30,     
  rotate: 210,    
  duration: .5,
  ease: "power2.out"
});

// menu_wrap
let assemble_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".menu_wrap",
    start: "top 20%", 
    end: "bottom 50%",
    scrub: true,
    // markers: true 
  }
});

assemble_3.to(".left-arm", {
  right: 145,     
  rotate: 80,    
  duration: .5,
  ease: "power2.out"
});

// finish_wrap
let assemble_4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".finish_wrap",
    start: "top 10%",
    once: true,    
    onEnter: () => finishTimeline.play(),
    // markers: true 
  }
});

assemble_4.to(".foot-1", {
  right: 10,   
  rotate: -20,       
  duration: 1,
  ease: "power2.out"
});

assemble_4.to(".nofoot", {
  bottom: 60,         
  duration: .5,
  ease: "power2.out"
}, "-=.5");

let finishTimeline = gsap.timeline({ paused: true });

finishTimeline.to(".part", {
  opacity: 0,
  duration: .4,
  ease: "power2.out"
});

// 전체 캐릭터 등장
finishTimeline.to(".full-body", {
  opacity: 1,
  duration: 0.6,
  ease: "power2.out"
}, "-=0.2");

// 점프 (상승)
finishTimeline.to(".full-body", {
  x: -440,     
  y: -280,    
  duration: 0.6,
  ease: "power2.out"
});

// 점프 중 팔 늘어진 이미지로 전환
finishTimeline.to(".full-body", {
  opacity: 0,
  duration: 0.1
},  "-=.6");

finishTimeline.to(".full-jump", {
  x: -440,     
  y: -280,
  opacity: 0,
  rotate: -40,
  duration: 0.2
}, "-=.4");

finishTimeline.to(".full-jump", {
  x: -440,     
  y: -280,
  opacity: 1,
  rotate: -40,
  duration: 0.2
}, "-=.4");

finishTimeline.to(".full-catch", {
  x: -440,     
  y: -280,
  opacity: 0,
  rotate: -40,
  duration: 0.2
}, "-=1");

finishTimeline.to(".full-jump", {
  opacity: 0,
  duration: 0.1
},  "-=.3");

finishTimeline.to(".full-catch", {
  x: -460,     
  y: -290,
  opacity: 1,
  rotate: -20,
  duration: 0.2
}, "-=.3");

finishTimeline.to([".you"], {
  rotation: 15,
  transformOrigin: "left center",
  duration: 0.4,
  ease: "power2.out"
}, "+=1")

finishTimeline.to([".full-catch"], {
  y: -224,
  rotate: 1,
  transformOrigin: "left center",
  duration: 0.4,
  ease: "power2.out"
}, "-=.4")


  // tab-menu
$('.tab-btn-box img').on('click', function() {
  
  $('.text-menu').toggleClass('active');
  $('.box-menu').toggleClass('active');

  // 이미지 교체
  const imgEl = $('.tab-img');
  const textEl = $('.tab-text');

  // 현재 이미지 src 읽기
  const imgSrc = imgEl.attr('src');
  const textSrc = textEl.attr('src');

  // 이미지 파일명 교체 (On/Off 스위치)
  if (imgSrc.includes('tab-imgOff.png')) {
    imgEl.attr('src', './imgs/tab-imgOn.png');
    textEl.attr('src', './imgs/tab-textOff.png');
  } else {
    imgEl.attr('src', './imgs/tab-imgOff.png');
    textEl.attr('src', './imgs/tab-textOn.png');
  }
});

