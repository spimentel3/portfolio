import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AccountContainerComponent } from './components/account-container/account-container.component';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
  ],
  declarations: [ProjectsPageComponent, AccountContainerComponent]
})
export class AccountModule { }
