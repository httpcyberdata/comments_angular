import { Component, Input, OnInit } from '@angular/core';
import { CommentInterface } from '../../types/comment.interface';
@Component({
	selector: 'comment',
	templateUrl: './comment.component.html',
	styles: ['.comment-action:hover { text-decoration: underline; cursor: pointer;}']
})

export class CommentComponent implements OnInit {
	@Input() currentUserId!: string;
	@Input() replies!: CommentInterface[];

	canReply: boolean = false;
	canEdit: boolean = false;
	canDelete: boolean = false;

	@Input() comment!: CommentInterface;

	ngOnInit(): void {
		const fiveMinutes = 300000;
		const timePassed = 
			new Date().getMilliseconds() -
			 new Date(this.comment.createdAt).getMilliseconds() >
			  fiveMinutes;
		
		this.canReply = Boolean(this.currentUserId);
		this.canEdit = this.currentUserId === this.comment.userId && !timePassed;
		this.canEdit = this.currentUserId == this.comment.userId && 
			!timePassed && this.replies.length === 0;


	}
}