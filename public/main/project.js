const response = await fetch("./main/data/project.json")
  .then((r) => {
    return r.json();
  })
  .catch((err) => {
    console.log(err);
  });

export function project() {
  const carousel = document.querySelector(".owl-carousel");
  const projectArr = response.projects;
  for (let i = 0; i < projectArr.length; i++) {
    const wrapper = document.createElement("div");
    wrapper.className = "item";
    wrapper.classList.add("carouselCon");
    const name = document.createElement("div");
    name.className = "projectName";
    name.innerHTML = projectArr[i].name;
    const img = projectArr[i].img;
    const imageContainer = document.createElement("div");
    imageContainer.className = "imageCon";
    const image = document.createElement("img");
    image.className = "projectImage";
    image.style.width = wrapper.style.width;
    image.src = img;
    image.style.objectFit = "scale-down";
    imageContainer.appendChild(image);
    const skill = document.createElement("ul");
    const skills = projectArr[i].skills;
    for (let i = 0; i < skills.length; i++) {
      const li = document.createElement("li");
      li.innerHTML = skills[i];
      skill.appendChild(li);
    }
    const tooltip = document.createElement("div");
    tooltip.className = "projectTooltip";
    const detail = document.createElement("div");
    detail.innerHTML = projectArr[i].description;
    tooltip.appendChild(skill);
    tooltip.appendChild(detail);
    wrapper.appendChild(name);
    wrapper.appendChild(imageContainer);
    wrapper.appendChild(tooltip);
    carousel.appendChild(wrapper);
  }
  $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    margin: 20,
    center: true,
    dots: true,
    dotsEach: true,
    rewind: true,
    mouseDrag: true,
    touchDrag: true,
    autoWidth: true,
    // responsive: {
    //   0: {
    //     items: 1,
    //     loop: true,
    //   },
    //   600: {
    //     items: 3,
    //     loop: true,
    //   },
    //   1000: {
    //     items: 6,
    //     loop: true,
    //   },
    // },
  });
}

const carousel = document.querySelector(".owl-carousel");
carousel.addEventListener("mouseover", (event) => {});
carousel.addEventListener("mouseleave", (event) => {});
