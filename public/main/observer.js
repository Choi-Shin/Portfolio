export class Observer {
  constructor(classname, change) {
    this.elements = document.querySelectorAll("." + classname);
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(change);
        } else {
          entry.target.classList.remove(change);
        }
      });
    });
  }

  observe() {
    this.elements.forEach((el) => {
      this.observer.observe(el);
    });
  }
}
