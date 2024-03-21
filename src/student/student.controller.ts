import { Controller, Get,Put,Delete,Post ,Param,Body} from '@nestjs/common';
import { StudentDTO } from 'src/DTO/student.dto';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController 
{
    constructor(private _student:StudentService){}

    @Get()
    getAllStudents(){
       return this._student.getAllStudents();
    }
    @Post()
    InsertStudent( @Body() stud:StudentDTO){
        this._student.insertStudent(stud);

    }
    @Put(':id')
    updateStudent(@Param('id')id:Number,@Body()stud:StudentDTO){
       return this._student.updateStudent(id,stud);
    }
    @Delete(':id')
    deleteStudent(@Param('id')id:Number){
       return this._student.deleteStudent(id);
    }

    



}
