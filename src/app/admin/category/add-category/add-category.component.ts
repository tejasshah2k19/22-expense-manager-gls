import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from '../../service/category.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent {
  categoryName:string = ""
  constructor(private categoryService:CategoryService,private router:Router){

  }
  saveCategory(){
    let category = {"categoryName":this.categoryName}
    this.categoryService.addCategoryApi(category).subscribe(resp=>{
      this.router.navigateByUrl("/admin/categories")
    })
  }
}
