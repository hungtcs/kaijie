
(function(global) {

  const ToggleButon = (function() {

    function ToggleButon(element) {
      const self = this;
      this.listeners = [];
      this.element = element;
      this.element.classList.add('toggle-button');

      this.element.addEventListener(
        'click',
        function() {
          self.toggle();
        },
      );
    }

    // 静态属性
    ToggleButon.CLASS_ON = 'toggle-button--on';

    ToggleButon.prototype.on = function() {
      this.element.classList.add(ToggleButon.CLASS_ON);
      for(var i = 0; i < this.listeners.length; i++) {
        this.listeners[i](true);
      }
    }

    ToggleButon.prototype.isOn = function() {
      return this.element.classList.contains(ToggleButon.CLASS_ON);
    }

    ToggleButon.prototype.off = function() {
      this.element.classList.remove(ToggleButon.CLASS_ON);
      for(var i = 0; i < this.listeners.length; i++) {
        this.listeners[i](false);
      }
    }

    ToggleButon.prototype.toggle = function() {
      this.isOn() ? this.off() : this.on();
    }

    ToggleButon.prototype.addChangeListener = function(listener) {
      this.listeners.push(listener);
    }

    return ToggleButon;
  }());

  global.ToggleButon = ToggleButon;

}(window));
