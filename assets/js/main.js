;(function($){

$(document).ready(function(){

  //========== SIDEBAR/SEARCH AREA ============= //
    $(".hamburger_menu").on("click", function (e) {
    e.preventDefault();
    $(".slide-bar").toggleClass("show");
    $("body").addClass("on-side");
    $('.body-overlay').addClass('active');
    $(this).addClass('active');
    });
    $(".close-mobile-menu > a").on("click", function (e) {
    e.preventDefault();
    $(".slide-bar").removeClass("show");
    $("body").removeClass("on-side");
    $('.body-overlay').removeClass('active');
    $('.hamburger_menu').removeClass('active');
    });






    
//========== SIDEBAR/SEARCH AREA ============= //

//========== PAGE PROGRESS STARTS ============= // 
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition =
  "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });
//========== PAGE PROGRESS STARTS ============= // 

//========== VIDEO POPUP STARTS ============= //
   if ($(".popup-youtube").length > 0) {
    $(".popup-youtube").magnificPopup({
    type: "iframe",
    });
    }
//========== VIDEO POPUP ENDS ============= //
AOS.init;
AOS.init({disable: 'mobile'});

//========== NICE SELECT ============= //
$('select').niceSelect();

});
//========== COUNTER UP============= //
const ucounter = $('.counter');
if (ucounter.length > 0) {
 ucounter.countUp();  
};
  
//========== PRELOADER ============= //
$(window).on("load", function (event) {
  setTimeout(function () {
    $("#preloader").fadeToggle();
  }, 200);

});

//========== POPUP AREA ============= //
$(".click-here").on('click', function(e) {
  e.preventDefault();
  
  // Get the image source and title
  const $portfolioItem = $(this);
  const imageSrc = $portfolioItem.find('img').attr('src');
  const title = $portfolioItem.find('a').text();
  
  // Determine content based on the portfolio item
  let content = '';
  let description = '';
  let date = '23 April 2024'; // Default date
  
  // Get the image filename to determine which content to show
  const imageName = imageSrc.split('/').pop();
  
  switch(imageName) {
    case 'slb.png':
      description = "Reelup - E commerce Video Platform";
      content = "Crafting Compelling Designs and Strategic Marketing: A Creative Journey Unveiled";
      break;
    case 'portfolio-img3.png':
      description = "Academy - Sales Career";
      content = "Designing educational platform UI/UX for sales academy program";
      break;
    case 'portfolio-img4.png':
      description = "Leadlogic - Dashboard Design";
      content = "Developed modern, data-driven dashboard interface for sales analytics platform";
      break;
    case 'portfolio-img2.png':
      description = "E-Commerce Platform";
      content = "Created comprehensive e-commerce platform design";
      break;
    case 'kingpie.png':
      description = "King Pie Digital Transformation";
      content = "My Contribution at Vetro Media – King Pie Project\n\nDuring my time at Vetro Media, I had the opportunity to contribute to the success of King Pie as a webmaster, working closely with the development and creative teams. I collaborated directly with Sandile and played a key role in preparing and optimizing design assets and slices for frontend development. My responsibilities included:\n\nPreparing high-quality sliced assets for web use from design files to ensure consistency and performance.\nSupporting the development of digital campaigns and loyalty programs, including the King Pie Royal Rewards platform.\nCollaborating on digital initiatives such as in-store promotions, website optimizations, and seasonal campaign rollouts.\nHelping maintain the brand's online presence, contributing to website updates, content publishing, and SEO best practices.\n\nMy work contributed to maintaining King Pie's strong digital presence and ensuring that brand visuals were correctly implemented across platforms. It was rewarding to be part of a team that played such a pivotal role in King Pie's digital transformation.";
      break;
  }
  
  // Update the popup content
  $('.custom-model-main .img1 img').attr('src', imageSrc);
  $('.custom-model-main .content a').text(description);
  $('.custom-model-main .content p').text(content);
  $('.custom-model-main .content p.pera').text("Through strategic marketing, these designs are brought to life, leveraging data-driven insights and innovative approaches.");
  
  // Show the popup
  $(".custom-model-main").addClass('model-open');
});

$(".close-btn, .bg-overlay").click(function(e){
  e.preventDefault();
  $(".custom-model-main").removeClass('model-open');
});

// Close popup when clicking outside
$(document).on('click', function(e) {
  if ($(e.target).is('.custom-model-main')) {
    $(".custom-model-main").removeClass('model-open');
  }
});

//========== KING PIE POPUP ============= //
const kingPieItem = document.querySelector('.portfolio-boxarea2:last-child');
const kingPiePopup = document.getElementById('kingPiePopup');
const closeButtons = kingPiePopup.querySelectorAll('.close-popup');
const overlay = kingPiePopup.querySelector('.popup-overlay');

kingPieItem.addEventListener('click', function(e) {
    e.preventDefault();
    kingPiePopup.style.display = 'block';
    document.body.style.overflow = 'hidden';
});

// Close popup functionality
closeButtons.forEach(button => {
    button.addEventListener('click', function() {
        kingPiePopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
});

// Close popup when clicking outside
overlay.addEventListener('click', function() {
    kingPiePopup.style.display = 'none';
    document.body.style.overflow = 'auto';
});

// Close popup when pressing escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && kingPiePopup.style.display === 'block') {
        kingPiePopup.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
});

//========== GSAP AREA ============= //
if($('.reveal').length){gsap.registerPlugin(ScrollTrigger);let revealContainers=document.querySelectorAll(".reveal");revealContainers.forEach((container)=>{let image=container.querySelector("img");let tl=gsap.timeline({scrollTrigger:{trigger:container,toggleActions:"play none none none"}});tl.set(container,{autoAlpha:1});tl.from(container,1.5,{xPercent:-100,ease:Power2.out});tl.from(image,1.5,{xPercent:100,scale:1.3,delay:-1.5,ease:Power2.out});});}

// Theme toggle functionality
const toggleButton = document.getElementById('theme-toggle');
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('light-mode');
    toggleButton.checked = true;
}
toggleButton.addEventListener('change', () => {
    document.body.classList.toggle('light-mode');
    
    if (document.body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark-mode');
    }
});

// UPDATE: I was able to get this working again... Enjoy!
var cursor = document.querySelector('.procus-cursor');
var cursorinner = document.querySelector('.procus-cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})

})(jQuery);
