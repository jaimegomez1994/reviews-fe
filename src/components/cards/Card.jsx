/* eslint-disable react/prop-types */
export default function Card({ card }) {
  console.log("card.phonePhotoes[0].photo", card.phonePhotoes[0].photo);
  return (
    <div className="mt-20" key={card.id}>
      {card.title}
      <img src={card.phonePhotoes[0].photo} />
    </div>
  );
}
