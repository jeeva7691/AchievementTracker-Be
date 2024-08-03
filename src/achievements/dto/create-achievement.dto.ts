import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateAchievementDto {
    @ApiProperty()
    @IsString()
    achievement : string
}
