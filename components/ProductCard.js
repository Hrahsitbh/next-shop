import Link from "next/link";
import Image from "next/image";

function ProductCard({ product }) {
  return (
    <div className="border w-80 shadow hover:shadow-xl">
      <li key={product.id}>
        <Link href={`/products/${product.id}`}>
          <a>
            <Image src={product.imageUrl} alt="" width={320} height={240} />
            <div className="p-2 flex justify-between">
              <h2 className="text-lg font-bold">{product.title}</h2>
              <span>{product.price}</span>
            </div>
          </a>
        </Link>
      </li>
    </div>
  );
}

export default ProductCard;
