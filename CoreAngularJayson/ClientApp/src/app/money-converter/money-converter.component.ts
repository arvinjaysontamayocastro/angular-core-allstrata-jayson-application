import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-money-converter',
  templateUrl: './money-converter.component.html',
  styleUrls: ['./money-converter.component.css']
})
export class MoneyConverterComponent implements OnInit {
  public amount: string | null = "";
  public moneyText: string = "";

  constructor(private route: ActivatedRoute, http: HttpClient, @Inject('API_BASE_URL') baseUrl: string) {
    this.amount = this.route.snapshot.queryParams.amount;
    http.get<any>(baseUrl + '/api/moneyconverter?amount=' + this.amount).subscribe(result => {
      this.moneyText = result;
      console.log("test");
    }, error => {
      console.log("error");
      console.log(error);
    })   ;   
  }

  ngOnInit(): void {

    console.log(this.moneyText);
  }
}
