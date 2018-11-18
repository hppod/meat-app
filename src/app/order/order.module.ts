import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DeliveryCostsComponent } from './delivery-costs/delivery-costs.component';
import { OrderItemsComponent } from './order-items/order-items.component';
import { NgModule } from "@angular/core";
import { OrderComponent } from "./order.component";
import { SharedModule } from '../shared/shared.module';
import { LeaveOrderGuard } from './leave-order.guard';

const ROUTES: Routes = [
    { path: '', component: OrderComponent, canDeactivate: [LeaveOrderGuard] }
]

@NgModule({
    declarations: [
        OrderComponent,
        OrderItemsComponent,
        DeliveryCostsComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(ROUTES)
    ]
})
export class OrderModule {

}
