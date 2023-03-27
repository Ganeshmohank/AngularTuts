import { Oldcars } from "./oldcars";

export interface Cars extends Oldcars{
    modelNumber:string,
    version:string,
    releaseDate:string,
    fuelType:string
}
