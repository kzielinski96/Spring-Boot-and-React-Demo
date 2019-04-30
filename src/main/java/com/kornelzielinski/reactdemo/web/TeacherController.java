package com.kornelzielinski.reactdemo.web;

import com.kornelzielinski.reactdemo.model.Teacher;
import com.kornelzielinski.reactdemo.repos.TeacherRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.Collection;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class TeacherController {

    private Logger log = LoggerFactory.getLogger(TeacherController.class);

    @Autowired
    private TeacherRepository repository;

    public TeacherController(TeacherRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/teachers")
    public Collection<Teacher> teachers() {
        return repository.findAll();
    }

    @GetMapping("/teacher/{id}")
    public ResponseEntity<?> getStudent (@PathVariable Long id) {
        Optional<Teacher> teacher = repository.findById(id);
        return teacher.map(response -> ResponseEntity.ok().body(response))
                .orElse(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

    @PostMapping("/teacher")
    public ResponseEntity<?> createTeacher (@Valid @RequestBody Teacher teacher) throws URISyntaxException {
        log.info("Request to create teacher: {}", teacher);
        Teacher result = repository.save(teacher);
        return ResponseEntity.created(new URI("/api/teacher" + result.getId())).body(result);
    }

    @PutMapping("/teacher")
    ResponseEntity<Teacher> updateTeacher (@Valid @RequestBody Teacher teacher) {
        log.debug("Request to update teacher: {}", teacher);
        Teacher result = repository.save(teacher);
        return ResponseEntity.ok().body(result);
    }

    @DeleteMapping("/teacher/{id}")
    public ResponseEntity<?> deleteTeacher (@PathVariable Long id) {
        log.info("Request to delete teacher: {}", id);
        repository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
