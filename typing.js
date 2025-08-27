const roles = ["'m a Software Engineer (Backend and AI enthusiast).", "'m Vietnamese..."];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeEffect() {
    if (i < roles.length) {
        if (!isDeleting && j <= roles[i].length) {
            currentRole = roles[i].substring(0, j++);
            typingElement.textContent = "and I" + currentRole;
        }

        if (isDeleting && j >= 0) {
            currentRole = roles[i].substring(0, j--);
            typingElement.textContent = "and I" + currentRole;
        }

        if (j === roles[i].length + 1) {
            isDeleting = true;
            setTimeout(typeEffect, 500);
            return;
        } else if (isDeleting && j === 0) {
            isDeleting = false;
            i++;
            if (i === roles.length) i = 0;
        }
    }
    setTimeout(typeEffect, isDeleting ? 20 : 50);
}

typeEffect();
