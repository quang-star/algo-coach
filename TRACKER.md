# 🛡️ BẢNG THEO DÕI CHỐNG ẢO TƯỞNG (ANTI-DELUSION TRACKER)
> **Nguyên tắc vàng OLP:**
> 1. Số bài `D0` (template) làm được **= 0 điểm trình độ**.
> 2. Chỉ có **`AC0` (Tự lực 100%)** ở mức **D1, D2, D3** mới được tính vào chỉ số thành thạo (Topic Mastery).
> 3. Mọi bài tập phải qua bước **10 Phút Nhận Diện (Recognition)** trước khi viết code.

---

## 1. QUY ƯỚC MÃ ĐÁNH GIÁ (DATA DICTIONARY)

### 1.1. Cấp độ bài tập (Difficulty Tier)
- **`D0 - Learn`**: Template chuẩn 100%. Vừa học xong gõ lại. *Không tính vào năng lực*. Target: $\le 15$ phút.
- **`D1 - Standard`**: Bài chuẩn dạng, đề bài rõ ràng, nhận ra pattern sau 3–5 phút đọc đề. Target: $20 - 30$ phút.
- **`D2 - Transfer / Mixed`**: Đề bài ẩn dạng, kết hợp 2–3 kỹ thuật (Sort + BS, Prefix + Map, DSU + Offline, BS on Answer + Greedy...). Target: $40 - 60$ phút.
- **`D3 - Contest / OLP`**: Bài thi OLP thực thụ, nhiều subtask, cần observation đặc biệt hoặc mô hình hóa bài toán khó. Target: $60 - 90$ phút hoặc cày subtask.

### 1.2. Trạng thái giải & Mức trợ giúp (Status & Hint Level)
- **`AC0`**: AC tự lực 100% (Không hint, không editorial, không AI, không xem code cũ).
- **`ACH (H1)`**: AC sau khi nhận 1 câu gợi ý nhỏ (không lộ hướng đi/thuật toán). *(Trừ 30% giá trị)*
- **`ACH (H2)`**: AC sau khi nhận định hướng (ví dụ: "chú ý tính đơn điệu của hàm F(x)"). *(Trừ 60% giá trị)*
- **`ACH (H3)`**: AC sau khi bị spoil thuật toán (ví dụ: "dùng Binary Search on Answer"). *(0% mastery - không tính)*
- **`ACS (H4)`**: AC sau khi đọc editorial hoặc xem code mẫu. *(0% mastery - bắt buộc log vào sổ lỗi)*
- **`FAIL`**: Không giải được sau $1.5 \times$ thời gian quy định.

### 1.3. Đánh giá nhận diện (Recognition)
- **`✅ (Đúng)`**: Trong 10–15 phút đầu, xác định đúng: Constraints $\to$ Phép tính cho phép $\to$ Nhận diện đúng mô hình thuật toán trước khi code.
- **`❌ (Sai)`**: Đoán sai thuật toán, sa lầy vào hướng cụt, hoặc chỉ nhận ra thuật toán sau khi có người chỉ.

---

## 2. FORM "10 PHÚT NHẬN DIỆN" (RECOGNITION PROTOCOL)
*(Copy mẫu này ra giấy nháp hoặc ghi chú trước khi bắt đầu code bất kỳ bài nào)*

```text
======================================================
[BẢN NHÁP NHẬN DIỆN - TỐI ĐA 15 PHÚT - CẤM GÕ CODE]
Bài: .................................................
1. CONSTRAINTS (Ràng buộc dữ liệu):
   - N = ......... | A[i] = ......... | Thời gian: ....s
   - Ngân sách phép tính (1s ≈ 10^8 ops): Cần thuật O(............)

2. BRUTE FORCE (Thuật toán trâu):
   - Ý tưởng trâu: ...................................
   - Độ phức tạp: O(............) -> Ăn được subtask nào?

3. BOTTLENECK (Nghẽn ở đâu?):
   - Chỗ nào làm thuật trâu bị chậm? .................

4. INVARIANT & OBSERVATION (Tính chất bất biến / Quan sát):
   - Tính đơn điệu (Monotonic): [ ] Có  [ ] Không
   - Bài toán con gối nhau (Optimal Substructure): [ ] Có  [ ] Không
   - Lựa chọn tham lam (Greedy Choice): [ ] Có  [ ] Không
   - Đồ thị / Cấu trúc dữ liệu: ......................

5. PROPOSED ALGORITHM & COMPLEXITY (Thuật toán đề xuất):
   - Mô hình: ........................................
   - Thời gian: O(............) | Bộ nhớ: O(..........)

6. CORNER CASES CẦN ĐỀ PHÒNG:
   - Tràn số `long long`? [ ]
   - N = 1, mảng rỗng? [ ]
   - Số âm, số 0? [ ]
======================================================
```

---

## 3. NHẬT KÝ BÀI TẬP HÀNG NGÀY (DAILY PRACTICE LOG)

| Ngày | Tên bài / Link | Topic | Cấp độ | Target | Actual | Hint | Status | Recog | Loại lỗi / Bài học cốt lõi | Mastery? |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :--- | :---: |
| 15/09 | [CSES 1646 - Static Range Sum](https://cses.fi/problemset/task/1646) | Prefix Sum | D0 | 15m | 8m | 0 | AC0 | ✅ | Template 1-indexed, lưu ý mảng `long long`. | ❌ *(D0)* |
| 15/09 | [CF 1398C - Good Subarrays](https://codeforces.com/problemset/problem/1398/C) | Prefix + Map | D2 | 50m | 42m | 0 | AC0 | ✅ | Chuyển đổi $P[r]-P[l-1]=r-l+1 \to P[r]-r=P[l-1]-(l-1)$. | **✅ (D2)** |
| 16/09 | [CSES 1660 - Subarray Sums I](https://cses.fi/problemset/task/1660) | Two Pointers | D1 | 25m | 20m | 0 | AC0 | ✅ | Dãy số dương nên cửa sổ có tính đơn điệu. | **✅ (D1)** |
| 16/09 | [CSES 2428 - Subarray Distinct](https://cses.fi/problemset/task/2428) | Sliding Window | D2 | 50m | 58m | H1 | ACH | ✅ | Quên `map.erase` khi count về 0 làm tăng size map. | ❌ *(Cần làm lại)* |
| 17/09 | [CSES 1620 - Factory Machines](https://cses.fi/problemset/task/1620) | BS on Answer | D1 | 25m | 23m | 0 | AC0 | ✅ | Binary search thời gian, `check(mid)` cộng dồn sản phẩm. | **✅ (D1)** |
| 17/09 | [CSES 1085 - Array Division](https://cses.fi/problemset/task/1085) | BS on Answer | D2 | 50m | 45m | 0 | AC0 | ✅ | Cực tiểu hóa tổng lớn nhất $\to$ BS Answer + Greedy partition. | **✅ (D2)** |
| ... | ... | ... | ... | ... | ... | ... | ... | ... | ... | ... |

*(Quy tắc cột `Mastery?`: Chỉ đánh dấu ✅ nếu là `D1/D2/D3` và đạt `AC0`).*

---

## 4. DASHBOARD ĐO LƯỜNG HÀNG TUẦN (WEEKLY REALITY DASHBOARD)

Vào mỗi tối Chủ Nhật, hãy điền bảng này để kiểm tra xem mình có đang bị **"ảo tưởng năng lực"** hay không:

### Công thức tính:
1. **Tỷ lệ Tự lực (Independence Rate)**:
   $$\text{Independence Rate} = \frac{\text{Số bài } AC0}{\text{Tổng số bài làm trong tuần}} \times 100\% \quad (\ge 75\% \text{ là ĐẠT})$$
2. **Tỷ lệ Lệ thuộc Hint (Hint Dependency)**:
   $$\text{Hint Dependency} = \frac{\text{Số bài } H2 + H3 + H4}{\text{Tổng số bài AC trong tuần}} \times 100\% \quad (\le 20\% \text{ là ĐẠT})$$
3. **Độ chính xác nhận diện (Recognition Accuracy)**:
   $$\text{Recognition Rate} = \frac{\text{Số bài nhận diện đúng (✅)}}{\text{Tổng số bài làm}} \times 100\% \quad (\ge 80\% \text{ là ĐẠT})$$

### Mẫu báo cáo tuần:
```markdown
### 📊 Weekly Reality Report — Tuần [X] (Từ [DD/MM] đến [DD/MM])
- **Tổng số bài làm:** [......] bài (D0: [...], D1: [...], D2: [...], D3: [...])
- **Số bài AC0 thực chất (D1 + D2 + D3):** [......] bài
- **Tỷ lệ tự lực (Target ≥ 75%):** [......] %
- **Tỷ lệ phụ thuộc Hint (Target ≤ 20%):** [......] %
- **Độ chính xác nhận diện (Target ≥ 80%):** [......] %
- **Median thời gian giải bài D1:** [......] phút (Mục tiêu: ≤ 25 phút)
- **Median thời gian giải bài D2:** [......] phút (Mục tiêu: ≤ 50 phút)

**Đánh giá tuần:**
- [ ] XUẤT SẮC: Tự lực cao, không phụ thuộc hint, hoàn thành đúng tiến độ.
- [ ] CẦN CẢNH BÁO: AC nhiều nhưng toàn H2/H3 -> Tuần sau giảm tốc độ, không được xem hint.
- [ ] NGUY HIỂM: Tỷ lệ tạch D2 > 50% -> Kiến thức nền chưa vững, phải học lại topic.
```
