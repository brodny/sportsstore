import { Directive, ViewContainerRef, TemplateRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[counterOf]'
})
export class CounterDirective implements OnChanges {

  constructor(private container: ViewContainerRef,
              private template: TemplateRef<any>) { }

  @Input('counterOf')
  public counter: number;

  ngOnChanges(changes: SimpleChanges): void {
    this.container.clear();
    // tslint:disable-next-line: no-inferrable-types
    for (let i: number = 0; i < this.counter; ++i) {
      this.container.createEmbeddedView(this.template, new CounterDirectiveContext(i + 1));
    }
  }

}

class CounterDirectiveContext {
  constructor(public $implicit: number) { }
}
