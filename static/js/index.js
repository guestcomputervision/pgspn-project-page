window.HELP_IMPROVE_VIDEOJS = false;

// BibTeX copy function
function copyBibtex() {
  var text = document.getElementById('bibtex-content').textContent;
  navigator.clipboard.writeText(text).then(function() {
    var btn = document.querySelector('.bibtex-copy-btn');
    btn.innerHTML = '<i class="fas fa-check"></i> Copied!';
    setTimeout(function() {
      btn.innerHTML = '<i class="fas fa-copy"></i> Copy';
    }, 2000);
  });
}

$(document).ready(function() {
    // Navbar burger toggle
    $(".navbar-burger").click(function() {
      $(".navbar-burger").toggleClass("is-active");
      $(".navbar-menu").toggleClass("is-active");
    });

    // Initialize carousels only if library is loaded and elements exist
    if (typeof bulmaCarousel !== 'undefined' && document.querySelector('.carousel')) {
      bulmaCarousel.attach('.carousel', {
        slidesToScroll: 1,
        slidesToShow: 1,
        loop: true,
        infinite: true,
        autoplay: false,
      });
    }

    if (typeof bulmaSlider !== 'undefined') {
      bulmaSlider.attach();
    }

    // Tab switching
    document.querySelectorAll('.tabs li[data-target]').forEach(function(tab) {
      tab.addEventListener('click', function() {
        var parent = this.closest('.tabs');
        var panels = parent.nextElementSibling;

        // Deactivate all tabs in this group
        parent.querySelectorAll('li').forEach(function(t) { t.classList.remove('is-active'); });
        // Deactivate all panels in this group
        panels.querySelectorAll('.tab-panel').forEach(function(p) { p.classList.remove('is-active'); });

        // Activate clicked tab and target panel
        this.classList.add('is-active');
        var target = this.getAttribute('data-target');
        document.getElementById(target).classList.add('is-active');
      });
    });

    // Scroll-spy: highlight active nav link
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', function() {
      var scrollY = window.pageYOffset;
      sections.forEach(function(section) {
        var sectionTop = section.offsetTop - 80;
        var sectionHeight = section.offsetHeight;
        var sectionId = section.getAttribute('id');
        navLinks.forEach(function(link) {
          if (link.getAttribute('href') === '#' + sectionId) {
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
              link.classList.add('is-active');
            } else {
              link.classList.remove('is-active');
            }
          }
        });
      });
    });
});
