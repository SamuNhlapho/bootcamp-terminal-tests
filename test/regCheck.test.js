import assert from "assert";
import regCheck from "../regCheck.js";

assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
assert.equal(regCheck('DC 55 YU GP', 'EC'), false);

assert.equal(regCheck('5566 L', 'L'), true);
assert.equal(regCheck('5566 L', 'M'), false);

assert.equal(regCheck('ERT 123 EC', 'EC'), true);
assert.equal(regCheck('ERT 123 EC', 'GP'), false);

assert.equal(regCheck('FGT 123 MP', 'MP'), true);
assert.equal(regCheck('FGT 123 MM', 'MP'), false);

describe('Test regCheck function' , function(){
    it('It should return true for number plates ending with L' , function(){
        assert.equal(true,regCheck('5566 L', 'L'), true);
    });
    
    it('It should return false for number plates ending with M' , function(){
        assert.equal(false,regCheck('5566 L', 'M'), false);
    });

});