package com.Spring.SpringReactApp.student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudentService {
    private final StudentDataAccesService studentDataAccesService;
    @Autowired
    public StudentService(StudentDataAccesService studentDataAccesService) {
        this.studentDataAccesService = studentDataAccesService;
    }


    public List<Student> getAllStudents(){
        return studentDataAccesService.selectAllStudents();
    }


}
