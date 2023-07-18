import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Samukelisiwe correctly', function(){
        assert.equal('Hello, Samukelisiwe', greet('Samukelisiwe'));
    });
    it('should greet Musawenkosi correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Musawenkosi', greet('Musawenkosi'));
    });
});