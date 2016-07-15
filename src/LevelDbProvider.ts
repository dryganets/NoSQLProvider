/**
 *LProvider.ts
 * Author: David de Regt
 * Copyright: Microsoft 2015
 *
 * NoSqlProvider provider setup for a non-persisted in-memory database backing provider.
 */

import levelup = require('levelup');
import _ = require('lodash');
import SyncTasks = require('synctasks');

import NoSqlProvider = require('./NoSqlProvider');
import NoSqlProviderUtils = require('./NoSqlProviderUtils');

export class LevelDbProvider extends NoSqlProvider.DbProvider {
     open(dbName: string, schema: NoSqlProvider.DbSchema, wipeIfExists: boolean, verbose: boolean): SyncTasks.Promise<void> {
        super.open(dbName, schema, wipeIfExists, verbose);
     }

     close(): SyncTasks.Promise<void> {
        return SyncTasks.Resolved<void>();
     }

     openTransaction(storeNames: string | string[], writeNeeded: boolean): SyncTasks.Promise<NoSqlProvider.DbTransaction> {
        return SyncTasks.Resolved(new NoOpTransaction(this));
    }

}

class NoOpTransaction implements NoSqlProvider.DbTransaction {
    private _prov: LevelDbProvider;

    constructor(prov: LevelDbProvider) {
        this._prov = prov;
    }

    getStore(storeName: string): NoSqlProvider.DbStore {
        return null;//this._prov.getStore(storeName);
    }
}

class LeveDbStore implements NoSqlProvider.DbStore {
    get<T>(key: any|any[]): SyncTasks.Promise<T> {
        return null;
    }

    getMultiple<T>(keyOrKeys: any|any[]): SyncTasks.Promise<T[]> {
        return null;
    }

    put(itemOrItems: any|any[]): SyncTasks.Promise<void> {
        return null;
    }

    remove(keyOrKeys: any|any[]): SyncTasks.Promise<void> {
        return null;
    }

    openPrimaryKey(): NoSqlProvider.DbIndex {
        return null;
    }

    openIndex(indexName: string): NoSqlProvider.DbIndex {
        return null;
    }

    clearAllData(): SyncTasks.Promise<void> {
        return null;
    }
}

class LevelDbIndex implements NoSqlProvider.DbIndex {
    getAll<T>(reverse?: boolean, limit?: number, offset?: number): SyncTasks.Promise<T[]> {
        return null;
    }

    getOnly<T>(key: any|any[], reverse?: boolean, limit?: number, offset?: number): SyncTasks.Promise<T[]> {
        return null;
    }

    getRange<T>(keyLowRange: any|any[], keyHighRange: any|any[], lowRangeExclusive?: boolean, highRangeExclusive?: boolean,
        reverse?: boolean, limit?: number, offset?: number): SyncTasks.Promise<T[]> {
        
        return null;
    }
}