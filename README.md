# Scheduler

A lightweight version of igniter to function as a temporary standin.

```js
import scheduler from 'raf-scheduler';

let token = scheduler.schedule('sync|layout|measure|affect', someFn);
```
