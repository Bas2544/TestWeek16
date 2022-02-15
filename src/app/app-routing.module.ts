import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{book}
import { MainComponent } from './components/pages/main/main.component';
import { BookAddComponent } from './components/pages/book-add/book-add.component';
import { BookComponent } from './components/pages/book/book.component';

const routes: Routes = [
    { path: "", component: MainComponent },
    { path: "book",  component: BookComponent },
    { path: "book/add", component: BookAddComponent },
    { path: "book/edit/:id", component: BookEditComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
