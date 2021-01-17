// import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Component({
//   selector: 'app-nameList',
//   templateUrl: './nameList.component.html',
// })
// export class nameListComponent {
//   testNames = ['Madison', 'Grace'];
//   constructor(private http: HttpClient) {}
//   ngOnInit(): void {
//     this.http
//       .get(
//         'https://cors-anywhere.herokuapp.com/https://neolth-public.s3.amazonaws.com/1005_names.txt',
//         {
//           responseType: 'text' as 'json',
//         }
//       )
//       .subscribe((data) => {
//         console.log(data);
//       });
//   }
// }
