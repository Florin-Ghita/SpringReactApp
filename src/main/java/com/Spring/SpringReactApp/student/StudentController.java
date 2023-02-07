package com.Spring.SpringReactApp.student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;
@RestController
@RequestMapping("students")
public class StudentController {
    @GetMapping

    public List<Student> getAllStudents(){
        return List.of(
                new Student(UUID.randomUUID(),
                        "George",
                        "Geo",
                        "george@email.com",
                        Student.Gender.MALE),
                new Student(
                        UUID.randomUUID(),
                        "Elisa",
                        "Andreea",
                        "elisa@email.com",
                        Student.Gender.FEMALE)
        );
    }
}
