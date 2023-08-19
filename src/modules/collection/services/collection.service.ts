// collection.service.ts

import { Injectable } from '@nestjs/common';
import { CreateCollectionDto, CreateAttributeDto } from '../dto/collection.dto';
import { PrismaService } from '@prisma/prisma.service';

@Injectable()
export class CollectionService {
  constructor(private readonly prisma: PrismaService) {}

  async createCollection(createCollectionDto: CreateCollectionDto) {
    // Logic to create a new collection
  }

  async createAttribute(collectionId: string, createAttributeDto: CreateAttributeDto) {
    // Logic to create an attribute for a collection
  }
}