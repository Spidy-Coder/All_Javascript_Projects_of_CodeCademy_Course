const menu = {
    _courses :{
        appetizers :[],
        mains:[],
        desserts:[]
    },

    get appetizers(){
        return this._courses.appetizers;
    },
    set appetizers(appetizersIn){
        this._courses.appetizers = appetizersIn;
    },

    get mains(){
        return this._courses.mains;
    },
    set mains(mainIn){
        this._courses.mains = mainsIn;
    },

    get desserts(){
        return this._courses.desserts;
    },
    set desserts(dessertsIn){
        this._courses.desserts = dessertsIn;
    },

    get courses(){
        return {
            appetizers :this.appetizersIn,
            mains:this.mainsIn,
            desserts:dessertsIn
        };
    },
    addDishToCourses(courseName,dishName,dishPrice){
        const dish = {
            name:dishName,
            price:dishPrice
        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourses(courseName){
        const dishes = this._courses[courseName];
        const randomIndex = Math.floor(Math.random() * dishes.length);
        return dishes[randomIndex];
    },
    

};

