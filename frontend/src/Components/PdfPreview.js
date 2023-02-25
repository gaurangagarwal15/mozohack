import { useEffect } from "react";
import Spinner from "./Spinner";
const PDFPreview = ({ result, loading }) => {
  useEffect(() => {}, [result]);
  return (
    <>
      <embed
        id="pdf"
        width="600"
        height="800"
        src={"http://localhost:5000/fpdf"}
        key={result}
        type="application/pdf"
      />
    </>
  );
};
export default PDFPreview;
