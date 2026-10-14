import type { Formation } from "../../types/cv";
import { formaterPeriode } from "../../utils/dates";

const FormationItem = ({ formation }: { formation: Formation }) => {
  return (
    <div className="bg-white p-5 rounded-2xl flex flex-col">
      <p className="bg-[#EDF6EE] rounded-xl px-5 py-1 mb-5 w-fit font-jet text-sm font-light">{formaterPeriode(formation.dateDebut, formation.dateFin, "annee")}</p>
      <h3 className="text-xl font-semibold">{formation.diplome}</h3>
      <p className="py-2">{formation.ecole}</p>
      <p className="mt-auto pt-5 font-jet text-xs text-gray-500">{formation.niveau}</p>
    </div>
  );
};

export default FormationItem;
