'use strict';
//특정상태마다 다르게 할일을 하나하나 모듈화해서 지정
//전략패턴과는 다르게 메서드가 실행될때 모드도 전환

const ModeStateLight = function () {
  this.toggle = function (modeSwitch) {
    console.log('From Light to Dark');
    //doSomething...
    modeSwitch.setState(new ModeStateDark());
  };
};

const ModeStateDark = function () {
  this.toggle = function (modeSwitch) {
    console.log('From Dark to Light');
    //doSomething...
    modeSwitch.setState(new ModeStateLight());
  };
};

const ModeSwitch = function () {
  this.modeState = new ModeStateLight();
  this.setState = function (modeState) {
    this.modeState = modeState;
  };
  this.onSwitch = function () {
    this.modeState.toggle(this);
  };
};

//State 캡슐화
const C_ModeSwitch = (function () {
  let modeState = new ModeStateLight();
  const ModeSwitch = function () {
    this.setState = function (_modeState) {
      modeState = _modeState;
    };
    this.onSwitch = function () {
      modeState.toggle(this);
    };
  };
  return ModeSwitch;
})();

const modeSwitch = new C_ModeSwitch();
modeSwitch.onSwitch();
modeSwitch.onSwitch();
modeSwitch.onSwitch();
