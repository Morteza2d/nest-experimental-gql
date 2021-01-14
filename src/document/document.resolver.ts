import { DocumentService } from "./document.service";
import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Document } from "./dto/document.model";
import { Folder } from "../folder/dto/folder.model";
import { FolderService } from "../folder/folder.service";
import { Inject } from "@nestjs/common";


@Resolver(of => Document)

export class DocumentResolver {
  constructor(@Inject(DocumentService) private service: DocumentService,
              @Inject(FolderService) private folderService: FolderService) {
  }

  @Query(() => [Document])
  async documents(): Promise<Document[]> {
    return this.service.findAll();
  }

  @ResolveField(returns => Folder)
  async folder(@Parent() doc) {
    const { folder } = doc;
    return this.folderService.findOne(folder);
  }
}
