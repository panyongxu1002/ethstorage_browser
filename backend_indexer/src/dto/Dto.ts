import { ApiBody, ApiResponse, ApiQuery, ApiProperty } from '@nestjs/swagger';

export class TxListDto {
  @ApiProperty({
    default: 1,
    name: 'page',
    required: false,
    type: Number,
    description: '页码',
  })
  page: number;
  @ApiProperty({
    default: 10,
    name: 'offset',
    required: false,
    type: Number,
    description: '一页数量',
  })
  offset: number;
  @ApiProperty({
    default: '0x804C520d3c084C805E37A35E90057Ac32831F96f',
    required: false,
    name: 'address',
    type: String,
    description: '监听交易的合约地址',
  })
  address?: string;
}

export class TransactionByHash {
  @ApiProperty({
    default:
      '0x2c39c652443c63b247509711f4c97344e3e2814997df3d13dd0b0737d7124dff',
    required: true,
    name: 'hash',
    type: String,
    description: '交易的hash',
  })
  hash: string;
}
export const TransactionByHashDesc = {
  description: '交易hash值',
  required: true,
  schema: {
    type: 'object',
    properties: {
      hash: {
        type: 'string',
        example:
          '0x2c39c652443c63b247509711f4c97344e3e2814997df3d13dd0b0737d7124dff',
      },
    },
  },
}

