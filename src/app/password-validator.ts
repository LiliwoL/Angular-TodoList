import { FormControl, ValidationErrors, Validators } from "@angular/forms";


export class PasswordValidator {

	static containsKeyword ( control: FormControl ) : any
	{
		console.log("Valeur du controle " + control.value );

		console.log("Valide ? " +control.value.indexOf('angular') );

		// Test de la valeur du control
		if (control.value.indexOf('angular') != -1 ){
			return { containsKeyword:
				{
					valid: true
				}
			};
		}

		return { containsKeyword:
			{
				valid: false
			}
		};;
	}
}
