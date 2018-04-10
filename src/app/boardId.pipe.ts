// import { Pipe, PipeTransform, Input } from '@angular/core';
// import { Board } from './board';
// import { List } from './list';
//
// @Pipe({
//     name: 'boardId',
//     pure: false
// })
//
// export class BoardIdPipe implements PipeTransform {
//     transform(input: List[]) {
//         @Input() board: Board;
//         console.log(input);
//
//         let output: List[] = [];
//         for(let i = 0; i < Object.keys(input).length; i++) {
//             if(input[i].boardId === this.board.$key) {
//                 output.push(input[i]);
//             }
//         }
//         return output;
//     }
// }
