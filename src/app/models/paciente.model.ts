import { Deserializar } from "./deserializar.model"
import { Image } from "./image.model";

export class Paciente implements Deserializar{
    deserilize(data: any): this {
        Object.assign(this, data);
        return this
    }
    nome = ''
    cpf = 0 
    idade = 0
    peso = 0
    data_pesagem = ''
    circusntancia_medica = ''
    tipo_sanguineo = ''
    circunstancia_paciente = ''
    altura = 0 
    foto = new Array<Image>

}