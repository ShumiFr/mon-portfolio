import type { Projet } from "../../types/cv"

const ProjetCard = ({ projet }: { projet: Projet }) => {
   return (
      <div className="border border-surface p-4 rounded-md">
         <p>{projet.contexte}</p>
         <img src={projet.image} alt={`Capture d'écran de ${projet.nom}`} />
         <h3>{projet.nom}</h3>
         <p>{projet.description}</p>
         <p>{projet.technologies.map((technologie) => <span key={technologie}>{technologie}</span>)}</p>

         {projet.github && (
            <a href={projet.github} target="_blank" rel="noopener noreferrer">
               Voir le projet
            </a>
         )}
      </div>
   )
}

export default ProjetCard
