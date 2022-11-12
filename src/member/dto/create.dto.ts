import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsNumber, IsString } from 'class-validator'

export class CreateMemberDto {
  @ApiProperty()
  @IsString()
  consignment: string

  @ApiProperty()
  @IsString()
  fullName: string

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  birthday: Date

  @ApiProperty()
  @IsString()
  address: string

  @ApiProperty()
  @IsString()
  job: string

  @ApiProperty()
  @IsString()
  profession: string
}
