var name = prompt('What is your name');
var age = prompt('What is your age');
var job = prompt('What is your job');
var Player = {
    name: name,
    age: age,
    job: job,
}
confirm('Welcome to your first adventure');
confirm('You are ' + Player.name + ' currently age ' + Player.age);
confirm('It is a normal day for a '+ Player.job + ' like you');
confirm('Suddenly, you find yourself unconcious');
confirm('You hear a voice');
confirm('"' + Player.name +' wake up"');
confirm('You see a frustrated figure right up on your face');
confirm('You are shocked');
confirm('"What do you want from me!" You ask the figure');
confirm('"Help us!" she yells');
confirm('You see a raging demon');
confirm('You are confused with all the things happening');
confirm('"HELP US KILL THE DEMON" she yells even louder than before');
var solution = prompt('What do you want to do (type "a" to Kill the demon, "b" to give up)');
switch(solution) {
  case "a":
    action = "You killed the demon"
    break;
  case "b":
    action = "The demon killed everyone"
    break;
  default:
    action = "You idled too long and suddenly find yourself in the coma ward"
    break;
}
confirm(action);
switch(solution) {
  case "a":
    action = '"Hooray! Good job ' + Player.name + ' you killed the demon and saved everyone"'
    break;
  case "b":
    action = 'Game Over'
    break;
  default:
    action = 'Game Over'
    break;
}
    confirm(action);
