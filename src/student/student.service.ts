import { Injectable } from '@nestjs/common';
import { StudentDTO } from 'src/DTO/student.dto';

@Injectable()
export class StudentService {
    students: StudentDTO[] = [];
    constructor() {
        let stu1: StudentDTO = new StudentDTO;
        stu1.id = 1;
        stu1.name = 'efrat';
        stu1.classStud = 'a1';
        stu1.age = 10;

        let stu2: StudentDTO = new StudentDTO;
        stu2.id = 2;
        stu2.name = 'adina';
        stu2.classStud = 'b1';
        stu2.age = 20;

        let stu3: StudentDTO = new StudentDTO;
        stu3.id = 3;
        stu3.name = 'ayala';
        stu3.classStud = 'c1';
        stu3.age = 30;

        this.students.push(stu1);
        this.students.push(stu2);
        this.students.push(stu3);
    }
    getAllStudents(): StudentDTO[] {
        return this.students
    }
    insertStudent(stud:StudentDTO){
        this.students.push(stud)
        return "inserted";
    }
    updateStudent(id:Number,stud:StudentDTO){
        let index= this.students.findIndex(x=>x.id==id)
        if (index>=0){
            this.students[index] = stud 
            return "update"           
        }
        return "no have this id"

    }
    deleteStudent(id:Number)  {
        let index= this.students.findIndex(x=>x.id==id)
        if (index>=0){
            this.students.splice(index,1);
            return "deleted"
        }
        return "no have this id"
    }
}
