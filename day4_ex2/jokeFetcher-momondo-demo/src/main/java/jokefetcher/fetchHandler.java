/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package jokefetcher;

import DTO.combinedDTO;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Future;
import java.util.concurrent.TimeUnit;
import java.util.concurrent.TimeoutException;
import java.util.logging.Level;
import java.util.logging.Logger;
import utils.HttpUtils;


public class fetchHandler {
    
      public static String runParallelWithCallables(ExecutorService threadPool) throws TimeoutException, InterruptedException, ExecutionException  {
   
          
          List<String> urls = new ArrayList();
          urls.add("https://api.chucknorris.io/jokes/random");
          urls.add("https://icanhazdadjoke.com");
        
          List<Future<String>> futures = new ArrayList<>();

            for(String url : urls){
            Callable<String> task = new Callable<String>() {
                @Override
                public String call() throws IOException {
                    try {
                        return HttpUtils.fetchData(url);
                    } catch (IOException ex) {
                        Logger.getLogger(fetchHandler.class.getName()).log(Level.SEVERE, null, ex);
                    }
                }
                 
                };
                
            futures.add(threadPool.submit(task));
        
        List<String> results = new ArrayList<>();
        for (Future<String> fut : futures) {
            results.add(fut.get(2000, TimeUnit.MILLISECONDS));
        }
        return results;
    }
    

