import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterCompanyDto {
  @ApiProperty({
    example: 'WellPath Technologies',
    description: 'This is the name of your company.',
  })
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'info@vitalcare.com',
    description: 'This is the email of your company, shop and admin employee.',
  })
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'test',
    description: 'This is the password of your admin employee.',
  })
  @IsNotEmpty()
  password: string;
}
