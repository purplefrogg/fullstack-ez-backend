import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type PlacementDocument = HydratedDocument<Placement>

@Schema()
export class Placement {
  @Prop()
  name: string

  @Prop()
  phoneNumber: number

  @Prop()
  square: number

  @Prop()
  address: string
}

export const PlacementSchema = SchemaFactory.createForClass(Placement)
