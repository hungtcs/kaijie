- XHRHttpRequest
- axios
- fetch

- Promise

```js
get('/id', (id) => {
  get(`${ id }`, () => {
    get(`${ id }`, () => {
      get(`${ id }`, () => {
        get(`${ id }`, () => {
          console.log('abc');
        });
      });
    });
  });
});

get('/id')
  .then(id => get(`${ id }`))
  .then(a => get(a))
  .then(b => get(b))
  .then(c => get(d))
  .then(d => console.log(d));

async function getD() {
  const id = await get('/id');
  const a = await get(a);
  const b = await get(b);
  const c = await get(c);
  const d = await get(d);
  console.log(d);
}
```
