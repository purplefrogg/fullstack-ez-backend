import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsDefined, IsEnum, IsNumber, isObject, isString, IsString, ValidateNested } from 'class-validator'
import { isDeepStrictEqual } from 'util'
import { NewsPaper } from '../schema/newsPaper.schema'
import { Placement } from '../schema/placement.schema'
import { typeEnum } from './create.dto'

export class CreateNewsPaperDto {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsNumber()
  copies: number

  @ApiProperty()
  @IsString()
  redactor: string

  @ApiProperty()
  @IsNumber()
  employee: number
}
