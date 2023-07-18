import assert from "assert";
import transportFee from "../transportFee.js";

assert.equal(transportFee('morning'), 'R20');

assert.equal(transportFee('afternoon'), 'R10');

assert.equal(transportFee('nightshift'), 'free', 'for night shift return free');

describe('Test transportFee function' , function(){
    it('It should return R20 for the morning shift' , function(){
        assert.equal("R20",transportFee('morning'), 'R20');
    });
    
    it('It should return free for the nightshift' , function(){
        assert.equal("free",transportFee('nightshift'), 'free');
    });

});