"use client";
import { useState, useEffect } from "react";
import styles from "../app/page.module.css";
import { FilterSidebar } from "@/components/FilterSidebar";
import { ChevronDown, ChevronRight } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ProductCard from "./ProductCard";

export default function ProductsPage({ products }) {
  const searchParams = useSearchParams();
  const [showFilterBar, setShowFilterBar] = useState(false); 
  const [dropDownopen, setDropDownopen] = useState(false);
  const [sortOption, setSortOption] = useState("Recommended");
  const [filteredProducts, setFilteredProducts] = useState(products || []);

  const filters = {
    idealFor: searchParams.get("idealFor"),
    occasion: searchParams.get("occasion"),
    fabric: searchParams.get("fabric"),
    suitableFor: searchParams.get("suitableFor"),
    segment: searchParams.get("segment"),
    work: searchParams.get("work"),
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  useEffect(() => {
    if (products) {
      let filteredData = products.filter((product) => {
        return (
          (!filters.idealFor ||
            product.category
              ?.toLowerCase()
              .includes(filters.idealFor.toLowerCase())) &&
          (!filters.occasion ||
            product.title
              ?.toLowerCase()
              .includes(filters.occasion.toLowerCase())) &&
          (!filters.fabric ||
            product.description
              ?.toLowerCase()
              .includes(filters.fabric.toLowerCase())) &&
          (!filters.suitableFor ||
            product.category
              ?.toLowerCase()
              .includes(filters.suitableFor.toLowerCase())) &&
          (!filters.segment ||
            product.title
              ?.toLowerCase()
              .includes(filters.segment.toLowerCase())) &&
          (!filters.work ||
            product.description
              ?.toLowerCase()
              .includes(filters.work.toLowerCase()))
        );
      });

      // Sort after filtering
      let sortedData = [...filteredData];
      switch (sortOption) {
        case "PriceHighToLow":
          sortedData.sort((a, b) => b.price - a.price);
          break;
        case "PriceLowToHigh":
          sortedData.sort((a, b) => a.price - b.price);
          break;
        case "NewestFirst":
          sortedData.reverse();
          break;
        case "Popular":
          break;
        default:
          break;
      }

      setFilteredProducts((prev) => {
        if (JSON.stringify(prev) !== JSON.stringify(sortedData)) {
          return sortedData;
        }
        return prev;
      });
    }
  }, [products, filters, sortOption]);

  return (
    <main className={styles.main}>
      <h1 className={styles.heading}>DISCOVER OUR PRODUCTS</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
        scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
      </p>

      {/* Filter stripe bar */}
      <div className={styles.filterStripeBar}>
        <div className={styles.barLeftWrapper}>
          <div className={styles.totalItems}>
            {filteredProducts.length} Items
          </div>
          <div
            className={styles.showFilterBtn}
            onClick={() => setShowFilterBar(!showFilterBar)}
          >
            <ChevronRight
              size={16}
              style={{ rotate: showFilterBar ? "180deg" : "0deg" }}
              className="arrow"
            />
            {showFilterBar ? "HIDE FILTER" : "SHOW FILTER"}
          </div>
          {/* for mobile screen */}
          <div
            className={styles.showFilterBtnM}
            onClick={() => setShowFilterBar(!showFilterBar)}
          >
            FILTER
          </div>
        </div>

        {/* mobileDevider */}
        <div className={styles.devider}></div>

        <div className="select-wrapper">
          <select
            aria-label="none"
            value={sortOption}
            onChange={(e) => handleSortChange(e)}
            onClick={() => setDropDownopen(!dropDownopen)}
            onBlur={(e) => setDropDownopen(false)}
          >
            <option value="Recommended">RECOMENDED</option>
            <option value="NewestFirst">NEWEST FIRST</option>
            <option value="Popular">POPULAR</option>
            <option value="PriceHighToLow">PRICE: HIGH TO LOW</option>
            <option value="PriceLowToHigh">PRICE: LOW TO HIGH</option>
          </select>
          <ChevronDown
            size={16}
            style={{ rotate: dropDownopen ? "180deg" : "0deg" }}
            className="arrow"
          />
        </div>
      </div>

      <div className={styles.productsSection}>
        {showFilterBar && <FilterSidebar />}
        <div className={styles.grid}>
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </main>
  );
}
