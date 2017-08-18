# DevFest NYC 2017 source files deployed on https://devfestnyc2017.github.io
Website for DevFestNYC 2017

### How to clone, configure, deploy and maintain Hoverboard for DevFest NYC 2017

Check list of parmaters, files and settings to be provided by super admin

- Social Media Links
- Google Analytics Code
- Google API Key for Javascript Map
- Firebase settings
- Firebase Authentication settings for Google
- Mail Chimp
- Google plus Gallery link for Devfest NYC 2016
- Call for papers google form link
- Logos and Banners


1. Clone this repository (https://github.com/DevFestNYC2017/website.git) to your local git repo
2. The application working directory (The source files) are in /src/
3. Install dependencies and run the application on the local server - npm install && npm run serve
4. Components feed text data from Firebase include the follwing (Speakers, Sessions, Schedule, Partners, Videos, Team, Tickets) while the rest text data on the site is hardcorded on the markdown, JSON and HTML files
5. Example URL for viewing sample database schema from Hoverboard master application(https://hoverboard-experimental.firebaseio.com/tickets.json) Change the prefix to the .json as needed
6. Detailed explanation on advanced configuration, deployment to github pages (https://devfestnyc2017.github.io) and maintenance coming soon.
