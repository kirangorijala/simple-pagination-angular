# Simple Pagination Angular

A modern Angular application demonstrating table pagination with Tailwind CSS styling. This project showcases how to implement client-side pagination with a clean, responsive UI.

## Features

- Responsive data table with pagination
- 10 items per page display
- Navigation controls (First, Previous, Next, Last)
- Modern UI with Tailwind CSS
- TypeScript strict mode enabled
- Standalone Angular components

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19.1.x)

## Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
ng serve
```

4. Navigate to `http://localhost:4200/`

## Project Structure

```
src/
├── app/
│   ├── app.component.ts        # Main component with pagination logic
│   ├── app.component.html      # Table and pagination UI
│   └── app.config.ts           # Angular configuration
├── assets/                     # Static assets
└── styles.scss                 # Global styles with Tailwind CSS
```

## Development

- Run `ng serve` for a dev server
- Run `ng build` to build the project
- Run `ng test` to execute unit tests
- Run `ng e2e` to execute end-to-end tests

## Technical Details

- **Framework**: Angular 19.1.5
- **Styling**: Tailwind CSS 4.0.6
- **Language**: TypeScript 5.7.3
- **Package Manager**: npm
- **Build Tool**: Angular CLI

## Features Implemented

1. Data table with dynamic content
2. Pagination controls:
   - First page navigation
   - Previous page navigation
   - Next page navigation
   - Last page navigation
3. Page size limit of 10 items
4. Current page indicator
5. Responsive design
6. Hover effects on table rows
7. Disabled state for navigation buttons

