import { IsString } from "class-validator";

export class MesDto {
  
  @IsString({ message: "El $property debe ser un texto" })
  nombre: string;

}