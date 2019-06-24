import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'pio-project-editor',
  templateUrl: './project-editor.component.html',
  styleUrls: ['./project-editor.component.scss']
})
export class ProjectEditorComponent implements OnInit {

  quill: Quill;

  constructor() { }

  ngOnInit() {
    // this.quill = new Quill('#editor-container', {
    //   modules: {
    //     toolbar: [
    //       [{ header: [1, 2, false] }],
    //       ['bold', 'italic', 'underline'],
    //       ['image', 'code-block']
    //     ]
    //   },
    //   placeholder: 'Compose an epic...',
    //   theme: 'snow'  // or 'bubble'
    // });
  }

}
