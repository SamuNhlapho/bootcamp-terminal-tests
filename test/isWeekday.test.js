import assert from "assert";
import isWeekday from "../isWeekday.js";

assert.equal(isWeekday('Saturday'), false);
assert.equal(isWeekday('Sunday'), false);
assert.equal(isWeekday('Monday'), true);
assert.equal(isWeekday('Tuesday'), true);
assert.equal(isWeekday('Wednesday'), true);
assert.equal(isWeekday('Thursday'), true);
assert.equal(isWeekday('Friday'), true);

describe('Test isWeekday function' , function(){
    it('It should return true if it is a Friday' , function(){
        assert.equal(true, isWeekday('Friday'), true);
    });
    
    it('It should return false if it is a Sunday' , function(){
        assert.equal(false, isWeekday('Sunday'), false);
    });

});