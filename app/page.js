import Image from "next/image";
import styles from "./page.module.css";
import { FilterSidebar } from "@/components/FilterSidebar";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.heading}>Product Listing</h1>
        <div className={styles.productsSection}>
          <FilterSidebar></FilterSidebar>
          <div className={styles.grid}>
            {products.map((product) => (
              <div key={product.id} className={styles.card}>
                <Image
                  src={product.image}
                  alt={product.title}
                  width={200}
                  height={200}
                  className={styles.image}
                  priority={false}
                />
                <h2>{product.title}</h2>
                <p>${product.price}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
