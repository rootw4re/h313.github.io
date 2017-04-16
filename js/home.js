var Person = class {
  constructor(name) {
    this.name = name;
    this.about = "";
    this.skills = [];
    this.projects = require("projects");
  }
}

var harry = new Person("Harry");
harry.about = "Mentally stable!";
this.skills = ["C++", "Linux", "NodeJS", "MongoDB"];
this.projects = require("projects");
this.social = [{'github': 'h313'},
               {'facebook': 'wanghaoda'},
               {'email': 'mailto:arandomawesomegeek@gmail.com'}];

module.exports = Person;
