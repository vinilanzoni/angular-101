import { FormArray, FormControl, FormGroup } from "@angular/forms";


export class FormValidations {

    static requiredMinCheckbox(min = 1) {
        const validator = (formArray: FormArray) => {
            // const values = formArray.controls;
            // let totalChecked = 0;
            // for(let item of values) {
            //   if(item.value) {
            //     totalChecked++;
            //   }
            // }
            const totalChecked = formArray.controls
                .map(v => v.value)
                .reduce((total, current) => current ? total + current : total, 0)
            return totalChecked >= min ? null : { required: '' };
        };
        return validator;
    }

    static cepValidor(control: FormControl) {
        const cep = control.value;
        if(cep && cep !== '') {
            const validacep = /^[0-9]{8}$/;
            return validacep.test(cep) ? null : { cepInvalido: true};
        }
        return null;
    }

    static equalsTo(otherField: string) {
        const validator = (formControl: FormControl) => {
            if(otherField == null) {
                throw new Error('É necessário informar um campo');
            }

            if (!formControl.root || !(<FormGroup>formControl.root).controls) {
                return null;
            }

            const field = (<FormGroup>formControl.root).get(otherField);
            if (field == null) {
                throw new Error('É necessário informar um campo');
            }

            if(field.value !== formControl.value) {
                return { equalsTo: otherField };
            }
            return null;
        }
        return validator;
    }
}