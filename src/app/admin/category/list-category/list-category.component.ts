import { Component } from '@angular/core';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent {
  categories: Array<any> = []
  constructor(private categoryService: CategoryService) {
    this.categoryService.getAllCategories().subscribe(resp => {
      this.categories = resp.data;
    })
  }

  deleteCategory(cid:any){
    
  }
}
