import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, isNumber, IsNumber, IsString } from 'class-validator'
import { Model } from 'mongoose'
import { Member, MemberDocument } from 'src/member/member.schema'

export class CreateDonateDto {
  @ApiProperty()
  // @Type(() => Model<MemberDocument>)
  @IsString()
  member: MemberDocument

  @ApiProperty()
  @IsNumber()
  amount: number

  @ApiProperty()
  @IsDate()
  @Type(() => Date)
  date: Date
}
