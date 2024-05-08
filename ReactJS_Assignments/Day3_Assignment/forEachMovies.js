const oscarMovies = [
    { title: "Parasite", year: 2020, genre: "Thriller", director: "Bong Joon Ho" },
    { title: "Green Book", year: 2019, genre: "Drama", director: "Peter Farrelly" },
    { title: "The Shape of Water", year: 2018, genre: "Fantasy", director: "Guillermo del Toro" },
    { title: "Life of PI", year: 2012, genre: "Adventure", director: "Ang Lee" },
    { title: "Avengers End Game", year: 2019, genre: "Adventure", director: "Joe and Anthony Russo" }
    ];

    //Iterate with `forEach`
    oscarMovies.forEach(function(movies,index,array){
        console.log(`"Index: ${index}, Title: ${movies.title}, Movie: ${JSON.stringify(array)}"`);
        });
     
//Iterate with a `for` loop
for (var i = 0; i < oscarMovies.length; i++) {
    console.log("Iterate with a `for` loop");
    console.log(`"Index: ${i}, Title: ${oscarMovies[i].title}, Movie: "${JSON.stringify(oscarMovies[i])}"`);
}
