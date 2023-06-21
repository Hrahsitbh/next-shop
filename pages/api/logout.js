import cookie from "cookie";

async function handleLogOut(req, res) {
  try {
    res
      .status(200)
      .setHeader(
        "Set-Cookie",
        cookie.serialize("jwt", "", { path: "/api", expires: new Date(0) })
      )
      .json({
        message: "Succefully Logged out",
      });
  } catch {
    res.status(401).end();
  }
}

export default handleLogOut;
