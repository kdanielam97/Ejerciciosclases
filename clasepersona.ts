export class Persona {
    private nombre:string
    private edad:number
    private telefono:string
    private direccion:string
    private ciudad:string

    constructor(nombre:string, edad:number, telefono:string, direccion:string, ciudad:string) {
        this.nombre = nombre
        this.edad = edad
        this.telefono = telefono
        this.direccion = direccion
        this.ciudad = ciudad
}

    public getNombre(){
        return this.nombre
    }
    public getEdad(){
        return this.edad
    }
    public getTelefono(){
        return this.telefono
    }
    public getDireccion(){
        return this.direccion
    }
    public getColorgetCiudad(){
        return this.ciudad
    }

    public setNombre(nombre:string){
            this.nombre = nombre
        }
    public setEdad(edad:number){
            this.edad = edad
        }
    public setTelefono(telefono:string){
            this.telefono = telefono
    }
    
    public setDireccion(direccion:string){
                    this.direccion = direccion 
        }
    public setCiudad(ciudad:string){
            this.ciudad = ciudad
        }
    public mostrarDatos(){
        console.log("mi nombre es "  +  this.nombre + " tengo "  + this.edad  + " años "  + " mi telefono es " + this.telefono +  " mi direccion es " + this.direccion + " y vivo en la ciudad de " + this.ciudad )
    }

    public mayorOmenor(){
        if (this.edad >= 18 ) {
            console.log("es mayor de edad")
            
        } else {
            console.log("es menor de edad")
            
        }
        
    }
}