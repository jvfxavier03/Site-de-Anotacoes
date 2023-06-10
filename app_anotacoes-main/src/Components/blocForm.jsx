import { useContext, useState } from "react";
import { BlocContext } from "../Context/blocContext";
import { Avatar, Button, Snackbar, Alert } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import SendIcon from "@mui/icons-material/Send";
import "../style/formStyle.css";

function BlocForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [open, setOpen] = useState(false); // Estado para controlar a exibição da mensagem de sucesso
  const [error, setError] = useState(false); // Estado para controlar a exibição da mensagem de erro

  const { keyId, setKeyId, CreateNote } = useContext(BlocContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || description.trim() === "") {
      setError(true); // Exibir mensagem de erro se algum campo estiver vazio
    } else {
      CreateNote({
        id: keyId + 1,
        title,
        description,
      });
      setKeyId(keyId + 1);
      setTitle("");
      setDescription("");
      setOpen(true); // Abrir mensagem de sucesso após enviar o formulário
      setError(false); // Limpar o estado de erro
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false); // Fechar a mensagem de sucesso
  };

  return (
    <section>
      <div className="avatar">
        <Avatar sx={{ bgcolor: "green[500]" }} variant="rounded">
          <AssignmentIcon />
        </Avatar>
      </div>
      <h1 className="form_title animated">Bloco de Notas</h1>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="form_input"
          placeholder="Escreva um título"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          required
        />
        <textarea
          className="form_textarea"
          placeholder="Escreva um texto"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          required
        />
        <Button variant="contained" endIcon={<SendIcon />} type="submit">
          Enviar
        </Button>
      </form>
      {error && (
        <Alert severity="error">Por favor, preencha todos os campos!</Alert>
      )}
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
          This is a success message!
        </Alert>
      </Snackbar>
    </section>
  );
}

export default BlocForm;


