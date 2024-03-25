import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Student } from '../schema/student.schema';
import { StudentDTO } from '../DTO/student.dto';

@Injectable()
export class StudentService {
  constructor(@InjectModel(Student.name) private studentModel: Model<Student>) {}

  async getAllStudent(): Promise<Student[]> {
    return this.studentModel.find().exec();
  }

  async InsertStudent(createStudentDto: StudentDTO): Promise<Student> {
    const createdStudent = new this.studentModel(createStudentDto);
    return createdStudent.save();
  }

  async updateStudent(id: string, body: StudentDTO): Promise<Student> {
    return this.studentModel.findOneAndUpdate({ id: id }, body, { new: true }).exec();

  }

  async deleteStudent(id: string): Promise<unknown> {
    return this.studentModel
      .deleteOne({ id: id })
      .exec();
  }

}
