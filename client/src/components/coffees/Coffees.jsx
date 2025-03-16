import { useEffect, useState } from "react";

export default function Coffees() {
  const [coffees, setCoffees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/jsonstore/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees((Object.values(data))));

  }, []);


console.log(coffees);

  return (
    <div>
      <h1>Coffee Menu</h1>
      <div >
        {coffees.map((coffee) => (
          <div key={coffee._id} style={{ border: "1px solid #ddd", padding: "10px", borderRadius: "5px" }}>
            <img src={coffee.image} alt={coffee.name} style={{ width: "300px", borderRadius: "5px" }} />
            <h2>{coffee.name}</h2>
            <p><strong>Ingredients:</strong> {coffee.ingredients.join(", ")}</p>
            <p><strong>Caffeine:</strong> {coffee.caffeine_mg}mg</p>
            <p><strong>Price:</strong> ${coffee.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

