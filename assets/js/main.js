$(document).ready(function () {

    $('.first-button').on('click', function () {
  
      $('.animated-icon1').toggleClass('open');
    });
    $('.second-button').on('click', function () {
  
      $('.animated-icon2').toggleClass('open');
    });
    $('.third-button').on('click', function () {
  
      $('.animated-icon3').toggleClass('open');
    });
  });
  //ANIMATED
  const ratio = 0.9;
      const options = {
        //L'élément qui est utilisé comme zone d'affichage au moment d'évaluer la visibilité de la cible. si null, root = viewport
        root: null,
        rootMargin: '0px',
        //indique à quel pourcentage de la visibilité de la cible la fonction handleIntersect de la cible doit être exécuté.
        threshold: ratio
      }
      const handleIntersect = function (entries, observer) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio > ratio) {
            console.log(entry.target);
            entry.target.classList.add('reveal-visible');
            observer.unobserve(entry.target);
          }
        }); 
      }
      const observer = new IntersectionObserver(handleIntersect, options);
      document.querySelectorAll('.reveal').forEach(function (r) {
        observer.observe(r);
      });

      //test pour skide
    //            //change the opacity for different browsers
    // function changeOpac(opacity, id) {
    //   var object = document.getElementById('slide2').style;
    //   object.opacity = Math.sin(opacity / 100);
    //   object.MozOpacity = Math.sin(opacity / 100);
    //   object.KhtmlOpacity = Math.sin(opacity / 100);
    //   object.filter = "alpha(opacity=" + opacity + ")";
    //   } 
    
    // document.addEventListener('DOMContentLoaded', function() {
    //   window.onscroll = function(ev) {
    //     document.getElementById("scrollHtml").className = (window.pageYOffset > 100) ? "cInvisible" : "cVisible";
    //   };
    // });
        
    
