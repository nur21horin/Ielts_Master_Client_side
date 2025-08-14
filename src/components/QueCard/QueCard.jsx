
import React, { useEffect, useState } from "react";
import "./QueCard.css";
import { FaPlane } from "react-icons/fa";

const QueCard = () => {
  const [cards, setCards] = useState([]);
  const [clicks, setClicks] = useState({});

  const handleClick = (id) => {
    setClicks((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  useEffect(() => {
    fetch("/QueCard.json")
      .then((res) => res.json())
      .then((data) => setCards(data))
      .catch((err) => console.error("Error loading JSON:", err));
  }, []);

  return (
    <div className="flex flex-col gap-3 m-3.5 font-serif">
      {cards.map((card) => {
        const count = clicks[card.id] || 0;

        return (
          <div
            key={card.id}
            className="w-2/3 mx-auto text-center border-2 bg-white text-gray-600 text-2xl rounded-2xl shadow-amber-300"
            onClick={() => handleClick(card.id)}
          >
            {count < 3 ? (
              <div>
                <h2 className="font-bold text-3xl">Q-{card.id}</h2>
                <h3 className="font-bold text-3xl">Question: {card.title}</h3>
                <p>Answer: {card.answer}</p>
              </div>
            ) : (
              <div className="relative h-32 overflow-hidden">
                <FaPlane
                  size={80}
                  className="absolute text-blue-600 flying-plane"
                />
                <p className="text-xl mt-20">Taking off to success! 🛫</p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default QueCard;
