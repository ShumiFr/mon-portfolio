import type {
  CV,
  Profil,
  Experience,
  Formation,
  Competence,
  Langue,
  Loisir,
  Projet,
} from "../types/cv";

const profilData = {
  nom: "Gagnaire",
  prenom: "Pauline",
  metier: "Développeuse Frontend",
  description:
    "Développeuse Frontend junior, passionnée par le développement d'applications web, je rêve de travailler dans une entreprise proche du spatial.",
  email: "gagnaire.pauline@gmail.com",
  telephone: "06 06 99 36 56",
  ville: "73230 Saint-Alban-Leysse",
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
    dateDebut: "2020-09",
    dateFin: "2021-02",
    titre: "Pâtissière / Tourière",
    missions: [
      "Production en autonomie sous contrainte de délais : rigueur, adaptation et gestion du stress.",
    ],
  },
  {
    id: "e-amazon",
    entreprise: "Amazon France Services SAS",
    dateDebut: "2021-09",
    dateFin: "2022-08",
    titre: "Préparatrice de commandes",
    missions: [
      "Application des règles de sécurité et des procédures qualité en environnement industriel, sur des objectifs cadencés : organisation, adaptabilité et polyvalence.",
    ],
  },
  {
    id: "e-super-u",
    entreprise: "Super U La Ravoire",
    dateDebut: "2025-05",
    titre: "Préparatrice de commandes",
    missions: [
      "Préparation de commandes clients dans le respect des délais et des exigences qualité",
      "Formation des nouveaux arrivants aux procédures internes.",
    ],
  },
  {
    id: "e-frequencies",
    entreprise: "Fréquencies",
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
    dateDebut: "2018-09",
    dateFin: "2019-08",
  },
  {
    id: "f-mention-complementaire",
    ecole: "CFA des métiers Laon",
    diplome: "Mention Complémentaire Pâtissier Chocolatier Glacier Confiseur",
    dateDebut: "2019-09",
    dateFin: "2020-08",
  },
  {
    id: "f-developpeur-integrateur-web",
    ecole: "OpenClassrooms",
    diplome: "Développeur Intégrateur Web",
    dateDebut: "2022-12",
    dateFin: "2023-08",
  },
  {
    id: "f-developpeur-application",
    ecole: "OpenClassrooms",
    diplome: "Développeur d'application - Javascript React",
    dateDebut: "2024-01",
    dateFin: "2025-05",
  },
] satisfies Formation[];

const competencesData = [
  { nom: "HTML / CSS", categorie: "langage" },
  { nom: "TypeScript", categorie: "langage" },
  { nom: "React", categorie: "front-end" },
  { nom: "Redux / Zustand", categorie: "front-end" },
  { nom: "React Router / TanStack Router", categorie: "front-end" },
  { nom: "Tailwind CSS / SASS", categorie: "front-end" },
  { nom: "Shadcn", categorie: "front-end" },
  { nom: "API REST", categorie: "donnees et api" },
  { nom: "Axios / Fetch", categorie: "donnees et api" },
  { nom: "Swagger / Postman", categorie: "donnees et api" },
  { nom: "Git / Github / Gitlab", categorie: "outils" },
  { nom: "Vite", categorie: "outils" },
] satisfies Competence[];

const languesData = [
  { nom: "Français", niveau: "natif" },
  { nom: "Anglais", niveau: "intermediaire" },
] satisfies Langue[];

const loisirsData = [
  { nom: "Randonnée" },
  { nom: "Lecture" },
  { nom: "Jeux Vidéo" },
  { nom: "Jeux de société" },
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
