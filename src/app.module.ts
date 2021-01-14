import { Module } from "@nestjs/common";
import { PrismaService } from "./services/prisma.service";
import { GraphQLModule } from "@nestjs/graphql";
import { DocumentModule } from "./document/document.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { dbConfig } from "./config/db";
import { FolderModule } from "./folder/folder.module";

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: "src/schema.gql"
    }),
    TypeOrmModule.forRoot(dbConfig),
    DocumentModule,
    FolderModule
  ],
  controllers: [],
  providers: [
    PrismaService
  ]
})
export class AppModule {
}
