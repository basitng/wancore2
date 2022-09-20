import { nanoid } from "nanoid";

const navigation = [
  { pathname: "Home", id: nanoid(), path: "" },
  { pathname: "About", id: nanoid(), path: "about" },

  {
    pathname: "Enterprise Network Infrastructure",
    id: nanoid(),
    path: "enterprise-network-infrastructure",
  },
  {
    pathname: "Enterprise Business Solutions",
    id: nanoid(),
    path: "enterprise-business-solutions",
  },
  {
    pathname: "Server Solutions",
    id: nanoid(),
    path: "server-solution",
  },
  {
    pathname: "Smart Home",
    id: nanoid(),
    path: "smart-home",
  },
  {
    pathname: "Advanced Business Telephone Solution",
    id: nanoid(),
    path: "advanced-business-telephone",
  },

  { pathname: "Project Samples", id: nanoid(), path: "projects" },
  { pathname: "Training", id: nanoid(), path: "training" },
  { pathname: "Contact", id: nanoid(), path: "contact" },
];
export default navigation;
