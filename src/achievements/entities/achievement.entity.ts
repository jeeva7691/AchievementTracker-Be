import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('Achievements')
export class Achievement {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    DateOfAchievement:Date;

    @Column()
    AchievementDescription:string

    @Column()
    RemarksAchievement:string
  
    @Column({ nullable: true })
    createdBy: string;
  
    @CreateDateColumn({ type: 'timestamp'})
    createdAt: Date;
  
    @Column({ nullable: true })
    updatedBy: string;
  
    @UpdateDateColumn({ type: 'timestamp'})
    updatedAt: Date;
  
    @Column({ nullable: true })
    deletedBy: string;
  
    @DeleteDateColumn({ type: 'timestamp', nullable: true })
    deletedAt: Date;
}
