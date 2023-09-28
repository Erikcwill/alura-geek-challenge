import axios from "axios";

const API_URL = "http://localhost:5000/api/products";

export async function getAllProducts() {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao buscar produtos");
  }
}

export async function toggleProductHighlight(productId, isHighlighted) {
  try {
    await axios.patch(`${API_URL}/${productId}/highlight`, {
      isHighlighted,
    });
  } catch (error) {
    throw new Error("Erro ao atualizar status de destaque");
  }
}

export async function addProduct(productData) {
  try {
    const response = await axios.post(API_URL, productData);
    return response.data;
  } catch (error) {
    throw new Error("Erro ao adicionar produto");
  }
}
