import { fetcher } from "./apiUtils";

const { CMS_URL } = process.env;

function modelProducts(product) {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: "Rs " + product.price.toFixed(2),
    imageUrl: CMS_URL + product.picture.url,
  };
}

export async function getProducts() {
  const data = await fetcher(`${CMS_URL}/products`);

  return data.map(modelProducts);
}

export async function getProduct(id) {
  const data = await fetcher(`${CMS_URL}/products/${id}`);
  return modelProducts(data);
}
