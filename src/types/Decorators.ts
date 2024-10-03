export function ValidaDebito(target: any, proprertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;

    descriptor.value = function(valorDoDebito: number) {

        if (valorDoDebito <= 0) {
            throw new Error("O valor á ser debitado deve ser maior que zero");
        }

        if (valorDoDebito > this.saldo) {
            throw new Error("Saldo insuficiente para realizar a operação");
        }
        return originalMethod.apply(this, [valorDoDebito]);
    }
    return descriptor;

}


export function validaDeposito(target: any, proprertyKey: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;
    descriptor.value = function(valorDoDeposito: number) {
         if(valorDoDeposito <= 0) {
            throw new Error("o valor a ser depositado deve ser maior que zero");
         }
         return originalMethod.apply(this, [valorDoDeposito]);
    }
    return descriptor;
}