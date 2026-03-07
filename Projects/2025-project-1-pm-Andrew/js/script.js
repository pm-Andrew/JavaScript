// script.js
// CTEC 126 Project 1 - 2024

// The displayQuotesPanel function is used to display a random quote from the array in the HTML element that has the ID of 'quotesPanel'
const displayQuotesPanel = () => {
    console.log('Quotes function called');
    // Call the clear() function with 'quotesPanel' as a parameter 
    clear('#quotesPanel')

    // Create a variable named 'quotesPanel' that is a handle to the element with the ID of 'quotesPanel'
    const quotesPanel = document.querySelector(`#quotesPanel`);


    // This is the array of quotes that you are to use
    const quotes = [
        "Nothing is as easy as it looks",
        "Everything takes longer than you think",
        "Anything that can go wrong will go wrong",
        "If there is a possibility of several things going wrong, the one that will cause the most damage will be the one to go wrong",
        "If there is a worse time for something to go wrong, it will happen then.",
        "If anything simply cannot go wrong, it will anyway",
        "If everything seems to be going well, you have obviously overlooked something.",
        "Nature always sides with the hidden flaw", "It is impossible to make anything foolproof because fools are so ingenious.",
        "Whenever you set out to do something, something else must be done first", "Every solution breeds new problems.",
        "Trust everybody ... then cut the cards", "Two wrongs are only the beginning",
        "If at first you don't succeed, destroy all evidence that you tried",
        "To succeed in politics, it is often necessary to rise above your principles",
        "Exceptions prove the rule ... and wreck the budget", "Success always occurs in private, and failure in full view"
    ];

    // Create a variable named 'random' and assign it a random number. This number will be used to index into the quotes array
    // Use the techniques you learned in Module 3 to generate random numbers and to randomly select an element from the quotes array

    let random = Math.floor(Math.random() * quotes.length);

    let currentQuote = quotes
    // Account for repeating arrays set the variable current to 0 
    // While looping accounting f
    while (currentQuote == random) {
        random = Math.floor(Math.random() * quotes.length);
    }
    currentQuote = random

    // Set the innerHTML of the quotesPanel to the quote and also include <p> tags around each quote
    const p = document.createElement('p');
    p.innerHTML = quotes[random];
    quotesPanel.append(p);
}

// The displayNewsPanel() function is used to populate content in the HTML element with the ID of 'newsPanel'
const displayNewsPanel = () => {
    // Create a variable named 'newsItems' that is a handle to the element with the ID of 'newsPanel'
    const newsItems = document.querySelector(`#newsPanel`)
    // This is the array of news that you are to use. Note that it is an array of arrays.
    const news = [
        ['May 2, 2025', 'Clark Surveying Students Wins National Competition', 'Congratulations to Clark College’s Surveying and Geomatics team who earned top honors at a prestigious national competition held over spring break, taking first place at the National Society of Professional Surveyors (NSPS) 24th Annual Student Competition.', 'https://clark.edu'],
        ['April 25, 2025', 'Clark Students Honored on All-Washington Academic Team', 'Two Clark College students were recognized for their outstanding academic achievement and community service at the 28th annual All-Washington Academic Team ceremony, held April 24 at South Puget Sound Community College in Lacey.', 'https://clark.edu'],
        ['April 18, 2025', 'Celebrating Sakura 2025', 'For the first time in years, the Sakura Festival finally got its perfect spring day. The weather was warm, the cherry trees were bursting with fluffy pink blossoms, and not a single dark cloud dared to show up.', 'https://clark.edu'],
        ['April 10, 2025', 'Cuisine Students Wins at State Competition', 'At the 2025 Washington State Leadership and Skills Conference, students across the state demonstrated outstanding talent, passion, and professionalism in career and technical education.', 'https://clark.edu']
    ];

    // Loop through the news array of arrays. No need for nested loops.
    news.forEach((element) => {
        // add elements to the page (DOM) using the techniques you learned in Module 3 to make the news array of items appear on the page
        const h3 = document.createElement('h3');
        h3.innerText = `${element[1]}-${element[0]}`;
        newsItems.append(h3);

        const p = document.createElement('p');
        p.innerText = element[1, 2];
        newsItems.append(p);

        const a = document.createElement('a');
        a.setAttribute('href', element[3]);
        a.innerText = `Read more >`;
        newsItems.append(a);
    });
}

// The displayFeaturedStudentPanel() function is used to populate content in the HTML element with the ID of 'featuredStudentPanel'
const displayFeaturedStudentPanel = () => {
    // Create a variable named 'featuredStudent' that is a handle to the element with the ID of 'featuredStudentPanel'
    const featuredStudent = document.querySelector('#featuredStudentPanel')
    clear('#featuredStudentPanel');

    // This is the arrays for featuredStudents. Note that you are to use. Note that it is an array of arrays.
    const featuredStudents = [
        ['Robin Williams', 'Robin McLaurin Williams (July 21, 1951 – August 11, 2014) was an American actor and comedian.Known for his improvisational skills and the wide variety of characters he created on the spur of the moment and portrayed on film, in dramas and comedies alike, Williams is regarded as one of the greatest comedians of all time.', 'img/robin-williams-img.jpg'],
        ['Anthony Bourdain', 'Anthony Michael Bourdain (June 25, 1956 – June 8, 2018) was an American celebrity chef, author and travel documentarian. He starred in programs focusing on the exploration of international culture, cuisine, and the human condition.', 'img/anthony-bourdain.webp'],
        ['Theodore Roosevelt', 'Theodore Roosevelt Jr. (October 27, 1858 – January 6, 1919), also known as Teddy or T. R., was the 26th president of the United States, serving from 1901 to 1909. Roosevelt previously was involved in New York politics, including serving as the states 33rd governor for two years. He served as the 25th vice president under President William McKinley for six months in 1901, assuming the presidency after McKinleys assassination. As president, Roosevelt emerged as a leader of the Republican Party and became a driving force for anti-trust and Progressive policies.', 'img/roosevelt_360x450.jpg'],
        ['Chuck Palahniuk', 'Charles Michael Palahniuk (born February 21, 1962) is an American novelist who describes his work as transgressional fiction. He has published 19 novels, three nonfiction books, two graphic novels, and two adult coloring books, as well as several short stories. His first published novel was Fight Club, which was adapted into a film of the same title.', 'img/chuckp.jpg']
    ];

    // Create a variable named 'randomStudent' and assign it a random number. This number will be used to index into the featuredStudents array
    const randomStudent = Math.floor(Math.random() * featuredStudents.length);

    // Account for repeating arrays set the variable current to featured student
    let currentStudent = featuredStudent
    // While looping accounting f
    while (currentStudent == randomStudent) {
        randomStudent = Math.floor(Math.random() * featuredStudents.length);
    }
    // more decorative than functioning 
    currentQuote = randomStudent

    // add elements to the page (DOM) using the techniques you learned in Module 3 to make the featured student info appear on the page
    /* Build the HTML to display the featured student
    Your HTML should include an img tag that has the following class attribute values assigned to it:
    
    class="studentpic rounded mx-auto d-block"
    
    You should also include the name of the student and their bio below the image
    */
    const img = document.createElement('img');
    img.setAttribute('src', featuredStudents[randomStudent][2]);
    img.setAttribute('class', 'studentpic rounded mx-auto d-block');
    featuredStudent.append(img);

    const h6 = document.createElement('h6');
    h6.innerText = featuredStudents[randomStudent][0];
    h6.style.textAlign = 'center'
    featuredStudent.append(h6);

    const p = document.createElement('p');
    p.innerText = featuredStudents[randomStudent][1];
    featuredStudent.append(p);
}

// This function clears out the innerHTML of the element passed in as a parameter
// There is no coding that you need to do for this function
const clear = (panelID) => {
    console.log('clear!');
    const panel = document.querySelector(panelID);
    panel.innerHTML = '';
}

// This function takes two parameters that are handles to timers
const stopIntervals = (timer1, timer2) => {
    console.log('Stopping intervals...');
    // Write two statements that will stop timer1 and timer2

    clearInterval(timer1);
    clearInterval(timer2);

    console.log('All intervals have been stopped');
}

// Start the entire process here
window.addEventListener("DOMContentLoaded", () => {
    displayQuotesPanel();
    displayNewsPanel();
    displayFeaturedStudentPanel();

    // Create a new timer using setInterval and assign it to the variable 'quotesTimer'.
    // The timer must fire off every 15 seconds.
    const quotesTimer = setInterval(displayQuotesPanel, 15000);

    // Create a new timer using setInterval and assign it to the variable 'featuredStudentTimer'. 
    // The timer must fire off every 10 seconds
    const featuredStudentTimer = setInterval(displayFeaturedStudentPanel, 10000)

    // Get a handle to the logo element with the ID of 'theLogo'
    const logo = document.querySelector(`#theLogo`);

    // Bind an event listener to the click event of 'theLogo'
    // The anonymous function should then include this statement:
    // stopIntervals(quotesTimer,featuredStudentTimer);
    logo.addEventListener('click', () => {
        stopIntervals(quotesTimer, featuredStudentTimer)
    })

});