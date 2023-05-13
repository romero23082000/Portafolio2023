import WebIcon from "@mui/icons-material/Web";
import AccountTreeIcon from "@mui/icons-material/AccountTree";

export const data = [

  {
    id: 1,
    namePanel: "panel1",
    title: "Frontend Developers",
    year: "1 Año",
    icon: "web_icon",
    expand: true,
    skills: [
      {
        id: 1,
        name: "HTML",
        porcent: 60,
      },
      {
        id: 2,
        name: "CSS",
        porcent: 50,
      },
      {
        id: 3,
        name: "React",
        porcent: 55,
      },
    ],
  },
  {
    id: 2,
    namePanel: "panel2",
    title: "Backend Developer",
    year: "6 Meses",
    icon: "account_tree_icon",
    expand: false,
    skills: [
      {
        id: 1,
        name: "node",
        porcent: 40,
      },
    ],
  },

];