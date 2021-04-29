(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.ABC = {}));
}(this, (function (exports) { 'use strict';

  class Ripple {

    constructor(options) {
      if(options.color) {
        this.color = options.color;
      } else {
        this.color = 'rgba(128, 128, 128, 0.2)';
      }
      this.element = options.element;
      this.element.classList.add('ripple');

      this.element.addEventListener(
        'pointerdown',
        (event) => {
          const x = event.clientX;
          const y = event.clientY;
          const bounding = this.element.getBoundingClientRect();
          const top = bounding.top;
          const left = bounding.left;

          const div = this._createRipple(x - left, y - top);
          div.addEventListener(
            'transitionend',
            (event) => {
              if(event.propertyName === 'opacity') {
                div.remove();
              }
            },
          );

          const onPointerUp = () => {
            div.style.opacity = '0';
            this.element.removeEventListener(
              'pointerleave',
              onPointerLeave,
            );
          };
          const onPointerLeave = () => {
            div.style.opacity = '0';
            this.element.removeEventListener(
              'pointerup',
              onPointerUp,
            );
          };

          this.element.addEventListener(
            'pointerup',
            onPointerUp,
            {
              once: true,
            },
          );
          this.element.addEventListener(
            'pointerleave',
            onPointerLeave,
            {
              once: true,
            },
          );
        },
      );
    }

    _createRipple(x, y) {
      const div = document.createElement('div');

      div.style.position = 'absolute';
      div.style.width = '100px';
      div.style.height = '100px';
      div.style.transform = 'scale(0.2)';
      div.style.backgroundColor = this.color;
      div.style.borderRadius = '50%';
      div.style.top = (y - 50) + 'px';
      div.style.left = (x - 50) + 'px';
      div.style.transition = 'transform 512ms, opacity 512ms 256ms';

      this.element.appendChild(div);

      const width = this.element.clientWidth;
      const height = this.element.clientHeight;

      const a = (width / 2) > x ? width - x : x;
      const b = (height / 2) > y ? height - y : y;

      const diameter = 2 * Math.sqrt((a ** 2) + (b ** 2));

      const scale = diameter / 100;

      div.style.transform = 'scale(' + scale + ')';

      return div;
    }

  }

  const element1 = document.getElementById('test1');
  const element2 = document.getElementById('test2');
  const ripple1 = new Ripple({ element: element1 });
  const ripple2 = new Ripple({ element: element2 });
  console.log(ripple1, ripple2);

  exports.ripple1 = ripple1;
  exports.ripple2 = ripple2;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
