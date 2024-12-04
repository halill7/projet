import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    ManyToOne,
    JoinColumn, OneToMany,
} from 'typeorm';
/*@Entity()
export class Notification {
    @PrimaryGeneratedColumn()
    id_notification: number;

    @Column()
    content: string;

    // Lien avec l'utilisateur concerné par la notification
    @ManyToOne(() => User, { nullable: false })
    user: User;

    // Lien avec la publication si la notification concerne un Post
    @ManyToOne(() => Post, { nullable: true })
    post: Post;

    // Lien avec le commentaire si la notification concerne un Comment
    @ManyToOne(() => Comment, { nullable: true })
    comment: Comment;

    @Column({ default: false })
    isRead: boolean;

    @CreateDateColumn()
    createdAt: Date;
}*/
