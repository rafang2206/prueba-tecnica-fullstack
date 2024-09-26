import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

enum StatusBuy {
  PENDING = 'pending',
  COMPLETED = 'completed',
  REJECTED = 'rejected',
}

export type BuyDocument = HydratedDocument<Buy>;

@Schema()
export class Buy {
  @Prop()
  amount: number;

  @Prop({ unique: true })
  sessionId: string;

  @Prop()
  code: number;

  @Prop()
  createdAt: Date;

  @Prop()
  updateAt: Date;

  @Prop({ enum: StatusBuy })
  status: StatusBuy;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  user: User;
}

export const BuySchema = SchemaFactory.createForClass(Buy);
