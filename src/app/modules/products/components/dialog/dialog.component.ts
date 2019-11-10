import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  constructor(private router: Router, public dialogRef: MatDialogRef<DialogComponent>) { }

  ngOnInit() {
  }

  onNoClick() {
    this.dialogRef.close();
    this.router.navigate(['products']);
  }

}


