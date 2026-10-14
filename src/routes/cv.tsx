import { createFileRoute } from "@tanstack/react-router";
import cv from "../data/cv";
import ExperienceItem from "../features/cv/ExperienceItem";
import { Briefcase, CodeXml, Compass, GraduationCap, House, Languages } from "lucide-react";
import FormationItem from "../features/cv/FormationItem";
import ListeCompetences from "../features/cv/ListeCompetences";
import { ICONES_LOISIRS } from "../utils/icons";

export const Route = createFileRoute("/cv")({
  component: CV,
});

function CV() {
  const experiencesTriees = [...cv.experiences].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));
  const formationsTriees = [...cv.formations].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));

  return (
    <>
      <header>
        <h1 className="text-4xl font-bold mb-5">Mon Parcours & Compétences</h1>
        <p className="mb-10">{cv.profil.description}</p>
      </header>

      <div className="flex flex-row gap-10">
        {/*GAUCHE*/}
        <div className="basis-1/3">
          {/*Informations Clés*/}
          <section className="bg-white rounded-2xl p-7 text-black shadow-md my-5">
            <div className="flex gap-2 mb-5">
              <Compass color="#D96B43" />
              <h2>Informations Clés</h2>
            </div>
            <dl className="grid grid-cols-2 gap-5">
              <div className="rounded-xl bg-[#EDF6EE] p-4">
                <dt className="font-jet text-gray-600">Localisation</dt>
                <dd className="font-semibold">{cv.profil.ville}</dd>
              </div>

              <div className="rounded-xl bg-[#EDF6EE] p-4">
                <dt className="font-jet text-gray-600">Expérience</dt>
                <dd className="font-semibold">
                  {cv.profil.experience} {cv.profil.experience > 1 ? "ans" : "an"}
                </dd>
              </div>
            </dl>
          </section>

          {/*Stack & Compétences*/}
          <section className="bg-white rounded-2xl p-7 text-black shadow-md my-5">
            <div className="flex gap-2">
              <CodeXml color="#D96B43" />
              <h2>Stack & Compétences</h2>
            </div>
            <ListeCompetences cv={cv} />
          </section>

          {/*Langues*/}
          <section className="bg-white rounded-2xl p-7 text-black shadow-md my-5">
            <div className="flex gap-2 mb-5">
              <Languages color="#D96B43" />
              <h2>Langues</h2>
            </div>
            <dl className="flex flex-col gap-3">
              {cv.langues.map((langue) => (
                <div key={langue.nom}>
                  <dt className="font-jet text-gray-600">{langue.nom}</dt>
                  <dd className="font-semibold">{langue.niveau}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/*Centres d'interêt*/}
          <section className="bg-white rounded-2xl p-7 text-black shadow-md my-5">
            <div className="flex gap-2 mb-5">
              <House color="#D96B43" />
              <h2>Centres d'intérêt</h2>
            </div>
            <ul>
              {cv.loisirs.map((loisir) => {
                const Icone = ICONES_LOISIRS[loisir.icon];
                return (
                  <li key={loisir.nom} className="flex bg-[#EDF6EE] my-2 p-2 rounded-xl gap-2">
                    <Icone /> {loisir.nom}
                  </li>
                );
              })}
            </ul>
          </section>
        </div>

        {/*DROITE*/}
        <div className="basis-2/3">
          {/*Experiences Professionnelles*/}
          <section>
            <div className="flex gap-5 text-3xl items-center">
              <div className="bg-[#DCE5DD] p-2 rounded-full">
                <Briefcase />
              </div>
              <h2 className="font-bold">Expériences Professionnelles</h2>
            </div>
            <div>
              {experiencesTriees.map((experience) => (
                <ExperienceItem key={experience.id} experience={experience} />
              ))}
            </div>
          </section>

          {/*Formations & Diplômes*/}
          <section>
            <div className="flex gap-5 text-3xl items-center my-10">
              <div className="bg-[#DCE5DD] p-2 rounded-full">
                <GraduationCap />
              </div>
              <h2 className="font-bold">Formations & Diplômes</h2>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {formationsTriees.map((formation) => (
                <FormationItem key={formation.id} formation={formation} />
              ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
