import { Deserializar } from "./deserializar.model"

export class Image implements Deserializar{
    deserilize(data: any): this {
      Object.assign(this, data);
      return this
    }
    mimetype= ""
    size= 0
    title= ""
    url= ""
}