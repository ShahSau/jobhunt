<p align="center">
    <h1 align="center">JOBHUNT</h1>
</p>
<p align="center">
    <em>A job search app based on nextjs and django</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/ShahSau/jobhunt?style=flat&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/ShahSau/jobhunt?style=flat&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/ShahSau/jobhunt?style=flat&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/ShahSau/jobhunt?style=flat&color=0080ff" alt="repo-language-count">

<p align="center">
		<em>Developed with the software and tools below.</em>
</p>
<p align="center">
	<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript">
    	<img src="https://img.shields.io/badge/Python-3776AB.svg?style=flat&logo=Python&logoColor=white" alt="Python">
	<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React">
    	<img src="https://img.shields.io/badge/Next-black?style=flat&logo=next.js&logoColor=white" alt="Next">
	<img src="https://img.shields.io/badge/Axios-5A29E4.svg?style=flat&logo=Axios&logoColor=white" alt="Axios">
    	<img src="https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=flat&logo=tailwind-css&logoColor=white" alt="tailwindCss">
	<img src="https://img.shields.io/badge/PostCSS-DD3A0A.svg?style=flat&logo=PostCSS&logoColor=white" alt="PostCSS">
	<br />
	<img src="https://img.shields.io/badge/django-%23092E20.svg?style=flat&logo=django&logoColor=white" alt="Django">
    	<img src="https://img.shields.io/badge/DJANGO-REST-ff1709?style=flat&logo=django&logoColor=white&color=ff1709&labelColor=gray" alt="Django-REST">
	<img src="https://img.shields.io/badge/JWT-black?style=flat&logo=JSON%20web%20tokens" alt="JWT">
    	<img src="https://img.shields.io/badge/postgres-%23316192.svg?style=flat&logo=postgresql&logoColor=white" alt="postgres">
	<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON">
	<img src="https://img.shields.io/badge/Autoprefixer-DD3735.svg?style=flat&logo=Autoprefixer&logoColor=white" alt="Autoprefixer">
</p>
<hr>

## 🔗 Quick Links

> - [📍 Overview](#📍-overview)
> - [📦 Features](#)
> - [📂 Repository Structure](#📂-repository-structure)
> - [🧩 Modules](#🧩-modules)
> - [🚀 Getting Started](#🚀-getting-started)
>   - [⚙️ Installation](#⚙️-installation)
>   - [🤖 Running jobhunt](#🤖-running-jobhunt)
> - [🛠 Project Roadmap](#🛠-project-roadmap)
> - [📄 License](#📄-license)

---

## 📍 Overview
This job portal is build on  Next.js (production-ready react framework), Django REST framework (a powerful and flexible framework for building Web APIs) and postgres.

---

## 📦 Features

Empower your job recruitment and candidate management process with our cutting-edge feature set, seamlessly integrated into your platform. With a focus on JWT and cookies for secure authentication, dynamic map functionality, real-time updates, and comprehensive job statistics, our solution offers an unparalleled experience for employers and candidates.


- Authentication:
Login process is secured by JWT and Cookies

- Favorite Jobs Feature:
Curate your personalized job list with our Favorite Jobs feature. Save and revisit positions that catch your eye, making it easy to prioritize and organize your applications.

- Applied Jobs History:
Access a comprehensive history of all your applied jobs in one place. 

- Add and Delete Jobs:
Take control of your job search by adding and deleting jobs as needed. 

- Interactive Map:
Leverage an intuitive map interface to visualize job locations and gain insights into geographical distribution.

- Live Update of Applied Number of People:
Real-time tracking of the number of applicants for each job.

- Job Statistics:
Access comprehensive statistics on various aspects of your job listings. 

- Employer's View:
Provide details of each candidates who applied for the job.

---

## 📂 Repository Structure

```sh
└── jobhunt/
    ├── backend
    │   ├── account
    │   │   ├── admin.py
    │   │   ├── apps.py
    │   │   ├── migrations
    │   │   ├── models.py
    │   │   ├── serializers.py
    │   │   ├── tests.py
    │   │   ├── urls.py
    │   │   └── views.py
    │   ├── backend
    │   │   ├── asgi.py
    │   │   ├── settings.py
    │   │   ├── urls.py
    │   │   └── wsgi.py
    │   ├── job
    │   │   ├── admin.py
    │   │   ├── apps.py
    │   │   ├── filters.py
    │   │   ├── migrations
    │   │   ├── models.py
    │   │   ├── serializers.py
    │   │   ├── tests.py
    │   │   ├── urls.py
    │   │   └── views.py
    │   ├── manage.py
    │   └── utils
    │       ├── custom_exception_handler.py
    │       └── error_views.py
    └── frontend
        ├── .eslintrc.json
        ├── app
        │   ├── (employer)
        │   ├── applied
        │   ├── components
        │   ├── favorite
        │   ├── globals.css
        │   ├── jobs
        │   ├── layout.jsx
        │   ├── login
        │   ├── myprofile
        │   ├── not-found.jsx
        │   ├── page.jsx
        │   ├── providers
        │   ├── register
        │   ├── search
        │   ├── stats
        │   └── utils
        ├── context
        │   ├── AuthContext.js
        │   ├── JobContext.js
        │   └── ThemeProvider.js
        ├── jsconfig.json
        ├── next.config.js
        ├── package-lock.json
        ├── package.json
        ├── postcss.config.js
        ├── tailwind.config.js
        └── tsconfig.json
```

---

## 🧩 Modules


<details closed><summary>frontend.context</summary>

| File                                                                                                 | Summary                                                                                                                                                                                                                                    |
| ---                                                                                                  | ---                                                                                                                                                                                                                                        |
| [AuthContext.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/context/AuthContext.js)     |  Provides the implementation for authenticating users   |
| [JobContext.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/context/JobContext.js)       |  Provides access to jobs throughout the app   |
| [ThemeProvider.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/context/ThemeProvider.js) |  It allows us to pass our theme object down the component tree without having to manually pass it at every level |

</details>

<details closed><summary>frontend.app</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                             |
| ---                                                                                        | ---                                                                                                                                                                                                                                 |
| [globals.css](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/globals.css)     | Tailwind will swap these directives out at build time with all of its generated CSS   |
| [layout.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/layout.jsx)       | Base layout of the     |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/page.jsx)           | Homepage of the app      |
| [not-found.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/not-found.jsx) | Customized 404 page |

</details>

<details closed><summary>frontend.app.utils</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                        |
| ---                                                                                                        | ---                                                                                                                                                                                                                                            |
| [isAuthenticated.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/utils/isAuthenticated.js) | Verifies if the user is authenticated or not |

</details>

<details closed><summary>frontend.app.components</summary>

| File                                                                                                      | Summary                                                                                                                                                                                                                                          |
| ---                                                                                                       | ---                                                                                                                                                                                                                                              |
| [JobHunt.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/JobHunt.jsx)         | Component to render <i>Hottest jobs</i> and <i>Freshers job</i>     |
| [Footer.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/Footer.js)             | Footer of the app       |
| [UpdateJob.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/UpdateJob.jsx)     |    Components for updating an existing job                |
| [Header.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/Header.js)             | Header of the app      |
| [ThemeSwitch.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/ThemeSwitch.jsx) | Theme switcher component |
| [ClientsOnly.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/ClientsOnly.jsx) | To remove nextjs hydration error |
| [JobsSide.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/JobsSide.js)         | Renders <i>Recent Jobs</i> and <i>Remote jobs</i>     |

</details>

<details closed><summary>frontend.app.components.user</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                                |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                    |
| [UpdateProfile.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/user/UpdateProfile.js) | Component for updating the profile of a user |

</details>

<details closed><summary>frontend.app.components.auth</summary>

| File                                                                                                   | Summary                                                                                                                                                                                                                                           |
| ---                                                                                                    | ---                                                                                                                                                                                                                                               |
| [Register.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/auth/Register.js) | Register component to add a new user |
| [Login.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/auth/Login.js)       | Login component to sign in to the app    |

</details>

<details closed><summary>frontend.app.components.stats</summary>

| File                                                                                                        | Summary                                                                                                                                                                                                                                              |
| ---                                                                                                         | ---                                                                                                                                                                                                                                                  |
| [TopicStats.js](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/components/stats/TopicStats.js) | Component for getting the statistics of the topic user typed |

</details>

<details closed><summary>frontend.app.favorite</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                 |
| ---                                                                                       | ---                                                                                                                                                                                                                                     |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/favorite/page.jsx) | Page for adding and removing a job from favorite|

</details>

<details closed><summary>frontend.app.myprofile</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                  |
| ---                                                                                        | ---                                                                                                                                                                                                                                      |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/myprofile/page.jsx) | Page for updating user profile |

</details>

<details closed><summary>frontend.app.applied</summary>

| File                                                                                     | Summary                                                                                                                                                                                                                                |
| ---                                                                                      | ---                                                                                                                                                                                                                                    |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/applied/page.jsx) | Page for showing all the applied jobs |

</details>

<details closed><summary>frontend.app.search</summary>

| File                                                                                                | Summary                                                                                                                                                                                                                                     |
| ---                                                                                                 | ---                                                                                                                                                                                                                                         |
| [SearchComp.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/search/SearchComp.jsx) | Component for searching jobs |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/search/page.jsx)             | Job search page      |

</details>

<details closed><summary>frontend.app.stats</summary>

| File                                                                                   | Summary                                                                                                                                                                                                                              |
| ---                                                                                    | ---                                                                                                                                                                                                                                  |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/stats/page.jsx) |Page for showing statistics of a job title |

</details>

<details closed><summary>frontend.app.jobs.[id]</summary>

| File                                                                                       | Summary                                                                                                                                                                                                                                  |
| ---                                                                                        | ---                                                                                                                                                                                                                                      |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/jobs/[id]/page.jsx) | Displaying a job details |

</details>

<details closed><summary>frontend.app.providers</summary>

| File                                                                                                             | Summary                                                                                                                                                                                                                                             |
| ---                                                                                                              | ---                                                                                                                                                                                                                                                 |
| [ToasterProvider.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/providers/ToasterProvider.jsx) | Toast notification provider |

</details>

<details closed><summary>frontend.app.(employer).(jobs).employerjobs</summary>

| File                                                                                                            | Summary                                                                                                                                                                                                                                                       |
| ---                                                                                                             | ---                                                                                                                                                                                                                                                           |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/(employer)/(jobs)/employerjobs/page.jsx) | Page to display all the advertized jobs, Only accessible to the user who created the job |

</details>

<details closed><summary>frontend.app.(employer).(jobs).employerjobs.newjob</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                              |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                  |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/(employer)/(jobs)/employerjobs/newjob/page.jsx) | Advertize a new job |

</details>

<details closed><summary>frontend.app.(employer).(jobs).employerjobs.jobs.[id]</summary>

| File                                                                                                                      | Summary                                                                                                                                                                                                                                                                 |
| ---                                                                                                                       | ---                                                                                                                                                                                                                                                                     |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/(employer)/(jobs)/employerjobs/jobs/[id]/page.jsx) | Details and update an advertized job, only accessible to the user who created the job |

</details>

<details closed><summary>frontend.app.(employer).(jobs).employerjobs.candidates.[id]</summary>

| File                                                                                                                            | Summary                                                                                                                                                                                                                                                                       |
| ---                                                                                                                             | ---                                                                                                                                                                                                                                                                           |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/(employer)/(jobs)/employerjobs/candidates/[id]/page.jsx) | List of candidates who applied for the job, only accessible to the user who created the job  |

</details>

<details closed><summary>frontend.app.login</summary>

| File                                                                                   | Summary                                                                                                                                                                                                                              |
| ---                                                                                    | ---                                                                                                                                                                                                                                  |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/login/page.jsx) | Login page|

</details>

<details closed><summary>frontend.app.register</summary>

| File                                                                                      | Summary                                                                                                                                                                                                                                 |
| ---                                                                                       | ---                                                                                                                                                                                                                                     |
| [page.jsx](https://github.com/ShahSau/jobhunt/blob/master/frontend/app/register/page.jsx) | Signup page |

</details>

<details closed><summary>backend</summary>

| File                                                                            | Summary                                                                                                                                                                                                                     |
| ---                                                                             | ---                                                                                                                                                                                                                         |
| [manage.py](https://github.com/ShahSau/jobhunt/blob/master/backend/manage.py)   | A command-line utility for Django projects  |

</details>

<details closed><summary>backend.utils</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                            |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                                |
| [error_views.py](https://github.com/ShahSau/jobhunt/blob/master/backend/utils/error_views.py)                           | Error Handler              |
| [custom_exception_handler.py](https://github.com/ShahSau/jobhunt/blob/master/backend/utils/custom_exception_handler.py) | Custom Error handler for authentication and token verification |

</details>

<details closed><summary>backend.account</summary>

| File                                                                                            | Summary                                                                                                                                                                                                                                 |
| ---                                                                                             | ---                                                                                                                                                                                                                                     |
| [urls.py](https://github.com/ShahSau/jobhunt/blob/master/backend/account/urls.py)               | All the request related to user comes to this file     |
| [models.py](https://github.com/ShahSau/jobhunt/blob/master/backend/account/models.py)           | Custom user model      |
| [views.py](https://github.com/ShahSau/jobhunt/blob/master/backend/account/views.py)             |  Take the web request from urls.py and give the web response to templates      |
| [apps.py](https://github.com/ShahSau/jobhunt/blob/master/backend/account/apps.py)               | Configuration file      |
| [serializers.py](https://github.com/ShahSau/jobhunt/blob/master/backend/account/serializers.py) | Serialize user data |

</details>


<details closed><summary>backend.job</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                             |
| ---                                                                                         | ---                                                                                                                                                                                                                                 |
| [urls.py](https://github.com/ShahSau/jobhunt/blob/master/backend/job/urls.py)               | All the request related to jobs comes to this file         |
| [models.py](https://github.com/ShahSau/jobhunt/blob/master/backend/job/models.py)           | Jobs, applied and favorite jobs model      |
| [views.py](https://github.com/ShahSau/jobhunt/blob/master/backend/job/views.py)             |  Take the web request from urls.py and give the web response to templates       |
| [apps.py](https://github.com/ShahSau/jobhunt/blob/master/backend/job/apps.py)               | Config file       |
| [filters.py](https://github.com/ShahSau/jobhunt/blob/master/backend/job/filters.py)         | Filtering jobs           |
| [serializers.py](https://github.com/ShahSau/jobhunt/blob/master/backend/job/serializers.py) | Serialize job data |

</details>


---

## 🚀 Getting Started

***Requirements***

Ensure you have the following dependencies installed on your system:

* **Python**: `version >= 3.0`
* **node**: `version >= 16.0.0`

### ⚙️ Installation

1. Clone the jobhunt repository:

```sh
git clone https://github.com/ShahSau/jobhunt
```

2. Change to the project directory:

```sh
cd jobhunt
```

##### Backend:
3. Activate environment
```sh
source myenv/bin/activate
```

4. Go to backend 
```sh
cd backend
```

5.Install the dependencies:

```sh
pip install -r requirements.txt
```

##### Frontend:
3. Go to frontend 
```sh
cd frontend
```
4. Install the dependencies:

```sh
npm install
```

### 🤖 Running jobhunt

##### Backend:

Use the following command to run backend:

```sh
python3 manage.py runserver 
```
server starts at http://localhost:8000/

```sh
Starting development server at http://localhost:8000/
```

##### Frontend

Use the following command to run frontend:

```sh
npm run dev
```
App runs at http://localhost:3000/

```sh
- Local: http://localhost:3000
```

---

## 🛠 Project Roadmap

- [ ] `► Cypress Testing`
- [ ] `► Containerized the app`

---
## 📄 License

This project is protected under the MIT License. For more details, refer to the [LICENSE](https://github.com/ShahSau/jobhunt?tab=MIT-1-ov-file) file.

---

[Top](#top)
