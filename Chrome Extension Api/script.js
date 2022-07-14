fetch('https://icanhazdadjoke.com/slack')
//convert the data into json format
    .then(data => data.json())
// getting data from api   
    .then(jokeData => {                  
        const  jokeText = jokeData.attachments[0].text;//getting data from joke attachment
        const jokeElement = document.getElementById('jokeElement'); //for displaying the joke in p tag
    
        jokeElement.innnerHTML=jokeText; //set a inner html
    })
