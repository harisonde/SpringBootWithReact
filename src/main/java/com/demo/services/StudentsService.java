package com.demo.services;

import com.demo.db.DatabaseHelper;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.MongoCursor;
import com.mongodb.client.MongoDatabase;
import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentsService {
    @Autowired
    private DatabaseHelper databaseHelper;

    public void storeStudentInformation(String firstName, String lastName, int id){
        MongoDatabase database = databaseHelper.getDabaseObject();
        MongoCollection<Document> studentCollection = database.getCollection("students");

        Document document = new Document("firstName", firstName).append("lastName", lastName).append("id", id);
        studentCollection.insertOne(document);

        System.out.println("Document inserted into database");
    }

    public Document retrieveStudentInformationByFirstName(String firstName){
        Document returnValue = null;
        MongoDatabase database = databaseHelper.getDabaseObject();
        MongoCollection<Document> studentCollection = database.getCollection("students");

       MongoCursor<Document> result = studentCollection.find(new Document("firstName", firstName)).iterator();
      while(result.hasNext()){
          returnValue = result.next();
          break;
      }
      return returnValue;
    }
}
