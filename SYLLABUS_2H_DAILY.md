# 📅 GIÁO TRÌNH LUYỆN THI OLP 2 GIỜ/NGÀY (SYLLABUS CHI TIẾT TỪNG NGÀY)
> **Khung giờ chuẩn mỗi ngày (120 phút):**
> - **Ngày học mới:** 20m Concept/Template + 20m Bài D0/D1 + 50m Bài D2 Transfer + 20m Chữa/Hint + 10m Mistake Log.
> - **Ngày luyện tập:** 10m Viết Template trắng + 45m Bài D1 Standard + 55m Bài D2 Transfer + 10m Mistake Log.

---

## 🚩 PHASE 1: FOUNDATION (15/09 — 27/09)
*Mục tiêu: Đạt L3 ở các kỹ thuật tuyến tính và tìm kiếm. Tự lực giải bài D1 trong ≤ 25 phút.*

### Ngày 1 (15/09) — Prefix Sum & Difference Array
- **Bài A (D1 — 25 phút):** [CSES 1646 - Static Range Sum Queries](https://cses.fi/problemset/task/1646)
  - *Mục tiêu:* Template prefix sum 1-indexed, xử lý tràn số `long long`.
  - *Hint tối đa:* H0 (tự lực). Dừng sau 30 phút nếu chưa xong.
- **Bài B (D2 — 55 phút):** [Codeforces 1398C - Good Subarrays](https://codeforces.com/problemset/problem/1398/C)
  - *Mục tiêu:* Nhận diện biến đổi tổng đoạn thành đếm tần suất với Map: $P[r] - r = P[l-1] - (l-1)$.
  - *Hint tối đa:* H1 sau 35 phút suy nghĩ. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* AC0 Bài A, hiểu và tự code lại được Bài B (dù có thể cần H1).

### Ngày 2 (16/09) — Two Pointers & Sliding Window
- **Bài A (D1 — 25 phút):** [CSES 1660 - Subarray Sums I](https://cses.fi/problemset/task/1660)
  - *Mục tiêu:* Duy trì cửa sổ $[L, R]$, co dãn con trỏ khi mảng toàn số dương.
  - *Hint tối đa:* H0. Dừng sau 30 phút.
- **Bài B (D2 — 55 phút):** [CSES 2428 - Subarray Distinct Values](https://cses.fi/problemset/task/2428)
  - *Mục tiêu:* Đếm số đoạn con có tối đa $K$ giá trị khác nhau. Dùng Two Pointers + `std::map` (hoặc mảng đếm).
  - *Hint tối đa:* H1 sau 35 phút. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* Nhận diện được vì sao Two Pointers chạy được khi $A_i > 0$.

### Ngày 3 (17/09) — Binary Search cơ bản & Tọa độ
- **Bài A (D1 — 20 phút):** [CSES 1621 - Distinct Numbers](https://cses.fi/problemset/task/1621)
  - *Mục tiêu:* Sort + Two pointers hoặc Sort + Unique.
  - *Hint tối đa:* H0. Dừng sau 25 phút.
- **Bài B (D2 — 55 phút):** [Codeforces 1201C - Maximum Median](https://codeforces.com/problemset/problem/1201/C)
  - *Mục tiêu:* Sort mảng, sau đó Binary Search giá trị trung vị có thể đạt được với tối đa $K$ phép tăng.
  - *Hint tối đa:* H2 sau 35 phút. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* Viết hàm `check(mid)` không bị tràn số `long long`.

### Ngày 4 (18/09) — Binary Search on Answer
- **Bài A (D1 — 25 phút):** [CSES 1620 - Factory Machines](https://cses.fi/problemset/task/1620)
  - *Mục tiêu:* Tìm thời gian tối thiểu để $K$ máy làm xong $T$ sản phẩm.
  - *Hint tối đa:* H0. Dừng sau 30 phút.
- **Bài B (D2 — 55 phút):** [CSES 1085 - Array Division](https://cses.fi/problemset/task/1085)
  - *Mục tiêu:* Chia mảng thành $K$ đoạn liên tiếp sao cho tổng lớn nhất là nhỏ nhất.
  - *Hint tối đa:* H1 sau 35 phút. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* Nhận diện keyword *"maximize the minimum / minimize the maximum"*.

### Ngày 5 (19/09) — Mixed Review: Khi nào Two Pointers bị gãy?
- **Bài A (D1 — 30 phút):** [CSES 1661 - Subarray Sums II](https://cses.fi/problemset/task/1661)
  - *Mục tiêu:* Mảng có số âm $\to$ Two Pointers gãy hoàn toàn $\to$ Bắt buộc dùng Prefix Sum + Map.
  - *Hint tối đa:* H1 sau 20 phút. Dừng sau 35 phút.
- **Bài B (D2 — 55 phút):** [Codeforces 251A - Points on Line](https://codeforces.com/problemset/problem/251/A)
  - *Mục tiêu:* Two Pointers kết hợp tổ hợp $C_{k}^2$ để đếm bộ ba điểm có khoảng cách $\le D$.
  - *Hint tối đa:* H1 sau 30 phút. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* Giải thích được vì sao không thể dùng Two Pointers khi có số âm.

### Ngày 6 (20/09) — Sorting & Greedy Exchange
- **Bài A (D1 — 25 phút):** [CSES 1629 - Movie Festival](https://cses.fi/problemset/task/1629)
  - *Mục tiêu:* Interval Scheduling — Sort theo thời gian kết thúc sớm nhất.
  - *Hint tối đa:* H0. Dừng sau 30 phút.
- **Bài B (D2 — 55 phút):** [CSES 1163 - Traffic Lights](https://cses.fi/problemset/task/1163)
  - *Mục tiêu:* Quản lý các đoạn liên tục bằng `std::set` và `std::multiset`.
  - *Hint tối đa:* H2 sau 35 phút. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* AC0 Bài A trong 15 phút.

### Ngày 7 (21/09) — Stack / Queue & Monotonic Stack
- **Bài A (D1 — 25 phút):** [CSES 1645 - Nearest Smaller Values](https://cses.fi/problemset/task/1645)
  - *Mục tiêu:* Template Monotonic Stack chuẩn để tìm phần tử nhỏ hơn gần nhất bên trái.
  - *Hint tối đa:* H0. Dừng sau 30 phút.
- **Bài B (D2 — 55 phút):** [CSES 1141 - Playlist](https://cses.fi/problemset/task/1141)
  - *Mục tiêu:* Tìm đoạn bài hát liên tiếp dài nhất không lặp lại (Two Pointers + Set/Map).
  - *Hint tối đa:* H1 sau 35 phút. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* AC0 Bài A.

### Ngày 8 (22/09) — Coordinate Compression (Nén tọa độ)
- **Bài A (D1 — 25 phút):** Tự code template Nén tọa độ mảng 1D: `sort`, `unique`, `lower_bound`.
  - *Hint tối đa:* H0. Dừng sau 30 phút.
- **Bài B (D2 — 55 phút):** [CSES 1619 - Restaurant Customers](https://cses.fi/problemset/task/1619)
  - *Mục tiêu:* Sweep-line / Difference array trên tập thời gian đã sắp xếp.
  - *Hint tối đa:* H1 sau 35 phút. Dừng sau 60 phút.
  - *Tiêu chuẩn PASS ngày:* Không mắc lỗi nhầm lẫn giữa giá trị gốc và giá trị nén.

### Ngày 9 (23/09) — Mixed Foundation D2
- **Bài A (D2 — 50 phút):** [Codeforces 1006C - Three Parts of the Array](https://codeforces.com/problemset/problem/1006/C)
  - *Mục tiêu:* Two pointers từ hai đầu mảng cân bằng tổng.
- **Bài B (D2 — 50 phút):** [Codeforces 1613C - Poisoned Dagger](https://codeforces.com/problemset/problem/1613/C)
  - *Mục tiêu:* Binary Search trên lực sát thương $K$.
  - *Tiêu chuẩn PASS ngày:* Đạt ít nhất 1 AC0 trong 2 bài.

### Ngày 10 (24/09) — Review Sổ Tay Lỗi & Spaced Repetition
- Làm lại 2 bài trong tuần từng bị dính H2/H3/H4 ở trạng thái **AC0 hoàn toàn**.
- Viết lại 5 core templates trong 30 phút: Prefix Sum, Two Pointers, BS Lower Bound, BS on Answer, Monotonic Stack.

### Ngày 11 (25/09) — Pre-Checkpoint Warmup
- Làm 2 bài unseen ngẫu nhiên mức D1/D2 giấu tag trên Codeforces (Rating 1200–1400).
- Bấm giờ đúng 45 phút/bài.

### Ngày 12 (26/09) — Thả lỏng & Rà soát chiến thuật
- Rà soát lại Form 10 phút nhận diện.
- Ngủ đủ giấc chuẩn bị cho Checkpoint ngày mai.

### Ngày 13 (27/09) — 🏆 CHECKPOINT PHASE 1: FOUNDATION (120 PHÚT)
- **4 bài unseen hoàn toàn** theo chuẩn Ma trận ở `CHECKPOINT_BLUEPRINT.md`.
- **Đạt chuẩn:** $\ge 220$ điểm (có ít nhất 1 bài D2 đạt AC0).

---

## 🚩 PHASE 2: DYNAMIC PROGRAMMING (28/09 — 11/10)
*Mục tiêu: Đạt L3 DP. Chuyển từ "thấy đề DP mới biết làm" sang "nhìn bài toán tối ưu tự dựng được State".*

### Ngày 14 (28/09) — DP 1D & Trạng thái tiền tố
- **Bài A (D1 — 25m):** [CSES 1633 - Dice Combinations](https://cses.fi/problemset/task/1633)
- **Bài B (D2 — 55m):** [CSES 1634 - Minimizing Coins](https://cses.fi/problemset/task/1634)
- *Tiêu chí pass:* Xác định đúng bài toán con gối nhau và thứ tự tính từ 1 đến $N$.

### Ngày 15 (29/09) — DP Đếm số cách & Thứ tự lặp
- **Bài A (D1 — 25m):** [CSES 1635 - Coin Combinations I](https://cses.fi/problemset/task/1635) (Thứ tự đồng xu quan trọng)
- **Bài B (D2 — 55m):** [CSES 1636 - Coin Combinations II](https://cses.fi/problemset/task/1636) (Tổ hợp - thứ tự không quan trọng)
- *Tiêu chí pass:* Giải thích được vì sao đảo 2 vòng lặp `for (coin)` và `for (sum)` lại biến hoán vị thành tổ hợp.

### Ngày 16 (30/09) — DP 2D Grid
- **Bài A (D1 — 25m):** [CSES 1637 - Removing Digits](https://cses.fi/problemset/task/1637)
- **Bài B (D2 — 55m):** [CSES 1638 - Grid Paths](https://cses.fi/problemset/task/1638)
- *Tiêu chí pass:* Xử lý tốt chướng ngại vật trên bảng lưới và điều kiện biên.

### Ngày 17 (01/10) — Knapsack 0/1 & Tối ưu bộ nhớ
- **Bài A (D1 — 25m):** [CSES 1158 - Book Shop](https://cses.fi/problemset/task/1158)
- **Bài B (D2 — 55m):** [AtCoder dp_d - Knapsack 1](https://atcoder.jp/contests/dp/tasks/dp_d)
- *Tiêu chí pass:* Tối ưu mảng 2D về 1D bằng cách duyệt lùi trọng số từ $W \to w_i$.

### Ngày 18 (02/10) — LIS (Longest Increasing Subsequence)
- **Bài A (D1 — 25m):** LIS $O(N^2)$ cơ bản.
- **Bài B (D2 — 55m):** [CSES 1145 - Increasing Subsequence](https://cses.fi/problemset/task/1145) ($O(N \log N)$ dùng `std::lower_bound`).
- *Tiêu chí pass:* Tự code được thuật LIS $O(N \log N)$ bằng mảng `tails`.

### Ngày 19 (03/10) — Subsequence DP & Prefix Optimization
- **Bài A (D1 — 30m):** [AtCoder dp_c - Vacation](https://atcoder.jp/contests/dp/tasks/dp_c)
- **Bài B (D2 — 55m):** [AtCoder dp_m - Candies](https://atcoder.jp/contests/dp/tasks/dp_m) (DP kết hợp Prefix Sum tối ưu từ $O(N \cdot K^2) \to O(N \cdot K)$).
- *Tiêu chí pass:* Nhận ra cách dùng prefix sum để tính tổng một đoạn trạng thái DP trong $O(1)$.

### Ngày 20 (04/10) — 🏆 DP CHECKPOINT I (120 PHÚT)
- 4 bài DP có độ khó tăng dần (D1 $\to$ D2).

### Ngày 21–26 (05/10 — 10/10) — Luyện nhận diện DP Ẩn Danh (No-Tag DP)
- Mỗi ngày 2 bài mức D1/D2 từ VNOJ và Codeforces **hoàn toàn giấu tag**.
- Trọng tâm: Tự đặt trạng thái, tự tìm quan hệ truy hồi, không được xem lời giải trước 40 phút.

### Ngày 27 (11/10) — 🏆 DP CHECKPOINT II (120 PHÚT - 4 BÀI KHÔNG TAG DP)
- Mục tiêu: $\ge 2$ bài AC0 + nhận diện đúng hướng của bài D2 còn lại.

---

## 🚩 PHASE 3: MATH & BITWISE (12/10 — 20/10)
*Mục tiêu: Đạt L2–L3. Nắm vững modulo arithmetic, số học, bit manipulation và bitmask cơ bản.*

- **Ngày 28 (12/10):** GCD, Extended Euclidean, Nghịch đảo Modulo bằng Fermat Little Theorem.
- **Bài A (D1):** CSES 1095 (Exponentiation) | **Bài B (D2):** CSES 1712 (Exponentiation II - Fermat $P-1$).
- **Ngày 29 (13/10):** Sàng số nguyên tố Sieve of Eratosthenes & Phân tích thừa số trong $O(\log N)$.
- **Ngày 30 (14/10):** Đếm ước số & Tổng ước số ($O(\sqrt{N})$ và tiền xử lý).
- **Ngày 31 (15/10):** Tổ hợp $nCr \pmod{10^9+7}$ với mảng giai thừa và nghịch đảo giai thừa tiền xử lý $O(N)$.
- **Ngày 32 (16/10):** Toán tử Bitwise: Tính chất phép XOR ($A \oplus B = C \iff A \oplus C = B$, prefix XOR).
- **Bài B (D2):** [Codeforces 1360F](https://codeforces.com) hoặc bài tìm 2 số lẻ trong mảng.
- **Ngày 33 (17/10):** Duyệt Submask $O(3^N)$: `for (int s = m; s; s = (s - 1) & m)`.
- **Ngày 34 (18/10):** Bitmask DP cơ bản: [CSES 1690 - Hamiltonian Flights](https://cses.fi/problemset/task/1690) ($N \le 20$).
- **Ngày 35 (19/10):** Tổng ôn & hoàn thiện Error Notebook Math/Bit.
- **Ngày 36 (20/10):** 🏆 **CHECKPOINT PHASE 3: MATH & BITWISE (120 PHÚT)**

---

## 🚩 PHASE 4: GRAPH ALGORITHMS (21/10 — 31/10)
*Mục tiêu: Đạt L3 Graph. Nhận diện đồ thị trên lưới, thành phần liên thông, đường đi ngắn nhất và cây.*

- **Ngày 37 (21/10):** DFS & BFS trên ma trận lưới / Bảng cờ: [CSES 1192 - Counting Rooms](https://cses.fi/problemset/task/1192).
- **Ngày 38 (22/10):** Truy vết đường đi ngắn nhất không trọng số bằng BFS: [CSES 1193 - Monsters](https://cses.fi/problemset/task/1194).
- **Ngày 39 (23/10):** Disjoint Set Union (DSU) với nén đường và hợp theo kích thước: [CSES 1675 - Road Reparation](https://cses.fi/problemset/task/1675).
- **Ngày 40 (24/10):** Dijkstra với `std::priority_queue`: [CSES 1671 - Shortest Routes I](https://cses.fi/problemset/task/1671).
- **Ngày 41 (25/10):** Topo Sort & DP trên đồ thị DAG: [CSES 1679 - Course Schedule](https://cses.fi/problemset/task/1679) & [CSES 1680 - Longest Flight Route](https://cses.fi/problemset/task/1680).
- **Ngày 42 (26/10):** Kruskal MST & bài toán kết nối mạng lưới: [CSES 1676 - Road Construction](https://cses.fi/problemset/task/1676).
- **Ngày 43 (27/10):** Tree DFS: Kích thước cây con, chiều sâu, đường kính cây: [CSES 1131 - Tree Diameter](https://cses.fi/problemset/task/1131).
- **Ngày 44 (28/10):** Shortest Path có trạng thái (Dijkstra trên đồ thị nhiều tầng).
- **Ngày 45 (29/10):** Mixed Graph D2: [Codeforces 20C - Dijkstra?](https://codeforces.com/problemset/problem/20/C).
- **Ngày 46 (30/10):** Review toàn bộ Templates Đồ thị.
- **Ngày 47 (31/10):** 🏆 **CORE EXAM: TỔNG HỢP KIẾN THỨC NỀN TẢNG (120 PHÚT - 4 BÀI MIXED)**
  - Đề thi gồm: 1 Greedy + 1 DP + 1 Graph + 1 Math/BS (Không cho biết bài nào dùng cái gì).

---

## 🚩 PHASE 5: CONTEST TRAINING & OLP STRATEGY (01/11 — 08/12)
*Mục tiêu: Dành 50% thời gian thi đấu thực chiến, làm quen với áp lực thời gian, gom nhặt từng subtask.*

### Lịch tuần chuẩn tháng 11 (2 tiếng/ngày):
- **Thứ Hai:** Cấu trúc dữ liệu nâng cao — Cây Fenwick (BIT) 1D + 2 bài tập.
- **Thứ Ba:** Fenwick kết hợp Nén tọa độ (D2) — Đếm số nghịch thế $O(N \log N)$.
- **Thứ Tư:** Xử lý chuỗi cơ bản — String Hashing & KMP pattern matching.
- **Thứ Năm:** Mixed Set 120 phút (3 bài ẩn danh).
- **Thứ Sáu:** Tư duy Ad-hoc & Constructive Algorithms (xây dựng cấu hình).
- **Thứ Bảy:** Rèn luyện chiến thuật Subtask trên đề OLP cũ (cách viết trâu tối ưu ăn 30–50% điểm).
- **Chủ Nhật (Cách 2 tuần 1 lần):** **3-HOUR FULL MOCK CONTEST** (Đúng chuẩn thời gian thi OLP).

### 🔒 KHO ĐỀ GIỮ NGUYÊN BẢN CHO BENCHMARK THỰC TẾ (CẤM XEM TRƯỚC):
- **Tuần 2 tháng 11:** Full Mock Contest 1 (Đề OLP Chuyên Tin 2022).
- **Tuần 4 tháng 11:** Full Mock Contest 2 (Đề OLP Chuyên Tin 2023).
- **01/12:** Full Mock Contest 3 (Đề OLP Chuyên Tin 2024 - 4 bài sạch).
- **06/12:** Full Mock Contest 4 (Đề OLP Chuyên Tin 2025 - Benchmark chốt danh sách).
- **08/12:** Nghỉ ngơi, rà soát lại checklist đồ dùng & template, bước vào kỳ thi chính thức!
