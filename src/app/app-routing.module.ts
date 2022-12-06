import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddExpenseComponent } from './admin/add-expense/add-expense.component';
import { AddUserComponent } from './admin/add-user/add-user.component';
import { AdminLayoutComponent } from './admin/admin-layout/admin-layout.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { EditUserComponent } from './admin/edit-user/edit-user.component';
import { ListExpenseComponent } from './admin/list-expense/list-expense.component';
import { ListusersComponent } from './admin/listusers/listusers.component';
import { HomeComponent } from './customer/home/home.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  { path: "logout", component: LogoutComponent },
  { path: "forgetpassword", component: ForgetpasswordComponent },
  { path: "resetpassword", component: ResetPasswordComponent },
  { path: "", component: LoginComponent },
  { path: "customer/home", component: HomeComponent },


  {
    path: "admin", component: AdminLayoutComponent, children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "listusers", component: ListusersComponent },
      { path:"adduser",component:AddUserComponent},
      {path:"edituser/:userId",component:EditUserComponent},
      {path:"listexpenses",component:ListExpenseComponent},
      {path:"addexpense",component:AddExpenseComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
