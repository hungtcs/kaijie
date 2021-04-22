(function(global) {

  const Tooltip = (function() {

    function Tooltip(options) {
      this.options = options;
      /**
       * @type HTMLElement
       */
      this.element = this.options.element;
      this.element.addEventListener(
        'mouseenter',
        (event) => {
          const div = this._createTooltip();
          this.element.addEventListener(
            'mouseleave',
            (event) => {
              div.remove();
            },
            {
              once: true,
            },
          );
        },
      );
    }

    Tooltip.tag = Symbol();
    Tooltip.init = function() {
      const elements = document.querySelectorAll('[tooltip]');
      elements.forEach(
        element => {
          const message = element.getAttribute('tooltip');
          if(element[Tooltip.tag] === undefined && message !== '') {
            element[Tooltip.tag] = new Tooltip({ element, message });
          }
        },
      );
    };

    Tooltip.prototype._createTooltip = function() {
      const div = document.createElement('div');
      div.classList.add('tooltip');
      div.textContent = this.options.message;
      document.body.appendChild(div);

      const { width } = div.getBoundingClientRect();
      const { top, bottom, left, width: elementWidth } = this.element.getBoundingClientRect();

      const tooltipLeft = left - ((width - elementWidth) / 2);

      div.style.top = `${ bottom + 8 }px`;
      div.style.left = `${ tooltipLeft < 0 ? 0 : tooltipLeft }px`;

      return div;
    }

    return Tooltip;
  }());

  global.Tooltip = Tooltip;

}(window));
