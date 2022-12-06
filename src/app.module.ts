import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestModule } from './rest/rest.module';
import { CartModule } from './cart/cart.module';
import { OrderModule } from './order/order.module';
import { MenuModule } from './menu/menu.module';
@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://cluster0.i0zkwcz.mongodb.net/?retryWrites=true&w=majority', {
    user: 'shaikasmazabi',
    pass: 'Renault@786'
  }),
     RestModule,
     CartModule,
     OrderModule,
     MenuModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
