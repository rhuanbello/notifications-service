import { IsNotEmpty, IsUUID, Length } from 'class-validator';

export class CreateNotificationBody {
  @IsNotEmpty({
    message: 'ID do Recipiente é obrigatório.',
  })
  @IsUUID()
  recipientId: string;

  @IsNotEmpty({
    message: 'Conteúdo da notificação é obrigatório.',
  })
  @Length(5, 240, {
    message: 'Conteúdo da notificação deve ter entre 5 e 240 caracteres.',
  })
  content: string;

  @IsNotEmpty({
    message: 'Categoria da notificação é obrigatória.',
  })
  category: string;
}
