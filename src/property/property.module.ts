import { Module } from '@nestjs/common'
import { PropertyService } from './property.service'
import { PropertyController } from './property.controller'
import { Property, PropertySchema } from './property.schema'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [MongooseModule.forFeature([{ name: Property.name, schema: PropertySchema }])],
  providers: [PropertyService],
  controllers: [PropertyController],
})
export class PropertyModule {}
