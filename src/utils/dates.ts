export type Precision = "mois" | "annee";

export const AUJOURDHUI = new Intl.RelativeTimeFormat("fr", { numeric: "auto" }).format(0, "day");
const OPTIONS_PRECISION = {
  mois: { month: "long", year: "numeric" },
  annee: { year: "numeric" },
} satisfies Record<Precision, Intl.DateTimeFormatOptions>;

export function formaterDate(date: string, precision: Precision) {
  return new Date(date).toLocaleDateString("fr-FR", OPTIONS_PRECISION[precision]);
}

export function formaterPeriode(dateDebut: string, dateFin?: string, precision: Precision = "mois"): string {
  const dateDebutFormate = formaterDate(dateDebut, precision);
  const dateFinFormate = dateFin ? formaterDate(dateFin, precision) : AUJOURDHUI;

  return `${dateDebutFormate} – ${dateFinFormate}`;
}
