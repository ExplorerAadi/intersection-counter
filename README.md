[](https://user-images.githubusercontent.com/52901335/192902912-63916e32-9c8a-4719-8d4e-1a980ec5f24c.mp4)

# Intersection Counter

A way to track the count of elements yet to enter the viewport.

This is a minimal hook that can be used to implement features such as showing count of unread messages in a messaging web app, 
for user analytics by tracking accurate product views as user scrolls through a product catalog in an ecommerce app, etc.
This package has type support too.


## Installation

```bash
npm install intersection-counter

yarn add intersection-counter

pnpm add intersection-counter
```

## Usage

This is a basic example of how to use `intersection-counter`

Options here is [`IntersectionObserverInit`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver)

```ts
import { useIntersectionCounter } from "intersection-counter";

const options : IntersectionObserverInit = {
  root: null,
  rootMargin: "0px",
  threshold: 1.0,
};

function App() {
  const { parentRef, count } = useIntersectionCounter(options);
  console.log(count);

  return (
    <div
      ref={parentRef}
    >
      {messages.map(message => (
        {/* children */}
      ))}
    </div>
  );
}
```
