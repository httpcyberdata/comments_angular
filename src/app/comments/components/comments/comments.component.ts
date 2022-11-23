import { Component, Input, OnInit } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { CommentInterface } from '../../types/comment.interface';
import { ActiveCommentInterface } from '../../types/activeComment.interface';
@Component({
	selector: 'comments',
	templateUrl: './comments.component.html'
})
export class CommentsComponent {
	@Input() currentUserId!: string;

	comments: CommentInterface[] = [];
	activeComment: ActiveCommentInterface | null = null;

	constructor(private commentsService: CommentsService) {}
		ngOnInit(): void {
			this.commentsService.getComments().subscribe((comments) => {
				this.comments = comments;
			})
		}

		addComment({ text, parentId}: {text: string; parentId: null | string;}): void {
			console.log('addComment', text, parentId)
			this.commentsService.createComment(text, parentId).subscribe(createdComment => {
				this.comments = [...this.comments, createdComment];
			})
		}
		getReplies(commentId: string): CommentInterface[] {
			return this.comments.filter(comment => comment.parentId === commentId).sort((a,b) =>
			 new Date(a.createdAt).getMilliseconds() - 
			 new Date(b.createdAt).getMilliseconds()
			 )
		}

		setActiveComment(activeComment: ActiveCommentInterface | null): void {
			this.activeComment = activeComment
		} 

}