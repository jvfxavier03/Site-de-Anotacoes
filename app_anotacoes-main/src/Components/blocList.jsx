
import BlocCard from "./blocCard";
import { useContext } from "react";
import { BlocContext } from "../Context/blocContext";
import "../style/listStyle.css"

function BlocList() {
  const {notes} = useContext(BlocContext);

  if (notes.length === 0) {
    return <h2 className="note_empty">Empty</h2>;
  }
  
  return (
    <section className="note_section">
      {notes.map((note) => (
        <BlocCard key={note.id} note={note}/>
      ))}
    </section>
  );
}
export default BlocList;
