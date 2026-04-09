import { MenuItem } from "./MenuItem";
export const Menu = () => {
  const handleOrder = (itemName, itemPrice) => {
    console.log(`You ordered: ${itemName} for ${itemPrice}`);
  };
  return (
    <div>
      <h2>Our Menu</h2>
      <MenuItem name="Pizza" price={1200} onOrder={handleOrder} />
      <MenuItem name="Salad" price={200} onOrder={handleOrder} />
      <MenuItem name="Burger" price={900} onOrder={handleOrder} />
    </div>
  );
};
