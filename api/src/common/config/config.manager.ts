import {TypeOrmModuleOptions} from '@nestjs/typeorm';
import {ConfigKey, configMinimalKeys} from './enum/configkey'
require('dotenv').config();
class ConfigManager {
    constructor(private env: { [k: string]: string | undefined }) {}
    public ensureValues(keys: ConfigKey[]): ConfigManager {
        keys.forEach((k: ConfigKey) => this.getValue(k, true));
        return this;
    }
    public getTypeOrmConfig(): TypeOrmModuleOptions {
        return {
            type: this.getValue(ConfigKey.DB_TYPE) as any,
            host: this.getValue(ConfigKey.DB_HOST),
            port: parseInt(this.getValue(ConfigKey.DB_PORT)),
            username: this.getValue(ConfigKey.DB_USER),
            password: this.getValue(ConfigKey.DB_PASSWORD),
            database: this.getValue(ConfigKey.DB_DATABASE),
            entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            synchronize: (this.getValue(ConfigKey.DB_SYNC)=== 'true'),
        }
    }
    getValue(key: ConfigKey, throwOnMissing = true): string {
        const value = this.env[key];
        if (!value && throwOnMissing) {
            throw new Error(`config error - missing env.${key}`);
        }
        return value;
    }
}
const configManager = new ConfigManager(process.env).ensureValues(configMinimalKeys);
export {configManager}