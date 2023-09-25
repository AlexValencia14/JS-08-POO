/*
Paradigma
Estructarado
Instancia
Plantilla


Paradigma de programacion


Paradigma = la forma de hacer algo

Paradigma de programacion = la forma de programar, la forma de dar soluciones a problemas que se nos presentan.


Paradigmas de programacion (formas de programar)

    - Programacion imperativa: Basada en instrucciones detalladas a la computadora, ejecutadas en una secuencia determinada (C, C++, Java, Python, Swift, JS)

    - Programacion basada en eventos: Enfocada en la gestion y respuesta de eventos (JS, C#, Python)

    - Programacion declarativa: Explicar lo que necesitamos obtener, mas que como se hace (HTML, SQL)

    - Programacion Orientada a Objetos: Toma ejemplos del mundo real (objetos), comprende sus caracteristicas (propiedades o atributos) y con base en su comportamiento o acciones (metodos), resolvemos problemas reales.

    Clase: plantillas para crear objetos. Nos ayudan a definir un tipo de objeto y crar instancias (materializacion) de este tipo de objetos.

    //Mostar un objeto similar a este
let Alejandro={
    nombre:"Alejandro",
    apellido:"Valencia",
    edad:24,
    email:"alejandrovalencia18@live.com.mx", 
    telefono:
}

*/

//Creando mi primera clase
class persona{

    //1. propiedades o atributos de mi clase de forma general
    nombre="";
    apellido="";
    edad=0;
    email="";
    telefono="";


    //3. Defino un constructor que tomara los atributos como "material" para la instancia o creacion de mis objetos
    //El constructor es una funcion especial, cuya funcion es la de construir o instanciar objetos
    //Al pasar los atributos como parametros es importante cuidar el orden en como fueron declaradas
    constructor(nombre, apellido, edad, email, telefono){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.email=email;
        this.telefono=telefono;
    }


    //2. Metodos o comportamientos (funciones)
    //para definir los metodos de mi objeeto, ya no utilizo la palabra function (porque estan dentro de una clase)
    hablar(){
        console.log("Hola, estoy hablando...");
    }//cierre de metodo hablar

    dormir(){
        console.log("zzzz...");

    }//cierre de mi metodo dormir

    mostrarInfo(){
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Edad: ", this.edad);
        console.log("Email: ", this.email);
        console.log("Telefono: ", this.telefono);

    }//Cierre de metodo mostrarInfo

}//Cierre de mi clase persona


/*Instancia de objetos del tipo persona

Sintaxis basica de una instancia

variables nombreObjeto= palabra reservada new nombreClase (parametros o atributos)
*/

let persona1= new persona("Alejandro","Valencia", 24, "alejandrovalencia18@live.com.mx","2411353036");
let persona2=new persona("Naruto", "Uzumaki", 22, "naruto@hokae.com", "1234567890");
let persona3 =new persona("Felipe", "Manqueda", 31, "felipemanqueda@mail.com","5512345678");

console.log(persona1);


//imprimir atributo de un objeto (apellido)
console.log(persona1.apellido);

//invocar el metodo del objeto
persona1.dormir();
persona2.mostrarInfo();



/*
Existen 4 pilares de la POO que nos permiten ampliar las caracteristicas y dotar de funcionalidades y operaciones a nuestro codigo.

    - Herencia
    - Polimorfismo
    - Encapsulamiento
    - Abstracción


*/

//Creando una nueva clase para aplicar la herencia

class paciente extends persona{
    //1. Definición de atributos o propiedades
    doctorAtiende="";//nombre del doctor que atiende
    historialMedico="";//si o no el historial
    alergias="";//alergias existentes

    //3. Generación del constructor
    constructor (nombre, apellido, edad, email, telefono, doctorAtiende, historialMedico, alergias){
        super(nombre, apellido, edad, email, telefono); //super indica que traemos cosas de la clase superior
        this.doctorAtiende=doctorAtiende;
        this.historialMedico=historialMedico;
        this.alergias=alergias;

    }

    //2. Metodos
    mostrarInfo(){
        // console.log("Nombre: " , this.nombre);
        // console.log("Apellido: " , this.apellido);
        // console.log("Edad: " , this.edad);
        // console.log("Email: " , this.email);
        // console.log("Telefono: " , this.telefono);
        console.log("Doctor que atiende: " , this.doctorAtiende);
        console.log("Historial Medico: " , this.historialMedico);
        console.log("Alergias: " , this.alergias);
    }


}

//Instancias de un paciente
let paciente1=new paciente("Jesus", "Gonzalez", 31,"jesusgonzalez@gmail.com","55987654321", "Doctor Simi","No tiene", "Penicilina");

//imprimir objeto paciente
console.log(paciente1);

paciente1.mostrarInfo();



//Diferencias entre un objeto literal (normal) y un objeto tipo JSON

//todas las claves y valores van dentro de comillas
//Todas las claves y los valores van dentro de comillas
let objetoJSON = {
    "nombre": "Jesus",
    "apellido": "Gonzalez",
    "edad": 31,
    "email": "jesusgonzalez@mail.com",
    "telefono": "55987654321",
    "doctorAtiende": "Doctor Simi",
    "historialMedico": "No tiene",
    "alergias": "Penicilina"
}


//Tratar la información y sacar datos especificos del DOM
let objetoLiteral = {
    nombre: "Jesus",
    apellido: "Gonzalez",
    edad: 31,
    email: "jesusgonzalez@mail.com",
    telefono: "55987654321",
    doctorAtiende: "Doctor Simi",
    historialMedico: "No tiene",
    alergias: "Penicilina"
}

//Tenemos un objeto serializado (enviar a un)


/*

Realizar un programa que conste de una clase llamada Alumno, que tenga como atributos el nombre y la nota del alumno. Definir metodos para inicizializar sus atributos (metodo constructor), imprimirlos y mostar un mensaje con el resultado de la nota si ha aprobado o no.

    Atributos:
        - nombre
        - nota (calificación)
    Metodos:
        - constructor
        - Metodo evaluacion (si aprueba o no)
        - Metodo imprimirInfo (nombre y nota)
    Logica del negocio:
        - If para evaluar la nota (si la nota es menor a 6, esta reprobado)
        - Recuperamos la información por medio de un prompt
        - Generamos 3 instacias para probar mi codigo (la nota sea igual a 6, la nota sea menor a 6, la nota sea mayor a 6)

*/

//Creacion de la clase (3 pasos)

class alumno{
    //1. atributos y propiedades
    nombre;
    nota;
 
    //3. Constructor donde le di identidad a mi objeto (id)
    constructor (nombre, nota){
        this.nombre=nombre;
        this.nota=nota;
    }

    //2. Metodos
    //Metodo general, un metodo que no requiere personalizacion porque aplica para cualquier objeto
    evaluacion(nota){
        if (nota>=6){
            console.log("Aprobado");
        } else{
            console.log("Reprobado");
        }
    }

    
    imprimirInfo(){
        console.log("Nombre del alumno: ", this.nombre);
        console.log("Nota del alumno: ",this.nota);
    }


}

//instancias de alumnos
let alumno1=new alumno("Alex", 3); //reprobado
let alumno2=new alumno("Alex", 8); //aprobado
let alumno3=new alumno("Alex", 6); //aprobado

//invocacion metodos
alumno1.evaluacion(alumno1.nota);
alumno2.evaluacion(alumno2.nota);
alumno3.evaluacion(alumno3.nota);
