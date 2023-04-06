import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,searchstring:any){
    if(!searchstring)
    {
      return value;
    }
    const array=value.filter((item: any)=>item.name.toLowerCase().includes(searchstring.toLowerCase()) ||item.description.toLowerCase().includes(searchstring.toLowerCase()) 
    || item.status.toLowerCase().includes(searchstring.toLowerCase()) || item.rate.toLowerCase().includes(searchstring.toLowerCase()) ||item.balance.toLowerCase().includes(searchstring.toLowerCase())
    );
    return array
  }

}
