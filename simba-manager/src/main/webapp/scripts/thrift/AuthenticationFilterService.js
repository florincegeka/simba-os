//
// Autogenerated by Thrift Compiler (0.9.3)
//
// DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
//


//HELPER FUNCTIONS AND STRUCTURES

AuthenticationFilterService_processRequest_args = function(args) {
  this.requestData = null;
  this.chainCommand = null;
  if (args) {
    if (args.requestData !== undefined && args.requestData !== null) {
      this.requestData = new RequestData(args.requestData);
    }
    if (args.chainCommand !== undefined && args.chainCommand !== null) {
      this.chainCommand = args.chainCommand;
    }
  }
};
AuthenticationFilterService_processRequest_args.prototype = {};
AuthenticationFilterService_processRequest_args.prototype.read = function(input) {
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
      if (ftype == Thrift.Type.STRUCT) {
        this.requestData = new RequestData();
        this.requestData.read(input);
      } else {
        input.skip(ftype);
      }
      break;
      case 2:
      if (ftype == Thrift.Type.STRING) {
        this.chainCommand = input.readString().value;
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

AuthenticationFilterService_processRequest_args.prototype.write = function(output) {
  output.writeStructBegin('AuthenticationFilterService_processRequest_args');
  if (this.requestData !== null && this.requestData !== undefined) {
    output.writeFieldBegin('requestData', Thrift.Type.STRUCT, 1);
    this.requestData.write(output);
    output.writeFieldEnd();
  }
  if (this.chainCommand !== null && this.chainCommand !== undefined) {
    output.writeFieldBegin('chainCommand', Thrift.Type.STRING, 2);
    output.writeString(this.chainCommand);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthenticationFilterService_processRequest_result = function(args) {
  this.success = null;
  if (args) {
    if (args.success !== undefined && args.success !== null) {
      this.success = new ActionDescriptor(args.success);
    }
  }
};
AuthenticationFilterService_processRequest_result.prototype = {};
AuthenticationFilterService_processRequest_result.prototype.read = function(input) {
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
      case 0:
      if (ftype == Thrift.Type.STRUCT) {
        this.success = new ActionDescriptor();
        this.success.read(input);
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

AuthenticationFilterService_processRequest_result.prototype.write = function(output) {
  output.writeStructBegin('AuthenticationFilterService_processRequest_result');
  if (this.success !== null && this.success !== undefined) {
    output.writeFieldBegin('success', Thrift.Type.STRUCT, 0);
    this.success.write(output);
    output.writeFieldEnd();
  }
  output.writeFieldStop();
  output.writeStructEnd();
  return;
};

AuthenticationFilterServiceClient = function(input, output) {
    this.input = input;
    this.output = (!output) ? input : output;
    this.seqid = 0;
};
AuthenticationFilterServiceClient.prototype = {};
AuthenticationFilterServiceClient.prototype.processRequest = function(requestData, chainCommand, callback) {
  this.send_processRequest(requestData, chainCommand, callback); 
  if (!callback) {
    return this.recv_processRequest();
  }
};

AuthenticationFilterServiceClient.prototype.send_processRequest = function(requestData, chainCommand, callback) {
  this.output.writeMessageBegin('processRequest', Thrift.MessageType.CALL, this.seqid);
  var args = new AuthenticationFilterService_processRequest_args();
  args.requestData = requestData;
  args.chainCommand = chainCommand;
  args.write(this.output);
  this.output.writeMessageEnd();
  if (callback) {
    var self = this;
    this.output.getTransport().flush(true, function() {
      var result = null;
      try {
        result = self.recv_processRequest();
      } catch (e) {
        result = e;
      }
      callback(result);
    });
  } else {
    return this.output.getTransport().flush();
  }
};

AuthenticationFilterServiceClient.prototype.recv_processRequest = function() {
  var ret = this.input.readMessageBegin();
  var fname = ret.fname;
  var mtype = ret.mtype;
  var rseqid = ret.rseqid;
  if (mtype == Thrift.MessageType.EXCEPTION) {
    var x = new Thrift.TApplicationException();
    x.read(this.input);
    this.input.readMessageEnd();
    throw x;
  }
  var result = new AuthenticationFilterService_processRequest_result();
  result.read(this.input);
  this.input.readMessageEnd();

  if (null !== result.success) {
    return result.success;
  }
  throw 'processRequest failed: unknown result';
};
