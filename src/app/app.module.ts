import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";


import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserInputModule } from "./user-input/user-input.module";
import { InvestmentResultsComponent } from "./investment-results/investment-results.component";


@NgModule({
    declarations: [AppComponent, HeaderComponent, InvestmentResultsComponent],
    imports: [BrowserModule, UserInputModule],
    bootstrap: [AppComponent]
})
export class AppModule {

}