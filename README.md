# MERN Book CRUD Web App

## Overview

This project is a full-stack MERN (MongoDB, Express.js, React, Node.js) application that allows users to create, read, update, and delete book entries. Built with a responsive design using Tailwind CSS, this application showcases the power of the MERN stack and modern frontend development with Vite.

## Features

- **Create**: Add new books with details like title, author, and description.
- **Read**: View a list of all books with detailed information.
- **Update**: Edit existing book entries.
- **Delete**: Remove books from the database.
- **Responsive Design**: Built with Tailwind CSS for a modern look and feel.

## Technologies Used

- **Frontend**: React, Vite, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB

## Screenshots

Below are some screenshots of the  application:

### Home Page
![Screenshot 2024-10-05 at 9 32 44 PM](https://github.com/user-attachments/assets/c83ef741-254f-4f61-acef-e37baab27802)

### Add Book Detail Page
![Screenshot 2024-10-05 at 9 32 58 PM](https://github.com/user-attachments/assets/33516bc4-d334-470b-a5f6-4ade24ec2e7d)

### Update Detail Page
![Screenshot 2024-10-05 at 9 33 14 PM](https://github.com/user-attachments/assets/f9a5117e-d8ab-4eed-88cc-562d5ccebaf4)

## Installation

### Prerequisites

- Node.js
- MongoDB

### Clone the Repository

```bash
git clone https://github.com/srikriydv/mern-book-crud.git
cd mern-book-crud
```

### Install Dependencies

#### Server

```bash
cd backend
npm install
```

#### Client

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file in the `backend` directory and add the following:

```plaintext
MONGODB_URI=your_mongodb_connection_string
DB_NAME=your_database_name
PORT = port_address
```

### Run the Application

1. Start the server:

   ```bash
   cd backend
   npm start
   ```

2. Start the client:

   ```bash
   cd frontend
   npm run dev
   ```

## Usage

- Navigate to `http://localhost:5173` in your web browser to access the application.
- Use the navigation menu to create, view, update, or delete books.

## License

This project is licensed under the MIT License.

## Acknowledgements

- [MERN Stack Documentation](https://www.mongodb.com/mern-stack)

---
