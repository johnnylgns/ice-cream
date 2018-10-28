import { NgModule, Optional, SkipSelf } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MainSidenavContentComponent } from './main-sidenav-content/main-sidenav-content.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeaderComponent,
    MainSidenavContentComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    MainSidenavContentComponent
  ],
  providers: [],
  bootstrap: []
})
export class CoreModule { 
    constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
        if(parentModule){
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
