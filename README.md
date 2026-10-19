# Navneet Sharma Portfolio

A modern, responsive portfolio website built with **Next.js**, **TypeScript**, and **Material UI** showcasing the professional journey, technical expertise, and experience of **Navneet Sharma**, a Technical Architect with 15+ years of experience in enterprise software development, cloud architecture, and microservices.

## Features

* Responsive modern UI
* Professional Technical Architect portfolio
* Hero section with contact information
* About section highlighting leadership and architecture expertise
* Skills matrix covering technologies and tools
* Detailed experience timeline
* Education section
* Contact section with social links
* Optimized for desktop, tablet, and mobile devices

## Tech Stack

### Frontend

* Next.js 15
* React
* TypeScript
* Material UI (MUI)

### Styling

* Material UI Components
* MUI SX Styling System
* Responsive Layouts
* Custom Theme Styling

## Project Structure

```text
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Experience.tsx
│   ├── Education.tsx
│   └── Contact.tsx
```

## Sections

### Hero

* Introduction
* Professional Summary
* Contact Links
* Quick Statistics

### About

* Technical Leadership
* Architecture Expertise
* Domain Experience
* Career Highlights

### Skills

* Languages
* Frontend Technologies
* Backend & APIs
* Databases
* Cloud & DevOps
* Observability
* Testing
* Architecture Patterns
* Code Quality Tools
* BI & Reporting
* Development Tools

### Experience

Professional journey across:

* Programmers.io
* EA Technologies
* TechUnido Software
* HCL Technologies
* GlobalLogic India
* Q3 Technology
* Accortis Technologies
* Educomp Solutions
* Ezee Tips

### Education

* B.Tech (Information Technology)
* Senior Secondary
* Higher Secondary

### Contact

* Email
* Phone
* Location
* LinkedIn
* GitHub

## Getting Started

Use Node.js 20.19.0 or newer.

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm start
```

## Tests

### Unit Tests

Run the unit tests once:

```bash
npm run test:unit
```

Run one unit-test file:

```bash
npm run test:unit -- unit-tests/Footer.test.tsx
```

Run unit tests in watch mode while developing:

```bash
npm run test:unit:watch
```

### End-to-End Tests

Install the Playwright Chromium browser once:

```bash
npx playwright install chromium
```

Run the end-to-end test suite (Playwright starts the development server automatically):

```bash
npm run test:e2e
```

Run a single test by its title:

```bash
npm run test:e2e -- --grep "desktop navigation follows section links"
```

Run tests with a visible browser:

```bash
npm run test:e2e -- --headed
```

## Deployment

The application can be deployed on:

* Vercel
* Netlify
* Azure Static Web Apps
* AWS Amplify

## Author

**Navneet Sharma**

Technical Architect | .NET | Azure | Microservices

15+ years of experience delivering enterprise-grade solutions across Finance, Retail, Manufacturing, E-Commerce, and Cloud platforms.
