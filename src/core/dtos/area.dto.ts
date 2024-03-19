import { IsString } from "class-validator";

export class AreaDto {
  
  @IsString({ message: "El $property debe ser un texto" })
  nombre: string;

}