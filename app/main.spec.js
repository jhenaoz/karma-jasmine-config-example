describe('A suite', function () {
  it('contains spec with an expectation', function() {
    var result = sum(5,10);
    expect(result).toBe(15);
  });


  it("contains spec with an expectation and SpyOn", function() {
    spyOn(API_CLIENT, 'get');
    var urlToRequest = 'http://google.com';
    var responseFromServer = API_CLIENT.get(urlToRequest, null);
    expect(API_CLIENT.get).toHaveBeenCalledWith(urlToRequest, null);
  });

  it("Click on searchButton and search for a url", function() {
    spyOn(API_CLIENT, 'get');
    var urlToRequest = 'http://google.com';
    //emulate a click, with plain js in html use <button onClick="searchButtonClick()"> or with specific framework options
    searchButtonClick();
    expect(API_CLIENT.get).toHaveBeenCalledWith(urlToRequest);
  });
});
