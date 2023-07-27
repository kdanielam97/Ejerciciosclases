export class Cuenta{
    private titular: string
    private valorActual: number
    
    constructor(titular: string, valorActual: number){
        this.titular = titular
        this.valorActual = valorActual

    }
    public getTitular(){
        return this.titular
    }
    public getValorActual(){
        return this.valorActual
    }
    public setTitular(titular: string){
        this.titular = titular
    }
    public setValorActual(valorActual: number){
        this.valorActual = valorActual
    }

    public mostrarDatos(){
        console.log("El titular es " + this.titular + "y su valor de cuenta es " + this.valorActual)
    }

    public ingresarCantidad(cantidad: number): number{
        if (cantidad < 0) {
            console.log("no es valido el valor")
            
        } else {
            this.valorActual += cantidad
            
        }
        return this.valorActual
    }

    public retirar(pedir: number){
        let valorAnterior = this.valorActual
        if (pedir > 0) {
            this.valorActual -= pedir
            
        } else {
            console.log("no es valido"); 
            
        }
    
        console.log(`valor inicial = ${valorAnterior} \n
        valor retirado = ${pedir} \n
        nuevo saldo =${this.valorActual}` );
        

    }
}