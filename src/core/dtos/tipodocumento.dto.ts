import { IsString } from "class-validator";

export class TipodocumentoDto {
  
  @IsString({ message: "El $property debe ser un texto" })
  nombre: string;

}