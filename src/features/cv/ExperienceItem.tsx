import type { Experience } from "../../types/cv";
import { Dot } from "lucide-react";
import { formaterPeriode } from "../../utils/dates";
import { ArrowRight } from "lucide-react";

const ExperienceItem = ({ experience }: { experience: Experience }) => {
  return (
    <article id={experience.id} className="bg-white rounded-2xl p-7 text-black shadow-md my-5">
      <header className="flex justify-between mb-3">
        <section>
          <h3 className="text-xl font-semibold">{experience.titre}</h3>
          <span className="flex items-center pt-1">
            <p className="font-medium text-base">{experience.entreprise} </p>
            <Dot color="#A5ADA6" />
            <p className="font-light text-sm">{experience.localisation}</p>
          </span>
        </section>
        <section>
          <p>{formaterPeriode(experience.dateDebut, experience.dateFin)}</p>
        </section>
      </header>

      <section className="experience-main">
        <ul className="experience-ul-mission">
          {experience.missions.map((mission) => (
            <li key={mission} className="flex gap-3 py-1">
              <ArrowRight color="#D96B43" />
              {mission}
            </li>
          ))}
        </ul>
      </section>

      {experience.technologies && (
        <footer className="mt-5">
          <ul className="flex flex-wrap gap-3">
            {experience.technologies.map((technologie) => (
              <li key={technologie} className="bg-[#EDF6EE] py-1 px-3 rounded-2xl text-xs font-jet">
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
