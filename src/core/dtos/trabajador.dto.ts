import { IsString } from "class-validator";

export class TrabajadorDto {
  @IsString({ message: "La $property debe ser un texto" })
  tipo: string;

  @IsString({ message: "La $property debe ser un texto" })
  nombres: string;

  //@IsInt({ message: "The $property must be a number" })
  @IsString({ message: "La $property debe ser un texto" })
  apellidos: string;

  //@IsInt({ message: "The $property must be a number" })
  @IsString({ message: "La $property debe ser un texto" })
  dni: string;

  @IsString({ message: "La $property debe ser un texto" })
  fnacimiento: string;

  //@IsInt({ message: "The $property must be a number" })
  @IsString({ message: "La $property debe ser un texto" })
  area: string;

  @IsString({ message: "La $property debe ser un texto" })
  cargo: string;

  @IsString({ message: "La $property debe ser un texto" })
  fingreso: string;
}