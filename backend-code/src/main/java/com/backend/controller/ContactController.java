package com.backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.backend.model.Contact;
import com.backend.service.ContactService;

@Component
@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ContactController {
	
	@Autowired
	ContactService contactService;
		
	@GetMapping(value = "/contacts/user/{userid}",
			produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<List<Contact>> getAllContacts(@PathVariable("userid") String userId){
		List<Contact> contacts = contactService.getAllContactsForUser(userId);
		return new ResponseEntity<List<Contact>>(contacts,HttpStatus.OK);
	}
}
