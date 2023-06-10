import { createContext, useEffect, useState } from "react";
import { notes as data } from "../Data/notes";

export const BlocContext = createContext();

function BlocContextProvider(props) {
  const [notes, setNotes] = useState([]);
  const [keyId, setKeyId] = useState(4);

  // Método GET - Retorna todas as notas
  useEffect(() => {
    setNotes(data);
  }, []);

  // Método POST - Adiciona uma nova nota
  function CreateNote(note) {
    setNotes([
      ...notes,
      {
        id: keyId,
        title: note.title,
        description: note.description,
      },
    ]);
    setKeyId(keyId + 1);
  }

  // Método PUT - Atualiza uma nota existente pelo ID
  function UpdateNote(noteId, updatedNote) {
    setNotes(notes.map((note) => (note.id === noteId ? { ...note, ...updatedNote } : note)));
  }

  // Método DELETE - Exclui uma nota pelo ID
  function DeleteNote(noteId) {
    setNotes(notes.filter((note) => note.id !== noteId));
  }

  return (
    <BlocContext.Provider
      value={{
        keyId,
        setKeyId,
        notes,
        CreateNote,
        UpdateNote,
        DeleteNote,
      }}
    >
      {props.children}
    </BlocContext.Provider>
  );
}

export default BlocContextProvider;
