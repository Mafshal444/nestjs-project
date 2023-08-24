import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
@Controller('cats')
export class CatsController {
    constructor(private catService: CatsService){}
    @Get()
    async findAll() {
        let findall = await this.catService.findAll()
        console.log(findall)
        return 'This action returns all cats';
    }
}