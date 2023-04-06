import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any,searchstring:any) {
    if(!searchstring)
    {
      return value;
    }
    const array=value.filter((item: any)=>item.fname.toLowerCase().includes(searchstring)  );
    return array
  }

}
