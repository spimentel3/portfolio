import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountRoutingModule } from './account-routing.module';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { AccountContainerComponent } from './components/account-container/account-container.component';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    NgxMasonryModule
  ],
  declarations: [ProjectsPageComponent, AccountContainerComponent]
})
export class AccountModule { }
