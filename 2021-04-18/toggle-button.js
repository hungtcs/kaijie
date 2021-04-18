(function(global) {

  function __extends(classB, classA) {
    // // 方案一
    // classB.prototype.__proto__ = classA.prototype;

    // // 方案二
    // classB.prototype = Object.create(classA.prototype);
    // classB.prototype.constructor = classB;

    // 方案三
    function __() {
      this.constructor = classB;
    }
    __.prototype = classA.prototype;
    classB.prototype = new __();
  }

  const BasicEvent = (function() {

    function BasicEvent() {
      this.listeners = {};
    }

    BasicEvent.prototype._triggerEvent = function(event, params) {
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

    BasicEvent.prototype.addEventListener = function(event, listener) {
      if(this.listeners[event] == undefined) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(listener);
    }

    return BasicEvent;

  }());

  const ToggleButton = (function() {
    __extends(ToggleButton, BasicEvent);

    function ToggleButton(element) {
      BasicEvent.call(this);
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

    return ToggleButton;
  }());

  global.ToggleButton = ToggleButton;

}(window));
