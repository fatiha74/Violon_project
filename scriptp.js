





// const images = document.querySelectorAll(".section4 img")



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

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }
  console.log('hello');
  console.log(options);
  
  function callback(entries, observer){
    console.log(observer);
    for (const entry of entries) {
      if(entry.isIntersecting){

            
         entry.target.classList.add('apparition');
             }
     
      console.log(entry.target);
    }
  }
  const image = document.querySelector('.image');

  let observer = new IntersectionObserver(callback, options);

  observer.observe(image)

