//Parent class

class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }
}

class Book extends Media{
    constructor(author,title,pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(director,title,runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director(){
        return this._director;
    }

    get runTime(){
        return this._runTime;
    }

    toggleCheckOutStatus(){
        this._isCheckedOut = !this._isCheckedOut;
    }

    addRating(ratings){
        this._ratings.push(ratings);
    }

    getAverageRating(){
        let ratingsSum = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0)/this._ratings.length;
        return ratingsSum;
    }
}

const HistoryOfEverything = new Book('Dan Brown','The DAvinci code','450');

HistoryOfEverything.toggleCheckOutStatus();

console.log(HistoryOfEverything.isCheckedOut);

const speed = new Movie('Ami','Fairy Tales','180');

speed.toggleCheckOutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
speed.getAverageRating();

console.log(speed.getAverageRating());

console.log(historyOfEverything);
console.log(speed);

//Credits of code:-https://github.com/ElaMoscicka/Codecademy-Projects-JavaScript/blob/master/Build%20a%20Library/script.js

