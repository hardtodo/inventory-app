import{Component} from '@angular/core';

@Component
({
    selector:'student-list',
    template: 
    `
    <student [name]="studentNames[0]"(studentSelected)="studentSelected($event)"></student>
    `
})
export class StudentList{
    studentNames = ['张三','李四','王五'];
    constructor(){

    }
    studentSelected(name:string)
    {
        console.log('选中的学生：'+name);
    }
}
