<div align="center">
## FundingFour - Crowdfunding Platform

<p>A modern, community-focused crowdfunding platform where anyone can start or support meaningful causes — whether raising funds or requesting just a few helpful people.</p>

<p>Built as part of the SheCodes Australia Plus program.</p>

<br />

[![React](https://img.shields.io/badge/React-18.3.1-blue?logo=react&logoColor=white)](https://react.dev/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
  [![GitHub stars](https://img.shields.io/github/stars/samara-x/crowdfunding-frontend?style=social)](https://github.com/samara-x/crowdfunding-frontend)
  [![GitHub forks](https://img.shields.io/github/forks/samara-x/crowdfunding-frontend?style=social)](https://github.com/samara-x/crowdfunding-frontend/forks)
  [![GitHub issues](https://img.shields.io/github/issues/samara-x/crowdfunding-frontend)](https://github.com/samara-x/crowdfunding-frontend/issues)
  <!-- [![Netlify Status](https://api.netlify.com/api/v1/badges/<your-badge-id>/deploy-status)](https://app.netlify.com/sites/your-site/deploys) -->
  </div>

## 
![Link to Depoloyed Repo](https://reliable-speculoos-b89ba1.netlify.app/)

### Concept & Purpose
They say 3's a crowd, but what if you were wanting to expand to four? FundingFour is a lightweight crowdfunding platform designed to help individuals seek support for meaningful personal experiences in a smaller 'crowd' or to be able to post if they are needing that +1 for an event or great deal! The platform enables users to share ideas such as attending events, learning new skills, travelling, wellness activities, or small life goals, and allows supporters to be apart of it!

The intent would be to not have a monetised option, and be able to pledge commitment to time or any human-centred way.

The focus is on connection, storytelling, and shared belief, rather than monetary value. 

### Intended Audience
- Individuals seeking support for personal growth experiences (e.g. courses, travel, events, wellness goals)
- Supporters who want to contribute to people they know or causes they resonate with
- Communities built around encouragement, shared values, and small meaningful goals

## Screenshots
![Homepage](screenshots/homepage.png)
![Create User](screenshots/createaccount.png)
![Log In](screenshots/login.png)
![Creat Post/Fundraiser](screenshots/createpost.png)

**Frontend (Vite + React):**  
https://reliable-speculoos-b89ba1.netlify.app/

**Backend (Django REST Framework):**  
https://fundingfourcrowds-0aa4332162ae.herokuapp.com/


## Features

- **User Accounts**  
  - Sign up, log in (token authentication)  
  - Username, email, password

- **Fundraisers**  
  - Create a fundraiser (title, description, goal, image, is_open status)  
  - View all fundraisers on homepage  
  - View single fundraiser details (progress bar, pledges list, owner info)

- **Pledges / Support**  
  - Pledge money to any open fundraiser (amount, comment, anonymous option)  
  - See total raised amount and progress percentage  
  - View list of pledges (anonymous or named)

- **Owner Controls**  
  - Delete your own fundraiser (with confirmation)  
  - (Edit functionality planned / in progress)

- **Responsive Design**  
  - Mobile-friendly layout

- **Custom 404 Page**  
  - Friendly "not found" experience

## Tech Stack

**Frontend**  
- React (Vite)  
- React Router  
- Custom hooks (e.g. `useFundraiser`, `useAuth`)  
- Token-based authentication (localStorage)  

**Backend** (separate repo)  
- Django + Django REST Framework  
- Token Authentication (`rest_framework.authtoken`)  
- PostgreSQL (Heroku)  

**Deployment**  
- Frontend: GitHub Pages / Netlify
- Backend: Heroku


```markdown
## Folder Structure

crowdfunding-frontend
├─ public
├─ src
│  ├─ api           → API helpers (login, signup, create fundraiser, pledge…)
│  ├─ components    → reusable UI (FundraiserCard, PledgeForm, Button…)
│  ├─ hooks         → custom hooks (useAuth, useFundraiser…)
│  ├─ pages         → route pages (HomePage, FundraiserPage, LoginPage…)
│  ├─ App.jsx       → main layout + routing
│  └─ main.jsx      → entry point
└─ README.md ```

### Running Locally
**For step by step usage guide, [click here](/local_setup.md)**

### Need a quick link to see if I did indeed finish?
I did not [click here](/react_project_spec.md)