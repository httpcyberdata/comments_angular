import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
	selector: 'comment-form',
	templateUrl: './commentForm.component.html'
})

export class CommentFormComponent {
	@Input() submitLabel!: string;
	@Input() hasCancelButton: boolean = false;
	@Input() initialText: string = '';

	@Output() handleSubmit = new EventEmitter<string>();
	form!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			title: [this.initialText, Validators.required]
		})
	}
	onSubmit(): void {
		this.handleSubmit.emit(this.form.value.title);
	}
}