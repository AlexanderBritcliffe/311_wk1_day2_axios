const {
  discoverMovie,
  getMovieById,
  getMovieByIdFailure
  } = require('../src')
  
  describe('API protocol practice', () => {
  // Note that is is not best practice to make actual API calls with 
  // these tests. Normally, you would stub these calls or use nock 
  // to prevent an actual network call and mock the responses for 
  // unit testing. This structure is in place for practice only. 
  

  test('It should make a request to the discover endpoint',  () => {
    const result = discoverMovie()
    result.then((d)=>{
    expect(d).toHaveProperty('data.results')
    expect(d).toHaveProperty('status')
    expect(d).toHaveProperty('headers')
    })
    
    })
    
    test('It should get a movie by it\'s id',  () => {
    const data = getMovieById(500).then((d)=>{
    expect(d.original_title).toBe('Reservoir Dogs')
    });
    
    })
    
    test('It should FAIL to get a movie by it\'s id and return a 404',  () => {
    const status = getMovieByIdFailure().then((s)=>{
    expect(s).toEqual(404)
    });
    
    })
    
    })