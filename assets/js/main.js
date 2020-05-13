document.querySelector('.first-button').addEventListener('click', function() {
document.querySelector('.animated-icon1').classList.toggle('open');
})
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
        entry.target.classList.add('reveal-visible');
        observer.unobserve(entry.target);
      }
    }); 
  }
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r);
  });
//----------------------------------------EFFET-ECRITURE--------------------------------------------------
const title = document.getElementById('autotext');
const text = 'julien Tanguy, developpeur web';
let index = 0;
function play () {
    title.innerHTML = text.slice(0, index);
    index++;
    //la condition permet de rejouer l'animation a l'infini.
    // if (index > text.length) {
    //     index = 0;
    // }
}
// setInterval permet d'appeller une fonction tout les x interval
// ici tout les 300 ms, la fonction play est relancé
let timer = setInterval(play, 300);
//----------------------------------------COMPETENCES-------------------------------------------------- 
// window.onscroll = function(){
//   var competenceList = document.getElementsByClassName('competence');
//   var index = parseInt(window.pageYOffset / 50);
//       if(index < paragraphList.length){
//           competenceList[index].style.display = 'block';
//       }
// }
// window.onscroll = function(){
//   var html = document.getElementById('scrollHtml');
//   var php = document.getElementById('scrollPhp');
//   var js = document.getElementById('scrollJs');
//   if (window.pageYOffset > 2000) {
//     html.style.display = 'none';
//   }else {
//     html.style.display = 'block';
//   }
// }