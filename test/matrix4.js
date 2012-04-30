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

  it('should transpose an arbitrary matrix', function() {
    
    var matrix = new Cascade.Matrix4(9, 1,-3, 1,
                                     1, 0, 0,-9,
                                     5, 0, 1, 0,
                                     1,-7, 4, 5);

    var expected = new Cascade.Matrix4(9, 1, 5, 1,
                                       1, 0, 0,-7,
                                      -3, 0, 1, 4,
                                       1,-9, 0, 5);

    expect(matrix.transpose().compare(expected)).to.equal(true);

  });

  it('determinant should be 0', function() {

    var matrix = new Cascade.Matrix4(9, 1,-3, 1,
                                     1, 0, 0,-9,
                                     5, 0, 1, 0,
                                     1, 0, 0,-9);
    
    expect(matrix.determinant()).to.equal(0);

  });

  it('determinant should not be 0', function() {

    var matrix = new Cascade.Matrix4(3, 0, 0, 0,
                                     0, 1, 0, 0,
                                     0, 0,-1, 0,
                                     0, 0, 0, 2);
    
    expect(matrix.determinant()).to.not.equal(0);

  });

  it('checks the inverse operation on the identity matrix', function() {

    var identity = new Cascade.Matrix4(1, 0, 0, 0,
                                       0, 1, 0, 0,
                                       0, 0, 1, 0,
                                       0, 0, 0, 1);

    var inverse = identity.inverse();
    expect(inverse.compare(identity)).to.be.equal(true);

  });

  it('checks the inverse operation on an arbitrary matrix', function() {

    var matrix = new Cascade.Matrix4(1, 0, 0, 1,
                                     0, 2, 1, 2,
                                     2, 1, 0, 1,
                                     2, 0, 1, 4);

    var inverseExpected = new Cascade.Matrix4(-2,-0.5, 1, 0.5,
                                               1, 0.5, 0,-0.5,
                                              -8,  -1, 2,   2,
                                               3, 0.5,-1,-0.5);

    var inverseResult = matrix.inverse();
    expect(inverseResult.compare(inverseExpected)).to.be.equal(true);

  });

});
