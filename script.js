$('.tab-btn-box img').on('click', function() {
  // 메뉴 전환
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

