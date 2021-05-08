/**
 * @typedef Menu
 * @property {string} id
 * @property {string} title
 * @property {Array<Menu>?} children
 */

/**
 * @typedef VerticalMenuOptions
 * @property {Array<Menu>} menus
 * @property {HTMLElement} element
 */

export class VerticalMenu extends EventTarget {

  get element() {
    return this.options.element;
  }

  /**
   * @param {VerticalMenuOptions} options
   */
  constructor(options) {
    super();
    this.options = options;
    this.element.classList.add('vertical-menu');
    this.menus = this.options.menus.map(
      menu => {
        return { ...menu };
      },
    );
    this.render();
  }

  render() {
    const rootElement = this.renderMenu(this.menus);
    this.element.appendChild(rootElement);
  }

  /**
   * 渲染菜单
   *
   * @param {Array<Menu>} menus
   * @param {undefined | Menu} parent
   * @return {HTMLUListElement}
   */
  renderMenu(menus, parent) {
    const ul = document.createElement('ul');
    if(parent !== undefined) {
      ul.setAttribute('submenu', '');
    } else {
      ul.setAttribute('root', '');
    }
    menus.forEach(
      menu => {
        this.renderMenuItem(menu, parent);
        ul.appendChild(menu.element);
      },
    );
    return ul;
  }

  /**
   * 渲染菜单项
   *
   * @param {Menu} menu
   * @param {Menu} parent
   * @returns {HTMLLIElement}
   */
  renderMenuItem(menu, parent) {
    const hasChildren = menu.children && menu.children.length > 0;
    const li = document.createElement('li');
    menu.element = li;
    menu.parent = parent;
    const content = document.createElement('a');
    content.innerHTML = `${ menu.title }`;
    li.appendChild(content);
    if(hasChildren) {
      const childMenuElement = this.renderMenu(menu.children, menu);
      menu.childMenuElement = childMenuElement;
      li.appendChild(childMenuElement);
      li.setAttribute('has-children', '');
      content.addEventListener(
        'click',
        event => {
          this.toggleMenu(menu);
        },
      );
    } else {
      content.addEventListener(
        'click',
        () => {
          if(this.activeMenu) {
            this.activeMenu.element.removeAttribute('active');
            this.activeMenu.parent?.element.removeAttribute('child-active');
          }
          this.activeMenu = menu;
          this.activeMenu.element.setAttribute('active', '');
          this.activeMenu.parent?.element.setAttribute('child-active', '');
          this.dispatchEvent(new CustomEvent('menuclick', { detail: { menu } }));
        },
      );
    }
    return menu;
  }

  /**
   *
   * @param {Menu} menu
   * @param {boolean} open
   */
  toggleMenu(menu, open) {
    if(menu.element.hasAttribute('open') && !open) {
      menu.childMenuElement.style.height = `0px`;
      menu.element.removeAttribute('open');
      menu.open = false;
    } else {
      menu.childMenuElement.style.height = `${ menu.childMenuElement.scrollHeight }px`;
      menu.element.setAttribute('open', '');
      menu.open = true;
    }
  }

}
