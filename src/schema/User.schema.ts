import { MongooseModule, Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";


@Schema()
export class  User extends Document {
    @Prop({ required: true })
    fullName: string
    @Prop({ required: true })
    email: string
    @Prop({ required: true })
    username: string
    @Prop({ required: true })
    password: string
}

export const userSchema = SchemaFactory.createForClass(User)