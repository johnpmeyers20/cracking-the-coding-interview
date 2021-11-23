////////////////////////////////////////////
///////////// First Attempt/////////////////
////////////////////////////////////////////

const isUnique = str => {
  const uniques = Array.from(new Set(str)).join('');
  return str === uniques;
}

const exampleWords = ['ha', 'haha', 'abcdefg', 'aloha'];

for (let i = 0; i < exampleWords.length; i++) {
  console.log(`${exampleWords[i]} => ${isUnique(exampleWords[i])}`);
}

////////////////////////////////////////////
///////////// Second Attempt/////////////////
////////////////////////////////////////////

