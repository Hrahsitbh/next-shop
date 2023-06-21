import { fetcher } from "./apiUtils";

const { CMS_URL } = process.env;

export async function logInUser({ email, password }) {
  const res = await fetcher(`${CMS_URL}/auth/local`, {
    method: "POST",
    headers: { 'Content-Type': "application/json" },
    body: JSON.stringify({
      identifier: email,
      password,
    }),
  });
  return res;
}
