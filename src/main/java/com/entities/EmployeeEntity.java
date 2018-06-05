package com.entities;

import org.springframework.data.annotation.Id;

public class EmployeeEntity {
	@Id
	private String id;
	
	private String firstName;
	private String lastName;
	
	public EmployeeEntity(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}
	
	public String getFirstName() {
		return this.firstName;
	}
	
	public String getLastName() {
		return this.lastName;
	}
}
