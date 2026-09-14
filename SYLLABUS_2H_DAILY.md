# 📅 GIÁO TRÌNH LUYỆN THI OLP 2 GIỜ/NGÀY — 85 NGÀY THỰC CHIẾN
> **Đồng bộ trực tiếp từ:** OLP_2026_Daily_Personalized_Roadmap.xlsx
> **Thời gian:** 15/09/2026 → 08/12/2026 (12 Tuần + 1 Ngày chốt trước thi)
> **Kỷ luật 2h:** 20m Concept/Template + 25m D0 + 35m D1 + 40m D2 + 10m Mistake Log. Chỉ AC0 mới tính Mastery.

## 🗺️ TỔNG QUAN 12 TUẦN & CÁC MỐC CHECKPOINT (WEEKLY MILESTONES)

| Tuần | Ngày | Mục tiêu chính | Cuối tuần phải làm được | Cổng chống ảo tưởng (Anti-Farm Gate) | Bài thi / Checkpoint |
| :---: | :---: | :--- | :--- | :--- | :--- |
| **W1** | 15/09–21/09 | Biến kiến thức m đã chạm qua thành phản xạ | Prefix/two pointers/sliding/BS/greedy: nhìn bài và chọn đúng pattern; BS answer tự viết check(mid). | Không tính D0. PASS chỉ khi checkpoint có ≥2 AC0 D1/D2 và ≥1 bài không biết topic trước. | **Mixed foundations** |
| **W2** | 22/09–28/09 | STL + stack + compression + 2D prefix | Tự dùng map/set/multiset; monotonic stack O(n); compression; prefix 2D. | Ít nhất 1 D2 recognition đúng; không H3 trước phút 90 checkpoint. | **Mixed week 2** |
| **W3** | 29/09–05/10 | DP basic | Mỗi bài DP viết được state/transition/base/order/answer; knapsack không nhầm loop. | Farm Dice/Coins không đủ. Checkpoint phải có state đúng ở bài không ghi DP. | **DP checkpoint 1** |
| **W4** | 06/10–12/10 | DP transfer | LIS, weighted interval DP, range DP, bitmask DP cơ bản; biết complexity state space. | PASS khi ≥2 hướng D2 đúng hoặc ≥1 D2 AC0; không chỉ làm classical. | **DP checkpoint 2** |
| **W5** | 13/10–19/10 | Math + bit | powmod, factorization, nCk, PIE, xor/bitmask; tự derive complexity. | Counting Divisors/Exponentiation alone không đủ: phải có Prime Multiples/bit mixed. | **Math+bit mixed** |
| **W6** | 20/10–26/10 | Graph core | DFS/BFS, multi-source, DSU, Dijkstra; biết điều kiện dùng từng cái. | Template AC không đủ: Investigation/Monsters recognition phải đúng. | **Graph basics mixed** |
| **W7** | 27/10–02/11 | DAG/MST/tree | Topo + DAG DP; Kruskal; tree DFS; binary lifting; Euler tour concept. | Ít nhất 1 D2 graph/tree làm được không mở template. | **Graph/tree checkpoint** |
| **W8** | 03/11–09/11 | Fenwick/segment/offline | BIT ≤10 phút; segtree point update/range query; compression/offline query. | PASS khi BIT/segtree viết từ memory + ≥1 D2 AC0. | **Range DS checkpoint** |
| **W9** | 10/11–16/11 | Strings + constructive + geometry | KMP/Z/hash core; cross/orientation; xây construction và proof. | Không được chỉ farm String Matching. Phải có constructive/geometry progress. | **Mixed checkpoint** |
| **W10** | 17/11–23/11 | Ghép kỹ thuật | Tự chọn giữa prefix/window, DP+BS, graph+DP, BIT+compression, math+bit. | Mỗi ngày ít nhất 1 D2/mixed; không được nhìn topic tag trước khi nghĩ. | **Mini contest 2h** |
| **W11** | 24/11–30/11 | OLP thật 2022–2023 | Đọc toàn đề, săn subtask, switch bài đúng lúc, ghi score/partial. | PASS bằng điểm/subtask tăng lên, không bằng số AC bài easy. | **OLP partial-score test** |
| **W12** | 01/12–07/12 | 2 full mock sạch + chữa lỗi | OLP 2024 và 2025 thi như thật; template speedrun; không học topic lớn mới. | Benchmark bằng score + decision making; 2 ngày mock 3h là ngoại lệ. | **OLP 2024 / OLP 2025** |

---

## 📆 LỊCH TRÌNH CHI TIẾT TỪNG NGÀY (85 NGÀY)


### 🏆 TUẦN W1

#### Ngày 1: 2026-09-15 (Tue) — [LEARN+REVIEW] Prefix sum + difference
- **Mục tiêu cốt lõi:** Ôn cái m đã biết nhưng phải chuyển thành phản xạ: nhận range query / subarray sum và biết khi nào prefix dùng được.
- **Tài liệu học / Template:** [https://usaco.guide/silver/prefix-sums](https://usaco.guide/silver/prefix-sums)
- **Template cần tự viết:** Tự viết pre[0]=0; sum(l,r); difference range add.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Static Range Sum](https://cses.fi/problemset/task/1646) | https://cses.fi/problemset/task/1646 | H2 |
  | **D1 (Standard)** | [Subarray Sums II](https://cses.fi/problemset/task/1661) | https://cses.fi/problemset/task/1661 | H1 / H0 |
  | **D2 (Mixed)** | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644) | https://cses.fi/problemset/task/1644 | H2 |
- **Phân bổ 120 phút:** 20' học/viết template + 25' D0 + 35' D1 + 40' D2
- **Tiêu chí PASS hôm nay:** PASS nếu D0 AC ≤20', D1 tự nhận ra prefix/map; D2 phải viết được O(n log n) hoặc tốt hơn trước hint.

#### Ngày 2: 2026-09-16 (Wed) — [LEARN+REVIEW] Two pointers
- **Mục tiêu cốt lõi:** Phân biệt 2 đầu vs cùng chiều; biết điều kiện nào cho phép con trỏ chỉ đi một chiều.
- **Tài liệu học / Template:** [https://usaco.guide/silver/two-pointers](https://usaco.guide/silver/two-pointers)
- **Template cần tự viết:** Tự viết pair-sum 2 đầu và window l/r không nhìn.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Sum of Two Values](https://cses.fi/problemset/task/1640) | https://cses.fi/problemset/task/1640 | H2 |
  | **D1 (Standard)** | [Subarray Sums I](https://cses.fi/problemset/task/1660) | https://cses.fi/problemset/task/1660 | H1 / H0 |
  | **D2 (Mixed)** | [Playlist](https://cses.fi/problemset/task/1141) | https://cses.fi/problemset/task/1141 | H2 |
- **Phân bổ 120 phút:** 20' học + 25' D0 + 35' D1 + 40' D2
- **Tiêu chí PASS hôm nay:** PASS nếu tự giải D0/D1; với D2 phải nói được invariant của cửa sổ trước khi code.

#### Ngày 3: 2026-09-17 (Thu) — [LEARN+REVIEW] Sliding window
- **Mục tiêu cốt lõi:** Không áp sliding window bừa: hiểu vì sao số dương/điều kiện monotonic làm cửa sổ hợp lệ.
- **Tài liệu học / Template:** [https://usaco.guide/silver/two-pointers](https://usaco.guide/silver/two-pointers)
- **Template cần tự viết:** Template add(r) / while invalid remove(l) / update ans.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Subarray Sums I](https://cses.fi/problemset/task/1660) | https://cses.fi/problemset/task/1660 | H2 |
  | **D1 (Standard)** | [Playlist](https://cses.fi/problemset/task/1141) | https://cses.fi/problemset/task/1141 | H1 / H0 |
  | **D2 (Mixed)** | [Distinct Values Subarrays](https://cses.fi/problemset/task/3420) | https://cses.fi/problemset/task/3420 | H2 |
- **Phân bổ 120 phút:** 15' ôn + 30' D0 + 35' D1 + 40' D2
- **Tiêu chí PASS hôm nay:** PASS nếu Recognition=YES cho D1 và không cần H3; D2 tối thiểu model đúng window + structure.

#### Ngày 4: 2026-09-18 (Fri) — [LEARN+REVIEW] Binary search / lower_bound
- **Mục tiêu cốt lõi:** Tách rõ search trong mảng và search trên đáp án.
- **Tài liệu học / Template:** [https://usaco.guide/silver/binary-search-sorted-array](https://usaco.guide/silver/binary-search-sorted-array)
- **Template cần tự viết:** Tự code lower_bound, upper_bound, first_true, last_true.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Distinct Numbers](https://cses.fi/problemset/task/1621) | https://cses.fi/problemset/task/1621 | H2 |
  | **D1 (Standard)** | [Factory Machines](https://cses.fi/problemset/task/1620) | https://cses.fi/problemset/task/1620 | H1 / H0 |
  | **D2 (Mixed)** | [Array Division](https://cses.fi/problemset/task/1085) | https://cses.fi/problemset/task/1085 | H2 |
- **Phân bổ 120 phút:** 25' template + 25' D0 + 35' D1 + 35' D2
- **Tiêu chí PASS hôm nay:** PASS nếu tự viết first/last true và D1 AC0; D2 phải định nghĩa check(mid) đúng.

#### Ngày 5: 2026-09-19 (Sat) — [PRACTICE] Binary search on answer
- **Mục tiêu cốt lõi:** Nhìn các cụm minimize maximum / maximize minimum và kiểm tra tính đơn điệu trước khi code.
- **Tài liệu học / Template:** [https://usaco.guide/silver/binary-search](https://usaco.guide/silver/binary-search)
- **Template cần tự viết:** Tự viết bool check(mid), biên lo/hi, tránh overflow.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Factory Machines](https://cses.fi/problemset/task/1620) | https://cses.fi/problemset/task/1620 | H2 |
  | **D1 (Standard)** | [Array Division](https://cses.fi/problemset/task/1085) | https://cses.fi/problemset/task/1085 | H1 / H0 |
  | **D2 (Mixed)** | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644) | https://cses.fi/problemset/task/1644 | H2 |
- **Phân bổ 120 phút:** 10' ôn + 40' D1 + 55' D2 + 15' review
- **Tiêu chí PASS hôm nay:** PASS nếu D1 AC0 ≤35'; D2 không cần AC nhưng phải chứng minh monotonic và complexity.

#### Ngày 6: 2026-09-20 (Sun) — [LEARN] Greedy cơ bản
- **Mục tiêu cốt lõi:** Tập trả lời: chọn local optimum nào, và vì sao lựa chọn đó không làm mất nghiệm tối ưu.
- **Tài liệu học / Template:** [https://usaco.guide/bronze/intro-greedy](https://usaco.guide/bronze/intro-greedy)
- **Template cần tự viết:** Không có template cố định; ghi 3 câu proof: choice, exchange, invariant.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Movie Festival](https://cses.fi/problemset/task/1629) | https://cses.fi/problemset/task/1629 | H2 |
  | **D1 (Standard)** | [Tasks and Deadlines](https://cses.fi/problemset/task/1630) | https://cses.fi/problemset/task/1630 | H1 / H0 |
  | **D2 (Mixed)** | [Movie Festival II](https://cses.fi/problemset/task/1632) | https://cses.fi/problemset/task/1632 | H2 |
- **Phân bổ 120 phút:** 20' học + 25' D0 + 35' D1 + 40' D2
- **Tiêu chí PASS hôm nay:** PASS nếu D0/D1 AC0 và tự viết được 3–5 dòng chứng minh greedy.

#### Ngày 7: 2026-09-21 (Mon) — [CHECKPOINT] Mixed foundations
- **Mục tiêu cốt lõi:** Không xem tag. Kiểm tra m có tự nhận ra prefix / two pointers / BS / greedy hay không.
- **Template cần tự viết:** Không học mới. Trước code ghi Constraint → brute → bottleneck → pattern.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [Reading Books](https://cses.fi/problemset/task/1631) | https://cses.fi/problemset/task/1631 | H2 |
- **Phân bổ 120 phút:** 120' mixed: Reading Books + chọn lại 2 bài chưa AC trong tuần
- **Tiêu chí PASS hôm nay:** PASS tuần nếu ≥2 AC0 ở D1/D2 và ít nhất 1 bài không được biết trước topic.


### 🏆 TUẦN W2

#### Ngày 8: 2026-09-22 (Tue) — [LEARN] STL set/map + counting
- **Mục tiêu cốt lõi:** Dùng set/map khi cần distinct, frequency, last position; phân biệt map vs unordered_map.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** Viết nhanh frequency map, set unique, map last position.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Distinct Numbers](https://cses.fi/problemset/task/1621) | https://cses.fi/problemset/task/1621 | H2 |
  | **D1 (Standard)** | [Playlist](https://cses.fi/problemset/task/1141) | https://cses.fi/problemset/task/1141 | H1 / H0 |
  | **D2 (Mixed)** | [Subarray Sums II](https://cses.fi/problemset/task/1661) | https://cses.fi/problemset/task/1661 | H2 |
- **Phân bổ 120 phút:** 20' đọc/ôn STL + 30' D0 + 35' D1 + 35' D2
- **Tiêu chí PASS hôm nay:** PASS nếu giải thích được vì sao dùng map/set thay vì vector trực tiếp.

#### Ngày 9: 2026-09-23 (Wed) — [LEARN] Sweep line / event sorting
- **Mục tiêu cốt lõi:** Biến interval thành event; hiểu tie-breaking khi cùng thời điểm.
- **Tài liệu học / Template:** [https://usaco.guide/bronze/intro-greedy](https://usaco.guide/bronze/intro-greedy)
- **Template cần tự viết:** Tạo vector event (time,+1/-1), sort, prefix count.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Restaurant Customers](https://cses.fi/problemset/task/1619) | https://cses.fi/problemset/task/1619 | H2 |
  | **D1 (Standard)** | [Movie Festival](https://cses.fi/problemset/task/1629) | https://cses.fi/problemset/task/1629 | H1 / H0 |
  | **D2 (Mixed)** | [Movie Festival II](https://cses.fi/problemset/task/1632) | https://cses.fi/problemset/task/1632 | H2 |
- **Phân bổ 120 phút:** 20' học + 25' D0 + 35' D1 + 40' D2
- **Tiêu chí PASS hôm nay:** PASS nếu tự chọn đúng thứ tự event khi time bằng nhau.

#### Ngày 10: 2026-09-24 (Thu) — [LEARN] Monotonic stack
- **Mục tiêu cốt lõi:** Nhận dạng nearest smaller/greater, mỗi phần tử push-pop tối đa một lần.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** stack index; while top violates condition pop; answer from top.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Nearest Smaller Values](https://cses.fi/problemset/task/1645) | https://cses.fi/problemset/task/1645 | H2 |
  | **D1 (Standard)** | [Nearest Smaller Values](https://cses.fi/problemset/task/1645) | https://cses.fi/problemset/task/1645 | H1 / H0 |
  | **D2 (Mixed)** | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644) | https://cses.fi/problemset/task/1644 | H2 |
- **Phân bổ 120 phút:** 25' template + 30' D0 (tự làm lại 2 cách) + 50' D2
- **Tiêu chí PASS hôm nay:** PASS nếu tự chứng minh O(n) bằng amortized reasoning.

#### Ngày 11: 2026-09-25 (Fri) — [LEARN] Coordinate compression
- **Mục tiêu cốt lõi:** Khi giá trị tới 1e9 nhưng chỉ thứ tự quan trọng: sort unique + lower_bound.
- **Tài liệu học / Template:** [https://usaco.guide/silver/sorting-custom](https://usaco.guide/silver/sorting-custom)
- **Template cần tự viết:** vector vals=sorted unique; id=lower_bound(vals,x).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Distinct Numbers](https://cses.fi/problemset/task/1621) | https://cses.fi/problemset/task/1621 | H2 |
  | **D1 (Standard)** | [Salary Queries](https://cses.fi/problemset/task/1144) | https://cses.fi/problemset/task/1144 | H1 / H0 |
  | **D2 (Mixed)** | [Distinct Values Queries](https://cses.fi/problemset/task/1734) | https://cses.fi/problemset/task/1734 | H2 |
- **Phân bổ 120 phút:** 20' học + 25' D0 + 40' D1 + 35' D2 analysis
- **Tiêu chí PASS hôm nay:** PASS nếu tự nêu được lúc nào compression giữ nguyên thông tin cần thiết.

#### Ngày 12: 2026-09-26 (Sat) — [LEARN] 2D prefix sum
- **Mục tiêu cốt lõi:** Query rectangle O(1), hiểu inclusion-exclusion 4 góc.
- **Tài liệu học / Template:** [https://usaco.guide/silver/more-prefix-sums](https://usaco.guide/silver/more-prefix-sums)
- **Template cần tự viết:** pre[i][j]=a+up+left-diag; query 4 góc.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Forest Queries](https://cses.fi/problemset/task/1652) | https://cses.fi/problemset/task/1652 | H2 |
  | **D1 (Standard)** | [Forest Queries](https://cses.fi/problemset/task/1652) | https://cses.fi/problemset/task/1652 | H1 / H0 |
  | **D2 (Mixed)** | [Forest Queries II](https://cses.fi/problemset/task/1739) | https://cses.fi/problemset/task/1739 | H2 |
- **Phân bổ 120 phút:** 25' học + 30' D0 + 35' D1 + 30' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu tự viết công thức query 4 góc không nhìn.

#### Ngày 13: 2026-09-27 (Sun) — [PRACTICE] Greedy + data structure
- **Mục tiêu cốt lõi:** Thấy greedy nhưng cần multiset / lower_bound để chọn phần tử phù hợp.
- **Tài liệu học / Template:** [https://usaco.guide/bronze/intro-greedy](https://usaco.guide/bronze/intro-greedy)
- **Template cần tự viết:** Ôn multiset::lower_bound + erase(iterator).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Movie Festival II](https://cses.fi/problemset/task/1632) | https://cses.fi/problemset/task/1632 | H1 / H0 |
  | **D2 (Mixed)** | [Hotel Queries](https://cses.fi/problemset/task/1143) | https://cses.fi/problemset/task/1143 | H2 |
- **Phân bổ 120 phút:** 15' ôn + 45' D1 + 60' D2
- **Tiêu chí PASS hôm nay:** PASS nếu D1 AC0; D2 phải mô tả data structure cần query gì.

#### Ngày 14: 2026-09-28 (Mon) — [CHECKPOINT] Mixed week 2
- **Mục tiêu cốt lõi:** Không học mới. Test nhận dạng STL/greedy/stack/compression/prefix2D.
- **Template cần tự viết:** Không nhìn resource trước 90 phút đầu.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Subarray Sums II](https://cses.fi/problemset/task/1661) | https://cses.fi/problemset/task/1661 | H1 / H0 |
  | **D2 (Mixed)** | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644) | https://cses.fi/problemset/task/1644 | H2 |
- **Phân bổ 120 phút:** 120' mixed: 2 bài unseen/retry không tag
- **Tiêu chí PASS hôm nay:** PASS nếu 1 bài D2 AC0 HOẶC 2 D1 AC0 + cả hai Recognition=YES.


### 🏆 TUẦN W3

#### Ngày 15: 2026-09-29 (Tue) — [LEARN] DP tư duy state
- **Mục tiêu cốt lõi:** Từ brute force nhìn state lặp; viết câu 'dp[...] = gì' trước code.
- **Tài liệu học / Template:** [https://usaco.guide/gold/intro-dp](https://usaco.guide/gold/intro-dp)
- **Template cần tự viết:** Checklist: state / transition / base / order / answer.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Dice Combinations](https://cses.fi/problemset/task/1633) | https://cses.fi/problemset/task/1633 | H2 |
  | **D1 (Standard)** | [Removing Digits](https://cses.fi/problemset/task/1637) | https://cses.fi/problemset/task/1637 | H1 / H0 |
  | **D2 (Mixed)** | [Array Description](https://cses.fi/problemset/task/1746) | https://cses.fi/problemset/task/1746 | H2 |
- **Phân bổ 120 phút:** 30' học + 25' D0 + 30' D1 + 35' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu trước mỗi bài tự viết đủ 5 mục DP; D1 AC0.

#### Ngày 16: 2026-09-30 (Wed) — [LEARN] DP 1D min/max
- **Mục tiêu cốt lõi:** Nhận bài tối ưu theo prefix/trạng thái i; phân biệt push vs pull.
- **Tài liệu học / Template:** [https://usaco.guide/gold/intro-dp](https://usaco.guide/gold/intro-dp)
- **Template cần tự viết:** dp[i]=best đến i; INF; min/max transition.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Removing Digits](https://cses.fi/problemset/task/1637) | https://cses.fi/problemset/task/1637 | H2 |
  | **D1 (Standard)** | [Minimizing Coins](https://cses.fi/problemset/task/1634) | https://cses.fi/problemset/task/1634 | H1 / H0 |
  | **D2 (Mixed)** | [Projects](https://cses.fi/problemset/task/1140) | https://cses.fi/problemset/task/1140 | H2 |
- **Phân bổ 120 phút:** 20' học + 30' D0 + 35' D1 + 35' D2 analysis
- **Tiêu chí PASS hôm nay:** PASS nếu D1 AC0 và Projects xác định đúng state+sort dù chưa AC.

#### Ngày 17: 2026-10-01 (Thu) — [LEARN] Grid DP
- **Mục tiêu cốt lõi:** Chuyển đường đi/chuỗi thành trạng thái 2D; xử lý ô cấm/base.
- **Tài liệu học / Template:** [https://usaco.guide/gold/paths-grids](https://usaco.guide/gold/paths-grids)
- **Template cần tự viết:** dp[i][j] từ up/left; modulo.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Grid Paths I](https://cses.fi/problemset/task/1638) | https://cses.fi/problemset/task/1638 | H2 |
  | **D1 (Standard)** | [Grid Paths I](https://cses.fi/problemset/task/1638) | https://cses.fi/problemset/task/1638 | H1 / H0 |
  | **D2 (Mixed)** | [Edit Distance](https://cses.fi/problemset/task/1639) | https://cses.fi/problemset/task/1639 | H2 |
- **Phân bổ 120 phút:** 20' học + 30' D0 + 60' D2 + 10' review
- **Tiêu chí PASS hôm nay:** PASS nếu Grid Paths AC0 ≤35' và Edit Distance tự ra state 2D.

#### Ngày 18: 2026-10-02 (Fri) — [LEARN] 0/1 Knapsack
- **Mục tiêu cốt lõi:** Hiểu vì sao vòng capacity chạy NGƯỢC để mỗi item dùng 1 lần.
- **Tài liệu học / Template:** [https://usaco.guide/gold/knapsack](https://usaco.guide/gold/knapsack)
- **Template cần tự viết:** for item -> for w=W..cost; dp[w]=max(...).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Book Shop](https://cses.fi/problemset/task/1158) | https://cses.fi/problemset/task/1158 | H2 |
  | **D1 (Standard)** | [Money Sums](https://cses.fi/problemset/task/1745) | https://cses.fi/problemset/task/1745 | H1 / H0 |
  | **D2 (Mixed)** | [Two Sets II](https://cses.fi/problemset/task/1093) | https://cses.fi/problemset/task/1093 | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 35' D1 + 25' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu giải thích được loop ngược bằng lời và D1 AC0.

#### Ngày 19: 2026-10-03 (Sat) — [LEARN] Unbounded / counting knapsack
- **Mục tiêu cốt lõi:** Phân biệt order matters / doesn't matter và loop order.
- **Tài liệu học / Template:** [https://usaco.guide/gold/knapsack](https://usaco.guide/gold/knapsack)
- **Template cần tự viết:** Coin I: sum ngoài; Coin II: coin ngoài (hiểu, không học vẹt).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Coin Combinations I](https://cses.fi/problemset/task/1635) | https://cses.fi/problemset/task/1635 | H2 |
  | **D1 (Standard)** | [Coin Combinations II](https://cses.fi/problemset/task/1636) | https://cses.fi/problemset/task/1636 | H1 / H0 |
  | **D2 (Mixed)** | [Array Description](https://cses.fi/problemset/task/1746) | https://cses.fi/problemset/task/1746 | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 35' D1 + 25' compare
- **Tiêu chí PASS hôm nay:** PASS nếu tự giải thích khác nhau giữa Coin I/II trước khi submit.

#### Ngày 20: 2026-10-04 (Sun) — [PRACTICE] DP 2D strings
- **Mục tiêu cốt lõi:** LCS / edit distance: mỗi ô phụ thuộc hàng/cột trước.
- **Tài liệu học / Template:** [https://usaco.guide/gold/paths-grids](https://usaco.guide/gold/paths-grids)
- **Template cần tự viết:** dp[i][j] + reconstruct parent nếu cần.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Longest Common Subsequence](https://cses.fi/problemset/task/3403) | https://cses.fi/problemset/task/3403 | H2 |
  | **D1 (Standard)** | [Edit Distance](https://cses.fi/problemset/task/1639) | https://cses.fi/problemset/task/1639 | H1 / H0 |
  | **D2 (Mixed)** | [Rectangle Cutting](https://cses.fi/problemset/task/1744) | https://cses.fi/problemset/task/1744 | H2 |
- **Phân bổ 120 phút:** 15' ôn + 45' D1 + 60' D2
- **Tiêu chí PASS hôm nay:** PASS nếu 1 D1 AC0 và D2 viết được transition đúng.

#### Ngày 21: 2026-10-05 (Mon) — [CHECKPOINT] DP basic mixed
- **Mục tiêu cốt lõi:** Không xem tag; buộc phải tự quyết có phải DP hay không.
- **Template cần tự viết:** Trước code: brute-force recurrence → state → complexity.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Array Description](https://cses.fi/problemset/task/1746) | https://cses.fi/problemset/task/1746 | H1 / H0 |
  | **D2 (Mixed)** | [Rectangle Cutting](https://cses.fi/problemset/task/1744) | https://cses.fi/problemset/task/1744 | H2 |
- **Phân bổ 120 phút:** 120' checkpoint
- **Tiêu chí PASS hôm nay:** PASS nếu ≥1 D2 AC0 hoặc 2 bài state đúng + 1 bài AC0, không H3.


### 🏆 TUẦN W4

#### Ngày 22: 2026-10-06 (Tue) — [LEARN] LIS O(n²) → O(n log n)
- **Mục tiêu cốt lõi:** Hiểu tails không phải subsequence thật; lower_bound giữ tail nhỏ nhất.
- **Tài liệu học / Template:** [https://usaco.guide/gold/intro-dp](https://usaco.guide/gold/intro-dp)
- **Template cần tự viết:** vector tails; lower_bound; thay hoặc push.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Increasing Subsequence](https://cses.fi/problemset/task/1145) | https://cses.fi/problemset/task/1145 | H2 |
  | **D1 (Standard)** | [Increasing Subsequence](https://cses.fi/problemset/task/1145) | https://cses.fi/problemset/task/1145 | H1 / H0 |
  | **D2 (Mixed)** | [Projects](https://cses.fi/problemset/task/1140) | https://cses.fi/problemset/task/1140 | H2 |
- **Phân bổ 120 phút:** 25' học + 40' LIS + 45' Projects + 10' review
- **Tiêu chí PASS hôm nay:** PASS nếu tự giải thích ý nghĩa tails và complexity.

#### Ngày 23: 2026-10-07 (Wed) — [LEARN] Weighted interval DP
- **Mục tiêu cốt lõi:** Sort theo end; binary search previous compatible; dp prefix.
- **Tài liệu học / Template:** [https://usaco.guide/gold/intro-dp](https://usaco.guide/gold/intro-dp)
- **Template cần tự viết:** dp[i]=max(dp[i-1], reward[i]+dp[p(i)]).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Movie Festival](https://cses.fi/problemset/task/1629) | https://cses.fi/problemset/task/1629 | H2 |
  | **D1 (Standard)** | [Projects](https://cses.fi/problemset/task/1140) | https://cses.fi/problemset/task/1140 | H1 / H0 |
  | **D2 (Mixed)** | [Removal Game](https://cses.fi/problemset/task/1097) | https://cses.fi/problemset/task/1097 | H2 |
- **Phân bổ 120 phút:** 20' học + 45' D1 + 45' D2 + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu Projects AC0 hoặc chỉ cần H1; p(i) phải tự tìm bằng BS.

#### Ngày 24: 2026-10-08 (Thu) — [LEARN] Range DP
- **Mục tiêu cốt lõi:** State dp[l][r], xử lý theo length tăng dần.
- **Tài liệu học / Template:** [https://usaco.guide/gold/dp-ranges](https://usaco.guide/gold/dp-ranges)
- **Template cần tự viết:** for len=1..n; for l; r=l+len-1; split/ends.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Removal Game](https://cses.fi/problemset/task/1097) | https://cses.fi/problemset/task/1097 | H1 / H0 |
  | **D2 (Mixed)** | [Rectangle Cutting](https://cses.fi/problemset/task/1744) | https://cses.fi/problemset/task/1744 | H2 |
- **Phân bổ 120 phút:** 25' học + 45' D1 + 40' D2
- **Tiêu chí PASS hôm nay:** PASS nếu tự nói đúng thứ tự tính state và 1 bài AC0.

#### Ngày 25: 2026-10-09 (Fri) — [LEARN] Bitmask DP intro
- **Mục tiêu cốt lõi:** Khi n nhỏ (~20): subset là state; cost O(2^n*n).
- **Tài liệu học / Template:** [https://usaco.guide/gold/dp-bitmasks](https://usaco.guide/gold/dp-bitmasks)
- **Template cần tự viết:** dp[mask], test/add bit, transition to mask|(1<<i).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Elevator Rides](https://cses.fi/problemset/task/1653) | https://cses.fi/problemset/task/1653 | H1 / H0 |
  | **D2 (Mixed)** | [Prime Multiples](https://cses.fi/problemset/task/2185) | https://cses.fi/problemset/task/2185 | H2 |
- **Phân bổ 120 phút:** 30' học + 60' D1 + 30' bitmask drill
- **Tiêu chí PASS hôm nay:** PASS nếu tự code bit operations và giải thích giới hạn n phù hợp.

#### Ngày 26: 2026-10-10 (Sat) — [PRACTICE] DP + prefix / optimization thinking
- **Mục tiêu cốt lõi:** Tập tìm bottleneck O(n²) và hỏi có prefix/min-structure giảm được không.
- **Tài liệu học / Template:** [https://usaco.guide/gold/intro-dp](https://usaco.guide/gold/intro-dp)
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Money Sums](https://cses.fi/problemset/task/1745) | https://cses.fi/problemset/task/1745 | H2 |
  | **D1 (Standard)** | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644) | https://cses.fi/problemset/task/1644 | H1 / H0 |
  | **D2 (Mixed)** | [Distinct Values Queries](https://cses.fi/problemset/task/1734) | https://cses.fi/problemset/task/1734 | H2 |
- **Phân bổ 120 phút:** 10' ôn + 50' D1 + 50' D2 + 10' review
- **Tiêu chí PASS hôm nay:** PASS nếu nêu được complexity naive và optimized trước code.

#### Ngày 27: 2026-10-11 (Sun) — [PRACTICE] DP reconstruction
- **Mục tiêu cốt lõi:** Không chỉ lấy giá trị; lưu parent/choice để in nghiệm.
- **Tài liệu học / Template:** [https://usaco.guide/gold/intro-dp](https://usaco.guide/gold/intro-dp)
- **Template cần tự viết:** parent[state] hoặc truy ngược từ dp table.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Longest Common Subsequence](https://cses.fi/problemset/task/3403) | https://cses.fi/problemset/task/3403 | H2 |
  | **D1 (Standard)** | [Longest Flight Route](https://cses.fi/problemset/task/1680) | https://cses.fi/problemset/task/1680 | H1 / H0 |
  | **D2 (Mixed)** | [Elevator Rides](https://cses.fi/problemset/task/1653) | https://cses.fi/problemset/task/1653 | H2 |
- **Phân bổ 120 phút:** 15' ôn + 50' D1 + 45' D2 + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu reconstruct được ít nhất 1 nghiệm mà không copy solution.

#### Ngày 28: 2026-10-12 (Mon) — [CHECKPOINT] DP checkpoint 2
- **Mục tiêu cốt lõi:** Bài không ghi DP; mục tiêu là recognition.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Projects](https://cses.fi/problemset/task/1140) | https://cses.fi/problemset/task/1140 | H1 / H0 |
  | **D2 (Mixed)** | [Elevator Rides](https://cses.fi/problemset/task/1653) | https://cses.fi/problemset/task/1653 | H2 |
- **Phân bổ 120 phút:** 120' no-hint first 90'
- **Tiêu chí PASS hôm nay:** PASS nếu 2 hướng đúng, trong đó ≥1 bài D2; AC không bắt buộc cả hai.


### 🏆 TUẦN W5

#### Ngày 29: 2026-10-13 (Tue) — [LEARN] GCD / divisors / factorization
- **Mục tiêu cốt lõi:** Nhìn constraints để chọn O(sqrt n), sieve hay factorization nhiều truy vấn.
- **Tài liệu học / Template:** [https://usaco.guide/gold/divisibility](https://usaco.guide/gold/divisibility)
- **Template cần tự viết:** gcd; loop p*p<=n factor; count divisors.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Counting Divisors](https://cses.fi/problemset/task/1713) | https://cses.fi/problemset/task/1713 | H2 |
  | **D1 (Standard)** | [Counting Divisors](https://cses.fi/problemset/task/1713) | https://cses.fi/problemset/task/1713 | H1 / H0 |
  | **D2 (Mixed)** | [OLP 2023 GCD](https://oj.vnoi.info/problem/olp_ct23_gcd) | https://oj.vnoi.info/problem/olp_ct23_gcd | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 40' D1 + 20' đọc subtask OLP
- **Tiêu chí PASS hôm nay:** PASS nếu tự factorization và nêu complexity.

#### Ngày 30: 2026-10-14 (Wed) — [LEARN] Fast power + modular arithmetic
- **Mục tiêu cốt lõi:** Exponent lớn → binary exponentiation; chuẩn hóa phép trừ mod.
- **Tài liệu học / Template:** [https://usaco.guide/gold/modular](https://usaco.guide/gold/modular)
- **Template cần tự viết:** powmod(a,b); mul long long; inverse Fermat khi mod prime.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Exponentiation](https://cses.fi/problemset/task/1095) | https://cses.fi/problemset/task/1095 | H2 |
  | **D1 (Standard)** | [Exponentiation](https://cses.fi/problemset/task/1095) | https://cses.fi/problemset/task/1095 | H1 / H0 |
  | **D2 (Mixed)** | [Fibonacci Numbers](https://cses.fi/problemset/task/1722) | https://cses.fi/problemset/task/1722 | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 25' re-code + 35' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu powmod tự viết ≤5' và biết điều kiện dùng Fermat inverse.

#### Ngày 31: 2026-10-15 (Thu) — [LEARN] Combinatorics nCk mod
- **Mục tiêu cốt lõi:** Precompute fact/invFact; biết Pascal vs factorial method.
- **Tài liệu học / Template:** [https://usaco.guide/gold/combo](https://usaco.guide/gold/combo)
- **Template cần tự viết:** fact[], invFact[], C(n,k).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Binomial Coefficients](https://cses.fi/problemset/task/1079) | https://cses.fi/problemset/task/1079 | H2 |
  | **D1 (Standard)** | [Binomial Coefficients](https://cses.fi/problemset/task/1079) | https://cses.fi/problemset/task/1079 | H1 / H0 |
  | **D2 (Mixed)** | [Prime Multiples](https://cses.fi/problemset/task/2185) | https://cses.fi/problemset/task/2185 | H2 |
- **Phân bổ 120 phút:** 30' học + 35' D0 + 25' re-code + 30' D2
- **Tiêu chí PASS hôm nay:** PASS nếu tự viết nCk và giải thích O(MAXN + q).

#### Ngày 32: 2026-10-16 (Fri) — [LEARN] Inclusion–Exclusion
- **Mục tiêu cốt lõi:** Đếm union bằng cộng-trừ; bitmask subset để chọn tập điều kiện.
- **Tài liệu học / Template:** [https://usaco.guide/gold/combo](https://usaco.guide/gold/combo)
- **Template cần tự viết:** for mask 1..(1<<k)-1; product/lcm; parity popcount.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Prime Multiples](https://cses.fi/problemset/task/2185) | https://cses.fi/problemset/task/2185 | H2 |
  | **D1 (Standard)** | [Prime Multiples](https://cses.fi/problemset/task/2185) | https://cses.fi/problemset/task/2185 | H1 / H0 |
  | **D2 (Mixed)** | [Counting Bits](https://cses.fi/problemset/task/1146) | https://cses.fi/problemset/task/1146 | H2 |
- **Phân bổ 120 phút:** 25' học + 45' D1 + 40' D2 + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu tự viết công thức PIE và xử lý overflow product.

#### Ngày 33: 2026-10-17 (Sat) — [LEARN] Bitwise core
- **Mục tiêu cốt lõi:** &,|,^,~, shifts; set/test/toggle; XOR prefix.
- **Tài liệu học / Template:** [https://usaco.guide/silver/intro-bitwise](https://usaco.guide/silver/intro-bitwise)
- **Template cần tự viết:** test/set/clear/toggle bit; xor prefix.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Range Xor Queries](https://cses.fi/problemset/task/1650) | https://cses.fi/problemset/task/1650 | H2 |
  | **D1 (Standard)** | [Counting Bits](https://cses.fi/problemset/task/1146) | https://cses.fi/problemset/task/1146 | H1 / H0 |
  | **D2 (Mixed)** | [Maximum Xor Subarray](https://cses.fi/problemset/task/1655) | https://cses.fi/problemset/task/1655 | H2 |
- **Phân bổ 120 phút:** 25' học + 30' D0 + 35' D1 + 30' D2 analysis
- **Tiêu chí PASS hôm nay:** PASS nếu thao tác bit không nhìn template; D2 nhận ra cần cấu trúc mạnh hơn.

#### Ngày 34: 2026-10-18 (Sun) — [LEARN] Bitmask enumeration
- **Mục tiêu cốt lõi:** Duyệt mask/submask, popcount; phân tích O(2^n n), O(3^n).
- **Tài liệu học / Template:** [https://usaco.guide/gold/dp-bitmasks](https://usaco.guide/gold/dp-bitmasks)
- **Template cần tự viết:** for mask; for sub=(mask-1)&mask.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Elevator Rides](https://cses.fi/problemset/task/1653) | https://cses.fi/problemset/task/1653 | H1 / H0 |
  | **D2 (Mixed)** | [Prime Multiples](https://cses.fi/problemset/task/2185) | https://cses.fi/problemset/task/2185 | H2 |
- **Phân bổ 120 phút:** 20' học + 55' D1 + 35' compare + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu tự nêu giới hạn n ~20 và không TLE do 2^n vô ý.

#### Ngày 35: 2026-10-19 (Mon) — [CHECKPOINT] Math + bit mixed
- **Mục tiêu cốt lõi:** Không biết trước bài là number theory hay bitwise.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Counting Divisors](https://cses.fi/problemset/task/1713) | https://cses.fi/problemset/task/1713 | H2 |
  | **D1 (Standard)** | [Prime Multiples](https://cses.fi/problemset/task/2185) | https://cses.fi/problemset/task/2185 | H1 / H0 |
  | **D2 (Mixed)** | [Maximum Xor Subarray](https://cses.fi/problemset/task/1655) | https://cses.fi/problemset/task/1655 | H2 |
- **Phân bổ 120 phút:** 120' mixed
- **Tiêu chí PASS hôm nay:** PASS nếu ≥2 recognition đúng, ≥1 AC0 D1/D2, không H3 trước phút 90.


### 🏆 TUẦN W6

#### Ngày 36: 2026-10-20 (Tue) — [LEARN] Graph representation + DFS
- **Mục tiêu cốt lõi:** Adj list, visited, connected component; recursion depth awareness.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** vector<vector<int>> adj; dfs(u).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Counting Rooms](https://cses.fi/problemset/task/1192) | https://cses.fi/problemset/task/1192 | H2 |
  | **D1 (Standard)** | [Counting Rooms](https://cses.fi/problemset/task/1192) | https://cses.fi/problemset/task/1192 | H1 / H0 |
  | **D2 (Mixed)** | [Labyrinth](https://cses.fi/problemset/task/1193) | https://cses.fi/problemset/task/1193 | H2 |
- **Phân bổ 120 phút:** 20' học + 30' D0 + 35' D1 + 35' D2
- **Tiêu chí PASS hôm nay:** PASS nếu DFS tự viết và giải được component/grid không xem solution.

#### Ngày 37: 2026-10-21 (Wed) — [LEARN] BFS shortest path
- **Mục tiêu cốt lõi:** Unweighted shortest path + parent reconstruction.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** queue<int>; dist=-1; parent; reconstruct.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Message Route](https://cses.fi/problemset/task/1667) | https://cses.fi/problemset/task/1667 | H2 |
  | **D1 (Standard)** | [Labyrinth](https://cses.fi/problemset/task/1193) | https://cses.fi/problemset/task/1193 | H1 / H0 |
  | **D2 (Mixed)** | [Monsters](https://cses.fi/problemset/task/1194) | https://cses.fi/problemset/task/1194 | H2 |
- **Phân bổ 120 phút:** 20' học + 35' D0 + 35' D1 + 30' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu biết lúc nào BFS đảm bảo shortest path.

#### Ngày 38: 2026-10-22 (Thu) — [PRACTICE] Multi-source BFS / state BFS
- **Mục tiêu cốt lõi:** Nhiều nguồn cùng lúc; so sánh thời gian đến của monster và player.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Labyrinth](https://cses.fi/problemset/task/1193) | https://cses.fi/problemset/task/1193 | H2 |
  | **D1 (Standard)** | [Monsters](https://cses.fi/problemset/task/1194) | https://cses.fi/problemset/task/1194 | H1 / H0 |
  | **D2 (Mixed)** | [Counting Rooms](https://cses.fi/problemset/task/1192) | https://cses.fi/problemset/task/1192 | H2 |
- **Phân bổ 120 phút:** 10' ôn + 65' D2 + 35' retry + 10' review
- **Tiêu chí PASS hôm nay:** PASS nếu Monsters model đúng 2 dist arrays trước hint.

#### Ngày 39: 2026-10-23 (Fri) — [LEARN] DSU
- **Mục tiêu cốt lõi:** Dynamic connectivity, union/find; path compression + union by size.
- **Tài liệu học / Template:** [https://usaco.guide/gold/dsu](https://usaco.guide/gold/dsu)
- **Template cần tự viết:** parent[], sz[], find(), unite().
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Road Construction](https://cses.fi/problemset/task/1676) | https://cses.fi/problemset/task/1676 | H2 |
  | **D1 (Standard)** | [Road Construction](https://cses.fi/problemset/task/1676) | https://cses.fi/problemset/task/1676 | H1 / H0 |
  | **D2 (Mixed)** | [Road Reparation](https://cses.fi/problemset/task/1675) | https://cses.fi/problemset/task/1675 | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 30' D1 + 30' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu DSU tự code ≤8' và giải thích α(n) gần hằng.

#### Ngày 40: 2026-10-24 (Sat) — [LEARN] Dijkstra
- **Mục tiêu cốt lõi:** Graph weighted non-negative; priority_queue min-heap; stale entry.
- **Tài liệu học / Template:** [https://usaco.guide/gold/shortest-paths](https://usaco.guide/gold/shortest-paths)
- **Template cần tự viết:** dist=INF; pq<pair<dist,u>,...,greater<>>; if(d!=dist[u]) continue.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Shortest Routes I](https://cses.fi/problemset/task/1671) | https://cses.fi/problemset/task/1671 | H2 |
  | **D1 (Standard)** | [Shortest Routes I](https://cses.fi/problemset/task/1671) | https://cses.fi/problemset/task/1671 | H1 / H0 |
  | **D2 (Mixed)** | [Investigation](https://cses.fi/problemset/task/1202) | https://cses.fi/problemset/task/1202 | H2 |
- **Phân bổ 120 phút:** 30' học + 35' D0 + 45' D2 + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu Dijkstra tự code ≤12' và biết tại sao negative edge phá nó.

#### Ngày 41: 2026-10-25 (Sun) — [PRACTICE] Dijkstra + DP info
- **Mục tiêu cốt lõi:** Ngoài distance còn đếm số đường/min-max edges trên shortest path.
- **Tài liệu học / Template:** [https://usaco.guide/gold/shortest-paths](https://usaco.guide/gold/shortest-paths)
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Shortest Routes I](https://cses.fi/problemset/task/1671) | https://cses.fi/problemset/task/1671 | H2 |
  | **D1 (Standard)** | [Investigation](https://cses.fi/problemset/task/1202) | https://cses.fi/problemset/task/1202 | H1 / H0 |
  | **D2 (Mixed)** | [OLP 2022 Road](https://oj.vnoi.info/problem/olp_ct22_roadimpro) | https://oj.vnoi.info/problem/olp_ct22_roadimpro | H2 |
- **Phân bổ 120 phút:** 10' ôn + 55' D1/D2 + 45' đọc subtask OLP + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu Investigation có state bổ sung đúng hoặc OLP road nhận ra Dijkstra+DP.

#### Ngày 42: 2026-10-26 (Mon) — [CHECKPOINT] Graph basics mixed
- **Mục tiêu cốt lõi:** DFS/BFS/DSU/Dijkstra không tag.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Message Route](https://cses.fi/problemset/task/1667) | https://cses.fi/problemset/task/1667 | H2 |
  | **D1 (Standard)** | [Road Construction](https://cses.fi/problemset/task/1676) | https://cses.fi/problemset/task/1676 | H1 / H0 |
  | **D2 (Mixed)** | [Investigation](https://cses.fi/problemset/task/1202) | https://cses.fi/problemset/task/1202 | H2 |
- **Phân bổ 120 phút:** 120' mixed
- **Tiêu chí PASS hôm nay:** PASS nếu ≥2 bài có đúng algorithm + complexity trước hint; ≥1 AC0.


### 🏆 TUẦN W7

#### Ngày 43: 2026-10-27 (Tue) — [LEARN] Topological sort
- **Mục tiêu cốt lõi:** DAG ordering; Kahn indegree vs DFS; detect cycle.
- **Tài liệu học / Template:** [https://usaco.guide/gold/toposort?lang=cpp](https://usaco.guide/gold/toposort?lang=cpp)
- **Template cần tự viết:** indegree; queue zero; order size==n.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Course Schedule](https://cses.fi/problemset/task/1679) | https://cses.fi/problemset/task/1679 | H2 |
  | **D1 (Standard)** | [Course Schedule](https://cses.fi/problemset/task/1679) | https://cses.fi/problemset/task/1679 | H1 / H0 |
  | **D2 (Mixed)** | [Longest Flight Route](https://cses.fi/problemset/task/1680) | https://cses.fi/problemset/task/1680 | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 50' D2 + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu topo tự code và detect cycle đúng.

#### Ngày 44: 2026-10-28 (Wed) — [LEARN] DAG DP
- **Mục tiêu cốt lõi:** Topo + DP; longest/count paths theo thứ tự topo.
- **Tài liệu học / Template:** [https://usaco.guide/gold/toposort?lang=cpp](https://usaco.guide/gold/toposort?lang=cpp)
- **Template cần tự viết:** dp[v] update từ u theo topo + parent.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Longest Flight Route](https://cses.fi/problemset/task/1680) | https://cses.fi/problemset/task/1680 | H2 |
  | **D1 (Standard)** | [Longest Flight Route](https://cses.fi/problemset/task/1680) | https://cses.fi/problemset/task/1680 | H1 / H0 |
  | **D2 (Mixed)** | [Projects](https://cses.fi/problemset/task/1140) | https://cses.fi/problemset/task/1140 | H2 |
- **Phân bổ 120 phút:** 15' ôn + 55' D1 + 40' compare DP patterns
- **Tiêu chí PASS hôm nay:** PASS nếu Longest Flight Route AC0/≤H1.

#### Ngày 45: 2026-10-29 (Thu) — [LEARN] MST Kruskal
- **Mục tiêu cốt lõi:** Sort edge + DSU; nhận bài 'connect all with min total cost'.
- **Tài liệu học / Template:** [https://usaco.guide/gold/mst](https://usaco.guide/gold/mst)
- **Template cần tự viết:** sort edges by w; unite; cnt=n-1.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Road Reparation](https://cses.fi/problemset/task/1675) | https://cses.fi/problemset/task/1675 | H2 |
  | **D1 (Standard)** | [Road Reparation](https://cses.fi/problemset/task/1675) | https://cses.fi/problemset/task/1675 | H1 / H0 |
  | **D2 (Mixed)** | [OLP 2023 Runroad](https://oj.vnoi.info/problem/olp_ct23_runroad) | https://oj.vnoi.info/problem/olp_ct23_runroad | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 35' D1 + 25' OLP read
- **Tiêu chí PASS hôm nay:** PASS nếu tự proof greedy cut intuition cơ bản.

#### Ngày 46: 2026-10-30 (Fri) — [LEARN] Tree DFS: parent/depth/subtree
- **Mục tiêu cốt lõi:** Tree = graph n-1 no cycle; root hóa để biến thành hierarchy.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** dfs(u,p); sub[u]=1+Σsub[v]; depth[v].
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Subordinates](https://cses.fi/problemset/task/1674) | https://cses.fi/problemset/task/1674 | H2 |
  | **D1 (Standard)** | [Tree Diameter](https://cses.fi/problemset/task/1131) | https://cses.fi/problemset/task/1131 | H1 / H0 |
  | **D2 (Mixed)** | [Subtree Queries](https://cses.fi/problemset/task/1137) | https://cses.fi/problemset/task/1137 | H2 |
- **Phân bổ 120 phút:** 20' học + 35' D0 + 40' D1 + 25' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu tự viết subtree size và hiểu Euler flatten idea sơ bộ.

#### Ngày 47: 2026-10-31 (Sat) — [LEARN] Binary lifting
- **Mục tiêu cốt lõi:** 2^j ancestor; preprocess O(n log n), query O(log n).
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** up[v][j]=up[up[v][j-1]][j-1].
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Company Queries I](https://cses.fi/problemset/task/1687) | https://cses.fi/problemset/task/1687 | H2 |
  | **D1 (Standard)** | [Company Queries I](https://cses.fi/problemset/task/1687) | https://cses.fi/problemset/task/1687 | H1 / H0 |
  | **D2 (Mixed)** | [Subtree Queries](https://cses.fi/problemset/task/1137) | https://cses.fi/problemset/task/1137 | H2 |
- **Phân bổ 120 phút:** 30' học + 45' D1 + 35' D2 model + 10' review
- **Tiêu chí PASS hôm nay:** PASS nếu tự xây bảng up và giải thích bit decomposition k.

#### Ngày 48: 2026-11-01 (Sun) — [PRACTICE] Tree + data structure bridge
- **Mục tiêu cốt lõi:** Euler tour biến subtree thành đoạn; chuẩn bị cho Fenwick.
- **Tài liệu học / Template:** [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS)
- **Template cần tự viết:** tin/tout; subtree = [tin, tout].
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Subordinates](https://cses.fi/problemset/task/1674) | https://cses.fi/problemset/task/1674 | H2 |
  | **D1 (Standard)** | [Subtree Queries](https://cses.fi/problemset/task/1137) | https://cses.fi/problemset/task/1137 | H1 / H0 |
  | **D2 (Mixed)** | [Distinct Values Queries](https://cses.fi/problemset/task/1734) | https://cses.fi/problemset/task/1734 | H2 |
- **Phân bổ 120 phút:** 15' học bridge + 60' D2 + 35' analysis + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu tự nêu được tại sao subtree thành contiguous interval.

#### Ngày 49: 2026-11-02 (Mon) — [CHECKPOINT] Graph/tree checkpoint
- **Mục tiêu cốt lõi:** No tags. Ưu tiên recognition hơn farm easy.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Tree Diameter](https://cses.fi/problemset/task/1131) | https://cses.fi/problemset/task/1131 | H2 |
  | **D1 (Standard)** | [Longest Flight Route](https://cses.fi/problemset/task/1680) | https://cses.fi/problemset/task/1680 | H1 / H0 |
  | **D2 (Mixed)** | [Investigation](https://cses.fi/problemset/task/1202) | https://cses.fi/problemset/task/1202 | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu ≥1 D2 AC0 hoặc 2 bài recognition đúng + code gần hoàn chỉnh.


### 🏆 TUẦN W8

#### Ngày 50: 2026-11-03 (Tue) — [LEARN] Fenwick Tree
- **Mục tiêu cốt lõi:** Point update + prefix/range sum; lowbit.
- **Tài liệu học / Template:** [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS)
- **Template cần tự viết:** add(i,delta); sum(i); range=sum(r)-sum(l-1).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648) | https://cses.fi/problemset/task/1648 | H2 |
  | **D1 (Standard)** | [Dynamic Range Sum Queries](https://cses.fi/problemset/task/1648) | https://cses.fi/problemset/task/1648 | H1 / H0 |
  | **D2 (Mixed)** | [Salary Queries](https://cses.fi/problemset/task/1144) | https://cses.fi/problemset/task/1144 | H2 |
- **Phân bổ 120 phút:** 30' học + 35' D0 + 35' re-code + 20' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu BIT tự code ≤10' không nhìn.

#### Ngày 51: 2026-11-04 (Wed) — [PRACTICE] Fenwick + compression
- **Mục tiêu cốt lõi:** Giá trị lớn → compress; frequency/prefix count.
- **Tài liệu học / Template:** [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS)
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Salary Queries](https://cses.fi/problemset/task/1144) | https://cses.fi/problemset/task/1144 | H2 |
  | **D1 (Standard)** | [List Removals](https://cses.fi/problemset/task/1749) | https://cses.fi/problemset/task/1749 | H1 / H0 |
  | **D2 (Mixed)** | [Distinct Values Queries](https://cses.fi/problemset/task/1734) | https://cses.fi/problemset/task/1734 | H2 |
- **Phân bổ 120 phút:** 15' ôn + 45' D1 + 45' D2 + 15' note
- **Tiêu chí PASS hôm nay:** PASS nếu tự chỉ ra query BIT cần lưu 'count' hay 'sum'.

#### Ngày 52: 2026-11-05 (Thu) — [LEARN] Segment Tree basic
- **Mục tiêu cốt lõi:** Associative range query + point update; khi BIT không đủ.
- **Tài liệu học / Template:** [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS)
- **Template cần tự viết:** iterative segtree set/query hoặc recursive build/update/query.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Dynamic Range Minimum Queries](https://cses.fi/problemset/task/1649) | https://cses.fi/problemset/task/1649 | H2 |
  | **D1 (Standard)** | [Dynamic Range Minimum Queries](https://cses.fi/problemset/task/1649) | https://cses.fi/problemset/task/1649 | H1 / H0 |
  | **D2 (Mixed)** | [Hotel Queries](https://cses.fi/problemset/task/1143) | https://cses.fi/problemset/task/1143 | H2 |
- **Phân bổ 120 phút:** 30' học + 35' D0 + 40' D1 + 15' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu segtree tự code base query min.

#### Ngày 53: 2026-11-06 (Fri) — [PRACTICE] Segment tree search
- **Mục tiêu cốt lõi:** Tree lưu max để tìm vị trí đầu tiên thỏa ≥x.
- **Tài liệu học / Template:** [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS)
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Hotel Queries](https://cses.fi/problemset/task/1143) | https://cses.fi/problemset/task/1143 | H2 |
  | **D1 (Standard)** | [Prefix Sum Queries](https://cses.fi/problemset/task/2166) | https://cses.fi/problemset/task/2166 | H1 / H0 |
  | **D2 (Mixed)** | [List Removals](https://cses.fi/problemset/task/1749) | https://cses.fi/problemset/task/1749 | H2 |
- **Phân bổ 120 phút:** 15' ôn + 50' D1 + 45' D2 + 10' review
- **Tiêu chí PASS hôm nay:** PASS nếu hiểu cách descend tree, không binary search O(log²) một cách mù.

#### Ngày 54: 2026-11-07 (Sat) — [LEARN] Difference + Fenwick range update
- **Mục tiêu cốt lõi:** Range add / point query; difference array động.
- **Tài liệu học / Template:** [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS)
- **Template cần tự viết:** add(l,+v), add(r+1,-v); value(k)=prefix(k).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Range Update Queries](https://cses.fi/problemset/task/1651) | https://cses.fi/problemset/task/1651 | H2 |
  | **D1 (Standard)** | [Range Update Queries](https://cses.fi/problemset/task/1651) | https://cses.fi/problemset/task/1651 | H1 / H0 |
  | **D2 (Mixed)** | [Forest Queries II](https://cses.fi/problemset/task/1739) | https://cses.fi/problemset/task/1739 | H2 |
- **Phân bổ 120 phút:** 20' học + 35' D0 + 35' D1 + 30' D2 model
- **Tiêu chí PASS hôm nay:** PASS nếu tự derive từ difference array.

#### Ngày 55: 2026-11-08 (Sun) — [PRACTICE] Offline queries
- **Mục tiêu cốt lõi:** Sort queries / last occurrence + Fenwick; tư duy đổi thứ tự xử lý.
- **Tài liệu học / Template:** [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS)
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Distinct Values Queries](https://cses.fi/problemset/task/1734) | https://cses.fi/problemset/task/1734 | H2 |
  | **D1 (Standard)** | [Subtree Queries](https://cses.fi/problemset/task/1137) | https://cses.fi/problemset/task/1137 | H1 / H0 |
  | **D2 (Mixed)** | [Salary Queries](https://cses.fi/problemset/task/1144) | https://cses.fi/problemset/task/1144 | H2 |
- **Phân bổ 120 phút:** 15' concept + 60' D2 + 35' second model + 10' note
- **Tiêu chí PASS hôm nay:** PASS nếu viết được invariant offline: tại thời điểm r, BIT đang đại diện cái gì.

#### Ngày 56: 2026-11-09 (Mon) — [CHECKPOINT] Range DS checkpoint
- **Mục tiêu cốt lõi:** Fenwick/segment/offline mixed, không xem tag.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [List Removals](https://cses.fi/problemset/task/1749) | https://cses.fi/problemset/task/1749 | H2 |
  | **D1 (Standard)** | [Salary Queries](https://cses.fi/problemset/task/1144) | https://cses.fi/problemset/task/1144 | H1 / H0 |
  | **D2 (Mixed)** | [Prefix Sum Queries](https://cses.fi/problemset/task/2166) | https://cses.fi/problemset/task/2166 | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu ≥2 recognition đúng và ≥1 AC0; template BIT/seg không được mở.


### 🏆 TUẦN W9

#### Ngày 57: 2026-11-10 (Tue) — [LEARN] String hashing
- **Mục tiêu cốt lõi:** Prefix polynomial hash; substring equality; collision awareness.
- **Tài liệu học / Template:** [https://usaco.guide/gold/hashing](https://usaco.guide/gold/hashing)
- **Template cần tự viết:** powB[], h[]; get(l,r).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [String Matching](https://cses.fi/problemset/task/1753) | https://cses.fi/problemset/task/1753 | H1 / H0 |
  | **D2 (Mixed)** | [Finding Borders](https://cses.fi/problemset/task/1732) | https://cses.fi/problemset/task/1732 | H2 |
- **Phân bổ 120 phút:** 30' học + 35' D1 + 40' D2 + 15' note
- **Tiêu chí PASS hôm nay:** PASS nếu tự derive get(l,r), không chỉ copy.

#### Ngày 58: 2026-11-11 (Wed) — [LEARN] KMP prefix function
- **Mục tiêu cốt lõi:** π[i]=longest proper prefix=suffix ending i; failure links.
- **Tài liệu học / Template:** [https://usaco.guide/adv/string-search](https://usaco.guide/adv/string-search)
- **Template cần tự viết:** prefix_function(s); pattern#text.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [String Matching](https://cses.fi/problemset/task/1753) | https://cses.fi/problemset/task/1753 | H2 |
  | **D1 (Standard)** | [Finding Borders](https://cses.fi/problemset/task/1732) | https://cses.fi/problemset/task/1732 | H1 / H0 |
  | **D2 (Mixed)** | [String Functions](https://cses.fi/problemset/task/2107) | https://cses.fi/problemset/task/2107 | H2 |
- **Phân bổ 120 phút:** 30' học + 35' D0 + 35' D1 + 20' D2
- **Tiêu chí PASS hôm nay:** PASS nếu prefix function tự code ≤12'.

#### Ngày 59: 2026-11-12 (Thu) — [LEARN] Z-function
- **Mục tiêu cốt lõi:** Z[i]=LCP(s, s[i..]); [l,r] window.
- **Tài liệu học / Template:** [https://usaco.guide/adv/string-search](https://usaco.guide/adv/string-search)
- **Template cần tự viết:** z_function(s).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Finding Periods](https://cses.fi/problemset/task/1733) | https://cses.fi/problemset/task/1733 | H2 |
  | **D1 (Standard)** | [Finding Periods](https://cses.fi/problemset/task/1733) | https://cses.fi/problemset/task/1733 | H1 / H0 |
  | **D2 (Mixed)** | [String Functions](https://cses.fi/problemset/task/2107) | https://cses.fi/problemset/task/2107 | H2 |
- **Phân bổ 120 phút:** 25' học + 35' D0 + 35' D1 + 25' compare KMP/Z
- **Tiêu chí PASS hôm nay:** PASS nếu nói được khi dùng Z dễ hơn prefix function.

#### Ngày 60: 2026-11-13 (Fri) — [LEARN] Constructive thinking
- **Mục tiêu cốt lõi:** Không tìm giá trị tối ưu; xây một cấu hình hợp lệ từ invariant/parity.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** Checklist: invariant? parity? build backwards? greedy construction?
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D1 (Standard)** | [Inverse Inversions](https://cses.fi/problemset/task/2214) | https://cses.fi/problemset/task/2214 | H1 / H0 |
  | **D2 (Mixed)** | [Chess Tournament](https://cses.fi/problemset/task/1697) | https://cses.fi/problemset/task/1697 | H2 |
- **Phân bổ 120 phút:** 20' concept + 45' D1 + 45' D2 + 10' proof
- **Tiêu chí PASS hôm nay:** PASS nếu có construction + proof; brute farm không tính.

#### Ngày 61: 2026-11-14 (Sat) — [LEARN] Geometry: cross product
- **Mục tiêu cốt lõi:** Orientation LEFT/RIGHT/TOUCH; tránh double khi có thể.
- **Tài liệu học / Template:** [https://wiki.vnoi.info/algo/geometry/basic-geometry-3](https://wiki.vnoi.info/algo/geometry/basic-geometry-3)
- **Template cần tự viết:** Point; cross(a,b,c) = (b-a)x(c-a).
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Point Location Test](https://cses.fi/problemset/task/2189) | https://cses.fi/problemset/task/2189 | H2 |
  | **D1 (Standard)** | [Line Segment Intersection](https://cses.fi/problemset/task/2190) | https://cses.fi/problemset/task/2190 | H1 / H0 |
  | **D2 (Mixed)** | [Polygon Area](https://cses.fi/problemset/task/2191) | https://cses.fi/problemset/task/2191 | H2 |
- **Phân bổ 120 phút:** 25' học + 30' D0 + 35' D1 + 30' D2
- **Tiêu chí PASS hôm nay:** PASS nếu cross/orientation tự code và xử lý collinear.

#### Ngày 62: 2026-11-15 (Sun) — [PRACTICE] Geometry + prefix/observation
- **Mục tiêu cốt lõi:** Shoelace/cross; tập ghép hình học với prefix/combinatorics.
- **Tài liệu học / Template:** [https://wiki.vnoi.info/algo/geometry/basic-geometry-3](https://wiki.vnoi.info/algo/geometry/basic-geometry-3)
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Polygon Area](https://cses.fi/problemset/task/2191) | https://cses.fi/problemset/task/2191 | H2 |
  | **D1 (Standard)** | [Line Segment Intersection](https://cses.fi/problemset/task/2190) | https://cses.fi/problemset/task/2190 | H1 / H0 |
  | **D2 (Mixed)** | [OLP 2023 Runroad](https://oj.vnoi.info/problem/olp_ct23_runroad) | https://oj.vnoi.info/problem/olp_ct23_runroad | H2 |
- **Phân bổ 120 phút:** 15' ôn + 40' D1 + 40' D2 + 25' OLP observation
- **Tiêu chí PASS hôm nay:** PASS nếu Polygon Area AC0 và segment intersection casework đủ.

#### Ngày 63: 2026-11-16 (Mon) — [CHECKPOINT] String/constructive/geo mixed
- **Mục tiêu cốt lõi:** Không mở template 90' đầu.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Finding Borders](https://cses.fi/problemset/task/1732) | https://cses.fi/problemset/task/1732 | H2 |
  | **D1 (Standard)** | [Inverse Inversions](https://cses.fi/problemset/task/2214) | https://cses.fi/problemset/task/2214 | H1 / H0 |
  | **D2 (Mixed)** | [Line Segment Intersection](https://cses.fi/problemset/task/2190) | https://cses.fi/problemset/task/2190 | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu ≥2 recognition đúng và ≥1 bài non-template (constructive/geo) tiến triển rõ.


### 🏆 TUẦN W10

#### Ngày 64: 2026-11-17 (Tue) — [MIXED] Prefix + map + window
- **Mục tiêu cốt lõi:** Không học mới; bài yêu cầu chọn giữa window và prefix+map.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Subarray Sums I](https://cses.fi/problemset/task/1660) | https://cses.fi/problemset/task/1660 | H2 |
  | **D1 (Standard)** | [Subarray Sums II](https://cses.fi/problemset/task/1661) | https://cses.fi/problemset/task/1661 | H1 / H0 |
  | **D2 (Mixed)** | [Distinct Values Subarrays](https://cses.fi/problemset/task/3420) | https://cses.fi/problemset/task/3420 | H2 |
- **Phân bổ 120 phút:** 120' 3 bài time-box 30/40/50
- **Tiêu chí PASS hôm nay:** PASS nếu tự phân biệt vì sao negative values làm sliding-window sum thất bại.

#### Ngày 65: 2026-11-18 (Wed) — [MIXED] BS + greedy
- **Mục tiêu cốt lõi:** Nhìn monotonic answer + check greedy.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Factory Machines](https://cses.fi/problemset/task/1620) | https://cses.fi/problemset/task/1620 | H2 |
  | **D1 (Standard)** | [Array Division](https://cses.fi/problemset/task/1085) | https://cses.fi/problemset/task/1085 | H1 / H0 |
  | **D2 (Mixed)** | [Movie Festival II](https://cses.fi/problemset/task/1632) | https://cses.fi/problemset/task/1632 | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu D2 check(mid) đúng + complexity O(n log V).

#### Ngày 66: 2026-11-19 (Thu) — [MIXED] DP + binary search
- **Mục tiêu cốt lõi:** Weighted intervals / LIS: DP không đứng một mình.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Increasing Subsequence](https://cses.fi/problemset/task/1145) | https://cses.fi/problemset/task/1145 | H2 |
  | **D1 (Standard)** | [Projects](https://cses.fi/problemset/task/1140) | https://cses.fi/problemset/task/1140 | H1 / H0 |
  | **D2 (Mixed)** | [Maximum Subarray Sum II](https://cses.fi/problemset/task/1644) | https://cses.fi/problemset/task/1644 | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu Projects AC0/≤H1 hoặc LIS tự giải lại ≤25'.

#### Ngày 67: 2026-11-20 (Fri) — [MIXED] Graph + DP
- **Mục tiêu cốt lõi:** Topo/Dijkstra mang theo state; không chỉ shortest path thuần.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Longest Flight Route](https://cses.fi/problemset/task/1680) | https://cses.fi/problemset/task/1680 | H2 |
  | **D1 (Standard)** | [Investigation](https://cses.fi/problemset/task/1202) | https://cses.fi/problemset/task/1202 | H1 / H0 |
  | **D2 (Mixed)** | [OLP 2022 Road](https://oj.vnoi.info/problem/olp_ct22_roadimpro) | https://oj.vnoi.info/problem/olp_ct22_roadimpro | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu 2/3 recognition đúng, một bài code hoàn chỉnh.

#### Ngày 68: 2026-11-21 (Sat) — [MIXED] Fenwick + compression/offline
- **Mục tiêu cốt lõi:** Không mở template BIT; tự chọn thứ BIT lưu.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Salary Queries](https://cses.fi/problemset/task/1144) | https://cses.fi/problemset/task/1144 | H2 |
  | **D1 (Standard)** | [Distinct Values Queries](https://cses.fi/problemset/task/1734) | https://cses.fi/problemset/task/1734 | H1 / H0 |
  | **D2 (Mixed)** | [Subtree Queries](https://cses.fi/problemset/task/1137) | https://cses.fi/problemset/task/1137 | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu ≥1 D2 AC0 và BIT code từ memory.

#### Ngày 69: 2026-11-22 (Sun) — [MIXED] Math + bitwise
- **Mục tiêu cốt lõi:** PIE/XOR/mod; ưu tiên observation.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Prime Multiples](https://cses.fi/problemset/task/2185) | https://cses.fi/problemset/task/2185 | H2 |
  | **D1 (Standard)** | [Counting Bits](https://cses.fi/problemset/task/1146) | https://cses.fi/problemset/task/1146 | H1 / H0 |
  | **D2 (Mixed)** | [OLP 2023 GCD](https://oj.vnoi.info/problem/olp_ct23_gcd) | https://oj.vnoi.info/problem/olp_ct23_gcd | H2 |
- **Phân bổ 120 phút:** 120'
- **Tiêu chí PASS hôm nay:** PASS nếu không H3 và viết được proof/derivation trước code.

#### Ngày 70: 2026-11-23 (Mon) — [CHECKPOINT] Mini contest 2h
- **Mục tiêu cốt lõi:** 3 bài không tag; chiến thuật chọn bài + subtask.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D0 (Learn)** | [Reading Books](https://cses.fi/problemset/task/1631) | https://cses.fi/problemset/task/1631 | H2 |
  | **D1 (Standard)** | [Projects](https://cses.fi/problemset/task/1140) | https://cses.fi/problemset/task/1140 | H1 / H0 |
  | **D2 (Mixed)** | [Investigation](https://cses.fi/problemset/task/1202) | https://cses.fi/problemset/task/1202 | H2 |
- **Phân bổ 120 phút:** 120' contest, không tài liệu
- **Tiêu chí PASS hôm nay:** PASS nếu đọc cả 3 ≤12', chọn đúng thứ tự, ≥1 AC0 + ≥1 partial/idea đúng.


### 🏆 TUẦN W11

#### Ngày 71: 2026-11-24 (Tue) — [OLP] OLP 2022 reconnaissance
- **Mục tiêu cốt lõi:** Đọc full set 20'; xếp A/B/C; tìm subtask trước full.
- **Template cần tự viết:** Không xem tag/editorial. Ghi constraint → brute → subtask.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2022 Digits](https://oj.vnoi.info/problem/olp_ct22_digits) | https://oj.vnoi.info/problem/olp_ct22_digits | H2 |
- **Phân bổ 120 phút:** 120': 20' scan set + 100' đánh 1 bài
- **Tiêu chí PASS hôm nay:** PASS nếu xác định được subtask kiếm điểm và có submission/solution partial.

#### Ngày 72: 2026-11-25 (Wed) — [OLP] OLP 2022 continue
- **Mục tiêu cốt lõi:** Tấn công bài khác, ưu tiên điểm dễ chứ không cố bài hôm qua.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2022 Road](https://oj.vnoi.info/problem/olp_ct22_roadimpro) | https://oj.vnoi.info/problem/olp_ct22_roadimpro | H2 |
- **Phân bổ 120 phút:** 120' OLP mode
- **Tiêu chí PASS hôm nay:** PASS nếu sau 15' có plan; sau 60' nếu full bế tắc phải chuyển sang subtask.

#### Ngày 73: 2026-11-26 (Thu) — [REVIEW] Chữa OLP 2022
- **Mục tiêu cốt lõi:** So idea với editorial/accepted solution sau khi đã tự làm; viết mistake log.
- **Template cần tự viết:** Viết 3 dòng: missed observation / missing algo / implementation.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
- **Phân bổ 120 phút:** 60' review + 60' re-code một subtask/full
- **Tiêu chí PASS hôm nay:** PASS nếu re-code lại được phần đã học mà không nhìn.

#### Ngày 74: 2026-11-27 (Fri) — [OLP] OLP 2023 reconnaissance
- **Mục tiêu cốt lõi:** Đọc 4 bài; chọn bài dựa trên điểm có thể ăn.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2023 GCD](https://oj.vnoi.info/problem/olp_ct23_gcd) | https://oj.vnoi.info/problem/olp_ct23_gcd | H2 |
- **Phân bổ 120 phút:** 120': scan + attack
- **Tiêu chí PASS hôm nay:** PASS nếu ghi rõ ít nhất 2 subtask khả thi dù chưa full.

#### Ngày 75: 2026-11-28 (Sat) — [OLP] OLP 2023 second attack
- **Mục tiêu cốt lõi:** Chọn bài khác với hôm qua; luyện switch bài đúng lúc.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2023 Runroad](https://oj.vnoi.info/problem/olp_ct23_runroad) | https://oj.vnoi.info/problem/olp_ct23_runroad | H2 |
- **Phân bổ 120 phút:** 120' OLP mode
- **Tiêu chí PASS hôm nay:** PASS nếu không ngồi >60' vô hướng; phải có quyết định switch có lý do.

#### Ngày 76: 2026-11-29 (Sun) — [REVIEW] Chữa OLP 2023
- **Mục tiêu cốt lõi:** Đọc solution chỉ cho bài đã attempt; bổ sung template/pattern bị thiếu.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
- **Phân bổ 120 phút:** 60' review + 60' re-solve
- **Tiêu chí PASS hôm nay:** PASS nếu mistake log chỉ ra nguyên nhân cụ thể, không ghi 'không nghĩ ra'.

#### Ngày 77: 2026-11-30 (Mon) — [CHECKPOINT] OLP partial-score test
- **Mục tiêu cốt lõi:** Lấy lại 2 bài 2022/23 chưa full, 2h kiếm điểm tối đa.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2023 set](https://oj.vnoi.info/contest/olp_ct23) | https://oj.vnoi.info/contest/olp_ct23 | H2 |
- **Phân bổ 120 phút:** 120' OI scoring
- **Tiêu chí PASS hôm nay:** PASS nếu tăng điểm so với attempt cũ hoặc có thêm 1 subtask AC.


### 🏆 TUẦN W12

#### Ngày 78: 2026-12-01 (Tue) — [FULL MOCK] OLP 2024 FULL MOCK
- **Mục tiêu cốt lõi:** GIỮ UNSEEN tới hôm nay. Thi đúng format; không tài liệu.
- **Template cần tự viết:** 3 giờ ngoại lệ — mô phỏng thi thật.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2024 set](https://oj.vnoi.info/contest/olp_ct24) | https://oj.vnoi.info/contest/olp_ct24 | H2 |
- **Phân bổ 120 phút:** 180' liên tục
- **Tiêu chí PASS hôm nay:** PASS benchmark: đọc 4 bài ≤20', có điểm ở ≥2 bài; ghi score thật.

#### Ngày 79: 2026-12-02 (Wed) — [REVIEW] Chữa mock 2024
- **Mục tiêu cốt lõi:** Phân loại mỗi lỗi: recognition / idea / complexity / implementation / time management.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2024 set](https://oj.vnoi.info/contest/olp_ct24) | https://oj.vnoi.info/contest/olp_ct24 | H2 |
- **Phân bổ 120 phút:** 120' review
- **Tiêu chí PASS hôm nay:** PASS nếu chọn 2 lỗi lớn nhất và re-code 1 subtask/solution.

#### Ngày 80: 2026-12-03 (Thu) — [PRACTICE] Vá lỗ hổng #1
- **Mục tiêu cốt lõi:** Chỉ học lại đúng topic làm mất điểm hôm mock; không mở topic mới.
- **Tài liệu học / Template:** [https://www.marisaoj.com/roadmap/](https://www.marisaoj.com/roadmap/)
- **Template cần tự viết:** Template speed-run topic yếu.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
- **Phân bổ 120 phút:** 60' relearn + 60' targeted retry
- **Tiêu chí PASS hôm nay:** PASS nếu tự viết template + giải lại bài liên quan không nhìn.

#### Ngày 81: 2026-12-04 (Fri) — [FULL MOCK] OLP 2025 FULL MOCK
- **Mục tiêu cốt lõi:** GIỮ UNSEEN tới hôm nay. Đây là benchmark gần nhất.
- **Template cần tự viết:** 3 giờ ngoại lệ — mô phỏng thi thật.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2025 set](https://oj.vnoi.info/contest/olp_ct25) | https://oj.vnoi.info/contest/olp_ct25 | H2 |
- **Phân bổ 120 phút:** 180' liên tục
- **Tiêu chí PASS hôm nay:** PASS benchmark: score > mock 2024 hoặc decision-making tốt hơn rõ ràng.

#### Ngày 82: 2026-12-05 (Sat) — [REVIEW] Chữa mock 2025
- **Mục tiêu cốt lõi:** So cách phân bổ thời gian, subtask hunting, lỗi code.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
  | **D2 (Mixed)** | [OLP 2025 set](https://oj.vnoi.info/contest/olp_ct25) | https://oj.vnoi.info/contest/olp_ct25 | H2 |
- **Phân bổ 120 phút:** 120' review
- **Tiêu chí PASS hôm nay:** PASS nếu có bảng: bài / điểm / phút / tại sao mất điểm / fix.

#### Ngày 83: 2026-12-06 (Sun) — [SPEEDRUN] Template speedrun
- **Mục tiêu cốt lõi:** Tự code core template không internet.
- **Template cần tự viết:** BS answer, DSU, Dijkstra, Fenwick, segtree, powmod, nCk, KMP/Z.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
- **Phân bổ 120 phút:** 120': 8 template + complexity
- **Tiêu chí PASS hôm nay:** PASS nếu 6/8 template chạy đúng; phần yếu ghi lại để xem nhẹ ngày 7.

#### Ngày 84: 2026-12-07 (Mon) — [LIGHT] Final light day
- **Mục tiêu cốt lõi:** Không cày bài khó. Đọc mistake log + 2 bài recognition không code full.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
- **Phân bổ 120 phút:** 60–90' nhẹ, ngủ đúng giờ
- **Tiêu chí PASS hôm nay:** PASS nếu đầu óc tỉnh, không học thuật toán mới.


### 🏆 TUẦN FINAL

#### Ngày 85: 2026-12-08 (Tue) — [REST] Nghỉ / contest strategy
- **Mục tiêu cốt lõi:** Chỉ xem checklist thi: đọc đề, xếp bài, subtask, overflow, reset khi bí.
- **Template cần tự viết:** Không code mới. Chuẩn bị tinh thần và đồ thi.
- **Danh sách bài tập thực chiến:**
  | Cấp độ | Tên bài | Link bài | Gợi ý tối đa |
  | :---: | :--- | :--- | :---: |
- **Phân bổ 120 phút:** ≤30' review
- **Tiêu chí PASS hôm nay:** PASS = nghỉ thật; không tự phá lịch bằng cày bài mới.


---

## 🗺️ BẢN ĐỒ TEMPLATE CỐT LÕI (TEMPLATE MAP)

| Topic | Khi nào nghĩ tới nó? | Template / Invariant phải tự viết | Tài liệu | Tiêu chuẩn đạt cổng (Mastery Gate) |
| :--- | :--- | :--- | :--- | :--- |
| **Prefix sum** | Nhiều query tổng đoạn; transform subarray thành hiệu 2 prefix | pre[i]; sum(l,r); prefix+map | [https://usaco.guide/silver/prefix-sums](https://usaco.guide/silver/prefix-sums) | D1 AC0 + biết trường hợp negative cần prefix+map thay vì window |
| **Two pointers / window** | Sorted pair hoặc contiguous window có tính monotonic | l/r, add/remove invariant | [https://usaco.guide/silver/two-pointers](https://usaco.guide/silver/two-pointers) | Giải được Playlist/Distinct window mà không H3 |
| **Binary search** | Sorted search hoặc answer monotonic | lower/upper; first/last true; check(mid) | [https://usaco.guide/silver/binary-search](https://usaco.guide/silver/binary-search) | Tự proof monotonic + chọn biên đúng |
| **Greedy** | Có local choice + exchange/invariant proof | Không template; proof choice/exchange/invariant | [https://usaco.guide/bronze/intro-greedy](https://usaco.guide/bronze/intro-greedy) | Không chỉ AC; phải giải thích correctness |
| **Compression** | Giá trị lớn nhưng relative order quan trọng | sort unique + lower_bound | [https://usaco.guide/silver/sorting-custom](https://usaco.guide/silver/sorting-custom) | Dùng với BIT/query mà không nhầm index |
| **DP core** | Brute state lặp / optimal substructure | state-transition-base-order-answer | [https://usaco.guide/gold/intro-dp](https://usaco.guide/gold/intro-dp) | Bài mixed tự nhận ra DP |
| **Knapsack** | Capacity/sum subset; mỗi item 0/1 hay vô hạn | loop direction + dp capacity | [https://usaco.guide/gold/knapsack](https://usaco.guide/gold/knapsack) | Giải thích được loop order |
| **Range DP** | State là đoạn [l,r] | process len increasing; split/ends | [https://usaco.guide/gold/dp-ranges](https://usaco.guide/gold/dp-ranges) | Tự xác định O(n²)/O(n³) |
| **Bitmask DP** | n nhỏ ~20, trạng thái là subset | dp[mask], transitions, submask | [https://usaco.guide/gold/dp-bitmasks](https://usaco.guide/gold/dp-bitmasks) | Ước lượng state count trước code |
| **Number theory** | Divisors/gcd/factors | gcd, factorization, divisor count | [https://usaco.guide/gold/divisibility](https://usaco.guide/gold/divisibility) | Tự chọn sqrt/sieve theo constraints |
| **Modulo** | Exponent lớn / answer mod prime | powmod, inverse | [https://usaco.guide/gold/modular](https://usaco.guide/gold/modular) | powmod ≤5 phút |
| **Combinatorics** | Đếm chọn/sắp xếp/union events | fact/invFact, nCk, PIE | [https://usaco.guide/gold/combo](https://usaco.guide/gold/combo) | Không nhầm modulo/inverse |
| **Bitwise** | Subset/XOR/binary representation | test/set/clear/toggle; xor prefix | [https://usaco.guide/silver/intro-bitwise](https://usaco.guide/silver/intro-bitwise) | Thao tác bit không nhìn |
| **DSU** | Union components / Kruskal | find + path compression, unite by size | [https://usaco.guide/gold/dsu](https://usaco.guide/gold/dsu) | Code ≤8 phút |
| **Dijkstra** | Weighted non-negative shortest path | dist + min-heap + stale check | [https://usaco.guide/gold/shortest-paths](https://usaco.guide/gold/shortest-paths) | Code ≤12 phút + biết negative edge không dùng |
| **Topo / DAG DP** | Directed acyclic dependency | Kahn/DFS topo + dp order | [https://usaco.guide/gold/toposort?lang=cpp](https://usaco.guide/gold/toposort?lang=cpp) | Cycle detection + longest path DAG |
| **MST** | Connect all min total edge cost | sort edges + DSU | [https://usaco.guide/gold/mst](https://usaco.guide/gold/mst) | Nhận ra MST từ wording, proof greedy cơ bản |
| **Fenwick** | Point update + prefix/range aggregate | add, sum, range | [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS) | Code ≤10 phút |
| **Segment tree** | Associative range query; cần search/update linh hoạt | build/update/query/descend | [https://usaco.guide/gold/PURS](https://usaco.guide/gold/PURS) | D1 AC0 không mở template |
| **Hashing** | Substring equality nhanh | prefix hash + powers + get(l,r) | [https://usaco.guide/gold/hashing](https://usaco.guide/gold/hashing) | Tự derive substring hash |
| **KMP/Z** | Pattern/prefix-suffix/border/period | prefix_function / z_function | [https://usaco.guide/adv/string-search](https://usaco.guide/adv/string-search) | Một trong hai code ≤12 phút, hiểu semantics |
| **Geometry** | Orientation/area/intersection | Point + cross + shoelace | [https://wiki.vnoi.info/algo/geometry/basic-geometry-3](https://wiki.vnoi.info/algo/geometry/basic-geometry-3) | Không dùng floating point khi không cần |

---

## 🔒 KHO ĐỀ OLP THẬT — BENCHMARK THI ĐẤU (OLP EXAMS)

| Kỳ thi | Link Contest | Tuần sử dụng | Quy chế phòng thi | Điểm mục tiêu |
| :--- | :--- | :---: | :--- | :---: |
| **[OLP 2022](https://oj.vnoi.info/contest/olp_ct22)** | https://oj.vnoi.info/contest/olp_ct22 | **W11** | Được dùng để tập subtask; chưa xem editorial trước attempt. | ≥ 200/400 |
| **[OLP 2023](https://oj.vnoi.info/contest/olp_ct23)** | https://oj.vnoi.info/contest/olp_ct23 | **W11** | Được dùng để tập subtask; chưa xem editorial trước attempt. | ≥ 200/400 |
| **[OLP 2024](https://oj.vnoi.info/contest/olp_ct24)** | https://oj.vnoi.info/contest/olp_ct24 | **W12 Mock #1** | GIỮ UNSEEN tới mock; 180 phút, không tài liệu. | ≥ 200/400 |
| **[OLP 2025](https://oj.vnoi.info/contest/olp_ct25)** | https://oj.vnoi.info/contest/olp_ct25 | **W12 Mock #2** | GIỮ UNSEEN tới mock; 180 phút, không tài liệu. | ≥ 200/400 |