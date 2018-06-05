package com.demo.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller
public class RoutesController {
	
	@GetMapping("/greeting")
	public String getIndexPage(@RequestParam(name="name", required=false, defaultValue="hari") String name, Model model) {
		model.addAttribute("name", name);
		return "greeting";
	}

}
