public class InTheArea {
    @AuraEnabled
        public static String getLocal (String searchTerm, Decimal lat, Decimal lon) {
        String url = 'https://th-yelp-locator.herokuapp.com/search?address=' + lat +','+ lon + '&term=' + EncodingUtil.urlEncode(searchTerm, 'UTF-8');
        HttpRequest req = new HttpRequest();
        Http http = new Http();
        req.setMethod('GET');    
        req.setEndpoint(url);
        HTTPResponse res = http.send(req);
        return res.getBody();   
    }
}
