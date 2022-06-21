import { FormControl, ValidationErrors, Validators } from "@angular/forms";

interface ValidationResult {
	[ key: string ] : boolean
}

export class PasswordValidator {

	static containsKeyword ( control: FormControl ) : ValidationErrors
	{
		console.log("Valeur du controle " + control.value );

		console.log("Valide ? " +control.value.indexOf('angular') );

		// Test de la valeur du control
		if (control.value.indexOf('angular') != -1 ){
			return { "containsKeyword": true };
		}

		return { "containsKeyword": false };
	}
}
