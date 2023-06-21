import { useQuery } from "react-query";
import { fetcher } from "../lib/apiUtils";
import Page from "../components/Page";
import CartTable from "../components/CartTable";

function Cart() {
  const query = useQuery("cartItems", () => fetcher("/api/cart"));
  const cartItems = query.data;

  return (
    <>
      <Page title="Cart">
        {cartItems && <CartTable cartItems={cartItems} />}
      </Page>
    </>
  );
}

export default Cart;
