// document.addEventListener("DOMContentLoaded", () => {
//     const counters = document.querySelectorAll(".rate h1");
//     const observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach((entry) => {
//                 if (entry.isIntersecting) {
//                     const counter = entry.target;
//                     const target = +counter.getAttribute("data-count");
//                     let count = 0;
//                     const speed = target / 50; 

//                     const updateCounter = () => {
//                         count += Math.ceil(speed);
//                         if (count >= target) {
//                             counter.textContent = target;
//                         } else {
//                             counter.textContent = count;
//                             requestAnimationFrame(updateCounter);
//                         }
//                     };

//                     updateCounter();
//                     observer.unobserve(counter);  
//                 }
//             });
//         },
//         { threshold: 0.5 }  
//     );

//     counters.forEach((counter) => observer.observe(counter));
// });


document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".rate h1");
    const observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const counter = entry.target;
                    const target = +counter.getAttribute("data-count");
                    let count = 0;
                    const speed = target / 50; // Adjust speed by dividing target

                    const updateCounter = () => {
                        count += Math.ceil(speed);
                        if (count >= target) {
                            counter.textContent = `${target}+`;
                        } else {
                            counter.textContent = `${count}+`;
                            requestAnimationFrame(updateCounter);
                        }
                    };

                    updateCounter();
                    observer.unobserve(counter); // Stop observing after animation
                }
            });
        },
        { threshold: 0.5 } // Trigger when 50% visible
    );

    counters.forEach((counter) => observer.observe(counter));
});
