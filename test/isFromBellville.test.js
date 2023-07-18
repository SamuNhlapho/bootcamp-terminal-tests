import assert from "assert";
import isFromBellville from "../isFromBellville.js";

assert.equal(isFromBellville('CY 123'), true);
assert.equal(isFromBellville('CJ 123'), false);

describe('Test isFromBellville function' , function(){
    it('It should return true' , function(){
        assert.equal(true, isFromBellville('CY 123'), true);
    });
    
    it('It should return false' , function(){
        assert.equal(false, isFromBellville('CJ 123'), false);
    });

});