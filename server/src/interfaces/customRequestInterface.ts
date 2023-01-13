import { Request } from 'express';

// we are making a customized interface for "CustomeRequest" that extends from pre-built "Request" interface
// this is needed because sometimes we MAY need to add additinoal propety with additional data onto request object in middleware
// additinoal properties must be in "?". This is because when our customized middleware function is execute, the "req" parameter assigned value is still based on ORIGINAL REQUEST INTERFACE
interface CustomeRequest extends Request {
  q1?: string;
  q2?: string;
}

export default CustomeRequest;
