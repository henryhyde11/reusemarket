import { products } from "../data/productData";

import { createContext, useState } from "react";

export const ProductContext = createContext();

export function ProductContextProvider({ children }) {
  const [productsState] = useState(products);

  const [filters, setFilters] = useState({
    category: "all",
  });

  function onChangeCategory(e) {
    setFilters({
      ...filters,
      category: e.target.value,
    });
  }

  function filterProducts(products) {
    return products.filter((product) => {
      return (
        filters.category === "all" || product.category === filters.category
      );
    });
  }

  return (
    <ProductContext.Provider
      value={{ ...productsState, filters, setFilters, filterProducts, onChangeCategory }}
    >
      {children}
    </ProductContext.Provider>
  );
}
