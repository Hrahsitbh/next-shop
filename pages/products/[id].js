import Image from "next/image";
import AddToCartWidget from "../../components/AddToCartWidget";
import Page from "../../components/Page";
import useUser from "../../hooks/useUser";
import { ApiError } from "../../lib/apiUtils";
import { getProduct, getProducts } from "../../lib/products";

const { REVALIDATE_SECONDS } = process.env;

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: "blocking",
  };
}

export async function getStaticProps({ params: { id } }) {
  try {
    const productDetails = await getProduct(id);
    return {
      props: { productDetails },
      revalidate: parseInt(REVALIDATE_SECONDS, 10),
    };
  } catch (err) {
    if (err instanceof ApiError && [404].includes(err.status))
      return { notFound: true };
    throw err;
  }
}

function ProductPage({ productDetails }) {
  const user = useUser();
  // console.log(productDetails);
  return (
    <Page title={productDetails.title}>
      <div className="flex flex-col gap-4 md:flex-row">
        <div>
          <Image
            src={productDetails.imageUrl}
            alt=""
            width={640}
            height={480}
          />
        </div>
        <div className="flex-1">
          <p className="text-sm">{productDetails?.description}</p>
          <p className="text-lg font-bold mt-2">{productDetails?.price}</p>
          {user && <AddToCartWidget productId={productDetails.id} />}
        </div>
      </div>
    </Page>
  );
}

export default ProductPage;
