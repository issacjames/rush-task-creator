import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-task-creator-view',
	templateUrl: './task-creator-view.component.html',
	styleUrls: ['./task-creator-view.component.scss']
})
export class TaskCreatorViewComponent implements OnInit {

	@Input() data;
	@Input() profiles;

	urlParams: string[] = [
		'OnePerProfile',
		'DynDelay',
		'V6Proxy',
		'RotateProxy'
	];

	urlParamMappings = {
		'OnePerProfile' : 'oneperprof=1',
		'DynDelay' : 'dyndelay=1',
		'V6Proxy' : 'v6=1',
		'RotateProxy' : 'rotate=1'
	}



	taskCreatorForm: FormGroup;

	task = '';

	constructor(private formBuilder: FormBuilder) { }

	ngOnInit(): void {
		this.createTaskCreatorForm();
	}

	createTaskCreatorForm() {
		this.taskCreatorForm = this.formBuilder.group({
			Name: 			[''],
			Site: 			[''],
			Sku: 			['54724074'],
			OnePerProfile: 	[false],
			DynDelay: 		[false],
			V6Proxy: 		[false],
			RotateProxy: 	[false],
			Count: 			[4],
			Profile: 		['Footsite'],
			ProxyGroup: 	['proxywow'],
			SizeRange:		[],
			
			Task:			['']
			
		});

		this.taskCreatorForm.valueChanges.subscribe(
			result => {
				if (this.canCreateTask()) { this.createTask(); }
				console.log(this.task)

			}

		);
		
	}

	createTask() {
		const additonalParams = this.createAdditionalParams();

		this.task = `task add --url https://www.${this.taskCreatorForm.get('Site').value}.com/~/${this.taskCreatorForm.get('Sku').value}.html${additonalParams}`

		// Profile
		let profile = (this.taskCreatorForm.get('Profile').value === '' ? `` : `--profile ${this.taskCreatorForm.get('Profile').value}*`);
		this.task = this.task + ' ' + profile

		// Count
		let count = (this.taskCreatorForm.get('Count').value === null ? `` : `--count ${this.taskCreatorForm.get('Count').value}`);
		this.task = this.task + ' ' + count

		// Proxy-Group
		let proxyGroup = (this.taskCreatorForm.get('ProxyGroup').value === '' ? `` : `--proxy-group ${this.taskCreatorForm.get('ProxyGroup').value}`);
		this.task = this.task + ' ' + proxyGroup

		// Size-Range
		let size = (this.taskCreatorForm.get('SizeRange').value === '' ? `` : `--size "${this.taskCreatorForm.get('SizeRange').value}"`);
		this.task = this.task + ' ' + size

	}

	canCreateTask() {
		return  (this.taskCreatorForm.get('Site').value !== '') &&
				(this.taskCreatorForm.get('Sku').value !== '');
	}

	createAdditionalParams() {
		let params = [];
		for (let param of this.urlParams) {
			if (this.taskCreatorForm.get(param).value !== false) {
				let optionOrAdditional = this.getCorrectParam(params);
				params.push(optionOrAdditional + this.urlParamMappings[param]);
			}
		}
		return params.join('')
	}

	getCorrectParam(params: string[]) {
		return (params.length === 0 ? '?' : '&')
	}

}
