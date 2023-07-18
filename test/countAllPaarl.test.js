import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe('Test countAllPaarl function' , function(){
    it('It should return 3' , function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'), 3);
    });
    
    it('It should return 2' , function(){
        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'), 2);
    });

});