package com.demo.db;

import com.mongodb.MongoClient;
import com.mongodb.MongoClientURI;
import com.mongodb.client.MongoDatabase;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class DatabaseHelper {
    @Value("${springBootReact.dataSourecUrl}")
    private String dataSourceUrl;

   public MongoDatabase getDabaseObject(){
        MongoClientURI mongoClientURI = new MongoClientURI(dataSourceUrl);
        MongoClient mongoClient = new MongoClient(mongoClientURI);
        return mongoClient.getDatabase(mongoClientURI.getDatabase());
    }
}
