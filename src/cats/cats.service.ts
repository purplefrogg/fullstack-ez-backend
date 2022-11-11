import { BadRequestException, HttpException, Injectable } from '@nestjs/common'
import { CreateCatDto } from './dto/create.dto'

export interface ICat {
  id: number
  name: string
}

@Injectable()
export class CatsService {
  private cats: ICat[] = [
    { id: 1, name: 'kityyy' },
    { id: 2, name: 'asdasd' },
    { id: 3, name: 'asdasd' },
    { id: 4, name: 'asdasd' },
  ]
  getAll() {
    return this.cats
  }
  getOne(id: number) {
    const currentCat = this.cats.find(cat => cat.id === id)
    if (currentCat === undefined) {
      throw new BadRequestException('Cat Not Found')
    }
    return currentCat
  }

  create(cat: CreateCatDto) {
    cat.id = this.cats[this.cats.length - 1].id + 1
    return this.cats.push(cat)
  }

  update(id: number, createCatDto: CreateCatDto) {
    this.cats = this.cats.map(cat => (cat.id === id ? { ...cat, name: createCatDto.name } : cat))
    return this.cats
  }

  delete(id: number) {
    const currentCat = this.cats.find(cat => cat.id === id)
    if (currentCat === undefined) {
      throw new BadRequestException('Cat Not Found')
    }
    this.cats = this.cats.filter(cat => cat !== currentCat)
    return true
  }
}
