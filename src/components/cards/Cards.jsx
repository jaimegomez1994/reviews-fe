import { data } from "../../data/data";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="relative sm:top-[68px] top-[56px] columns-3 w-full gap-24 px-20 overflow-auto">
      {data.map((card) => {
        return <Card key={card.id} card={card} />;
      })}
    </div>
  );
}
