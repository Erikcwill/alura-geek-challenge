import axios from "axios"; // Certifique-se de que a biblioteca Axios esteja instalada

import styles from "./MainGallery.module.css";
import { useEffect, useState } from "react";

export default function MainGallery() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para buscar produtos do servidor
    async function fetchProducts() {
      try {
        const response = await axios.get("http://localhost:5000/api/products"); // Substitua pela URL correta do seu servidor
        setProducts(response.data);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    // Chame a função para buscar produtos ao montar o componente
    fetchProducts();
  }, []);

  return (
    <section className={styles.container}>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Preço: {product.price}</p>
          <span>Imagem: {product.description} </span>
          {/* Adicione outras informações do produto aqui */}
        </div>
      ))}
    </section>
  );
}
