import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IList } from '../../interfaces/IList.interface';
import { ListService } from '../../services/list.service';

@Component({
  selector: 'app-all-list',
  templateUrl: './all-list.component.html',
  styleUrls: ['./all-list.component.scss']
})
export class AllListComponent implements OnInit {

  currentDate:Date = new Date()
  list:any =[];
  filteredList:any = []
  constructor(
    private listServices: ListService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllList()
  }
  getAllList() {
    this.listServices.getAllList().subscribe((res:IList) => {
      this.list= res;
      this.filteredList  = this.list
    })
  }
  getListById(id:string) {
    this.listServices.getListById(id).subscribe()
  }

  checkedList(item:IList) {
    let payload = {
      name: item.name,
      checked: true
    }
    this.listServices.editList(item.id, payload).subscribe((res:IList) => {
      if (res) this.getAllList()
    })
  }

  addEditList(id?: string) {
    if (id) this.router.navigate(['/add-edit', id]);
    else this.router.navigate(['/add-edit', '']);
  }

  searchInListByName(name: string = '') {
      this.filteredList = this.list.filter((res:IList) => 
         res.name.toLowerCase().match(name.toLowerCase())
      )
  }
}
