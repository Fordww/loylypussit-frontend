import React from "react";

export default function Home() {
  const handleBuy = async () => {
    const res = await fetch("https://loylypussit-backend.onrender.com/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ name: "Koivunlehtipussi", price: 600, quantity: 1 }],
      }),
    });

    const data = await res.json();
    window.location = data.url;
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Löylypussit</h1>
      <p>Perinteinen koivunlehtipussi saunaan</p>
      <button onClick={handleBuy}>Osta nyt €6</button>
    </div>
  );
}
