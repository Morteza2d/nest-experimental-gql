import { forwardRef, Module } from "@nestjs/common";
import { DocumentService } from "./document.service";
import { DocumentController } from "./document.controller";
import { DocumentResolver } from "./document.resolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Document } from "./dto/document.model";
import { FolderModule } from "../folder/folder.module";
import { Folder } from "../folder/dto/folder.model";


@Module({
  imports: [
    TypeOrmModule.forFeature([
      Document,
      Folder
    ]),
    forwardRef(()=> FolderModule)
  ],
  controllers: [
    DocumentController
  ],
  providers: [
    DocumentResolver,
    DocumentService
  ],
  exports:[
    DocumentService
  ]
})
export class DocumentModule {

}
