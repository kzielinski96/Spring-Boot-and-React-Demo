package com.kornelzielinski.reactdemo;

import com.kornelzielinski.reactdemo.model.Student;
import com.kornelzielinski.reactdemo.model.Teacher;
import com.kornelzielinski.reactdemo.repos.StudentRepository;
import com.kornelzielinski.reactdemo.repos.TeacherRepository;
import com.kornelzielinski.reactdemo.web.StudentController;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ReactDemoApplicationTests {

	@Autowired
	StudentRepository studentRepository;
	@Autowired
	TeacherRepository teacherRepository;
	@Autowired
	StudentController studentController;

	@Test
	public void contextLoads() {
	}

	@Test
	public void findAll() {
//		System.out.println("Students:");
//		studentRepository.findAll().forEach(System.out::println);
//
//		System.out.println("Teachers:");
//		teacherRepository.findAll().forEach(System.out::println);
		studentController.students();
	}

	@Test
	public void findStudent() {
//		studentController.getStudent(1l);
		System.out.println(studentRepository.findById(1l));
	}

	@Test
	public void addStudent() {
		Student student = new Student();
		student.setName("Ktoś");
		student.setAlbum("333444");
		student.setMail("333444@acaemy.com");
//		studentRepository.save(student);
//		studentController.createStudent(student);
	}

	@Test
	public void addTeacher() {
		Teacher teacher = new Teacher();
		teacher.setName("Ktoś Tam");
		teacher.setMail("ktos@acaemy.com");
		teacherRepository.save(teacher);
	}

	@Test
	public void deleteStudent() {
		Student student = studentRepository.findById(2l).get();
		studentRepository.delete(student);
	}

	@Test
	public void deleteTeacher() {
		teacherRepository.deleteById(2l);
	}
}
