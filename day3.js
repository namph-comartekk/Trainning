function User(fristName, lastName, avatar, age,){
    this.fristName = fristName;
    this.lastName = lastName;
    this.avatar = avatar;
    this.age = age;
    this.getname = function(){
        return `${this.fristName} ${this.lastName}`;
    }
}
User.prototype.address= 'Ha Noi';
var author = new User('John', 'Doe', 'avatar.png', '25');
var user1 = new User('Jane', 'Doe', 'avatar.png', '25');
console.log(user1.address);
/////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////
var rabit ={};
rabit.speak = function(line){
    console.log("the rabit says: " + line+"");

}
rabit.speak("hello");
function speak(libe){
    console.log("the rabit says: " + libe+"");
}
var whiteRabbit = { type : "white", speak: speak };
var blackRabbit = { type : "black", speak: speak };
whiteRabbit.speak("oh my god");
blackRabbit.speak("oh   my god");
///////////////////////////
function speak(line) {
    console.log("The " + this.type + " rabbit says '" + line + "'");
  }
  var whiteRabbit = {type: "white"};
  var fatRabbit = {type: "fat"};
  var sexyRabbit = {type: "sexy"};
  
  speak.apply(whiteRabbit, ["I'm alive."]);
  // => The white rabbit says 'I'm alive.'
  
  speak.call(fatRabbit, "I'm alive.");
  // => The fat rabbit says 'I'm alive.'
  
  var sexyRabbitSpeak = speak.bind(sexyRabbit, "I'm alive.");
  sexyRabbitSpeak();
  // => The sexy rabbit says 'I'm alive.'
  function Person(_name){
    var name = _name;
    this.setName = function(_name){
      name = _name;       
    }
    this.getName = function(){
      return name;
    }
  }
  
  var person = new Person("LamPham");
  console.log(person.name);          // => undefined
  console.log(person.getName());     // => LamPham
  
  person.setName("LP Devs");
  console.log(person.getName());
  //////////////////////////////    
  function Person(_name){
    var name = _name;
    this.setName = function(_name){
      name = _name;       
    }
    this.getName = function(){
      return name;
    }
  }
  
  function Student(_name, _school){
    var school = _school;
    Person.call(this, _name);
    this.setSchool = function(_school){
      school = _school;
    }
    this.getSchool = function(){
      return school;
    }
  }
  
  var student = new Student("LamPham", "HUST");
  console.log(student.getName());    // => LamPham
  console.log(student.getSchool());  // => HUST
  
  student.setSchool("NEU");
  student.setName("Ronaldo");
  
  console.log(student.getName());    // => Ronaldo
  console.log(student.getSchool());  // => 
  //  
  let student ={
    
  }