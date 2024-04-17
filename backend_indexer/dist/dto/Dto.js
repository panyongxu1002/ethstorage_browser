"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionByHashDesc = exports.TransactionByHash = exports.TxListDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class TxListDto {
}
exports.TxListDto = TxListDto;
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 1,
        name: 'page',
        required: false,
        type: Number,
        description: '页码',
    }),
    __metadata("design:type", Number)
], TxListDto.prototype, "page", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: 10,
        name: 'offset',
        required: false,
        type: Number,
        description: '一页数量',
    }),
    __metadata("design:type", Number)
], TxListDto.prototype, "offset", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        default: '0x804C520d3c084C805E37A35E90057Ac32831F96f',
        required: false,
        name: 'address',
        type: String,
        description: '监听交易的合约地址',
    }),
    __metadata("design:type", String)
], TxListDto.prototype, "address", void 0);
class TransactionByHash {
}
exports.TransactionByHash = TransactionByHash;
__decorate([
    (0, swagger_1.ApiProperty)({
        default: '0x2c39c652443c63b247509711f4c97344e3e2814997df3d13dd0b0737d7124dff',
        required: true,
        name: 'hash',
        type: String,
        description: '交易的hash',
    }),
    __metadata("design:type", String)
], TransactionByHash.prototype, "hash", void 0);
exports.TransactionByHashDesc = {
    description: '交易hash值',
    required: true,
    schema: {
        type: 'object',
        properties: {
            hash: {
                type: 'string',
                example: '0x2c39c652443c63b247509711f4c97344e3e2814997df3d13dd0b0737d7124dff',
            },
        },
    },
};
//# sourceMappingURL=Dto.js.map