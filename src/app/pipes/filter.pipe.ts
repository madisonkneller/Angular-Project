// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({ name: 'filter' })
// export class FilterPipe implements PipeTransform {
//   transform(value: any, input: any): any {
//     if (input) {
//       return value.filter((val: any) => val.indexOf(input)) >= 0;
//     } else {
//       return value;
//     }
//   }
// }
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
