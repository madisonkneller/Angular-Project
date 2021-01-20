import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-namesList',
  templateUrl: './namesList.component.html',
  styleUrls: ['./namesList.component.css'],
})
export class namesListComponent {
  testNames: any = [];
  searchText = '';
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get(
        'https://cors-anywhere.herokuapp.com/https://neolth-public.s3.amazonaws.com/1005_names.txt',
        {
          responseType: 'text' as 'text',
        }
      )
      .subscribe((names) => {
        names = names.replace(/(\r\n|\n|\r)/gm, '');
        let finalArray = [];
        let pointer = 0;
        let namesArray = names.split('');
        for (let i = pointer; i < namesArray.length; i++) {
          if (/^[A-Z]/.test(namesArray[i])) {
            let currentName = '';
            currentName += namesArray[i];
            for (let j = i + 1; j < namesArray.length; j++) {
              if (/^[A-Z]/.test(namesArray[j])) {
                pointer = j;
                break;
              } else {
                currentName += namesArray[j];
              }
            }
            finalArray.push(currentName);
          }
        }
        this.testNames = finalArray;
      });
  }
}
