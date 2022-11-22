import { Component, Input } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
@Component({
	selector: 'comment-form',
	templateUrl: './commentForm.component.html'
})

export class CommentFormComponent {
	@Input() submitLabel!: string;
	@Input() hasCancelButton: boolean = false;
	@Input() initialText: string = '';
	form!: FormGroup;

	constructor(private fb: FormBuilder) {}

	ngOnInit(): void {
		this.form = this.fb.group({
			title: [this.initialText, Validators.required]
		})
	}
	onSubmit(): void {
		console.log('onSubmit', this.form.value)
	}
}