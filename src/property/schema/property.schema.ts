import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import mongoose, { HydratedDocument } from 'mongoose'
import { NewsPaper, NewsPaperSchema } from './newsPaper.schema'
import { Placement } from './placement.schema'

export type PropertyDocument = HydratedDocument<Property>

@Schema()
export class Property {
  @Prop()
  price: number

  @Prop({ type: mongoose.Schema.Types.ObjectId, refPath: 'typeModel', required: true })
  type: NewsPaper | Placement

  @Prop({ type: String, required: true, enum: ['NewsPaper', 'Placement'] })
  typeModel: string
}

export const PropertySchema = SchemaFactory.createForClass(Property)
