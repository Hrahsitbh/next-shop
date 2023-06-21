import Page from "../components/Page";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../lib/products";

const { REVALIDATE_SECONDS } = process.env;

export async function getStaticProps() {
  const products = await getProducts();
  return {
    props: { products },
    revalidate: parseInt(REVALIDATE_SECONDS, 10), // ISR 5 mins =>  will update SSR props for a page after some span of time
  };
}

function HomePage({ products }) {
  return (
    <>
      <Page title="Plants">
        <ul className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
          {products.map((product) => {
            return <ProductCard product={product} key={product.id} />;
          })}
        </ul>
      </Page>
    </>
  );
}

export default HomePage;
