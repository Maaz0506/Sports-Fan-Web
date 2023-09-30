# Sports Fan Web App

This is a sports fan web app built using ReactJS and TailwindCSS. The app provides live scores, rankings, and news updates for various sports. It also includes user authentication using a MongoDB database. However, please note that due to API limitations, live scores and rankings are currently limited, and you may need to set up your own database for user authentication.

## Table of Contents

* [Features](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#features)
* [Limitations](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#limitations)
* [Prerequisites](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#prerequisites)
* [Getting Started](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#getting-started)
* [Installation](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#installation)
* [Configuration](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#configuration)
* [Usage](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#usage)
* [Contributing](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#contributing)
* [License](https://chat.openai.com/c/2c24b268-600a-4430-ab7e-63aafb766e76#license)

## Features

* Live scores and rankings for various sports.
* Latest sports news updates.
* User authentication and profile management.
* Modern and responsive user interface using TailwindCSS.
* Easily extensible to add more features and sports.

## Limitations

* **API Limitations** : The app relies on public APIs for live scores, rankings, and news. Due to API limitations, you may encounter rate limits or restrictions on the data available.
* **User Authentication** : User authentication is implemented using a MongoDB database, but you will need to set up your own MongoDB database and configure the application accordingly.

## Prerequisites

Before you begin, ensure you have met the following requirements:

* Node.js and npm installed on your machine.
* MongoDB set up with the necessary configurations (connection string, database, etc.).
* CricBuzz API Key (if you plan to replace the existing API).

## Getting Started

To get started with this project, follow these steps:

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/Maaz0506/Sports-Fan-Web
   cd Sports-Fan-Web

   ```
2. Install the project dependencies:

   ```
   npm install i

   ```

### Configuration

1. **API Configuration** :

* Replace the CricBuzz API key in the appropriate files (if needed).
* Configure your MongoDB connection string and database settings in `server/config/config.js`.

1. **Environment Variables** :

* Create a `.env` file in the server directory and add the following:

  ```
  ACCESS_TOKEN_SECRET= 4095e486c1c4aecbfdef348ce03ffd532fc26da7009afbef9175f5a95730d2c62ddddbaddf1a234826211ccc5d4e7fdcfbf87c5e1c895249993aace71d4133c5
  ```

### Usage

1. Start the backend(server):

   ```
   npm run start
   ```
2. Start the frontend(client):

   ```
   npm run dev
   ```
3. The React app will be available at `http://127.0.0.1:5173/`, and the server will run on `http://localhost:4000`.
4. Access the web app in your browser and start exploring the features.

## Contributing

Feel free to contribute to this project by creating issues or submitting pull requests. Your contributions are highly appreciated!
