import {Exclude} from 'class-transformer';
import {CreateDateColumn, Entity, UpdateDateColumn} from 'typeorm';
@Entity()
export abstract class BaseEntity {
    @Exclude({ toPlainOnly: true })
    @CreateDateColumn()
    created: Date;
    @Exclude({ toPlainOnly: true })
    @UpdateDateColumn()
    updated: Date;
}