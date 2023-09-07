package com.Spring.SpringReactApp.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class StudentService {
    private final StudentDataAccesService studentDataAccesService;
    @Autowired
    public StudentService(StudentDataAccesService studentDataAccesService) {
        this.studentDataAccesService = studentDataAccesService;
    }


    List<Student> getAllStudents(){
        return studentDataAccesService.selectAllStudents();
    }

    void addNewStudent(Student student) {
        addNewStudent(null,student);
    }
    void addNewStudent(UUID studentId,Student student) {
        UUID newStudentId = Optional.ofNullable(studentId)
                .orElse(UUID.randomUUID());
        studentDataAccesService.insertStudent(newStudentId,student);
    }
}
