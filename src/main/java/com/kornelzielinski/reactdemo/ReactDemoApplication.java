package com.kornelzielinski.reactdemo;

import com.kornelzielinski.reactdemo.model.Teacher;
import com.kornelzielinski.reactdemo.repos.StudentRepository;
import com.kornelzielinski.reactdemo.repos.TeacherRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ReactDemoApplication{

	public static void main(String[] args) {
		SpringApplication.run(ReactDemoApplication.class, args);
	}


}
