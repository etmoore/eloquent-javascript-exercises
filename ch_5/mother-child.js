function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

function motherAge(p){ return p.born - byName[p.mother].born}
var children = ancestry.filter(function(person){
	return byName[person.mother] != null;
});
var differences = children.map(motherAge);

console.log(average(differences));

// → 31.2
