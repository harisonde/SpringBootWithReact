package com.demo.controllers;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value="/main")
public class ServicesController {

	@GetMapping(value="/welcome")
	public ResponseEntity<String> homePage() {
		System.out.println("Hello, how are you!!!1");
		return new ResponseEntity<>("Hello!!", HttpStatus.OK);
	}	
}
