//Creando alerta de Bienvenida
let holaBoton = document.getElementById("holaBoton");
holaBoton.addEventListener("click", saludo);
const logo = "./img/logo.jpg";

function saludo() {
    swal({
    title: "Bienvenido/a a la Escuela Free Art",
    icon: logo,
});
}

//pasar del otro lado al html o DOM
let title = "Calificaciones Escuela Integral de Arte Free Art ";
let tituloAImprimir = document.getElementById("title");
tituloAImprimir.innerHTML = title;
console.log(tituloAImprimir);

let title2 = "Ingresa tus Datos Aquí: ";
let tituloAImprimir2 = document.getElementById("title2");
tituloAImprimir2.innerHTML = title2;
console.log(tituloAImprimir2);

//formulario

const datos = document.getElementById("datos");
const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const curso = document.getElementById("curso");

datos.addEventListener("submit", (e) => {
e.preventDefault();
  //console.log (e)
console.log(nombre.value);
console.log(edad.value);
console.log(email.value);
console.log(curso.value);
});

//Ingreso de Calificaciones

//pasar del otro lado al html o DOM
let titleCalificaciones = "Ingreso de Calificaciones  ";
let tituloAImprimir3 = document.getElementById("titleCalificaciones");
tituloAImprimir3.innerHTML = titleCalificaciones;
console.log(tituloAImprimir3);

//Inicio
//ingreso de nota 1 nota 2 y nota3
//calcula la nota diciendo la nota final
/*inicio
leer n1
leer n2
leer n3
p=(n1+n2+3);
escribir p
fin*/

//aplicando set Time Out

function calculando(nota1, nota2, nota3) {
nota1 = Number(document.getElementById("nota1").value);
nota2 = Number(document.getElementById("nota2").value);
nota3 = Number(document.getElementById("nota3").value);
let p = nota1 + nota2 + nota3;

let spanNota = document.getElementById("notaLetra");

setTimeout(() => {
    spanNota.innerHTML = "el promedio es " + p;
}, 2000);
}
//aplicando operación ternaria y imprimir con inner

function notificacionFinal() {
let final = document.getElementById("final").value;
let resultado =
    final >= 18? (final.innerHTML = "estas aprobado"): (final.innerHTML = "no estas aprobado ");
    document.getElementById("resultadoObtenido").innerText =
    "  y resultado es   " + resultado;
}

//paso listas materia disponibles en mesas de examen al dom

let titleMaterias = "Mesas de examen";
impresionTituloExamen = document.getElementById("titleMaterias");
impresionTituloExamen.innerHTML = titleMaterias;
console.log(impresionTituloExamen);

const subject = [
"Actuación teatral  1  fechas 9 y 10/2/2023 a las 18hs ",
"Actuacion cinetv 2  fechas 6 y 8/2/2023 a las 19:30hs",
"Educacionvocal 1  fechas 6/2/2023  las 17hs y 19hs ",
"Lenguaje de cine    fechas  12 y 13 /2/2023  a las 18hs",
"Historia de la danza 28/2/2023 a las 18hs y 20hs  ",
"Análisis de texto 1  26/2/2023  las 17 hs y 19:30hs",
];

let materiasFinal = document.getElementById("materiasFinal");

for (const estudianteA of subject) {
let li = document.createElement("li");
li.innerHTML = estudianteA;
 materiasFinal.appendChild(li);
}

const subjectlistJSON = JSON.stringify(subject);
localStorage.setItem("subject", subjectlistJSON);

//aplicando api creada y fetch
function conseguirDatos() {
fetch(
    "https://raw.githubusercontent.com/mariadrey17/pruebajson/main/subject.json "
)
    .then((resp) => resp.json())
    .then((info) => console.log(info))
    .catch((err) => console.log(err));
}

conseguirDatos(console.log(subjectlistJSON));

let datosMesa = "Anotate en las mesas de Examenes";
impresionMesaExamen = document.getElementById("datosMesa");
impresionMesaExamen.innerHTML = datosMesa;
console.log(impresionMesaExamen);

//los alumnos se anotan para rendir , paso impreso en el html  nombre y apellido materia y fecha
function quieroRendir(nombreYApellido, materia, fecha) {
nombreYApellido = document.getElementById("nombreYApellido").value;
materia = document.getElementById("materia").value;
fecha = document.getElementById("fecha").value;
let anotarse = materia + fecha;

document.getElementById("rindo").innerHTML =
    "yo  " + nombreYApellido + "  rindo   " + anotarse;
console.log(nombreYApellido, anotarse);
}

//rindieron ahora consultan lista de aprobados

let listaAprobados = "Lista de Aprobados";
impresionListaTitulo = document.getElementById("listaAprobados");
impresionListaTitulo.innerHTML = listaAprobados;
console.log(impresionListaTitulo);

const estudiantesPass = [
"Ignacio nota= 22",
"Sofia nota=19",
"gabriel nota= 26",
"Belen =19",
"Agustín nota=21 ",
"María nota =30",
"Fernando nota=22",
"Soledad nota=18",
];
let aprobados = document.getElementById("aprobados");

for (const pass of estudiantesPass) {
let li = document.createElement("li");
li.innerHTML = pass;
aprobados.appendChild(li);
}

const calificacionAprobados = [
{
    nombre: "Ignacio",
    elemento: "estudiante",
    calificacionFinal: 22,
},
{
    nombre: "Gabriel",
    elemento: "estudiante",
    calificacionFinal: 26,
},
{
    nombre: "Sofia",
    elemento: "estudiante",
    calificacionFinal: 19,
},
{
    nombre: "Belen",
    elemento: "estudiante",
    calificacionFinal: 19,
},
{
    nombre: "Agustin",
    elemento: "estudiante",
    calificacionFinal: 21,
},
{
    nombre: "Maria",
    elemento: "estudiante",
    calificacionFinal: 30,
},
{
    nommbre: "Fernando",
    elemento: "estudiante",
    calificacionFinal: 22,
},
{
    nombre: "Soledad",
    elemento: "estudiante",
    calificacionFinal: 18,
},
];
let calificacionFinal = "";

const calificacionJSON = JSON.stringify(calificacionAprobados);
localStorage.setItem("calificacionAprobados", calificacionJSON);

//guardando datos de 4 estudiantes en local storage

class Alumno {
constructor(nombre, apellido, edad, curso) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.curso = curso;
}
}

//objetos
const escolar1 = new Alumno("Maria", "Rodriguez", 13, "tercero", 7, 7, 8, 22);
const escolar2 = new Alumno("Gabriel", "Lopez", 14, "tercero", 6, 7, 6, 19);
const escolar3 = new Alumno("Cintia", "Ibarra", 14, "tercero", 6, 8, 8, 22);
const escolar4 = new Alumno("Fabian", "Castro", 13, "tercero", 4, 7, 4, 15);

const datosJSON = JSON.stringify(escolar1);
localStorage.setItem("escolar1", datosJSON);
localStorage.setItem("escolar2", datosJSON);
localStorage.setItem("escolar3", datosJSON);
localStorage.setItem("escolar4", datosJSON);

console.log(escolar1, escolar2, escolar3, escolar4);

let cicloAnotarse = "Inscripciones Ciclo 2023";
impresionNuevoCiclo = document.getElementById("inscripcionTitle");
impresionNuevoCiclo.innerHTML = cicloAnotarse;
console.log(impresionNuevoCiclo);

//haciendop array de materias para pasar aal dom y hacer la promesa y demas

const ciclo = [
"Actuación teatral 2",
"Historia del teatro3",
"Analisis de Texto 1",
"Teatro contemporaneo",
"Histori de la danza contemporanea 3",
"Expresión corporal 2",
"Rítmica 2",
"Lenguaje Musical",
];

let materiasCiclo = document.getElementById("materiasCiclo");

for (const ingreso of ciclo) {
let li = document.createElement("li");
li.innerHTML = ingreso;
 materiasCiclo.appendChild(li);
}

//promesas
const verMaterias2023 = (materiasInscribirse) => {
return new Promise((resolve, reject) => {
    if (materiasInscribirse === true) {
    resolve("materia disponible ");
    } else {
    reject("materia no disponible ");
    }
});
};

console.log(verMaterias2023(true));

//ver cupo de materias

function verCupo(materiasAIngreso) {
materiasAIngreso = document.getElementById("materiasAIngreso").value;
let registroInscripcion = materiasAIngreso;
document.getElementById("resultadoInscripcion").innerHTML =
    "  estás  anotado :  " + registroInscripcion;
}
