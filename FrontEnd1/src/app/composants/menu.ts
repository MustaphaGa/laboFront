export interface Menu{
    id?:String;
    titre?:String;
    icon?:String;
    url?:String;
    sousMenu?:Array<Menu>;
}