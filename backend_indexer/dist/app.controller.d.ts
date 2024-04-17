import { AppService } from './app.service';
import { TxListDto, TransactionByHash } from './dto/Dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getTxListByAddress(txListDto: TxListDto): Promise<any>;
    getTransactionByHash(tx: TransactionByHash): Promise<any>;
    getTransactionReceipt(tx: TransactionByHash): Promise<any>;
}
