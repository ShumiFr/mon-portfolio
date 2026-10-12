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
  permis: string;
  photo: string;
  github?: string;
  linkedin?: string;
  site?: string;
}

export interface Experience {
  id: string;
  entreprise: string;
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
}

export interface Competence {
  nom: string;
  categorie: "langage" | "front-end" | "donnees et api" | "devops" | "outils";
}

export interface Langue {
  nom: string;
  niveau: "debutant" | "intermediaire" | "avance" | "natif";
}

export interface Loisir {
  nom: string;
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
}
