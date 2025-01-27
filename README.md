# Fertility-Focused Course App

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The project is built using **Next.js** with the **App Router** structure and styled with **Tailwind CSS**. The focus is on creating a responsive UI for a fertility-focused app that provides courses for patients.

## Features

- **Course List**: Users can browse a list of available courses and filter them based on specific criteria.
- **Course Detail**: Users can view detailed information about a selected course.
- **Responsive UI**: The application is designed to be fully responsive, ensuring a seamless experience across devices.

## Technical Requirements

- Built with **Next.js** (App Router).
- Styled using **Tailwind CSS**.
- No backend implementation required (dummy data is used).
- Minimal dependencies for a lightweight build.
- Deployed on **Vercel**.

---

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- A package manager like `npm`, `yarn`, `pnpm`, or `bun`.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/inganta23/fertility-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd fertility-app
   ```
3. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

The project follows the **App Router** structure of Next.js. Here’s an overview of the key files and folders:

- `app/`: Contains the main application pages and components.
  - `page.js`: The landing page with the course list and filters.
  - `course/[id]/page.js`: Dynamic route for displaying course details.
- `components/`: Reusable UI components (e.g., course cards, filters).
- `data/`: Dummy data for courses (mocked as a JSON file).
- `styles/`: Custom styles or Tailwind configurations (if needed).

---

## Core Features Implementation

### 1. Course List

- Displays a list of courses fetched from dummy data.
- Includes filters to narrow down the course list (e.g., by category, duration, or difficulty).
- Built with responsive design to ensure usability on all screen sizes.

### 2. Course Detail

- Dynamic route (`/course/[id]`) to display detailed information about a selected course.
- Includes course overview, instructor details, and a call-to-action button.

### 3. Responsive UI

- Tailwind CSS is used to create a fully responsive layout.
- Mobile-first approach ensures optimal performance on smaller devices.

---

## Deployment

The application is deployed on **Vercel**. You can access the live version here: [Live Demo](https://fertility-app-lwn6.vercel.app).

---

## Additional Notes

- **Dummy Data**: All course data is mocked in a JSON file (`data/courses.json`). This can be replaced with an API call in a real-world scenario.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Next.js Optimization**: Leverages features like `next/font` for optimized font loading and automatic code splitting.
