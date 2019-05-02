import { Component } from "@angular/core";
import { SharedDataService } from "../shared-data.service";

@Component({
    selector: "app-home",
    templateUrl: "home.page.html",
    styleUrls: ["home.page.scss"]
})
export class HomePage {
    constructor(private sharedDataSvc: SharedDataService) {}
}
