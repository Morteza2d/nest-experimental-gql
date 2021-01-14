import { FolderService } from "./folder.service";
import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Folder } from "./dto/folder.model";
import { Document } from "../document/dto/document.model";
import { Inject } from "@nestjs/common";
import { DocumentService } from "../document/document.service";


@Resolver(of => Folder)

export class FolderResolver {
  constructor( @Inject(FolderService) private service: FolderService,
               @Inject(DocumentService) private documentService: DocumentService) {
  }

  @Query(() => [Folder])
  async folders(): Promise<Folder[]> {
    return this.service.findAll();
  }

  @ResolveField(returns => [Document])
  async documents(@Parent() folder) {
    const { id } = folder;
    return this.documentService.findByFolderId(id);
  }
}
