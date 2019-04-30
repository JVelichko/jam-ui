# vui-select

`<vui-select>` представляет собой элемент управления, который содержит меню опций `<vui-option>`. Опции должны быть помещены в контейнер с атрибутом `[slot="options"]`.

Внутри `<vui-option>` может быть textNode или разметка. Если `multiple = true`, то внутри `<vui-option>` может быть ТОЛЬКО textNode. НЕ ИСПОЛЬЗУЙТЕ компоненты стенсила внутри `<vui-option>`, их отображение работает некорректно при копировании выбранной опции в `<vui-select>`. Если внутри `<vui-option>` textNode, то в при выборе этой опции, она отображается вместе с placeholder-ом. Если разметка, то placeholder скрывается и `<vui-option>` занимает весь `<vui-select>`.

Если значение `value` установлено в `<vui-select>`, выбранная опция будет выбрана на основе этого значения. Если значение `value` отстуствует среди значений `<vui-option>` в меню опций, то при наличии атрибута `default-first="true"`, будет установлено значение первого `<vui-option>`  из меню опций. Если `default-first="false"`, будет отображаться только placeholder.


<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                                                                                                                             | Type                                      | Default     |
| -------------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------- | ----------- |
| `defaultFirst` | `default-first` | Если `true`, устанавливает первый `vui-option` в списке, как значение `vui-select`, если `selected` был не задан или задан некорректно. | `boolean`                                 | `false`     |
| `message`      | `message`       | Устанавливает текст сообщения валидации                                                                                                 | `string`                                  | `undefined` |
| `multiple`     | `multiple`      | Если `true`, доступен выбор нескольких значений `vui-select`. В режиме мультивыбора внутри `vui-option` может быть только textNode      | `boolean`                                 | `false`     |
| `placeholder`  | `placeholder`   | Устанавливает placeholder `vui-select`                                                                                                  | `string`                                  | `undefined` |
| `selected`     | `selected`      | Устанавливает значение `vui-select` Если `selected = ''` и `default-first = false` => отображается только `placeholder`.                | `string \| string[]`                      | `''`        |
| `status`       | `status`        | Устанавливает текущий статус валидации `vui-select`                                                                                     | `"" \| "invalid" \| "valid" \| "warning"` | `undefined` |


## Events

| Event       | Description                                      | Type                |
| ----------- | ------------------------------------------------ | ------------------- |
| `vuiInit`   | Эмитит событие инициализации                     | `CustomEvent<void>` |
| `vuiSelect` | Эмитит событие при изменении свойства `selected` | `CustomEvent<void>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
