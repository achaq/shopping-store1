import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ShoppingstoreSharedLibsModule, ShoppingstoreSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [ShoppingstoreSharedLibsModule, ShoppingstoreSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [ShoppingstoreSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShoppingstoreSharedModule {
  static forRoot() {
    return {
      ngModule: ShoppingstoreSharedModule
    };
  }
}
