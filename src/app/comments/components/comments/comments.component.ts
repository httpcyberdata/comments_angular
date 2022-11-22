import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
@Component({
	selector: 'comments',
	templateUrl: './comments.component.html'
})
export class CommentsComponent {
	@Input() currentUserId!: string;

	constructor(private commentsService: CommentsService) {}
		ngOnInit(): void {
			this.commentsService.getComments().subscribe(comments => {
				console.log('comments', comments)
			})
		}

}