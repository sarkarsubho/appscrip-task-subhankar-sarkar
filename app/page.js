import Image from "next/image";
import styles from "./page.module.css";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProductsPage from "@/components/ProductsPage";
// import { useState } from "react";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function Home({ searchParams }) {
  const { idealFor, occasion, fabric, suitableFor, segment, work } =
    searchParams;
  const products = await getProducts();
  console.log(
    "searchParams",
    { idealFor, occasion, fabric, suitableFor, segment, work },
    searchParams,
    products
  );

  return (
    <div>
      <ProductsPage products={products} searchParams={searchParams} />
    </div>
  );
  // console.log("params DAta", { idealFor, occasion, fabric });
  // const [showFilterBar, setShowFilterBar] = useState(false);
  // return (
  //   <div>
  //     <main className={styles.main}>
  //       <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
  //       <p className={styles.description}>
  //         {" "}
  //         Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
  //         scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
  //         dolor.
  //       </p>

  //       {/* filter stripe bar  */}

  //       <div
  //         style={{
  //           padding: "1rem",
  //           borderTop: "1px solid lightgray",
  //           borderBottom: "1px solid lightgray",
  //           display: "flex",
  //           justifyContent: "space-between",
  //           alignItems: "center",
  //         }}
  //       >
  //         <div className={styles.barLeftWrapper}>
  //           <div className={styles.totalItems}>{products.length} Items</div>
  //           <div className={styles.showFilterBtn}>
  //             <ChevronRight
  //               size={16}
  //               // style={{ rotate: dropDownopen ? "180deg" : "0deg" }}
  //               // className="arrow"
  //             />
  //             SHOW FILTER
  //           </div>
  //         </div>
  //         <div className="select-wrapper">
  //           <select
  //             // value={language}
  //             // onChange={(e) => setLanguage(e.target.value)}
  //             // onBlur={(e) => setDropDownopen(false)} // helps with visual reset after click
  //             aria-label="none"
  //             // onClick={() => setDropDownopen(!dropDownopen)}
  //           >
  //             <option value="en">English</option>
  //             <option value="fr">Français</option>
  //             <option value="es">Español</option>
  //             <option value="de">Deutsch</option>
  //           </select>
  //           {
  //             <ChevronDown
  //               size={16}
  //               // style={{ rotate: dropDownopen ? "180deg" : "0deg" }}
  //               className="arrow"
  //             />
  //           }
  //         </div>
  //       </div>

  //       <div className={styles.productsSection}>
  //         <FilterSidebar></FilterSidebar>
  //         <div className={styles.grid}>
  //           {products.map((product) => (
  //             <div key={product.id} className={styles.card}>
  //               <Image
  //                 src={product.image}
  //                 alt={product.title}
  //                 width={200}
  //                 height={200}
  //                 className={styles.image}
  //                 priority={false}
  //               />
  //               <h2>{product.title}</h2>
  //               <p>${product.price}</p>
  //               {/* <p>{product.description}</p>
  //               <p>{product.category}</p> */}
  //             </div>
  //           ))}
  //         </div>
  //       </div>
  //     </main>
  //   </div>
  // );
}
