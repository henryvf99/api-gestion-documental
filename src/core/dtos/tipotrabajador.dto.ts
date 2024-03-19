import { IsString } from "class-validator";

export class TipotrabajadorDto {
  
  @IsString({ message: "El $property debe ser un texto" })
  nombre: string;

}