// hambiger
const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-right ul li");

navLinks.forEach(link=>{
    link.addEventListener("click",()=>{
        navMenu.classList.remove("active");
    });
});



// form data showed in alert when user click on submit button
const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const phone = document.getElementById("phone").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  alert(
    `Form Submitted Successfully!

Phone Number : +1 ${phone}

Email : ${email}

Message :
${message}

Created By: Mohd Shahbaz
`,
  );

  contactForm.reset();
});



// Testimonails

const testimonials = [
{
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    name: "Mr. John Geller"
},
{
    text: "This company provided an outstanding service. Their team was professional, responsive, and exceeded all expectations.",
    name: "Emily Watson"
},
{
    text: "Highly recommended! The quality of work was excellent and the support team was always available whenever needed.",
    name: "Michael Brown"
}
];

let current = 0;

const text = document.getElementById("testimonial-text");
const name = document.getElementById("testimonial-name");

function showTestimonial(index){

    text.textContent = testimonials[index].text;
    name.textContent = testimonials[index].name;

}

document.getElementById("next").addEventListener("click",()=>{

    current++;

    if(current >= testimonials.length){
        current = 0;
    }

    showTestimonial(current);

});

document.getElementById("prev").addEventListener("click",()=>{

    current--;

    if(current < 0){
        current = testimonials.length - 1;
    }

    showTestimonial(current);

});
