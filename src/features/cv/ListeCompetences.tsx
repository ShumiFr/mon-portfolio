import { NOMS_CATEGORIES } from "../../types/cv";
import type { CV } from "../../types/cv";
import { LineDotLeftHorizontal } from "lucide-react";

const ListeCompetences = ({ cv }: { cv: CV }) => {
  return (
    <div>
      {NOMS_CATEGORIES.map((categorie) => {
        const competences = cv.competences.filter((competence) => competence.categorie === categorie);

        if (competences.length === 0) return null;

        return (
          <div key={categorie}>
            <h3 className="font-jet text-sm mt-5">{categorie}</h3>
            <ul>
              {competences.map((competence) => (
                <li className="flex items-center bg-surface my-2 py-1 px-3 rounded-xl text-sm gap-2 font-semibold" key={competence.nom}>
                  <LineDotLeftHorizontal className="text-accent" />
                  {competence.nom}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default ListeCompetences;
