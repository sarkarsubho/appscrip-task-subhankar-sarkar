import ProductsPage from "@/components/ProductsPage";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home({ searchParams }) {
  const products = await getProducts();

  return (
    <div>
      <ProductsPage products={products} />
    </div>
  );
}
