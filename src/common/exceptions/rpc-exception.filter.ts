/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

interface IrpcError {
  status: number;
  message: string;
}

@Catch(RpcException)
export class RpcCustomExceptionFilter implements ExceptionFilter {
  catch(exception: RpcException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const rpcError: unknown = exception.getError();
    console.log(rpcError);
    if (typeof rpcError === 'object') {
      const error: IrpcError = rpcError!['error'] || rpcError;
      const errorKeys = Object.keys(error);
      if (errorKeys.includes('status') && errorKeys.includes('message')) {
        const status = isNaN(+error.status) ? 400 : +error.status;
        return response.status(status).json(error);
      }
    } else {
      return response.status(400).json({
        status: 400,
        message: rpcError,
      });
    }
  }
}
