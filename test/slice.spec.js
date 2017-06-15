
describe('slice', function() {
    var a = undefined;
    
    beforeEach( function() {
        a = [1,2,3,4,5];
    });
        
    it('should start', function() {
       expect(true).toEqual(true);           
    });

    
    it("should return all items",function(){
        var b = a.slice(0);
        expect(a).toEqual(b);            
    })

    it("should return new array",function(){
        var b = a.slice(0);
        b.push(6);
        expect(a).not.toEqual(b);            
    })

    it("should return empty array when passed index out of range",function(){
        var b = a.slice(10);      
        expect(b).toEqual([]);                      
    })

    it("should return new array when passed a valid range",function(){
        var actual = a.slice(2,4); 
        var expected = [3,4]
        expect(expected).toEqual(actual);                      
    })
        
    
});
    