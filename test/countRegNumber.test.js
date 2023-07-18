import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('Test countRegNumber function' , function(){
    it('It should return 3 registration numbers', function(){
        assert.equal(3,countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
    
    it('It should return 1 registration number' , function(){
        assert.equal(1,countRegNumber('CA 182736'), 1);
    });

});