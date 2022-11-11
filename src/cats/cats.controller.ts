import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, ValidationPipe } from '@nestjs/common'
import { CatsService, ICat } from './cats.service'
import { CreateCatDto } from './dto/create.dto'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}
  @Get()
  getAll() {
    return this.catsService.getAll()
  }
  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.getOne(id)
  }

  @Post()
  create(@Body() body: CreateCatDto) {
    return this.catsService.create(body)
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() body: CreateCatDto) {
    return this.catsService.update(id, body)
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.catsService.delete(id)
  }
}
