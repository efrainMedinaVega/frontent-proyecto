let nombre;
let edad;
let localidad;
let profesion;
nombre=prompt("Ingresa tu nombre completo");
edad=prompt("Ingresa tu edad");
localidad=prompt("Ingresa tu localidad");
profesion=prompt("Ingresa tu profesion");
document.write("<table border=1>");
document.write("<tr>");
document.write("<td rowspan=4>");
document.write("<img src=img/retrato.PNG width=100px > ")
document.write("</td>");
document.write("<td>");
document.write("<b>Nombre</b>");
document.write("<td>")
document.write(nombre);
document.write("</tr>");
document.write("<tr>");
document.write("<td>");
document.write("<br>");
document.write("<b>Edad");
document.write("<td>")
document.write(edad);
document.write("<tr>");
document.write("<td>");
document.write("<br>");
document.write("<b>Localidad</b>");
document.write("<td>")
document.write(localidad);
document.write("<tr>");
document.write("<td>");
document.write("<br>");
document.write("<b>Profeción</b>");
document.write("<td>")
document.write(profesion);
document.write("</table");