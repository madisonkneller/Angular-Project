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
// /**
//  * Transform
//  *
// //  * @param {any[]} items
// //  * @param {string} searchText
// //  * @returns {any[]}
//  */
// transform(items: any[], searchText: string): any[] {
//   if (!items) {
//     return [];
//   }
//   if (!searchText) {
//     return items;
//   }
//   searchText = searchText.toLocaleLowerCase();

//   return items.filter((it) => {
//     return it.toLocaleLowerCase().includes(searchText);
//   });
// }
// }

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'filter' })
export class FilterPipe implements PipeTransform {
  /**
   * Transform
   *
   * @param {any[]} items
   * @param {string} searchText
   * @returns {any[]}
   */
  transform(testNames: any[], searchText: string): any[] {
    if (!testNames) {
      return [];
    }
    if (!searchText) {
      return testNames;
    }
    searchText = searchText.toLocaleLowerCase();

    return testNames.filter((it) => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}
