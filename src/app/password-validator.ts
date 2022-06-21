import { FormControl } from "@angular/forms";


export function containsKeyword ( control: FormControl ) : { [key: string]: boolean } | null {
	{
		console.log("Valeur du controle " + control.value );

		console.log("Valide ? " +control.value.indexOf('angular') );

		// Test de la valeur du control
		if (control.value.indexOf('angular') == -1 ){
			return { 'containsKeyword': true };
		}else{
			return null;
		}
	}
}
