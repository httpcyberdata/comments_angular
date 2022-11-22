import { NgModule } from  '@angular/core';
import { CommentsComponent } from './components/comments/comments.component'
import { CommentsService } from './services/comments.service';
@NgModule({
	declarations: [CommentsComponent],
	exports: [CommentsComponent],
	providers: [CommentsService]
})

export class CommentsModule {

}