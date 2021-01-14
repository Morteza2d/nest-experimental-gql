import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import { Document } from "../../document/dto/document.model";
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from "typeorm";


@Entity({ name: "folders" })
@ObjectType()
export class Folder {

  @PrimaryGeneratedColumn("uuid")
  @Field()
  readonly id: string;

  @CreateDateColumn()
  @Field((_type) => GraphQLISODateTime)
  readonly created_at: Date;

  @UpdateDateColumn()
  @Field((_type) => GraphQLISODateTime)
  readonly updated_at: Date;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  comment: string;

  @Field(type => [Document], { nullable: true, defaultValue:[] })
  @OneToMany(
    (_type) => Document,
    (doc) => doc.folder
  )
  documents: Document[];


}
