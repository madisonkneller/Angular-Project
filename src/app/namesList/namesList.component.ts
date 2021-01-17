import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-namesList',
  templateUrl: './namesList.component.html',
})
export class namesListComponent {
  testNames: any = {};
  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    this.http
      .get(
        'https://cors-anywhere.herokuapp.com/https://neolth-public.s3.amazonaws.com/1005_names.txt',
        {
          responseType: 'text' as 'json',
        }
      )
      .subscribe((names) => {
        console.log(names);
        let nameString = Object.values(names);
        console.log(nameString);
        this.testNames = names;
      });
  }
}
