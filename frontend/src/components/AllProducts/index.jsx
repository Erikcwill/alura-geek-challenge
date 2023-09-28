import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import AddProduct from "../AddProduct";
import { getAllProducts, toggleProductHighlight, addProduct } from "../ProductService";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [refreshKey, setRefreshKey] = useState(0); // Adicione um estado para forçar a atualização

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
  }, [refreshKey]); // Adicione refreshKey como dependência

  async function handleToggleHighlight(product) {
    try {
      await toggleProductHighlight(product.id, !product.isHighlighted);
      setRefreshKey((prevKey) => prevKey + 1); // Atualize o refreshKey para forçar a atualização
    } catch (error) {
      console.error("Erro ao atualizar status de destaque:", error);
    }
  }

  async function handleAddProduct(newProductData) {
    try {
      await addProduct(newProductData);
      setRefreshKey((prevKey) => prevKey + 1); // Atualize o refreshKey para forçar a atualização
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  }

  return (
    <div>
      <h1>Todos os Produtos</h1>
      <AddProduct onAddProduct={handleAddProduct} />
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
