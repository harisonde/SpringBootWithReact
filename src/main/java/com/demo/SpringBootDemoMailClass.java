package com.demo;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.entities.EmployeeEntity;
import com.demo.EmployeeRepository;

@SpringBootApplication
public class SpringBootDemoMailClass implements CommandLineRunner{

	@Autowired
	private EmployeeRepository employeeRepository;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDemoMailClass.class);
	}

	@Override
	public void run(String... args) {
		EmployeeEntity emp = new EmployeeEntity("hari", "Krishna");

		employeeRepository.save(emp);

		List<EmployeeEntity> emp2 = employeeRepository.findByfirstName("hari");
		if(emp2 != null) {
			System.out.println("Employee details are - " + emp2.get(0).getFirstName() + " " + emp2.get(0).getLastName());
		}
	}
}
