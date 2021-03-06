export interface Paciente {
    _id?: string,
    nome: string,
    cpf: string,
    idade: number,
    telefone?: string,
    email?: string,
    sexo: string,
    peso?: number,
    altura?: number,
    endereco?: {
        rua: string,
        numero: number,
        bairro: string,
        cidade: string
    }
}