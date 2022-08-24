const element_image_container = document.querySelector(".image-container");
const previous_element = document.querySelector(".prev");
const next_element = document.querySelector(".next");
const element_image = document.querySelectorAll("img");
let current_image = 1;
let timeout;

function image_change() {
  if (current_image > element_image.length) {
    current_image = 1;
  } else if (current_image < 1) {
    current_image = element_image.length;
  }
  element_image_container.style.transform = `translateX(-${(current_image - 1) * 755}px)`;
  timeout = setTimeout(() => {
    current_image++;
    image_change();
  }, 3000);
}

next_element.addEventListener("click", () => {
  current_image++;
  clearTimeout(timeout);
  image_change();
});

previous_element.addEventListener("click", () => {
  current_image--;
  clearTimeout(timeout);
  image_change();
});

image_change();
