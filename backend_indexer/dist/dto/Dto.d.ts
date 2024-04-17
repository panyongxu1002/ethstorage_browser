export declare class TxListDto {
    page: number;
    offset: number;
    address?: string;
}
export declare class TransactionByHash {
    hash: string;
}
export declare const TransactionByHashDesc: {
    description: string;
    required: boolean;
    schema: {
        type: string;
        properties: {
            hash: {
                type: string;
                example: string;
            };
        };
    };
};
