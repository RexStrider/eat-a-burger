# eat-a-burger

A burger logger created with MySQL, Node, Express, Handlebars and a homemade ORM

## Description

This application was created to experiment with MySQL in conjunction with Node JS.

In this application you can make burgers (which saves them to the database) and then eat them (the 'eaten' state is also saved to the database).

I created an Object Relational Mapping to the database using JavaScript for this project.

You can check out this simple application [here](https://eat-a-burger42.herokuapp.com/),

or if you want to experiment with the application code, you may perform the instructions below.

## Instructions

These instruction assume you have some experience using a command line interface and setting up your PATH environment variables.

If you don't know how to do this, now is a great time to learn!

It might take some time and patience, but it's worth knowing.

Just do some searching, I gaurantee that stack exchange has well documented answers for Windows, Mac, and Linux.

For this application, you will need to install [Node JS](https://nodejs.org/en/download/), [MySQL](https://www.mysql.com/downloads/), and [Git](https://git-scm.com/downloads).

I recommend installing [MySQL Workbench](https://www.mysql.com/products/workbench/) as that was how I was able to set up a local database server. I remember this taking some work to set up, but unfortunately those instructions are beyond the scope of this guide.

Once you have installed those tools, you will need to clone this repository with the following command,

```
// cloning with ssh
git clone git@github.com:RexStrider/eat-a-burger.git

// or

// cloning with https
git clone https://github.com/RexStrider/eat-a-burger.git
```

The next step is installing the node dependencies.

navigate to the root directory of the project and enter the following command,

```
npm install
```

You will also need to create the database and seed the database using MySQL.

Navigate to the db directory inside the project and enter the following commands,

```
// creating the database
mysql < schema.sql

// seeding the database
mysql < seeds.sql

// the command may need to be run as the root user

// run as root user
// -u root

// if a password is needed, add the following flag to the command
// -p

// example: running as a root user with a password
mysql < schema.sql -u root -p
```

You will be prompted for the password after entering the command.

Finally, you will need to create an environment variables file called ".env".

Inside this file, put in the following text,

```
SQL_PASS=<your-password-here>
```

DO NOT SURROUND YOUR PASSWORD WITH QUOTATION MARKS!

The application will read those qoutation marks as if they were characters that are part of your password, and your application will not be able to access the database. If you did not set up a password, you will still need to declare the SQL_PASS variable in this file and assign it an empty string.

```
// example
SQL_PASS=
```

When you have successfully completed the above steps, all you need to do is run the application.

Navigate back to the root directory of the project and enter the following command,

```
node server.js
```

The CLI will let you know when the server is ready.

Finally, open up your browser and enter the following into the URL field,

```
localhost:3000
```

If all goes well you should have access to the Eat-A-Burger application.

Best of luck!

## Technology

 - Node JS
 - Express
 - MySQL
 - HandleBars
 - DotEnv
 - JavaScript