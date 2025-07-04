
document.addEventListener("DOMContentLoaded", function() {
  const skillsSection = document.getElementById('skills');
  const progressBars = skillsSection.querySelectorAll('.progress-bar');
  let animated = false;

  function animateBars() {
    const sectionTop = skillsSection.getBoundingClientRect().top;
    const sectionBottom = skillsSection.getBoundingClientRect().bottom;
    const windowHeight = window.innerHeight;

    // Check if section is in viewport
    if (sectionTop < windowHeight && sectionBottom > 0 && !animated) {
      progressBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        if (width) bar.style.width = width;
      });
      animated = true;
    }
    // Optional: Reset animation if you want it to replay when scrolling up
    // else if (sectionTop > windowHeight || sectionBottom < 0) {
    //   progressBars.forEach(bar => bar.style.width = '0');
    //   animated = false;
    // }
  }

  window.addEventListener('scroll', animateBars);
  // Run on load in case section is already visible
  animateBars();
});