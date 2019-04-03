package com.kornelzielinski.reactdemo.repos;

import com.kornelzielinski.reactdemo.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository  extends JpaRepository<Student, Long> {
    Student findByName(String name);
}
