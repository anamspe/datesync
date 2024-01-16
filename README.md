# DateSync

DateSync is the place where you can plan and create the best dates for you to share with your friends and loved ones. Take advantage of this amazing platform where you can search for local restaurants, events, movies, and activities and put them together in a shareable date plan.

## Final Product

!["screenshot"](url)

## Table of Contents

- [Features](#features)
- [Project Setup](#project-setup)
- [Database Setup](#database-setup)
- [Usage](#usage)
- [Stack](#stack)
- [Routes](#routes)
- [Future Developments](#future-developments)
- [Developers](#developers)

## Features
- :date: **Create Dates**: At the Create Your Perfect Date page you're able to search for Restaurants, Events, Activities and Movies based on your chosen location.
  - After choosing your location, navigate to your chosen category and choose from the list of options.
  - Restaurants:
    - You're able to filter by Restaurant Types, Price Level, and Rating
      - Casual: Cafes & Coffee Shops, Pizza, Pubs & Diners, Breweries & Lounges, and Breakfast & Brunch
      - Cuisine Type: Steakhouse, Italian, Mexican, Asian, Indian
  - Events:
      - Event types: Sports, Concerts, Festivals, Nightlife, Live Theatre, and Comedy Shows
  - Movies:
      - The movies selection will show all movies playing at theatres near your selected location. After choosing a movie, you'll be able to choose a showtime.
  - Activities:
      - Choose between Trails, Lakes, Museums, Zoos, Beaches, and Ice Skating

- :card_file_box: **Dashboard**: At the Dashboard page you have access to all dates you've created in the past. Navigate among the different tabs:
  - All Dates: All of your created dates.
  - Upcoming Dates: Dates that will happen in the future.
  - Drafts: Dates that still don't have a set date to happen.
  - Past Dates: Dates that already happened.

- :iphone: **Responsive**: DateSync is a responsive web app, to make sure our users that prefer creating dates on the go have a smooth experience.

## Project Setup

To set up the project locally:

1. Clone the repository.
```
$ git clone git@github.com:anamspe/datesync.git
```

2. Navigate to the Project Directory

```
$  cd datesync
```

3. Install Dependencies

```
$  npm install
```

## Database setup

To set up the database:

```
  $ npm install pg
```

1.Start Postgres server

```
$ startpostgres
```

2. Enter Postgres to begin creating schema and adding data to

```
$  psql
```

3. Create database

```
# CREATE DATABASE planner OWNER >!(insert postgresql username)!<;
```

4. Set your database:

```
$ npm run db:reset
```

## Usage

To run the web app locally, use the following commands:

```
  $ npm run start
```
Navigate to http://localhost:3000.

# Stack

 DateSync was created using a **PERN** Stack:

- PostgreSQL
- Express (Vite Express)
- React (Vite)
- Node.js

### Dependencies

- Auth0
- Axios
- Bootstrap
- DayJS
- Lottie
- Material UI
- Morgan
- PG
- React Router
- SASS

### API

This application relies on APIs provided by [SerpApi](https://serpapi.com/):

- Google Local
- Google Events
- Google Search ➡ Google Showtimes

## Routes

- Landing Page
- /create-date -- Create Date Page
- /dashboard -- Dashboard

## Future Developments

- **Redo Date** 
  * This feature will allow users to create a new date using the same components of a completed date, having to only edit the date and time it will happen.
- **Edit Date**
  * This feature will allow users to edit a date component without having to create a new date from scratch: choose other date components and update date and time.
- **PWA - Progressive Web App**
  * Transforming DateSync in a PWA will allow users to download the app to their mobile devices, making it even more accessible on their day-to-day life.

## Developers

DateSync is a creation of developers [Ana Franco](https://github.com/anamspe), [David Giroux](https://github.com/DavidGir) and [Rachel Little](https://github.com/rachdawn).

January, 2024.

