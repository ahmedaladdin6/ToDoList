import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss']
})
export class AddListComponent implements OnInit {

  buttonName: string = 'Add'
  listForm = new FormGroup({
    name: new FormControl('', Validators['required']),
    checked: new FormControl(false)
  })

  constructor(
    private listService: ListService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  get getID() {
    return this.route.snapshot.params.id
  }

  ngOnInit(): void {
    if (this.getID != '')
      this.getListById()
  }



  getListById() {
    this.listService.getListById(this.getID).subscribe((res: any) => {
      this.listForm.patchValue({
        "name": res.name,
        "checked": res.checked
      })
      this.buttonName = 'Edit'
    })
  }

  addList(payload) {
    this.listService.addList(payload).subscribe(res => {
      if (res)  this.router.navigateByUrl('/');
    })
  }

  editList(id, payload) {
    this.listService.editList(id, payload).subscribe(res => {
      if (res)  this.router.navigateByUrl('/');
    })
  }

  onSubmit() {
    if (this.getID != '') this.editList(this.getID, this.listForm.value)
     else this.addList(this.listForm.value);
  }

  deleteList() {
    this.listService.deleteListById(this.getID).subscribe(res => {
      if (res) this.router.navigateByUrl('/')
    })
  }

}
