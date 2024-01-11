import { Component } from '@angular/core';
import { PROGRAMAS } from '../../Datos/Programas';
import { Programa } from '../../Datos/programa';
import { Estudiante } from '../../Datos/Estudiante';
import { SaberPro } from '../../Datos/saberpro';
import { Saber11 } from '../../Datos/saber11';

@Component({
  selector: 'facultad-component',
  standalone: true,
  imports: [],
  templateUrl: './facultad.component.html',
  styleUrl: './facultad.component.css'
})
export class FacultadComponent {
  name: string = "Facultad de Ingeniería";
  programas = PROGRAMAS;
  estudiantesSeleccionados = [{id:"", nombre:"", saberPro: {lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0},saber11:{lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, cienciasNaturales: 0}}];
  programaSeleccionado: Programa = {id:"",nombre:"", estudiantes:[]};
  programaId: string = "";
  estudianteId: string = "";
  estudianteSeleccionado: Estudiante = { id:"", nombre: "", saberPro:{lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0}, saber11:{lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, cienciasNaturales: 0}};
  saberPro: SaberPro = {lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, comunicacionEscrita: 0};
  saber11: Saber11 = {lecturaCritica: 0, ingles: 0, ciudadanas: 0, razonamiento: 0, cienciasNaturales: 0};
  onChange(event: any) {
    this.programaId = event.target.value;
    this.buscarPrograma(this.programaId);
    console.log("El nombre del programa es: " + this.programaId);
  }

  mostrarIdEstudiante() {
    const selectElement = document.getElementById('estudiantes') as HTMLSelectElement;
    const idEstudianteElement = document.getElementById('idEstudianteSeleccionado');
    const saberProElement = document.getElementById('saberProInfo');
  
    // Obtén el valor seleccionado del estudiante
    const estudianteId = selectElement.value;
  
    // Encuentra el estudiante seleccionado
    const estudianteSeleccionado = this.estudiantesSeleccionados.find(estudiante => estudiante.id === estudianteId);
  
    // Muestra el ID del estudiante seleccionado
    if (idEstudianteElement) {
      idEstudianteElement.innerText = estudianteId;
    }
  
    // Muestra la información de SABER PRO
    if (saberProElement && estudianteSeleccionado) {
      saberProElement.innerHTML = `
        <table class="table table-borderless">
  <thead class="table-light">
    <tr>
      <th scope style="background-color: aqua;="col">Competencia</th>
      <th scope style="background-color: aqua;="col">Saber Pro</th>
      <th scope style="background-color: aqua;="col">%SaberPro</th>
      <th scope style="background-color: aqua;="col">Saber 11</th>
      <th scope style="background-color: aqua;="col">%Saber11</th>
      <th scope style="background-color: aqua;="col">%Variación = %SaberPro - %Saber 11</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Lectura Critica</th>
      <td>${estudianteSeleccionado.saberPro.lecturaCritica}</td>
      <td>${ (estudianteSeleccionado.saberPro.lecturaCritica / 80) * 100 }%</td>
      <td>${estudianteSeleccionado.saber11.lecturaCritica}</td>
      <td>${ (estudianteSeleccionado.saber11.lecturaCritica / 100) * 100 }%</td>
      <td>${ (((estudianteSeleccionado.saberPro.lecturaCritica / 80) * 100)- estudianteSeleccionado.saber11.lecturaCritica)}%</td>

    </tr>
    <tr>
      <th scope="row">Razonamiento cuantitativo</th>
      <td>${estudianteSeleccionado.saberPro.razonamiento}</td>
      <td>${ (estudianteSeleccionado.saberPro.razonamiento / 80) * 100 }%</td>
      <td>${estudianteSeleccionado.saber11.razonamiento}</td>
      <td>${ (estudianteSeleccionado.saber11.razonamiento / 100) * 100 }%</td>
      <td>${ (((estudianteSeleccionado.saberPro.razonamiento / 80) * 100)- estudianteSeleccionado.saber11.razonamiento)}%</td>

    </tr>
    <tr>
      <th scope="row">Inglés</th>
      <td>${estudianteSeleccionado.saberPro.ingles}</td>
      <td>${ (estudianteSeleccionado.saberPro.ingles / 80) * 100 }%</td>
      <td>${estudianteSeleccionado.saber11.ingles}</td>
      <td>${ (estudianteSeleccionado.saber11.ingles / 100) * 100 }%</td>
      <td>${ (((estudianteSeleccionado.saberPro.ingles / 80) * 100)- estudianteSeleccionado.saber11.ingles)}%</td>

    </tr>
    <tr>
    <th scope="row">Competencias ciudadanas</th>
    <td>${estudianteSeleccionado.saberPro.ciudadanas}</td>
    <td>${ (estudianteSeleccionado.saberPro.ciudadanas / 80) * 100 }%</td>
    <td>${estudianteSeleccionado.saber11.ciudadanas}</td>
    <td>${ (estudianteSeleccionado.saber11.ciudadanas / 100) * 100 }%</td>
    <td>${ (((estudianteSeleccionado.saberPro.ciudadanas / 80) * 100)- estudianteSeleccionado.saber11.ciudadanas)}%</td>
  </tr>
  </tbody>
</table>
      `;
    }    
  
  }
  buscarPrograma(programaId: string): void {
    for (let index = 0; index < this.programas.length; index++) {
      const element = this.programas[index];
      if (element.id == programaId) {
        this.programaSeleccionado = element;
        this.estudiantesSeleccionados = element.estudiantes;
        break;
      }
    }
  }


}



