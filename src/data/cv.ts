import type { CV, Profil, Experience, Formation, Competence, Langue, Loisir, Projet } from "../types/cv";

const profilData = {
  nom: "Gagnaire",
  prenom: "Pauline",
  metier: "Développeuse Frontend",
  description: "Développeuse web révant de travailler dans le développement spatial. Focus sur React, TypeScript et Tailwind CSS, avec une montée en compétences full-stack en cours.",
  email: "gagnaire.pauline@gmail.com",
  telephone: "06 06 99 36 56",
  ville: "Chambéry & ses alentours",
  experience: 1,
  permis: "B",
  photo: "https://github.com/ShumiFr.png",
  github: "https://github.com/ShumiFr",
  linkedin: "https://www.linkedin.com/in/pauline-gagnaire-122a04246",
  site: "https://pauline-gagnaire.netlify.app/",
} satisfies Profil;

const experienceData = [
  {
    id: "e-caillier",
    entreprise: "Caillier / Délice & Gourmandises",
    localisation: "Pont-Sainte-Maxence",
    dateDebut: "2020-09",
    dateFin: "2021-02",
    titre: "Pâtissière / Tourière",
    missions: ["Production en autonomie sous contrainte de délais : rigueur, adaptation et gestion du stress."],
  },
  {
    id: "e-amazon",
    entreprise: "Amazon France Services SAS",
    localisation: "Senlis",
    dateDebut: "2021-09",
    dateFin: "2022-08",
    titre: "Préparatrice de commandes",
    missions: ["Application des règles de sécurité et des procédures qualité en environnement industriel, sur des objectifs cadencés : organisation, adaptabilité et polyvalence."],
  },
  {
    id: "e-super-u",
    entreprise: "Super U",
    localisation: "La Ravoire",
    dateDebut: "2025-05",
    titre: "Préparatrice de commandes",
    missions: ["Préparation de commandes clients dans le respect des délais et des exigences qualité", "Formation des nouveaux arrivants aux procédures internes."],
  },
  {
    id: "e-frequencies",
    entreprise: "Fréquencies",
    localisation: "Full Remote",
    dateDebut: "2026-05",
    titre: "Développeuse Frontend Bénévole",
    missions: [
      "Développement d'une application web de gestion associative en React et TypeScript",
      "Mise en place du routage applicatif avec TanStack Router",
      "Intégration des interfaces utilisateur avec Tailwind CSS",
      "Automatisation des contrôles qualité avant commit avec Husky, sur un dépôt versionné Git",
    ],
    technologies: ["React", "TypeScript", "TanStack Router", "Tailwind CSS"],
  },
] satisfies Experience[];

const formationsData = [
  {
    id: "f-bac-boulangerie-patisserie",
    ecole: "Lycée Roberval Breuil-le-Vert",
    diplome: "Baccalauréat Professionnel Boulanger-Pâtissier",
    dateDebut: "2018",
    dateFin: "2019",
    niveau: "Bac",
  },
  {
    id: "f-mention-complementaire",
    ecole: "CFA des métiers Laon",
    diplome: "Mention Complémentaire Pâtissier Chocolatier Glacier Confiseur",
    dateDebut: "2019",
    dateFin: "2020",
    niveau: "Bac+1",
  },
  {
    id: "f-developpeur-integrateur-web",
    ecole: "OpenClassrooms",
    diplome: "Développeur Intégrateur Web",
    dateDebut: "2022",
    dateFin: "2023",
    niveau: "Diplôme certifiée RNCP Niveau 5",
  },
  {
    id: "f-developpeur-concepteur-logiciel",
    ecole: "OpenClassrooms",
    diplome: "Développeur Concepteur Logiciel",
    dateDebut: "2024",
    dateFin: "2025",
    niveau: "Diplôme certifiée RNCP Niveau 6",
  },
] satisfies Formation[];

const competencesData = [
  { nom: "HTML / CSS", categorie: "Frontend Architecture" },
  { nom: "TypeScript", categorie: "Frontend Architecture" },
  { nom: "React", categorie: "Frontend Architecture" },
  { nom: "Redux / Zustand", categorie: "Frontend Architecture" },
  { nom: "React Router / TanStack Router", categorie: "Frontend Architecture" },
  { nom: "Tailwind CSS / SASS", categorie: "Frontend Architecture" },
  { nom: "Shadcn", categorie: "Frontend Architecture" },
  { nom: "API REST", categorie: "Backend & Données" },
  { nom: "Axios / Fetch", categorie: "Backend & Données" },
  { nom: "Swagger / Postman", categorie: "Backend & Données" },
  { nom: "Git / Github / Gitlab", categorie: "DevOps, Outils & Tests" },
  { nom: "Vite", categorie: "DevOps, Outils & Tests" },
] satisfies Competence[];

const languesData = [
  { nom: "Français", niveau: "Langue maternelle" },
  { nom: "Anglais", niveau: "Intermédiaire" },
] satisfies Langue[];

const loisirsData = [
  { nom: "Botanique", icon: "plant-pot" },
  { nom: "Lecture", icon: "book-text" },
  { nom: "Jeux Vidéo", icon: "gamepad-2" },
  { nom: "Bricolage", icon: "hammer" },
] satisfies Loisir[];

const projetsData = [
  {
    id: "p-frequencies",
    nom: "Fréquencies",
    description: "Outil de gestion associative",
    technologies: ["React", "TypeScript", "Tailwind CSS", "TanStack Router"],
    image: "https://placehold.co/900x500?text=Frequencies",
  },
] satisfies Projet[];

const cv = {
  profil: profilData,
  experiences: experienceData,
  formations: formationsData,
  competences: competencesData,
  langues: languesData,
  loisirs: loisirsData,
  projets: projetsData,
} satisfies CV;

export default cv;
