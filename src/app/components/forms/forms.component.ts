import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  angularForm: FormGroup = new FormGroup({
    nom: new FormControl('')
  });

  constructor(private formBuilder: FormBuilder) {
   this.creerFormulaire();
  }

  ngOnInit(): void {
  }

  private creerFormulaire() {
    this.angularForm = this.formBuilder.group({
      nom: ['', Validators.required]
    });
  }

  public nomInvalide(): boolean {
    return this.angularForm.controls['nom'].invalid &&
     ( this.angularForm.controls['nom'].dirty || this.angularForm.controls['nom'].touched);
  }

  public problemeValidation(): boolean {
  return this.angularForm.pristine || this.angularForm.invalid; }


}
