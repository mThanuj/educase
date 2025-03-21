export const signup = (credentials: LoginFormType) => {
  const users = JSON.parse(localStorage.getItem("users") || "[]");

  users.push(credentials);

  localStorage.setItem("users", JSON.stringify(users));
};

export const signin = (credentials: LoginFormType) => {
  let users = JSON.parse(localStorage.getItem("users") || "[]");

  if (!users.some((user: LoginFormType) => user.email === credentials.email)) {
    return null;
  }

  return users.find(
    (user: LoginFormType) =>
      user.email === credentials.email && user.password === credentials.password
  );
};
