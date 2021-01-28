import dayjs from 'dayjs';
import { routes } from "./routes";
require('dotenv').config();
import "../sass/style.scss";
let pageArgument;

console.log(dayjs().format('MMMM DD YYYY')); 
console.log(dayjs().subtract(7, 'days').format('DD/MM/YYYY')); 
const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";

  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());
console.log("Js Chargé");