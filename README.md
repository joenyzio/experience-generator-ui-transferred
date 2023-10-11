# Experience Generator UI

## Overview

This project serves as an intuitive User Interface for generating and experimenting with xAPI (Experience API) statements. Users can create custom xAPI statements, and then send them to a specified xAPI endpoint for storage and analysis.

## Features

- Customizable xAPI statement creation
- Live previews of generated statements
- Ability to send statements to an xAPI endpoint
- Built-in support for debugging and monitoring

## Requirements

- Node.js (v14 or higher recommended)
- NPM (v6 or higher recommended)

## Installation

\`\`\`bash

# Clone the repository

git clone https://github.com/yourusername/ExperienceGenerator.git

# Navigate to the backend directory

cd backend

# Install the dependencies

npm install
\`\`\`

## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file.

- `XAPI_ENDPOINT` - xAPI server endpoint
- `XAPI_USERNAME` - xAPI server username
- `XAPI_PASSWORD` - xAPI server password

## Running the Project

Navigate to the `backend` directory and run:

\`\`\`bash
npm start
\`\`\`

The application will be available at `http://localhost:3000`.

## API Endpoints

- `GET /getCredentials` - Fetch the xAPI endpoint and authentication details.

## Contributions

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT License - see the [LICENSE.md](LICENSE.md) file for details.
