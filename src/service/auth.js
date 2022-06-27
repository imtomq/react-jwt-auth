import axios from "axios";

export function login(params) {}

export function register(params) {
  console.log("register");
  const {
    email,
    password,
    last_name,
    marketing_emails,
    first_name
  } = params;

  const data = {
    email,
    password,
    last_name,
    marketing_emails,
    first_name
  };

  axios
    .post({ url: "/users" }, data)
    .then((res) => {
      console.log("register successfully!", res);
    })
    .catch((e) => {});
}

export function useAuth(data) {
  return data;
}
