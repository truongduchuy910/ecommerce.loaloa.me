function public({ authentication: { item: user } }) {
  if (user) {
    if (user.isAdmin) return true;
    if (user.isSeller) return { seller: { id: user.id } };
  }
  return true;
}
function own({ authentication: { item: user } }) {
  if (user) {
    if (user.isAdmin) return true;
    if (user.isSeller) return { seller: { id: user.id } };
    return { seller: { id: user.id } };
  }
  return false;
}
function ownSeller({ authentication: { item: user } }) {
  if (user) {
    if (user.isAdmin) return true;
    if (user.isSeller)
      return {
        OR: [{ ofSeller: { id: user.id } }, { seller: { id: user.id } }],
      };
    return { seller: { id: user.id } };
  }
  return false;
}
function publicOrOwnSeller({ authentication: { item: user } }) {
  if (user) {
    if (user.isAdmin) return true;
    if (user.isSeller)
      return {
        OR: [{ ofSeller: { id: user.id } }, { seller: { id: user.id } }],
      };
    return { seller: { id: user.id } };
  }
  return true;
}

function user({ authentication: { item: user } }) {
  if (user) {
    return true;
  }
  return false;
}
function seller({ authentication: { item: user } }) {
  if (user) {
    if (user.isAdmin) return true;
    if (user.isSeller) return true;
  }
  return false;
}
module.exports.access = {
  public,
  own,
};

module.exports.public = {
  create: seller,
  update: seller,
  delete: seller,
  read: public,
};

module.exports.own = {
  create: user,
  update: own,
  delete: own,
  read: own,
};

module.exports.ownSeller = {
  create: user,
  update: own,
  delete: own,
  read: ownSeller,
};
module.exports.publicOrownSeller = {
  create: true,
  update: true,
  delete: true,
  read: publicOrOwnSeller,
};
