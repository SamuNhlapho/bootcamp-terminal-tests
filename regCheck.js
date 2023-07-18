export default function regCheck (regNo, regEnds) {
    return regNo.endsWith (regEnds);
  }
  //assert.equal(regCheck('DC 55 YU GP', 'GP'), true);
  //assert.equal(regCheck('DC 55 YU GP', 'EC'), false);