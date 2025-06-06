import React from 'react'

export default function Home() {
  const handleBuy = async () => {
    const res = await fetch("https://loylypussit.onrender.com/create-checkout-session", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: [{ name: "Koivunlehtipussi", price: 600, quantity: 1 }]
      })
    });
    const data = await res.json();
    window.location.href = data.url;
  };

  return (
    <div className="p-10 font-sans text-center">
      <h1 className="text-4xl font-bold mb-4">Löylypussit</h1>
      <p className="mb-6 text-lg text-gray-700">Luonnollinen koivunlehtipussi saunaan</p>
      <button
        onClick={handleBuy}
        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
      >
        Osta 6,00 €
      </button>
    </div>
  );
}