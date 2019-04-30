import { Component, Prop, Listen, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'jam-option',
})
export class Option {
  @Prop() value: string;
  @Prop({ mutable: true, reflectToAttr: true }) selected: boolean = false;


  @Event() jamOptionSelect: EventEmitter<string>;

  /**
   * @internal
   */
  @Event() jamOptionDidLoad!: EventEmitter<void>;

  /**
   * @internal
   */
  @Event() jamOptionDidUnload!: EventEmitter<void>;

  @Listen('click')
  selectItem() {
    this.jamOptionSelect.emit(this.value);
  }

  componentDidLoad() {
    this.jamOptionDidLoad.emit();
  }

  componentDidUnload() {
    this.jamOptionDidUnload.emit();
  }

  render() {
    return <slot/>;
  }
}
