
export class FlipNumber {

  constructor(element, char) {
    this.char = char;
    this.element = element;

    this.element.classList.add('flip-number');

    this.nextTop = this.createPage('next', 'top');
    this.currentTop = this.createPage('current', 'top');
    this.currentBottom = this.createPage('current', 'bottom');
    this.nextBottom = this.createPage('next', 'bottom');

    this.setPageChar(this.currentTop, char);
    this.setPageChar(this.currentBottom, char);

    this.element.appendChild(this.nextTop);
    this.element.appendChild(this.currentTop);
    this.element.appendChild(this.currentBottom);
    this.element.appendChild(this.nextBottom);
  }

  next(char) {
    if(this.char === char) {
      return;
    }
    this.char = char;
    this.setPageChar(this.nextTop, char);
    this.setPageChar(this.nextBottom, char);
    this.nextBottom.addEventListener(
      'transitionend',
      () => {
        this.setPageChar(this.currentTop, char);
        this.setPageChar(this.currentBottom, char);
        this.element.classList.remove('active');
      },
    )
    this.element.classList.add('active');
  }

  createPage(...classList) {
    const page = document.createElement('div');
    page.classList.add('page', ...classList);
    page.innerHTML = `<span></span>`;
    return page;
  }

  setPageChar(page, char) {
    page.querySelector('span').textContent = char;
  }

}
