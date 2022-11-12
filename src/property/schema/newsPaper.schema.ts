import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type NewsPaperDocument = HydratedDocument<NewsPaper>

@Schema()
export class NewsPaper {
  @Prop()
  name: string

  @Prop()
  copies: number

  @Prop()
  redactor: string

  @Prop()
  employee: number
}

export const NewsPaperSchema = SchemaFactory.createForClass(NewsPaper)
