import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Document } from "./dto/document.model";

@Injectable()
export class DocumentService {

  constructor(@InjectRepository(Document) private readonly   _repo: Repository<Document>) {
  }


  async findAll(): Promise<Document[]> {
    return await this._repo.find();
  }

  async findByFolderId(id: string) {
    return this._repo.createQueryBuilder("documents")
      .where("documents.folder = :id", { id })
      .getMany();
  }
}
