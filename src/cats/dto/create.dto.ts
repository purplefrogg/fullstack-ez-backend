import { IsNumber, IsString } from 'class-validator'

export class CreateCatDto {
  @IsString()
  name: string
  id: number
}
