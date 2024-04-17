import { ConfigService } from '@nestjs/config';
import { HttpService } from '@nestjs/axios';
export declare class AppService {
    private configService;
    private readonly httpService;
    constructor(configService: ConfigService, httpService: HttpService);
    getHello(): string;
    get NetworkBaseUrl(): any;
    getTxListByAddress({ page, offset, address, }: {
        page?: number;
        offset?: number;
        address?: string;
    }): Promise<any>;
    getTransactionByHash(hash: string): Promise<any>;
    getTransactionReceipt(hash: string): Promise<any>;
}
