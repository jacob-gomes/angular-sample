package com.backend.service;

import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.stereotype.Component;

import com.backend.model.LoginRequest;
import com.backend.model.LoginResponse;
import com.backend.model.User;

@Component
public class UserService {
	static Map<String, User> userMap;
	
	@PostConstruct
	void initiate() {
		userMap = new HashMap<>();
		User user = new User();
		
		user.userId = "admin";
		user.name= "admin";
		user.password = "admin";
		user.address = "India";
		user.emailId = "abc.def.com";
		user.isAdmin = true;
		userMap.put(user.userId ,user );
		
		user = new User();
		user.userId = "userid2";
		user.name= "User2";
		user.address = "India";
		user.emailId = "abc.def.com";
		user.isAdmin = false;
		userMap.put(user.userId ,user );
	}
	
	public LoginResponse validateLogin(LoginRequest login) {
		LoginResponse loginResponse = new LoginResponse();
		if(userMap.containsKey(login.userId)  ) {
			User user = userMap.get(login.userId);
			if(login.password.equals(user.password)) {
				loginResponse.isSuccessful = true;
				loginResponse.isAdmin = user.isAdmin;
			}
		}
		
		return loginResponse;
	}
}
