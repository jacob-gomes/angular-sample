package com.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.LoginRequest;
import com.backend.model.LoginResponse;
import com.backend.service.UserService;

@Component
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {

	@Autowired
	private UserService userService;
	
	@PostMapping(value = "/login",
			produces = MediaType.APPLICATION_JSON_VALUE,
			consumes = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<LoginResponse> validateLoginCredentials(@RequestBody LoginRequest request) {
		System.out.println("In Validation");
		
		LoginResponse loginResponse = userService.validateLogin(request);
		return new ResponseEntity<>(loginResponse,HttpStatus.OK);
	}

	
}
