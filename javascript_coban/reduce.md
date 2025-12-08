# Reduce
Trường hợp cần nhận về một giá trị duy nhất sau khi tính toán và xử lý trên các phần tử trong Array
Tham số thứ 2 (initialValue) không bắt buộc

## So sánh for và reduce
- For:
  - Dễ hiểu
  - Dài dòng, thừa biến gán đi gán lại
  - Hiệu năng hơn do chỉ sử dụng
- Reduce:
  - Khó hiểu hơn
  - Ngắn gọn
  - Hiệu năng kém hơn do phải sử dụng function (nhưng cũng không đáng kể)

## Tại sao sử dụng
- Vì nó cung cấp cách viết ngắn gọn hơn.
- Cần nhận về một giá trị duy nhất sau khi tính toán và xử lý trên các phần tử trong Array

## Example
```
function coinHandler(accumulator, currentValue, currentIndex, originArray) {
  return accumulator + currentValue.coin;
}
var totalCoin = courses.reduce(coinHandler, 0);
// One line: var totalCoin = courses.reduce((acc, curr) => acc + curr.coin, 0);

// let total = 0;
// for (let course of courses) {
//   total += course.coin
// }
```

## Lưu ý
- Nếu không truyền initialValue thì lần chạy đầu tiên,  tham số `accumulator` chính là phần tử đầu tiên.
- Khi mong muốn nhận giá trị trả về là gì thì initial value phải là giá trị đó.
- Trong trường hợp array là object thì cần phải truyền initial value.


# Reduce khi làm việc với Array
## Example 1:
Trong trường hợp item trong mảng cùng type với initial value.
```
var numbers = [100, 200, 300, 400];
var total = numbers.reduce(function(acc, cur){ return  acc + cur});
```

## Example 2: Làm phẳng
```
var depthArray = [1,2,[3,4], 5, 6, [7,8,9]];
var flatArrat = depthArray.reduce((acc, curr) => {
  return acc.concat(curr);
}, []);
```

## Example 3: Lấy output ra mảng mới
```
const topicCourseNames = topics.reduce((acc, curr) => {
  return acc.concat(curr.courses);
}, []);
```