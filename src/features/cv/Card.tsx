import type { LucideIcon } from "lucide-react";
import { type ReactNode } from "react";

type CardProps = {
  icone: LucideIcon;
  titre: string;
  children: ReactNode;
};

const Card = ({ icone: Icone, titre, children }: CardProps) => {
  return (
    <section className="bg-white rounded-2xl p-7 text-texte shadow-md my-5">
      <div className="flex gap-2 mb-5">
        <Icone className="text-accent" />
        <h2>{titre}</h2>
      </div>
      {children}
    </section>
  );
};

export default Card;
