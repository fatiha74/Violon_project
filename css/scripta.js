
// let option1 = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.25
//   }
//   let option2 = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.5
//   }
//   let option3 = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.75
//   }
//   let option4 = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 1
//   }

//   console.log('hello');
//   console.log(options);




  
  // function callback(entries, observer){
  //   console.log(observer);
  //   for (const entry of entries) {
  //     if(entry.isIntersecting ){

  //           console.log(entry.isIntersecting);
  //        entry.target.classList.add('active.squinze:after');

  //            }
     
  //     console.log(entry.target);
  //   }
  // }

  //********************************************************* */ animation video
// console.log("ok");
 let videobox = document.querySelector('.bloc_video');
 let lavideo = document.querySelector('video');
 let section2 = document.querySelector('.accueil_sct2');

 let curs = document.querySelector('.cursor');
 let hauteurPage = document.body.scrollHeight;

// function enableMute() { 
 
// } 

  lavideo.addEventListener("mouseover", function() {
    curs.classList.add("curs");
   
  }); 

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


// *************************************************************

//  function cursor(e){
//    curs.style.top = e.pageY + 'px';
//   mouseCursor.style.left = e.pageX + 'px';
//  }








// 
window.addEventListener('scroll', function(e) {
  derniere_position_de_scroll_connue = window.scrollY;
  console.log(derniere_position_de_scroll_connue,  videobox.offsetHeight  );



  //   if (derniere_position_de_scroll_connue > (hauteurPage -  videobox.offsetHeight/4 - section2.offsetHeight)) {
  //    console.log(' 1');
  //   //  lavideo.classList.add("apparition-25");
  //   videobox.classList.add("apparition-100");

  //   }else if (derniere_position_de_scroll_connue > (hauteurPage -  videobox.offsetHeight/3 - section2.offsetHeight)) {
  //      console.log('  2');
  //       // lavideo.classList.add("apparition-50");
  //       // lavideo.classList.remove("apparition-25");
  //       videobox.classList.add("apparition-75");

  //  } else if (derniere_position_de_scroll_connue > (hauteurPage -  videobox.offsetHeight/2 - section2.offsetHeight)) {
  //       console.log('  3');
  //     //  lavideo.classList.add("apparition-75");
  //     //  lavideo.classList.remove("apparition-50");
  //      // 50% 
  //      lavideo.classList.add("apparition-50");
  //     }else  {
  //         console.log('   4');
  //         videobox.classList.add("apparition-25");
  //       // lavideo.classList.add("apparition-100");
  //       // lavideo.classList.remove("apparition-75");
    
  // //      //   //  80%
  //      }
  //     });


      // *********************************************************
      // son video on off


     
      if (derniere_position_de_scroll_connue < (hauteurPage -  videobox.offsetHeight - section2.offsetHeight)) {
        console.log('apparition-25');
       // lavideo.classList.remove(bloc_video);
        // videobox.classList.add("apparition-25");

     //    //  80%
       }

              if (derniere_position_de_scroll_connue > (hauteurPage -  videobox.offsetHeight - section2.offsetHeight)) {
                 console.log('apparition-25');
                // lavideo.classList.remove(bloc_video);
                 videobox.classList.add("apparition-25");

              //    //  80%
                }

              if (derniere_position_de_scroll_connue > (hauteurPage -  videobox.offsetHeight/2 - section2.offsetHeight)) {
                 console.log('apparition-50');
                 videobox.classList.add("apparition-50");
              //   //  lavideo.classList.remove("apparition-80:after");
              //    // 50% 
              }

                if (derniere_position_de_scroll_connue > (hauteurPage -  videobox.offsetHeight/3 - section2.offsetHeight)) {
                 console.log('apparition-75');
                  videobox.classList.add("apparition-75");
              //    lavideo.classList.remove("apparition-50");
               }

               if (derniere_position_de_scroll_connue > (hauteurPage -  videobox.offsetHeight/4 - section2.offsetHeight)) {
                  console.log('apparition-100');
                videobox.classList.add("apparition-100");
                }

});
                  







  // affichage image au scroll

//   const image = document.querySelector('.image');

//   let observer = new IntersectionObserver(callback, options);

//   observer.observe(image)


// //   let bouton = document.querySelector('.btn_image');

// //   bouton.addEventListener('click',function(e){
   
// //       let tit = document.querySelector('#testId2 h2');
// //    console.log(tit);
// //   tit.style.fontSize = "60px";
  
  
// //   })

// // animation souris cursor dans la video
// // qd la souris va sur la video 

// let mouseCursor = document.querySelector(".cursor");
// let video = document.querySelectors(".bloc_video");

// window.addEventListener('mousemove',);

// function cursor(e){
//   mouseCursor.style.top = e.pageY + 'px';
//   mouseCursor.style.left = e.pageX + 'px';
// }

// lavideo.onmousemove = applyCustomPointer;


// var vid = document.getElementById("bloc_video");
// vid.muted = true; 


            
