## Tourism Management website (TourMan)

## About:
Programming hero: B9A10, assignment 10. Focused on nodejs with mongodb. Used react 18, nodejs, mongodb, firebase auth. User can add tourist spot, view details, update and delete his own tourist spots. 

## Techstack:
Frontend: react 18, firebase (auth), react-bootstrap-icons. 
Backend: expressjs, mongodb

## Features:
  - Authenticate (login, register) using firebase
  - Login using Email, github, google 
  - Some routes (pages) are protected. only logged in user can access these.
  - Fully custom backend server used using express js.
  - CRUD operation done using expressjs, mongodb atlas
  - Light Dark mode theme applied
  - A custom alert is shown after completing each crud operation.  
  - User can add new tourist spot. 
  - user can update, delete his created spot. But can not update, delete others tourist-spot.
  - user can see his own created spots list.
  - Anyone can see all spots and country based spots.
  - custom error page used to handle any unexpected error.

## some npm packages (used in the app):
  - react-tooltip (to show tooltip)
  - react-simple-typewriter (for dynamic typing word effect)
  - swiper (for slider in homepage banner)
  - sweetalert2, react-toastify (for custom alert)

## Imporant Links:
  - Phero source repo: https://github.com/ProgrammingHero1/B9--Assaignment-10 
  - My frontend repo: [pha10-tourman-client](https://github.com/rahatfaruk/pha10-tourman-client) , [phero-repo](https://github.com/programming-hero-web-course-4/B9A10-client-side-rahatfaruk) 
  - My backend repo: [pha10-tourman-server](https://github.com/rahatfaruk/pha10-tourman-server) , [phero-repo](https://github.com/programming-hero-web-course-4/b9a10-server-side-rahatfaruk)  
  - My live site: https://pha10-tourism-manage.web.app/ 

## How can you run frontend locally:
  - clone this repo
  - create `.env.local` file inside root folder. Here, keys are: firebase config info (create a firebase project if needed) - ` VITE_apiKey, VITE_authDomain, VITE_projectId, VITE_storageBucket, VITE_messagingSenderId, VITE_appId `
  - update server link into a local link (if needed)
  - start frontend server `npm run dev`