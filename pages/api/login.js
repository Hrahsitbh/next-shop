import cookie from "cookie";
import { logInUser } from "../../lib/auth";

async function handleLogin(req, res) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  const { email, password } = req.body;
  try {
    const resp = await logInUser({ email, password });
    const { jwt, user } = resp;
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", jwt, { path: "/api", httpOnly: true })
      )
      .json({
        id: user.id,
        name: user.username,
      });
  } catch {
    res.status(401).end();
  }
}

export default handleLogin;
