# LaBase

The Tailwind framework for monochrome apps

```bash
npm i @hazae41/labase
```

[**Node Package 📦**](https://www.npmjs.com/package/@hazae41/labase)

## Features
- 100% CSS
- Made for Tailwind 4.0
- Easy setup

## Setup

```css
@import "../node_modules/@hazae41/labase/src/index.css";
```

## Usage

### Text

You can use `text-default` for a black text in light mode and a white text in dark mode

```tsx
function Example() {
  return <div className="text-default">
    This text will be black in light mode and white in dark mode
  </div>
}
```

And you can use `text-opposite` for a white text in light mode and a black text in dark mode

```tsx
function Example() {
  return <div className="text-opposite">
    This text will be white in light mode and black in dark mode
  </div>
}
```

You also have `text-default-contrast` and `text-opposite-contrast` for the same color but with less opacity (e.g. secondary text)

### Background

You can use `bg-default` for a white background in light mode and a black background in dark mode

```tsx
function Example() {
  return <div className="bg-default">
    This div will be white in light mode and black in dark mode
  </div>
}
```

And you can use `bg-opposite` for a black background in light mode and a white background in dark mode

```tsx
function Example() {
  return <div className="bg-opposite">
    This div will be black in light mode and white in dark mode
  </div>
}
```

You have `bg-default-contrast` and `bg-opposite-contrast` for low opacity (e.g. div inside div)

```tsx
function Example() {
  return <div className="bg-default-contrast">
    This div will contrast with its parent
  </div>
}
```

And you have `bg-default-double-contrast` and `bg-opposite-double-contrast` for high opacity (e.g. effect on already contrasted background)

```tsx
function Example() {
  return <div className="bg-default-contrast hover:bg-default-double-contrast">
    This div will contrast with its parent and contrast again on hover
  </div>
}
```

### Border

You can use `border-default` and `border-opposite`

```tsx
function Example() {
  return <div className="border-default">
    This div will have a black border in light mode and a white border in dark mode
  </div>
}
```

Along with `border-default-contrast` and `border-opposite-contrast`

```tsx
function Example() {
  return <div className="border-default-contrast">
    This div will contrast with its parent 
  </div>
}
```

On every side

```tsx
function Example() {
  return <div className="border-x-contrast">
    This div will only have a border on the left and on the right
  </div>
}
```

### Divide and outline

They both have the same classes as `border-*` without the side-specific ones

### Safe padding and margin

You can use `p-safe` and `m-safe` and their side-specific variants

```tsx
function Example() {
  return <main className="p-safe">
    This will avoid browser interface
  </div>
}
```

This will use the `safe-area-inset-*` value

### Oblong padding and margin

You can use oblong padding or margin to have more padding or margin on the x-axis than on the y-axis

```tsx
function Example() {
  return <main className="po-4">
    This will have px-8 and py-4
  </div>
}
```

### Scrollbars

You can use `scrollbar-default` and `scrollbar-opposite` to style scrollbars

```tsx
function Example() {
  return <main className="bg-opposite text-opposite scrollbar-opposite h-[200px] overflow-auto">
    This div will have everything opposite-colored
  </div>
}
```

### Animations

You can use animations such as

- `animate-opacity-in` and `animate-opacity-out`

- `animate-scale-in` and `animate-scale-out`

- `animate-flip-in` and `animate-flip-out`

- `animate-opacity-scale-in` and `animate-opacity-scale-in`

- `animate-scale-xy-in` and `animate-scale-xy-out`

- `animate-scale-xywh-in` and `animate-scale-xywh-out`

- `animate-vibrate-loop`