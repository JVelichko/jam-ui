import { Component, Prop, Event, EventEmitter } from '@stencil/core';
import { CheckboxChangeEvent } from './checkbox.model';

import style from './checkbox.css.json';

@Component({
  tag: 'jam-checkbox',
  styleUrl: 'checkbox.scss',
})
export class Checkbox {
  @Prop() name: string;
  @Prop() label: string;
  @Prop() disabled: boolean = false;
  @Prop({ mutable: true }) checked: boolean = false;
  @Prop() value = 'on';

  @Event() jamChange!: EventEmitter<CheckboxChangeEvent>;
  @Event() jamBlur!: EventEmitter;
  @Event() jamFocus!: EventEmitter;

  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.jamChange.emit({
      checked: this.checked,
      value: this.value,
    });
  }

  onFocus() {
    this.jamFocus.emit();
  }

  onBlur() {
    this.jamBlur.emit();
  }

  hostData() {
    return {
      class: {
        [style.checked]: this.checked,
      },
    };
  }

  render() {
    const { label, checked, name, value, disabled, onFocus, onBlur, toggle } = this;
    return (
      <label class={ `${style.checkbox} ${this.disabled ? style.disabled : ''}` }>
        { label }
        <input
          type="checkbox"
          checked={ checked }
          name={ name }
          value={ value }
          disabled={ disabled }
          onFocus={ onFocus.bind(this) }
          onBlur={ onBlur.bind(this) }
          onChange={ toggle.bind(this) }
        />
        <span class={ style.checkmark }>
          <jam-icon name="check" class={ style.icon } ></jam-icon>
        </span>
      </label>
    );
  }
}
