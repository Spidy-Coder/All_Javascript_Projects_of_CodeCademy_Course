let UserInput = 'Hello Javascript';

let vowels = ['a','e','i','o','u'];

let Output = [];  //empty array for now

for(i=0;i<UserInput.length;i++){
  for(j=0;j<vowels.length;j++){
    if(UserInput[i] === vowels[j]){
      Output.push(UserInput[i]);
    }
  }

  if(UserInput[i] === 'e'|| UserInput[i] === 'u'){
    Output.push(UserInput[i]);
  }
}

console.log(Output.join('').toUpperCase());