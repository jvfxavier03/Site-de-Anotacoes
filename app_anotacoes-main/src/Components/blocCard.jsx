import { useContext } from "react";
import { BlocContext } from "../Context/blocContext";
import { Button, ButtonGroup } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../style/cardStyle.css";

function BlocCard({ note }) {
  const { DeleteNote } = useContext(BlocContext);

  const handleDeleteNote = () => {
    DeleteNote(note.id);
  };

  return (
    <section className="note">
      <div className="div_note">
        <p className="note_id">Id: {note.id}</p>
        <h1 className="note_title">{note.title}</h1>
        <p className="note_description">{note.description}</p>
      </div>
      <div className="div_buttons">
        <ButtonGroup size="small" variant="outlined">
          <Button startIcon={<DeleteIcon />} onClick={handleDeleteNote}>
            Delete Note
          </Button>
        </ButtonGroup>
      </div>
    </section>
  );
}

export default BlocCard;
