// Write your code below
var bobsFollowers = ['Silvia', 'Liz', 'Dave', 'Suzy'];
var tinasFollowers = [ 'Dave', 'Liz', 'Wilkins'];

var mutualFollowers= [];

for (let bFollower = 0; bFollower < bobsFollowers.length; bFollower++) {
  for (let tFollower = 0; tFollower < tinasFollowers.length; tFollower++) {
  	if (bobsFollowers[bFollower] === tinasFollowers[tFollower]) {
     mutualFollowers.push(bobsFollowers[bFollower]);
    }
	}
}
