import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsDefined, IsEnum, IsNumber, isObject, IsString, ValidateNested } from 'class-validator'
import { typeEnum } from './create.dto'

export class CreatePlacementDto {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNumber()
  phoneNumber: number

  @ApiProperty()
  @IsNumber()
  square: number

  @ApiProperty()
  @IsString()
  address: string
}
