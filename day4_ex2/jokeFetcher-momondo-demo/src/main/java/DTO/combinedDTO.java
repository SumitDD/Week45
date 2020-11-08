
package DTO;


public class combinedDTO {
    
    
   
    private String dadJoke;
    private String chuckJoke;
    private String url;
    private String url2;

    public combinedDTO(dadDTO dad, chuckDTO chuck) {
        this.dadJoke = dad.getJoke();
        this.url = "https://icanhazdadjoke.com/";
        this.chuckJoke = chuck.getJoke();
        this.url2 = "https://api.chucknorris.io/jokes/random";
    }

    public String getDadJoke() {
        return dadJoke;
    }

    public void setDadJoke(String dadJoke) {
        this.dadJoke = dadJoke;
    }

    public String getChuckJoke() {
        return chuckJoke;
    }

    public void setChuckJoke(String chuckJoke) {
        this.chuckJoke = chuckJoke;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getUrl2() {
        return url2;
    }

    public void setUrl2(String url2) {
        this.url2 = url2;
    }

 

  
    
    
}
