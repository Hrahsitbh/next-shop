import { useRouter } from "next/router";
import Link from "next/link";
import Button from "./Button";
import useUser from "../hooks/useUser";
import useSignOut from "../hooks/useSignOut";

function NavBar() {
  const { isLoading, error, data: user } = useUser();
  const router = useRouter();
  const signOut = useSignOut();

  return (
    <nav className="px-2 py-1 tex-sm">
      <ul className="flex gap-2 justify-around">
        <li className="text-lg self-center font-extrabold">
          <Link href="/">Next Shop</Link>
        </li>
        <li className="self-center">
          <Link href="/cart">Cart</Link>
        </li>
        {user ? (
          <div className="flex gap-2 items-center">
            <li>{user.name}</li>
            <Button type="button" onClickHandler={signOut}>
              Sign Out
            </Button>
          </div>
        ) : (
          <li className="">
            <Button
              type="button"
              onClickHandler={() => router.push("/sign-in")}
            >
              Sign In
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
}
export default NavBar;
