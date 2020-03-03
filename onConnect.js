
module.exports = async keystone => {
  

  let {
    data: {
      _allUsersMeta: { count }
    }
  } = await keystone.executeQuery(
    `query {
      _allUsersMeta {
        count
      }
    }`
  );

  if (count < 1) {
    let password = "loaloa.me";
    let email = "truongduchuy910@gmail.com";
    await keystone.executeQuery(
      `mutation initialUser($password: String, $email: String) {
            createUser(data: {seller: "Admin", email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      {
        variables: {
          password,
          email
        }
      }
    );
  }
};
