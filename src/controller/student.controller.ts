import { Controller, Get, Put, Delete, Post, Param, Body } from '@nestjs/common';
import { StudentService } from 'src/services/student.services';
import { StudentDTO } from '../DTO/student.dto';

@Controller('student')
export class StudentController {
    constructor(private _student: StudentService) { }

    @Get()
    async getAllStudents() {
        return await this._student.getAllStudent();
    }

    @Post()
    async insertStudent(@Body() stud: StudentDTO) {
        return await this._student.InsertStudent(stud);
    }

    @Put(':id')
    async updateStudent(@Param('id') id: string, @Body() stud: StudentDTO) {
        return await this._student.updateStudent(id, stud);
    }

    @Delete(':id')
    async deleteStudent(@Param('id') id: string) {
        return await this._student.deleteStudent(id);
    }
}