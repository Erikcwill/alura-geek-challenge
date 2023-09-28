import { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import {
  getAllProducts,
  toggleProductHighlight,
  addProduct, // Adicionado
  removeProduct, // Adicionado
} from "../ProductService";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
    description: "",
  });

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

  async function handleAddProduct() {
    try {
      const response = await addProduct(newProduct);
      setProducts((prevProducts) => [...prevProducts, response]);
      setNewProduct({
        name: "",
        price: 0,
        category: "",
        image: "",
        description: "",
      });
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  }

  async function handleRemoveProduct(productId) {
    try {
      await removeProduct(productId);
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== productId)
      );
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  }

  return (
    <div>
      <h1>Todos os Produtos</h1>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id} // Defina a chave única como o ID do produto
            product={product}
            onToggleHighlight={handleToggleHighlight}
            onRemoveProduct={() => handleRemoveProduct(product.id)}
          />
        ))}
      </ul>
      <h2>Adicionar Produto</h2>
      <form>
        <label>
          Nome:
          <input
            type="text"
            value={newProduct.name}
            onChange={(e) =>
              setNewProduct({ ...newProduct, name: e.target.value })
            }
          />
        </label>
        <label>
          Preço:
          <input
            type="number"
            value={newProduct.price}
            onChange={(e) =>
              setNewProduct({ ...newProduct, price: e.target.value })
            }
          />
        </label>
        <label>
          Categoria:
          <input
            type="text"
            value={newProduct.category}
            onChange={(e) =>
              setNewProduct({ ...newProduct, category: e.target.value })
            }
          />
        </label>
        <label>
          Imagem:
          <input
            type="text"
            value={newProduct.image}
            onChange={(e) =>
              setNewProduct({ ...newProduct, image: e.target.value })
            }
          />
        </label>
        <label>
          Descrição:
          <input
            type="text"
            value={newProduct.description}
            onChange={(e) =>
              setNewProduct({ ...newProduct, description: e.target.value })
            }
          />
        </label>
        <button type="button" onClick={handleAddProduct}>
          Adicionar
        </button>
      </form>
    </div>
  );
}
