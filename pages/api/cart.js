import { fetcher } from "../../lib/apiUtils";

const { CMS_URL } = process.env;

function transfromCartData(cartItem) {
  return {
    id: cartItem.id,
    product: {
      id: cartItem.product.id,
      title: cartItem.product.title,
      price: cartItem.product.price,
    },
    quantity: cartItem.quantity,
  };
}

async function handleGetCart(req, res) {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }

  try {
    const data = await fetcher(`${CMS_URL}/cart-items`, {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    res.status(200).json(data.map(transfromCartData));
  } catch (err) {
    res.status(401).end();
  }
}

async function handlePostCart(req, res) {
  const { jwt } = req.cookies;
  if (!jwt) {
    res.status(401).end();
    return;
  }
  const { productId, quantity } = req.body;
  console.log(quantity)
  try {
    const res = await fetcher(`${CMS_URL}/cart-items`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        product: productId,
        quantity,
      }),
    });
    res.status(200).json({});
  } catch {
    res.status(401).end();
  }
}

async function handleCart(req, res) {
  switch (req.method) {
    case "GET": {
      return handleGetCart(req, res);
    }
    case "POST": {
      return handlePostCart(req, res);
    }
    default:
      return res.status(405).end();
  }
}

export default handleCart;
