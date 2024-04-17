import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    private configService: ConfigService,
    private readonly httpService: HttpService,
  ) {}
  getHello(): string {
    return 'Hello World ?!';
  }

  get NetworkBaseUrl() {
    const NetworkBaseUrl = this.configService.get('NetworkBaseUrl');
    return NetworkBaseUrl[process.env.Network];
  }

  async getTxListByAddress({
    page = 1,
    offset = 10,
    address = '0x804C520d3c084C805E37A35E90057Ac32831F96f',
  }): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = await this.httpService.get(
        this.NetworkBaseUrl.etherscan,
        {
          params: {
            address,
            page,
            offset,
          },
        },
      );
      response.subscribe((res) => {
        resolve(res.data);
      });
    });
  }

  getTransactionByHash(hash: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = await this.httpService.post(this.NetworkBaseUrl.infura, {
        params: [hash],
        id: 1,
        jsonrpc: '2.0',
        method: 'eth_getTransactionByHash',
      });
      response.subscribe((res) => {
        resolve(res.data);
      });
    });
  }

  getTransactionReceipt(hash: string): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const response = await this.httpService.post(this.NetworkBaseUrl.infura, {
        params: [hash],
        id: 1,
        jsonrpc: '2.0',
        method: 'eth_getTransactionReceipt',
      });
      response.subscribe((res) => {
        resolve(res.data);
      });
    });
  }
}
