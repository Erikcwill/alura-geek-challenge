import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import { getAllProducts, toggleProductHighlight } from "../ProductService";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const productsData = await getAllProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchAllProducts();
  }, []);

  async function handleToggleHighlight(product) {
    try {
      await toggleProductHighlight(product.id, !product.isHighlighted);
      // Atualize a lista de produtos após a atualização
      setProducts((prevProducts) =>
        prevProducts.map((p) =>
          p.id === product.id ? { ...p, isHighlighted: !p.isHighlighted } : p
        )
      );
    } catch (error) {
      console.error("Erro ao atualizar status de destaque:", error);
    }
  }

  return (
    <div>
      <h1>Todos os Produtos</h1>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onToggleHighlight={handleToggleHighlight}
          />
        ))}
      </ul>
    </div>
  );
}
