adminUser = {
  email: 'admin@example.com',
  password: "123456",
  profile: { 
    name: 'admin',
  }
}

if (Meteor.users.find().count() === 0) {
  console.log('CREATING ADMIN USER');
  Accounts.createUser(adminUser);
}