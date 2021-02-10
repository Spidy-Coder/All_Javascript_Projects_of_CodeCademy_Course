const getSleepHours = day =>{

if(day === 'monday'){

return 5;
}

if(day === 'Tuesday'){

return 6;
}

if(day === 'Wednesday'){

return 6;
}

if(day === 'Thursday'){

return 7;
}

if(day === 'Friday'){

return 7;
}

if(day === 'Saturday'){

return 8;
}

if(day === 'Sunday'){

return 10;
}

const getActualSleepHours = () =>{

getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');

}

console.log(getActualSleepHours());

const getIdealSleepHours = idealHours =>{

return idealHours * 7;
}

console.log(getIdealSleepHours(8));

const calculateSleepDept = () => {

let actualSleepHours = getActualSleepHours();
let idealSleepHours = getIdealSleepHours(8);

if(actualSleepHours === idealSleepHours){

return 'You are going Perfect';
}

if(actualSleepHours < idealSleepHours){

return 'You should take some rest also.Your sleep time is less than expected one.';
}

if(actualSleepHours > idealSleepHours){

return 'You are too lazy. Come out of this bed my friend, you take more sleep than expected one.';
}

}

calculateSleepDept();


/*credit of this code:-
 https://gist.github.com/DrMyuu/f3a142db942f5a94d3fe30c667595cb8 */ 
