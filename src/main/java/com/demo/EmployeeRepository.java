package com.demo;

import com.entities.EmployeeEntity;

import java.util.List;

public interface EmployeeRepository {
	
	List<EmployeeEntity> findByfirstName(String firstName);
	List<EmployeeEntity> findByLastName(String lastName);

}
