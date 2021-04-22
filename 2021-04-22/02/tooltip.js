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
              div.addEventListener(
                'transitionend',
                (event) => {
                  if(event.propertyName == 'opacity') {
                    div.remove();
                  }
                },
              );
              div.style.opacity = '0';
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
          if(element[Tooltip.tag] === undefined) {
            element[Tooltip.tag] = new Tooltip({ element });
          }
        },
      );
    };

    Object.defineProperty(
      Tooltip.prototype,
      'message',
      {
        get: function() {
          return this.options.message || this.element.getAttribute('tooltip');
        },
      },
    );

    Tooltip.prototype._createTooltip = function() {
      const div = document.createElement('div');
      div.classList.add('tooltip');
      div.textContent = this.message;
      document.body.appendChild(div);

      const { width, height } = div.getBoundingClientRect();
      const { top, bottom, left, width: elementWidth } = this.element.getBoundingClientRect();

      const tooltipTop = bottom + 8;
      const tooltipLeft = left - ((width - elementWidth) / 2);

      const overflowHeight = tooltipTop + height > window.innerHeight;
      if(overflowHeight) {
        div.style.top = `${ top - 8 }px`;
        div.style.transform = 'translateY(-100%)';
      } else {
        div.style.top = `${ tooltipTop }px`;
      }
      div.style.left = `${ tooltipLeft < 0 ? 0 : tooltipLeft }px`;
      div.style.opacity = '1';
      return div;
    }

    return Tooltip;
  }());

  global.Tooltip = Tooltip;

}(window));
