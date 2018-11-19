// add solution here


function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0, j = musicians.length; i < j; i++) {
    [array.push(`${musicians[i]} plays ${instruments[i]}`)];
  }
  return array;
}

function johnLennonFacts(facts) {
  var excitedFacts = [];
  let i = 0;
  while (i < facts.length) {
    excitedFacts.push(`${facts[i]}!!!`);
    i++;
  }
  return excitedFacts;
}