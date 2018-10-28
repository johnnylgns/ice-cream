import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: any;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers => {
        this.customers = customers;
        console.log(this.customers);
        }
      );

  }

}
