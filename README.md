# Amazon V2 People Also Bought Carousel Component

## Initial Setup

Fork and clone this repo to your local directory

Start by running `npm install` in the CLI inside the main directory

After all packages are installed in the main directory, open the database directory and run `npm install` here once again to install the backend packages.

Finally, inside the `/db` folder, here you will find the database files to create a database inside PostgreSQL. To automatically run the migration file,
run `psql -f migration.sql` and this, if successful, will create the database, table and seed it in one command. 

Before starting the server, create a `.env` file and add your `PORT` and `DATABASE_URL` for the connection.

Once all the above is completed, the server is ready to be started.

With the server running, return to the main directory and change the fetch URL inside of the `App.js` file. Make sure it matches the `PORT` number your server is running in before continuing.

**Moment of truth!** enter `npm start` in the command line where the application should be served using PORT 3006

Enjoy!
