export class Object {
    constructor(label: string) {
        this.label=label;
    }

    //#region label
    private _label! : string;
    public get label(){
    return this._label;
    }
    public set label(v:string){

     this._label=v;
    }
    //#endregion

    //#region description
    private _description! : string;
    public get description(){
    return this._description;
    }
    public set description(v:string){
    // TODO : Vérifier la valeur de v
    // if(condition){
    // throw new Error('message');
    // }
     this._description=v;
    }
    //#endregion

    //#region estimatedPrice
    private _estimatedPrice! : number;
    public get estimatedPrice(){
    return this._estimatedPrice;
    }
    public set estimatedPrice(v:number){
    // TODO : Vérifier la valeur de v
    // if(condition){
    // throw new Error('message');
    // }
     this._estimatedPrice=v;
    }
    //#endregion
}