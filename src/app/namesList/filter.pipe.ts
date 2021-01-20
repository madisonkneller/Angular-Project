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
