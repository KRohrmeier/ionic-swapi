import { Component, OnInit } from "@angular/core";
import { SharedDataService } from "../shared-data.service";
import { SwapiService } from "../swapi.service";

@Component({
    selector: "app-list",
    templateUrl: "list.page.html",
    styleUrls: ["list.page.scss"]
})
export class ListPage implements OnInit {
    public items: string[] = [];
    constructor(
        private sharedDataSvc: SharedDataService,
        private swapiSvc: SwapiService
    ) {}

    ngOnInit() {
        // this is inert until we do a .subscribe
        this.swapiSvc.getPlanets().subscribe(
            (data) => {
                console.log(data);

                this.items = [
                    ...this.items,
                    ...(<any>data).results.map(
                        (x) =>
                            `${x.name};  climate: ${x.climate};  terrain: ${
                                x.terrain
                            }`
                    )
                ].sort();
            },
            (error) => console.log(error)
        );
    }
}
