import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import { Box, IconButton, Typography } from "@mui/material";
import { Document, Page, pdfjs } from "react-pdf";
import file from "../../assets/pdf/hojavida.pdf";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "react-pdf/node_modules/pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const ModalPdf = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const options = {
    cMapUrl: "cmaps/",
    standardFontDataUrl: "standard_fonts/",
  };

  return (
    <>
      <IconButton
        sx={{
          "&:hover": {
            backgroundColor: "#ad0b00",
            color: "#fff",
          },
        }}
        onClick={handleOpen}
      >
        <PictureAsPdfIcon />
      </IconButton>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ height: "400px", overflowY: "scroll" }}>
            <Document
              file={file}
              options={options}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalPdf;
