import assert from "assert";
import fromWhere from "../fromWhere.js";

assert.equal(fromWhere('CY 567489'), 'Bellville'); 
assert.equal(fromWhere('CJ 343502'), 'Paarl');
assert.equal(fromWhere('CA 987504'), 'Cape Town');
assert.equal(fromWhere('ZN 568593'), 'Some other place!');



describe('Test fromWhere function' , function(){
    it('It should return Paarl if reg no starts with CJ' , function(){
        assert.equal("Paarl",fromWhere('CJ 343502'), 'Paarl');
    });

    it('It should return Cape Town if reg no starts with CA' , function(){
        assert.equal("Cape Town",fromWhere('CA 987504'), 'Cape Town');
    });
});