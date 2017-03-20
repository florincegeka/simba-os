//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


ActionType = {
  'MAKE_COOKIE' : 1,
  'DELETE_COOKIE' : 2,
  'ADD_PARAMETER_TO_TARGET' : 3,
  'REDIRECT' : 4,
  'DO_FILTER_AND_SET_PRINCIPAL' : 5
};
SSOToken = function(args) {
  this.token = null;
  if (args) {
    if (args.token !== undefined && args.token !== null) {
      this.token = args.token;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field token is unset!');
    }
  }
};
SSOToken.prototype = {};
SSOToken.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.STRING) {
        this.token = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 0:
        input.skip(ftype);
        break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

SSOToken.prototype.write = function(output) {
  output.writeStructBegin('SSOToken');
  if (this.token !== null && this.token !== undefined) {
    output.writeFieldBegin('token', Thrift.Type.STRING, 1);
    output.writeString(this.token);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

ActionDescriptor = function(args) {
  this.actionTypes = [];
  this.parameterMap = {

};
  this.ssoToken = null;
  this.redirectURL = null;
  this.principal = null;
  this.mappingToken = null;
  if (args) {
    if (args.actionTypes !== undefined && args.actionTypes !== null) {
      this.actionTypes = Thrift.copyList(args.actionTypes, [null]);
    }
    if (args.parameterMap !== undefined && args.parameterMap !== null) {
      this.parameterMap = Thrift.copyMap(args.parameterMap, [null]);
    }
    if (args.ssoToken !== undefined && args.ssoToken !== null) {
      this.ssoToken = new SSOToken(args.ssoToken);
    }
    if (args.redirectURL !== undefined && args.redirectURL !== null) {
      this.redirectURL = args.redirectURL;
    }
    if (args.principal !== undefined && args.principal !== null) {
      this.principal = args.principal;
    }
    if (args.mappingToken !== undefined && args.mappingToken !== null) {
      this.mappingToken = args.mappingToken;
    }
  }
};
ActionDescriptor.prototype = {};
ActionDescriptor.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.SET) {
        var _size0 = 0;
        var _rtmp34;
        this.actionTypes = [];
        var _etype3 = 0;
        _rtmp34 = input.readSetBegin();
        _etype3 = _rtmp34.etype;
        _size0 = _rtmp34.size;
        for (var _i5 = 0; _i5 < _size0; ++_i5)
        {
          var elem6 = null;
          elem6 = input.readI32().value;
          this.actionTypes.push(elem6);
        }
        input.readSetEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size7 = 0;
        var _rtmp311;
        this.parameterMap = {};
        var _ktype8 = 0;
        var _vtype9 = 0;
        _rtmp311 = input.readMapBegin();
        _ktype8 = _rtmp311.ktype;
        _vtype9 = _rtmp311.vtype;
        _size7 = _rtmp311.size;
        for (var _i12 = 0; _i12 < _size7; ++_i12)
        {
          if (_i12 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key13 = null;
          var val14 = null;
          key13 = input.readString().value;
          val14 = input.readString().value;
          this.parameterMap[key13] = val14;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRUCT) {
        this.ssoToken = new SSOToken();
        this.ssoToken.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.redirectURL = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRING) {
        this.principal = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.mappingToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

ActionDescriptor.prototype.write = function(output) {
  output.writeStructBegin('ActionDescriptor');
  if (this.actionTypes !== null && this.actionTypes !== undefined) {
    output.writeFieldBegin('actionTypes', Thrift.Type.SET, 1);
    output.writeSetBegin(Thrift.Type.I32, this.actionTypes.length);
    for (var iter15 in this.actionTypes)
    {
      if (this.actionTypes.hasOwnProperty(iter15))
      {
        iter15 = this.actionTypes[iter15];
        output.writeI32(iter15);
      }
    }
    output.writeSetEnd();
    output.writeFieldEnd();
  }
  if (this.parameterMap !== null && this.parameterMap !== undefined) {
    output.writeFieldBegin('parameterMap', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.parameterMap));
    for (var kiter16 in this.parameterMap)
    {
      if (this.parameterMap.hasOwnProperty(kiter16))
      {
        var viter17 = this.parameterMap[kiter16];
        output.writeString(kiter16);
        output.writeString(viter17);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.ssoToken !== null && this.ssoToken !== undefined) {
    output.writeFieldBegin('ssoToken', Thrift.Type.STRUCT, 3);
    this.ssoToken.write(output);
    output.writeFieldEnd();
  }
  if (this.redirectURL !== null && this.redirectURL !== undefined) {
    output.writeFieldBegin('redirectURL', Thrift.Type.STRING, 4);
    output.writeString(this.redirectURL);
    output.writeFieldEnd();
  }
  if (this.principal !== null && this.principal !== undefined) {
    output.writeFieldBegin('principal', Thrift.Type.STRING, 5);
    output.writeString(this.principal);
    output.writeFieldEnd();
  }
  if (this.mappingToken !== null && this.mappingToken !== undefined) {
    output.writeFieldBegin('mappingToken', Thrift.Type.STRING, 6);
    output.writeString(this.mappingToken);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

RequestData = function(args) {
  this.requestParameters = {

};
  this.requestHeaders = {

};
  this.requestURL = null;
  this.simbaWebURL = null;
  this.ssoToken = null;
  this.clientIPAddress = null;
  this.logoutRequest = null;
  this.loginRequest = null;
  this.ssoTokenMappingKeyProvided = null;
  this.changePasswordRequest = null;
  this.showChangePasswordRequest = null;
  this.requestMethod = null;
  this.hostServerName = null;
  this.loginToken = null;
  if (args) {
    if (args.requestParameters !== undefined && args.requestParameters !== null) {
      this.requestParameters = Thrift.copyMap(args.requestParameters, [null]);
    }
    if (args.requestHeaders !== undefined && args.requestHeaders !== null) {
      this.requestHeaders = Thrift.copyMap(args.requestHeaders, [null]);
    }
    if (args.requestURL !== undefined && args.requestURL !== null) {
      this.requestURL = args.requestURL;
    }
    if (args.simbaWebURL !== undefined && args.simbaWebURL !== null) {
      this.simbaWebURL = args.simbaWebURL;
    }
    if (args.ssoToken !== undefined && args.ssoToken !== null) {
      this.ssoToken = new SSOToken(args.ssoToken);
    }
    if (args.clientIPAddress !== undefined && args.clientIPAddress !== null) {
      this.clientIPAddress = args.clientIPAddress;
    }
    if (args.logoutRequest !== undefined && args.logoutRequest !== null) {
      this.logoutRequest = args.logoutRequest;
    }
    if (args.loginRequest !== undefined && args.loginRequest !== null) {
      this.loginRequest = args.loginRequest;
    }
    if (args.ssoTokenMappingKeyProvided !== undefined && args.ssoTokenMappingKeyProvided !== null) {
      this.ssoTokenMappingKeyProvided = args.ssoTokenMappingKeyProvided;
    }
    if (args.changePasswordRequest !== undefined && args.changePasswordRequest !== null) {
      this.changePasswordRequest = args.changePasswordRequest;
    }
    if (args.showChangePasswordRequest !== undefined && args.showChangePasswordRequest !== null) {
      this.showChangePasswordRequest = args.showChangePasswordRequest;
    }
    if (args.requestMethod !== undefined && args.requestMethod !== null) {
      this.requestMethod = args.requestMethod;
    }
    if (args.hostServerName !== undefined && args.hostServerName !== null) {
      this.hostServerName = args.hostServerName;
    }
    if (args.loginToken !== undefined && args.loginToken !== null) {
      this.loginToken = args.loginToken;
    }
  }
};
RequestData.prototype = {};
RequestData.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.MAP) {
        var _size18 = 0;
        var _rtmp322;
        this.requestParameters = {};
        var _ktype19 = 0;
        var _vtype20 = 0;
        _rtmp322 = input.readMapBegin();
        _ktype19 = _rtmp322.ktype;
        _vtype20 = _rtmp322.vtype;
        _size18 = _rtmp322.size;
        for (var _i23 = 0; _i23 < _size18; ++_i23)
        {
          if (_i23 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key24 = null;
          var val25 = null;
          key24 = input.readString().value;
          val25 = input.readString().value;
          this.requestParameters[key24] = val25;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.MAP) {
        var _size26 = 0;
        var _rtmp330;
        this.requestHeaders = {};
        var _ktype27 = 0;
        var _vtype28 = 0;
        _rtmp330 = input.readMapBegin();
        _ktype27 = _rtmp330.ktype;
        _vtype28 = _rtmp330.vtype;
        _size26 = _rtmp330.size;
        for (var _i31 = 0; _i31 < _size26; ++_i31)
        {
          if (_i31 > 0 ) {
            if (input.rstack.length > input.rpos[input.rpos.length -1] + 1) {
              input.rstack.pop();
            }
          }
          var key32 = null;
          var val33 = null;
          key32 = input.readString().value;
          val33 = input.readString().value;
          this.requestHeaders[key32] = val33;
        }
        input.readMapEnd();
      } else {
        input.skip(ftype);
      }
      break;
      case 3:
      if (ftype == Thrift.Type.STRING) {
        this.requestURL = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 4:
      if (ftype == Thrift.Type.STRING) {
        this.simbaWebURL = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 5:
      if (ftype == Thrift.Type.STRUCT) {
        this.ssoToken = new SSOToken();
        this.ssoToken.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 6:
      if (ftype == Thrift.Type.STRING) {
        this.clientIPAddress = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 7:
      if (ftype == Thrift.Type.BOOL) {
        this.logoutRequest = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 8:
      if (ftype == Thrift.Type.BOOL) {
        this.loginRequest = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 9:
      if (ftype == Thrift.Type.BOOL) {
        this.ssoTokenMappingKeyProvided = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 10:
      if (ftype == Thrift.Type.BOOL) {
        this.changePasswordRequest = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 11:
      if (ftype == Thrift.Type.BOOL) {
        this.showChangePasswordRequest = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 12:
      if (ftype == Thrift.Type.STRING) {
        this.requestMethod = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 13:
      if (ftype == Thrift.Type.STRING) {
        this.hostServerName = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 14:
      if (ftype == Thrift.Type.STRING) {
        this.loginToken = input.readString().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

RequestData.prototype.write = function(output) {
  output.writeStructBegin('RequestData');
  if (this.requestParameters !== null && this.requestParameters !== undefined) {
    output.writeFieldBegin('requestParameters', Thrift.Type.MAP, 1);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.requestParameters));
    for (var kiter34 in this.requestParameters)
    {
      if (this.requestParameters.hasOwnProperty(kiter34))
      {
        var viter35 = this.requestParameters[kiter34];
        output.writeString(kiter34);
        output.writeString(viter35);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.requestHeaders !== null && this.requestHeaders !== undefined) {
    output.writeFieldBegin('requestHeaders', Thrift.Type.MAP, 2);
    output.writeMapBegin(Thrift.Type.STRING, Thrift.Type.STRING, Thrift.objectLength(this.requestHeaders));
    for (var kiter36 in this.requestHeaders)
    {
      if (this.requestHeaders.hasOwnProperty(kiter36))
      {
        var viter37 = this.requestHeaders[kiter36];
        output.writeString(kiter36);
        output.writeString(viter37);
      }
    }
    output.writeMapEnd();
    output.writeFieldEnd();
  }
  if (this.requestURL !== null && this.requestURL !== undefined) {
    output.writeFieldBegin('requestURL', Thrift.Type.STRING, 3);
    output.writeString(this.requestURL);
    output.writeFieldEnd();
  }
  if (this.simbaWebURL !== null && this.simbaWebURL !== undefined) {
    output.writeFieldBegin('simbaWebURL', Thrift.Type.STRING, 4);
    output.writeString(this.simbaWebURL);
    output.writeFieldEnd();
  }
  if (this.ssoToken !== null && this.ssoToken !== undefined) {
    output.writeFieldBegin('ssoToken', Thrift.Type.STRUCT, 5);
    this.ssoToken.write(output);
    output.writeFieldEnd();
  }
  if (this.clientIPAddress !== null && this.clientIPAddress !== undefined) {
    output.writeFieldBegin('clientIPAddress', Thrift.Type.STRING, 6);
    output.writeString(this.clientIPAddress);
    output.writeFieldEnd();
  }
  if (this.logoutRequest !== null && this.logoutRequest !== undefined) {
    output.writeFieldBegin('logoutRequest', Thrift.Type.BOOL, 7);
    output.writeBool(this.logoutRequest);
    output.writeFieldEnd();
  }
  if (this.loginRequest !== null && this.loginRequest !== undefined) {
    output.writeFieldBegin('loginRequest', Thrift.Type.BOOL, 8);
    output.writeBool(this.loginRequest);
    output.writeFieldEnd();
  }
  if (this.ssoTokenMappingKeyProvided !== null && this.ssoTokenMappingKeyProvided !== undefined) {
    output.writeFieldBegin('ssoTokenMappingKeyProvided', Thrift.Type.BOOL, 9);
    output.writeBool(this.ssoTokenMappingKeyProvided);
    output.writeFieldEnd();
  }
  if (this.changePasswordRequest !== null && this.changePasswordRequest !== undefined) {
    output.writeFieldBegin('changePasswordRequest', Thrift.Type.BOOL, 10);
    output.writeBool(this.changePasswordRequest);
    output.writeFieldEnd();
  }
  if (this.showChangePasswordRequest !== null && this.showChangePasswordRequest !== undefined) {
    output.writeFieldBegin('showChangePasswordRequest', Thrift.Type.BOOL, 11);
    output.writeBool(this.showChangePasswordRequest);
    output.writeFieldEnd();
  }
  if (this.requestMethod !== null && this.requestMethod !== undefined) {
    output.writeFieldBegin('requestMethod', Thrift.Type.STRING, 12);
    output.writeString(this.requestMethod);
    output.writeFieldEnd();
  }
  if (this.hostServerName !== null && this.hostServerName !== undefined) {
    output.writeFieldBegin('hostServerName', Thrift.Type.STRING, 13);
    output.writeString(this.hostServerName);
    output.writeFieldEnd();
  }
  if (this.loginToken !== null && this.loginToken !== undefined) {
    output.writeFieldBegin('loginToken', Thrift.Type.STRING, 14);
    output.writeString(this.loginToken);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

PolicyDecision = function(args) {
  this.allowed = null;
  this.expirationTimestamp = null;
  if (args) {
    if (args.allowed !== undefined && args.allowed !== null) {
      this.allowed = args.allowed;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field allowed is unset!');
    }
    if (args.expirationTimestamp !== undefined && args.expirationTimestamp !== null) {
      this.expirationTimestamp = args.expirationTimestamp;
    } else {
      throw new Thrift.TProtocolException(Thrift.TProtocolExceptionType.UNKNOWN, 'Required field expirationTimestamp is unset!');
    }
  }
};
PolicyDecision.prototype = {};
PolicyDecision.prototype.read = function(input) {
  input.readStructBegin();
  while (true)
  {
    var ret = input.readFieldBegin();
    var fname = ret.fname;
    var ftype = ret.ftype;
    var fid = ret.fid;
    if (ftype == Thrift.Type.STOP) {
      break;
    }
    switch (fid)
    {
      case 1:
      if (ftype == Thrift.Type.BOOL) {
        this.allowed = input.readBool().value;
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.I64) {
        this.expirationTimestamp = input.readI64().value;
      } else {
        input.skip(ftype);
      }
      break;
      default:
        input.skip(ftype);
    }
    input.readFieldEnd();
  }
  input.readStructEnd();
  return;
};

PolicyDecision.prototype.write = function(output) {
  output.writeStructBegin('PolicyDecision');
  if (this.allowed !== null && this.allowed !== undefined) {
    output.writeFieldBegin('allowed', Thrift.Type.BOOL, 1);
    output.writeBool(this.allowed);
    output.writeFieldEnd();
  }
  if (this.expirationTimestamp !== null && this.expirationTimestamp !== undefined) {
    output.writeFieldBegin('expirationTimestamp', Thrift.Type.I64, 2);
    output.writeI64(this.expirationTimestamp);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

