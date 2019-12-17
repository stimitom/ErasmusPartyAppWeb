export interface User{ 
    
    userid: string;
    username: string;
    nationality: string;
    email: string;
    city: string;

    // listnames: Array<string>; 
    listnames: any; 
    counterpos0: number;
    counterpos1: number;
    counterpos2: number;
    countermapping: Map<string,string>; 

    // constructor(userID:string, userName:string, nationality:string, email:string, city:string) {
    //     this.userid = userID;
    //     this.username = userName;
    //     this.nationality = nationality;
    //     this.email = email;
    //     this.city = city;
    //     this.listnames = new Array<string>();
    //     this.counterpos0 = 0; 
    //     this.counterpos1 = 0; 
    //     this.counterpos2 = 0; 
    //     this.countermapping = new Map<string, string>();
    // }


}