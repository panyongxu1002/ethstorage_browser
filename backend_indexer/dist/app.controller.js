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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const swagger_1 = require("@nestjs/swagger");
const Dto_1 = require("./dto/Dto");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    async getTxListByAddress(txListDto) {
        return await this.appService.getTxListByAddress(txListDto);
    }
    async getTransactionByHash(tx) {
        return await this.appService.getTransactionByHash(tx.hash);
    }
    async getTransactionReceipt(tx) {
        return await this.appService.getTransactionReceipt(tx.hash);
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('txlist'),
    (0, swagger_1.ApiOperation)({ summary: '通过合约地址来获取它的交易列表' }),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.TxListDto]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTxListByAddress", null);
__decorate([
    (0, common_1.Post)('getTransactionByHash'),
    (0, swagger_1.ApiOperation)({ summary: '通过hash来获取它的交易详情' }),
    (0, swagger_1.ApiBody)(Dto_1.TransactionByHashDesc),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.TransactionByHash]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTransactionByHash", null);
__decorate([
    (0, common_1.Post)('getTransactionReceipt'),
    (0, swagger_1.ApiOperation)({ summary: '通过hash来获取它的blob详情' }),
    (0, swagger_1.ApiBody)(Dto_1.TransactionByHashDesc),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Dto_1.TransactionByHash]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getTransactionReceipt", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)('/api/'),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map