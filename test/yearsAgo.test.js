import assert from "assert";
import yearsAgo from "../yearsAgo.js";

assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
assert.equal((new Date().getFullYear() - 2000), yearsAgo(2000));


describe('Test yearsAgo function' , function(){
    it('It should return 47 for the number of years' , function(){
        assert.equal(new Date().getFullYear()-1976,yearsAgo(1976), 47);
    });
    
    it('It should return 23 for the number of years' , function(){
        assert.equal(new Date().getFullYear()-2000,yearsAgo(2000), 23);
    });

});