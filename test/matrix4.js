var expect = require("chai").expect;
require("../src/matrix4");

describe('Matrix4', function() {

  it('should create an identity matrix', function() {

    var matrix = new Cascade.Matrix4();
    var identity = new Cascade.Matrix4(1, 0, 0, 0,
                                       0, 1, 0, 0,
                                       0, 0, 1, 0,
                                       0, 0, 0, 1);

    expect(matrix.compare(identity)).to.equal(true);

  });

  it('should clone an arbitrary matrix', function() {

    var matrixA = new Cascade.Matrix4(5, 1,-3, 1,
                                      1, 1, 0, 9,
                                      5, 0, 1, 0,
                                      0,-7, 0, 1);
    var matrixB = matrixA.clone();

    expect(matrixA.compare(matrixB)).to.equal(true);

  });

  it('should copy an arbitrary matrix', function() {
    
    var matrixA = new Cascade.Matrix4(9, 1,-3, 1,
                                      1, 0, 0,-9,
                                      5, 0, 1, 0,
                                      1,-7, 4, 5);
    var matrixB = new Cascade.Matrix4();
    matrixB.copy(matrixA);

    expect(matrixA.compare(matrixB)).to.equal(true);

  });

});
