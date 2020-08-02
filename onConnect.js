module.exports = async (keystone) => {
  let {
    data: {
      _allUsersMeta: { count },
    },
  } = await keystone.executeQuery(
    `query {
      _allUsersMeta {
        count
      }
    }`
  );
  console.log(`find ${count} users`);
  if (count < 1) {
    let password = "loaloa.me";
    let email = "truongduchuy910";
    const { data, errors } = await keystone.executeQuery(
      `mutation initialUser($password: String, $email: String) {
            createUser(data: {email: $email, isAdmin: true, password: $password}) {
              id
            }
          }`,
      {
        variables: {
          password,
          email,
        },
      }
    );
    console.log(data, errors);
  }
};
