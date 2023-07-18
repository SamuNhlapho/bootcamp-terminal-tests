import assert from "assert";
import countAllFromTown from "../countAllFromTown.js";

describe('Test countAllFromTown function' , function(){
    it('It should return 3 if from Stellies' , function(){
        assert.equal(3, countAllFromTown('CL 124,CY 567,CL 345, CJ 456,CL 341','CL'), "This should be true");
    });
 

    it('It should return 1 if from Kuilsriver' , function(){
        assert.equal(1,countAllFromTown('CJ 124,CY 567,CL 345, CF 456, CL 341','CF'), "This should be true");
    });

});