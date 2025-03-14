import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'Иван Иванов', description: 'Полное имя' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'user@example.com', description: 'Email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'secret123', description: 'Пароль' })
  @IsNotEmpty()
  password: string;
}

export class UpdateUserDto {
  @ApiProperty({ example: 'Иван Иванов', description: 'Полное имя' })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: 'user@example.com', description: 'Email' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'secret123', description: 'Пароль' })
  @IsNotEmpty()
  password: string;
}
