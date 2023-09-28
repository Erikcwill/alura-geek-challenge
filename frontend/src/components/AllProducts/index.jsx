import  { useEffect, useState } from "react";
import ProductService from "../ProductService";
import ProductItem from "../ProductItem";

export default function AllProducts() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
    isHighlighted: false,
  });

  useEffect(() => {
    async function fetchAllProducts() {
      try {
        const data = await ProductService.getAllProducts();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchAllProducts();
  }, []);

  const updateProductList = (updatedProduct, removedProductId) => {
    if (removedProductId) {
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product.id !== removedProductId)
      );
    } else if (updatedProduct) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === updatedProduct.id ? updatedProduct : product
        )
      );
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const addNewProduct = async () => {
    try {
      const response = await ProductService.addProduct(newProduct);
      setNewProduct({
        name: "",
        price: "",
        category: "",
        image: "",
        description: "",
        isHighlighted: false,
      });
      setProducts([...products, response]);
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
    }
  };

  return (
    <div>
      <h1>Todos os Produtos</h1>
      <ul>
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onUpdate={updateProductList}
          />
        ))}
      </ul>
      <h2>Adicionar Novo Produto</h2>
      <div>
        <label>Nome:</label>
        <input
          type="text"
          name="name"
          value={newProduct.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Preço:</label>
        <input
          type="number"
          name="price"
          value={newProduct.price}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Categoria:</label>
        <input
          type="text"
          name="category"
          value={newProduct.category}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Imagem:</label>
        <input
          type="text"
          name="image"
          value={newProduct.image}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Descrição:</label>
        <input
          type="text"
          name="description"
          value={newProduct.description}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Destacado:</label>
        <input
          type="checkbox"
          name="isHighlighted"
          checked={newProduct.isHighlighted}
          onChange={() =>
            setNewProduct({
              ...newProduct,
              isHighlighted: !newProduct.isHighlighted,
            })
          }
        />
      </div>
      <button onClick={addNewProduct}>Adicionar Produto</button>
    </div>
  );
}
