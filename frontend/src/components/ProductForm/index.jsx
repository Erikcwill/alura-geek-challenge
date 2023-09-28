// ProductForm.js
import { useState } from "react";
import { addProduct, removeProduct } from "./ProductService";

export default function ProductForm({ onAdd, onRemove }) {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: 0,
    category: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleAddProduct = async () => {
    try {
      const addedProduct = await addProduct(newProduct);
      onAdd(addedProduct);
      // Limpe o formulário após adicionar o produto
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
  };

  const handleRemoveProduct = async () => {
    try {
      await removeProduct(newProduct.id);
      onRemove(newProduct.id);
    } catch (error) {
      console.error("Erro ao remover produto:", error);
    }
  };

  return (
    <div>
      <h2>Adicionar/Remover Produto</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Categoria:</label>
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Imagem:</label>
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleChange}
        />
      </div>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleChange}
        />
      </div>
      <button onClick={handleAddProduct}>Adicionar Produto</button>
      <button onClick={handleRemoveProduct}>Remover Produto</button>
    </div>
  );
}
