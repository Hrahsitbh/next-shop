function buildaCart(cartItems) {
  let total = 0;
  const items = [];
  for (const item of cartItems) {
    const itemTotal = item.product.price * item.quantity;
    item.total = itemTotal;
    total += itemTotal;
    items.push(item);
  }
  return {
    items,
    total,
  };
}

function CartTable({ cartItems }) {
  const cart = buildaCart(cartItems);
  const { items, total } = cart;
  return (
    <table>
      <thead>
        <tr>
          <th className="px-4 py-2">Product</th>
          <th className="px-4 py-2">Price</th>
          <th className="px-4 py-2">Quantity</th>
          <th className="px-4 py-2">Total</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr>
            <td className="px-4 py-2 text-center">{item.product.title}</td>
            <td className="px-4 py-2 text-center">{item.product.price}</td>
            <td className="px-4 py-2 text-center">{item.quantity}</td>
            <td className="px-4 py-2 text-center">{item.total}</td>
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th className="px-4 py-2 text-center">Total</th>
          <th></th>
          <th></th>
          <th className="px-4 py-2  text-center">{total}</th>
        </tr>
      </tfoot>
    </table>
  );
}

export default CartTable;
