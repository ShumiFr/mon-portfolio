import type { Formation } from "../../types/cv";
import { formaterPeriode } from "../../utils/dates";

const FormationItem = ({ formation }: { formation: Formation }) => {
  return (
    <article className="bg-white p-5 rounded-2xl flex flex-col">
      <time dateTime={formaterPeriode(formation.dateDebut, formation.dateFin, "annee")} className="bg-surface rounded-xl px-5 py-1 mb-5 w-fit font-jet text-sm font-light">
        {formaterPeriode(formation.dateDebut, formation.dateFin, "annee")}
      </time>
      <h3 className="text-xl font-semibold">{formation.diplome}</h3>
      <p className="py-2">{formation.ecole}</p>
      <p className="mt-auto pt-5 font-jet text-xs text-texte-doux">{formation.niveau}</p>
    </article>
  );
};

export default FormationItem;
