// type User = {
//   name: string;
//   surname: string;
//   email: string;
//   password: string;
// };

// function createOrUpdateUser(initialValues: User) {
// Оновлення користувача
// }

// createOrUpdateUser({
//   email: "user@mail.com",
//   password: "password123",
// });

type User = {
  name: string;
  surname: string;
  email: string;
  password: string;
};

type PartialUser = Partial<User>;

function createOrUpdateUser(initialValues: PartialUser) {}

createOrUpdateUser({
  email: "user@mail.com",
  password: "password123",
});
