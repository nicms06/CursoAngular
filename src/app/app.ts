import { Component, signal } from '@angular/core';
import { Test1 } from './test1/test1';
import { Test2 } from './test2/test2';

@Component({
  selector: 'app-root',
  imports: [Test1, Test2],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  standalone: true
})
export class App {
  protected readonly title = signal('cursoangular');

  constructor() {
    // .map(): Crea y devuelve un nuevo array transformando cada elemento.
    // En este caso, devuelve una copia exacta: [1, 2, 3, 4, 5, 6]
    const testMap = [1, 2, 3, 4, 5, 6].map(item => item);
    console.log(testMap);

    // .forEach(): Ejecuta una función para cada elemento pero NO devuelve nada.
    // Resultado: undefined (se usa solo para efectos secundarios como guardar en BD o logs)
    const testForeach = [1, 2, 3, 4, 5, 6].forEach(item => item);
    console.log(testForeach);

    // .find(): Devuelve el primer elemento que cumpla la condición.
    // Si no encuentra ninguno, devolvería undefined. Resultado: 4
    const testFind = [1, 2, 3, 4, 5, 6].find(item => item === 4);
    console.log(testFind);

    // .filter(): Crea un nuevo array con todos los elementos que cumplan la condición.
    // Resultado (solo pares): [2, 4, 6]
    const testFilter = [1, 2, 3, 4, 5, 6].filter(item => item % 2 === 0);
    console.log(testFilter);
    
    // .findIndex(): Devuelve el índice del PRIMER elemento que cumpla la condición.
    // Es ideal para arrays de objetos o condiciones complejas. Resultado: 2
    const testIndex = [6, 8, 3, 10, 3].findIndex(item => item === 3);
    console.log(testIndex);

    // .indexOf(): Devuelve el primer índice donde se encuentra un valor específico.
    // Más simple y rápido si solo buscas un valor primitivo (número o string). Resultado: 2
    const testIndexOf = [6, 8, 3, 10, 3].indexOf(3);
    console.log(testIndexOf);

    // .join(): convierte el array en cadena y podemos separar los valores (en este caso por comas).
    // Resultado: 1, 2, 3, 4, 5, 6
    const testJoin = [1, 2, 3, 4, 5, 6].join(', ');
    console.log(testJoin);

    // .split(): Divide un string en un array de sub-strings basándose en un separador.
    // Resultado: ["1", " 2", " 3", " 4", " 5", " 6"] (Ojo: mantiene los espacios si no los quitas)
    const testSplit = '1, 2, 3, 4, 5, 6'.split(',');
    console.log(testSplit);

    // .splice(inicio, cantidad): Cambia el contenido de un array eliminando o reemplazando elementos.
    // IMPORTANTE: Devuelve un array con los elementos eliminados.
    // En este caso, empieza en el índice 1 y quita 2 elementos. Resultado: [2, 3]
    const testSplice = [1, 2, 3, 4, 5, 6].splice(1, 2);
    console.log(testSplice);

    // .reduce(): Reduce el array a un único valor (en este caso, una suma).
    // El 'acc' (acumulador) guarda el resultado parcial y 'value' es el elemento actual.
    // Proceso: 1+2=3, 3+3=6, 6+4=10, 10+5=15, 15+6=21. Resultado: 21
    const testReduce = [1, 2, 3, 4, 5, 6].reduce((acc, value) => acc + value);
    console.log(testReduce);

    // Object.entries(): Convierte un objeto en un array de arrays.
    // Cada sub-array contiene el par [clave, valor].
    // Resultado: [ ["value", "Nicolás"], ["key", "RPC"] ]
    const testEntries = {value: 'Nicolás', key:'RPC'};
    console.log('a ->', Object.entries(testEntries));
    console.log('b ->', Object.keys(testEntries)); // Solo devuleve nombre de las claves: ["value", "key"]
    console.log('c ->', Object.values(testEntries));  // Solo devuelve los valores: ["Nicolás", "RPC"]

    const array1 = [1, 2, 3, 4, 5];
    const array2 = [4, 5, 6, 7, 8, ...array1]; // El operador spread (...) "descompone" el array1 y lo inserta dentro del nuevo array2.
    console.log(array2);

    const a = {1: 'a', 2: 'a', 3: 'a',  4: 'a', 5: 'a', 6: 'a'};
    const b = Object.keys(a).map(n => parseInt(n)).reduce((acc, value) => {
      if (value % 2 === 0){
        acc += value;
      }
      return acc;
    }, 0);
    console.log('aaa', b)
  }

  printDataTest1(event:{name:string, status:string}){
    console.log('Componente: ', event);
  }

  printData(event: any){
    console.log('CHILD COMP DATA: ', event);
  }
}
