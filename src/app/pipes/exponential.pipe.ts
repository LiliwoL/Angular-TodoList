import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  // Méthode qui prend en entrée un  nombre, et en paramètre son exposant et qui renvoie le résultat
  transform(value: number, exponent: number): number {
    // Test

    // Renvoi du résultat
    return Math.pow( value, isNaN(exponent) ? 1 : exponent );
  }

}
