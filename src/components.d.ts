/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';


import {
  EventEmitter,
} from '@stencil/core';
import {
  CheckboxChangeEvent,
} from './components/checkbox/checkbox.model';


export namespace Components {

  interface JamCheckbox {
    'checked': boolean;
    'disabled': boolean;
    'label': string;
    'name': string;
    'value': string;
  }
  interface JamCheckboxAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'disabled'?: boolean;
    'label'?: string;
    'name'?: string;
    'onJamBlur'?: (event: CustomEvent) => void;
    'onJamChange'?: (event: CustomEvent<CheckboxChangeEvent>) => void;
    'onJamFocus'?: (event: CustomEvent) => void;
    'value'?: string;
  }

  interface JamIcon {
    'name': string;
  }
  interface JamIconAttributes extends StencilHTMLAttributes {
    'name'?: string;
  }

  interface JamOption {
    'selected': boolean;
    'value': string;
  }
  interface JamOptionAttributes extends StencilHTMLAttributes {
    'onJamOptionSelect'?: (event: CustomEvent<string>) => void;
    'selected'?: boolean;
    'value'?: string;
  }

  interface JamSelect {
    'defaultFirst': boolean;
    'multiple': boolean;
    'placeholder': string;
    'selected': string[] | string;
  }
  interface JamSelectAttributes extends StencilHTMLAttributes {
    'defaultFirst'?: boolean;
    'multiple'?: boolean;
    'onJamInit'?: (event: CustomEvent) => void;
    'onJamSelect'?: (event: CustomEvent) => void;
    'placeholder'?: string;
    'selected'?: string[] | string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'JamCheckbox': Components.JamCheckbox;
    'JamIcon': Components.JamIcon;
    'JamOption': Components.JamOption;
    'JamSelect': Components.JamSelect;
  }

  interface StencilIntrinsicElements {
    'jam-checkbox': Components.JamCheckboxAttributes;
    'jam-icon': Components.JamIconAttributes;
    'jam-option': Components.JamOptionAttributes;
    'jam-select': Components.JamSelectAttributes;
  }


  interface HTMLJamCheckboxElement extends Components.JamCheckbox, HTMLStencilElement {}
  var HTMLJamCheckboxElement: {
    prototype: HTMLJamCheckboxElement;
    new (): HTMLJamCheckboxElement;
  };

  interface HTMLJamIconElement extends Components.JamIcon, HTMLStencilElement {}
  var HTMLJamIconElement: {
    prototype: HTMLJamIconElement;
    new (): HTMLJamIconElement;
  };

  interface HTMLJamOptionElement extends Components.JamOption, HTMLStencilElement {}
  var HTMLJamOptionElement: {
    prototype: HTMLJamOptionElement;
    new (): HTMLJamOptionElement;
  };

  interface HTMLJamSelectElement extends Components.JamSelect, HTMLStencilElement {}
  var HTMLJamSelectElement: {
    prototype: HTMLJamSelectElement;
    new (): HTMLJamSelectElement;
  };

  interface HTMLElementTagNameMap {
    'jam-checkbox': HTMLJamCheckboxElement
    'jam-icon': HTMLJamIconElement
    'jam-option': HTMLJamOptionElement
    'jam-select': HTMLJamSelectElement
  }

  interface ElementTagNameMap {
    'jam-checkbox': HTMLJamCheckboxElement;
    'jam-icon': HTMLJamIconElement;
    'jam-option': HTMLJamOptionElement;
    'jam-select': HTMLJamSelectElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}