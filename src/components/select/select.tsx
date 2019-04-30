import { Component, Prop, State, Listen, Watch, Element, Event, EventEmitter } from '@stencil/core';

import style from './select.css.json';

@Component({
  tag: 'jam-select',
  styleUrl: 'select.scss',
})
export class Select {
  options: HTMLJamOptionElement[] = [];

  @Element() el: HTMLJamSelectElement;

  @Prop() placeholder: string;
  @Prop({ mutable: true }) selected: string[] | string = '';
  @Prop({ mutable: true, reflectToAttr: true }) defaultFirst: boolean = false;
  @Prop() multiple = false;

  @State() content: string = '';
  @State() index: number;
  @State() hasFocus: boolean = false;
  @State() isOpen: boolean = false;
  @State() selectedOptions: { selected: string, content: string }[] = [];

  @Event() jamInit: EventEmitter;
  @Event() jamSelect: EventEmitter;

  @Watch('selected')
  valueChanged() {
    this.updateOptions();
  }

  @Listen('jamOptionDidLoad')
  @Listen('jamOptionDidUnload')
  selectOptionChanged() {
    this.loadOptions();
    this.updateOptions();
  }

  @Listen('document:click')
  clickOutsideOptionsList(e: Event) {
    if (!this.el.contains(e.target as Node)) {
      this.hasFocus = false;
    }
  }

  @Listen('jamOptionSelect')
  selectItem(e: CustomEvent) {
    if (!this.multiple) {
      if (this.selected !== e.detail) {
        this.selected = e.detail;
        this.jamSelect.emit(this.selected);
      }
      this.hasFocus = false;
    } else {
      if (!this.selected.includes(e.detail)) {
        this.selected = [...this.selected, e.detail];
        this.jamSelect.emit(this.selected);
      } else this.removeTag(e.detail, e);
    }
  }

  loadOptions() {
    this.options = Array.from(this.el.querySelectorAll('jam-option'));
  }

  componentWillLoad() {
    this.loadOptions();
  }

  componentDidLoad() {
    this.updateOptions();
    this.el.forceUpdate();
    this.jamInit.emit();
  }

  isOptionSelected(currentValue: string[] | string, optionValue: string): boolean {
    if (currentValue === undefined) return false;

    return Array.isArray(currentValue)
            ? currentValue.includes(optionValue)
            : currentValue === optionValue;
  }

  updateOptions(): void {
    this.selectedOptions = [];

    let canSelect = true;
    this.options.forEach(item => {
      const selected = canSelect && this.isOptionSelected(this.selected, item.value);
      item.selected = selected;

      if (item.selected) {
        if (this.multiple) {
          this.selectedOptions = [...this.selectedOptions, { selected: item.value, content: item.innerHTML }];
        } else this.content = item.innerHTML;
      }

      if (selected && !this.multiple) canSelect = false;
    });

    if (this.options.every(item => item.selected === false)) {
      if (this.defaultFirst) {
        this.options[0].selected = true;
        this.content = this.options[0].innerHTML;
      } else {
        if (this.selected.length !== 0)
          throw new Error('selected value does not match any value from the option list');
        this.content = '';
      }
    }
  }

  openOptions() {
    this.hasFocus = !this.hasFocus;
  }

  hasValue(): boolean {
    return this.multiple ? this.selectedOptions.length > 0 : this.content.length > 0;
  }

  hasPlaceholder(): boolean {
    return (!this.multiple || (this.multiple && !this.hasValue()));
  }

  removeTag(removeItem: string, event: Event): void {
    event.stopPropagation();

    if (Array.isArray(this.selected)) {
      this.selected = this.selected.filter(item => item !== removeItem);
      this.jamSelect.emit(this.selected);
    }
  }

  renderTags() {
    if (this.selectedOptions)
      return (
        <ul>
          {this.selectedOptions.map(item => ([
            <li class={ `${style.item}` }>
              { item.content }
              <span class={ style.close } onClick={ this.removeTag.bind(this, item.selected) } >
                <jam-icon name="cancel"/>
              </span>
            </li>,
          ]),
          )
          }
        </ul>
      );
    }

  renderContent() {
    return this.multiple
      ? <div class={ style.content }> { this.renderTags() } </div>
      : <div class={ style.content } innerHTML={ this.content }></div>;
  }

  hostData() {
    return {
      class: {
        [style.hasFocus]: this.hasFocus,
        [style.hasValue]: this.hasValue(),
        [style.multiple]: this.multiple,
      },
    };
  }

  render() {
    return ([
      <div class={ `${style.selectGroup}` }
        onClick = { this.openOptions.bind(this) }>
        <div class={ style.helper }>
          { this.hasPlaceholder() &&
            <span class={ style.placeholder }>
              <span class={ style.title }>
                <span>{ this.placeholder }</span>
              </span>
            </span>
          }
          { this.renderContent() }
        </div>
        <div class={ style.iconEnd }>
          <jam-icon name="arrow-down"/>
        </div>
      </div>,
      <div class={ `${ style.options } ${this.hasFocus ? style.open : ''}` }>
        <div class={ style.optionsList }>
          <slot name="options"/>
        </div>
      </div>,
    ]);
  }
}
