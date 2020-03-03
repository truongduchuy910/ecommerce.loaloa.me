function admin({ authentication: { item: user } }) {
  return Boolean(user && user.isAdmin);
}
function user({ authentication: { item: user } }) {
  return Boolean(user && !user.isAdmin);
}
function public({ authentication: { item: user } }) {
  if (user && !user.isAdmin) {
    return { seller: { id: user.id } };
  } else return true;
}
module.exports.access = {
  user,
  public,
  admin
};

module.exports.own = {
  create: user,
  update: user,
  delete: user,
  read: public
};

module.exports.public = {
  create: true,
  update: true,
  delete: user,
  read: public
};
module.exports.admin = {
  create: admin,
  update: admin,
  delete: admin,
  read: admin
};
// }
//EAAExUahkTb0BACitsenFKxpJ7ZAuilJh5WPX9fd91I6QHZBmUG8RJ3R7WwB3QlN5XiS1ebph8QVar85Uv3whBybmypX40fHCtJsd9MZACwdO1WEyRj7b0KZAVdEPzoZCYeZArIn2PmeJQl5NZC8EqcCkikl5ZAZB3Ww6lab89Bq8Cmb9WtIaBUNn8ZBe4tnR88NbYZD
