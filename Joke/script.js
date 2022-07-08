fetch("https://icanhazdadjoke.com/slack") //fetch API
    .then(data => data.json())    ///converted recerived data into json formate 
    .then(joke => {                  
        const  jokeText = joke.attachments[0].text   //get joke text from data
        const jokeElement = document.querySelector('#jokeElement')   //get p tag

        jokeElement.innerHTML = jokeText  //assign joke to p element
    })