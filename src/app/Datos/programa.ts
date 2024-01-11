import { Estudiante } from "./Estudiante";

export interface Programa {
    id: string;
    nombre: string;
    estudiantes: Estudiante[];
}
    