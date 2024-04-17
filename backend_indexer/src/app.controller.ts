import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import {
  ApiBody,
  ApiResponse,
  ApiQuery,
  ApiProperty,
  ApiOperation,
} from '@nestjs/swagger';
import { TxListDto, TransactionByHash, TransactionByHashDesc } from './dto/Dto';

@Controller('/api/')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('txlist')
  @ApiOperation({ summary: '通过合约地址来获取它的交易列表' })
  async getTxListByAddress(@Query() txListDto: TxListDto): Promise<any> {
    return await this.appService.getTxListByAddress(txListDto);
  }

  @Post('getTransactionByHash')
  @ApiOperation({ summary: '通过hash来获取它的交易详情' })
  @ApiBody(TransactionByHashDesc)
  async getTransactionByHash(@Body() tx: TransactionByHash): Promise<any> {
    return await this.appService.getTransactionByHash(tx.hash);
  }

  @Post('getTransactionReceipt')
  @ApiOperation({ summary: '通过hash来获取它的blob详情' })
  @ApiBody(TransactionByHashDesc)
  async getTransactionReceipt(@Body() tx: TransactionByHash): Promise<any> {
    return await this.appService.getTransactionReceipt(tx.hash);
  }
}
