import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsNumber, IsString } from 'class-validator'

export class CreatePropertyDto {
  @ApiProperty()
  @IsString()
  price: string
}
