

//  const options = {
//      root: null,
//      rootMargin: '0px',
//      threshold: 0.4
//    }
//    console.log('hello');
//    console.log(options);
  
//    function callback(entries, observer){
//      console.log(observer);
//      for (const entry of entries) {
//        if(entry.isIntersecting){
//  console.log('coucoucoucoiu')
            
//          entry.target.classList.add('reveal-visible');
//             }
     
//        console.log(entry.target);
//      }
//    }
//   const image = document.querySelector('.reveal');

//    let observer = new IntersectionObserver(callback, options);

//   observer.observe(image)
// // **************************************************************************
// const ratio = 0.1;
// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: ratio
// }

// const handleIntersect = function (entries, observer) {
//   entries.forEach(function (entry) {
//     if (entry.intersectionRatio > ratio) {
//       console.log('visible')
//       entry.target.classlist.add('reveal-visible')
//       observer.unobserve(entry.target)
//     } 
//   })
  
// }

// const observer = new IntersectionObserver(handleIntersect, options)
// document.querySelectorAll('[class*="reveal-"]').forEach(function (r){
// observer.observe(r)
// })



// const images = document.querySelectorAll(".images-container img")

// let options = {
//   // root: null,
//   rootMargin: "-10% 0px",
//   threshold: 0.4
// }



// function handleIntersect(entries){
//   console.log(entries);

//   entries.forEach(entry => {
//     if(entry.isIntersecting){
//       entry.target.style.opacity = 1;
//     }
//   })
// }

// const observer = new IntersectionObserver(handleIntersect, options)

// images.forEach(image => {
//   observer.observe(image)
// })



// *****************************************************
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






