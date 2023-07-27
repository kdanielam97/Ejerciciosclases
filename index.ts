import {Persona} from "./clasepersona";

let persona1 = new Persona ("daniela", 26, "3214521415", "cll 11 # 2-21", "popayan");
let persona2 = new Persona ("armando", 50, "3265487541", "cra 20 # 2-12", "popayan");
let persona3 = new Persona ("camila", 22, "3214567894", "cra 2 # 13-21", "cali");
let persona4 = new Persona ("carlos", 12, "3236521415", "cra 5 # 2-21", "bogota");
let persona5 = new Persona ("pedro", 8, "3212232115", "cll 51 # 23-12", "medelling");

//persona1.mostrarDatos();
//persona2.mostrarDatos();
//persona3.mostrarDatos();
//persona4.mostrarDatos();
//persona5.mostrarDatos();

//persona1.mostrarDatos();
persona1.setNombre("Karol")
console.log(persona1.getNombre());
persona1.mostrarDatos();


persona2.setEdad(15)
console.log(persona2.getEdad());
persona2.mostrarDatos();

persona2.mayorOmenor();
persona5.mayorOmenor();





