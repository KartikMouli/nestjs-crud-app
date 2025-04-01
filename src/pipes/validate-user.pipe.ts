import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';
import { User } from 'src/users/users.model';


@Injectable()
export class ValidateUserPipe implements PipeTransform {
    transform(value: User) {
        if (!value.name || !value.email) {
            throw new BadRequestException('Name and Email are required');
        }
        return value;
    }
}
