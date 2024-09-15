// type Errors = {
//   email?: string[];
//   firstName?: string[];
//   lastName?: string[];
//   phone?: string[];
// };

// type Form = {
//   email: string | null;
//   firstName: string | null;
//   lastName: string | null;
//   phone: string | null;
//   errors: Errors;
// };

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
// type Params = Form;

type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

type Params = {
  email: Form["email"];
  firstName: Form["firstName"];
  lastName: Form["lastName"];
  phone: Form["phone"];
};
