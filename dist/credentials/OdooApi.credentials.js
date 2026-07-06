"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OdooApi = void 0;
class OdooApi {
    constructor() {
        this.name = 'odooApi';
        this.displayName = 'Odoo API';
        this.properties = [
            {
                displayName: 'Site URL',
                name: 'url',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Username',
                name: 'username',
                type: 'string',
                default: '',
                required: true,
            },
            {
                displayName: 'Password or API Key',
                name: 'password',
                type: 'string',
                default: '',
                typeOptions: {
                    password: true,
                },
                required: true,
            },
            {
                displayName: 'Database Name',
                name: 'db',
                type: 'string',
                default: '',
                required: true,
            },
        ];
    }
}
exports.OdooApi = OdooApi;
//# sourceMappingURL=OdooApi.credentials.js.map