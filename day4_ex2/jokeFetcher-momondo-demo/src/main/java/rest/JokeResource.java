package rest;

import DTO.chuckDTO;
import DTO.combinedDTO;
import DTO.dadDTO;
import com.google.gson.Gson;
import java.io.IOException;
import java.util.List;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.UriInfo;
import javax.ws.rs.Produces;
import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PUT;
import javax.ws.rs.core.MediaType;
import jokefetcher.fetchHandler;
import utils.HttpUtils;

/**
 * REST Web Service
 *
 * @author lam
 */
@Path("jokes")
public class JokeResource {

    private Gson GSON = new Gson();
    
    @Context
    private UriInfo context;
    
    private static ExecutorService es = Executors.newCachedThreadPool();
   
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public String getJokes() throws IOException {
        
        List<String> dtos = fetchHandler.runParallelWithCallables(es);
        
        chuckDTO chuckDTO = GSON.fromJson(dtos.get(0), chuckDTO.class);

        dadDTO dadDTO = GSON.fromJson(dtos.get(1), dadDTO.class);
        
        combinedDTO combined = new combinedDTO(dadDTO, chuckDTO);
        return GSON.toJson(combined);
        
    }

   
}
