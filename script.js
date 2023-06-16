const testimonialsContainer = document.querySelector('.testimonials-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
    {
        name: 'User-1',
        photo:
            './avatar3.png',
        position: 'Software Engineer',
        text:
            " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi vero, non error, eius voluptatibus optio saepe, ullam illo vitae omnis itaque! Architecto impedit rem molestias libero. Quisquam velit eum eos minima dolorum voluptatem voluptatibus! Beatae maxime impedit iusto excepturi enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem veritatis optio dolorem laudantium.",
    },
    {
        name: 'user-2',
        position: 'Marketing',
        photo: './avatar3.png',
        text:
            'eius voluptatibus optio saepe, ullam illo vitae omnis itaque! Architecto impedit rem molestias libero. Quisquam velit eum eos minima dolorum voluptatem voluptatibus! Beatae maxime impedit iusto excepturi enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem veritatis optio dolorem laudantium.',
    },
    {
        name: 'User-3',
        position: 'Receptionist',
        photo: './avatar3.png',
        text:
            "impedit rem molestias libero. Quisquam velit eum eos minima dolorum voluptatem voluptatibus! Beatae maxime impedit iusto excepturi enim?Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta rem veritatis optio dolorem laudantium.",
    },
    {
        name: 'User-4',
        position: 'Data Entry',
        photo: './avatar3.png',
        text:
            "impedit rem molestias libero. Quisquam velit eum eos minima dolorum voluptatem voluptatibus! Beatae maxime impedit iusto excepturi enim?Lorem ipsum dolor sit",
    },

]

let idx = 1

function updateTestimonial() {
    const { name, position, photo, text } = testimonials[idx]

    testimonial.innerHTML = text
    userImage.src = photo
    username.innerHTML = name
    role.innerHTML = position

    idx++

    if (idx > testimonials.length - 1) {
        idx = 0
    }
}

setInterval(updateTestimonial, 5000)