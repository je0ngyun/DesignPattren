'use strict';
//프로세스에 특정 객체가 하나만 존재해야 할 때 쓰는 패턴

//ES6 (ES6는 캡슐화에 어려움이 있다)
let _ES6Singleton_instance;
class ES6Singleton {
  constructor() {
    if (_ES6Singleton_instance) {
      return _ES6Singleton_instance;
    }
    //doSomething
    _ES6Singleton_instance = this;
  }
}

let foo = new ES6Singleton();
let bar = new ES6Singleton();
console.log(foo === bar);

//ES5
const ES5Singleton = (function () {
  let instance;
  function ES5Singleton() {
    //doSomething...
  }
  return {
    getInstance: function () {
      if (!instance) {
        instance = new ES5Singleton();
      }
      return instance;
    },
  };
})();

let foz = ES5Singleton.getInstance();
let baz = ES5Singleton.getInstance();
console.log(foz === baz);
