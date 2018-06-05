package com.demo.controllers;

import com.demo.services.StudentsService;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(value="/api")
@CrossOrigin
public class ServicesController {
	@Autowired
	private StudentsService studentsService;


	@GetMapping(value="/welcome")
	public ResponseEntity<String> homePage() {
		System.out.println("Hello, how are you!!!1");
		return new ResponseEntity<>("Hello!!", HttpStatus.OK);
	}

	@GetMapping(value="/student/add")
	@ResponseStatus(HttpStatus.OK)
	public void addStudent(@RequestParam("firstName") String firstName,
						   @RequestParam("lastName") String lastName,
						   @RequestParam("id") int id){
		studentsService.storeStudentInformation(firstName,lastName, id);
	}

	@GetMapping(value="/student/retrieveByFirstName")
	public ResponseEntity<Document> retrieveStudentByFirstName(@RequestParam("firstName") String firstName){
		Document result = studentsService.retrieveStudentInformationByFirstName(firstName);
		return new ResponseEntity<>(result, HttpStatus.OK);
	}

}
