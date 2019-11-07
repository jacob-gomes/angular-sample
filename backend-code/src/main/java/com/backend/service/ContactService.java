package com.backend.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

import com.backend.model.Contact;

@Component
public class ContactService {
static Map<String, Contact> contactMap;
	
	@PostConstruct
	void initiate() {
		contactMap = new HashMap<>();
		Contact contact = new Contact();
		
		contact.contactId = "contactId1";
		contact.name= "contact1";
		contact.address = "India";
		contact.emailId = "abc.def.com";
		contact.userId ="admin";
		contactMap.put(contact.contactId ,contact );
		
		contact = new Contact();
		contact.contactId = "contactId2";
		contact.name= "contact2";
		contact.address = "India";
		contact.emailId = "abc.def.com";
		contact.userId ="User2";
		contactMap.put(contact.contactId ,contact );
	}

	public List<Contact> getAllContactsForUser(String userId) {
		List<Contact> contactList = new ArrayList<>();
		for(Contact contact : contactMap.values()) {
			if(contact.userId.equals(userId)) {
				contactList.add(contact);
			}
		}
		return contactList;
	}
	
	
}
