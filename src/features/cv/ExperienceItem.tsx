import type { Experience } from "../../types/cv";
import { Dot } from "lucide-react";
import Periode from "./Periode";
import { ArrowRight } from "lucide-react";

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <article id={experience.id} className="bg-white rounded-2xl p-7 text-texte shadow-md my-5">
      <header className="flex justify-between mb-3">
        <div>
          <h3 className="text-xl font-semibold">{experience.titre}</h3>
          <div className="flex items-center pt-1">
            <p className="font-medium text-base">{experience.entreprise} </p>
            <Dot className="text-texte-doux" />
            <p className="font-light text-sm">{experience.localisation}</p>
          </div>
        </div>
        <p>
          <Periode dateDebut={experience.dateDebut} dateFin={experience.dateFin} />
        </p>
      </header>

      <ul>
        {experience.missions.map((mission) => (
          <li key={mission} className="flex gap-3 py-1">
            <ArrowRight className="text-accent" />
            {mission}
          </li>
        ))}
      </ul>

      {experience.technologies && (
        <footer className="mt-5">
          <ul className="flex flex-wrap gap-3">
            {experience.technologies.map((technologie) => (
              <li key={technologie} className="bg-surface py-1 px-3 rounded-2xl text-xs font-jet">
                {technologie}
              </li>
            ))}
          </ul>
        </footer>
      )}
    </article>
  );
};

export default ExperienceItem;
