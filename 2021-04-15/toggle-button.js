(function(global) {

  const ToggleButton = (function() {

    function ToggleButton(element) {
      this.listeners = {};
      this.element = element;
      this.element.classList.add('toggle-button');

      this.element.addEventListener(
        'click',
        () => {
          this.toggle();
        },
      );
    }

    // 静态属性
    ToggleButton.CLASS_ON = 'toggle-button--on';

    ToggleButton.prototype.on = function() {
      this.element.classList.add(ToggleButton.CLASS_ON);

      this._triggerEvent('on');
      this._triggerEvent('change', [true]);
    }

    ToggleButton.prototype.isOn = function() {
      return this.element.classList.contains(ToggleButton.CLASS_ON);
    }

    ToggleButton.prototype.off = function() {
      this.element.classList.remove(ToggleButton.CLASS_ON);

      this._triggerEvent('change', [false]);
    }

    ToggleButton.prototype.toggle = function() {
      this.isOn() ? this.off() : this.on();
    }

    ToggleButton.prototype.addEventListener = function(event, listener) {
      if(this.listeners[event] == undefined) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }

    ToggleButton.prototype._triggerEvent = function(event, params) {
      if(params == undefined) {
        params = [];
      }
      const listeners = this.listeners[event];
      if(listeners != undefined) {
        for(var i = 0; i < listeners.length; i++) {
          listeners[i].apply(this, params);
        }
      }
    }

    return ToggleButton;
  }());

  global.ToggleButton = ToggleButton;

}(window));
