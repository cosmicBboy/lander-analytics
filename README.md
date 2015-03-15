# Meteor Boilerplate App

Boilerplate setup for new meteor apps with routing setup

This app comes with the following packages:
- accounts-password
- alanning:roles
- iron:router
- sanjo:jasmine
- velocity:html-reporter

The file structure has the recommended `client`, `server`, `lib` setup, with a `lib/router.js` file for routing with [Iron Router](https://github.com/iron-meteor/iron-router).

There's a default `layout.html` template and `hello.html` template with helpers and event listeners in `hello.js` for a basic counter display based on the counting the number of times the `Click Me` button is clicked.

In order to adapt this boilerplate app, create a new repo for your app. Let's call it `my-new-repo`, and then follow these steps:
- `git clone https://github.com/the-sumit/meteor-boilerplate.git`
- `git remote remove origin`
- `git remote add origin url-for-my-new-repo`

Now you can customize this boilerplate app for your own purposes!