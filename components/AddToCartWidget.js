import { useRouter } from "next/router";
import { useState } from "react";
import { useMutation } from "react-query";
import { fetcher } from "../lib/apiUtils";
import Button from "./Button";

function AddToCartWidget({ productId }) {
  const [quantity, setQuantity] = useState(0);
  const router = useRouter();
  const { mutateAsync, isLoading, isError } = useMutation(() =>
    fetcher("/api/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        quantity,
        productId,
      }),
    })
  );
  const handleAddToCart = async () => {
    await mutateAsync();
    router.push("/cart");
  };

  return (
    <>
      <input
        type="number"
        value={quantity}
        className="border rounded mr-4"
        onChange={(e) => setQuantity(parseInt(e.target.value))}
      />
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Button type="button" onClickHandler={handleAddToCart}>
          Add to Cart
        </Button>
      )}
    </>
  );
}

export default AddToCartWidget;
