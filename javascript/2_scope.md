# 2. Scope - Phạm vi

## Các loại:
  - Global - Toàn cầu
    - Bất cứ ở đâu cũng truy cập được, chỉ cần ngoài block
    - Không nằm trong biến hoặc hàm nào
  - Code block - Khối mã: let, const
    - Là được giới hạn bởi `{}`
    ```
    {
      const age = 18
      console.log(age)
    }
    { <= Block
      { <= Block
        { <= Block

        }
      }
    }
    ```
    - Khi khai báo thì chỉ được sử dụng ở khối mã đó thôi
    - var: lúc xưa có sài, khi khai báo thì nó nhảy ra phạm vi gần nhất bên ngoài
  - Local scope (nội bộ được tạo ra từ phần thân của hàm) - Hàm: var, function
    - Các biến tạo ra trong hàm thì chỉ truy cập được tron hàm
   
## Khi gọi mỗi hàm luôn có 1 phạm vi mới được tạo
Tức là khi gọi làm nhiều lần, mà hàm không thay đổi gì chỉ cần truyền khác tham số là một phạm vi mới được sinh ra
## Các hàm có thể truy cập được các biến được  khai bao trong phạm vi của nó và bên ngoài nó
- Lưu ý: Biến mà được tạo ra ở scope lớn thì ở scope nhỏ hơn truy cập được.
## Cách thức một biến được truy cập
- Trong hộp nhỏ hơn luôn truy cập được, truy cập ở phạm vi gần nhất
- Trường hợp lỗi vì nó xét trong phạm vi nhỏ trước
> script.js:5 Uncaught ReferenceError: Cannot access 'age' before initialization
    at script.js:5:19
```
const age = 18
{
  {
    {
      console.log(age)
      const age = 16
    }
  }
}
```

## Khi nào một biến được xoá ra khỏi bộ nhớ (Life cycle)
- Biến toàn cục? 
  - Xoá khi chương trình thoát, web F5, hoặc close đi
  - Hạn chế sử dụng: Vì chỉ xoá khi phải thoát app, lãng phí bộ nhớ
- Biến trong code block & trong hàm?
  - Khi thực thi thoát khỏi phạm vi code block là đã xoá khỏi bộ nhớ rồi
- Biến trong hàm được tham chiếu bởi 1 hàm?
  - Hàm thực thi xong thì cũng xoá rồi
  - Nếu biến được tạo ra trong hàm và bị tham chiếu bởi 1 hàm khác thì khi thoát ra ngoài hàm thì vẫn chưa được xoá.
  ```
  function makeCounter() {
    let count = 0;

    function counter() {
      return ++count;
    }

    return counter;
  }

  const counter1 = makeCounter();

  console.log(counter1());
  console.log(counter1());
  console.log(counter1());
  ```
- Biến thì khi trả về `null` thì cũng bị xoá khỏi bộ nhớ