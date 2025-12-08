# Callback
- Nó là hàm
- Được truyền qua đối số khi gọi hàm khác
- Được gọi lại (trong hàm nhận đối số)

## Example
```
function myFunction(param) {
  if (typeof param === 'function') {
    param('123');
  }
}

function myCallback(value) {
  console.log('My value: ', value)
}
```