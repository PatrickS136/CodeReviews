package patrick.codereviews;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CodereviewsApplication {

	public static void main(String[] args) {
		SpringApplication.run(CodereviewsApplication.class, args);
	}

	@GetMapping("/mak")
	public String apiRoot(){
		return "mak lo kontol";
	}
}
