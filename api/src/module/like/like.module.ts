import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {Like} from "./entity/like.entity";
import {LikeController} from "./controller/like.controller";
import {LikeService} from "./service/like.service";

@Module({
    imports: [TypeOrmModule.forFeature([Like])],
    controllers: [LikeController],
    providers: [LikeService]
})
export class LikeModule {}