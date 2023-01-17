import { Pipe, PipeTransform } from '@angular/core';
import {BankEnum, BankGrids} from "../types/bank";
import {GridsEnum} from "../types/notes";

@Pipe({
  name: 'rhythmFilter',
  standalone: true
})
export class RhythmFilterPipe implements PipeTransform {

  transform(arr:  {key: GridsEnum, value: string}[], current: BankEnum): {key: GridsEnum, value: string}[] {
    const grid = BankGrids.get(current);
    if (!grid) throw Error();
    return arr.filter(({key}) => grid.includes(key));
  }

}
