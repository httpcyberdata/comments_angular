import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommentInterface } from '../types/comment.interface';
@Injectable()
export class CommentsService {
	constructor(private httpClient: HttpClient) {}

	getComments(): Observable<CommentInterface[]> {
		return this.httpClient.get<CommentInterface[]>('http://localhost:3000/comments')
	}

	createComment(text: string, parentId: null|string): Observable<CommentInterface> {
		return this.httpClient.post<CommentInterface>(
		'http://localhost:3000/comments', 
		{
			body: text,
			parentId,
			createdAt: new Date().toISOString(),
			userId: '1',
			username: 'John',
		}
	  );
	};
	updateComment(id: string, text: string): Observable<CommentInterface> {
		return this.httpClient.patch<CommentInterface>(
			`http://localhost:3000/comments/${id}`,
			{
				body: text
			}
		)
	}
 }