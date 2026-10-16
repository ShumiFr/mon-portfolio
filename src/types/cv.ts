export const NOMS_CATEGORIES = ["Frontend Architecture", "Backend & Données", "DevOps, Outils & Tests"] as const;
export const NOMS_ICONES_LOISIRS = ["plant-pot", "book-text", "gamepad-2", "hammer"] as const;
export const NOMS_CONTEXTE_PROJETS = ["Formation", "Personnel", "Professionnel"] as const;

export type Categorie = (typeof NOMS_CATEGORIES)[number];
export type IconeLoisir = (typeof NOMS_ICONES_LOISIRS)[number];
export type ContexteProjet = (typeof NOMS_CONTEXTE_PROJETS)[number];

export interface CV {
  profil: Profil;
  experiences: Experience[];
  formations: Formation[];
  competences: Competence[];
  langues: Langue[];
  loisirs: Loisir[];
  projets: Projet[];
}

export interface Profil {
  nom: string;
  prenom: string;
  metier: string;
  description: string;
  email: string;
  telephone: string;
  ville: string;
  experience: number;
  permis: string;
  photo: string;
  github?: string;
  linkedin?: string;
  site?: string;
  disponibilite?: string;
}

export interface Experience {
  id: string;
  entreprise: string;
  localisation: string;
  dateDebut: string;
  dateFin?: string;
  titre: string;
  missions: string[];
  technologies?: string[];
}

export interface Formation {
  id: string;
  ecole: string;
  diplome: string;
  dateDebut: string;
  dateFin?: string;
  niveau: string;
}

export interface Competence {
  nom: string;
  categorie: Categorie;
  principale?: boolean;
}

export interface Langue {
  nom: string;
  niveau: "Débutant" | "Intermédiaire" | "Avancé" | "Langue maternelle";
}

export interface Loisir {
  nom: string;
  icon: IconeLoisir;
}

export interface Projet {
  id: string;
  nom: string;
  description: string;
  technologies: string[];
  github?: string;
  demo?: string;
  image: string;
  misEnAvant?: boolean;
  contexte: ContexteProjet;
}
