// import { Pipe, PipeTransform, Input } from '@angular/core';
// import { Board } from './board';
// import { List } from './list';
// import { FirebaseListObservable } from 'angularfire2/database';
//
// @Pipe({
//     name: 'boardIdPipe',
//     pure: false
// })
//
// export class BoardIdPipe implements PipeTransform {
//   transform(input: FirebaseListObservable<List[]>, board): any {
//     let output: FirebaseListObservable<List[]> = null;
//     for(let i = 0; i < Object.keys(input).length; i++) {
//         if(input[i].boardId === board.$key) {
//             output.push(input[i]);
//         }
//     }
//     return output;
//   }
// }
