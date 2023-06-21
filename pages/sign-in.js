import { useState } from "react";
import Input from "../components/Input";
import Field from "../components/Field";
import Page from "../components/Page";
import Button from "../components/Button";
import { useRouter } from "next/router";
import useSignIn from "../hooks/useSignIn";

function SignInPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn, isLoading, isError } = useSignIn();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signIn(email, password);
    if (res) router.push("/");
  };

  return (
    <>
      <Page title="Sign In">
        <form onSubmit={handleSubmit}>
          <Field label="Email">
            <Input
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field label=" Password">
            <Input
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Field>
          {isError && <p className="text-red-700">Invalid Creds</p>}
          {isLoading && <p>Loading...</p>}
          <Button type="submit" disabled={isLoading}>
            Sign In
          </Button>
        </form>
      </Page>
    </>
  );
}

export default SignInPage;
