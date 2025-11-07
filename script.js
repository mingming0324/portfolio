gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);
// 스크롤 컨테이너 지정
ScrollTrigger.defaults({
  scroller: ".container"
});

// 이미지/폰트 로드 후 레이아웃 확정되면 갱신
window.addEventListener("load", () => ScrollTrigger.refresh());
//캐릭터
// main_wrap
let assemble = gsap.timeline({
  scrollTrigger: {
    trigger: ".main",
    start: "top 10%",
    onEnter: () => mainTimeline.play(),
    onLeaveBack: () => mainTimeline.reverse(),
    // markers: true 
  }
});
let mainTimeline = gsap.timeline({ paused: true });

mainTimeline.to(".body .line", {
  opacity: 0,
  duration: .4,
  ease: "power2.out"
});

mainTimeline.to(".body", {
  left: 85,
  bottom: 30,
  duration: .4,
  ease: "power2.out"
}, "+=.5");

mainTimeline.to(".right-arm", {
  left: 250,
  duration: .4,
  ease: "power2.out"
}, "-=.4");

mainTimeline.to(".left-arm", {
  left: 370,
  duration: .4,
  ease: "power2.out"
}, "-=.4");

mainTimeline.to(".foot", {
  left: 460,
  duration: .4,
  ease: "power2.out"
}, "-=.4");




// Profile_wrap
let assemble_2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".Profile_wrap",
    start: "top center",
    scroller: ".container",
    onEnter: () => ProfileTimeline.play(),
    onLeaveBack: () => ProfileTimeline.reverse(),
    // markers: true 
  }
});

let ProfileTimeline = gsap.timeline({ paused: true });

ProfileTimeline.to(".right-arm .line", {
  opacity: 0,
  duration: .4,
  ease: "power2.out"
}, "+=.4");

ProfileTimeline.to(".right-arm", {
  left: 165,
  bottom: 50,
  rotate: -140,
  duration: .4,
  ease: "power2.out"
}, "+=.4");

ProfileTimeline.to(" .left-arm", {
  left: 270,
  duration: .4,
  ease: "power2.out"
}, "-=.4");

ProfileTimeline.to(" .foot", {
  left: 370,
  duration: .4,
  ease: "power2.out"
}, "-=.4");

// menu_wrap
let assemble_3 = gsap.timeline({
  scrollTrigger: {
    trigger: ".menu_wrap",
    start: "top center",
    scroller: ".container",
    onEnter: () => menuTimeline.play(),
    onLeaveBack: () => menuTimeline.reverse(),
    // markers: true 
  }
});

let menuTimeline = gsap.timeline({ paused: true });

menuTimeline.to(".left-arm .line", {
  opacity: 0,
  duration: .4,
  ease: "power2.out"
}, "+=.4");

menuTimeline.to(".left-arm", {
  left: 50,
  bottom: 63,
  rotate: 90,
  duration: .4,
  ease: "power2.out"
}, "+=.4");

menuTimeline.to(" .foot", {
  left: 270,
  duration: .4,
  ease: "power2.out"
}, "-=.4");

// finish
let assemble_4 = gsap.timeline({
  scrollTrigger: {
    trigger: ".finish_wrap",
    start: "top center",
    scroller: ".container",
    onEnter: () => finishTimeline.play(),
    onLeaveBack: () => finishTimeline.reverse(),
    // markers: true 
  }
});

let finishTimeline = gsap.timeline({ paused: true });

finishTimeline.to(".foot .line", {
  opacity: 0,
  duration: .4,
  ease: "power2.out"
}, "+=.4");

finishTimeline.to(".foot", {
  left: 100,
  duration: .4,
  ease: "power2.out"
}, "+=.4");

finishTimeline.to(".foot", {
  opacity: 0,
  duration: .4,
  ease: "power2.out"
}, "-=.4");

finishTimeline.to(".nofoot", {
  opacity: 0,
  duration: .4,
  ease: "power2.out"
}, "-=.4");


finishTimeline.to(".full", {
  opacity: 1,
  duration: .4,
  ease: "power2.out"
}, "-=.4");

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

