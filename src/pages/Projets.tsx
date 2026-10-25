import cv from "../data/cv";
import ProjetCard from "../features/projets/ProjetCard";

export default function Projets() {
   return (
      <>
         <header>
            <h1>Mes Projets</h1>
            <p>Toutes mes applications réalisés lors de mes études, pour un besoin personnel ou pour de vrai professionnels</p>
            {cv.projets.length > 0 && (
               <p>{cv.projets.length} projet(s)</p>
            )}
         </header>
         <div className="grid grid-cols-3 gap-4">
            {cv.projets.map((projet) => (
               <ProjetCard key={projet.id} projet={projet} />
            ))}
         </div>
      </>
   );
}