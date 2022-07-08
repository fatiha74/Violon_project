
// POUR LE CURSEUR
  
const videobox = document.querySelector('.bloc_video');
const lavideo = document.querySelector('video');
const section2 = document.querySelector('.accueil_sct2');

const curs = document.querySelector('.cursor');
const hauteurPage = document.body.scrollHeight;

videobox.addEventListener("mouseleave", function(e) {
  curs.classList.remove("curs");
  console.log('ok');
}); 
videobox.addEventListener("mouseenter", function(e) {
  curs.classList.add("curs");
  //  curs.setAttribute('style','top:'+(e.clientY)+"px; left:"+(e.clientX)+"px;")
console.log(e);

window.addEventListener("mousemove", function(e) {
if(curs.classList.contains("curs")){
curs.setAttribute('style','top:'+(e.clientY)+"px; left:"+(e.clientX)+"px;")
}else{
curs.classList.add("curs");
curs.setAttribute('style','top:'+(e.clientY)+"px; left:"+(e.clientX)+"px;")
}
}); 

}); 

 




// POUR LE SON

  function mute(){
    if(lavideo.muted ){
      curs.classList.remove("curs_off");
    curs.classList.add("curs_on");
    lavideo.muted =false;
    }else{
    curs.classList.add("curs_off");
   curs.classList.remove("curs_on")
    lavideo.muted = true;
 }
  }
   lavideo.addEventListener('click', mute);
   curs.addEventListener('click', mute);

//  document.addEventListener('mouseover', e =>{
//   // curs.setAttribute('style','top:'+(e.pageY)+"px; left:"+(e.pageX)+"px;")
//  })
// // *************************************************************








// POUR L'AGRANDISSEMENT DE LA VIDEO AU SCROLL

window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;
  let positionecran = (derniere_position_de_scroll_connue + videobox.offsetHeight) - (hauteurPage / 3);
  //  console.log(positionecran);
 


  if (derniere_position_de_scroll_connue > hauteurPage / 3) {

  // console.log(derniere_position_de_scroll_connue,  videobox.offsetHeight , hauteurPage );
  //notre 100%
  let pourcentage = Math.round((positionecran * 100)/(hauteurPage / 3)-100);
let divbefore = document.querySelector('.before');
let divafter = document.querySelector('.after');

divbefore.style.transform = "translateX("+ (- pourcentage)+ "%)";
divafter.style.transform = "translateX("+ (+ pourcentage)+ "%)";
  console.log("translateX("+ (- pourcentage)+ ")");
  //  console.log(((positionecran * 100)/(hauteurPage / 3))-100);
  
 
}
});



// ************************************
const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {
        if(entry.intersectionRatio > 0) {
            entry.target.style.animation = `anim1 2s ${entry.target.dataset.delay} forwards ease-out`;
        }
        else {
            entry.target.style.animation = 'none';
        }
    })

})

images.forEach(image => {
    observer.observe(image)
})



            




