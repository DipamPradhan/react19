export const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1299.99 },
    { id: 2, name: "Phone", price: 344 },
    { id: 3, name: "Tablet", price: 566 },
    { id: 4, name: "Wallet", price: 166 },
    { id: 5, name: "Vision Pro", price: 5666 },
  ];

  const productElements = products
    .filter((product) => {
      return product.price > 500;
    })
    .map((product) => {
      return (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      );
    });

  return (
    <div>
      <h2>Our Products</h2>
      {productElements}
    </div>
  );
};
