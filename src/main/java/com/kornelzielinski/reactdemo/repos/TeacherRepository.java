package com.kornelzielinski.reactdemo.repos;

import com.kornelzielinski.reactdemo.model.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository  extends JpaRepository<Teacher, Long> {
    Teacher findByName(String name);
}
