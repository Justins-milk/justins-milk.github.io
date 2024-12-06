(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib-js-ir.js'));
  else {
    if (typeof this['kotlin-kotlin-stdlib-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kog-client'. Its dependency 'kotlin-kotlin-stdlib-js-ir' was not found. Please, check whether 'kotlin-kotlin-stdlib-js-ir' is loaded prior to 'kog-client'.");
    }
    root['kog-client'] = factory(typeof this['kog-client'] === 'undefined' ? {} : this['kog-client'], this['kotlin-kotlin-stdlib-js-ir']);
  }
}(this, function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.a1;
  var classMeta = kotlin_kotlin.$_$.s;
  var VOID = kotlin_kotlin.$_$.i1;
  var setMetadataFor = kotlin_kotlin.$_$.b1;
  var Unit_getInstance = kotlin_kotlin.$_$.k;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.f;
  var Error_init_$Create$ = kotlin_kotlin.$_$.h;
  var THROW_CCE = kotlin_kotlin.$_$.g1;
  var Error_0 = kotlin_kotlin.$_$.f1;
  var KProperty1 = kotlin_kotlin.$_$.c1;
  var getPropertyCallableRef = kotlin_kotlin.$_$.v;
  var objectMeta = kotlin_kotlin.$_$.z;
  var equals = kotlin_kotlin.$_$.t;
  var Default_getInstance = kotlin_kotlin.$_$.j;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.d;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.i;
  var Char = kotlin_kotlin.$_$.e1;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.g;
  var objectCreate = kotlin_kotlin.$_$.y;
  var fillArrayVal = kotlin_kotlin.$_$.u;
  var getOrNull = kotlin_kotlin.$_$.o;
  var getKClass = kotlin_kotlin.$_$.c;
  var to = kotlin_kotlin.$_$.h1;
  var mapOf = kotlin_kotlin.$_$.r;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.e;
  var split = kotlin_kotlin.$_$.d1;
  var lastOrNull = kotlin_kotlin.$_$.q;
  var dropLast = kotlin_kotlin.$_$.m;
  var getKClassFromExpression = kotlin_kotlin.$_$.b;
  var isInterface = kotlin_kotlin.$_$.x;
  var interfaceMeta = kotlin_kotlin.$_$.w;
  var getOrNull_0 = kotlin_kotlin.$_$.n;
  var addAll = kotlin_kotlin.$_$.l;
  var arrayConcat = kotlin_kotlin.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.p;
  //endregion
  //region block: pre-declaration
  setMetadataFor(App$gl$1, VOID, classMeta);
  setMetadataFor(App, 'App', classMeta);
  setMetadataFor(Drawable, 'Drawable', classMeta);
  setMetadataFor(UniformProvider, 'UniformProvider', classMeta, Drawable);
  setMetadataFor(GameObject, 'GameObject', classMeta, UniformProvider);
  setMetadataFor(keyNames, 'keyNames', objectMeta);
  setMetadataFor(Material, 'Material', classMeta, UniformProvider);
  setMetadataFor(Mesh, 'Mesh', classMeta, UniformProvider);
  setMetadataFor(OrthoCamera, 'OrthoCamera', classMeta, UniformProvider);
  setMetadataFor(PhysicsGameObject, 'PhysicsGameObject', classMeta, GameObject);
  setMetadataFor(Companion, 'Companion', objectMeta);
  setMetadataFor(Program, 'Program', classMeta, UniformProvider);
  setMetadataFor(Scene$avatar$1, VOID, classMeta, PhysicsGameObject);
  setMetadataFor(Scene$chase$item$1, VOID, classMeta, PhysicsGameObject);
  setMetadataFor(Scene$bounce$b$1, VOID, classMeta, PhysicsGameObject);
  setMetadataFor(Scene$speedPowerup$b$1, VOID, classMeta, PhysicsGameObject);
  setMetadataFor(Scene$bulletPowerup$b$1, VOID, classMeta, PhysicsGameObject);
  setMetadataFor(Scene$fire$missile$1, VOID, classMeta, PhysicsGameObject);
  setMetadataFor(Scene, 'Scene', classMeta, UniformProvider);
  setMetadataFor(Shader, 'Shader', classMeta);
  setMetadataFor(Texture2D, 'Texture2D', classMeta);
  setMetadataFor(Geometry, 'Geometry', classMeta, Drawable);
  setMetadataFor(TexturedQuadGeometry, 'TexturedQuadGeometry', classMeta, Geometry);
  setMetadataFor(Companion_0, 'Companion', objectMeta);
  function getStorageSize() {
    return this.ul().length;
  }
  function set(firstTexture, moreTextures) {
    throw Error_init_$Create$('Cannot set a texture to a non-sampler uniform.');
  }
  setMetadataFor(UniformInt, 'UniformInt', interfaceMeta);
  setMetadataFor(IVec1, 'IVec1', classMeta, VOID, [UniformInt]);
  setMetadataFor(IVecArray, 'IVecArray', classMeta, VOID, [UniformInt]);
  setMetadataFor(IVec1Array, 'IVec1Array', classMeta, IVecArray);
  setMetadataFor(Companion_1, 'Companion', objectMeta);
  setMetadataFor(IVec2, 'IVec2', classMeta, VOID, [UniformInt]);
  setMetadataFor(Companion_2, 'Companion', objectMeta);
  setMetadataFor(IVec3, 'IVec3', classMeta, VOID, [UniformInt]);
  setMetadataFor(Companion_3, 'Companion', objectMeta);
  setMetadataFor(IVec4, 'IVec4', classMeta, VOID, [UniformInt]);
  function getStorageSize_0() {
    return this.ul().length;
  }
  function set_0(other) {
    if (isInterface(other, UniformFloat)) {
      var inductionVariable = 0;
      var last = this.ul().length;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'org.khronos.webgl.set' call
          var tmp1_set = this.ul();
          var tmp;
          if (i < other.ul().length) {
            var tmp$ret$1;
            // Inline function 'org.khronos.webgl.get' call
            var tmp0_get = other.ul();
            var tmp$ret$0;
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$0 = tmp0_get;
            tmp$ret$1 = tmp$ret$0[i];
            tmp = tmp$ret$1;
          } else {
            tmp = 0.0;
          }
          var tmp2_set = tmp;
          var tmp$ret$2;
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$2 = tmp1_set;
          tmp$ret$2[i] = tmp2_set;
        }
         while (inductionVariable < last);
    } else {
      throw Error_init_$Create$('Cannot set a uniform of floats from a non-float uniform.');
    }
    return this;
  }
  function set_1(firstTexture, moreTextures) {
    throw Error_init_$Create$('Cannot set a texture to a non-sampler uniform.');
  }
  setMetadataFor(UniformFloat, 'UniformFloat', interfaceMeta);
  setMetadataFor(Mat4, 'Mat4', classMeta, VOID, [UniformFloat]);
  setMetadataFor(Mat4Array, 'Mat4Array', classMeta, VOID, [UniformFloat]);
  setMetadataFor(UniformDescriptor, 'UniformDescriptor', classMeta);
  setMetadataFor(Companion_4, 'Companion', objectMeta);
  setMetadataFor(ProgramReflection, 'ProgramReflection', classMeta, Drawable);
  function getStorageSize_1() {
    return this.ul().length;
  }
  function set_2(firstTexture, moreTextures) {
    this.zm()[0] = firstTexture.jl();
    var inductionVariable = 0;
    var last = this.ul().length;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = this.zm();
        var tmp_0 = i + 1 | 0;
        var tmp1_safe_receiver = getOrNull_0(moreTextures, i);
        tmp[tmp_0] = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.jl();
      }
       while (inductionVariable < last);
  }
  setMetadataFor(UniformSampler, 'UniformSampler', interfaceMeta);
  setMetadataFor(Sampler2D, 'Sampler2D', classMeta, VOID, [UniformSampler]);
  setMetadataFor(Sampler3D, 'Sampler3D', classMeta, VOID, [UniformSampler]);
  setMetadataFor(SamplerCube, 'SamplerCube', classMeta, VOID, [UniformSampler]);
  setMetadataFor(Companion_5, 'Companion', objectMeta);
  setMetadataFor(Vec1, 'Vec1', classMeta, VOID, [UniformFloat]);
  setMetadataFor(VecArray, 'VecArray', classMeta, VOID, [UniformFloat]);
  setMetadataFor(Vec1Array, 'Vec1Array', classMeta, VecArray);
  setMetadataFor(Companion_6, 'Companion', objectMeta);
  setMetadataFor(Vec2, 'Vec2', classMeta, VOID, [UniformFloat]);
  setMetadataFor(Vec2Array, 'Vec2Array', classMeta, VecArray);
  setMetadataFor(Companion_7, 'Companion', objectMeta);
  setMetadataFor(Vec3, 'Vec3', classMeta, VOID, [UniformFloat]);
  setMetadataFor(Vec3Array, 'Vec3Array', classMeta, VecArray);
  setMetadataFor(Companion_8, 'Companion', objectMeta);
  setMetadataFor(Vec4, 'Vec4', classMeta, VOID, [UniformFloat]);
  setMetadataFor(Vec4Array, 'Vec4Array', classMeta, VecArray);
  //endregion
  function App$gl$1() {
    this.ba_1 = false;
  }
  function App$registerEventHandlers$lambda(this$0) {
    return function (event) {
      return this$0.ea_1.a(keyNames_getInstance().g(event.keyCode));
    };
  }
  function App$registerEventHandlers$lambda_0(this$0) {
    return function (event) {
      return this$0.ea_1.r4(keyNames_getInstance().g(event.keyCode));
    };
  }
  function App$registerEventHandlers$lambda_1(event) {
    return event;
  }
  function App$registerEventHandlers$lambda_2(event) {
    event.stopPropagation();
    return Unit_getInstance();
  }
  function App$registerEventHandlers$lambda_3(event) {
    return event;
  }
  function App$registerEventHandlers$lambda_4(event) {
    return event;
  }
  function App$registerEventHandlers$lambda_5(this$0) {
    return function (event) {
      this$0.ia();
      return Unit_getInstance();
    };
  }
  function App$registerEventHandlers$lambda_6(this$0) {
    return function (it) {
      this$0.ja();
      return Unit_getInstance();
    };
  }
  function App$update$lambda(this$0) {
    return function (it) {
      this$0.ja();
      return Unit_getInstance();
    };
  }
  function App(canvas, overlay) {
    this.ca_1 = canvas;
    this.da_1 = overlay;
    this.ea_1 = HashSet_init_$Create$();
    var tmp = this;
    var tmp0_elvis_lhs = this.ca_1.getContext('webgl2', new App$gl$1());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw Error_init_$Create$('Browser does not support WebGL2');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var tmp_1 = tmp_0;
    tmp.fa_1 = tmp_1 instanceof WebGL2RenderingContext ? tmp_1 : THROW_CCE();
    this.ga_1 = new Scene(this.fa_1);
    this.ia();
  }
  protoOf(App).ia = function () {
    this.ca_1.width = this.ca_1.clientWidth;
    this.ca_1.height = this.ca_1.clientHeight;
    this.ga_1.nb(this.ca_1);
  };
  protoOf(App).ob = function () {
    var tmp = document;
    tmp.onkeydown = App$registerEventHandlers$lambda(this);
    var tmp_0 = document;
    tmp_0.onkeyup = App$registerEventHandlers$lambda_0(this);
    this.ca_1.onmousedown = App$registerEventHandlers$lambda_1;
    this.ca_1.onmousemove = App$registerEventHandlers$lambda_2;
    this.ca_1.onmouseup = App$registerEventHandlers$lambda_3;
    this.ca_1.onmouseout = App$registerEventHandlers$lambda_4;
    var tmp_1 = window;
    tmp_1.onresize = App$registerEventHandlers$lambda_5(this);
    var tmp_2 = window;
    tmp_2.requestAnimationFrame(App$registerEventHandlers$lambda_6(this));
  };
  protoOf(App).ja = function () {
    this.ga_1.pb(this.ea_1);
    var tmp = window;
    tmp.requestAnimationFrame(App$update$lambda(this));
  };
  function main() {
    var tmp = document.getElementById('canvas');
    var canvas = tmp instanceof HTMLCanvasElement ? tmp : THROW_CCE();
    var tmp_0 = document.getElementById('overlay');
    var overlay = tmp_0 instanceof HTMLDivElement ? tmp_0 : THROW_CCE();
    try {
      var app = new App(canvas, overlay);
      app.ob();
    } catch ($p) {
      if ($p instanceof Error_0) {
        var e = $p;
        console.error(e.message);
      } else {
        throw $p;
      }
    }
  }
  function GameObject(meshes) {
    UniformProvider.call(this, ['gameObject']);
    this.tb_1 = meshes;
    this.ub_1 = Vec3_init_$Create$();
    this.vb_1 = 0.0;
    this.wb_1 = Vec3_init_$Create$(1.0, 1.0, 1.0);
    this.xb_1 = Mat4_init_$Create$(new Float32Array([])).zb(this, modelMatrix$factory());
    this.dc(this.tb_1.slice());
  }
  protoOf(GameObject).ec = function () {
    return this.xb_1.fc(this, modelMatrix$factory_0());
  };
  protoOf(GameObject).ja = function () {
    this.ec().gc(new Float32Array([])).hc(this.wb_1).ic(this.vb_1).jc(this.ub_1);
  };
  protoOf(GameObject).kc = function (dt, t, keysPressed, gameObjects) {
    return true;
  };
  function modelMatrix$factory() {
    return getPropertyCallableRef('modelMatrix', 1, KProperty1, function (receiver) {
      return receiver.ec();
    }, null);
  }
  function modelMatrix$factory_0() {
    return getPropertyCallableRef('modelMatrix', 1, KProperty1, function (receiver) {
      return receiver.ec();
    }, null);
  }
  function keyNames() {
    keyNames_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ha_1 = ['', '', '', 'CANCEL', '', '', 'HELP', '', 'BACK_SPACE', 'TAB', '', '', 'CLEAR', 'ENTER', 'ENTER_SPECIAL', '', 'SHIFT', 'CONTROL', 'ALT', 'PAUSE', 'CAPS_LOCK', 'KANA', 'EISU', 'JUNJA', 'FINAL', 'HANJA', '', 'ESCAPE', 'CONVERT', 'NONCONVERT', 'ACCEPT', 'MODECHANGE', 'SPACE', 'PAGE_UP', 'PAGE_DOWN', 'END', 'HOME', 'LEFT', 'UP', 'RIGHT', 'DOWN', 'SELECT', 'PRINT', 'EXECUTE', 'PRINTSCREEN', 'INSERT', 'DELETE', '', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'COLON', 'SEMICOLON', 'LESS_THAN', 'EQUALS', 'GREATER_THAN', 'QUESTION_MARK', 'AT', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'OS_KEY', '', 'CONTEXT_MENU', '', 'SLEEP', 'NUMPAD0', 'NUMPAD1', 'NUMPAD2', 'NUMPAD3', 'NUMPAD4', 'NUMPAD5', 'NUMPAD6', 'NUMPAD7', 'NUMPAD8', 'NUMPAD9', 'MULTIPLY', 'ADD', 'SEPARATOR', 'SUBTRACT', 'DECIMAL', 'DIVIDE', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20', 'F21', 'F22', 'F23', 'F24', '', '', '', '', '', '', '', '', 'NUM_LOCK', 'SCROLL_LOCK', 'WIN_OEM_FJ_JISHO', 'WIN_OEM_FJ_MASSHOU', 'WIN_OEM_FJ_TOUROKU', 'WIN_OEM_FJ_LOYA', 'WIN_OEM_FJ_ROYA', '', '', '', '', '', '', '', '', '', 'CIRCUMFLEX', 'EXCLAMATION', 'DOUBLE_QUOTE', 'HASH', 'DOLLAR', 'PERCENT', 'AMPERSAND', 'UNDERSCORE', 'OPEN_PAREN', 'CLOSE_PAREN', 'ASTERISK', 'PLUS', 'PIPE', 'HYPHEN_MINUS', 'OPEN_CURLY_BRACKET', 'CLOSE_CURLY_BRACKET', 'TILDE', '', '', '', '', 'VOLUME_MUTE', 'VOLUME_DOWN', 'VOLUME_UP', '', '', 'SEMICOLON', 'EQUALS', 'COMMA', 'MINUS', 'PERIOD', 'SLASH', 'BACK_QUOTE', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', 'OPEN_BRACKET', 'BACK_SLASH', 'CLOSE_BRACKET', 'QUOTE', '', 'META', 'ALTGR', '', 'WIN_ICO_HELP', 'WIN_ICO_00', '', 'WIN_ICO_CLEAR', '', '', 'WIN_OEM_RESET', 'WIN_OEM_JUMP', 'WIN_OEM_PA1', 'WIN_OEM_PA2', 'WIN_OEM_PA3', 'WIN_OEM_WSCTRL', 'WIN_OEM_CUSEL', 'WIN_OEM_ATTN', 'WIN_OEM_FINISH', 'WIN_OEM_COPY', 'WIN_OEM_AUTO', 'WIN_OEM_ENLW', 'WIN_OEM_BACKTAB', 'ATTN', 'CRSEL', 'EXSEL', 'EREOF', 'PLAY', 'ZOOM', '', 'PA1', 'WIN_OEM_CLEAR', ''];
  }
  protoOf(keyNames).g = function (index) {
    return this.ha_1[index];
  };
  var keyNames_instance;
  function keyNames_getInstance() {
    if (keyNames_instance == null)
      new keyNames();
    return keyNames_instance;
  }
  function Material(program) {
    UniformProvider.call(this, ['material']);
    this.dc([program]);
  }
  function Mesh(material, geometry) {
    UniformProvider.call(this, ['mesh']);
    this.dc([material, geometry]);
  }
  function OrthoCamera() {
    UniformProvider.call(this, ['camera']);
    this.rc_1 = Vec2_init_$Create$(0.0, 0.0);
    this.sc_1 = 0.0;
    this.tc_1 = Vec2_init_$Create$(2.0, 2.0);
    this.uc_1 = Mat4_init_$Create$(new Float32Array([])).zb(this, viewProjMatrix$factory());
    this.vc_1 = Mat4_init_$Create$(new Float32Array([])).zb(this, viewProjMatrixInverse$factory());
    this.wc();
  }
  protoOf(OrthoCamera).xc = function () {
    return this.uc_1.fc(this, viewProjMatrix$factory_0());
  };
  protoOf(OrthoCamera).yc = function () {
    return this.vc_1.fc(this, viewProjMatrixInverse$factory_0());
  };
  protoOf(OrthoCamera).wc = function () {
    this.yc().gc(new Float32Array([])).zc(0.7, 1.0).ad(this.tc_1).ic(this.sc_1).bd(this.rc_1);
    this.xc().gc(new Float32Array([])).zc(0.5, 0.5).ad(this.tc_1).ic(this.sc_1).bd(this.rc_1).cd();
  };
  protoOf(OrthoCamera).dd = function (ar) {
    // Inline function 'vision.gears.webglmath.Vec2.x' call
    var tmp1_set_x_3s3knc = this.tc_1;
    // Inline function 'vision.gears.webglmath.Vec2.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2_set_x_ighuvd = this.tc_1.ed_1[1] * ar;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp1_set_x_3s3knc.ed_1[0] = tmp2_set_x_ighuvd;
    this.wc();
  };
  function viewProjMatrix$factory() {
    return getPropertyCallableRef('viewProjMatrix', 1, KProperty1, function (receiver) {
      return receiver.xc();
    }, null);
  }
  function viewProjMatrixInverse$factory() {
    return getPropertyCallableRef('viewProjMatrixInverse', 1, KProperty1, function (receiver) {
      return receiver.yc();
    }, null);
  }
  function viewProjMatrix$factory_0() {
    return getPropertyCallableRef('viewProjMatrix', 1, KProperty1, function (receiver) {
      return receiver.xc();
    }, null);
  }
  function viewProjMatrixInverse$factory_0() {
    return getPropertyCallableRef('viewProjMatrixInverse', 1, KProperty1, function (receiver) {
      return receiver.yc();
    }, null);
  }
  function PhysicsGameObject(meshes) {
    GameObject.call(this, meshes.slice());
    this.nd_1 = 1;
    this.od_1 = 0;
    this.pd_1 = 0;
    this.qd_1 = 1;
    this.rd_1 = true;
    this.sd_1 = '';
    this.td_1 = Vec3_init_$Create$();
    this.ud_1 = Vec3_init_$Create$();
    this.vd_1 = Vec3_init_$Create$();
    this.wd_1 = 0.0;
    this.xd_1 = 0.0;
    this.yd_1 = 0.0;
    this.zd_1 = 1.0;
    this.ae_1 = 1.0;
    this.be_1 = 1.0;
  }
  protoOf(PhysicsGameObject).ce = function (dt, t, keysPressed, gameObjects) {
    return true;
  };
  protoOf(PhysicsGameObject).de = function (dt, t, keysPressed, gameObjects) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = gameObjects.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'PhysicsGameObject.collision.<anonymous>' call
      if (element instanceof PhysicsGameObject) {
        if (this.nd_1 <= 0) {
          this.rd_1 = false;
        }
        if (element.nd_1 <= 0) {
          element.rd_1 = false;
        }
        if ((((((((((!equals(element, this) ? !(this.sd_1 === 'justin') ? true : !(element.sd_1 === 'missile') : false) ? !(this.sd_1 === 'missile') ? true : !(element.sd_1 === 'justin') : false) ? !(this.sd_1 === 'ritvik') ? true : !(element.sd_1 === 'milk') : false) ? !(this.sd_1 === 'milk') ? true : !(element.sd_1 === 'ritvik') : false) ? !(this.sd_1 === 'ramsey') ? true : !(element.sd_1 === 'milk') : false) ? !(this.sd_1 === 'milk') ? true : !(element.sd_1 === 'ramsey') : false) ? !(this.sd_1 === 'ramsey') ? true : !(element.sd_1 === 'cheese') : false) ? !(this.sd_1 === 'cheese') ? true : !(element.sd_1 === 'ramsey') : false) ? !(this.sd_1 === 'ritvik') ? true : !(element.sd_1 === 'cheese') : false) ? !(this.sd_1 === 'cheese') ? true : !(element.sd_1 === 'ritvik') : false) {
          // Inline function 'vision.gears.webglmath.Vec3.minus' call
          var tmp0_minus = this.ub_1;
          var tmp1_minus = element.ub_1;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = tmp0_minus.ee_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = tmp - tmp1_minus.ee_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = tmp0_minus.ee_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_2 = tmp_1 - tmp1_minus.ee_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_3 = tmp0_minus.ee_1[2];
          var tmp$ret$11;
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          tmp$ret$11 = tmp1_minus.ee_1[2];
          var diff = Vec3_init_$Create$(tmp_0, tmp_2, tmp_3 - tmp$ret$11);
          // Inline function 'vision.gears.webglmath.Vec3.length' call
          // Inline function 'kotlin.math.sqrt' call
          // Inline function 'vision.gears.webglmath.Vec3.lengthSquared' call
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_4 = diff.ee_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_5 = tmp_4 * diff.ee_1[0];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_6 = diff.ee_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_7 = tmp_5 + tmp_6 * diff.ee_1[1];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_8 = diff.ee_1[2];
          // Inline function 'org.khronos.webgl.get' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp0_sqrt = tmp_7 + tmp_8 * diff.ee_1[2];
          var dist = Math.sqrt(tmp0_sqrt);
          if (dist < this.zd_1 + element.zd_1) {
            if (!(this.sd_1 === element.sd_1)) {
              if (!(this.sd_1 === 'milk') ? true : !(element.sd_1 === 'justin')) {
                this.nd_1 = this.nd_1 - element.od_1 | 0;
              }
              if (!(element.sd_1 === 'milk') ? true : !(this.sd_1 === 'justin')) {
                element.nd_1 = element.nd_1 - this.od_1 | 0;
              }
              if (element.sd_1 === 'ramsey' ? this.sd_1 === 'justin' : false) {
                this.pd_1 = this.pd_1 + 1 | 0;
              }
              if (this.sd_1 === 'ramsey' ? element.sd_1 === 'justin' : false) {
                element.pd_1 = element.pd_1 + 1 | 0;
              }
              if (element.sd_1 === 'ritvik' ? this.sd_1 === 'justin' : false) {
                this.qd_1 = this.qd_1 + 1 | 0;
              }
              if (this.sd_1 === 'ritvik' ? element.sd_1 === 'justin' : false) {
                element.qd_1 = element.qd_1 + 1 | 0;
              }
              if (this.nd_1 <= 0 ? this.sd_1 === 'justin' : false) {
                var tmp_9 = document.getElementById('overlay');
                var overlay = tmp_9 instanceof HTMLDivElement ? tmp_9 : THROW_CCE();
                overlay.innerHTML = '<font color="red" style="font-size: 36px; font-family: \'Comic Sans MS\', sans-serif; position: fixed; bottom: 10px; left: 15px;">YOU WERE MILKED<br>Reload the page to try again.<\/font>';
              }
              if (element.nd_1 <= 0 ? element.sd_1 === 'justin' : false) {
                var tmp_10 = document.getElementById('overlay');
                var overlay_0 = tmp_10 instanceof HTMLDivElement ? tmp_10 : THROW_CCE();
                overlay_0.innerHTML = '<font color="red" style="font-size: 36px; font-family: \'Comic Sans MS\', sans-serif; position: fixed; bottom: 10px; left: 15px;">YOU WERE MILKED<br>Reload the page to try again.<\/font>';
              }
            }
            // Inline function 'vision.gears.webglmath.Vec3.normalize' call
            // Inline function 'vision.gears.webglmath.Vec3.length' call
            // Inline function 'kotlin.math.sqrt' call
            // Inline function 'vision.gears.webglmath.Vec3.lengthSquared' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_11 = diff.ee_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_12 = tmp_11 * diff.ee_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_13 = diff.ee_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_14 = tmp_12 + tmp_13 * diff.ee_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_15 = diff.ee_1[2];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp0_sqrt_0 = tmp_14 + tmp_15 * diff.ee_1[2];
            var l = Math.sqrt(tmp0_sqrt_0);
            var tmp0_array = diff.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array[0] = tmp0_array[0] / l;
            var tmp2_array = diff.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array[1] = tmp2_array[1] / l;
            var tmp4_array = diff.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp4_array[2] = tmp4_array[2] / l;
            var collisionNormal = diff;
            // Inline function 'vision.gears.webglmath.Vec3.plusAssign' call
            var tmp7_plusAssign = this.ub_1;
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            // Inline function 'vision.gears.webglmath.Vec3.div' call
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            var tmp2_times = this.ae_1;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_16 = collisionNormal.ee_1[0] * tmp2_times;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_17 = collisionNormal.ee_1[1] * tmp2_times;
            var tmp$ret$58;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$58 = collisionNormal.ee_1[2];
            var tmp3_div = Vec3_init_$Create$(tmp_16, tmp_17, tmp$ret$58 * tmp2_times);
            var tmp4_div = this.ae_1 + element.ae_1;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_18 = tmp3_div.ee_1[0] / tmp4_div;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_19 = tmp3_div.ee_1[1] / tmp4_div;
            var tmp$ret$65;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$65 = tmp3_div.ee_1[2];
            var tmp5_times = Vec3_init_$Create$(tmp_18, tmp_19, tmp$ret$65 / tmp4_div);
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_20 = tmp5_times.ee_1[0] * dist;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_21 = tmp5_times.ee_1[1] * dist;
            var tmp$ret$72;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$72 = tmp5_times.ee_1[2];
            var tmp6_times = Vec3_init_$Create$(tmp_20, tmp_21, tmp$ret$72 * dist);
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_22 = tmp6_times.ee_1[0] * 0.09;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_23 = tmp6_times.ee_1[1] * 0.09;
            var tmp$ret$79;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$79 = tmp6_times.ee_1[2];
            var tmp8_plusAssign = Vec3_init_$Create$(tmp_22, tmp_23, tmp$ret$79 * 0.09);
            var tmp0_array_0 = tmp7_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_24 = tmp0_array_0[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array_0[0] = tmp_24 + tmp8_plusAssign.ee_1[0];
            var tmp2_array_0 = tmp7_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_25 = tmp2_array_0[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array_0[1] = tmp_25 + tmp8_plusAssign.ee_1[1];
            var tmp4_array_0 = tmp7_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_26 = tmp4_array_0[2];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp4_array_0[2] = tmp_26 + tmp8_plusAssign.ee_1[2];
            // Inline function 'vision.gears.webglmath.Vec3.plusAssign' call
            var tmp14_plusAssign = element.ub_1;
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            // Inline function 'vision.gears.webglmath.Vec3.div' call
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            var tmp9_times = element.ae_1;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_27 = collisionNormal.ee_1[0] * tmp9_times;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_28 = collisionNormal.ee_1[1] * tmp9_times;
            var tmp$ret$101;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$101 = collisionNormal.ee_1[2];
            var tmp10_div = Vec3_init_$Create$(tmp_27, tmp_28, tmp$ret$101 * tmp9_times);
            var tmp11_div = this.ae_1 + element.ae_1;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_29 = tmp10_div.ee_1[0] / tmp11_div;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_30 = tmp10_div.ee_1[1] / tmp11_div;
            var tmp$ret$108;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$108 = tmp10_div.ee_1[2];
            var tmp12_times = Vec3_init_$Create$(tmp_29, tmp_30, tmp$ret$108 / tmp11_div);
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_31 = tmp12_times.ee_1[0] * dist;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_32 = tmp12_times.ee_1[1] * dist;
            var tmp$ret$115;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$115 = tmp12_times.ee_1[2];
            var tmp13_times = Vec3_init_$Create$(tmp_31, tmp_32, tmp$ret$115 * dist);
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_33 = tmp13_times.ee_1[0] * -0.09;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_34 = tmp13_times.ee_1[1] * -0.09;
            var tmp$ret$122;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$122 = tmp13_times.ee_1[2];
            var tmp15_plusAssign = Vec3_init_$Create$(tmp_33, tmp_34, tmp$ret$122 * -0.09);
            var tmp0_array_1 = tmp14_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_35 = tmp0_array_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array_1[0] = tmp_35 + tmp15_plusAssign.ee_1[0];
            var tmp2_array_1 = tmp14_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_36 = tmp2_array_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array_1[1] = tmp_36 + tmp15_plusAssign.ee_1[1];
            var tmp4_array_1 = tmp14_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_37 = tmp4_array_1[2];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp4_array_1[2] = tmp_37 + tmp15_plusAssign.ee_1[2];
            // Inline function 'vision.gears.webglmath.Vec3.y' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_38 = -collisionNormal.ee_1[1];
            var tmp$ret$144;
            // Inline function 'vision.gears.webglmath.Vec3.x' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$144 = collisionNormal.ee_1[0];
            var collisionTangent = Vec3_init_$Create$(tmp_38, tmp$ret$144, 0.0);
            // Inline function 'vision.gears.webglmath.Vec3.minus' call
            var tmp16_minus = this.td_1;
            var tmp17_minus = element.td_1;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_39 = tmp16_minus.ee_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_40 = tmp_39 - tmp17_minus.ee_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_41 = tmp16_minus.ee_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_42 = tmp_41 - tmp17_minus.ee_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_43 = tmp16_minus.ee_1[2];
            var tmp$ret$156;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$156 = tmp17_minus.ee_1[2];
            var relativeVelocity = Vec3_init_$Create$(tmp_40, tmp_42, tmp_43 - tmp$ret$156);
            var restitutionCoeff = 0.8;
            // Inline function 'vision.gears.webglmath.Vec3.dot' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_44 = collisionNormal.ee_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_45 = tmp_44 * relativeVelocity.ee_1[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_46 = collisionNormal.ee_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_47 = tmp_45 + tmp_46 * relativeVelocity.ee_1[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_48 = collisionNormal.ee_1[2];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var impulseLength = (tmp_47 + tmp_48 * relativeVelocity.ee_1[2]) / (this.ae_1 + element.ae_1) * (1.0 + restitutionCoeff);
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_49 = collisionNormal.ee_1[0] * impulseLength;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_50 = collisionNormal.ee_1[1] * impulseLength;
            var tmp$ret$176;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$176 = collisionNormal.ee_1[2];
            var restitution = Vec3_init_$Create$(tmp_49, tmp_50, tmp$ret$176 * impulseLength);
            // Inline function 'vision.gears.webglmath.Vec3.minusAssign' call
            var tmp19_minusAssign = this.td_1;
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            var tmp18_times = this.ae_1;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_51 = restitution.ee_1[0] * tmp18_times;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_52 = restitution.ee_1[1] * tmp18_times;
            var tmp$ret$183;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$183 = restitution.ee_1[2];
            var tmp20_minusAssign = Vec3_init_$Create$(tmp_51, tmp_52, tmp$ret$183 * tmp18_times);
            var tmp0_array_2 = tmp19_minusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_53 = tmp0_array_2[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array_2[0] = tmp_53 - tmp20_minusAssign.ee_1[0];
            var tmp2_array_2 = tmp19_minusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_54 = tmp2_array_2[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array_2[1] = tmp_54 - tmp20_minusAssign.ee_1[1];
            var tmp4_array_2 = tmp19_minusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_55 = tmp4_array_2[2];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp4_array_2[2] = tmp_55 - tmp20_minusAssign.ee_1[2];
            // Inline function 'vision.gears.webglmath.Vec3.plusAssign' call
            var tmp22_plusAssign = element.td_1;
            // Inline function 'vision.gears.webglmath.Vec3.times' call
            var tmp21_times = element.ae_1;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_56 = restitution.ee_1[0] * tmp21_times;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_57 = restitution.ee_1[1] * tmp21_times;
            var tmp$ret$205;
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp$ret$205 = restitution.ee_1[2];
            var tmp23_plusAssign = Vec3_init_$Create$(tmp_56, tmp_57, tmp$ret$205 * tmp21_times);
            var tmp0_array_3 = tmp22_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_58 = tmp0_array_3[0];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp0_array_3[0] = tmp_58 + tmp23_plusAssign.ee_1[0];
            var tmp2_array_3 = tmp22_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_59 = tmp2_array_3[1];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp2_array_3[1] = tmp_59 + tmp23_plusAssign.ee_1[1];
            var tmp4_array_3 = tmp22_plusAssign.ee_1;
            // Inline function 'org.khronos.webgl.set' call
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            var tmp_60 = tmp4_array_3[2];
            // Inline function 'org.khronos.webgl.get' call
            // Inline function 'kotlin.js.asDynamic' call
            // Inline function 'kotlin.js.asDynamic' call
            tmp4_array_3[2] = tmp_60 + tmp23_plusAssign.ee_1[2];
          }
        }
      }
    }
    return true;
  };
  protoOf(PhysicsGameObject).kc = function (dt, t, keysPressed, gameObjects) {
    this.ce(dt, t, keysPressed, gameObjects);
    var tmp$ret$6;
    // Inline function 'vision.gears.webglmath.Vec3.times' call
    var tmp0_times = this.vd_1;
    var tmp1_times = this.ae_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_times.ee_1[0] * tmp1_times;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp0_times.ee_1[1] * tmp1_times;
    var tmp$ret$5;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = tmp0_times.ee_1[2];
    tmp$ret$6 = Vec3_init_$Create$(tmp, tmp_0, tmp$ret$5 * tmp1_times);
    this.ud_1.fe(tmp$ret$6);
    // Inline function 'vision.gears.webglmath.Vec3.plusAssign' call
    var tmp3_plusAssign = this.td_1;
    // Inline function 'vision.gears.webglmath.Vec3.times' call
    var tmp2_times = this.ud_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp2_times.ee_1[0] * dt;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp2_times.ee_1[1] * dt;
    var tmp$ret$12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$12 = tmp2_times.ee_1[2];
    var tmp4_plusAssign = Vec3_init_$Create$(tmp_1, tmp_2, tmp$ret$12 * dt);
    var tmp0_array = tmp3_plusAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp_3 + tmp4_plusAssign.ee_1[0];
    var tmp2_array = tmp3_plusAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp2_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp_4 + tmp4_plusAssign.ee_1[1];
    var tmp4_array = tmp3_plusAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp4_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp_5 + tmp4_plusAssign.ee_1[2];
    // Inline function 'vision.gears.webglmath.Vec3.plusAssign' call
    var tmp6_plusAssign = this.ub_1;
    // Inline function 'vision.gears.webglmath.Vec3.times' call
    var tmp5_times = this.td_1;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp5_times.ee_1[0] * dt;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp5_times.ee_1[1] * dt;
    var tmp$ret$34;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$34 = tmp5_times.ee_1[2];
    var tmp7_plusAssign = Vec3_init_$Create$(tmp_6, tmp_7, tmp$ret$34 * dt);
    var tmp0_array_0 = tmp6_plusAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp0_array_0[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array_0[0] = tmp_8 + tmp7_plusAssign.ee_1[0];
    var tmp2_array_0 = tmp6_plusAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp2_array_0[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array_0[1] = tmp_9 + tmp7_plusAssign.ee_1[1];
    var tmp4_array_0 = tmp6_plusAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp4_array_0[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array_0[2] = tmp_10 + tmp7_plusAssign.ee_1[2];
    this.xd_1 = this.yd_1 * this.be_1;
    this.wd_1 = this.wd_1 + this.xd_1 * dt;
    this.vb_1 = this.vb_1 + this.wd_1 * dt;
    // Inline function 'vision.gears.webglmath.Vec3.timesAssign' call
    var tmp9_timesAssign = this.td_1;
    // Inline function 'kotlin.math.exp' call
    var tmp8_exp = -dt;
    var tmp10_timesAssign = Math.exp(tmp8_exp);
    var tmp0_array_1 = tmp9_timesAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array_1[0] = tmp0_array_1[0] * tmp10_timesAssign;
    var tmp2_array_1 = tmp9_timesAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array_1[1] = tmp2_array_1[1] * tmp10_timesAssign;
    var tmp4_array_1 = tmp9_timesAssign.ee_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array_1[2] = tmp4_array_1[2] * tmp10_timesAssign;
    var tmp_11 = this;
    var tmp_12 = this.wd_1;
    // Inline function 'kotlin.math.exp' call
    var tmp11_exp = -dt;
    tmp_11.wd_1 = tmp_12 * Math.exp(tmp11_exp);
    this.de(dt, t, keysPressed, gameObjects);
    return true;
  };
  function Companion() {
    Companion_instance = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.ge_1 = ['vertexPosition', 'vertexColor'];
    var tmp_0 = this;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.he_1 = ['vertexPosition', 'vertexNormal', 'vertexTexCoord'];
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function Program(gl, vertexShader, fragmentShader, attributeBindings) {
    Companion_getInstance();
    attributeBindings = attributeBindings === VOID ? Companion_getInstance().he_1 : attributeBindings;
    UniformProvider.call(this, ['program']);
    this.le_1 = gl;
    this.me_1 = vertexShader;
    this.ne_1 = fragmentShader;
    var tmp = this;
    var tmp0_elvis_lhs = this.le_1.createProgram();
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw Error_init_$Create$('Could not create WebGL program.');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.oe_1 = tmp_0;
    this.le_1.attachShader(this.oe_1, this.me_1.se_1);
    this.le_1.attachShader(this.oe_1, this.ne_1.se_1);
    var attributeIndex = 0;
    // Inline function 'kotlin.collections.forEach' call
    var inductionVariable = 0;
    var last = attributeBindings.length;
    while (inductionVariable < last) {
      var element = attributeBindings[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      // Inline function 'Program.<anonymous>' call
      var tmp0 = attributeIndex;
      attributeIndex = tmp0 + 1 | 0;
      this.le_1.bindAttribLocation(this.oe_1, tmp0, element);
    }
    this.le_1.linkProgram(this.oe_1);
    if (equals(this.le_1.getProgramParameter(this.oe_1, WebGLRenderingContext.LINK_STATUS), false)) {
      throw Error_init_$Create$('Could not link shaders [vertex shader: ' + this.me_1.re_1 + ']:[fragment shader: ' + this.ne_1.re_1 + '\n' + this.le_1.getProgramInfoLog(this.oe_1));
    }
    this.dc([new ProgramReflection(this.le_1, this.oe_1)]);
  }
  function Scene$avatar$1(this$0) {
    this.dg_1 = this$0;
    PhysicsGameObject.call(this, [this$0.cb_1]);
    this.qf_1 = -5.0;
    this.rf_1 = 0.0;
    this.sf_1 = 0.0;
    this.tf_1 = false;
    this.uf_1 = 0.0;
    this.vf_1 = 0.0;
    this.wf_1 = 0.0;
    this.xf_1 = 0.5;
    this.yf_1 = 1.0;
    this.zf_1 = 1;
    this.ag_1 = 20.0;
    this.bg_1 = 0.25;
    this.cg_1 = true;
  }
  protoOf(Scene$avatar$1).ce = function (dt, t, keysPressed, gameObjects) {
    if (t - this.uf_1 > 3) {
      var inductionVariable = 1;
      var last = this.zf_1;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          this.dg_1.eg(this.xf_1);
        }
         while (!(i === last));
      this.uf_1 = t;
      this.xf_1 = this.xf_1 + this.yf_1;
      if (this.xf_1 / 5 > this.zf_1) {
        this.zf_1 = this.zf_1 + 1 | 0;
      }
    }
    if (t - this.vf_1 > 15) {
      this.dg_1.fg();
      this.vf_1 = t;
    }
    if (t - this.wf_1 > 1) {
      var powerChance = Default_getInstance().i2() * 30;
      if (powerChance <= 14.0 ? powerChance >= 13.0 : false) {
        var typeChance = Default_getInstance().i2() * 30;
        if (typeChance < 20) {
          this.dg_1.hg(15.0, 15.0);
        } else {
          this.dg_1.gg(-15.0, -15.0);
        }
      }
      this.wf_1 = t;
    }
    if (keysPressed.p('A')) {
      this.rf_1 = -1 * this.ag_1 - this.pd_1 * 5.0;
    } else if (keysPressed.p('D')) {
      this.rf_1 = this.ag_1 + this.pd_1 * 5.0;
    } else {
      this.rf_1 = 0.0;
    }
    var tmp;
    if (keysPressed.p('W') ? true : keysPressed.p('SPACE')) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = this.ub_1.ee_1[1] <= -8.0;
    } else {
      tmp = false;
    }
    if (tmp) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.td_1.ee_1[1] = 50.0;
      this.tf_1 = false;
      if (this.rf_1 > 0.0) {
        this.yd_1 = -30.0;
      } else {
        this.yd_1 = 30.0;
      }
    }
    if ((keysPressed.p('O') ? true : keysPressed.p('P')) ? this.cg_1 : false) {
      console.log(this.pd_1);
      console.log(this.qd_1);
      this.cg_1 = false;
      if (t - this.uf_1 > this.bg_1) {
        if (keysPressed.p('O')) {
          var inductionVariable_0 = 1;
          var last_0 = this.qd_1;
          if (inductionVariable_0 <= last_0)
            do {
              var i_0 = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + 1 | 0;
              this.dg_1.ig(-1.5);
            }
             while (!(i_0 === last_0));
        } else {
          var inductionVariable_1 = 1;
          var last_1 = this.qd_1;
          if (inductionVariable_1 <= last_1)
            do {
              var i_1 = inductionVariable_1;
              inductionVariable_1 = inductionVariable_1 + 1 | 0;
              this.dg_1.ig(1.5);
            }
             while (!(i_1 === last_1));
        }
        this.uf_1 = t;
      }
    }
    if (!(keysPressed.p('P') ? true : keysPressed.p('O'))) {
      this.cg_1 = true;
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] <= -8.0) {
      if (!this.tf_1 ? this.sf_1 < 0.0 : false) {
        this.tf_1 = true;
        this.sf_1 = 0.0;
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.ud_1.ee_1[1] = 0.0;
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.td_1.ee_1[1] = 0.0;
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.ub_1.ee_1[1] = -8.0;
        this.yd_1 = 0.0;
        this.wd_1 = 0.0;
        this.xd_1 = 0.0;
      } else if (this.tf_1) {
        if (keysPressed.p('A')) {
          this.yd_1 = 10.0 + this.pd_1 * 2.5;
        } else if (keysPressed.p('D')) {
          this.yd_1 = -10.0 - this.pd_1 * 2.5;
        } else {
          this.yd_1 = 0.0;
        }
      }
    } else {
      this.sf_1 = this.sf_1 + this.qf_1;
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] <= -8.001) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = -8.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[0] > 124.0) {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[0] = 124.0;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[0] < -124.5) {
        // Inline function 'vision.gears.webglmath.Vec3.x' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.ub_1.ee_1[0] = -124.5;
      }
    }
    var walk = Vec3_init_$Create$(this.rf_1, this.sf_1, 0.0);
    this.vd_1.fe(walk);
    var speedDisp = this.pd_1 + 1 | 0;
    var tmp_0 = document.getElementById('overlay');
    var overlay = tmp_0 instanceof HTMLDivElement ? tmp_0 : THROW_CCE();
    overlay.innerHTML = '<font color="red" style="font-size: 36px; font-family: \'Comic Sans MS\', sans-serif; position: fixed; bottom: 10px; left: 15px;">Round: ' + this.zf_1 + '<br><\/font>\n                               <font color="red" style="font-size: 36px; font-family: \'Comic Sans MS\', sans-serif; position: fixed; bottom: 110px; right: 15px;">' + this.nd_1 + ' \u2661<\/font>\n                               <font color="red" style="font-size: 36px; font-family: \'Comic Sans MS\', sans-serif; position: fixed; bottom: 60px; right: 15px;">Speed: ' + speedDisp + '<\/font>\n                               <font color="red" style="font-size: 36px; font-family: \'Comic Sans MS\', sans-serif; position: fixed; bottom: 10px; right: 15px;">Multishot x' + this.qd_1 + '<\/font>';
    return true;
  };
  function Scene$chase$item$1($speedBoost, this$0) {
    this.kh_1 = this$0;
    PhysicsGameObject.call(this, [this$0.db_1]);
    this.gh_1 = 0.0;
    this.hh_1 = 0.0;
    this.ih_1 = 20.0 + $speedBoost;
    this.jh_1 = 0.0;
  }
  protoOf(Scene$chase$item$1).ce = function (dt, t, keysPressed, gameObjects) {
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.kh_1.kb_1.ub_1.ee_1[0];
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var directionX = tmp - this.ub_1.ee_1[0];
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = this.kh_1.kb_1.ub_1.ee_1[1];
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var directionY = tmp_0 - this.ub_1.ee_1[1];
    // Inline function 'kotlin.math.sqrt' call
    var tmp4_sqrt = directionX * directionX + directionY * directionY;
    var distance = Math.sqrt(tmp4_sqrt);
    if (distance > 0) {
      this.gh_1 = directionX / distance * this.ih_1;
      this.hh_1 = directionY / distance * this.ih_1;
    }
    this.vd_1.fe(Vec3_init_$Create$(this.gh_1, this.hh_1, 0.0));
    var tmp_1 = this;
    // Inline function 'kotlin.math.atan' call
    var tmp5_atan = this.hh_1 / this.gh_1;
    tmp_1.vb_1 = Math.atan(tmp5_atan);
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.0) {
      this.hh_1 = this.hh_1 * -1.0;
      var tmp1_this = this.td_1;
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp7_set_y_ktd80f = tmp1_this.ee_1[1] * -1.0;
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp1_this.ee_1[1] = tmp7_set_y_ktd80f;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[1] > 10.0) {
        this.hh_1 = this.hh_1 * -1.0;
        var tmp3_this = this.td_1;
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp9_set_y_kuy9in = tmp3_this.ee_1[1] * -1.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp3_this.ee_1[1] = tmp9_set_y_kuy9in;
      }
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = -8.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] > 10.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = 10.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[0] > 124.0) {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[0] = 124.0;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[0] < -124.5) {
        // Inline function 'vision.gears.webglmath.Vec3.x' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.ub_1.ee_1[0] = -124.5;
      }
    }
    var move = Vec3_init_$Create$(this.gh_1, this.hh_1, 0.0);
    this.vd_1.fe(move);
    return true;
  };
  function Scene$bounce$b$1(this$0) {
    PhysicsGameObject.call(this, [this$0.fb_1]);
    this.ii_1 = Default_getInstance().i2() * 10 - 5;
    this.ji_1 = Default_getInstance().i2() * 10 - 5;
  }
  protoOf(Scene$bounce$b$1).ce = function (dt, t, keysPressed, gameObjects) {
    this.vd_1.fe(Vec3_init_$Create$(this.ii_1, this.ji_1, 0.0));
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.0) {
      this.ji_1 = this.ji_1 * -1.0;
      var tmp1_this = this.td_1;
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_set_y_3s3knd = tmp1_this.ee_1[1] * -1.0;
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp1_this.ee_1[1] = tmp1_set_y_3s3knd;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[1] > 10.0) {
        this.ji_1 = this.ji_1 * -1.0;
        var tmp3_this = this.td_1;
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp3_set_y_x4w53f = tmp3_this.ee_1[1] * -1.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp3_this.ee_1[1] = tmp3_set_y_x4w53f;
      }
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = -8.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] > 10.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = 10.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[0] > 124.0) {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[0] = 124.0;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[0] < -124.5) {
        // Inline function 'vision.gears.webglmath.Vec3.x' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.ub_1.ee_1[0] = -124.5;
      }
    }
    var move = Vec3_init_$Create$(this.ii_1, this.ji_1, 0.0);
    this.vd_1.fe(move);
    return true;
  };
  function Scene$speedPowerup$b$1($i_X, $i_Y, this$0) {
    PhysicsGameObject.call(this, [this$0.gb_1]);
    this.hj_1 = $i_X;
    this.ij_1 = $i_Y;
  }
  protoOf(Scene$speedPowerup$b$1).ce = function (dt, t, keysPressed, gameObjects) {
    this.vd_1.fe(Vec3_init_$Create$(this.hj_1, this.ij_1, 0.0));
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.0) {
      this.ij_1 = this.ij_1 * -1.0;
      var tmp1_this = this.td_1;
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_set_y_3s3knd = tmp1_this.ee_1[1] * -1.0;
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp1_this.ee_1[1] = tmp1_set_y_3s3knd;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[1] > 10.0) {
        this.ij_1 = this.ij_1 * -1.0;
        var tmp3_this = this.td_1;
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp3_set_y_x4w53f = tmp3_this.ee_1[1] * -1.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp3_this.ee_1[1] = tmp3_set_y_x4w53f;
      }
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = -8.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] > 10.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = 10.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[0] > 124.0) {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[0] = 124.0;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[0] < -124.5) {
        // Inline function 'vision.gears.webglmath.Vec3.x' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.ub_1.ee_1[0] = -124.5;
      }
    }
    var move = Vec3_init_$Create$(this.hj_1, this.ij_1, 0.0);
    this.vd_1.fe(move);
    return true;
  };
  function Scene$bulletPowerup$b$1($i_X, $i_Y, this$0) {
    PhysicsGameObject.call(this, [this$0.hb_1]);
    this.gk_1 = $i_X;
    this.hk_1 = $i_Y;
  }
  protoOf(Scene$bulletPowerup$b$1).ce = function (dt, t, keysPressed, gameObjects) {
    this.vd_1.fe(Vec3_init_$Create$(this.gk_1, this.hk_1, 0.0));
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.0) {
      this.hk_1 = this.hk_1 * -1.0;
      var tmp1_this = this.td_1;
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp1_set_y_3s3knd = tmp1_this.ee_1[1] * -1.0;
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp1_this.ee_1[1] = tmp1_set_y_3s3knd;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[1] > 10.0) {
        this.hk_1 = this.hk_1 * -1.0;
        var tmp3_this = this.td_1;
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'vision.gears.webglmath.Vec3.y' call
        // Inline function 'org.khronos.webgl.get' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp3_set_y_x4w53f = tmp3_this.ee_1[1] * -1.0;
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp3_this.ee_1[1] = tmp3_set_y_x4w53f;
      }
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] < -8.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = -8.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[1] > 10.05) {
      // Inline function 'vision.gears.webglmath.Vec3.y' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[1] = 10.0;
    }
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[0] > 124.0) {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this.ub_1.ee_1[0] = 124.0;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[0] < -124.5) {
        // Inline function 'vision.gears.webglmath.Vec3.x' call
        // Inline function 'org.khronos.webgl.set' call
        // Inline function 'kotlin.js.asDynamic' call
        this.ub_1.ee_1[0] = -124.5;
      }
    }
    var move = Vec3_init_$Create$(this.gk_1, this.hk_1, 0.0);
    this.vd_1.fe(move);
    return true;
  };
  function Scene$fire$missile$1(this$0, $direc) {
    this.fl_1 = $direc;
    PhysicsGameObject.call(this, [this$0.eb_1]);
  }
  protoOf(Scene$fire$missile$1).ce = function (dt, t, keysPressed, gameObjects) {
    var f = Vec3_init_$Create$(50.0, 0.0, 0.0);
    if (this.fl_1 < 0) {
      f = Vec3_init_$Create$(-50.0, 0.0, 0.0);
    }
    this.vd_1.fe(f);
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    if (this.ub_1.ee_1[0] > 154.0) {
      this.nd_1 = 0;
    } else {
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      if (this.ub_1.ee_1[0] < -154.5) {
        this.nd_1 = 0;
      }
    }
    return true;
  };
  function Scene(gl) {
    UniformProvider.call(this, ['scene']);
    this.na_1 = gl;
    this.oa_1 = new Shader(this.na_1, WebGLRenderingContext.VERTEX_SHADER, 'textured-vs.glsl');
    this.pa_1 = new Shader(this.na_1, WebGLRenderingContext.VERTEX_SHADER, 'background-vs.glsl');
    this.qa_1 = new Shader(this.na_1, WebGLRenderingContext.FRAGMENT_SHADER, 'textured-fs.glsl');
    this.ra_1 = new Program(this.na_1, this.oa_1, this.qa_1);
    this.sa_1 = new Program(this.na_1, this.pa_1, this.qa_1);
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply = new Material(this.ra_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.fighterMaterial.<anonymous>' call
    var tmp0_safe_receiver = tmp0_apply.o3('colorTexture');
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.gl(new Texture2D(this.na_1, 'media/justin_avatar.png'), []);
    }
    tmp.ta_1 = tmp0_apply;
    var tmp_0 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_0 = new Material(this.sa_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.backgroundMaterial.<anonymous>' call
    var tmp0_safe_receiver_0 = tmp0_apply_0.o3('colorTexture');
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      tmp0_safe_receiver_0.gl(new Texture2D(this.na_1, 'media/heritage_background.webp'), []);
    }
    tmp_0.ua_1 = tmp0_apply_0;
    var tmp_1 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_1 = new Material(this.ra_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.itemMaterial.<anonymous>' call
    var tmp0_safe_receiver_1 = tmp0_apply_1.o3('colorTexture');
    if (tmp0_safe_receiver_1 == null)
      null;
    else {
      tmp0_safe_receiver_1.gl(new Texture2D(this.na_1, 'media/almondmilk.png'), []);
    }
    tmp_1.va_1 = tmp0_apply_1;
    var tmp_2 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_2 = new Material(this.ra_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.shootMaterial.<anonymous>' call
    var tmp0_safe_receiver_2 = tmp0_apply_2.o3('colorTexture');
    if (tmp0_safe_receiver_2 == null)
      null;
    else {
      tmp0_safe_receiver_2.gl(new Texture2D(this.na_1, 'media/ryan.webp'), []);
    }
    tmp_2.wa_1 = tmp0_apply_2;
    var tmp_3 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_3 = new Material(this.ra_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.bounceMaterial.<anonymous>' call
    var tmp0_safe_receiver_3 = tmp0_apply_3.o3('colorTexture');
    if (tmp0_safe_receiver_3 == null)
      null;
    else {
      tmp0_safe_receiver_3.gl(new Texture2D(this.na_1, 'media/cheese_packet_full.png'), []);
    }
    tmp_3.xa_1 = tmp0_apply_3;
    var tmp_4 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_4 = new Material(this.ra_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.speedMaterial.<anonymous>' call
    var tmp0_safe_receiver_4 = tmp0_apply_4.o3('colorTexture');
    if (tmp0_safe_receiver_4 == null)
      null;
    else {
      tmp0_safe_receiver_4.gl(new Texture2D(this.na_1, 'media/ramsey_head.png'), []);
    }
    tmp_4.ya_1 = tmp0_apply_4;
    var tmp_5 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_5 = new Material(this.ra_1);
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.bulletMaterial.<anonymous>' call
    var tmp0_safe_receiver_5 = tmp0_apply_5.o3('colorTexture');
    if (tmp0_safe_receiver_5 == null)
      null;
    else {
      tmp0_safe_receiver_5.gl(new Texture2D(this.na_1, 'media/ritvik_spelling.png'), []);
    }
    tmp_5.za_1 = tmp0_apply_5;
    this.ab_1 = new TexturedQuadGeometry(this.na_1);
    this.bb_1 = new Mesh(this.ua_1, this.ab_1);
    this.cb_1 = new Mesh(this.ta_1, this.ab_1);
    this.db_1 = new Mesh(this.va_1, this.ab_1);
    this.eb_1 = new Mesh(this.wa_1, this.ab_1);
    this.fb_1 = new Mesh(this.xa_1, this.ab_1);
    this.gb_1 = new Mesh(this.ya_1, this.ab_1);
    this.hb_1 = new Mesh(this.za_1, this.ab_1);
    var tmp_6 = this;
    // Inline function 'kotlin.apply' call
    var tmp0_apply_6 = new OrthoCamera();
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'Scene.camera.<anonymous>' call
    tmp0_apply_6.rc_1.gc(new Float32Array([1.0, 1.0]));
    tmp0_apply_6.tc_1.gc(new Float32Array([20.0, 20.0]));
    tmp0_apply_6.wc();
    tmp_6.ib_1 = tmp0_apply_6;
    this.jb_1 = ArrayList_init_$Create$();
    var tmp_7 = this;
    tmp_7.kb_1 = new Scene$avatar$1(this);
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp0_plusAssign = this.jb_1;
    var tmp1_plusAssign = new GameObject([this.bb_1]);
    tmp0_plusAssign.a(tmp1_plusAssign);
    // Inline function 'kotlin.collections.plusAssign' call
    var tmp2_plusAssign = this.jb_1;
    var tmp3_plusAssign = this.kb_1;
    tmp2_plusAssign.a(tmp3_plusAssign);
    this.kb_1.vb_1 = 1.0;
    this.kb_1.nd_1 = 3;
    this.kb_1.od_1 = 1;
    this.kb_1.sd_1 = 'justin';
    this.eg(0.0);
    this.fg();
    this.fg();
    this.lb_1 = (new Date()).getTime();
    this.mb_1 = this.lb_1;
  }
  protoOf(Scene).eg = function (speedBoost) {
    var item = new Scene$chase$item$1(speedBoost, this);
    var initPos = Default_getInstance().i2() * 32 - 17;
    console.log('just added');
    // Inline function 'kotlin.collections.plusAssign' call
    this.jb_1.a(item);
    item.ub_1.fe(Vec3_init_$Create$(initPos, 9.0, 0.0));
    item.nd_1 = 3;
    item.od_1 = 1;
    item.sd_1 = 'milk';
  };
  protoOf(Scene).fg = function () {
    var b = new Scene$bounce$b$1(this);
    var tmp = (Default_getInstance().i2() - 0.5) * 30;
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var initPos = tmp + this.kb_1.ub_1.ee_1[0];
    console.log('just added');
    // Inline function 'kotlin.collections.plusAssign' call
    this.jb_1.a(b);
    b.ub_1.fe(Vec3_init_$Create$(initPos, 0.0, 0.0));
    b.nd_1 = 3;
    b.od_1 = -1;
    b.sd_1 = 'cheese';
  };
  protoOf(Scene).hg = function (i_X, i_Y) {
    var b = new Scene$speedPowerup$b$1(i_X, i_Y, this);
    var initPos = Default_getInstance().i2() * 32 - 17;
    console.log('just added');
    // Inline function 'kotlin.collections.plusAssign' call
    this.jb_1.a(b);
    b.ub_1.fe(Vec3_init_$Create$(initPos, 0.0, 0.0));
    b.nd_1 = 1;
    b.od_1 = 0;
    b.sd_1 = 'ramsey';
  };
  protoOf(Scene).gg = function (i_X, i_Y) {
    var b = new Scene$bulletPowerup$b$1(i_X, i_Y, this);
    var initPos = Default_getInstance().i2() * 32 - 17;
    console.log('just added');
    // Inline function 'kotlin.collections.plusAssign' call
    this.jb_1.a(b);
    b.ub_1.fe(Vec3_init_$Create$(initPos, 0.0, 0.0));
    b.nd_1 = 1;
    b.od_1 = 0;
    b.sd_1 = 'ritvik';
  };
  protoOf(Scene).ig = function (direc) {
    var missile = new Scene$fire$missile$1(this, direc);
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.kb_1.ub_1.ee_1[0] + direc;
    var tmp$ret$5;
    // Inline function 'vision.gears.webglmath.Vec3.y' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = this.kb_1.ub_1.ee_1[1];
    missile.ub_1.fe(Vec3_init_$Create$(tmp, tmp$ret$5, 0.0));
    if (direc > 0) {
      var tmp$ret$9;
      // Inline function 'kotlin.math.abs' call
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp3_abs = this.kb_1.td_1.ee_1[0];
      tmp$ret$9 = Math.abs(tmp3_abs);
      missile.td_1.fe(Vec3_init_$Create$(tmp$ret$9 + 25.0, 0.0, 0.0));
    } else {
      var tmp$ret$13;
      // Inline function 'kotlin.math.abs' call
      // Inline function 'vision.gears.webglmath.Vec3.x' call
      // Inline function 'org.khronos.webgl.get' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp5_abs = this.kb_1.td_1.ee_1[0];
      tmp$ret$13 = Math.abs(tmp5_abs);
      missile.td_1.fe(Vec3_init_$Create$(-1 * tmp$ret$13 - 25.0, 0.0, 0.0));
    }
    missile.od_1 = 3;
    missile.sd_1 = 'missile';
    // Inline function 'kotlin.collections.plusAssign' call
    this.jb_1.a(missile);
  };
  protoOf(Scene).nb = function (canvas) {
    this.na_1.viewport(0, 0, canvas.width, canvas.height);
    this.ib_1.dd(canvas.width / canvas.height);
  };
  protoOf(Scene).pb = function (keysPressed) {
    var timeAtThisFrame = (new Date()).getTime();
    var dt = (timeAtThisFrame - this.mb_1) / 1000.0;
    var t = (timeAtThisFrame - this.lb_1) / 1000.0;
    this.mb_1 = timeAtThisFrame;
    var tmp$ret$2;
    // Inline function 'vision.gears.webglmath.Vec3.x' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = this.kb_1.ub_1.ee_1[0];
    this.ib_1.rc_1.fe(Vec3_init_$Create$(tmp$ret$2, 0.0, 0.0));
    this.ib_1.wc();
    this.na_1.clearColor(0.3, 0.0, 0.3, 1.0);
    this.na_1.clearDepth(1.0);
    this.na_1.clear(WebGLRenderingContext.COLOR_BUFFER_BIT | WebGLRenderingContext.DEPTH_BUFFER_BIT);
    this.na_1.enable(WebGLRenderingContext.BLEND);
    this.na_1.blendFunc(WebGLRenderingContext.SRC_ALPHA, WebGLRenderingContext.ONE_MINUS_SRC_ALPHA);
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.jb_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'Scene.update.<anonymous>' call
      element.kc(dt, t, keysPressed, this.jb_1);
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_0 = this.jb_1.c();
    while (tmp0_iterator_0.d()) {
      var element_0 = tmp0_iterator_0.e();
      // Inline function 'Scene.update.<anonymous>' call
      element_0.ja();
      var tmp;
      if (element_0 instanceof PhysicsGameObject) {
        tmp = element_0.rd_1 === false;
      } else {
        tmp = false;
      }
      if (tmp) {
        console.log('remove');
        this.jb_1.r4(element_0);
      }
    }
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator_1 = this.jb_1.c();
    while (tmp0_iterator_1.d()) {
      var element_1 = tmp0_iterator_1.e();
      // Inline function 'Scene.update.<anonymous>' call
      element_1.nc([this, this.ib_1]);
    }
  };
  function Shader$lambda$lambda(match) {
    // Inline function 'kotlin.text.plus' call
    return '\x1B[46m' + match.z() + new Char(_Char___init__impl__6a9atx(27)) + '[31m';
  }
  function Shader$lambda($request, $errorMessage, this$0) {
    return function (it) {
      var source = $request.responseText;
      var tmp;
      if (source === '') {
        $errorMessage._v = this$0.re_1 + ' is empty.';
        tmp = Unit_getInstance();
      } else {
        var tmp_0 = Regex_init_$Create$('[^\x00-\x7F]');
        var marked = tmp_0.k8(source, Shader$lambda$lambda);
        var tmp_1;
        if (!(marked === source)) {
          $errorMessage._v = 'Shader source file ' + this$0.re_1 + ' has \x1B[46mnon-ASCII\x1B[31m characters.\n' + marked;
          tmp_1 = Unit_getInstance();
        } else {
          this$0.pe_1.shaderSource(this$0.se_1, source);
          this$0.pe_1.compileShader(this$0.se_1);
          var tmp_2;
          if (equals(this$0.pe_1.getShaderParameter(this$0.se_1, WebGLRenderingContext.COMPILE_STATUS), false)) {
            var errorPrefix = Regex_init_$Create$('ERROR: 0');
            var tmp0_elvis_lhs = this$0.pe_1.getShaderInfoLog(this$0.se_1);
            $errorMessage._v = 'Shader ' + this$0.re_1 + ' had compilation errors.\n' + errorPrefix.j8(tmp0_elvis_lhs == null ? 'FAILED TO OBTAIN LOG.' : tmp0_elvis_lhs, $request.responseURL);
            tmp_2 = Unit_getInstance();
          }
          tmp_1 = tmp_2;
        }
        tmp = tmp_1;
      }
      return Unit_getInstance();
    };
  }
  function Shader(gl, shaderType, sourceUrl) {
    this.pe_1 = gl;
    this.qe_1 = shaderType;
    this.re_1 = sourceUrl;
    this.se_1 = this.pe_1.createShader(this.qe_1);
    var request = new XMLHttpRequest();
    request.overrideMimeType('text/plain');
    request.open('GET', this.re_1, false);
    var errorMessage = {_v: null};
    request.onloadend = Shader$lambda(request, errorMessage, this);
    request.send();
    if (!(errorMessage._v == null)) {
      throw Error_init_$Create$(errorMessage._v);
    }
  }
  function Texture2D$lambda($gl, this$0, $image) {
    return function (it) {
      $gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this$0.il_1);
      $gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, $image);
      $gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.LINEAR);
      $gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR_MIPMAP_LINEAR);
      $gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
      $gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
      return Unit_getInstance();
    };
  }
  function Texture2D(gl, mediaFileUrl) {
    this.hl_1 = mediaFileUrl;
    this.il_1 = gl.createTexture();
    var image = new Image();
    image.onload = Texture2D$lambda(gl, this, image);
    image.src = this.hl_1;
  }
  protoOf(Texture2D).jl = function () {
    return this.il_1;
  };
  function TexturedQuadGeometry(gl) {
    Geometry.call(this);
    this.kl_1 = gl;
    this.ll_1 = this.kl_1.createBuffer();
    this.kl_1.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.ll_1);
    var tmp = WebGLRenderingContext.ARRAY_BUFFER;
    var tmp$ret$2;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$2 = [-1.0, -1.0, 0.5, -1.0, 1.0, 0.5, 1.0, -1.0, 0.5, 1.0, 1.0, 0.5];
    this.kl_1.bufferData(tmp, new Float32Array(tmp$ret$2), WebGLRenderingContext.STATIC_DRAW);
    this.ml_1 = this.kl_1.createBuffer();
    this.kl_1.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.ml_1);
    var tmp_0 = WebGLRenderingContext.ARRAY_BUFFER;
    var tmp$ret$5;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = [0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0];
    this.kl_1.bufferData(tmp_0, new Float32Array(tmp$ret$5), WebGLRenderingContext.STATIC_DRAW);
    this.nl_1 = this.kl_1.createBuffer();
    this.kl_1.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.nl_1);
    var tmp_1 = WebGLRenderingContext.ARRAY_BUFFER;
    var tmp$ret$8;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$8 = [0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0];
    this.kl_1.bufferData(tmp_1, new Float32Array(tmp$ret$8), WebGLRenderingContext.STATIC_DRAW);
    this.ol_1 = this.kl_1.createBuffer();
    this.kl_1.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.ol_1);
    var tmp_2 = WebGLRenderingContext.ELEMENT_ARRAY_BUFFER;
    var tmp$ret$11;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$11 = [0, 1, 2, 1, 2, 3];
    this.kl_1.bufferData(tmp_2, new Uint16Array(tmp$ret$11), WebGLRenderingContext.STATIC_DRAW);
    this.pl_1 = this.kl_1.createVertexArray();
    this.kl_1.bindVertexArray(this.pl_1);
    this.kl_1.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.ll_1);
    this.kl_1.enableVertexAttribArray(0);
    this.kl_1.vertexAttribPointer(0, 3, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.kl_1.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.ml_1);
    this.kl_1.enableVertexAttribArray(1);
    this.kl_1.vertexAttribPointer(1, 3, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.kl_1.bindBuffer(WebGLRenderingContext.ARRAY_BUFFER, this.nl_1);
    this.kl_1.enableVertexAttribArray(2);
    this.kl_1.vertexAttribPointer(2, 2, WebGLRenderingContext.FLOAT, false, 0, 0);
    this.kl_1.bindVertexArray(null);
  }
  protoOf(TexturedQuadGeometry).ql = function () {
    this.kl_1.bindVertexArray(this.pl_1);
    this.kl_1.bindBuffer(WebGLRenderingContext.ELEMENT_ARRAY_BUFFER, this.ol_1);
    this.kl_1.drawElements(WebGLRenderingContext.TRIANGLES, 6, WebGLRenderingContext.UNSIGNED_SHORT, 0);
  };
  function Drawable() {
  }
  protoOf(Drawable).mc = function (target) {
  };
  function Geometry() {
    Drawable.call(this);
  }
  protoOf(Geometry).nc = function (uniformProviders) {
    this.ql();
  };
  protoOf(Geometry).mc = function (target) {
  };
  function IVec1_init_$Init$(u, $this) {
    u = u === VOID ? 0 : u;
    IVec1.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.rl_1[0] = u;
    return $this;
  }
  function IVec1_init_$Create$(u) {
    return IVec1_init_$Init$(u, objectCreate(protoOf(IVec1)));
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.sl_1 = IVec1_init_$Create$();
    this.tl_1 = IVec1_init_$Create$(1);
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function IVec1(backingStorage, offset) {
    Companion_getInstance_0();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 1 | 0);
    tmp.rl_1 = tmp1_elvis_lhs == null ? new Int32Array(1) : tmp1_elvis_lhs;
  }
  protoOf(IVec1).ul = function () {
    return this.rl_1;
  };
  protoOf(IVec1).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1iv(uniformLocation, this.rl_1);
  };
  function IVec1Array_init_$Init$(size, $this) {
    IVec1Array.call($this, null, size, size);
    return $this;
  }
  function IVec1Array_init_$Create$(size) {
    return IVec1Array_init_$Init$(size, objectCreate(protoOf(IVec1Array)));
  }
  function IVec1Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    IVecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(startIndex, endIndex);
    tmp.xl_1 = tmp1_elvis_lhs == null ? new Int32Array(startIndex) : tmp1_elvis_lhs;
  }
  protoOf(IVec1Array).ul = function () {
    return this.xl_1;
  };
  protoOf(IVec1Array).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1iv(uniformLocation, this.xl_1);
  };
  function IVec2_init_$Init$(u, v, $this) {
    u = u === VOID ? 0 : u;
    v = v === VOID ? 0 : v;
    IVec2.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.yl_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.yl_1[1] = v;
    return $this;
  }
  function IVec2_init_$Create$(u, v) {
    return IVec2_init_$Init$(u, v, objectCreate(protoOf(IVec2)));
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.zl_1 = IVec2_init_$Create$();
    this.am_1 = IVec2_init_$Create$(1, 1);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function IVec2(backingStorage, offset) {
    Companion_getInstance_1();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 2 | 0);
    tmp.yl_1 = tmp1_elvis_lhs == null ? new Int32Array(2) : tmp1_elvis_lhs;
  }
  protoOf(IVec2).ul = function () {
    return this.yl_1;
  };
  protoOf(IVec2).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform2iv(uniformLocation, this.yl_1);
  };
  function IVec3_init_$Init$(u, v, s, $this) {
    u = u === VOID ? 0 : u;
    v = v === VOID ? 0 : v;
    s = s === VOID ? 0 : s;
    IVec3.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.bm_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.bm_1[1] = v;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.bm_1[2] = s;
    return $this;
  }
  function IVec3_init_$Create$(u, v, s) {
    return IVec3_init_$Init$(u, v, s, objectCreate(protoOf(IVec3)));
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.cm_1 = IVec3_init_$Create$();
    this.dm_1 = IVec3_init_$Create$(1, 1, 1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function IVec3(backingStorage, offset) {
    Companion_getInstance_2();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 3 | 0);
    tmp.bm_1 = tmp1_elvis_lhs == null ? new Int32Array(3) : tmp1_elvis_lhs;
  }
  protoOf(IVec3).ul = function () {
    return this.bm_1;
  };
  protoOf(IVec3).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform3iv(uniformLocation, this.bm_1);
  };
  function IVec4_init_$Init$(u, v, s, t, $this) {
    u = u === VOID ? 0 : u;
    v = v === VOID ? 0 : v;
    s = s === VOID ? 0 : s;
    t = t === VOID ? 1 : t;
    IVec4.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.em_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.em_1[1] = v;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.em_1[2] = s;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.em_1[3] = t;
    return $this;
  }
  function IVec4_init_$Create$(u, v, s, t) {
    return IVec4_init_$Init$(u, v, s, t, objectCreate(protoOf(IVec4)));
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.fm_1 = IVec4_init_$Create$(0, 0, 0, 0);
    this.gm_1 = IVec4_init_$Create$(1, 1, 1, 1);
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function IVec4(backingStorage, offset) {
    Companion_getInstance_3();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 4 | 0);
    tmp.em_1 = tmp1_elvis_lhs == null ? new Int32Array(4) : tmp1_elvis_lhs;
  }
  protoOf(IVec4).ul = function () {
    return this.em_1;
  };
  protoOf(IVec4).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4iv(uniformLocation, this.em_1);
  };
  function IVecArray() {
  }
  function Mat4_init_$Init$(elements, $this) {
    Mat4.call($this, null, 0);
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(16), null);
    while (tmp < 16) {
      var tmp_1 = tmp;
      var tmp0_elvis_lhs = getOrNull(elements, imul(tmp_1 % 4 | 0, 4) + (tmp_1 / 4 | 0) | 0);
      tmp_0[tmp_1] = tmp0_elvis_lhs == null ? (tmp_1 % 5 | 0) === 0 ? 1.0 : 0.0 : tmp0_elvis_lhs;
      tmp = tmp + 1 | 0;
    }
    var allElements = tmp_0;
    $this.yb_1.set(allElements);
    return $this;
  }
  function Mat4_init_$Create$(elements) {
    return Mat4_init_$Init$(elements, objectCreate(protoOf(Mat4)));
  }
  function Mat4(backingStorage, offset) {
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 16 | 0);
    tmp.yb_1 = tmp1_elvis_lhs == null ? new Float32Array(16) : tmp1_elvis_lhs;
  }
  protoOf(Mat4).ul = function () {
    return this.yb_1;
  };
  protoOf(Mat4).gc = function (values) {
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = fillArrayVal(Array(16), null);
    while (tmp < 16) {
      var tmp_1 = tmp;
      var tmp0_elvis_lhs = getOrNull(values, imul(tmp_1 % 4 | 0, 4) + (tmp_1 / 4 | 0) | 0);
      tmp_0[tmp_1] = tmp0_elvis_lhs == null ? (tmp_1 % 5 | 0) === 0 ? 1.0 : 0.0 : tmp0_elvis_lhs;
      tmp = tmp + 1 | 0;
    }
    var allElements = tmp_0;
    this.yb_1.set(allElements);
    return this;
  };
  protoOf(Mat4).ad = function (s) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = s.ed_1[0];
    var tmp$ret$3;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = s.ed_1[1];
    return this.hm(tmp, tmp$ret$3, 1.0);
  };
  protoOf(Mat4).hc = function (s) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = s.ee_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = s.ee_1[1];
    var tmp$ret$5;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = s.ee_1[2];
    return this.hm(tmp, tmp_0, tmp$ret$5);
  };
  protoOf(Mat4).hm = function (sx, sy, sz) {
    var tmp0_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp0_array[0] * sx;
    var tmp2_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[1] = tmp2_array[1] * sx;
    var tmp4_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[2] = tmp4_array[2] * sx;
    var tmp6_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[3] = tmp6_array[3] * sx;
    var tmp8_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp8_array[4] = tmp8_array[4] * sy;
    var tmp10_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp10_array[5] = tmp10_array[5] * sy;
    var tmp12_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp12_array[6] = tmp12_array[6] * sy;
    var tmp14_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp14_array[7] = tmp14_array[7] * sy;
    var tmp16_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp16_array[8] = tmp16_array[8] * sz;
    var tmp18_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp18_array[9] = tmp18_array[9] * sz;
    var tmp20_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp20_array[10] = tmp20_array[10] * sz;
    var tmp22_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp22_array[11] = tmp22_array[11] * sz;
    return this;
  };
  protoOf(Mat4).zc = function (sx, sy, sz, $super) {
    sx = sx === VOID ? 1.0 : sx;
    sy = sy === VOID ? 1.0 : sy;
    sz = sz === VOID ? 1.0 : sz;
    return $super === VOID ? this.hm(sx, sy, sz) : $super.hm.call(this, sx, sy, sz);
  };
  protoOf(Mat4).im = function (angle, axisX, axisY, axisZ) {
    var x = axisX;
    var y = axisY;
    var z = axisZ;
    var axisLength2 = x * x + y * y + z * z;
    if (axisLength2 < 1.0E-4) {
      x = 0.0;
      y = 0.0;
      z = 1.0;
    } else if (axisLength2 < 0.999 ? true : axisLength2 > 1.001) {
      // Inline function 'kotlin.math.sqrt' call
      var axisLength = Math.sqrt(axisLength2);
      x = x / axisLength;
      y = y / axisLength;
      z = z / axisLength;
    }
    // Inline function 'kotlin.math.cos' call
    var cosa = Math.cos(angle);
    // Inline function 'kotlin.math.sin' call
    var sina = Math.sin(angle);
    var C = 1.0 - cosa;
    var m11 = x * x * C + cosa;
    var m21 = x * y * C - z * sina;
    var m31 = x * z * C + y * sina;
    var m12 = y * x * C + z * sina;
    var m22 = y * y * C + cosa;
    var m32 = y * z * C - x * sina;
    var m13 = z * x * C - y * sina;
    var m23 = z * y * C + x * sina;
    var m33 = z * z * C + cosa;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = this.yb_1[0] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp + this.yb_1[4] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t0 = tmp_0 + this.yb_1[8] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = this.yb_1[0] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp_1 + this.yb_1[4] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t4 = tmp_2 + this.yb_1[8] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = this.yb_1[0] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp_3 + this.yb_1[4] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t8 = tmp_4 + this.yb_1[8] * m33;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = this.yb_1[1] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp_5 + this.yb_1[5] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t1 = tmp_6 + this.yb_1[9] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = this.yb_1[1] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp_7 + this.yb_1[5] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t5 = tmp_8 + this.yb_1[9] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = this.yb_1[1] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp_9 + this.yb_1[5] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t9 = tmp_10 + this.yb_1[9] * m33;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_11 = this.yb_1[2] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_12 = tmp_11 + this.yb_1[6] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t2 = tmp_12 + this.yb_1[10] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_13 = this.yb_1[2] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_14 = tmp_13 + this.yb_1[6] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t6 = tmp_14 + this.yb_1[10] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_15 = this.yb_1[2] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_16 = tmp_15 + this.yb_1[6] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t10 = tmp_16 + this.yb_1[10] * m33;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_17 = this.yb_1[3] * m11;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_18 = tmp_17 + this.yb_1[7] * m21;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t3 = tmp_18 + this.yb_1[11] * m31;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_19 = this.yb_1[3] * m12;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_20 = tmp_19 + this.yb_1[7] * m22;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t7 = tmp_20 + this.yb_1[11] * m32;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_21 = this.yb_1[3] * m13;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_22 = tmp_21 + this.yb_1[7] * m23;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var t11 = tmp_22 + this.yb_1[11] * m33;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[0] = t0;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[4] = t4;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[8] = t8;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[1] = t1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[5] = t5;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[9] = t9;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[2] = t2;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[6] = t6;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[10] = t10;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[3] = t3;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[7] = t7;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[11] = t11;
    return this;
  };
  protoOf(Mat4).ic = function (angle, axisX, axisY, axisZ, $super) {
    angle = angle === VOID ? 0.0 : angle;
    axisX = axisX === VOID ? 0.0 : axisX;
    axisY = axisY === VOID ? 0.0 : axisY;
    axisZ = axisZ === VOID ? 0.0 : axisZ;
    return $super === VOID ? this.im(angle, axisX, axisY, axisZ) : $super.im.call(this, angle, axisX, axisY, axisZ);
  };
  protoOf(Mat4).bd = function (t) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = t.ed_1[0];
    var tmp$ret$3;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$3 = t.ed_1[1];
    return this.jm(tmp, tmp$ret$3);
  };
  protoOf(Mat4).jc = function (t) {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = t.ee_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = t.ee_1[1];
    var tmp$ret$5;
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp$ret$5 = t.ee_1[2];
    return this.km(tmp, tmp_0, tmp$ret$5);
  };
  protoOf(Mat4).km = function (x, y, z) {
    var tmp0_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = tmp0_array[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_array[0] = tmp + this.yb_1[12] * x;
    var tmp2_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = tmp2_array[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_array[4] = tmp_0 + this.yb_1[12] * y;
    var tmp4_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp4_array[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp4_array[8] = tmp_1 + this.yb_1[12] * z;
    var tmp6_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = tmp6_array[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp6_array[1] = tmp_2 + this.yb_1[13] * x;
    var tmp8_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_3 = tmp8_array[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp8_array[5] = tmp_3 + this.yb_1[13] * y;
    var tmp10_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_4 = tmp10_array[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp10_array[9] = tmp_4 + this.yb_1[13] * z;
    var tmp12_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_5 = tmp12_array[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp12_array[2] = tmp_5 + this.yb_1[14] * x;
    var tmp14_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_6 = tmp14_array[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp14_array[6] = tmp_6 + this.yb_1[14] * y;
    var tmp16_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_7 = tmp16_array[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp16_array[10] = tmp_7 + this.yb_1[14] * z;
    var tmp18_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_8 = tmp18_array[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp18_array[3] = tmp_8 + this.yb_1[15] * x;
    var tmp20_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_9 = tmp20_array[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp20_array[7] = tmp_9 + this.yb_1[15] * y;
    var tmp22_array = this.yb_1;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_10 = tmp22_array[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp22_array[11] = tmp_10 + this.yb_1[15] * z;
    return this;
  };
  protoOf(Mat4).jm = function (x, y, z, $super) {
    x = x === VOID ? 0.0 : x;
    y = y === VOID ? 0.0 : y;
    z = z === VOID ? 0.0 : z;
    return $super === VOID ? this.km(x, y, z) : $super.km.call(this, x, y, z);
  };
  protoOf(Mat4).cd = function () {
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a00 = this.yb_1[0];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a01 = this.yb_1[1];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a02 = this.yb_1[2];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var a03 = this.yb_1[3];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m000 = this.yb_1[4];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m001 = this.yb_1[5];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m002 = this.yb_1[6];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m003 = this.yb_1[7];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m100 = this.yb_1[8];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m101 = this.yb_1[9];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m102 = this.yb_1[10];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m103 = this.yb_1[11];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m200 = this.yb_1[12];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m201 = this.yb_1[13];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m202 = this.yb_1[14];
    // Inline function 'org.khronos.webgl.get' call
    // Inline function 'kotlin.js.asDynamic' call
    var m203 = this.yb_1[15];
    var b00 = a00 * m001 - a01 * m000;
    var b01 = a00 * m002 - a02 * m000;
    var b02 = a00 * m003 - a03 * m000;
    var b03 = a01 * m002 - a02 * m001;
    var b04 = a01 * m003 - a03 * m001;
    var b05 = a02 * m003 - a03 * m002;
    var b06 = m100 * m201 - m101 * m200;
    var b07 = m100 * m202 - m102 * m200;
    var b08 = m100 * m203 - m103 * m200;
    var b09 = m101 * m202 - m102 * m201;
    var m010 = m101 * m203 - m103 * m201;
    var m011 = m102 * m203 - m103 * m202;
    var det = b00 * m011 - b01 * m010 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;
    if (det === 0.0) {
      return this;
    }
    var invDet = 1.0 / det;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[0] = (m001 * m011 - m002 * m010 + m003 * b09) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[1] = (-a01 * m011 + a02 * m010 - a03 * b09) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[2] = (m201 * b05 - m202 * b04 + m203 * b03) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[3] = (-m101 * b05 + m102 * b04 - m103 * b03) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[4] = (-m000 * m011 + m002 * b08 - m003 * b07) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[5] = (a00 * m011 - a02 * b08 + a03 * b07) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[6] = (-m200 * b05 + m202 * b02 - m203 * b01) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[7] = (m100 * b05 - m102 * b02 + m103 * b01) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[8] = (m000 * m010 - m001 * b08 + m003 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[9] = (-a00 * m010 + a01 * b08 - a03 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[10] = (m200 * b04 - m201 * b02 + m203 * b00) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[11] = (-m100 * b04 + m101 * b02 - m103 * b00) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[12] = (-m000 * b09 + m001 * b07 - m002 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[13] = (a00 * b09 - a01 * b07 + a02 * b06) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[14] = (-m200 * b03 + m201 * b01 - m202 * b00) * invDet;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.yb_1[15] = (m100 * b03 - m101 * b01 + m102 * b00) * invDet;
    return this;
  };
  protoOf(Mat4).zb = function (provider, property) {
    provider.lc(property.callableName, this);
    return this;
  };
  protoOf(Mat4).fc = function (provider, property) {
    return this;
  };
  protoOf(Mat4).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniformMatrix4fv(uniformLocation, false, this.yb_1);
  };
  function Mat4Array_init_$Init$(size, $this) {
    Mat4Array.call($this, null, size, size);
    return $this;
  }
  function Mat4Array_init_$Create$(size) {
    return Mat4Array_init_$Init$(size, objectCreate(protoOf(Mat4Array)));
  }
  function Mat4Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 16), imul(endIndex, 16));
    tmp.lm_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 16)) : tmp1_elvis_lhs;
  }
  protoOf(Mat4Array).ul = function () {
    return this.lm_1;
  };
  protoOf(Mat4Array).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniformMatrix4fv(uniformLocation, false, this.lm_1);
  };
  function get_UNSIGNED_INT_SAMPLER_2D(_this__u8e3s4) {
    return 36306;
  }
  function get_INT_SAMPLER_2D(_this__u8e3s4) {
    return 36298;
  }
  function get_SAMPLER_2D_SHADOW(_this__u8e3s4) {
    return 35682;
  }
  function get_UNSIGNED_INT_SAMPLER_CUBE(_this__u8e3s4) {
    return 36308;
  }
  function get_INT_SAMPLER_CUBE(_this__u8e3s4) {
    return 36300;
  }
  function get_SAMPLER_CUBE_SHADOW(_this__u8e3s4) {
    return 36293;
  }
  function get_UNSIGNED_INT_SAMPLER_3D(_this__u8e3s4) {
    return 36307;
  }
  function get_INT_SAMPLER_3D(_this__u8e3s4) {
    return 36299;
  }
  function get_SAMPLER_3D(_this__u8e3s4) {
    return 35679;
  }
  function get_UNSIGNED_INT_SAMPLER_2D_ARRAY(_this__u8e3s4) {
    return 36311;
  }
  function get_INT_SAMPLER_2D_ARRAY(_this__u8e3s4) {
    return 36303;
  }
  function get_SAMPLER_2D_ARRAY_SHADOW(_this__u8e3s4) {
    return 36292;
  }
  function get_SAMPLER_2D_ARRAY(_this__u8e3s4) {
    return 36289;
  }
  function UniformDescriptor(name, type, size, location) {
    this.mm_1 = name;
    this.nm_1 = type;
    this.om_1 = size;
    this.pm_1 = location;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    this.qm_1 = mapOf([to(getKClass(Vec1), WebGLRenderingContext.FLOAT), to(getKClass(Vec2), WebGLRenderingContext.FLOAT_VEC2), to(getKClass(Vec3), WebGLRenderingContext.FLOAT_VEC3), to(getKClass(Vec4), WebGLRenderingContext.FLOAT_VEC4), to(getKClass(Vec1Array), WebGLRenderingContext.FLOAT), to(getKClass(Vec2Array), WebGLRenderingContext.FLOAT_VEC2), to(getKClass(Vec3Array), WebGLRenderingContext.FLOAT_VEC3), to(getKClass(Vec4Array), WebGLRenderingContext.FLOAT_VEC4), to(getKClass(Mat4), WebGLRenderingContext.FLOAT_MAT4), to(getKClass(IVec1), WebGLRenderingContext.INT), to(getKClass(IVec2), WebGLRenderingContext.INT_VEC2), to(getKClass(IVec3), WebGLRenderingContext.INT_VEC3), to(getKClass(IVec4), WebGLRenderingContext.INT_VEC4), to(getKClass(Sampler2D), WebGLRenderingContext.SAMPLER_2D), to(getKClass(Sampler3D), WebGLRenderingContext.SAMPLER_2D), to(getKClass(SamplerCube), WebGLRenderingContext.SAMPLER_CUBE)]);
  }
  protoOf(Companion_4).rm = function (type, arraySize, debugName) {
    if (arraySize === 1) {
      if (type === WebGLRenderingContext.INT)
        return IVec1_init_$Create$();
      else if (type === WebGLRenderingContext.UNSIGNED_INT)
        return IVec1_init_$Create$();
      else if (type === WebGLRenderingContext.INT_VEC2)
        return IVec2_init_$Create$();
      else if (type === WebGLRenderingContext.INT_VEC3)
        return IVec3_init_$Create$();
      else if (type === WebGLRenderingContext.INT_VEC4)
        return IVec4_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT)
        return Vec1_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_VEC2)
        return Vec2_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_VEC3)
        return Vec3_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_VEC4)
        return Vec4_init_$Create$();
      else if (type === WebGLRenderingContext.FLOAT_MAT4)
        return Mat4_init_$Create$(new Float32Array([]));
      else if (type === get_UNSIGNED_INT_SAMPLER_2D(WebGLRenderingContext) ? true : type === WebGLRenderingContext.SAMPLER_2D)
        return new Sampler2D(debugName);
      else if (type === WebGLRenderingContext.SAMPLER_CUBE)
        return new SamplerCube(debugName);
      else if (type === get_SAMPLER_3D(WebGLRenderingContext))
        return new Sampler3D(debugName);
    } else {
      if (type === WebGLRenderingContext.INT)
        return IVec1Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.UNSIGNED_INT)
        return IVec1Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT)
        return Vec1Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC2)
        return Vec2Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC3)
        return Vec3Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_VEC4)
        return Vec4Array_init_$Create$(arraySize);
      else if (type === WebGLRenderingContext.FLOAT_MAT4)
        return Mat4Array_init_$Create$(arraySize);
    }
    throw Error_init_$Create$('Unhandled uniform variable of type ID ' + type + '.');
  };
  protoOf(Companion_4).sm = function (type) {
    return (((((((((((((type === WebGLRenderingContext.SAMPLER_2D ? true : type === get_SAMPLER_3D(WebGLRenderingContext)) ? true : type === WebGLRenderingContext.SAMPLER_CUBE) ? true : type === get_SAMPLER_2D_SHADOW(WebGLRenderingContext)) ? true : type === get_SAMPLER_2D_ARRAY(WebGLRenderingContext)) ? true : type === get_SAMPLER_2D_ARRAY_SHADOW(WebGLRenderingContext)) ? true : type === get_SAMPLER_CUBE_SHADOW(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_2D(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_3D(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_CUBE(WebGLRenderingContext)) ? true : type === get_INT_SAMPLER_2D_ARRAY(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_2D(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_3D(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_CUBE(WebGLRenderingContext)) ? true : type === get_UNSIGNED_INT_SAMPLER_2D_ARRAY(WebGLRenderingContext);
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ProgramReflection(gl, glProgram) {
    Companion_getInstance_4();
    Drawable.call(this);
    this.tm_1 = gl;
    this.um_1 = glProgram;
    this.vm_1 = HashMap_init_$Create$();
    var tmp = this.tm_1.getProgramParameter(this.um_1, WebGLRenderingContext.ACTIVE_UNIFORMS);
    var nUniforms = (!(tmp == null) ? typeof tmp === 'number' : false) ? tmp : THROW_CCE();
    var inductionVariable = 0;
    if (inductionVariable < nUniforms)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp1_elvis_lhs = this.tm_1.getActiveUniform(this.um_1, i);
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          throw Error_init_$Create$('Uniform listed by gl.getProgramParameter but not found by gl.getActiveUniform.');
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        var glUniform = tmp_0;
        var nameParts = split(glUniform.name, ['.']);
        var tmp2_elvis_lhs = lastOrNull(nameParts);
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        var uniformName = tmp_1;
        var tmp3_elvis_lhs = lastOrNull(dropLast(nameParts, 1));
        var tmp_2;
        if (tmp3_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }
        var structName = tmp_2;
        // Inline function 'kotlin.collections.set' call
        var tmp0_set = this.vm_1;
        var tmp4_elvis_lhs = this.vm_1.h1(structName);
        var tmp1_set = tmp4_elvis_lhs == null ? ArrayList_init_$Create$() : tmp4_elvis_lhs;
        tmp0_set.x1(structName, tmp1_set);
        var tmp6_safe_receiver = this.vm_1.h1(structName);
        var tmp_3;
        if (tmp6_safe_receiver == null) {
          tmp_3 = null;
        } else {
          var tmp_4 = glUniform.type;
          var tmp_5 = glUniform.size;
          var tmp5_elvis_lhs = this.tm_1.getUniformLocation(this.um_1, glUniform.name);
          var tmp_6;
          if (tmp5_elvis_lhs == null) {
            throw Error_init_$Create$('No location for ' + glUniform.name);
          } else {
            tmp_6 = tmp5_elvis_lhs;
          }
          tmp_3 = tmp6_safe_receiver.a(new UniformDescriptor(uniformName, tmp_4, tmp_5, tmp_6));
        }
        if (tmp_3 == null)
          throw Error_init_$Create$('Struct name ' + structName + ' missing from uniform descriptors.');
      }
       while (inductionVariable < nUniforms);
  }
  protoOf(ProgramReflection).mc = function (target) {
    var indexedObject = target.ac_1;
    var inductionVariable = 0;
    var last = indexedObject.length;
    $l$loop: while (inductionVariable < last) {
      var structName = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp1_elvis_lhs = this.vm_1.h1(structName);
      var tmp;
      if (tmp1_elvis_lhs == null) {
        continue $l$loop;
      } else {
        tmp = tmp1_elvis_lhs;
      }
      var descList = tmp;
      var tmp2_iterator = descList.c();
      while (tmp2_iterator.d()) {
        var uniformDesc = tmp2_iterator.e();
        var reflectionVariable = Companion_getInstance_4().rm(uniformDesc.nm_1, uniformDesc.om_1, uniformDesc.mm_1);
        if (target.bc_1.f1(uniformDesc.mm_1)) {
          var tmp3_elvis_lhs = target.bc_1.h1(uniformDesc.mm_1);
          var tmp_0;
          if (tmp3_elvis_lhs == null) {
            throw Error_init_$Create$('Key "' + uniformDesc.mm_1 + '" exists in uniforms, but its value is null.');
          } else {
            tmp_0 = tmp3_elvis_lhs;
          }
          var existingVariable = tmp_0;
          if (!(Companion_getInstance_4().qm_1.h1(getKClassFromExpression(existingVariable)) == Companion_getInstance_4().qm_1.h1(getKClassFromExpression(reflectionVariable))) ? true : !(existingVariable.wl() === reflectionVariable.wl())) {
            throw Error_init_$Create$('Trying to reflect uniform ' + uniformDesc.mm_1 + ' as a ' + getKClassFromExpression(reflectionVariable).r6() + ' with element count ' + reflectionVariable.wl() + ', but it already exists in the target object as a ' + getKClassFromExpression(existingVariable).r6() + ' with element count ' + existingVariable.wl() + '.');
          }
        } else {
          // Inline function 'kotlin.collections.set' call
          var tmp0_set = target.bc_1;
          var tmp1_set = uniformDesc.mm_1;
          tmp0_set.x1(tmp1_set, reflectionVariable);
        }
      }
    }
  };
  protoOf(ProgramReflection).nc = function (uniformProviders) {
    this.tm_1.useProgram(this.um_1);
    var textureUnitCount = 0;
    var inductionVariable = 0;
    var last = uniformProviders.length;
    while (inductionVariable < last) {
      var provider = uniformProviders[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var indexedObject = provider.ac_1;
      var inductionVariable_0 = 0;
      var last_0 = indexedObject.length;
      $l$loop: while (inductionVariable_0 < last_0) {
        var structName = indexedObject[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var tmp2_elvis_lhs = this.vm_1.h1(structName);
        var tmp;
        if (tmp2_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp2_elvis_lhs;
        }
        var descList = tmp;
        var tmp3_iterator = descList.c();
        while (tmp3_iterator.d()) {
          var uniformDesc = tmp3_iterator.e();
          var tmp4_safe_receiver = provider.o3(uniformDesc.mm_1);
          var tmp_0;
          if (tmp4_safe_receiver == null) {
            tmp_0 = null;
          } else {
            tmp4_safe_receiver.vl(this.tm_1, uniformDesc.pm_1, textureUnitCount);
            tmp_0 = Unit_getInstance();
          }
          if (tmp_0 == null)
            throw Error_init_$Create$('Uniform ' + uniformDesc.mm_1 + ' in struct ' + structName + ' from list ' + descList);
          if (Companion_getInstance_4().sm(uniformDesc.nm_1)) {
            textureUnitCount = textureUnitCount + uniformDesc.om_1 | 0;
          }
        }
      }
    }
  };
  function Sampler2D(debugName) {
    debugName = debugName === VOID ? '' : debugName;
    this.wm_1 = debugName;
    this.xm_1 = new Int32Array(1);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(1), null);
    while (tmp_0 < 1) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.ym_1 = tmp_1;
  }
  protoOf(Sampler2D).ul = function () {
    return this.xm_1;
  };
  protoOf(Sampler2D).zm = function () {
    return this.ym_1;
  };
  protoOf(Sampler2D).vl = function (gl, uniformLocation, samplerIndex) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.xm_1[0] = samplerIndex;
    if (!(this.ym_1[0] == null)) {
      gl.uniform1iv(uniformLocation, this.xm_1);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.ym_1[0]);
    } else {
      console.warn("No texture bound to Sampler2D reflecting uniform '" + this.wm_1 + "'.");
    }
  };
  function get_TEXTURE_3D(_this__u8e3s4) {
    return 32879;
  }
  function Sampler3D(debugName) {
    debugName = debugName === VOID ? '' : debugName;
    this.an_1 = debugName;
    this.bn_1 = new Int32Array(1);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(1), null);
    while (tmp_0 < 1) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.cn_1 = tmp_1;
  }
  protoOf(Sampler3D).ul = function () {
    return this.bn_1;
  };
  protoOf(Sampler3D).zm = function () {
    return this.cn_1;
  };
  protoOf(Sampler3D).vl = function (gl, uniformLocation, samplerIndex) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.bn_1[0] = samplerIndex;
    if (!(this.cn_1[0] == null)) {
      gl.uniform1iv(uniformLocation, this.bn_1);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(get_TEXTURE_3D(WebGLRenderingContext), this.cn_1[0]);
    } else {
      console.warn("No texture bound to Sampler3D reflecting uniform '" + this.an_1 + "'.");
    }
  };
  function SamplerCube(debugName) {
    debugName = debugName === VOID ? '' : debugName;
    this.dn_1 = debugName;
    this.en_1 = new Int32Array(1);
    var tmp = this;
    var tmp_0 = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_1 = fillArrayVal(Array(1), null);
    while (tmp_0 < 1) {
      tmp_1[tmp_0] = null;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.fn_1 = tmp_1;
  }
  protoOf(SamplerCube).ul = function () {
    return this.en_1;
  };
  protoOf(SamplerCube).zm = function () {
    return this.fn_1;
  };
  protoOf(SamplerCube).vl = function (gl, uniformLocation, samplerIndex) {
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this.en_1[0] = samplerIndex;
    if (!(this.fn_1[0] == null)) {
      gl.uniform1iv(uniformLocation, this.en_1);
      gl.activeTexture(WebGLRenderingContext.TEXTURE0 + samplerIndex | 0);
      gl.bindTexture(WebGLRenderingContext.TEXTURE_CUBE_MAP, this.fn_1[0]);
    } else {
      console.warn("No texture bound to Sampler2D reflecting uniform '" + this.dn_1 + "'.");
    }
  };
  function UniformFloat() {
  }
  function UniformInt() {
  }
  function UniformSampler() {
  }
  function UniformProvider(glslStructNames) {
    Drawable.call(this);
    this.ac_1 = glslStructNames;
    this.bc_1 = HashMap_init_$Create$();
    this.cc_1 = ArrayList_init_$Create$();
  }
  protoOf(UniformProvider).lc = function (uniformName, uniform) {
    // Inline function 'kotlin.collections.set' call
    this.bc_1.x1(uniformName, uniform);
  };
  protoOf(UniformProvider).o3 = function (name) {
    if (!this.bc_1.f1(name)) {
      console.error("WARNING: Attempt to access unknown or non-active uniform '" + name + "'.");
    }
    return this.bc_1.h1(name);
  };
  protoOf(UniformProvider).dc = function (children) {
    addAll(this.cc_1, children);
    this.mc(this);
  };
  protoOf(UniformProvider).mc = function (target) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.cc_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'vision.gears.webglmath.UniformProvider.gatherUniforms.<anonymous>' call
      element.mc(target);
    }
  };
  protoOf(UniformProvider).nc = function (uniformProviders) {
    // Inline function 'kotlin.collections.forEach' call
    var tmp0_iterator = this.cc_1.c();
    while (tmp0_iterator.d()) {
      var element = tmp0_iterator.e();
      // Inline function 'vision.gears.webglmath.UniformProvider.draw.<anonymous>' call
      element.nc(arrayConcat([[this], uniformProviders]));
    }
  };
  function Vec1_init_$Init$(u, $this) {
    u = u === VOID ? 0.0 : u;
    Vec1.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.gn_1[0] = u;
    return $this;
  }
  function Vec1_init_$Create$(u) {
    return Vec1_init_$Init$(u, objectCreate(protoOf(Vec1)));
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.hn_1 = Vec1_init_$Create$();
    this.in_1 = Vec1_init_$Create$(1.0);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function Vec1(backingStorage, offset) {
    Companion_getInstance_5();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 1 | 0);
    tmp.gn_1 = tmp1_elvis_lhs == null ? new Float32Array(1) : tmp1_elvis_lhs;
  }
  protoOf(Vec1).ul = function () {
    return this.gn_1;
  };
  protoOf(Vec1).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1fv(uniformLocation, this.gn_1);
  };
  function Vec1Array_init_$Init$(size, $this) {
    Vec1Array.call($this, null, size, size);
    return $this;
  }
  function Vec1Array_init_$Create$(size) {
    return Vec1Array_init_$Init$(size, objectCreate(protoOf(Vec1Array)));
  }
  function Vec1Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(startIndex, endIndex);
    tmp.jn_1 = tmp1_elvis_lhs == null ? new Float32Array(startIndex) : tmp1_elvis_lhs;
  }
  protoOf(Vec1Array).ul = function () {
    return this.jn_1;
  };
  protoOf(Vec1Array).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform1fv(uniformLocation, this.jn_1);
  };
  function Vec2_init_$Init$(u, v, $this) {
    u = u === VOID ? 0.0 : u;
    v = v === VOID ? 0.0 : v;
    Vec2.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.ed_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.ed_1[1] = v;
    return $this;
  }
  function Vec2_init_$Create$(u, v) {
    return Vec2_init_$Init$(u, v, objectCreate(protoOf(Vec2)));
  }
  function Companion_6() {
    Companion_instance_6 = this;
    this.kn_1 = Vec2_init_$Create$();
    this.ln_1 = Vec2_init_$Create$(1.0, 1.0);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function Vec2(backingStorage, offset) {
    Companion_getInstance_6();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 2 | 0);
    tmp.ed_1 = tmp1_elvis_lhs == null ? new Float32Array(2) : tmp1_elvis_lhs;
  }
  protoOf(Vec2).ul = function () {
    return this.ed_1;
  };
  protoOf(Vec2).gc = function (values) {
    // Inline function 'org.khronos.webgl.set' call
    var tmp0_set = this.ed_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp;
    if (0 <= get_lastIndex(values)) {
      tmp = values[0];
    } else {
      // Inline function 'vision.gears.webglmath.Vec2.set.<anonymous>' call
      tmp = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    tmp0_set[0] = tmp;
    // Inline function 'org.khronos.webgl.set' call
    var tmp2_set = this.ed_1;
    // Inline function 'kotlin.collections.getOrElse' call
    var tmp_0;
    if (1 <= get_lastIndex(values)) {
      tmp_0 = values[1];
    } else {
      // Inline function 'vision.gears.webglmath.Vec2.set.<anonymous>' call
      tmp_0 = 0.0;
    }
    // Inline function 'kotlin.js.asDynamic' call
    tmp2_set[1] = tmp_0;
    return this;
  };
  protoOf(Vec2).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform2fv(uniformLocation, this.ed_1);
  };
  function Vec2Array_init_$Init$(size, $this) {
    Vec2Array.call($this, null, size, size);
    return $this;
  }
  function Vec2Array_init_$Create$(size) {
    return Vec2Array_init_$Init$(size, objectCreate(protoOf(Vec2Array)));
  }
  function Vec2Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 2), imul(endIndex, 2));
    tmp.mn_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 2)) : tmp1_elvis_lhs;
  }
  protoOf(Vec2Array).ul = function () {
    return this.mn_1;
  };
  protoOf(Vec2Array).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.mn_1);
  };
  function Vec3_init_$Init$(u, v, s, $this) {
    u = u === VOID ? 0.0 : u;
    v = v === VOID ? 0.0 : v;
    s = s === VOID ? 0.0 : s;
    Vec3.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.ee_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.ee_1[1] = v;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.ee_1[2] = s;
    return $this;
  }
  function Vec3_init_$Create$(u, v, s) {
    return Vec3_init_$Init$(u, v, s, objectCreate(protoOf(Vec3)));
  }
  function Companion_7() {
    Companion_instance_7 = this;
    this.nn_1 = Vec3_init_$Create$();
    this.on_1 = Vec3_init_$Create$(1.0, 1.0, 1.0);
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function Vec3(backingStorage, offset) {
    Companion_getInstance_7();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 3 | 0);
    tmp.ee_1 = tmp1_elvis_lhs == null ? new Float32Array(3) : tmp1_elvis_lhs;
  }
  protoOf(Vec3).ul = function () {
    return this.ee_1;
  };
  protoOf(Vec3).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform3fv(uniformLocation, this.ee_1);
  };
  function Vec3Array_init_$Init$(size, $this) {
    Vec3Array.call($this, null, size, size);
    return $this;
  }
  function Vec3Array_init_$Create$(size) {
    return Vec3Array_init_$Init$(size, objectCreate(protoOf(Vec3Array)));
  }
  function Vec3Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 3), imul(endIndex, 3));
    tmp.pn_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 3)) : tmp1_elvis_lhs;
  }
  protoOf(Vec3Array).ul = function () {
    return this.pn_1;
  };
  protoOf(Vec3Array).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform3fv(uniformLocation, this.pn_1);
  };
  function Vec4_init_$Init$(u, v, s, t, $this) {
    u = u === VOID ? 0.0 : u;
    v = v === VOID ? 0.0 : v;
    s = s === VOID ? 0.0 : s;
    t = t === VOID ? 1.0 : t;
    Vec4.call($this, null, 0);
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.qn_1[0] = u;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.qn_1[1] = v;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.qn_1[2] = s;
    // Inline function 'org.khronos.webgl.set' call
    // Inline function 'kotlin.js.asDynamic' call
    $this.qn_1[3] = t;
    return $this;
  }
  function Vec4_init_$Create$(u, v, s, t) {
    return Vec4_init_$Init$(u, v, s, t, objectCreate(protoOf(Vec4)));
  }
  function Companion_8() {
    Companion_instance_8 = this;
    this.rn_1 = Vec4_init_$Create$(0.0, 0.0, 0.0, 0.0);
    this.sn_1 = Vec4_init_$Create$(1.0, 1.0, 1.0, 1.0);
  }
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function Vec4(backingStorage, offset) {
    Companion_getInstance_8();
    offset = offset === VOID ? 0 : offset;
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(offset, offset + 4 | 0);
    tmp.qn_1 = tmp1_elvis_lhs == null ? new Float32Array(4) : tmp1_elvis_lhs;
  }
  protoOf(Vec4).ul = function () {
    return this.qn_1;
  };
  protoOf(Vec4).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.qn_1);
  };
  function Vec4Array_init_$Init$(size, $this) {
    Vec4Array.call($this, null, size, size);
    return $this;
  }
  function Vec4Array_init_$Create$(size) {
    return Vec4Array_init_$Init$(size, objectCreate(protoOf(Vec4Array)));
  }
  function Vec4Array(backingStorage, startIndex, endIndex) {
    startIndex = startIndex === VOID ? 0 : startIndex;
    endIndex = endIndex === VOID ? 0 : endIndex;
    VecArray.call(this);
    var tmp = this;
    var tmp1_elvis_lhs = backingStorage == null ? null : backingStorage.subarray(imul(startIndex, 4), imul(endIndex, 4));
    tmp.tn_1 = tmp1_elvis_lhs == null ? new Float32Array(imul(startIndex, 4)) : tmp1_elvis_lhs;
  }
  protoOf(Vec4Array).ul = function () {
    return this.tn_1;
  };
  protoOf(Vec4Array).vl = function (gl, uniformLocation, samplerIndex) {
    gl.uniform4fv(uniformLocation, this.tn_1);
  };
  function VecArray() {
  }
  //region block: post-declaration
  protoOf(IVec1).wl = getStorageSize;
  protoOf(IVec1).gl = set;
  protoOf(IVecArray).wl = getStorageSize;
  protoOf(IVecArray).gl = set;
  protoOf(IVec1Array).wl = getStorageSize;
  protoOf(IVec1Array).gl = set;
  protoOf(IVec2).wl = getStorageSize;
  protoOf(IVec2).gl = set;
  protoOf(IVec3).wl = getStorageSize;
  protoOf(IVec3).gl = set;
  protoOf(IVec4).wl = getStorageSize;
  protoOf(IVec4).gl = set;
  protoOf(Mat4).wl = getStorageSize_0;
  protoOf(Mat4).gl = set_1;
  protoOf(Mat4Array).wl = getStorageSize_0;
  protoOf(Mat4Array).gl = set_1;
  protoOf(Sampler2D).wl = getStorageSize_1;
  protoOf(Sampler2D).gl = set_2;
  protoOf(Sampler3D).wl = getStorageSize_1;
  protoOf(Sampler3D).gl = set_2;
  protoOf(SamplerCube).wl = getStorageSize_1;
  protoOf(SamplerCube).gl = set_2;
  protoOf(Vec1).wl = getStorageSize_0;
  protoOf(Vec1).gl = set_1;
  protoOf(VecArray).wl = getStorageSize_0;
  protoOf(VecArray).gl = set_1;
  protoOf(Vec1Array).wl = getStorageSize_0;
  protoOf(Vec1Array).gl = set_1;
  protoOf(Vec2).wl = getStorageSize_0;
  protoOf(Vec2).fe = set_0;
  protoOf(Vec2).gl = set_1;
  protoOf(Vec2Array).wl = getStorageSize_0;
  protoOf(Vec2Array).gl = set_1;
  protoOf(Vec3).wl = getStorageSize_0;
  protoOf(Vec3).fe = set_0;
  protoOf(Vec3).gl = set_1;
  protoOf(Vec3Array).wl = getStorageSize_0;
  protoOf(Vec3Array).gl = set_1;
  protoOf(Vec4).wl = getStorageSize_0;
  protoOf(Vec4).gl = set_1;
  protoOf(Vec4Array).wl = getStorageSize_0;
  protoOf(Vec4Array).gl = set_1;
  //endregion
  main();
  return _;
}));

//# sourceMappingURL=kog-client.js.map
