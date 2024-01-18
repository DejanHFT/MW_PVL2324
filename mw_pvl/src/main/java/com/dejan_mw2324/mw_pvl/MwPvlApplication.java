package com.dejan_mw2324.mw_pvl;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication
@EntityScan("com.dejan_mw2324.mw_pvl")
public class MwPvlApplication {

	public static void main(String[] args) {
		SpringApplication.run(MwPvlApplication.class, args);
	}

}
