'use strict';
//실행될 기능을 캡슐화
//여러 기능을 실행할 수 있는 재사용성이 높은 클래스를 설계
//전략패턴은 같은일을 다른 알고리즘으로, 커맨드패턴은 하는일 자체가 다른것이 둘의 차이점

//ES5
const RobotKit = function () {
  this.Robot = new Robot();
  this.commands = [];
  this.addCommand = function (command) {
    this.commands.push(command);
  };
  this.start = function () {
    for (let command of this.commands) {
      command.setRobot(this.Robot);
      command.excute();
    }
  };
};

const Robot = function () {
  this.moveFoward = function (space) {
    console.log(space + 'foward');
  };
  this.moveBack = function (space) {
    console.log(space + 'back');
  };
};

const Command = (function () {
  const Command = function () {};
  Command.prototype.setRobot = function (_Robot) {
    this.Robot = _Robot;
  };
  return Command;
})();

const MoveFoward = function (space) {
  const MoveFoward = Object.create(Command.prototype);
  MoveFoward.excute = function () {
    this.Robot.moveFoward(space);
  };
  return MoveFoward;
};

const MoveBack = function (space) {
  const MoveBack = Object.create(Command.prototype);
  MoveBack.excute = function () {
    this.Robot.moveBack(space);
  };
  return MoveBack;
};

const robotKit = new RobotKit();
robotKit.addCommand(MoveFoward(10));
robotKit.addCommand(MoveBack(20));
robotKit.start();

//ES6
class Robot6 {
  constructor() {
    this.moveFoward = function (space) {
      console.log(space + 'foward');
    };
    this.moveBack = function (space) {
      console.log(space + 'back');
    };
  }
}
class Robotkit6 {
  constructor() {
    this.robot = new Robot6();
    this.commands = [];
  }
  addCommand(command) {
    this.commands.push(command);
  }
  start() {
    for (let command of this.commands) {
      command.setRobot(this.robot);
      command.excute();
    }
  }
}
class Command6 {
  constructor() {}
  setRobot(_robot) {
    this.robot = _robot;
  }
}
class MoveFoward6 extends Command6 {
  constructor() {
    this.excute = function () {
      this.robot.moveFoward();
    };
  }
}
class MoveBack6 extends Command6 {
  constructor() {
    this.excute = function () {
      this.robot.moveBack();
    };
  }
}

const robotKit6 = new Robotkit6();
robotKit6.addCommand(new MoveFoward(10));
robotKit6.addCommand(new MoveBack(20));
robotKit6.start();
