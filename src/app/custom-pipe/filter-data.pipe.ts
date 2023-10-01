import { Pipe, PipeTransform } from '@angular/core';
import { allPeople } from '../people';

@Pipe({
  name: 'filterData',
  pure:false
})
export class FilterDataPipe implements PipeTransform {

  transform(value: allPeople[], ...args: string[]): allPeople[] {
    if(value.length==0||args[0]=='')return value;
    return value.filter((eachPeople)=>eachPeople.country.toLowerCase()==args[0].toLowerCase());
  }

}
