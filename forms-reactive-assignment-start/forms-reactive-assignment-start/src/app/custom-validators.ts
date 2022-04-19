import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators{
    static asyncInvalidProjectName(control: FormControl): Promise<any> | Observable<any>{
        const promise = new Promise((resolve, reject) =>{
            setTimeout(()=>{
                if(control.value === 'Test'){
                    resolve({'invalidProjectName': true})
                }else{
                    resolve(null);
                }
            }, 2000);
        })
        return promise;
    }
}