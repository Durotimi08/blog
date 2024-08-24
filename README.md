# Blog Application

This web application, developed using React, Node.js, Express, and PostgreSQL, is a complete blogging platform. It allows users to generate their own blog entries, browse posts from others, interact by liking and commenting, and handle their personal profile details.
</br>

Install the dependencies:

```bash
# Install the dependencies for the root directory, frontend, and backend
$ cd blog-app-mern/
```

Run the database migrations and populate the data:

```bash
$ cd backend/
$ npx prisma migrate dev
$ npm run seed
```

Run the application:

```bash
# Run the frontend and backend concurrently
$ cd blog-app-mern/
$ npm run dev
```


### Environment Variables
Add the following environment variables:

```bash
PORT=5000
DATABASE_URL=YOUR_POSTGRES_URL
TOKEN_SECRET=YOUR_TOKEN_STRING
CLOUDINARY_API_KEY=API_KEY
CLOUDINARY_API_SECRET=API_SECRET
CLOUDINARY_CLOUD_NAME=CLOUD_NAME
```
