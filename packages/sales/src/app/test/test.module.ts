import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TestRoutingModule } from './test-routing.module';
import { TestComponent } from './test.component';
import { BrowserModule } from '@angular/platform-browser';

// @NgModule({
//   declarations: [TestComponent],
//   imports: [BrowserModule, CommonModule, TestRoutingModule],
//   bootstrap: [TestComponent],
// })
@NgModule({
  declarations: [TestComponent],
  imports: [CommonModule, TestRoutingModule],
})
export class TestModule {}
