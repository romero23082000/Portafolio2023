import { Box } from "@mui/system";
import React from "react";
import PermPhoneMsgOutlinedIcon from "@mui/icons-material/PermPhoneMsgOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Button, CircularProgress, TextField, Typography } from "@mui/material";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState();
  const [open, setOpen] = React.useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_4mw26oh",
        "template_8oi2ymh",
        form.current,
        "Ue9fLxi4z5tVU8klf"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            setLoading(false);
            setSuccess(true);
            setOpen(true);
          }
        },
        (error) => {
          setLoading(false);
          setSuccess(false);
          setOpen(true);
          console.log(error);
        }
      );
  };

  const handleClose = (event, reason) => {
    setOpen(false);
  };

  return (
    <>
      <Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PermPhoneMsgOutlinedIcon
            sx={{ color: "#9032bb", marginRight: "15px" }}
          />
          <div>
            <Typography variant="h5" fontWeight={700}>
              Llamame
            </Typography>
            <Typography>+57 3205217199</Typography>
          </div>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <EmailOutlinedIcon sx={{ color: "#9032bb", marginRight: "15px" }} />
          <div>
            <Typography variant="h5" fontWeight={700}>
              Email
            </Typography>
            <Typography>aromeroibague@gmail.com</Typography>
          </div>
        </Box>
      </Box>
      <Box>
        <form
          ref={form}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
          }}
          onSubmit={sendEmail}
        >
          <Box sx={{ display: "flex", gap: "20px" }}>
            <TextField
              required
              id="outlined-required"
              label="Nombre"
              name="Nombre"
            />
            <TextField
              required
              id="outlined-required"
              label="Email"
              name="Email"
            />
          </Box>

          <TextField
            id="outlined-required"
            label="Proyecto"
            fullWidth
            name="Proyecto"
          />
          <TextField
            id="outlined-multiline-static"
            label="Mensaje"
            multiline
            rows={4}
            fullWidth
            name="message"
            required
          />
          {loading ? (
            <CircularProgress color="secondary" />
          ) : (
            <Button variant="contained" type="submit" color="secondary">
              Enviar
            </Button>
          )}
          {success ? (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="success"
                sx={{ width: "100%" }}
                variant="filled"
              >
                Mensaje enviado exitosamente!
              </Alert>
            </Snackbar>
          ) : (
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
              <Alert
                onClose={handleClose}
                severity="error"
                sx={{ width: "100%" }}
                variant="filled"
              >
                Error al enviar el mensaje
              </Alert>
            </Snackbar>
          )}
        </form>
      </Box>
    </>
  );
};

export default Contact;
