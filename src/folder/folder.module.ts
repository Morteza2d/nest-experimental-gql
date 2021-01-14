import { forwardRef, Module } from "@nestjs/common";
import { FolderController } from "./folder.controller";
import { FolderService } from "./folder.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { FolderResolver } from "./folder.resolver";
import { Folder } from "./dto/folder.model";
import { Document } from "../document/dto/document.model";
import { DocumentModule } from "../document/document.module";


@Module({
  providers: [
    FolderService,
    FolderResolver,
  ],
  controllers: [
    FolderController
  ],
  imports: [
    TypeOrmModule.forFeature([
      Folder,
      Document
    ]),
    forwardRef(() => DocumentModule)
  ],
  exports:[
    FolderService
  ]
})
export class FolderModule {

}
