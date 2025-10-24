// javascript start
	// wow start
	wow = new WOW(
	  {
	  boxClass: 'wow',
	  animateClass: 'animated',
	  offset: 0,
	  mobile: true,
	  live: true
	}
	)
	wow.init();

	// testimonials start
	let wrapper = document.getElementById('testimonialWrapper');
	let upBtn = document.getElementById('upBtn');
	let downBtn = document.getElementById('downBtn');
	let testimonials = document.querySelectorAll('.testimonial');
	let currentIndex = 0;
	function updateSlider() {
	  let isMobile = window.innerWidth < 576; 
    
    // Adjust if needed
	  let slideHeight = isMobile ? 330 : 280;
	  wrapper.style.transform = `translateY(-${currentIndex * slideHeight}px)`;
	};
	upBtn.addEventListener('click', () => {
	  if (currentIndex > 0) {
	    currentIndex--;
	    updateSlider();
	  }
	});
	downBtn.addEventListener('click', () => {
	  if (currentIndex < testimonials.length - 1) {
	    currentIndex++;
	    updateSlider();
	  }
	});

	// Recalculate on window resize
	window.addEventListener('resize', updateSlider);

	// Initial run
	updateSlider();

// jquery start
$(document).ready(function(){

	// scroll_up start
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 550) {
	    $(".scrollup").fadeIn();
	  } else {
	    $(".scrollup").fadeOut();
	  }
	});
	$(".scrollup").click(function() {
	  $("html").animate({
	    scrollTop: 0
	  }, 550);
	  return false;
	});

	// video start
  $("#b_play").videoPopup();

  // count_1 start
	$('.counter').counterUp({
    time: 1500
	});

	// progress start	
 let progress = 40;
  $('.td_bgc').animate({ width: progress + '%' }, 2000);
  
	});




















  const scrollContainer = document.getElementById('testimonialScroll');
  const dots = document.querySelectorAll('.dot');
  const cardHeight = 310;

  let autoSlideInterval;

  function setActiveDot(index) {
    dots.forEach((dot) => dot.classList.remove('active'));
    dots[index].classList.add('active');
  }

  function updateDots() {
    const index = Math.round(scrollContainer.scrollTop / cardHeight);
    setActiveDot(index);
  }

  function scrollToIndex(index) {
    scrollContainer.scrollTo({ top: index * cardHeight, behavior: 'smooth' });
    setActiveDot(index);
  }

  
  function scrollNext() {
    let currentIndex = Math.round(scrollContainer.scrollTop / cardHeight);
    currentIndex++;
    if (currentIndex >= dots.length) currentIndex = 0;
    scrollToIndex(currentIndex);
  }


  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    autoSlideInterval = setInterval(scrollNext, 4000);
  }

  
  document.getElementById('scrollUp').addEventListener('click', () => {
    let currentIndex = Math.round(scrollContainer.scrollTop / cardHeight);
    currentIndex--;
    if (currentIndex < 0) currentIndex = dots.length - 1;
    scrollToIndex(currentIndex);
    resetAutoSlide();
  });

  document.getElementById('scrollDown').addEventListener('click', () => {
    scrollNext();
    resetAutoSlide();
  });

  
  dots.forEach((dot) => {
    dot.addEventListener('click', () => {
      const index = parseInt(dot.dataset.index);
      scrollToIndex(index);
      resetAutoSlide();
    });
  });

  
  autoSlideInterval = setInterval(scrollNext, 4000);
  $(document).ready(function(){

  function animateProgressBar() {
    $('.progress-bar').each(function(){
      var $bar = $(this);
      var target = $bar.data('progress');
      var $text = $bar.closest('.progress-container').find('.progress-text');

      // Check if in viewport
      var barTop = $bar.offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();

      if (windowBottom > barTop && !$bar.hasClass('animated')) {
        $bar.addClass('animated'); // prevent re-animation

        // Animate bar
        $bar.animate({ width: target + '%' }, 1000);

        // Animate percentage text
        $({countNum: 0}).animate({countNum: target}, {
          duration: 1000,
          easing: 'linear',
          step: function() {
            $text.text(Math.floor(this.countNum) + '% completed');
          },
          complete: function() {
            $text.text(this.countNum + '% completed');
          }
        });
      }
    });
  }

  
  $(window).on('scroll', animateProgressBar);
  animateProgressBar();

});
 $(document).ready(function () {
    $('#loginModal form').on('submit', function (e) {
      e.preventDefault();
      var email = $('#loginEmail').val().trim();
      var password = $('#loginPassword').val().trim();
      var isValid = true;

      
      $('#loginEmail, #loginPassword').removeClass('is-invalid');

      // Validate email
      if (email === '' || !validateEmail(email)) {
        $('#loginEmail').addClass('is-invalid');
        isValid = false;
      }

      
      if (password === '') {
        $('#loginPassword').addClass('is-invalid');
        isValid = false;
      }

      if (isValid) {
        alert('Login successful!');
        var modal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
        modal.hide();
        this.reset();
      }
    });

    function validateEmail(email) {
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re.test(email.toLowerCase());
    }
  });
   document.querySelectorAll('.dropdown-item').forEach(item => {
    item.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent link navigation
      document.getElementById('languageDropdown').textContent = this.textContent; // Change button text
    });
  });