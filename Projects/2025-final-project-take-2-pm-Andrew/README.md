# NYT News Dashboard

A news reader that pulls live articles from the New York Times Top Stories API
and displays them as styled cards. Users can switch between 13 news sections
without a full page reload, and refresh stories on demand.

## Features

- Fetches live data from the NYT Top Stories API on page load
- Section selector updates only the stories section — no full page reload
- Displays title (linked), abstract, byline, section, formatted date, and image per story
- Card-based layout with custom CSS styling
- Refresh button pulls the latest stories for the current section
- Passes WAVE with no errors, alerts, or contrast errors
- HTML and CSS validated

## Preview

![Dashboard screenshot](/assets/Final_Proj-126.png)

<!-- Uncomment if you have a screen recording -->
[Watch demo](https://www.loom.com/share/ca7d0fc3a6f140caad92922efbe326f8)

## Technologies

- Vanilla JavaScript (ES6+)
- Fetch API / JSON
- HTML5 / CSS3
- NYT Top Stories API