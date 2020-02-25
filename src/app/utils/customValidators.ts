import { AbstractControl } from '@angular/forms'
export class CustomValidator {

    static isPriceValid(control: AbstractControl){
        
        const value = control.value;
        if(value > 10000){
            return {
                priceInvalid: true
            }
        }
        return null;

    }

}