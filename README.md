# Star Wars Characters App

A React application that displays a list of Star Wars characters using the [SWAPI](https://swapi.dev/) (Star Wars API). This project demonstrates the use of TypeScript, React, Chakra UI, and TanStack Query for efficient data fetching and state management.

## Features

- **Character List**: Fetch and display a paginated list of Star Wars characters.
- **Character Details Modal**: View detailed information about a character in a modal, including their homeworld details fetched from the SWAPI.
- **Lazy Loading**: Images are loaded lazily to improve performance.
- **Skeleton Loaders**: Use of skeleton components to provide a smooth loading experience.
- **Error Handling**: Gracefully handle errors during API requests.

## Technologies Used

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that adds static types.
- **Chakra UI**: A simple, modular, and accessible component library.
- **TanStack Query (React Query)**: Powerful data-fetching library that handles caching, synchronization, and more.
- **Axios**: Promise-based HTTP client for making API requests.

## Getting Started

### Prerequisites

- **Node.js**: Ensure you have Node.js installed (>= 12.0.0).
- **npm**: Package manager for Node.js (or use `yarn`).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ahsaanshuja/star-wars-characters-app
   ```

2. Navigate to the project directory:

   ```bash
   cd star-wars-characters-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   Create a `.env` file in the root of the project with the following content:

   ```bash
   REACT_APP_API_URL=https://swapi.dev/api
   ```

   This environment variable is used to configure the base URL for API requests.

### Running the Application

To start the development server:

```bash
npm start
```

This will open the app in your default browser at `http://localhost:3000`.

### Acknowledgments

- [SWAPI](https://swapi.dev/) for providing the data.
- [Chakra UI](https://chakra-ui.com/) for the UI components.
- [TanStack Query](https://tanstack.com/query) for powerful data-fetching capabilities.
