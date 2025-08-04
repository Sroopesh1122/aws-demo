package com.sr.Aws_demo;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5174")
public class Controller
{
	
	@GetMapping("/hello")
	public String hello(@RequestParam String name)
	{
		return "Hello "+name; 
	}

}
