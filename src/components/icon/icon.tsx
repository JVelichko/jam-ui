import { Component, Prop } from '@stencil/core';
import style from './icon.css.json';

@Component({
  tag: 'jam-icon',
  styleUrl: 'icon.scss',
})
export class Icon {
  @Prop() name: string;

  render() {
    return (
      <i class={ `${style.icon} ${style[`icon-${this.name}`]}` }></i>
    );
  }
}
