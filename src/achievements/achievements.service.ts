import { Injectable } from '@nestjs/common';
import { CreateAchievementDto } from './dto/create-achievement.dto';
import { UpdateAchievementDto } from './dto/update-achievement.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Achievement } from './entities/achievement.entity';

@Injectable()
export class AchievementsService {
constructor (
  @InjectRepository(Achievement)
  private userRepository: Repository<Achievement>
){}
  
  create(createAchievementDto: CreateAchievementDto) {
    return 'This action adds a new achievement';
  }

  findAll() {
    return `This action returns all achievements`;
  }

  findOne(id: number) {
    return `This action returns a #${id} achievement`;
  }

  update(id: number, updateAchievementDto: UpdateAchievementDto) {
    return `This action updates a #${id} achievement`;
  }

  remove(id: number) {
    return `This action removes a #${id} achievement`;
  }
}
