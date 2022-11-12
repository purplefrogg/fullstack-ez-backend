import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { CreatePropertyDto } from './dto/create.dto'
import { Property, PropertyDocument } from './property.schema'

@Injectable()
export class PropertyService {
  constructor(@InjectModel(Property.name) private memberModel: Model<PropertyDocument>) {}

  getAll() {
    return this.memberModel.find()
  }

  getOne(id: string) {
    return this.memberModel.findById(id)
  }

  async create(createPropertyDto: CreatePropertyDto) {
    const newCat = new this.memberModel(createPropertyDto)
    return await newCat.save()
  }

  async update(id: string, createPropertyDto: CreatePropertyDto) {
    return await this.memberModel.updateOne({ _id: id }, createPropertyDto)
  }

  async delete(id: string) {
    return await this.memberModel.deleteOne({ _id: id })
  }
}
