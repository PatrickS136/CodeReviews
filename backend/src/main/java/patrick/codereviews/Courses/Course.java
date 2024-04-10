package patrick.codereviews.Courses;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.List;

@Document(collection = "courses")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Course {
    @Id
    private ObjectId id;
    private String courseId;
    private String title;
    private String releaseDate;
    private String description;
    private String duration;
    private String instructor;
    private Double rating;
    private String price;
    private List<String> topics;
    private String image;
    private String enrollLink;
    @DocumentReference
    private List<Review> reviews;

    public Course(String courseId, String title, String releaseDate, String description, String duration, String instructor, Double rating, String price, List<String> topics, String image, String enrollLink) {
        this.courseId = courseId;
        this.title = title;
        this.releaseDate = releaseDate;
        this.description = description;
        this.duration = duration;
        this.instructor = instructor;
        this.rating = rating;
        this.price = price;
        this.image = image;
        this.enrollLink = enrollLink;
    }
}
