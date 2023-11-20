// class Testimonial {
//     constructor (author, quote, image) {
//         this.author = author;
//         this.quote = quote;
//         this.image = image;
//     }

//     renderTestimonial() {
//         return `<div class="testimonial">
//         <img class="profile-testimonial" src="${this.image}" alt="profile">
//         <p class="quote">${this.quote}</p>
//         <p class="author">${this.author}</p>
//     </div>`
//     }

// }

// const testimonial1 = new Testimonial("Jhon", "Saya merasa puas dengan hasilnya", "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1699946988~exp=1699947588~hmac=7800fa0535a9b78a33d9667b2b3595b24a803f197136ca977df83583d46b54b1");
// const testimonial2 = new Testimonial("Julia", "Masih ada beberapa bug", "https://img.freepik.com/free-photo/young-asian-woman-looks-with-confidence-cross-arms-chest-smiles-camera-stands-orange-sw_1258-167202.jpg?t=st=1699947064~exp=1699947664~hmac=bd933a626539594202f2e709cbf15f755103b041b2947e3740a55d83ab7a80f7");
// const testimonial3 = new Testimonial("Rebecca", "Cukup memuaskan", "https://img.freepik.com/free-photo/joyful-confident-blonde-businesswoman-suit-smiling-isolated-modern-worker-secretary-executive-successful-cheerful-mood_197531-2109.jpg?w=996&t=st=1699947114~exp=1699947714~hmac=ac2e8bedbc222a6af1d35d0a2dc4fd58fbbed3e5e7ab9a81696a4f7f2f22ee8c");

// const testimonials = [testimonial1, testimonial2, testimonial3]

// let testimonialHTML = "";
// for (let i = 0; i < testimonials.length; i++) {
//     testimonialHTML += testimonials[i].renderTestimonial();
// }

// document.getElementById("testimonials").innerHTML = testimonialHTML;

// const testimonialData = [
//   {
//     author: "Jhon",
//     quote: "Saya merasa puas dengan hasilnya",
//     image:
//       "https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?w=996&t=st=1699946988~exp=1699947588~hmac=7800fa0535a9b78a33d9667b2b3595b24a803f197136ca977df83583d46b54b1",
//     rating: 5,
//   },

//   {
//     author: "Julia",
//     quote: "Saya merasa puas dengan hasilnya, lain kali akan saya order",
//     image:
//       "https://img.freepik.com/free-photo/young-asian-woman-looks-with-confidence-cross-arms-chest-smiles-camera-stands-orange-sw_1258-167202.jpg?t=st=1699947064~exp=1699947664~hmac=bd933a626539594202f2e709cbf15f755103b041b2947e3740a55d83ab7a80f7",
//     rating: 5,
//   },
//   {
//     author: "Rebecca",
//     quote: "Masih ada beberapa bug yang tertinggal",
//     image:
//       "https://img.freepik.com/free-photo/joyful-confident-blonde-businesswoman-suit-smiling-isolated-modern-worker-secretary-executive-successful-cheerful-mood_197531-2109.jpg?w=996&t=st=1699947114~exp=1699947714~hmac=ac2e8bedbc222a6af1d35d0a2dc4fd58fbbed3e5e7ab9a81696a4f7f2f22ee8c",
//     rating: 3,
//   },
//   {
//     author: "Ilsa",
//     quote: "Not recommended",
//     image:
//       "https://img.freepik.com/free-photo/adorable-young-woman-casual-outfit-standing-thinking_114579-91663.jpg?w=996&t=st=1700041317~exp=1700041917~hmac=8c5d3f21a2a75e706b3bb6bf9118b873dc9da51b55d200ac05127ac57078450c",
//     rating: 1,
//   },
// ];

const testimonial = new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/aa58946b888bb766064d", true);
  xhr.onload = () => {
    if (xhr.status === 200) {
      resolve(JSON.parse(xhr.response));
    } else {
      reject("Error Loading Page");
    }
  };

  xhr.onerror = function () {
    reject("Network Error");
  };

  xhr.send();
});

async function allTestimonial() {
  try {
    const response = await testimonial;
    let testimonialHTML = "";
    response.forEach(function (item) {
      testimonialHTML += `<div class="testimonial">
            <img class="profile-testimonial" src="${item.image}" alt="profile">
            <p class="quote">${item.quote}</p>
            <p class="author">- ${item.author}</p>
            <p class="author">${item.rating} <i class="fa-solid fa-star"></i </p>
        </div>
        `;
    });

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (err) {
    console.log(err);
  }
  console.log();
}

// function allTestimonial() {
//   let testimonialHTML = "";
//   testimonialData.forEach(function (item) {
//     testimonialHTML += `<div class="testimonial">
//             <img class="profile-testimonial" src="${item.image}" alt="profile">
//             <p class="quote">${item.quote}</p>
//             <p class="author">- ${item.author}</p>
//             <p class="author">${item.rating} <i class="fa-solid fa-star"></i </p>
//         </div>
//         `;
//   });

//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }

allTestimonial();

// filter testimonial
async function filterTestimonial(rating) {
  try {
    const response = await testimonial;
    let testimonialHTML = "";

    const testimonialFiltered = response.filter(function (item) {
      return item.rating === rating;
    });

    // console.log(testimonialFiltered);

    if (testimonialFiltered.length === 0) {
      testimonialHTML += `<h1> Data not found! </h1>`;
    } else {
      testimonialFiltered.forEach(function (item) {
        testimonialHTML += `
                <div class="testimonial">
                    <img
                        class="profile-testimonial"
                        src="${item.image}"
                        alt="profile"
                    />
                    <p class="quote">${item.quote}</p>
                    <p class="author">- ${item.author}</p>
                    <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                </div>
            `;
      });
      
    }

    document.getElementById("testimonials").innerHTML = testimonialHTML;
  } catch (error) {
    console.log(err);
  };
};
