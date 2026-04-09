import { useState } from "react";
export const UserProfile = () => {
  const [user, setUser] = useState({
    name: "Bruce Wayne",
    age: 39,
    email: "batman@justiceleague.com",
    address: {
      city: "Gotham City",
      country: "Nepal",
    },
  });

  console.log("Component rendering, user: ", user);
  const updateName = () => {
    setUser({
      ...user,
      name: "Peter Parker",
    });
  };

  const updateAge = () => {
    setUser({
      ...user,
      age: user.age + 1,
    });
  };
  const updateAll = () => {
    setUser({
      ...user,
      name: "Megan Fox",
      age: 10,
      email: "megan@fox.com",
    });
  };
  const updateAddress = () => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: "Kathmandu",
      },
    });
  };
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
      <p>
        Address: {user.address.city}, {user.address.country}
      </p>
      <button onClick={updateName}>Change name to Peter Parker</button>
      <button onClick={updateAge}>Increase age by 1</button>
      <button onClick={updateAll}>Update All To New</button>
      <button onClick={updateAddress}>Update Address</button>
    </div>
  );
};
