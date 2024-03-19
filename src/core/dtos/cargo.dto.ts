import { IsString } from "class-validator";

export class CargoDto {
  
  @IsString({ message: "El $property debe ser un texto" })
  nombre: string;

}