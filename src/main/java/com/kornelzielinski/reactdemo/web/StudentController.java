package com.kornelzielinski.reactdemo.web;

import com.kornelzielinski.reactdemo.model.Student;
import com.kornelzielinski.reactdemo.repos.StudentRepository;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

import org.slf4j.Logger;

import javax.validation.Valid;

@RestController
@RequestMapping("/api")
public class StudentController {

    private Logger log = LoggerFactory.getLogger(StudentController.class);
    @Autowired
    private StudentRepository repository;

    public StudentController (StudentRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/students")
    public Collection<Student> students() {
        return repository.findAll();
    }

    @GetMapping("/student/{id}")
    public ResponseEntity<?> getStudent(@PathVariable Long id) {
        Optional<Student> student = repository.findById(id);
        return student.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/student")
    public ResponseEntity<?> createStudent(@Valid @RequestBody Student student) throws URISyntaxException {
        log.info("Request to create student: {}", student);
        Student result = repository.save(student);
        return ResponseEntity.created(new URI("/api/student" + result.getId())).body(result);
    }

    @PutMapping("/student")
    ResponseEntity<Student> updateStudent(@Valid @RequestBody Student student) {
        log.debug("Request to update student: {}", student);
        Student result = repository.save(student);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/student/{id}")
    public ResponseEntity<?> deleteStudent(@PathVariable Long id) {
        log.info("Request to create student: {}", id);
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
