(function module(){
  
  var root = this;
  var Cascade = root.Cascade = root.Cascade || {};

  Cascade.Matrix4 = function(m00, m01, m02, m03, 
                             m10, m11, m12, m13, 
                             m20, m21, m22, m23, 
                             m30, m31, m32, m33){
    
    if (typeof m00 != 'number' || typeof m01 != 'number' ||
        typeof m02 != 'number' || typeof m03 != 'number' ||
        typeof m10 != 'number' || typeof m11 != 'number' ||
        typeof m12 != 'number' || typeof m13 != 'number' ||
        typeof m20 != 'number' || typeof m21 != 'number' ||
        typeof m22 != 'number' || typeof m23 != 'number' ||
        typeof m30 != 'number' || typeof m31 != 'number' ||
        typeof m32 != 'number' || typeof m33 != 'number') {

      return this.identity();

    } else {

      this.set(m00, m01, m02, m03, 
               m10, m11, m12, m13, 
               m20, m21, m22, m23, 
               m30, m31, m32, m33);

    }

  };

  ////////////////
  // PROTOTYPE //
  ///////////////

  Cascade.Matrix4.prototype.toString = function() {
    return "| " + this.m00 + " " + this.m01 + " " + this.m02 + " " + this.m03 + " |\n" +
           "| " + this.m10 + " " + this.m11 + " " + this.m12 + " " + this.m13 + " |\n" +
           "| " + this.m20 + " " + this.m21 + " " + this.m22 + " " + this.m23 + " |\n" +
           "| " + this.m30 + " " + this.m31 + " " + this.m32 + " " + this.m33 + " |\n";

  };

  Cascade.Matrix4.prototype.set = function(m00, m01, m02, m03, 
                                           m10, m11, m12, m13, 
                                           m20, m21, m22, m23, 
                                           m30, m31, m32, m33) {

    this.m00 = m00; this.m01 = m01; this.m02 = m02; this.m03 = m03;
    this.m10 = m10; this.m11 = m11; this.m12 = m12; this.m13 = m13;
    this.m20 = m20; this.m21 = m21; this.m22 = m22; this.m23 = m23;
    this.m30 = m30; this.m31 = m31; this.m32 = m32; this.m33 = m33;

    return this;

  };

  Cascade.Matrix4.prototype.identity = function() {

    return new Cascade.Matrix4(1,0,0,0,
                               0,1,0,0,
                               0,0,1,0,
                               0,0,0,1);

  };

  Cascade.Matrix4.prototype.compare = function(m) {

    return (this.m00 == m.m00 && this.m01 == m.m01 &&
            this.m02 == m.m02 && this.m03 == m.m03 &&
            this.m10 == m.m10 && this.m11 == m.m11 &&
            this.m12 == m.m12 && this.m13 == m.m13 &&
            this.m20 == m.m20 && this.m21 == m.m21 &&
            this.m22 == m.m22 && this.m23 == m.m23 &&
            this.m30 == m.m30 && this.m31 == m.m31 &&
            this.m32 == m.m32 && this.m33 == m.m33);

  };

  Cascade.Matrix4.prototype.clone = function() {

    return new Cascade.Matrix4(this.m00, this.m01, this.m02, this.m03, 
                               this.m10, this.m11, this.m12, this.m13, 
                               this.m20, this.m21, this.m22, this.m23, 
                               this.m30, this.m31, this.m32, this.m33);

  };

  Cascade.Matrix4.prototype.copy = function(m) {

    this.set(m.m00, m.m01, m.m02, m.m03, 
             m.m10, m.m11, m.m12, m.m13, 
             m.m20, m.m21, m.m22, m.m23, 
             m.m30, m.m31, m.m32, m.m33);

    return this;

  };

  Cascade.Matrix4.prototype.transpose = function() {
    return new Cascade.Matrix4(this.m00, this.m10, this.m20, this.m30, 
                               this.m01, this.m11, this.m21, this.m31, 
                               this.m02, this.m12, this.m22, this.m32, 
                               this.m03, this.m13, this.m23, this.m33);
  };

  Cascade.Matrix4.prototype.determinant = function() {

    // Found in http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm    
    var m00 = this.m00, m01 = this.m01, m02 = this.m02, m03 = this.m03,
        m10 = this.m10, m11 = this.m11, m12 = this.m12, m13 = this.m13,
        m20 = this.m20, m21 = this.m21, m22 = this.m22, m23 = this.m23,
        m30 = this.m30, m31 = this.m31, m32 = this.m32, m33 = this.m33; 

    return  (m03*m12*m21*m30 - m02*m13*m21*m30 - m03*m11*m22*m30 + m01*m13*m22*m30+
             m02*m11*m23*m30 - m01*m12*m23*m30 - m03*m12*m20*m31 + m02*m13*m20*m31+
             m03*m10*m22*m31 - m00*m13*m22*m31 - m02*m10*m23*m31 + m00*m12*m23*m31+
             m03*m11*m20*m32 - m01*m13*m20*m32 - m03*m10*m21*m32 + m00*m13*m21*m32+
             m01*m10*m23*m32 - m00*m11*m23*m32 - m02*m11*m20*m33 + m01*m12*m20*m33+
             m02*m10*m21*m33 - m00*m12*m21*m33 - m01*m10*m22*m33 + m00*m11*m22*m33);

  };

  Cascade.Matrix4.prototype.scale = function(x, y, z) {

    return new Cascade.Matrix4(x*this.m00, y*this.m01, z*this.m02, this.m03, 
                               x*this.m10, y*this.m11, z*this.m12, this.m13, 
                               x*this.m20, y*this.m21, z*this.m22, this.m23, 
                               x*this.m30, y*this.m31, z*this.m32, this.m33);

  };

  Cascade.Matrix4.prototype.multiplyScalar = function(scalar) {

    return new Cascade.Matrix4(scalar*this.m00, scalar*this.m01, scalar*this.m02, scalar*this.m03, 
                               scalar*this.m10, scalar*this.m11, scalar*this.m12, scalar*this.m13, 
                               scalar*this.m20, scalar*this.m21, scalar*this.m22, scalar*this.m23, 
                               scalar*this.m30, scalar*this.m31, scalar*this.m32, scalar*this.m33);

  };

  Cascade.Matrix4.prototype.inverse = function() {

    // Found in http://www.euclideanspace.com/maths/algebra/matrix/functions/inverse/fourD/index.htm
    var m00 = this.m00, m01 = this.m01, m02 = this.m02, m03 = this.m03,
        m10 = this.m10, m11 = this.m11, m12 = this.m12, m13 = this.m13,
        m20 = this.m20, m21 = this.m21, m22 = this.m22, m23 = this.m23,
        m30 = this.m30, m31 = this.m31, m32 = this.m32, m33 = this.m33; 

    var i00 = m12*m23*m31 - m13*m22*m31 + m13*m21*m32 - m11*m23*m32 - m12*m21*m33 + m11*m22*m33;
    var i01 = m03*m22*m31 - m02*m23*m31 - m03*m21*m32 + m01*m23*m32 + m02*m21*m33 - m01*m22*m33;
    var i02 = m02*m13*m31 - m03*m12*m31 + m03*m11*m32 - m01*m13*m32 - m02*m11*m33 + m01*m12*m33;
    var i03 = m03*m12*m21 - m02*m13*m21 - m03*m11*m22 + m01*m13*m22 + m02*m11*m23 - m01*m12*m23;
    var i10 = m13*m22*m30 - m12*m23*m30 - m13*m20*m32 + m10*m23*m32 + m12*m20*m33 - m10*m22*m33;
    var i11 = m02*m23*m30 - m03*m22*m30 + m03*m20*m32 - m00*m23*m32 - m02*m20*m33 + m00*m22*m33;
    var i12 = m03*m12*m30 - m02*m13*m30 - m03*m10*m32 + m00*m13*m32 + m02*m10*m33 - m00*m12*m33;
    var i13 = m02*m13*m20 - m03*m12*m20 + m03*m10*m22 - m00*m13*m22 - m02*m10*m23 + m00*m12*m23;
    var i20 = m11*m23*m30 - m13*m21*m30 + m13*m20*m31 - m10*m23*m31 - m11*m20*m33 + m10*m21*m33;
    var i21 = m03*m21*m30 - m01*m23*m30 - m03*m20*m31 + m00*m23*m31 + m01*m20*m33 - m00*m21*m33;
    var i22 = m01*m13*m30 - m03*m11*m30 + m03*m10*m31 - m00*m13*m31 - m01*m10*m33 + m00*m11*m33;
    var i23 = m03*m11*m20 - m01*m13*m20 - m03*m10*m21 + m00*m13*m21 + m01*m10*m23 - m00*m11*m23;
    var i30 = m12*m21*m30 - m11*m22*m30 - m12*m20*m31 + m10*m22*m31 + m11*m20*m32 - m10*m21*m32;
    var i31 = m01*m22*m30 - m02*m21*m30 + m02*m20*m31 - m00*m22*m31 - m01*m20*m32 + m00*m21*m32;
    var i32 = m02*m11*m30 - m01*m12*m30 - m02*m10*m31 + m00*m12*m31 + m01*m10*m32 - m00*m11*m32;
    var i33 = m01*m12*m20 - m02*m11*m20 + m02*m10*m21 - m00*m12*m21 - m01*m10*m22 + m00*m11*m22;
    
    var adjugate = new Cascade.Matrix4(i00, i01, i02, i03, 
                                       i10, i11, i12, i13, 
                                       i20, i21, i22, i23, 
                                       i30, i31, i32, i33);

    return adjugate.multiplyScalar(1 / this.determinant());

  };

  // multiply, translate, scale, 
  // rotate, rotateAxisAngle, skewX, skewY, toString

})();