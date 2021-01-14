import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Folder } from "./dto/folder.model";


@Injectable()
export class FolderService {

  constructor(@InjectRepository(Folder) private readonly   _repo: Repository<Folder>) {
  }

  findAll(): Promise<Folder[]> {
    return this._repo.find();
  }


  findOne(id: string): Promise<Folder> {
    return this._repo.findOne(id);
  }
}
