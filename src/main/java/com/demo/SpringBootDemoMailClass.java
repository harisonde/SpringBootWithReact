package com.demo;

import com.demo.db.DatabaseHelper;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringBootDemoMailClass implements CommandLineRunner{
	@Autowired
    private DatabaseHelper databaseHelper;

	public static void main(String[] args) {
		SpringApplication.run(SpringBootDemoMailClass.class);
	}

	@Override
	public void run(String... args) {
        verifyMlabConnectivity();
	}

	private void verifyMlabConnectivity(){
        MongoDatabase mongoDatabase = databaseHelper.getDabaseObject();

        MongoCollection<Document> studentsCollection = mongoDatabase.getCollection("students");

        studentsCollection.insertOne(new Document("name", "Hari"));

        MongoCursor<Document> result = studentsCollection.find(new Document("name", "Hari")).iterator();

        while(result.hasNext()){
            Document studentDoc = result.next();
            System.out.println("student name is ->" + studentDoc.get("name"));
        }
    }
}
