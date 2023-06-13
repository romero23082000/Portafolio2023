import WebIcon from "@mui/icons-material/Web";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import img from "./assets/img/PrimeraImagen.jpg";
import img2 from "./assets/img/countrys.jpg";
import img3 from "./assets/img/gymapp.jpg";
import img4 from "./assets/img/hackernews.jpg";
import img5 from "./assets/img/Dashboardredsocial.jpg";

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

export const dataProyects = [
  {
    id: 1,
    title: "web peliculas",
    img: img,
    url: "https://prueba-movies.netlify.app/",
    description:
      "Web realizada para mejorar conceptos y buenas practicas en React.js y el consumo de APIS, su funcionalidad consiste en un sitio web para la busqueda de peliculas",
  },
  {
    id: 2,
    title: "web paises",
    url: "https://countrys-pages.netlify.app",
    img: img2,
    description:
      "Pagina con tematica de paises en la cual se usaron herramientas como redux y react-router-dom, La pagina permite filtrar los paises por region y por busqueda y detalle de cada pais",
  },
  {
    id: 3,
    title: "Gym Web",
    url: "https://gymexercisesfree.netlify.app/",
    img: img3,
    description:
      "Pagina web para mejorar el uso de frameworks como material ui y consumo de apis, la pagina cuenta con navegacion al detalle de cada ejercicio entre otras fucionalidades",
  },
  {
    id: 4,
    title: "Hacker news",
    url: "https://hackernewspt.netlify.app/",
    img: img4,
    description:
      "Prueba tecnica para la cual se pusieron en practica el manejo de heramientos como localStorage  diseño con material ui y consumo de apis ",
  },
  {
    id: 5,
    title: "Dashboard social",
    url: "https://dashboardredsocial.netlify.app/",
    img: img5,
    description:
      "Reto de la pagina frontend mentor para fortalecer conceptos de css-grid, flexbox y maquetación con tema oscuro el sitio es totalmente responsivo ",
  },
]

export const dataExp =
{
  laboral: [
    {
      id: 1,
      title: "TitanQ Ingenieria",
      cargo: "Desarrollador junior FullStack",
      year: "07/03/2022 - 21/01/2023",
    },
  ],
  educativa: [
    {
      id: 1,
      title: "Universidad de Manizales",
      cargo: "Ingenieria de sistemas",
      year: "Actualmente",
    },
    {
      id: 2,
      title: "Universidad Sergio Arboleda",
      cargo: "Programa Misión TIC 2022 Ruta de aprendizaje 2",
      year: "8 Meses",
    },
    {
      id: 3,
      title: "Universidad de Manizales",
      cargo: "Tecnólogo en sistemas de información comercial para Internet",
      year: "02/2018 - 11/2018",
    },
    {
      id: 4,
      title: "Universidad de manizales",
      cargo:
        "Técnico profesional en configuración de servicios comerciales WEB",
      year: "02/2016 - 11/2017",
    },
  ],
}
