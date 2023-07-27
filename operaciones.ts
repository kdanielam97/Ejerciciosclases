export class Operaciones {
    private numero1: number
    private numero2: number
    
    constructor(numero1: number, numero2: number){
        this.numero1 = numero1
        this.numero2 = numero2

    }
    public getNumero1(){
        return this.numero1
    }
    public getNumero2(){
        return this.numero2
    }
    public setNumero1(numero1: number){
        this.numero1 = numero1
    }
    public setNumero2(numero2: number){
        this.numero2 = numero2
    }

    public mostrarSuma():number{
        return this.numero1 + this.numero2
    }
    public mostrarResta():number{
        return this.numero1 - this.numero2
    }
    public mostrarMultiplicacion():number{
        return this.numero1 * this.numero2
    }
    public mostrarDivision():number{
        return this.numero1 / this.numero2
    }
}

  
