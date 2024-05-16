export class mycart{
 public Pid:string="" ;
 public ApplicationId: number=0;
 public UserName: string="";
//  public Date: string="";
 public OrderDetailsItem: any[]=[];
}
export class OrderDetailsItem{
    PID:number=0
    Quantity:number=0
}