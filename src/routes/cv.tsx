import { createFileRoute } from "@tanstack/react-router";
import cv from "../data/cv";
import ExperienceItem from "../features/cv/ExperienceItem";
import { Briefcase, CodeXml, Compass, GraduationCap, House, Languages } from "lucide-react";
import FormationItem from "../features/cv/FormationItem";
import ListeCompetences from "../features/cv/ListeCompetences";
import { ICONES_LOISIRS } from "../utils/icons";
import Card from "../features/cv/Card";

export const Route = createFileRoute("/cv")({
  component: CV,
});

function CV() {
  const experiencesTriees = [...cv.experiences].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));
  const formationsTriees = [...cv.formations].sort((a, b) => b.dateDebut.localeCompare(a.dateDebut));

  return (
    <>
      <header className="mt-10">
        <h1 className="text-4xl font-bold mb-5">Mon Parcours & Compétences</h1>
        <p className="mb-10">{cv.profil.description}</p>
      </header>

      <div className="flex flex-row gap-10">
        {/*GAUCHE*/}
        <div className="basis-1/3">
          {/*Informations Clés*/}
          <Card icone={Compass} titre="Informations Clés">
            <dl className="grid grid-cols-2 gap-5">
              <div className="rounded-xl bg-surface p-4">
                <dt className="font-jet text-texte-doux">Localisation</dt>
                <dd className="font-semibold">{cv.profil.ville}</dd>
              </div>

              <div className="rounded-xl bg-surface p-4">
                <dt className="font-jet text-texte-doux">Expérience</dt>
                <dd className="font-semibold">
                  {cv.profil.experience} {cv.profil.experience > 1 ? "ans" : "an"}
                </dd>
              </div>
            </dl>
          </Card>

          {/*Stack & Compétences*/}
          <Card icone={CodeXml} titre="Stack & Compétences">
            <ListeCompetences cv={cv} />
          </Card>

          {/*Langues*/}
          <Card icone={Languages} titre="Langues">
            <dl className="flex flex-col gap-3">
              {cv.langues.map((langue) => (
                <div key={langue.nom}>
                  <dt className="font-jet text-texte-doux">{langue.nom}</dt>
                  <dd className="font-semibold">{langue.niveau}</dd>
                </div>
              ))}
            </dl>
          </Card>

          {/*Centres d'interêt*/}
          <Card icone={House} titre="Centres d'intérêt">
            <ul>
              {cv.loisirs.map((loisir) => {
                const Icone = ICONES_LOISIRS[loisir.icon];
                return (
                  <li key={loisir.nom} className="flex bg-surface my-2 p-2 rounded-xl gap-2">
                    <Icone /> {loisir.nom}
                  </li>
                );
              })}
            </ul>
          </Card>
        </div>

        {/*DROITE*/}
        <div className="basis-2/3">
          {/*Experiences Professionnelles*/}
          <section>
            <div className="flex gap-5 text-3xl items-center">
              <div className="bg-surface p-2 rounded-full">
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
              <div className="bg-surface p-2 rounded-full">
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
