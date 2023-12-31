export default function ProductItem({ product, onToggleHighlight }) {
  return (
    <li key={product.id}>
      <strong>Nome:</strong> {product.name}
      <br />
      <strong>Preço:</strong> R${product.price}
      <br />
      <strong>Categoria:</strong> {product.category}
      <br />
      <strong>Descrição:</strong> {product.description}
      <br />
      <img src={product.image} width={80} alt={product.name} />
      <br />
      <strong>Destacado:</strong>{" "}
      <input
        type="checkbox"
        checked={product.isHighlighted}
        onChange={() => onToggleHighlight(product)}
      />
    </li>
  );
}