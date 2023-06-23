import { createTheme } from "@mui/material";

const createCustomTheme = (mode) => {
  const myTheme = createTheme({
    palette: {
      mode,
      ...(mode === "light"
        ? {
          primary: {
            main: "#9032bb",
          },
        }
        : {
          primary: {
            main: "#42a5f5",
          },
        }),
    },
  });

  return myTheme
}

export default createCustomTheme