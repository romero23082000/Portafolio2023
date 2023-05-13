import { Typography } from "@mui/material";
import React from "react";

const Headers = (props) => {
  const { text1, text2 } = props;
  return (
    <>
      <Typography
        variant="h4"
        sx={{ margin: "30px 0 0 0", fontWeight: 700, textAlign: "center" }}
      >
        {text1}
      </Typography>
      <Typography
        sx={{ margin: "0 0 30px 0", color: "#a3a6a9", textAlign: "center" }}
      >
        {text2}
      </Typography>
    </>
  );
};

export default Headers;
