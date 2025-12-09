# DOM Event

```
3={() => {
  console.log(Math.random())
}}
```

- Nó hoạt động như javascript thuần (có các event onClick, onDoubleClick)
- Có event bình thường, lấy target bình thường

## Phần I
- Xử lý DOM event
- Component do chúng ta định nghĩa phải viết <strong>in hoa</strong> ký tự đầu
  - Chọn component trong 1 object
  ```
    const Form = {
      Input() {
        return <input />
      },
      Checkbox() {
        return <input type="checkbox" />
      }
    }
    const type = 'Input';
    const Component = Form[type];
    return (
      <div className="wrapper">
        <Component />
        <Form.Input />
      </div>
    )
  ```
  - Tạo component đa năng
  ```
      const App = () => {
      const Button = ({title, href, onClick}) => {
        let Component = 'button';
        const props = {}

        if (href) {
          Component = 'a';
          props.href = href;
        }
        if (onClick) {
          props.onClick = onClick;
        }
        return (
          <Component {...props}>{title}</Component>
        )
      }
      return (
        <div className="wrapper">
          <Button 
            title="Click me" 
            href="https://google.com" 
            onClick={() => { console.log(Math.random())}}
            />
        </div>
      )
    }
  ```

- Booleans, Null & Undefined không được render (Không render gì cả)
- Kết hợp toán tử logic để render theo điều kiện.

## Phần II.
- Props trong JSX.
  ```
  <YourComponent
    propName1="String literals"
    propName2={expression}
  />
  ```
    - expression (biểu thức), không
- Props default to "true"
- Spread/Rest trong props.
- Children props
```
  <YourComponent>String literals</YourComponent>
  <YourComponent>{expression}</YourComponent>
```

- Render props
  - Ví dụ:  các sử dụng children expression
```
    const List = ({data, children}) => {
      return (
        <ul>
        {
          data.map((...props) => children(...props))
        }
        </ul>
      )
    }
    // Container
    const App = () => {
      const cars = ['BMW', 'Honda', 'Mazda'];
      return (
        <div className="wrapper">
          <List data={cars}>
            {(item, key) => <li key={key}>{item}</li>}
          </List>
        </div>
      )
    }
```