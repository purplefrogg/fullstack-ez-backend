import { ApiProperty } from '@nestjs/swagger'
import { Type } from 'class-transformer'
import { IsDate, IsEnum, IsNumber, IsString, ValidateNested } from 'class-validator'
import { CreateNewsPaperDto } from './create-newsPaper.dto.'
import { CreatePlacementDto } from './create-placement.dto'

export enum typeEnum {
  newspaper,
  placement,
}
class checkType {
  @ApiProperty()
  @IsEnum(typeEnum)
  __type: 'newspaper' | 'placement'
}

export class CreatePropertyDto {
  @ApiProperty()
  @IsNumber()
  price: number
  @ApiProperty({ enum: ['newspaper', 'placement'] })
  @ValidateNested({ each: true })
  @Type(() => checkType, {
    discriminator: {
      property: '__type',
      subTypes: [
        { value: CreateNewsPaperDto, name: 'newspaper' },
        { value: CreatePlacementDto, name: 'placement' },
      ],
    },
  })
  type: CreateNewsPaperDto | CreatePlacementDto

  typeModel: 'NewsPaper' | 'Placement'
}
