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
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const axios_1 = require("@nestjs/axios");
let AppService = class AppService {
    constructor(configService, httpService) {
        this.configService = configService;
        this.httpService = httpService;
    }
    getHello() {
        return 'Hello World';
    }
    get NetworkBaseUrl() {
        const NetworkBaseUrl = this.configService.get('NetworkBaseUrl');
        return NetworkBaseUrl[process.env.Network];
    }
    async getTxListByAddress({ page = 1, offset = 10, address = '0x804C520d3c084C805E37A35E90057Ac32831F96f', }) {
        return new Promise(async (resolve, reject) => {
            const response = await this.httpService.get(this.NetworkBaseUrl.etherscan, {
                params: {
                    address,
                    page,
                    offset,
                },
            });
            response.subscribe((res) => {
                resolve(res.data);
            });
        });
    }
    getTransactionByHash(hash) {
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
    getTransactionReceipt(hash) {
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
};
exports.AppService = AppService;
exports.AppService = AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        axios_1.HttpService])
], AppService);
//# sourceMappingURL=app.service.js.map