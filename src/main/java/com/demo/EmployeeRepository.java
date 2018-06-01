package com.demo;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import com.entities.EmployeeEntity;

@Repository
public interface EmployeeRepository extends MongoRepository<EmployeeEntity, String> {
	
	List<EmployeeEntity> findByfirstName(String firstName);
	List<EmployeeEntity> findByLastName(String lastName);

}
