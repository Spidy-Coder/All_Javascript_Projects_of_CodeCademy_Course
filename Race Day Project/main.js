let raceNumber = Math.floor(Math.random()*1000);
let earlyRegistration = true;
let runnerAge = 19; //you can change age number as per your wish

if(runnerAge>18 && earlyRegistration === true){
    console.log("Your race will start at 9:30 am." + "Your race number is " + raceNumber);

}
else if(runnerAge>18 && earlyRegistration !== true){
    console.log("Your race will start at 11:00 am."+"Your race number is " + raceNumber);
}
else if(runnerAge<18){
    console.log("Your race will start at 12:30 pm" + "Yoir race number is " + raceNumber);

}

else{
    console.log("Invalid Input");
}

