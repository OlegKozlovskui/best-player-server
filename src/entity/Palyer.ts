import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
@Entity()
export class Player extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column('text')
  name: string;

  @Field(() => Int)
  @Column('int')
  year: number;

  @Field()
  @Column('text')
  photoUrl: string;

  @Field()
  @Column('text')
  bio: string;

  @Field(() => Int)
  @Column('int')
  votes: number;
}
