import { FormControl, Validators } from "@angular/forms";

interface ValidationResult {
	[ key: string ] : boolean
}

export class PasswordValidator {

	static containsKeyword ( control: FormControl ) : ValidationResult
	{
		// Test de la valeur du control
		if (control.value.indexOf('angular') != -1 ){
			return { "ContainsKeyword" : true };
		}

		return { "ContainsKeyword" : false };
	}
}
