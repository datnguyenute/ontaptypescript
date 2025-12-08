# ReactJS
- Là thư viện JS được sử dụng để xây dựng giao diện người dùng
- Tại sao học ReactJS
  - Có độ hot
  - Cộng đồng lớn
  - Được đánh giá thân thiện với SEO trong những Lib/FW về JS (SEO - Search Engine Optimiztion)
  - Khả năng mở rộng và tái sử dụng cao.
    - Facebook
  - Hiệu suất cao
    - Khi ứng dụng lớn thì vẫn mượt mà
    - Có thuật toán, mẹo
  - Phát triển nhanh
    - Có sẵn rồi
  - Khả năng tương thích ngược
    - Các bản cũ có thể upgrade lên version cao hơn mà gặp ít lỗi
  - Tương lai sáng
    - Con của ông lớn


## React element type
- Ngoài string, còn có function/class. Ckass là cú pháp javascript ES6+

? Tại sao React Element phải hỗ trợ function / class
> Tư tưởng chia component của React, nhờ việc bóc tách nhỏ như vậy thì code của chúng ta clean hơn, ngắn gọn hơn, các logic nghiệp vụ được chia rõ ràng hơn.
> Và một ưu điểm lớn nữa là: Tái sử dụng được code.
> Và có thể chia được component như vậy thì nhờ function/class

? Khi nào dùng function, khi nào dùng class
> Lúc trước khi mà chưa có reactHook, thì chỉ có class mới có component với đầy đủ tính năng.
Function thì chỉ chứa code UI thôi
> Từ ngày hook ra đời thì function ok hơn, làm đầy đủ mọi thứ, ngắn gọn hơn, triển khai nhanh hơn và clean hơn.


- Function component
  + Ngắn gọn, triển khai nhanh
- Class component
  + Có cấu trúc, có extends, cần es6 class thì mới sài

### Wrapper
  - Header -> Header component
  - Content -> Content component
  - Footer -> Footer component
```
 class Content extends React.Component {
      render() {
        return <div>New Content</div>
      }
    }

    const Footer = () => {
        return <div>Footer</div>
    }

    const body = (
      <>
        <Header />
        <Content />
        <Footer />
      </>
    );
```

### Props trong React
- React elements
  - Sử dụng `props` giống với như attribute của thẻ HTML
  - 2 props class, for => className, htmlFor
  - Phải tuân theo quy ước có sẵn.
- React components
  - Sử dụng props giống như đối số cho Component
    - Tất cả những gì truyền vào attribute của component thì component nhận như là một đối số
  - Tự do đặt tên props
    - Đặt theo camelCase
    - *Có thể bao gồm dấu gạch ngang (ít sài)
- Chú ý:
  - Prop "key" là một prop đặc biệt 
  - Prop cơ bản là một đối số của component
    => Props có thể là bất cứ dữ liệu gì
  - Sử dụng descrtructuring