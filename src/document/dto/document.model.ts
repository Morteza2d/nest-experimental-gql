import { Field, GraphQLISODateTime, ObjectType } from "@nestjs/graphql";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Folder } from "../../folder/dto/folder.model";

@Entity({ name: "documents" })
@ObjectType()
export class Document {

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

  @Field(type => Folder)
  @ManyToOne((_type) => Folder, (folder) => folder.documents)
  folder: Folder;

}
