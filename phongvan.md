# Questions

stack chính sẽ là JS
frontend: nextjs (page router)
backend: NestJS
kiến trúc là microservice
cloud là gg cloud
đọc thêm về clean architecture
với DDD
ngoài ra có unit test nữa


## RESTFUL API là cái gì?

## Frontend

## Bài tập

 - Tạo giả lập 1 hàm promise
 function fakePromise(): Promise<string> {
  return new Promise((resolve) => {
    resolve('OK bede');
  })
}

// fakePromise().then(res => {
//   console.log(res);
// })

// await fakePromise();

(
  async () => {
    console.log(await fakePromise());
  }
)();


## Life cycle của ReactJS
### Cũ class component: Component  
### React Hooks
useEffect()
useEffect(() => {

}, [])

useEffect(() => {
  
}, [], () => {

})

useMemmo => Biến
useCallback => Memorize 

----


JS

----
Nó chạy.... node engine v8  nó chạy cơ chế Event Loop
Event Loop ??? 

define function ngay khi mình chạy function nào đó

Callback- Promise - Async waint
=> Để hiểu được Async waint thì phải nói về Callback

=============================
Callback dang
  - Flexible function
  - Đồng bộ API
  - Về lâu dài => Xuất hiện callback hell, lồng nhiều khó maintain
Promise 
  - Giúp synctack dễ maintain
  - Try catch
  - Nhưng lồng nhiều promise hell
Async 
  - Giúp logic từng hàng
  - rõ ràng
  - Về sau đa số sài

==========================
Promise 5 api
.all()
.allseted

=====

SQL noSQL

=====

left-join 
right-join

=====

Giờ trên frontend, giờ làm sao để optimize
tracking logic data

==

Mấy cái này em ít làm nhưng mà trong thực tế thì có thể apply được nhanh, catch up

=====Câu hỏi tình huống======

khi vấn đề xung đột giữa tester và dev => khó thoả hiệp
=> Keyword 
=> - Cố gắng phân tích requirement
   - Liên hệ người có thẩm quyền cao hơn, nhìn vấn đề chính xác hơn
   - Hướng giải quyết hợp lý

Em có task, em không làm được
   - Cố gắng research thì ảnh hưởng thời gian
   - Research tầm 15-20 phút, tránh lãng phí thời gian

===============
THUẬT TOÁN
Bài:

Đề: // Trapping Rain Water
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:


Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
Example 2:

Input: height = [4,2,0,3,2,5]
Output: 9
 

Constraints:

n == height.length
1 <= n <= 2 * 104
0 <= height[i] <= 105

=== ENGLISH ===

===============
