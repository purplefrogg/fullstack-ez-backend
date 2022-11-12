import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsNumber, IsString } from 'class-validator'

export class CreateConsignmentDto {
  @ApiProperty()
  @IsString()
  name: string

  @ApiProperty()
  @IsString()
  shortName: string

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  registrationDate: Date

  @ApiProperty()
  @IsString()
  leader: string
}
