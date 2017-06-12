import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import {BooksComponent} from './books.component';
import {BookFormComponent} from './book-form/book-form.component';



const booksRoutes = [
    {path: '', component: BooksComponent, children: [
        {path: 'novo', component: BookFormComponent},
        //{path: ':id', component: BookDetailComponent},
        {path: ':id/editar', component: BookFormComponent}
    ]},

];

@NgModule({

    declarations: [

    ],
    imports: [
        RouterModule.forChild(booksRoutes)
    ],
    exports: [
        RouterModule
    ],
    providers: [

    ]

})
export class BooksRoutingModule{

}
