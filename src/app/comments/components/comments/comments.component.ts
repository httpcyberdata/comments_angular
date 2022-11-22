import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../types/comment.interface';
@Component({
	selector: 'comments',
	templateUrl: './comments.component.html'
})
export class CommentsComponent {
	@Input() currentUserId!: string;

	comments: CommentInterface[] = [];

	constructor(private commentsService: CommentsService) {}
		ngOnInit(): void {
			this.commentsService.getComments().subscribe(comments => {
				this.comments = comments;
			})
		}

		addComment({ text, parentId}: {text: string, parentId: null | string}): void {
			console.log('addComment', text, parentId)
			this.commentsService.createComment(text, parentId).subscribe(createdComment => {
				this.comments = [...this.comments, createdComment];
			})
		}

}