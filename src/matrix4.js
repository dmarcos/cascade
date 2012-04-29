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

      this.identity();

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

  Cascade.Matrix4.prototype.set = function(m00, m01, m02, m03, 
                                           m10, m11, m12, m13, 
                                           m20, m21, m22, m23, 
                                           m30, m31, m32, m33) {

    this.m00 = m00;
    this.m01 = m01;
    this.m02 = m02;
    this.m03 = m03;

    this.m10 = m10;
    this.m11 = m11;
    this.m12 = m12;
    this.m13 = m13;

    this.m20 = m20;
    this.m21 = m21;
    this.m22 = m22;
    this.m23 = m23;

    this.m30 = m30;
    this.m31 = m31;
    this.m32 = m32;
    this.m33 = m33;

    return this;

  };

  Cascade.Matrix4.prototype.identity = function() {

    this.set(1,0,0,0,
             0,1,0,0,
             0,0,1,0,
             0,0,0,1);

    return this;

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

})();