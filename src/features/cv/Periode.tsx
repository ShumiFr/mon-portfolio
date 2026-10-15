import { AUJOURDHUI, type Precision, formaterDate } from "../../utils/dates";

type PeriodeProps = {
  dateDebut: string;
  dateFin?: string;
  precision?: Precision;
};

const Periode = ({ dateDebut, dateFin, precision = "mois" }: PeriodeProps) => {
  return (
    <>
      <time dateTime={dateDebut}>{formaterDate(dateDebut, precision)}</time>
      {" – "}
      {dateFin ? <time dateTime={dateFin}>{formaterDate(dateFin, precision)}</time> : AUJOURDHUI}
    </>
  );
};

export default Periode;
