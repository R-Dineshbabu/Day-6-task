//1.The class Movie is stated below. An instance of class Movie represents a film. 
//This class has the following three properties:
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movieArray) {
      return movieArray.filter(movie => movie.rating === "PG");
    }
  }
  
  // Creating an instance of the class Movie
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  
  // Creating an array of Movie instances
  const movies = [
    new Movie("Movie1", "Studio1", "PG"),
    new Movie("Movie2", "Studio2", "PG-13"),
    new Movie("Movie3", "Studio3", "R"),
    new Movie("Movie4", "Studio4"),
  ];
  
  // Getting an array of PG-rated movies
  const pgMovies = Movie.getPG(movies);
  
  // Printing the titles of PG-rated movies
  console.log("PG-rated movies:");
  pgMovies.forEach(movie => {
    console.log(movie.title);
  });

  
  // 3.Write a “person” class to hold all the details

  class Person {
    constructor(name, age, address) {
      this.name = name;
      this.age = age;
      this.address = address;
    }
  
    getDetails() {
      return `Name: ${this.name}, Age: ${this.age}, Address: ${this.address}`;
    }
  }

  const person1 = new Person("dinesh", 21, "123 Main St, Vellore, INDIA");
  const person2 = new Person("BABU", 25, "456 Elm St, Tirupattur, INDIA");
  
  console.log(person1.getDetails());
  console.log(person2.getDetails());

  //4.write a class to calculate the uber price.
  class UberPriceCalculator {
    constructor(baseFare, costPerKilometer, costPerMinute) {
      this.baseFare = baseFare; 
      this.costPerKilometer = costPerKilometer; 
      this.costPerMinute = costPerMinute; 
    }
  
    calculateFare(distanceInKilometers, durationInMinutes) {
      
      const fare = this.baseFare +
        (distanceInKilometers * this.costPerKilometer) +
        (durationInMinutes * this.costPerMinute);
  
      return fare;
    }
  }
  
  const calculator = new UberPriceCalculator(2.0, 1.5, 0.2);
  
  const distance = 5;
  const duration = 15;
  const fare = calculator.calculateFare(distance, duration);
  
  console.log(`Uber Fare: Rs.${fare.toFixed(2)}`);
  
  
