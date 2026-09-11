const TOPICS = [
  { id: "containers", phase: 1, code: "STL", name: "Vector · Set · Queue", target: 14, note: "Cấu trúc dữ liệu C++ cơ bản" },
  { id: "prefix", phase: 1, code: "PFX", name: "Prefix sum", target: 14, note: "Tổng đoạn & biến đổi mảng" },
  { id: "two-pointers", phase: 1, code: "2PT", name: "Two pointers · Sliding window", target: 16, note: "Đoạn liên tiếp & cửa sổ" },
  { id: "binary-search", phase: 1, code: "BS", name: "Binary search", target: 16, note: "lower_bound · upper_bound" },
  { id: "bs-answer", phase: 1, code: "BSA", name: "Binary search on answer", target: 18, note: "check(mid) đơn điệu" },
  { id: "sorting-greedy", phase: 1, code: "GRD", name: "Sorting · Greedy", target: 16, note: "Lịch, deadline & exchange" },
  { id: "number-theory", phase: 2, code: "NUM", name: "Number theory", target: 16, note: "GCD · sieve · inclusion-exclusion" },
  { id: "graph-basic", phase: 2, code: "GPH", name: "Graph traversal", target: 18, note: "BFS · DFS · topo" },
  { id: "shortest-path", phase: 2, code: "SP", name: "Shortest path · MST", target: 18, note: "Dijkstra · DSU · Kruskal" },
  { id: "dp-basic", phase: 2, code: "DP", name: "Dynamic programming", target: 22, note: "State · transition · optimize" },
  { id: "range-query", phase: 2, code: "RNG", name: "Range queries", target: 18, note: "Fenwick · segment tree" },
  { id: "strings", phase: 2, code: "STR", name: "String algorithms", target: 14, note: "Hash · KMP · trie" },
  { id: "tree", phase: 3, code: "TRE", name: "Trees · LCA", target: 18, note: "Tree DP · binary lifting" },
  { id: "advanced-dp", phase: 3, code: "ADP", name: "Advanced DP", target: 18, note: "Knapsack · LIS · bitmask" },
  { id: "mixed", phase: 3, code: "MIX", name: "Mixed problem sets", target: 30, note: "Nhận dạng hướng giải" },
  { id: "contest", phase: 3, code: "OLP", name: "OLP simulation", target: 12, note: "Chiến thuật & tốc độ thi" }
];

const PHASES = [
  { id: 1, name: "Nền tảng MarisaOJ", milestone: "Tự code pattern trong 25–35 phút" },
  { id: 2, name: "Thuật toán cốt lõi", milestone: "Ghép 2–3 kỹ thuật trong một bài" },
  { id: 3, name: "Thi đấu OLP", milestone: "Giữ nhịp và chọn bài đúng" }
];

const LESSONS = {
  "containers": {
    goal: "Chọn đúng vector, set, map hoặc queue thay vì tự dựng cấu trúc dài dòng.",
    recognise: ["Cần lưu dãy và truy cập theo chỉ số → vector.", "Cần loại trùng hoặc kiểm tra tồn tại nhanh → set.", "Xử lý theo thứ tự vào trước ra trước, BFS → queue."],
    steps: ["Viết ra các thao tác bài cần: thêm, xóa, tìm, lấy đầu.", "Chọn cấu trúc có đúng thao tác với độ phức tạp phù hợp.", "Kiểm tra rỗng trước khi front(), back() hoặc pop()."],
    template: `vector<int> a(n);\nset<int> distinct(a.begin(), a.end());\n\nqueue<int> q;\nq.push(start);\nwhile (!q.empty()) {\n  int u = q.front();\n  q.pop();\n  // xử lý u\n}`,
    example: "Nếu cần lấy phần tử nhỏ thứ k sau khi loại trùng: đưa vào set để lọc, rồi copy sang vector. Đừng truy cập set bằng chỉ số vì set không hỗ trợ toán tử [].",
    mistakes: ["Gọi q.front() sau khi queue đã rỗng.", "Dùng set khi cần giữ phần tử trùng hoặc truy cập ngẫu nhiên.", "Quên iterator của lower_bound cần trừ a.begin() để ra chỉ số."],
    quiz: { question: "Cần BFS theo từng lớp từ đỉnh s. Cấu trúc chính nào đúng nhất?", options: ["stack<int>", "queue<int>", "set<int>", "priority_queue<int>"], answer: 1, explanation: "BFS cần FIFO: đỉnh được phát hiện trước phải được xử lý trước, đúng hành vi của queue." },
    links: [{ name: "MarisaOJ Problemset", note: "Lọc các bài implementation / data structures", url: "https://marisaoj.com/problemset" }, { name: "MarisaOJ Roadmap", note: "Theo đúng mục STL cơ bản", url: "https://marisaoj.com/roadmap" }]
  },
  "prefix": {
    goal: "Biến tổng đoạn từ O(n) thành O(1) sau một lần tiền xử lý O(n).",
    recognise: ["Có nhiều truy vấn tổng trên đoạn [l, r].", "Bài hỏi tổng/đếm của mọi đoạn liên tiếp.", "Cần biến đổi tổng đoạn thành hiệu của hai trạng thái tiền tố."],
    steps: ["Đặt pref[0] = 0 để tránh xử lý riêng l = 0.", "Tính pref[i + 1] = pref[i] + a[i].", "Tổng đoạn chỉ số 0-based [l, r] là pref[r + 1] - pref[l]."],
    template: `vector<long long> pref(n + 1, 0);\nfor (int i = 0; i < n; ++i)\n  pref[i + 1] = pref[i] + a[i];\n\nauto rangeSum = [&](int l, int r) {\n  return pref[r + 1] - pref[l];\n};`,
    example: "a = [2, 5, -1, 4] ⇒ pref = [0, 2, 7, 6, 10]. Tổng [1, 3] = pref[4] - pref[1] = 10 - 2 = 8.",
    mistakes: ["Nhầm pref[r] - pref[l] khi dùng mảng pref kích thước n + 1.", "Dùng int dù n·Ai có thể vượt 2.1×10⁹.", "Prefix sum chỉ trả lời nhanh khi dữ liệu không cập nhật; có update thì nghĩ Fenwick/segment tree."],
    quiz: { question: "Với pref[i+1] = pref[i] + a[i], tổng a[l..r] bằng gì?", options: ["pref[r] - pref[l]", "pref[r+1] - pref[l]", "pref[r] - pref[l-1]", "pref[r+1] + pref[l]"], answer: 1, explanation: "pref[r+1] chứa tổng đến a[r], còn pref[l] loại phần đứng trước a[l]." },
    links: [{ name: "MarisaOJ Problemset", note: "Tìm keyword: prefix sum, range sum", url: "https://marisaoj.com/problemset" }, { name: "Range query · #504", note: "Bài truy vấn đoạn để nâng cấp tư duy", url: "https://marisaoj.com/problem/504" }]
  },
  "two-pointers": {
    goal: "Quét mỗi phần tử tối đa vài lần để xử lý đoạn liên tiếp trong O(n).",
    recognise: ["Cần đoạn dài/ngắn nhất thỏa điều kiện đơn điệu.", "Khi tăng right, có thể dịch left để khôi phục điều kiện.", "Mảng đã sort và cần tìm cặp/tổng/khoảng cách."],
    steps: ["Xác định invariant: cửa sổ [l, r] đang thỏa điều gì.", "Mỗi lần tăng r, cập nhật dữ liệu cửa sổ.", "Trong while vi phạm, bỏ a[l] rồi tăng l; sau đó cập nhật đáp án."],
    template: `int l = 0;\nlong long window = 0;\nfor (int r = 0; r < n; ++r) {\n  window += a[r];\n  while (l <= r && !valid(window)) {\n    window -= a[l++];\n  }\n  // [l, r] đang hợp lệ\n}`,
    example: "Với mảng số không âm và cần đoạn dài nhất có tổng ≤ S: tăng r, cộng a[r]; trong khi tổng > S thì trừ a[l++] rồi lấy max(r-l+1).",
    mistakes: ["Dùng sliding window khi có số âm làm tính đơn điệu bị phá.", "Chỉ dùng if thay vì while nên cửa sổ vẫn vi phạm.", "Quên l <= r hoặc cập nhật đáp án trước khi khôi phục invariant."],
    quiz: { question: "Điều gì khiến sliding window tổng ≤ S hoạt động chắc chắn?", options: ["Mảng đã đảo ngược", "Mọi phần tử không âm", "n là số chẵn", "S là số nguyên tố"], answer: 1, explanation: "Với phần tử không âm, tăng r không làm tổng giảm và tăng l không làm tổng tăng; điều kiện có tính đơn điệu." },
    links: [{ name: "MarisaOJ Problemset", note: "Tìm keyword: two pointers, subarray", url: "https://marisaoj.com/problemset" }, { name: "Climbing · #603", note: "Bài quét/chọn trạng thái để luyện tiếp", url: "https://marisaoj.com/problem/603" }]
  },
  "binary-search": {
    goal: "Tìm vị trí hoặc biên đầu tiên/cuối cùng thỏa điều kiện trong O(log n).",
    recognise: ["Dữ liệu đã sort hoặc đáp án theo chỉ số có tính đơn điệu.", "Bài hỏi phần tử đầu tiên ≥ x / đầu tiên > x.", "Cần đếm số phần tử thuộc một khoảng giá trị."],
    steps: ["Chọn rõ miền [l, r) để giảm lỗi biên.", "Nếu a[mid] chưa đủ nhỏ thì bỏ nửa trái; ngược lại giữ mid.", "Kết thúc tại l = r, đây là vị trí đầu tiên thỏa."],
    template: `int l = 0, r = n; // [l, r)\nwhile (l < r) {\n  int mid = l + (r - l) / 2;\n  if (a[mid] < x) l = mid + 1;\n  else r = mid;\n}\n// l = lower_bound: vị trí đầu tiên a[l] >= x`,
    example: "a = [1, 3, 3, 7], x = 3. lower_bound trả 1; upper_bound trả 3. Vì vậy số lần 3 xuất hiện = 3 - 1 = 2.",
    mistakes: ["Trộn hai quy ước [l,r] và [l,r) trong cùng một code.", "Tính mid = (l+r)/2 khi l+r có thể overflow.", "Dùng binary search trên mảng chưa sort."],
    quiz: { question: "lower_bound(a.begin(), a.end(), x) trỏ tới đâu?", options: ["Phần tử cuối cùng < x", "Phần tử đầu tiên = x", "Phần tử đầu tiên ≥ x", "Phần tử đầu tiên > x"], answer: 2, explanation: "lower_bound là biên trái: phần tử đầu tiên không nhỏ hơn x, tức ≥ x." },
    links: [{ name: "Binary search · #515", note: "Bài chuẩn để kiểm tra code biên", url: "https://marisaoj.com/problem/515" }, { name: "MarisaOJ Roadmap", note: "Làm tiếp cụm Binary Search", url: "https://marisaoj.com/roadmap" }]
  },
  "bs-answer": {
    goal: "Tìm đáp án số nhỏ nhất/lớn nhất bằng hàm check(mid) đơn điệu.",
    recognise: ["Bài hỏi maximize minimum hoặc minimize maximum.", "Có thể kiểm tra một đáp án x có làm được không.", "Nếu x làm được thì mọi x nhỏ hơn cũng làm được — hoặc ngược lại."],
    steps: ["Viết check(x) O(n) trước, chưa cần binary search.", "Chứng minh miền true/false chỉ đổi đúng một lần.", "Binary search biên đầu tiên true hoặc cuối cùng true, rồi trả đúng biến biên."],
    template: `auto check = [&](long long x) {\n  // O(n): x có khả thi không?\n};\nlong long l = low, r = high;\nwhile (l < r) {\n  long long mid = l + (r - l) / 2;\n  if (check(mid)) r = mid;\n  else l = mid + 1;\n}\ncout << l; // smallest feasible`,
    example: "Chia mảng sao cho tổng lớn nhất của một đoạn là nhỏ nhất: check(x) tham lam ghép phần tử vào đoạn hiện tại; vượt x thì mở đoạn mới. Nếu số đoạn ≤ k, x khả thi.",
    mistakes: ["Không chứng minh tính đơn điệu mà đã binary search.", "Chọn cận dưới/cận trên quá nhỏ: với chia mảng, low=max(a), high=sum(a).", "Nhầm đang tìm first true hay last true khiến lệch 1."],
    quiz: { question: "Bài minimize maximum subarray sum nên đặt cận tìm kiếm nào?", options: ["[0, n]", "[min(a), max(a)]", "[max(a), sum(a)]", "[1, 10⁹] luôn luôn"], answer: 2, explanation: "Một đoạn ít nhất phải chứa phần tử lớn nhất; trường hợp gộp hết có tổng sum(a), nên [max(a), sum(a)] vừa đúng vừa chặt." },
    links: [{ name: "Maximum mean · #1010363", note: "Prefix sum + binary search trên đáp án thực", url: "https://marisaoj.com/problem/1010363" }, { name: "MarisaOJ Problemset", note: "Tìm thêm: multiplication table, kth smallest", url: "https://marisaoj.com/problemset" }]
  },
  "sorting-greedy": {
    goal: "Sắp xếp để quyết định tốt nhất ở hiện tại mà vẫn bảo toàn nghiệm tối ưu.",
    recognise: ["Deadline, lịch, chọn nhiều công việc nhất.", "Có thể dùng exchange argument: đổi thứ tự hai phần tử không làm xấu đáp án.", "Sau khi sort, quyết định chỉ phụ thuộc trạng thái hiện tại."],
    steps: ["Tìm tiêu chí sort: deadline, thời điểm kết thúc, chi phí hoặc lợi ích.", "Xác định quyết định greedy và invariant sau mỗi bước.", "Tự thử dựng phản ví dụ; nếu có, đổi tiêu chí hoặc dùng DP."],
    template: `sort(job.begin(), job.end(), [](auto &a, auto &b) {\n  return a.deadline < b.deadline;\n});\nfor (auto job : jobs) {\n  if (canTake(job)) take(job);\n}`,
    example: "Đơn hàng có deadline d và năng lực p/ngày: sau khi sort deadline, tại vị trí i phải có i+1 ≤ p·d. Đây là điều kiện prefix — đến deadline d đã xử lý đủ số đơn đầu.",
    mistakes: ["Thấy bài tối ưu là mặc định greedy mà không chứng minh.", "Sort làm mất vị trí gốc nhưng không lưu id.", "Comparator dùng ≤ thay vì <, vi phạm strict weak ordering."],
    quiz: { question: "Vì sao comparator của sort phải dùng < thay vì <=?", options: ["Để chạy nhanh hơn", "Để giữ strict weak ordering", "Để không cần vector", "Vì <= chỉ dùng cho số thực"], answer: 1, explanation: "std::sort yêu cầu quan hệ thứ tự nghiêm ngặt; comp(x,x) phải false, nhưng x <= x lại true." },
    links: [{ name: "MarisaOJ Problemset", note: "Tìm keyword: greedy, scheduling, deadline", url: "https://marisaoj.com/problemset" }, { name: "Optimal subset · #713", note: "So sánh khi greedy không đủ", url: "https://marisaoj.com/problem/713" }]
  },
  "number-theory": {
    goal: "Dùng ước, bội, sieve và inclusion–exclusion để đếm thay vì duyệt từng số.",
    recognise: ["Chia hết, gcd/lcm, số nguyên tố.", "Đếm số thuộc hợp của nhiều tập điều kiện.", "k rất lớn nhưng hàm đếm số ≤ x tính nhanh được."],
    steps: ["Viết số phần tử của từng tập bằng phép chia nguyên.", "Cộng tập đơn, trừ giao đôi, cộng lại giao ba.", "Nếu tìm số thứ k, dùng count(x) làm check cho binary search."],
    template: `long long count(long long x) {\n  return x/3 + x/5 + x/7\n       - x/15 - x/21 - x/35\n       + x/105;\n}`,
    example: "Số ≤ x chia hết cho 3, 5 hoặc 7: cộng x/3+x/5+x/7; trừ bội chung 15,21,35 vì bị đếm đôi; cộng x/105 vì đã bị sửa quá tay.",
    mistakes: ["Dùng tích a·b thay vì lcm(a,b) cho giao hai tập.", "Quên dấu luân phiên +,−,+ trong inclusion–exclusion.", "Overflow khi tính lcm = a/gcd(a,b)*b."],
    quiz: { question: "Khi đếm bội của 3 hoặc 5, vì sao phải trừ x/15?", options: ["Bội của 15 chưa được đếm", "Bội của 15 đã bị đếm hai lần", "15 là số nguyên tố", "Để kết quả chia hết cho 3"], answer: 1, explanation: "Mỗi bội của 15 nằm trong cả tập bội 3 và bội 5, nên phép cộng ban đầu đếm nó hai lần." },
    links: [{ name: "MarisaOJ Problemset", note: "Tìm: divisibility, gcd, sieve", url: "https://marisaoj.com/problemset" }, { name: "MarisaOJ Roadmap", note: "Mở cụm Number Theory", url: "https://marisaoj.com/roadmap" }]
  },
  "graph-basic": {
    goal: "Biến bài quan hệ/kết nối thành đỉnh-cạnh và duyệt đúng bằng BFS/DFS/topo.",
    recognise: ["Các đối tượng có quan hệ hai chiều hoặc một chiều.", "Hỏi thành phần liên thông, khoảng cách số cạnh, thứ tự phụ thuộc.", "Trạng thái có thể chuyển sang trạng thái khác."],
    steps: ["Xác định đỉnh là gì, cạnh là gì và cạnh có hướng không.", "Dùng visited để mỗi đỉnh chỉ vào hàng đợi/ngăn xếp một lần.", "BFS cho khoảng cách trên đồ thị không trọng số; topo cho DAG phụ thuộc."],
    template: `queue<int> q;\nvector<int> dist(n, -1);\ndist[s] = 0; q.push(s);\nwhile (!q.empty()) {\n  int u = q.front(); q.pop();\n  for (int v : adj[u]) if (dist[v] == -1) {\n    dist[v] = dist[u] + 1;\n    q.push(v);\n  }\n}`,
    example: "Mê cung là graph ẩn: mỗi ô hợp lệ là một đỉnh, cạnh nối 4 ô kề. BFS từ ô đầu sẽ cho số bước ít nhất vì mọi cạnh đều có trọng số 1.",
    mistakes: ["Đánh dấu visited lúc pop thay vì lúc push, khiến một đỉnh bị đưa vào queue nhiều lần.", "Dùng DFS đệ quy khi n rất lớn gây stack overflow.", "Quên phân biệt graph có hướng và vô hướng khi thêm cạnh."],
    quiz: { question: "Muốn tìm số cạnh ít nhất từ s đến mọi đỉnh trong graph không trọng số, dùng gì?", options: ["DFS", "BFS", "Kruskal", "Binary search"], answer: 1, explanation: "BFS mở rộng theo lớp khoảng cách 0,1,2,... nên lần đầu tới một đỉnh chính là đường ít cạnh nhất." },
    links: [{ name: "Martian language 2 · #385", note: "Luyện quan hệ thứ tự / graph có hướng", url: "https://marisaoj.com/problem/385" }, { name: "MarisaOJ Problemset", note: "Tìm thêm BFS, DFS, connected components", url: "https://marisaoj.com/problemset" }]
  },
  "shortest-path": {
    goal: "Chọn đúng BFS, Dijkstra, Bellman–Ford hay MST theo loại trọng số và mục tiêu.",
    recognise: ["Hỏi chi phí đường đi nhỏ nhất trên graph có trọng số không âm.", "Hỏi nối tất cả đỉnh với tổng chi phí nhỏ nhất → MST.", "Nhiều lần relax cạnh để cải thiện dist."],
    steps: ["Nếu cạnh đều 1 dùng BFS; trọng số không âm dùng Dijkstra.", "Dijkstra luôn lấy trạng thái có dist nhỏ nhất từ priority_queue.", "Nếu cần nối toàn bộ graph, sort cạnh và DSU theo Kruskal."],
    template: `priority_queue<pair<ll,int>, vector<pair<ll,int>>, greater<pair<ll,int>>> pq;\ndist[s] = 0; pq.push({0, s});\nwhile (!pq.empty()) {\n  auto [du, u] = pq.top(); pq.pop();\n  if (du != dist[u]) continue;\n  for (auto [v, w] : adj[u]) if (dist[v] > du + w) {\n    dist[v] = du + w; pq.push({dist[v], v});\n  }\n}`,
    example: "Dijkstra không cần visited riêng nếu bỏ qua entry cũ bằng if (du != dist[u]) continue. Một đỉnh có thể nằm trong heap nhiều lần nhưng chỉ bản dist mới nhất được mở rộng.",
    mistakes: ["Dùng Dijkstra khi có cạnh âm.", "priority_queue mặc định là max-heap, quên greater<>.", "Nhầm shortest path tree với minimum spanning tree."],
    quiz: { question: "Điều kiện quan trọng để Dijkstra chuẩn hoạt động là gì?", options: ["Graph phải là cây", "Mọi trọng số cạnh không âm", "Graph phải vô hướng", "Mọi đỉnh có cùng bậc"], answer: 1, explanation: "Cạnh âm có thể làm một đỉnh đã chốt xuất hiện đường tốt hơn về sau, phá lập luận greedy của Dijkstra." },
    links: [{ name: "Bye bye maximum edge · #180", note: "Shortest path có biến đổi chi phí", url: "https://marisaoj.com/problem/180" }, { name: "Teleport · #567", note: "Graph trọng số và thêm cạnh", url: "https://marisaoj.com/problem/567" }]
  },
  "dp-basic": {
    goal: "Mô tả bài bằng trạng thái nhỏ hơn, công thức chuyển và thứ tự tính hợp lệ.",
    recognise: ["Bài tối ưu/đếm cách với các lựa chọn lặp lại.", "Greedy dễ có phản ví dụ nhưng bài có optimal substructure.", "Cùng một bài toán con xuất hiện nhiều lần."],
    steps: ["Định nghĩa dp[i] bằng một câu đầy đủ, gồm phạm vi và ý nghĩa tối ưu.", "Liệt kê lựa chọn cuối cùng để viết transition.", "Xác định base case, thứ tự duyệt và vị trí lấy đáp án."],
    template: `vector<long long> dp(n + 1, INF);\ndp[0] = 0;\nfor (int i = 1; i <= n; ++i) {\n  for (auto choice : choices) {\n    if (can(i, choice))\n      dp[i] = min(dp[i], dp[prev(i, choice)] + cost(choice));\n  }\n}`,
    example: "Đừng bắt đầu từ công thức. Hãy viết: dp[i] = chi phí nhỏ nhất để xử lý xong i phần tử đầu. Sau đó hỏi lựa chọn cuối cùng đã xử lý bao nhiêu phần tử.",
    mistakes: ["Không nói được dp[i] nghĩa là gì nhưng vẫn code.", "Duyệt sai thứ tự khiến trạng thái trước chưa được tính.", "Khởi tạo 0 cho mọi trạng thái min-DP, tạo nghiệm giả."],
    quiz: { question: "Bước nên làm đầu tiên khi nghĩ DP là gì?", options: ["Viết ba vòng for", "Định nghĩa chính xác trạng thái", "Dùng modulo", "Tối ưu bộ nhớ ngay"], answer: 1, explanation: "State rõ ràng quyết định transition, base case và đáp án; code trước khi định nghĩa state thường dẫn tới vá công thức." },
    links: [{ name: "Optimal subset · #713", note: "Bài tối ưu tập con để luyện state", url: "https://marisaoj.com/problem/713" }, { name: "MarisaOJ Roadmap", note: "Theo cụm Dynamic Programming từ dễ", url: "https://marisaoj.com/roadmap" }]
  },
  "range-query": {
    goal: "Xử lý update/query đoạn trong O(log n) bằng Fenwick hoặc segment tree.",
    recognise: ["Mảng thay đổi xen kẽ truy vấn.", "Prefix sum tĩnh không còn đủ vì phải cập nhật.", "Phép gộp đoạn có tính kết hợp: sum, min, max, gcd."],
    steps: ["Point update + prefix/range sum: ưu tiên Fenwick vì ngắn.", "Range query tổng quát hoặc lazy update: segment tree.", "Giữ thống nhất 0-based bên ngoài, 1-based bên trong Fenwick."],
    template: `void add(int i, long long v) {\n  for (++i; i <= n; i += i & -i) bit[i] += v;\n}\nlong long sumPrefix(int i) {\n  long long s = 0;\n  for (++i; i > 0; i -= i & -i) s += bit[i];\n  return s;\n}`,
    example: "Tổng [l,r] với Fenwick = sumPrefix(r) - sumPrefix(l-1). Khi l=0, sumPrefix(-1) trả 0 vì sau ++i thì i=0.",
    mistakes: ["Update bằng giá trị mới thay vì delta = new-old.", "Lẫn chỉ số 0-based và 1-based.", "Dùng Fenwick cho phép toán không có nghịch đảo như min đoạn tùy ý."],
    quiz: { question: "Point update + range sum nên ưu tiên cấu trúc nào để code gọn?", options: ["Queue", "Fenwick tree", "DSU", "Trie"], answer: 1, explanation: "Fenwick hỗ trợ point update và prefix sum O(log n) với code rất ngắn; range sum là hiệu hai prefix." },
    links: [{ name: "Range update, minimum query · #204", note: "Segment tree / lazy propagation", url: "https://marisaoj.com/problem/204" }, { name: "Range query · #504", note: "Luyện truy vấn trên đoạn", url: "https://marisaoj.com/problem/504" }]
  },
  "strings": {
    goal: "So sánh/tìm mẫu trong chuỗi nhanh bằng prefix-function, hash hoặc trie.",
    recognise: ["Nhiều truy vấn so sánh substring.", "Tìm tất cả vị trí pattern trong text.", "Cần xử lý tiền tố cũng là hậu tố hoặc tập nhiều từ."],
    steps: ["Một pattern trong text: ưu tiên KMP/Z.", "So sánh substring nhiều lần: rolling hash, nhớ xác suất collision.", "Nhiều từ/prefix: trie."],
    template: `vector<int> pi(n);\nfor (int i = 1; i < n; ++i) {\n  int j = pi[i - 1];\n  while (j > 0 && s[i] != s[j]) j = pi[j - 1];\n  if (s[i] == s[j]) ++j;\n  pi[i] = j;\n}`,
    example: "pi[i] là độ dài tiền tố dài nhất của s cũng là hậu tố của s[0..i]. Khi mismatch, nhảy j = pi[j-1] thay vì quay lại từ đầu.",
    mistakes: ["Nhầm pi[i] là số lần xuất hiện.", "Hash bằng một modulo rồi coi tuyệt đối không collision.", "Nối pattern#text nhưng ký tự phân cách lại có trong dữ liệu."],
    quiz: { question: "Khi KMP mismatch ở độ dài khớp j, ta lùi j thế nào?", options: ["j--", "j=0 luôn", "j=pi[j-1]", "j=pi[i]"], answer: 2, explanation: "pi[j-1] cho tiền tố dài nhất còn có khả năng tiếp tục khớp, nhờ vậy tổng thời gian vẫn O(n)." },
    links: [{ name: "Compare substring · #168", note: "So sánh substring bằng tiền xử lý", url: "https://marisaoj.com/problem/168" }, { name: "MarisaOJ Problemset", note: "Tìm thêm string, KMP, hashing", url: "https://marisaoj.com/problemset" }]
  },
  "tree": {
    goal: "Tận dụng cấu trúc không chu trình để DFS, tree DP và trả lời tổ tiên chung.",
    recognise: ["Graph liên thông có n−1 cạnh.", "Đường đi giữa hai đỉnh là duy nhất.", "Truy vấn tổ tiên, khoảng cách hoặc thông tin subtree."],
    steps: ["Root cây, lưu parent và depth bằng DFS/BFS.", "Subtree dùng Euler tour để biến thành đoạn.", "Nhiều truy vấn LCA: binary lifting up[v][j]."],
    template: `void dfs(int u, int p) {\n  up[u][0] = p;\n  for (int j = 1; j < LOG; ++j)\n    up[u][j] = up[up[u][j-1]][j-1];\n  for (int v : adj[u]) if (v != p) {\n    depth[v] = depth[u] + 1; dfs(v, u);\n  }\n}`,
    example: "Khoảng cách cạnh giữa u,v = depth[u] + depth[v] - 2·depth[lca(u,v)]. Mọi phần đều có sau khi root cây và build bảng up.",
    mistakes: ["DFS quay ngược về parent vô hạn.", "LOG quá nhỏ; thường dùng while (1<<LOG) <= n.", "Đệ quy sâu với cây dây n=2e5 gây tràn stack."],
    quiz: { question: "Trong cây, khoảng cách u–v tính qua LCA như nào?", options: ["dep[u]+dep[v]", "dep[u]-dep[v]", "dep[u]+dep[v]-2dep[lca]", "2dep[u]+dep[v]"], answer: 2, explanation: "Hai đoạn u→LCA và v→LCA có độ dài lần lượt dep[u]-dep[lca] và dep[v]-dep[lca]." },
    links: [{ name: "MarisaOJ Problemset", note: "Tìm: tree, LCA, subtree", url: "https://marisaoj.com/problemset" }, { name: "MarisaOJ Roadmap", note: "Theo cụm Tree Algorithms", url: "https://marisaoj.com/roadmap" }]
  },
  "advanced-dp": {
    goal: "Nhận dạng knapsack, LIS, bitmask và tối ưu trạng thái khi DP cơ bản bị quá chậm.",
    recognise: ["Chọn/bỏ vật với giới hạn tổng → knapsack.", "n nhỏ khoảng 20 và trạng thái là tập con → bitmask DP.", "Dãy con tăng dài nhất hoặc DP có transition tối ưu bằng cấu trúc dữ liệu."],
    steps: ["Tính số trạng thái × số chuyển trước khi code.", "Knapsack 0/1 phải duyệt capacity giảm để mỗi vật dùng một lần.", "Chỉ tối ưu bộ nhớ sau khi bản 2D và thứ tự phụ thuộc đã rõ."],
    template: `vector<long long> dp(W + 1, -INF);\ndp[0] = 0;\nfor (auto [w, val] : items)\n  for (int cap = W; cap >= w; --cap)\n    dp[cap] = max(dp[cap], dp[cap - w] + val);`,
    example: "Nếu duyệt cap tăng trong 0/1 knapsack, dp[cap-w] có thể vừa dùng chính vật hiện tại, biến bài thành unbounded knapsack. Hướng vòng lặp là một phần của công thức.",
    mistakes: ["Không ước lượng O(states·transitions).", "Duyệt capacity sai chiều.", "Dùng -INF rồi cộng gây overflow; cần kiểm tra trạng thái reachable."],
    quiz: { question: "0/1 knapsack tối ưu 1 chiều phải duyệt capacity theo hướng nào?", options: ["Tăng dần", "Giảm dần", "Ngẫu nhiên", "Hai chiều đều được"], answer: 1, explanation: "Duyệt giảm đảm bảo dp[cap-w] vẫn thuộc vòng vật trước, nên mỗi vật chỉ được chọn tối đa một lần." },
    links: [{ name: "Optimal subset · #713", note: "Tập con và tối ưu trạng thái", url: "https://marisaoj.com/problem/713" }, { name: "Gifting · #618", note: "Bài chuyển trạng thái nâng cao", url: "https://marisaoj.com/problem/618" }]
  },
  "mixed": {
    goal: "Nhận dạng thuật toán trong 8–12 phút và ghép nhiều kỹ thuật trong cùng một bài.",
    recognise: ["Đề không ghi tag và có dữ kiện gây nhiễu.", "Một lớp xử lý tạo dữ liệu cho lớp sau: sort + two pointers, prefix + BS.", "Điểm khó nằm ở mô hình hóa chứ không phải template."],
    steps: ["Đọc constraints trước để khoanh độ phức tạp.", "Viết brute force và điểm nghẽn, rồi tìm cách tối ưu đúng điểm đó.", "Sau 12 phút không có hướng, đánh dấu và chuyển bài trong mock."],
    template: `// Checklist 8 phút\n// 1. Constraints -> O(?)\n// 2. Brute force là gì?\n// 3. Phần nào lặp lại / có tính đơn điệu?\n// 4. Cần sort, prefix, graph hay DP?\n// 5. Test phản ví dụ trước khi code.`,
    example: "Maximum mean length ≥ k: biến Ai thành Ai−mid, dùng prefix để check có đoạn dài ≥k tổng không âm, rồi binary search mid. Đây là prefix + binary search on answer.",
    mistakes: ["Cố nhét thuật toán vừa học vào mọi bài.", "Code ngay khi chưa biết invariant hoặc state.", "Mắc quá lâu ở một bài trong khi mock còn bài dễ."],
    quiz: { question: "Khi bí hướng ở bài mixed, thao tác đầu tiên hữu ích nhất là gì?", options: ["Code random", "Xem constraints và viết brute force", "Đổi ngôn ngữ", "Tăng recursion limit"], answer: 1, explanation: "Brute force cho biết chính xác phần nào gây chậm; constraints cho biết mức tối ưu cần đạt." },
    links: [{ name: "Maximum mean · #1010363", note: "Bài ghép prefix + binary search", url: "https://marisaoj.com/problem/1010363" }, { name: "MarisaOJ Problemset", note: "Chọn 3 bài khác tag để làm set", url: "https://marisaoj.com/problemset" }]
  },
  "contest": {
    goal: "Biến kiến thức thành điểm bằng chiến thuật đọc đề, chọn bài và kiểm soát lỗi.",
    recognise: ["Không học thêm một thuật toán riêng; đây là kỹ năng chuyển bài và chốt AC.", "Cần đo thời gian nhận dạng, code, debug cho từng bài.", "Sai vặt và chọn bài tệ làm mất điểm nhiều như thiếu kiến thức."],
    steps: ["10 phút đầu scan toàn bộ đề và xếp A/B/C theo độ chắc.", "Chốt bài chắc nhất trước; quá ngưỡng bí thì chuyển.", "15 phút cuối test biên, overflow, reset state và output format."],
    template: `// Contest log\n// Bài | Nhận dạng | Code | Debug | Kết quả\n// Sau mock ghi đúng 1 lỗi lớn nhất\n// và 1 hành động sửa ở buổi kế tiếp.`,
    example: "Mock 60 phút: 5 phút scan, 25 phút bài chắc, 20 phút bài thứ hai, 10 phút test/debug. Mục tiêu đầu không phải giải khó mà là không rơi điểm bài làm được.",
    mistakes: ["Đọc tuần tự rồi kẹt luôn bài đầu.", "Submit liên tục mà không tạo test phản ví dụ.", "Review mock chỉ nhìn điểm, không ghi nguyên nhân và cách sửa."],
    quiz: { question: "Trong mock, đã bí một bài quá ngưỡng đặt trước thì nên làm gì?", options: ["Cố thêm đến hết giờ", "Chuyển bài và quay lại sau", "Xóa toàn bộ code", "Mở lời giải ngay"], answer: 1, explanation: "Chuyển bài bảo vệ tổng điểm. Quay lại sau thường còn có góc nhìn mới và thời gian được dùng hiệu quả hơn." },
    links: [{ name: "MarisaOJ Problemset", note: "Tự chọn set 3 bài trong 60 phút", url: "https://marisaoj.com/problemset" }, { name: "MarisaOJ Roadmap", note: "Đối chiếu tag còn yếu sau mock", url: "https://marisaoj.com/roadmap" }]
  }
};

const APPLICATIONS = {
  "containers": {
    learn: ["Các thao tác bắt buộc", "Thứ tự phần tử", "Độ phức tạp mỗi thao tác", "Điều kiện rỗng & iterator"],
    use: "Khi đề cần lưu dãy, loại trùng, tra cứu hoặc xử lý FIFO. Hãy chọn theo thao tác cần dùng chứ không chọn theo thói quen.",
    avoid: "Không dùng set nếu cần giữ phần tử trùng/truy cập theo chỉ số; không dùng queue nếu cần lấy phần tử nhỏ nhất.",
    problem: { title: "Loại trùng rồi lấy phần tử thứ k", statement: "Cho n số, loại giá trị trùng và in số nhỏ thứ k.", map: [["Dữ kiện", "Cần unique + thứ tự tăng"], ["Gắn template", "set<int> lọc và tự sắp xếp"], ["Chuyển dữ liệu", "vector<int> v(s.begin(), s.end())"], ["Lấy đáp án", "Nếu k hợp lệ, dùng v[k-1]"]], complexity: "O(n log n) thời gian · O(n) bộ nhớ" }
  },
  "prefix": {
    learn: ["Ý nghĩa pref[i]", "Base pref[0] = 0", "Công thức đoạn [l,r]", "Kiểu long long"],
    use: "Khi mảng gần như tĩnh và đề hỏi nhiều tổng/đếm trên đoạn, hoặc tổng đoạn xuất hiện bên trong một check khác.",
    avoid: "Không đủ nếu có update xen kẽ query; khi đó chuyển sang Fenwick/segment tree. Sliding window có thể gọn hơn nếu chỉ quét một lần.",
    problem: { title: "Nhiều truy vấn tổng đoạn", statement: "Cho mảng n phần tử và q truy vấn l,r. Mỗi truy vấn cần tổng a[l..r].", map: [["Brute force", "Mỗi query duyệt l→r: O(nq)"], ["Trạng thái", "pref[i] = tổng i phần tử đầu"], ["Gắn đề vào code", "l,r của đề → pref[r+1]-pref[l]"], ["Lý do đúng", "Hai prefix triệt tiêu phần trước l"]], complexity: "Build O(n) · mỗi truy vấn O(1)" }
  },
  "two-pointers": {
    learn: ["Invariant cửa sổ", "Điều kiện đơn điệu", "Khi tăng left/right", "Thời điểm cập nhật đáp án"],
    use: "Khi một cửa sổ vi phạm có thể được sửa chỉ bằng cách dịch left, thường với mảng không âm hoặc dữ liệu đã sort.",
    avoid: "Không áp dụng máy móc khi số âm làm tổng tăng/giảm thất thường hoặc khi bỏ đầu cửa sổ không khôi phục được điều kiện.",
    problem: { title: "Đoạn dài nhất có tổng ≤ S", statement: "Cho mảng số không âm. Tìm độ dài lớn nhất của đoạn liên tiếp có tổng không vượt S.", map: [["Invariant", "Sau vòng while, sum(l..r) ≤ S"], ["Mở rộng", "Mỗi r mới: sum += a[r]"], ["Sửa vi phạm", "while sum>S: sum-=a[l++]"], ["Đáp án", "max(ans, r-l+1) sau while"]], complexity: "O(n), vì mỗi con trỏ chỉ đi sang phải" }
  },
  "binary-search": {
    learn: ["Predicate/điều kiện biên", "Quy ước [l,r)", "Cập nhật l hoặc r", "Giá trị trả về"],
    use: "Khi dữ liệu đã sort hoặc dãy điều kiện có dạng false…false,true…true và cần tìm đúng điểm đổi trạng thái.",
    avoid: "Không binary search chỉ vì n lớn. Nếu predicate không đơn điệu hoặc mảng chưa sort thì template không có cơ sở đúng.",
    problem: { title: "MarisaOJ #515 · Binary search", statement: "Cho mảng tăng dần gồm n số phân biệt. Với mỗi giá trị x, xác định vị trí/tồn tại của x.", map: [["Dấu hiệu", "Mảng đã tăng dần"], ["Predicate", "a[mid] < x nghĩa là đáp án nằm bên phải"], ["Biên trả về", "l là vị trí đầu tiên a[l] ≥ x"], ["Kiểm tra tồn tại", "l<n và a[l]==x"]], complexity: "O(log n) cho mỗi lần tìm" }
  },
  "bs-answer": {
    learn: ["Hàm check(x)", "Chứng minh đơn điệu", "Cận low/high", "First true hay last true"],
    use: "Khi đề hỏi minimize maximum, maximize minimum hoặc số thứ k và có thể đếm/kiểm tra một đáp án x nhanh hơn việc dựng đáp án trực tiếp.",
    avoid: "Không dùng nếu không viết được check(x), hoặc check đúng nhưng true/false đổi qua lại nhiều lần.",
    problem: { title: "Chia mảng — nhỏ nhất hóa tổng đoạn lớn nhất", statement: "Chia mảng số không âm thành không quá k đoạn, sao cho tổng lớn nhất của một đoạn là nhỏ nhất.", map: [["Ẩn đáp án", "Gọi x là tổng đoạn lớn nhất cho phép"], ["check(x)", "Greedy ghép; vượt x thì mở đoạn mới"], ["Đơn điệu", "x khả thi ⇒ mọi x lớn hơn khả thi"], ["Cận", "low=max(a), high=sum(a)"]], complexity: "O(n log(sum(a)−max(a)))" }
  },
  "sorting-greedy": {
    learn: ["Tiêu chí sort", "Quyết định greedy", "Invariant sau mỗi bước", "Exchange argument/phản ví dụ"],
    use: "Khi sort làm lộ thứ tự xử lý tự nhiên và quyết định tốt nhất hiện tại không phá cơ hội của phần còn lại.",
    avoid: "Không dùng chỉ vì đề có chữ tối ưu. Nếu quyết định hiện tại ảnh hưởng phức tạp tới tương lai, thử DP hoặc chứng minh phản ví dụ.",
    problem: { title: "Đơn hàng và deadline", statement: "Mỗi ngày xử lý p đơn. Có các deadline d[i]; kiểm tra có thể hoàn thành toàn bộ đúng hạn không.", map: [["Sort", "Sắp deadline tăng dần"], ["Prefix", "i+1 đơn đầu phải xong trước d[i]"], ["Điều kiện", "i+1 ≤ p*d[i]"], ["Kết luận", "Một prefix sai ⇒ lịch không khả thi"]], complexity: "O(n log n) do sắp xếp" }
  },
  "number-theory": {
    learn: ["GCD/LCM", "Hàm đếm ≤ x", "Inclusion–exclusion", "Overflow số nguyên"],
    use: "Khi đề liên quan chia hết, hợp nhiều điều kiện hoặc k rất lớn nhưng đếm số hợp lệ đến x bằng phép chia được.",
    avoid: "Không nhân trực tiếp các số để lấy giao nếu chúng không nguyên tố cùng nhau; phải dùng LCM.",
    problem: { title: "Số thứ k chia hết cho 3, 5 hoặc 7", statement: "Tìm số dương thứ k chia hết cho ít nhất một trong 3,5,7.", map: [["count(x)", "Đếm bao nhiêu số hợp lệ ≤ x"], ["Hợp tập", "+x/3+x/5+x/7"], ["Sửa đếm trùng", "−x/15−x/21−x/35+x/105"], ["Tìm k", "Binary search x nhỏ nhất có count(x)≥k"]], complexity: "O(log đáp án), mỗi check O(1)" }
  },
  "graph-basic": {
    learn: ["Đỉnh và cạnh là gì", "Có hướng/vô hướng", "visited/dist", "BFS hay DFS/topo"],
    use: "Khi đề mô tả quan hệ, đường đi, biến đổi trạng thái, thành phần liên thông hoặc thứ tự phụ thuộc.",
    avoid: "Đừng dựng graph nếu mỗi trạng thái quá lớn mà không giới hạn được; cũng đừng dùng DFS để lấy đường ngắn nhất theo số cạnh.",
    problem: { title: "Đường ngắn nhất trong mê cung", statement: "Ô trống đi được 4 hướng, mỗi bước tốn 1. Tìm số bước ít nhất từ S đến T.", map: [["Đỉnh", "Mỗi ô trống (i,j)"], ["Cạnh", "Hai ô kề hợp lệ"], ["Thuật toán", "BFS vì mọi cạnh trọng số 1"], ["Đáp án", "dist[T] khi được thăm"]], complexity: "O(nm) thời gian · O(nm) bộ nhớ" }
  },
  "shortest-path": {
    learn: ["Loại trọng số", "Relax cạnh", "Heap chứa (dist,node)", "Shortest path ≠ MST"],
    use: "BFS khi trọng số 1; Dijkstra khi trọng số không âm; Kruskal khi cần nối mọi đỉnh với tổng cạnh nhỏ nhất.",
    avoid: "Dijkstra chuẩn không dùng được khi có cạnh âm. MST không trả lời đường đi ngắn nhất giữa hai đỉnh.",
    problem: { title: "Đường đi chi phí nhỏ nhất", statement: "Graph có trọng số không âm. Tìm khoảng cách ngắn nhất từ s đến mọi đỉnh.", map: [["Trạng thái", "dist[v] là chi phí tốt nhất đã biết"], ["Chọn tiếp", "Pop đỉnh có dist nhỏ nhất"], ["Relax", "Nếu dist[v]>dist[u]+w thì cập nhật"], ["Entry cũ", "du!=dist[u] thì bỏ"]], complexity: "O((V+E) log V) với priority_queue" }
  },
  "dp-basic": {
    learn: ["Câu định nghĩa state", "Transition từ lựa chọn cuối", "Base case", "Thứ tự duyệt & đáp án"],
    use: "Khi bài có các bài toán con lặp lại và nghiệm tối ưu lớn được ghép từ nghiệm tối ưu nhỏ hơn.",
    avoid: "Đừng học thuộc công thức. Nếu chưa nói được dp[i] nghĩa là gì bằng một câu, chưa nên code template.",
    problem: { title: "Chọn phần tử không kề nhau", statement: "Cho a[0..n−1]. Chọn tổng lớn nhất sao cho không lấy hai phần tử kề nhau.", map: [["State", "dp[i] = tổng tốt nhất từ i phần tử đầu"], ["Không lấy i−1", "dp[i−1]"], ["Có lấy i−1", "dp[i−2]+a[i−1]"], ["Transition", "dp[i]=max(hai lựa chọn)"]], complexity: "O(n) thời gian · O(n), tối ưu còn O(1) bộ nhớ" }
  },
  "range-query": {
    learn: ["Phép gộp đoạn", "Point/range update", "Chỉ số Fenwick", "Delta giá trị"],
    use: "Khi query và update xen kẽ. Fenwick cho point update + range sum; segment tree cho phép gộp tổng quát/lazy.",
    avoid: "Mảng tĩnh chỉ cần prefix sum. Fenwick không phù hợp trực tiếp cho mọi phép như range minimum tùy ý.",
    problem: { title: "Cập nhật điểm, hỏi tổng đoạn", statement: "Hai loại thao tác: đổi a[i] thành x; hỏi tổng a[l..r].", map: [["Lưu update", "delta=x−a[i], rồi add(i,delta)"], ["Prefix", "sumPrefix(r)"], ["Range", "prefix(r)−prefix(l−1)"], ["Đồng bộ", "Gán lại a[i]=x"]], complexity: "O(log n) mỗi update/query" }
  },
  "strings": {
    learn: ["Ý nghĩa pi[i]", "Fallback khi mismatch", "Ký tự phân cách", "Hash collision"],
    use: "KMP/Z cho tìm pattern; rolling hash cho nhiều truy vấn substring; trie cho nhiều từ/prefix.",
    avoid: "Không dùng hash như bằng chứng tuyệt đối nếu bài không chấp nhận xác suất collision; so sánh một lần có thể dùng trực tiếp.",
    problem: { title: "Tìm mọi vị trí pattern trong text", statement: "Cho chuỗi P và T. In các vị trí P xuất hiện trong T.", map: [["Ghép chuỗi", "S=P+'#'+T"], ["Tiền xử lý", "Tính prefix-function pi của S"], ["Nhận match", "pi[i]==|P|"], ["Đổi chỉ số", "Trừ phần P và ký tự #"]], complexity: "O(|P|+|T|)" }
  },
  "tree": {
    learn: ["Root & parent", "Depth/subtree", "Euler tour", "Binary lifting"],
    use: "Khi graph liên thông có n−1 cạnh và cần truy vấn đường đi duy nhất, tổ tiên hoặc thông tin subtree.",
    avoid: "Nếu graph có chu trình thì công thức parent/subtree của cây không dùng trực tiếp; cần spanning tree hoặc thuật toán graph khác.",
    problem: { title: "Khoảng cách giữa nhiều cặp đỉnh", statement: "Cho cây và q cặp u,v. Hỏi số cạnh trên đường đi giữa chúng.", map: [["Tiền xử lý", "DFS lấy depth và up[v][j]"], ["Cân depth", "Nâng đỉnh sâu hơn"], ["Tìm LCA", "Nâng hai đỉnh từ bit lớn xuống"], ["Đáp án", "dep[u]+dep[v]−2dep[lca]"]], complexity: "Build O(n log n) · query O(log n)" }
  },
  "advanced-dp": {
    learn: ["Số state × transition", "Chiều duyệt", "Reachable/−INF", "Tối ưu bộ nhớ"],
    use: "Knapsack khi có chọn/bỏ và giới hạn; bitmask khi n khoảng 20; LIS khi tối ưu dãy con có thứ tự.",
    avoid: "Không dùng bitmask nếu 2^n quá lớn; không tối ưu 1D trước khi hiểu phụ thuộc của bản 2D.",
    problem: { title: "0/1 Knapsack", statement: "Mỗi vật có trọng lượng w và giá trị v, dùng tối đa một lần. Tổng trọng lượng ≤ W, tối đa hóa giá trị.", map: [["State", "dp[cap] = giá trị tốt nhất với sức chứa cap"], ["Chọn vật", "dp[cap-w]+v"], ["Không chọn", "Giữ dp[cap]"], ["Chiều duyệt", "cap giảm để không dùng lại vật"]], complexity: "O(nW) thời gian · O(W) bộ nhớ" }
  },
  "mixed": {
    learn: ["Đọc constraints", "Viết brute force", "Tìm điểm nghẽn", "Ghép pattern"],
    use: "Khi đề không có tag rõ ràng và cần nối hai kỹ thuật, ví dụ prefix + binary search hoặc sort + two pointers.",
    avoid: "Không đoán thuật toán từ một từ khóa. Luôn đối chiếu constraints và chứng minh điều kiện áp dụng.",
    problem: { title: "MarisaOJ #1010363 · Maximum mean", statement: "Tìm mean lớn nhất của subarray có độ dài ít nhất k.", map: [["Đoán đáp án", "Binary search giá trị mean = mid"], ["Biến đổi", "b[i]=a[i]−mid"], ["check(mid)", "Có đoạn dài ≥k với tổng b ≥0?"], ["Tối ưu check", "Prefix + min prefix trước i−k"]], complexity: "O(n log(độ chính xác))" }
  },
  "contest": {
    learn: ["Scan đề", "Ngưỡng chuyển bài", "Budget thời gian", "Post-mortem"],
    use: "Trong mixed mock và thi thật để biến số bài biết làm thành số bài AC, thay vì học thêm thuật toán mới.",
    avoid: "Không dùng kế hoạch cứng nếu phân bố độ khó khác dự kiến; phải cập nhật sau vòng scan đề.",
    problem: { title: "Mixed mock 60 phút", statement: "Ba bài: một nền tảng, một ghép kỹ thuật, một bài stretch. Mục tiêu tối đa hóa điểm.", map: [["0–5 phút", "Scan, xếp độ chắc A/B/C"], ["5–30 phút", "Chốt bài A"], ["30–50 phút", "Làm B hoặc lấy subtask"], ["50–60 phút", "Test biên, overflow, submit cuối"]], complexity: "Đo bằng điểm + thời gian nhận dạng + số lỗi không đáng có" }
  }
};

const EXERCISES = [
  { id: "m515", topicId: "binary-search", title: "Binary search", url: "https://marisaoj.com/problem/515", difficulty: "easy", points: 50 },
  { id: "m603", topicId: "two-pointers", title: "Climbing", url: "https://marisaoj.com/problem/603", difficulty: "medium", points: 100 },
  { id: "m657", topicId: "sorting-greedy", title: "Finding teammates", url: "https://marisaoj.com/problem/657", difficulty: "medium", points: 100 },
  { id: "m385", topicId: "graph-basic", title: "Martian language 2", url: "https://marisaoj.com/problem/385", difficulty: "medium", points: 100 },
  { id: "m713", topicId: "dp-basic", title: "Optimal subset", url: "https://marisaoj.com/problem/713", difficulty: "hard", points: 180 },
  { id: "m504", topicId: "range-query", title: "Range query", url: "https://marisaoj.com/problem/504", difficulty: "hard", points: 180 },
  { id: "m168", topicId: "strings", title: "Compare substring", url: "https://marisaoj.com/problem/168", difficulty: "hard", points: 180 },
  { id: "m180", topicId: "shortest-path", title: "Bye bye maximum edge", url: "https://marisaoj.com/problem/180", difficulty: "hard", points: 180 },
  { id: "m567", topicId: "shortest-path", title: "Teleport", url: "https://marisaoj.com/problem/567", difficulty: "hard", points: 180 },
  { id: "m618", topicId: "advanced-dp", title: "Gifting", url: "https://marisaoj.com/problem/618", difficulty: "hard", points: 180 },
  { id: "m1010363", topicId: "bs-answer", title: "Maximum mean", url: "https://marisaoj.com/problem/1010363", difficulty: "extreme", points: 300 },
  { id: "m204", topicId: "range-query", title: "Range update, minimum query", url: "https://marisaoj.com/problem/204", difficulty: "extreme", points: 300 }
];

const DIFFICULTY = {
  easy: "Dễ",
  medium: "Vừa",
  hard: "Khó",
  extreme: "Rất khó"
};

const TEMPLATE_VARIANTS = {
  "containers": [
    { id: "vector", name: "Vector", when: "Cần mảng động, truy cập theo chỉ số, sort hoặc duyệt liên tiếp.", invariant: "Các phần tử nằm theo thứ tự chèn; chỉ số hợp lệ thuộc [0, size).", code: `vector<int> a;\na.reserve(n);\na.push_back(x);\nsort(a.begin(), a.end());\nfor (int x : a) { /* ... */ }`, trap: "push_back có thể làm iterator/reference cũ mất hiệu lực; không đọc a[i] khi i>=a.size()." },
    { id: "set-map", name: "Set / Map", when: "Cần loại trùng, giữ thứ tự tăng hoặc tra cứu key trong O(log n).", invariant: "set có key duy nhất; map ánh xạ mỗi key tới một value.", code: `set<int> s;\ns.insert(x);\nif (s.count(x)) { /* tồn tại */ }\n\nmap<int,int> freq;\nfor (int x : a) ++freq[x];`, trap: "Không truy cập set theo chỉ số. map[key] sẽ tự tạo key mới nếu chưa tồn tại." },
    { id: "queue-deque", name: "Queue / Deque", when: "Queue cho FIFO/BFS; deque khi cần thêm-xóa ở cả hai đầu.", invariant: "Chỉ gọi front/back/pop khi cấu trúc chưa rỗng.", code: `queue<int> q;\nq.push(s);\nwhile (!q.empty()) {\n  int u = q.front(); q.pop();\n}\n\ndeque<int> dq;\ndq.push_front(x); dq.push_back(y);`, trap: "queue.pop() không trả về phần tử; phải lấy front() trước rồi mới pop()." },
    { id: "priority", name: "Priority Queue", when: "Luôn cần lấy phần tử lớn nhất/nhỏ nhất hiện tại.", invariant: "top() là phần tử ưu tiên cao nhất theo comparator.", code: `priority_queue<int> maxHeap;\npriority_queue<int, vector<int>, greater<int>> minHeap;\nminHeap.push(x);\nint best = minHeap.top();\nminHeap.pop();`, trap: "priority_queue mặc định là max-heap; muốn min-heap phải dùng greater<>." }
  ],
  "prefix": [
    { id: "sum-1d", name: "Prefix Sum 1D", when: "Nhiều truy vấn tổng đoạn trên mảng tĩnh.", invariant: "pref[i] là tổng đúng i phần tử đầu; pref[0]=0.", code: `vector<long long> pref(n + 1);\nfor (int i = 0; i < n; ++i)\n  pref[i + 1] = pref[i] + a[i];\nlong long sum = pref[r + 1] - pref[l];`, trap: "Với đoạn 0-based [l,r], phải dùng pref[r+1]-pref[l]." },
    { id: "count", name: "Prefix Count", when: "Nhiều truy vấn đếm phần tử thỏa tính chất trên đoạn.", invariant: "cnt[i] là số phần tử thỏa trong i phần tử đầu.", code: `vector<int> cnt(n + 1);\nfor (int i = 0; i < n; ++i)\n  cnt[i + 1] = cnt[i] + good(a[i]);\nint answer = cnt[r + 1] - cnt[l];`, trap: "good(a[i]) phải trả 0/1; nếu có nhiều loại, cần một prefix cho mỗi loại hoặc cấu trúc khác." },
    { id: "sum-2d", name: "Prefix Sum 2D", when: "Nhiều truy vấn tổng hình chữ nhật trên ma trận tĩnh.", invariant: "pref[i][j] là tổng hình chữ nhật từ (1,1) đến (i,j).", code: `for (int i=1;i<=n;++i)\n for (int j=1;j<=m;++j)\n  p[i][j]=a[i][j]+p[i-1][j]+p[i][j-1]-p[i-1][j-1];\nll rect=p[x2][y2]-p[x1-1][y2]-p[x2][y1-1]+p[x1-1][y1-1];`, trap: "Giao bị trừ hai lần nên phải cộng lại pref[x1-1][y1-1]." },
    { id: "difference", name: "Difference Array", when: "Nhiều phép cộng cùng một giá trị lên đoạn, sau đó mới cần mảng cuối.", invariant: "diff đánh dấu nơi hiệu ứng bắt đầu và kết thúc; prefix diff khôi phục mảng.", code: `diff[l] += x;\nif (r + 1 < n) diff[r + 1] -= x;\nfor (int i = 0; i < n; ++i) {\n  if (i) diff[i] += diff[i - 1];\n  a[i] += diff[i];\n}`, trap: "Không dùng bản này cho query online xen kẽ; cần Fenwick/segment tree." }
  ],
  "two-pointers": [
    { id: "opposite", name: "Hai đầu đối diện", when: "Mảng đã sort, cần tìm cặp hoặc co khoảng từ hai phía.", invariant: "Mỗi so sánh loại được ít nhất một đầu khỏi mọi nghiệm tương lai.", code: `int l = 0, r = n - 1;\nwhile (l < r) {\n  long long sum = a[l] + a[r];\n  if (sum < target) ++l;\n  else if (sum > target) --r;\n  else { /* found */ break; }\n}`, trap: "Nếu mảng chưa sort thì tăng l/giảm r không có lập luận loại nghiệm." },
    { id: "variable-window", name: "Cửa sổ biến đổi", when: "Đoạn dài/ngắn nhất với điều kiện đơn điệu khi dịch left.", invariant: "Sau vòng while, cửa sổ [l,r] luôn hợp lệ.", code: `int l = 0; long long sum = 0;\nfor (int r = 0; r < n; ++r) {\n  sum += a[r];\n  while (l <= r && sum > S) sum -= a[l++];\n  ans = max(ans, r - l + 1);\n}`, trap: "Template tổng ≤S này thường cần a[i] không âm; số âm phá tính đơn điệu." },
    { id: "fixed-window", name: "Cửa sổ cố định", when: "Đề xét mọi đoạn có độ dài đúng k.", invariant: "sum luôn là tổng của đúng k phần tử gần nhất sau khi i>=k-1.", code: `long long sum = 0;\nfor (int i = 0; i < n; ++i) {\n  sum += a[i];\n  if (i >= k) sum -= a[i - k];\n  if (i >= k - 1) ans = max(ans, sum);\n}`, trap: "Đừng cập nhật đáp án trước khi cửa sổ đủ k phần tử." },
    { id: "merge", name: "Hai dãy đã sort", when: "Ghép/so sánh hai dãy tăng mà không cần sort lại.", invariant: "Mọi phần tử trước i và j đã được xử lý đúng thứ tự.", code: `int i = 0, j = 0;\nwhile (i < n || j < m) {\n  if (j == m || (i < n && a[i] <= b[j])) take(a[i++]);\n  else take(b[j++]);\n}`, trap: "Điều kiện phải xử lý riêng khi một con trỏ đã chạm cuối dãy." }
  ],
  "binary-search": [
    { id: "exact", name: "Tìm chính xác", when: "Mảng sort và cần biết x có tồn tại/vị trí nào đó hay không.", invariant: "Nếu x tồn tại thì luôn nằm trong đoạn đóng [l,r].", code: `int l=0, r=n-1, pos=-1;\nwhile (l<=r) {\n  int mid=l+(r-l)/2;\n  if (a[mid]==x) { pos=mid; break; }\n  if (a[mid]<x) l=mid+1;\n  else r=mid-1;\n}`, trap: "Đoạn đóng dùng while(l<=r), không phải while(l<r)." },
    { id: "lower", name: "Lower Bound", when: "Cần vị trí đầu tiên có a[i]≥x.", invariant: "[0,l) chắc chắn <x; [r,n) chắc chắn ≥x.", code: `int l=0, r=n;\nwhile (l<r) {\n  int mid=l+(r-l)/2;\n  if (a[mid]<x) l=mid+1;\n  else r=mid;\n}\n// l là first >= x`, trap: "Kết quả có thể bằng n; phải kiểm tra trước khi đọc a[l]." },
    { id: "upper", name: "Upper Bound", when: "Cần vị trí đầu tiên có a[i]>x hoặc đếm số phần tử ≤x.", invariant: "[0,l) chắc chắn ≤x; [r,n) chắc chắn >x.", code: `int l=0, r=n;\nwhile (l<r) {\n  int mid=l+(r-l)/2;\n  if (a[mid]<=x) l=mid+1;\n  else r=mid;\n}\n// l là first > x`, trap: "Khác lower_bound đúng một dấu bằng nhưng ý nghĩa biên đổi hoàn toàn." },
    { id: "first-true", name: "First True", when: "Predicate có dạng false…false,true…true và cần true đầu tiên.", invariant: "hi là đáp án khả thi; phần trước lo đã bị loại.", code: `long long lo=L, hi=R; // R phải true\nwhile (lo<hi) {\n  long long mid=lo+(hi-lo)/2;\n  if (check(mid)) hi=mid;\n  else lo=mid+1;\n}\n// lo = first true`, trap: "Cần bảo đảm tồn tại true hoặc xử lý riêng trường hợp không có đáp án." },
    { id: "last-true", name: "Last True", when: "Predicate có dạng true…true,false…false và cần true cuối.", invariant: "lo là đáp án khả thi; phần sau hi đã bị loại.", code: `long long lo=L, hi=R; // L phải true\nwhile (lo<hi) {\n  long long mid=lo+(hi-lo+1)/2;\n  if (check(mid)) lo=mid;\n  else hi=mid-1;\n}\n// lo = last true`, trap: "Phải dùng mid lệch phải (+1) để tránh lặp vô hạn khi lo+1=hi." }
  ],
  "bs-answer": [
    { id: "min-max", name: "Minimize Maximum", when: "Nhỏ nhất hóa một giới hạn lớn nhất: tải, tổng đoạn, thời gian hoàn thành.", invariant: "x không khả thi ở bên trái; x khả thi ở bên phải.", code: `ll lo=maxItem, hi=total;\nwhile (lo<hi) {\n  ll mid=lo+(hi-lo)/2;\n  if (feasible(mid)) hi=mid;\n  else lo=mid+1;\n}`, trap: "Đây là first true; cận dưới thường là phần tử bắt buộc lớn nhất, không mặc định bằng 0." },
    { id: "max-min", name: "Maximize Minimum", when: "Lớn nhất hóa khoảng cách/giá trị tối thiểu vẫn dựng được.", invariant: "x khả thi ở bên trái; x quá lớn không khả thi ở bên phải.", code: `ll lo=0, hi=maxPossible;\nwhile (lo<hi) {\n  ll mid=lo+(hi-lo+1)/2;\n  if (feasible(mid)) lo=mid;\n  else hi=mid-1;\n}`, trap: "Đây là last true; mid phải lệch phải." },
    { id: "kth-count", name: "K-th qua hàm đếm", when: "Tìm giá trị nhỏ thứ k nhưng không thể sinh/sort toàn bộ tập giá trị.", invariant: "count(x)<k ở trái; count(x)≥k ở phải.", code: `ll lo=minValue, hi=maxValue;\nwhile (lo<hi) {\n  ll mid=lo+(hi-lo)/2;\n  if (countLE(mid)>=k) hi=mid;\n  else lo=mid+1;\n}`, trap: "countLE(x) phải đếm theo giá trị, không phải theo chỉ số, và phải đơn điệu không giảm." },
    { id: "real", name: "Binary Search số thực", when: "Đáp án là số thực và kiểm tra được một ngưỡng gần đúng.", invariant: "Đáp án luôn nằm trong [lo,hi] sau mỗi vòng.", code: `double lo=L, hi=R;\nfor (int it=0; it<80; ++it) {\n  double mid=(lo+hi)/2;\n  if (feasible(mid)) lo=mid;\n  else hi=mid;\n}\ncout << fixed << setprecision(6) << lo;`, trap: "Hướng cập nhật phụ thuộc bài maximize hay minimize; số vòng cố định ổn định hơn so sánh epsilon." }
  ],
  "sorting-greedy": [
    { id: "interval", name: "Chọn interval", when: "Chọn nhiều đoạn không giao nhau nhất.", invariant: "Sau mỗi lần chọn, end là thời điểm kết thúc nhỏ nhất có thể của lịch hiện tại.", code: `sort(seg.begin(),seg.end(),[](auto a,auto b){return a.r<b.r;});\nint end=-INF, ans=0;\nfor(auto [l,r]:seg) if(l>=end){\n  ++ans; end=r;\n}`, trap: "Tiêu chí là thời điểm kết thúc, không phải bắt đầu hay độ dài." },
    { id: "deadline", name: "Deadline feasibility", when: "Kiểm tra mọi công việc đơn vị có kịp deadline với p việc/ngày.", invariant: "i+1 công việc deadline nhỏ nhất phải vừa trong năng lực đến d[i].", code: `sort(d.begin(),d.end());\nbool ok=true;\nfor(int i=0;i<n;++i)\n  if(1LL*(i+1)>1LL*p*d[i]) ok=false;`, trap: "Nhớ nhân bằng long long; điều kiện phải kiểm tra mọi prefix." },
    { id: "heap-select", name: "Greedy + Heap", when: "Duyệt theo deadline nhưng có thể bỏ một lựa chọn tệ để giữ nhiều việc nhất.", invariant: "Heap giữ tập công việc đã chọn; total là tổng thời gian của chúng.", code: `sort(job.begin(),job.end());\npriority_queue<int> used; ll total=0;\nfor(auto [d,t]:job){\n total+=t; used.push(t);\n if(total>d){ total-=used.top(); used.pop(); }\n}`, trap: "Heap phải bỏ thời lượng lớn nhất; sort theo deadline trước." }
  ],
  "number-theory": [
    { id: "gcd-lcm", name: "GCD / LCM", when: "Chu kỳ chung, phân số, chia nhóm đều hoặc giao của điều kiện chia hết.", invariant: "gcd(a,b)=gcd(b,a%b).", code: `ll g=std::gcd(a,b);\nll l=a/g*b; // giảm nguy cơ overflow\n// a*x + b*y hoặc inverse cần extended gcd riêng`, trap: "Tính a*b/g dễ overflow hơn a/g*b; lcm của 0 cần xử lý theo đề." },
    { id: "sieve", name: "Sieve nguyên tố", when: "Cần biết tính nguyên tố/factor nhỏ nhất cho nhiều số đến N.", invariant: "Khi xử lý i, mọi hợp số nhỏ hơn i đã được đánh dấu.", code: `vector<bool> prime(N+1,true);\nprime[0]=prime[1]=false;\nfor(int i=2;i*i<=N;++i) if(prime[i])\n for(long long j=1LL*i*i;j<=N;j+=i) prime[j]=false;`, trap: "Bắt đầu j=i*i và dùng long long cho i*i." },
    { id: "inclusion", name: "Inclusion–Exclusion", when: "Đếm phần tử thuộc ít nhất một trong vài tập điều kiện.", invariant: "Cộng giao lẻ, trừ giao chẵn.", code: `ll cnt=0;\nfor(int mask=1;mask<(1<<m);++mask){\n ll l=1; int bits=0;\n for(int i=0;i<m;++i) if(mask>>i&1){ l=lcm(l,v[i]); ++bits; }\n cnt += (bits&1 ? x/l : -x/l);\n}`, trap: "Chặn LCM vượt x/overflow; số tập lớn làm 2^m không khả thi." },
    { id: "divisors", name: "Duyệt ước", when: "Cần liệt kê/đếm ước của một số đơn lẻ.", invariant: "Mỗi ước d≤sqrt(n) ghép với n/d.", code: `vector<ll> divs;\nfor(ll d=1;d*d<=n;++d) if(n%d==0){\n divs.push_back(d);\n if(d*d!=n) divs.push_back(n/d);\n}\nsort(divs.begin(),divs.end());`, trap: "Không thêm n/d hai lần khi d*d=n." }
  ],
  "graph-basic": [
    { id: "bfs", name: "BFS", when: "Khoảng cách ít cạnh nhất hoặc duyệt theo lớp trên graph không trọng số.", invariant: "Khi một đỉnh được push lần đầu, dist của nó đã tối ưu.", code: `queue<int> q; vector<int> dist(n,-1);\ndist[s]=0; q.push(s);\nwhile(!q.empty()){\n int u=q.front(); q.pop();\n for(int v:adj[u]) if(dist[v]==-1){dist[v]=dist[u]+1;q.push(v);}\n}`, trap: "Đánh dấu khi push, không chờ đến lúc pop." },
    { id: "dfs", name: "DFS", when: "Thành phần liên thông, subtree, backtracking trên graph/cây.", invariant: "Mỗi đỉnh được vào đúng một lần trong một lượt duyệt.", code: `void dfs(int u){\n vis[u]=true;\n for(int v:adj[u]) if(!vis[v]) dfs(v);\n}`, trap: "Graph sâu có thể tràn stack; graph vô hướng phải tránh đi lại parent/visited." },
    { id: "topo", name: "Topological Sort", when: "Quan hệ phụ thuộc trên DAG, cần thứ tự sao cho u trước v với mọi cạnh u→v.", invariant: "Queue chỉ chứa đỉnh có indegree còn lại bằng 0.", code: `queue<int> q;\nfor(int i=0;i<n;++i) if(indeg[i]==0) q.push(i);\nwhile(!q.empty()){\n int u=q.front();q.pop(); order.push_back(u);\n for(int v:adj[u]) if(--indeg[v]==0) q.push(v);\n}`, trap: "Nếu order.size()<n thì graph có chu trình, không có topo đầy đủ." }
  ],
  "shortest-path": [
    { id: "dijkstra", name: "Dijkstra", when: "Shortest path từ một nguồn, mọi trọng số không âm.", invariant: "Entry (du,u) hợp lệ khi du==dist[u]; relax chỉ giảm dist.", code: `priority_queue<P,vector<P>,greater<P>> pq;\ndist[s]=0; pq.push({0,s});\nwhile(!pq.empty()){ auto [du,u]=pq.top();pq.pop();\n if(du!=dist[u]) continue;\n for(auto [v,w]:adj[u]) if(dist[v]>du+w){dist[v]=du+w;pq.push({dist[v],v});}\n}`, trap: "Không dùng với cạnh âm; priority_queue mặc định là max-heap." },
    { id: "zero-one", name: "0–1 BFS", when: "Trọng số cạnh chỉ là 0 hoặc 1.", invariant: "Đỉnh tốt hơn qua cạnh 0 vào đầu deque; cạnh 1 vào cuối.", code: `deque<int> dq; dist[s]=0; dq.push_front(s);\nwhile(!dq.empty()){ int u=dq.front();dq.pop_front();\n for(auto [v,w]:adj[u]) if(dist[v]>dist[u]+w){\n  dist[v]=dist[u]+w;\n  if(w==0)dq.push_front(v); else dq.push_back(v);\n }\n}`, trap: "Chỉ đúng khi w∈{0,1}; trọng số khác dùng Dijkstra." },
    { id: "kruskal", name: "Kruskal + DSU", when: "Cần minimum spanning tree, không phải đường đi ngắn nhất.", invariant: "Các cạnh đã chọn không tạo chu trình và là rẻ nhất có thể đến hiện tại.", code: `sort(edges.begin(),edges.end());\nll cost=0; int used=0;\nfor(auto [w,u,v]:edges) if(find(u)!=find(v)){\n unite(u,v); cost+=w; ++used;\n}`, trap: "Kết thúc cần used==n-1; nếu không graph không liên thông." }
  ],
  "dp-basic": [
    { id: "linear", name: "DP tuyến tính", when: "State i chỉ phụ thuộc vài trạng thái trước trên dãy.", invariant: "Trước khi tính dp[i], mọi state mà nó phụ thuộc đã xong.", code: `vector<ll> dp(n+1,-INF);\ndp[0]=0;\nfor(int i=1;i<=n;++i){\n dp[i]=dp[i-1];\n if(i>=2) dp[i]=max(dp[i],dp[i-2]+a[i-1]);\n}`, trap: "Phải định nghĩa dp[i] bằng câu đầy đủ; base và chỉ số phụ thuộc định nghĩa đó." },
    { id: "grid", name: "DP lưới", when: "Đi trên grid theo hướng cố định, đếm cách hoặc tối ưu chi phí.", invariant: "Mỗi ô chỉ phụ thuộc các ô đã được duyệt trước theo thứ tự hàng/cột.", code: `dp[0][0]=a[0][0];\nfor(int i=0;i<n;++i) for(int j=0;j<m;++j){\n if(i) relax(dp[i][j],dp[i-1][j]+a[i][j]);\n if(j) relax(dp[i][j],dp[i][j-1]+a[i][j]);\n}`, trap: "Khởi tạo INF/-INF đúng bài min/max; không để ô không tới được sinh nghiệm giả." },
    { id: "knapsack", name: "0/1 Knapsack", when: "Mỗi vật chọn tối đa một lần, có giới hạn tổng capacity.", invariant: "Khi xử lý vật hiện tại, dp[cap-w] vẫn thuộc vòng vật trước.", code: `vector<ll> dp(W+1,-INF); dp[0]=0;\nfor(auto [w,val]:item)\n for(int cap=W;cap>=w;--cap)\n  if(dp[cap-w]!=-INF)\n   dp[cap]=max(dp[cap],dp[cap-w]+val);`, trap: "0/1 phải duyệt cap giảm; duyệt tăng biến thành unbounded knapsack." },
    { id: "state-machine", name: "DP trạng thái", when: "Mỗi vị trí có vài trạng thái như cầm/không cầm, đã dùng/chưa dùng quyền.", invariant: "dp[i][state] chứa toàn bộ thông tin quá khứ cần cho tương lai.", code: `for(int i=0;i<n;++i){\n for(int st=0;st<S;++st) if(dp[i][st]!=INF){\n  for(auto [nst,cost]:trans(i,st))\n   dp[i+1][nst]=min(dp[i+1][nst],dp[i][st]+cost);\n }\n}`, trap: "Thiếu một chiều state làm mất thông tin; thừa state làm độ phức tạp nổ." }
  ],
  "range-query": [
    { id: "fenwick", name: "Fenwick Tree", when: "Point update + prefix/range sum, cần code ngắn O(log n).", invariant: "bit[i] lưu tổng một đoạn có độ dài lowbit(i) trong chỉ số 1-based.", code: `void add(int i,ll v){for(++i;i<=n;i+=i&-i)bit[i]+=v;}\nll sum(int i){ll s=0;for(++i;i>0;i-=i&-i)s+=bit[i];return s;}\nll range(int l,int r){return sum(r)-sum(l-1);}`, trap: "Update giá trị mới phải truyền delta=new-old; đừng lẫn 0-based ngoài và 1-based trong." },
    { id: "segment-point", name: "Segment Tree cơ bản", when: "Point update + range query với phép gộp kết hợp như sum/min/max.", invariant: "Mỗi node lưu merge của đúng đoạn mà nó đại diện.", code: `void update(int p,ll v,int x,int l,int r){\n if(l==r){st[x]=v;return;} int m=(l+r)/2;\n if(p<=m)update(p,v,2*x,l,m); else update(p,v,2*x+1,m+1,r);\n st[x]=merge(st[2*x],st[2*x+1]);\n}`, trap: "Giá trị neutral của query phải đúng phép: 0 cho sum, INF cho min, -INF cho max." },
    { id: "lazy", name: "Lazy Propagation", when: "Range update + range query mà cập nhật từng phần tử quá chậm.", invariant: "lazy[x] là cập nhật chưa đẩy xuống con nhưng đã phản ánh đúng ở st[x].", code: `void apply(int x,int l,int r,ll v){st[x]+=v*(r-l+1);lazy[x]+=v;}\nvoid push(int x,int l,int r){\n if(!lazy[x]||l==r)return; int m=(l+r)/2;\n apply(2*x,l,m,lazy[x]); apply(2*x+1,m+1,r,lazy[x]); lazy[x]=0;\n}`, trap: "Công thức apply phụ thuộc loại update/query; range add+sum khác range assign+min." }
  ],
  "strings": [
    { id: "kmp", name: "KMP / Prefix Function", when: "Tìm pattern trong text hoặc xử lý border của chuỗi.", invariant: "pi[i] là độ dài border dài nhất của s[0..i].", code: `vector<int> pi(n);\nfor(int i=1;i<n;++i){int j=pi[i-1];\n while(j&&s[i]!=s[j])j=pi[j-1];\n if(s[i]==s[j])++j; pi[i]=j;\n}`, trap: "Khi mismatch lùi j=pi[j-1], không phải j--." },
    { id: "hash", name: "Rolling Hash", when: "Nhiều truy vấn hash/ substring hoặc so sánh chuỗi con nhanh.", invariant: "pref[i] là hash của i ký tự đầu theo cùng base/mod.", code: `h[i+1]=(h[i]*BASE+s[i])%MOD;\npw[i+1]=pw[i]*BASE%MOD;\nauto get=[&](int l,int r){\n return (h[r+1]-h[l]*pw[r-l+1]%MOD+MOD)%MOD;\n};`, trap: "Hash có collision; dùng double hash hoặc xác minh nếu độ chính xác tuyệt đối quan trọng." },
    { id: "trie", name: "Trie", when: "Nhiều từ và truy vấn prefix/chèn/tìm kiếm theo ký tự.", invariant: "Đường từ root tới node biểu diễn đúng một prefix.", code: `int node=0;\nfor(char c:s){int x=c-'a';\n if(!nxt[node][x])nxt[node][x]=++nodes;\n node=nxt[node][x];\n}\nterminal[node]=true;`, trap: "Bộ nhớ O(tổng độ dài × alphabet) có thể lớn; cân nhắc map hoặc vector cạnh." }
  ],
  "tree": [
    { id: "subtree", name: "DFS Subtree", when: "Cần size/tổng/DP của mỗi cây con.", invariant: "Sau khi xử lý mọi con v, giá trị của u được gộp đầy đủ.", code: `void dfs(int u,int p){\n sz[u]=1;\n for(int v:adj[u])if(v!=p){\n  dfs(v,u); sz[u]+=sz[v];\n }\n}`, trap: "Phải tránh parent; cây dây sâu có thể cần DFS iterative." },
    { id: "euler", name: "Euler Tour", when: "Biến toàn bộ subtree thành một đoạn để dùng Fenwick/segment tree.", invariant: "Các đỉnh trong subtree(u) nằm liên tiếp ở [tin[u],tout[u]].", code: `void dfs(int u,int p){\n tin[u]=timer++;\n for(int v:adj[u])if(v!=p)dfs(v,u);\n tout[u]=timer-1;\n}`, trap: "Có nhiều kiểu Euler tour; phải biết đang lưu mỗi đỉnh một lần hay cả lúc vào/ra." },
    { id: "lca", name: "LCA Binary Lifting", when: "Nhiều truy vấn tổ tiên chung/khoảng cách trên cây tĩnh.", invariant: "up[v][j] là tổ tiên cách v đúng 2^j cạnh.", code: `for(int j=1;j<LOG;++j)up[v][j]=up[up[v][j-1]][j-1];\nfor(int j=LOG-1;j>=0;--j)\n if(depth[up[u][j]]>=depth[v])u=up[u][j];`, trap: "Cần quy ước parent của root an toàn và LOG đủ lớn cho n." }
  ],
  "advanced-dp": [
    { id: "bitmask", name: "Bitmask DP", when: "n nhỏ khoảng 20 và state là tập phần tử đã chọn/thăm.", invariant: "Mask mã hóa đầy đủ tập đã dùng; transition thêm một bit chưa có.", code: `vector<ll> dp(1<<n,INF); dp[0]=0;\nfor(int mask=0;mask<(1<<n);++mask)\n for(int j=0;j<n;++j)if(!(mask>>j&1))\n  dp[mask|1<<j]=min(dp[mask|1<<j],dp[mask]+cost(mask,j));`, trap: "Ước lượng 2^n*n trước; n=25 thường đã quá lớn." },
    { id: "lis", name: "LIS O(n log n)", when: "Độ dài dãy con tăng dài nhất, n lớn.", invariant: "tail[len-1] là giá trị cuối nhỏ nhất của một dãy tăng độ dài len.", code: `vector<int> tail;\nfor(int x:a){\n auto it=lower_bound(tail.begin(),tail.end(),x);\n if(it==tail.end())tail.push_back(x); else *it=x;\n}\nint lis=tail.size();`, trap: "Tăng nghiêm ngặt dùng lower_bound; không giảm dùng upper_bound." },
    { id: "digit", name: "Digit DP", when: "Đếm số ≤N thỏa tính chất theo chữ số.", invariant: "State gồm vị trí, tight, started và đủ thông tin của prefix đã chọn.", code: `ll dfs(int pos,bool tight,bool started,int state){\n if(pos==digits.size())return accept(state,started);\n ll ans=0; int hi=tight?digits[pos]:9;\n for(int d=0;d<=hi;++d)\n  ans+=dfs(pos+1,tight&&d==hi,started||d,next(state,d));\n return ans;\n}`, trap: "Memo thường chỉ cache state tight=false; xử lý số 0/started theo đúng đề." }
  ],
  "mixed": [
    { id: "sort-two", name: "Sort + Two Pointers", when: "Sort tạo tính đơn điệu rồi hai con trỏ loại nghiệm.", invariant: "Sau sort, mỗi bước dịch một con trỏ loại được cả một nhóm trường hợp.", code: `sort(a.begin(),a.end());\nint l=0,r=n-1;\nwhile(l<r){\n if(valid(a[l],a[r])){/* count/take */ --r;}\n else ++l;\n}`, trap: "Sort có thể làm mất vị trí gốc; lưu pair(value,id) nếu output cần id." },
    { id: "prefix-bs", name: "Prefix + Binary Search", when: "Check một đáp án cần hỏi nhanh tổng/min prefix trên đoạn.", invariant: "Mỗi check(mid) chạy O(n); predicate theo mid phải đơn điệu.", code: `auto check=[&](double mid){\n pref[0]=0; for(int i=0;i<n;++i)pref[i+1]=pref[i]+a[i]-mid;\n double mn=0;\n for(int r=k;r<=n;++r){mn=min(mn,pref[r-k]);if(pref[r]>=mn)return true;}\n return false;\n};`, trap: "Phải cập nhật min prefix chỉ đến r-k để đảm bảo độ dài đoạn ≥k." },
    { id: "offline", name: "Offline Sort Events", when: "Có thể sắp xếp query cùng dữ liệu theo một ngưỡng rồi trả lời dần.", invariant: "Khi xử lý query x, cấu trúc đã chứa đúng mọi phần tử có key≤x.", code: `sort(item.begin(),item.end());\nsort(query.begin(),query.end()); int p=0;\nfor(auto [x,id]:query){\n while(p<n&&item[p].key<=x)add(item[p++]);\n ans[id]=get();\n}`, trap: "Phải lưu id query để trả kết quả về thứ tự ban đầu." }
  ],
  "contest": [
    { id: "scan", name: "Scan & Timebox", when: "Đầu contest và mỗi khi kẹt quá ngưỡng.", invariant: "Luôn ưu tiên điểm kỳ vọng cao nhất trên mỗi phút còn lại.", code: `// 0-10': scan toàn bộ\n// Gắn A: chắc, B: có hướng, C: chưa rõ\n// Nếu quá timebox chưa tiến triển: lưu ý tưởng, chuyển bài\n// 15' cuối: test biên và submit`, trap: "Timebox là ngưỡng chuyển bài, không phải bỏ bài vĩnh viễn." },
    { id: "subtask", name: "Subtask First", when: "Đề có subtasks rõ và lời giải full chưa chắc kịp.", invariant: "Mỗi phần code phải khóa được một lượng điểm đã biết.", code: `// Đọc bảng subtask trước\n// Viết lời giải nhỏ đúng hoàn toàn\n// Submit để khóa điểm\n// Sau đó mở rộng constraint từng bước`, trap: "Đừng phá lời giải subtask đang AC nếu chưa giữ một phiên bản an toàn." },
    { id: "debug", name: "Debug Checklist", when: "Logic có vẻ đúng nhưng WA/RE/TLE.", invariant: "Mỗi lần test chỉ nhắm vào một nhóm giả thuyết lỗi.", code: `// Biên: n=1, rỗng, all equal\n// Số: overflow, INF, precision\n// State: reset giữa test\n// Index: 0/1-based, [l,r]\n// Complexity: vòng lặp ẩn`, trap: "Không sửa ngẫu nhiên nhiều chỗ cùng lúc; sẽ không biết thay đổi nào thực sự sửa lỗi." }
  ]
};

const STORAGE_KEY = "olp2026-tracker-v1";

function makeId() {
  return globalThis.crypto?.randomUUID?.() || `olp-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
}

function initialState() {
  return {
    topics: Object.fromEntries(TOPICS.map((topic) => [topic.id, { solved: 0, confidence: 1, complete: false }])),
    checks: {},
    exercises: {},
    sessions: [],
    mocks: [],
    errors: [],
    reviews: {},
    dailyPlan: null,
    profileId: null,
    profile: { name: "Kim Quang", goal: "OLP Tin học 2026", defaultMinutes: 60 },
    classroom: { students: [] },
    mode: "student",
    cloudClass: null,
    aiCodeReviews: [],
    aiReasoningReviews: [],
    syncMeta: { deviceId: makeId(), lastSyncedAt: null, dirtyAt: null },
    updatedAt: new Date().toISOString()
  };
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!saved) return initialState();
    const base = initialState();
    return {
      ...base,
      ...saved,
      topics: Object.fromEntries(TOPICS.map((topic) => [topic.id, { ...base.topics[topic.id], ...(saved.topics?.[topic.id] || {}) }])),
      sessions: Array.isArray(saved.sessions) ? saved.sessions : [],
      mocks: Array.isArray(saved.mocks) ? saved.mocks : [],
      errors: Array.isArray(saved.errors) ? saved.errors : [],
      aiCodeReviews: Array.isArray(saved.aiCodeReviews) ? saved.aiCodeReviews : [],
      aiReasoningReviews: Array.isArray(saved.aiReasoningReviews) ? saved.aiReasoningReviews : [],
      reviews: saved.reviews || {},
      profile: { ...base.profile, ...(saved.profile || {}) },
      classroom: saved.classroom || base.classroom,
      syncMeta: { ...base.syncMeta, ...(saved.syncMeta || {}) },
      mode: saved.mode || "student"
    };
  } catch {
    return initialState();
  }
}

let state = loadState();
let activePhase = "all";
let activeExerciseFilter = "all";
let toastTimer;

const $ = (selector) => document.querySelector(selector);
const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const escapeHTML = (value) => String(value)
  .replaceAll("&", "&amp;")
  .replaceAll("<", "&lt;")
  .replaceAll(">", "&gt;")
  .replaceAll('"', "&quot;")
  .replaceAll("'", "&#039;");
const localDateKey = (date = new Date()) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

function saveState(message = "Đã lưu tiến độ") {
  state.updatedAt = new Date().toISOString();
  state.syncMeta ||= { deviceId: makeId(), lastSyncedAt: null, dirtyAt: null };
  state.syncMeta.dirtyAt = state.updatedAt;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  $("#saveState").innerHTML = navigator.onLine ? "<i></i> Đã lưu · chờ đồng bộ" : "<i></i> Offline · đã lưu cục bộ";
  showToast(message);
  scheduleCloudSync();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2100);
}

function topicProgress(topic) {
  const value = state.topics[topic.id];
  const solvedRatio = clamp(value.solved / topic.target, 0, 1);
  const confidenceRatio = clamp((value.confidence - 1) / 4, 0, 1);
  return value.complete ? 1 : solvedRatio * 0.7 + confidenceRatio * 0.3;
}

function phaseProgress(phaseId) {
  const topics = TOPICS.filter((topic) => topic.phase === phaseId);
  return topics.reduce((sum, topic) => sum + topicProgress(topic), 0) / topics.length;
}

function totalReadiness() {
  const weights = { 1: 0.38, 2: 0.39, 3: 0.23 };
  return PHASES.reduce((sum, phase) => sum + phaseProgress(phase.id) * weights[phase.id], 0);
}

function getRecommendation() {
  const sessionsSinceMock = sessionsAfterLastMock();
  const availableTopicCount = TOPICS.filter((topic) => state.topics[topic.id].solved > 0 || state.topics[topic.id].complete).length;
  const hasRecordedProgress = availableTopicCount > 0 || state.sessions.length > 0 || state.mocks.length > 0;
  if (!hasRecordedProgress) {
    const startingTopic = TOPICS.find((topic) => topic.id === "bs-answer");
    return { ...startingTopic, mock: false, reason: "Điểm vào theo bài MarisaOJ m đang luyện" };
  }
  if (sessionsSinceMock >= 10 && availableTopicCount >= 2) return { mock:true, code:"MIX", name:"Mixed mock 60 phút", reason:"Checkpoint: đã đủ 10 buổi từ mock gần nhất" };
  const ranked = TOPICS.map(topic=>({topic, priority:topicPriority(topic), mastery:topicMastery(topic)})).sort((a,b)=>b.priority-a.priority);
  const best = ranked[0];
  const due = reviewInfo(best.topic.id).due;
  let reason = `Smart Coach · mastery ${Math.round(best.mastery*100)}%`;
  if (due) reason += " · đang đến hạn ôn";
  const recentErrors = state.errors.filter(e=>e.topicId===best.topic.id && daysSince(e.createdAt)<14).length;
  if (recentErrors) reason += ` · ${recentErrors} lỗi gần đây`;
  return { ...best.topic, mock:false, reason };
}

function sessionsAfterLastMock() {
  if (!state.mocks.length) return state.sessions.length;
  const lastMockTime = Math.max(...state.mocks.map((mock) => new Date(mock.createdAt).getTime()));
  return state.sessions.filter((session) => new Date(session.createdAt).getTime() > lastMockTime).length;
}

function currentStreak() {
  const dates = new Set(state.sessions.map((session) => localDateKey(new Date(session.createdAt))));
  let cursor = new Date();
  if (!dates.has(localDateKey(cursor))) cursor.setDate(cursor.getDate() - 1);
  let streak = 0;
  while (dates.has(localDateKey(cursor))) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}


const REVIEW_INTERVALS = [1, 3, 7, 14, 30];
const SUPABASE_CONFIG_KEY = "olp2026-supabase-config";
let cloudClient = null;
let cloudUser = null;
let cloudSyncTimer = null;
let quickReviewCards = [];
let quickReviewIndex = 0;

function daysSince(value) {
  if (!value) return 999;
  return Math.max(0, (Date.now() - new Date(value).getTime()) / 86400000);
}

function reviewInfo(topicId) {
  const review = state.reviews?.[topicId];
  if (!review?.lastReviewedAt) return { due: state.topics[topicId]?.solved > 0, daysLeft: 0, interval: 1, level: 0 };
  const level = clamp(Number(review.level || 0), 0, REVIEW_INTERVALS.length - 1);
  const interval = REVIEW_INTERVALS[level];
  const elapsed = daysSince(review.lastReviewedAt);
  return { due: elapsed >= interval, daysLeft: Math.ceil(interval - elapsed), interval, level };
}

function topicMastery(topic) {
  const value = state.topics[topic.id];
  const progress = topicProgress(topic);
  const topicSessions = state.sessions.filter((s) => s.topicId === topic.id);
  const recent = topicSessions.slice(-4);
  const quality = recent.length ? recent.reduce((sum, s) => sum + Number(s.quality || 3), 0) / recent.length / 5 : 0.35;
  const quiz = state.checks?.[topic.id]?.passed ? 1 : 0.25;
  const lastTouch = [...topicSessions.map((s) => s.createdAt), state.reviews?.[topic.id]?.lastReviewedAt].filter(Boolean).sort().at(-1);
  const retention = lastTouch ? clamp(1 - daysSince(lastTouch) / 45, 0.3, 1) : 0.45;
  return clamp((progress * 0.52 + quality * 0.23 + quiz * 0.15 + retention * 0.10), 0, 1);
}

function topicPriority(topic) {
  const masteryGap = 1 - topicMastery(topic);
  const review = reviewInfo(topic.id);
  const errors = state.errors.filter((e) => e.topicId === topic.id && daysSince(e.createdAt) <= 21).length;
  const activity = state.sessions.filter((s) => s.topicId === topic.id).length;
  return masteryGap * 60 + (review.due ? 24 : 0) + Math.min(errors * 8, 24) + (activity ? 0 : 8);
}

function smartCoach() {
  const ranked = TOPICS.map((topic) => ({ topic, mastery: topicMastery(topic), priority: topicPriority(topic), review: reviewInfo(topic.id) }))
    .sort((a, b) => b.priority - a.priority);
  const focus = ranked[0];
  const average = ranked.reduce((sum, item) => sum + item.mastery, 0) / ranked.length;
  const riskCount = ranked.filter((item) => item.review.due || item.mastery < 0.42).length;
  return { ranked, focus, average, riskCount };
}

function generateDailyPlan() {
  const coach = smartCoach();
  const minutes = clamp(Number(state.profile?.defaultMinutes || 60), 30, 240);
  const reviewMinutes = Math.max(8, Math.round(minutes * 0.2));
  const practiceMinutes = Math.max(15, Math.round(minutes * 0.6));
  const reflectMinutes = Math.max(7, minutes - reviewMinutes - practiceMinutes);
  state.dailyPlan = {
    createdAt: new Date().toISOString(), minutes, topicId: coach.focus.topic.id,
    steps: [
      { minutes: reviewMinutes, title: "Recall không nhìn lời giải", detail: `Ôn ${coach.focus.topic.name}: template, invariant và 1 bẫy từng gặp.` },
      { minutes: practiceMinutes, title: "Deep practice", detail: `Giải 1–2 bài ${coach.focus.topic.name}; timebox 12 phút nếu chưa có hướng.` },
      { minutes: reflectMinutes, title: "Chốt vòng lặp", detail: "Ghi lỗi nếu có, cập nhật confidence và lên lịch ôn tiếp theo." }
    ]
  };
  saveState("Đã tạo buổi luyện cá nhân hóa");
  renderTrainingIntelligence();
}

function markReviewed(topicId, quality = "good") {
  const current = state.reviews?.[topicId] || { level: 0 };
  const nextLevel = quality === "good" ? clamp(Number(current.level || 0) + 1, 0, REVIEW_INTERVALS.length - 1) : Math.max(0, Number(current.level || 0) - 1);
  state.reviews[topicId] = { level: nextLevel, lastReviewedAt: new Date().toISOString() };
  saveState(quality === "good" ? `Đã ôn · lần tới sau ${REVIEW_INTERVALS[nextLevel]} ngày` : "Đã đánh dấu cần ôn lại sớm");
  renderTrainingIntelligence();
  buildQuickReview();
}

function renderTrainingIntelligence() {
  const coach = smartCoach();
  $("#coachMastery").textContent = `${Math.round(coach.average * 100)}%`;
  $("#coachRisk").textContent = coach.riskCount ? `${coach.riskCount} topic cần chú ý` : "Nhịp học ổn";
  $("#coachFocus").textContent = `Ưu tiên: ${coach.focus.topic.name}`;
  const recentErrors = state.errors.filter((e) => e.topicId === coach.focus.topic.id && daysSince(e.createdAt) <= 21).length;
  $("#coachExplanation").textContent = `${coach.focus.review.due ? "Đã đến hạn ôn. " : ""}Mastery ${Math.round(coach.focus.mastery * 100)}%${recentErrors ? ` · ${recentErrors} lỗi trong 21 ngày gần đây` : ""}. Smart Coach ưu tiên topic có mastery thấp, lỗi lặp và nguy cơ quên.`;
  $("#masteryBars").innerHTML = coach.ranked.slice(0, 5).map((item) => `<div class="mastery-row"><span>${escapeHTML(item.topic.code)}</span><div class="mastery-track"><span style="width:${Math.round(item.mastery*100)}%"></span></div><b>${Math.round(item.mastery*100)}%</b></div>`).join("");

  if (!state.dailyPlan) {
    state.dailyPlan = { minutes: Number(state.profile?.defaultMinutes || 60), topicId: coach.focus.topic.id, steps: [
      { minutes: 10, title: "Quick review", detail: "Recall template và lỗi cũ." },
      { minutes: 40, title: "Practice", detail: `Giải bài ${coach.focus.topic.name}.` },
      { minutes: 10, title: "Reflect", detail: "Chốt lỗi và confidence." }
    ]};
  }
  $("#dailyPlanDuration").textContent = `${state.dailyPlan.minutes || 60} phút`;
  $("#dailyPlan").innerHTML = state.dailyPlan.steps.map((step) => `<div class="plan-step"><span>${step.minutes}'</span><div><strong>${escapeHTML(step.title)}</strong><small>${escapeHTML(step.detail)}</small></div></div>`).join("");

  const typeLabel = { recognition:"Nhận dạng", boundary:"Sai biên", implementation:"Implementation", complexity:"TLE", overflow:"Overflow", debug:"Debug", concept:"Kiến thức" };
  const recent = [...state.errors].sort((a,b)=>new Date(b.createdAt)-new Date(a.createdAt)).slice(0,4);
  $("#errorInsights").innerHTML = recent.length ? recent.map((e) => {
    const topic = TOPICS.find((t)=>t.id===e.topicId);
    return `<div class="insight-item"><strong>${escapeHTML(topic?.name || "Topic")}</strong><small>${escapeHTML(e.note || "Chưa có mô tả")}</small><span class="error-chip">${escapeHTML(typeLabel[e.type] || e.type)}</span></div>`;
  }).join("") : '<div class="insight-item"><strong>Chưa có lỗi được ghi</strong><small>Khi WA/TLE hoặc bí pattern, ghi một dòng để Smart Coach dùng cho lần ôn sau.</small></div>';

  const due = TOPICS.map((topic) => ({ topic, info: reviewInfo(topic.id) })).filter((item)=>item.info.due).sort((a,b)=>topicPriority(b.topic)-topicPriority(a.topic));
  $("#reviewDueCount").textContent = `${due.length} đến hạn`;
  $("#reviewDueList").innerHTML = due.length ? due.slice(0,5).map(({topic,info}) => `<div class="review-item"><div><strong>${escapeHTML(topic.name)}</strong><small>Chu kỳ hiện tại ${info.interval} ngày · mastery ${Math.round(topicMastery(topic)*100)}%</small></div><button type="button" data-review-topic="${topic.id}">Đã ôn</button></div>`).join("") : '<div class="insight-item"><strong>Không có topic đến hạn</strong><small>Tiếp tục buổi học hôm nay; lịch ôn sẽ tự mở theo chu kỳ 1–3–7–14–30 ngày.</small></div>';
}

function renderProfile() {
  const name = state.profile?.name || "Học sinh";
  $("#profileName").textContent = name;
  $("#profileInitial").textContent = name.trim().charAt(0).toUpperCase() || "H";
  if ($("#heroTitle")) $("#heroTitle").innerHTML = `Mỗi ngày một giờ.<br /><em>Đi đúng bài cần học.</em>`;
}

function switchMode(mode) {
  state.mode = mode === "teacher" ? "teacher" : "student";
  document.querySelectorAll(".mode-switch button").forEach((btn)=>btn.classList.toggle("active", btn.id === (state.mode === "teacher" ? "teacherModeButton" : "studentModeButton")));
  $("#studentIntelligence")?.classList.toggle("hidden", state.mode === "teacher");
  $("#teacherDashboard")?.classList.toggle("hidden", state.mode !== "teacher");
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  if (state.mode === "teacher") refreshCloudClass();
}

function renderTeacherDashboard() {
  const students = state.classroom?.students || [];
  const avg = students.length ? Math.round(students.reduce((sum,s)=>sum+Number(s.readiness||0),0)/students.length) : 0;
  $("#teacherSummary").innerHTML = `<div class="teacher-kpi"><strong>${students.length}</strong><span>hồ sơ local</span></div><div class="teacher-kpi"><strong>${avg}%</strong><span>readiness trung bình local</span></div><div class="teacher-kpi"><strong>${state.cloudClass?.code || "—"}</strong><span>mã lớp cloud</span></div>`;
  $("#studentTableBody").innerHTML = students.length ? students.map((s)=>`<tr><td><strong>${escapeHTML(s.name)}</strong><br><small>${escapeHTML(s.goal||"")}</small></td><td>${s.readiness}%</td><td>${escapeHTML(s.weakTopic||"—")}</td><td>${s.sessions||0}</td><td>${s.lastMock ?? "—"}</td><td><button type="button" data-remove-student="${s.id}">Xóa</button></td></tr>`).join("") : '<tr><td colspan="6">Chưa có hồ sơ local. Nếu đã nối Supabase, học sinh cloud sẽ xuất hiện ở khối bên dưới.</td></tr>';
  if ($("#cloudClassStatus")) $("#cloudClassStatus").textContent = state.cloudClass ? `Lớp ${state.cloudClass.name || "OLP"} · mã ${state.cloudClass.code}` : "Chưa nối lớp cloud";
  switchModeVisualOnly();
  if (typeof renderCodeReviewHistory === "function") renderCodeReviewHistory();
}

function switchModeVisualOnly() {
  document.querySelectorAll(".mode-switch button").forEach((btn)=>btn.classList.toggle("active", btn.id === (state.mode === "teacher" ? "teacherModeButton" : "studentModeButton")));
  $("#studentIntelligence")?.classList.toggle("hidden", state.mode === "teacher");
  $("#quickReviewSection")?.classList.toggle("hidden", state.mode === "teacher");
  $("#teacherDashboard")?.classList.toggle("hidden", state.mode !== "teacher");
}

function buildQuickReview() {
  const dueTopics = TOPICS.map((topic)=>({topic,info:reviewInfo(topic.id),priority:topicPriority(topic)})).filter((x)=>x.info.due || state.errors.some((e)=>e.topicId===x.topic.id && daysSince(e.createdAt)<21)).sort((a,b)=>b.priority-a.priority).slice(0,8);
  const source = dueTopics.length ? dueTopics : smartCoach().ranked.slice(0,4).map((x)=>({topic:x.topic}));
  quickReviewCards = source.map(({topic})=>{
    const lesson = LESSONS[topic.id];
    const errors = state.errors.filter((e)=>e.topicId===topic.id).slice(-2).map((e)=>e.note).filter(Boolean);
    return { topicId:topic.id, code:topic.code, title:topic.name, prompt: lesson?.recognise?.[0] || topic.note, answer: errors.length ? `Lỗi của bạn: ${errors.join(" · ")}` : (lesson?.mistakes?.[0] || lesson?.goal || topic.note) };
  });
  quickReviewIndex = clamp(quickReviewIndex,0,Math.max(0,quickReviewCards.length-1));
  renderQuickReview();
}

function renderQuickReview() {
  const card = quickReviewCards[quickReviewIndex];
  if (!card || !$("#flashcard")) return;
  $("#quickReviewCount").textContent = `${quickReviewIndex+1}/${quickReviewCards.length}`;
  $("#flashcardCode").textContent = card.code;
  $("#flashcardTitle").textContent = card.title;
  $("#flashcardPrompt").textContent = card.prompt;
  $("#flashcardAnswer").textContent = card.answer;
  $("#flashcard").classList.remove("revealed");
}

function nextQuickCard() {
  if (!quickReviewCards.length) return;
  quickReviewIndex = (quickReviewIndex + 1) % quickReviewCards.length;
  renderQuickReview();
}

function exportReviewCalendar() {
  const due = TOPICS.filter((t)=>reviewInfo(t.id).due).slice(0,10);
  if (!due.length) return showToast("Hiện chưa có topic đến hạn ôn");
  const date = localDateKey().replaceAll("-", "");
  const escapeICS = (s)=>String(s).replaceAll("\\","\\\\").replaceAll(";","\\;").replaceAll(",","\\,").replaceAll("\n","\\n");
  const events = due.map((topic,i)=>`BEGIN:VEVENT\r\nUID:${makeId()}@olp26\r\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g,"").replace(/\.\d{3}/,"")}\r\nDTSTART;VALUE=DATE:${date}\r\nSUMMARY:${escapeICS(`OLP Review · ${topic.name}`)}\r\nDESCRIPTION:${escapeICS(`Quick review ${topic.code} · mastery ${Math.round(topicMastery(topic)*100)}%`)}\r\nEND:VEVENT`).join("\r\n");
  const ics = `BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//OLP26//Review Calendar//VI\r\nCALSCALE:GREGORIAN\r\n${events}\r\nEND:VCALENDAR\r\n`;
  const blob = new Blob([ics], {type:"text/calendar;charset=utf-8"});
  const url=URL.createObjectURL(blob); const a=document.createElement("a"); a.href=url; a.download=`olp-review-${localDateKey()}.ics`; a.click(); URL.revokeObjectURL(url);
  showToast("Đã xuất lịch ôn .ics");
}

function getSupabaseConfig() {
  try { return JSON.parse(localStorage.getItem(SUPABASE_CONFIG_KEY)) || null; } catch { return null; }
}

function initCloudClient() {
  const config = getSupabaseConfig();
  if (!config?.url || !config?.anonKey || !window.supabase?.createClient) return null;
  if (!cloudClient) {
    cloudClient = window.supabase.createClient(config.url, config.anonKey, { auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true } });
    cloudClient.auth.onAuthStateChange((_event, session)=>{ cloudUser=session?.user||null; updateCloudUI(); if(cloudUser) setTimeout(()=>performCloudSync(), 50); });
  }
  return cloudClient;
}

async function bootstrapCloud() {
  const client = initCloudClient();
  if (!client) return updateCloudUI();
  const { data } = await client.auth.getSession();
  cloudUser = data.session?.user || null;
  updateCloudUI();
  if (cloudUser) performCloudSync();
}

function updateCloudUI() {
  const button=$("#cloudSyncButton"); if(!button) return;
  const configured=Boolean(getSupabaseConfig());
  button.title = cloudUser ? `Cloud: ${cloudUser.email || "đã đăng nhập"}` : (configured ? "Đăng nhập / đồng bộ Supabase" : "Cấu hình Supabase Sync");
  button.classList.toggle("cloud-on", Boolean(cloudUser));
  const status=$("#cloudAuthStatus"); if(status) status.textContent = cloudUser ? `Đã đăng nhập: ${cloudUser.email || cloudUser.id}` : (configured ? "Đã lưu cấu hình Supabase · chưa đăng nhập" : "Chưa cấu hình Supabase");
  const aiStatus=$("#aiCoachStatus"); if(aiStatus) aiStatus.textContent = cloudUser ? "AI Coach sẵn sàng" : "Cần đăng nhập Supabase";
  const codeStatus=$("#codeReviewStatus"); if(codeStatus) codeStatus.textContent = cloudUser ? "Sẵn sàng" : "Đăng nhập Supabase để bắt đầu";
  if ($("#cloudSignOutButton")) $("#cloudSignOutButton").classList.toggle("hidden", !cloudUser);
}

function openCloudDialog() {
  const config=getSupabaseConfig()||{};
  $("#supabaseUrlInput").value=config.url||""; $("#supabaseKeyInput").value=config.anonKey||"";
  updateCloudUI(); $("#cloudDialog").showModal();
}

async function saveCloudConfig(event) {
  event.preventDefault();
  const url=$("#supabaseUrlInput").value.trim().replace(/\/$/,""); const anonKey=$("#supabaseKeyInput").value.trim();
  if(!/^https:\/\/.+\.supabase\.co$/.test(url) || anonKey.length<20) return showToast("Kiểm tra lại Project URL và anon key");
  localStorage.setItem(SUPABASE_CONFIG_KEY, JSON.stringify({url,anonKey})); cloudClient=null; cloudUser=null; initCloudClient(); await bootstrapCloud(); showToast("Đã lưu cấu hình Supabase");
}

async function signInMagicLink() {
  const email=$("#cloudEmailInput").value.trim(); if(!email) return showToast("Nhập email trước");
  const client=initCloudClient(); if(!client) return showToast("Lưu cấu hình Supabase trước");
  const redirectTo = location.protocol === "file:" ? undefined : location.origin + location.pathname;
  const {error}=await client.auth.signInWithOtp({email, options: redirectTo ? {emailRedirectTo:redirectTo} : {}}); if(error) return showToast(error.message); showToast("Đã gửi magic link vào email");
}

async function signInGoogle() {
  const client=initCloudClient(); if(!client) return showToast("Lưu cấu hình Supabase trước");
  if(location.protocol === "file:") return showToast("Google Login cần mở app qua http/https");
  const {error}=await client.auth.signInWithOAuth({provider:"google",options:{redirectTo:location.origin+location.pathname}}); if(error) showToast(error.message);
}

function mergeById(a=[], b=[]) {
  const map=new Map(); [...a,...b].forEach((item)=>{ if(item?.id) { const old=map.get(item.id); if(!old || new Date(item.createdAt||item.updatedAt||0)>=new Date(old.createdAt||old.updatedAt||0)) map.set(item.id,item); }}); return [...map.values()];
}

function mergeStates(local, remote) {
  const base=initialState(); const merged={...base,...remote,...local};
  merged.topics=Object.fromEntries(TOPICS.map((t)=>{const l=local.topics?.[t.id]||{}; const r=remote.topics?.[t.id]||{}; return [t.id,{solved:Math.max(Number(l.solved||0),Number(r.solved||0)),confidence:Math.max(Number(l.confidence||1),Number(r.confidence||1)),complete:Boolean(l.complete||r.complete)}];}));
  merged.checks={...(remote.checks||{}),...(local.checks||{})}; merged.exercises={...(remote.exercises||{}),...(local.exercises||{})};
  merged.sessions=mergeById(remote.sessions,local.sessions); merged.mocks=mergeById(remote.mocks,local.mocks); merged.errors=mergeById(remote.errors,local.errors); merged.aiCodeReviews=mergeById(remote.aiCodeReviews,local.aiCodeReviews).sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0)).slice(0,12); merged.aiReasoningReviews=mergeById(remote.aiReasoningReviews,local.aiReasoningReviews).sort((a,b)=>new Date(b.createdAt||0)-new Date(a.createdAt||0)).slice(0,12);
  merged.reviews={...(remote.reviews||{})}; Object.entries(local.reviews||{}).forEach(([k,v])=>{const rv=merged.reviews[k]; if(!rv || new Date(v.lastReviewedAt||0)>=new Date(rv.lastReviewedAt||0)) merged.reviews[k]=v;});
  merged.updatedAt=new Date(Math.max(new Date(local.updatedAt||0),new Date(remote.updatedAt||0))).toISOString(); merged.syncMeta={...(local.syncMeta||{}),deviceId:local.syncMeta?.deviceId||makeId()};
  return merged;
}

function scheduleCloudSync() {
  clearTimeout(cloudSyncTimer); if(!cloudUser || !navigator.onLine) return;
  cloudSyncTimer=setTimeout(()=>performCloudSync(), 1200);
}

async function performCloudSync(force=false) {
  const client=initCloudClient(); if(!client) { if(force) openCloudDialog(); return; }
  if(!cloudUser) { const {data}=await client.auth.getSession(); cloudUser=data.session?.user||null; }
  if(!cloudUser) { if(force) openCloudDialog(); return; }
  const button=$("#cloudSyncButton"); button?.classList.add("syncing");
  try {
    const {data:row,error:readError}=await client.from("user_states").select("state,updated_at").eq("user_id",cloudUser.id).maybeSingle(); if(readError) throw readError;
    let next=state; if(row?.state) next=mergeStates(state,row.state);
    next.syncMeta ||= {}; next.syncMeta.lastSyncedAt=new Date().toISOString(); next.syncMeta.dirtyAt=null; next.updatedAt=new Date().toISOString();
    const {error:writeError}=await client.from("user_states").upsert({user_id:cloudUser.id,state:next,updated_at:next.updatedAt},{onConflict:"user_id"}); if(writeError) throw writeError;
    state=next; localStorage.setItem(STORAGE_KEY,JSON.stringify(state)); $("#saveState").innerHTML="<i></i> Đã đồng bộ cloud"; await upsertCloudProfile(); renderAll(); refreshCloudClass(); if(force) showToast("Đã đồng bộ giữa các thiết bị");
  } catch(error) { console.error(error); if(force) showToast(`Sync lỗi: ${error.message}`); $("#saveState").innerHTML="<i></i> Local · cloud chưa sync"; }
  finally { button?.classList.remove("syncing"); }
}

async function createCloudClass() {
  const client=initCloudClient(); if(!client || !cloudUser) return openCloudDialog();
  const name=prompt("Tên lớp", "OLP 2026")?.trim(); if(!name) return; const code=Math.random().toString(36).slice(2,8).toUpperCase();
  const {data,error}=await client.from("classes").insert({name,code,owner_id:cloudUser.id}).select().single(); if(error) return showToast(error.message);
  state.cloudClass={id:data.id,name:data.name,code:data.code,role:"teacher"}; saveState("Đã tạo lớp cloud"); refreshCloudClass();
}

async function joinCloudClass() {
  const client=initCloudClient(); if(!client || !cloudUser) return openCloudDialog();
  const code=prompt("Nhập mã lớp")?.trim().toUpperCase(); if(!code) return;
  const {data:klass,error:e1}=await client.from("classes").select("id,name,code").eq("code",code).maybeSingle(); if(e1||!klass) return showToast(e1?.message||"Không tìm thấy lớp");
  const {error:e2}=await client.from("class_members").upsert({class_id:klass.id,user_id:cloudUser.id},{onConflict:"class_id,user_id"}); if(e2) return showToast(e2.message);
  state.cloudClass={id:klass.id,name:klass.name,code:klass.code,role:"student"}; saveState("Đã tham gia lớp cloud"); showToast(`Đã vào lớp ${klass.name}`);
}

async function refreshCloudClass() {
  if(!state.cloudClass?.id || !cloudUser || state.mode!=="teacher" || !$("#cloudStudentList")) return;
  const client=initCloudClient(); if(!client) return;
  const {data:members,error}=await client.from("class_members").select("user_id,joined_at").eq("class_id",state.cloudClass.id); if(error) { $("#cloudStudentList").textContent=`Không tải được lớp cloud: ${error.message}`; return; }
  const ids=(members||[]).map((m)=>m.user_id); if(!ids.length){$("#cloudStudentList").innerHTML='<div class="cloud-student-empty">Chưa có học sinh tham gia bằng mã lớp.</div>';return;}
  const [{data:profiles},{data:states}]=await Promise.all([client.from("profiles").select("id,display_name").in("id",ids),client.from("user_states").select("user_id,state,updated_at").in("user_id",ids)]);
  const pm=Object.fromEntries((profiles||[]).map((p)=>[p.id,p])); const sm=Object.fromEntries((states||[]).map((s)=>[s.user_id,s]));
  $("#cloudStudentList").innerHTML=ids.map((id)=>{const st=sm[id]?.state; const readiness=st?Math.round(calculateReadinessFromState(st)*100):0; const sessions=st?.sessions?.length||0; return `<div class="cloud-student-row"><div><strong>${escapeHTML(pm[id]?.display_name||id.slice(0,8))}</strong><small>${sessions} buổi · sync ${sm[id]?.updated_at?new Date(sm[id].updated_at).toLocaleDateString("vi-VN"):"—"}</small></div><b>${readiness}%</b></div>`;}).join("");
}

function calculateReadinessFromState(other) {
  const weights={1:.38,2:.39,3:.23}; let sum=0;
  for(const phase of PHASES){const topics=TOPICS.filter(t=>t.phase===phase.id); const avg=topics.reduce((acc,t)=>{const v=other.topics?.[t.id]||{solved:0,confidence:1,complete:false}; const sr=clamp(Number(v.solved||0)/t.target,0,1); const cr=clamp((Number(v.confidence||1)-1)/4,0,1); return acc+(v.complete?1:sr*.7+cr*.3);},0)/topics.length; sum+=avg*weights[phase.id];} return sum;
}

async function upsertCloudProfile() {
  const client=initCloudClient(); if(!client || !cloudUser) return;
  await client.from("profiles").upsert({id:cloudUser.id,display_name:state.profile?.name||cloudUser.email?.split("@")[0]||"Learner",updated_at:new Date().toISOString()},{onConflict:"id"});
}

function renderStats() {
  const readiness = Math.round(totalReadiness() * 100);
  const solved = TOPICS.reduce((sum, topic) => sum + Number(state.topics[topic.id].solved || 0), 0);
  const minutes = state.sessions.reduce((sum, session) => sum + Number(session.minutes || 0), 0);
  $("#readinessValue").textContent = `${readiness}%`;
  $("#readinessBar").style.width = `${readiness}%`;
  $("#solvedTotal").textContent = solved;
  $("#studyHours").textContent = `${(minutes / 60).toFixed(minutes % 60 ? 1 : 0)}h`;
  $("#mockTotal").textContent = state.mocks.length;
}

function renderRecommendation() {
  const recommendation = getRecommendation();
  $("#nextTopicIcon").textContent = recommendation.code;
  $("#nextTopic").textContent = recommendation.name;
  $("#nextReason").textContent = recommendation.reason;

  if (recommendation.mock) {
    $("#sessionPlan").innerHTML = `
      <div><span>05'</span><p><strong>Chọn bài</strong><small>3 chủ đề đã học</small></p></div>
      <div><span>50'</span><p><strong>Thi thử</strong><small>Không xem lời giải</small></p></div>
      <div><span>05'</span><p><strong>Review</strong><small>Chốt điểm nghẽn</small></p></div>`;
    $("#startSessionButton").firstChild.textContent = "Ghi mixed mock ";
  } else {
    $("#sessionPlan").innerHTML = `
      <div><span>10'</span><p><strong>Ôn</strong><small>Đọc lại note &amp; template</small></p></div>
      <div><span>40'</span><p><strong>Giải</strong><small>2 bài đúng chủ đề</small></p></div>
      <div><span>10'</span><p><strong>Chốt</strong><small>Ghi lỗi và pattern</small></p></div>`;
    $("#startSessionButton").firstChild.textContent = "Ghi nhận buổi học ";
  }
}

function renderWeek() {
  const formatter = new Intl.DateTimeFormat("vi-VN", { weekday: "short" });
  const days = [];
  const sessionDates = new Set(state.sessions.map((session) => localDateKey(new Date(session.createdAt))));
  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date();
    date.setHours(12, 0, 0, 0);
    date.setDate(date.getDate() - offset);
    days.push({ date, key: localDateKey(date), active: sessionDates.has(localDateKey(date)) });
  }
  $("#weekStrip").innerHTML = days.map((day, index) => `
    <div class="day-cell ${day.active ? "active" : ""} ${index === 6 ? "today" : ""}">
      <i title="${day.active ? "Đã học" : "Chưa ghi buổi học"}"></i><span>${formatter.format(day.date).replace("Th ", "T")}</span>
    </div>`).join("");

  const start = new Date();
  start.setHours(0, 0, 0, 0);
  start.setDate(start.getDate() - 6);
  const weekSessions = state.sessions.filter((session) => new Date(session.createdAt) >= start);
  $("#weekMinutes").textContent = weekSessions.reduce((sum, session) => sum + Number(session.minutes || 0), 0);
  $("#weekProblems").textContent = weekSessions.reduce((sum, session) => sum + Number(session.problems || 0), 0);
  $("#streakText").textContent = `${currentStreak()} ngày`;
  $("#mockDue").textContent = Math.max(0, 10 - sessionsAfterLastMock());
}

function renderPhaseProgress() {
  $("#phaseProgress").innerHTML = PHASES.map((phase) => {
    const progress = Math.round(phaseProgress(phase.id) * 100);
    return `<div class="phase-stat">
      <div class="phase-stat-top"><span>0${phase.id} · ${phase.name}</span><strong>${progress}%</strong></div>
      <div class="mini-meter"><span style="width:${progress}%"></span></div>
    </div>`;
  }).join("");
}

function renderTopics() {
  $("#topicsGrid").innerHTML = TOPICS.map((topic) => {
    const value = state.topics[topic.id];
    const progress = Math.round(topicProgress(topic) * 100);
    const dots = Array.from({ length: 5 }, (_, index) => `<i class="${index < value.confidence ? "on" : ""}"></i>`).join("");
    const hidden = activePhase !== "all" && Number(activePhase) !== topic.phase;
    return `<button class="topic-card ${value.complete ? "complete" : ""} ${hidden ? "hidden" : ""}" type="button" data-topic-id="${topic.id}">
      <div class="topic-card-top"><span class="phase-number">PHASE 0${topic.phase}</span>${value.complete ? '<span class="complete-mark">✓</span>' : ""}</div>
      <h3>${topic.name}</h3>
      <p class="topic-meta">${topic.note}</p>
      ${state.checks?.[topic.id]?.passed ? '<p class="topic-meta topic-lesson-state">✓ Đã qua kiểm tra</p>' : ""}
      <span class="topic-open-label">MỞ BÀI HỌC →</span>
      <div class="confidence-dots" aria-label="Confidence ${value.confidence} trên 5">${dots}</div>
      <div class="topic-foot"><span>${value.solved}/${topic.target} bài</span><span>${progress}%</span></div>
      <span class="topic-progress" style="width:${progress}%"></span>
    </button>`;
  }).join("");

  document.querySelectorAll("[data-topic-id]").forEach((card) => {
    card.addEventListener("click", () => openTopicDialog(card.dataset.topicId));
  });
}

function renderExercises() {
  const visible = EXERCISES.filter((exercise) => activeExerciseFilter === "all" || exercise.difficulty === activeExerciseFilter);
  const score = EXERCISES.reduce((sum, exercise) => sum + (state.exercises?.[exercise.id] ? exercise.points : 0), 0);
  $("#exerciseScore").textContent = score;
  $("#exerciseGrid").innerHTML = visible.map((exercise) => {
    const isAc = Boolean(state.exercises?.[exercise.id]);
    return `<article class="exercise-card ${isAc ? "ac" : ""}">
      <div class="exercise-card-top"><span class="difficulty-badge ${exercise.difficulty}">${DIFFICULTY[exercise.difficulty]}</span><span class="exercise-points">+${exercise.points} điểm</span></div>
      <h4>${escapeHTML(exercise.title)}</h4>
      <small>marisaoj.com/problem/${exercise.url.split("/").pop()}</small>
      <div class="exercise-card-actions">
        <a class="exercise-link" href="${exercise.url}" target="_blank" rel="noopener noreferrer">Mở đề ↗</a>
        <button class="exercise-ac-button" type="button" data-ac-exercise="${exercise.id}">${isAc ? "✓ Đã AC" : "Đánh dấu AC"}</button>
      </div>
    </article>`;
  }).join("");

  document.querySelectorAll("[data-ac-exercise]").forEach((button) => {
    button.addEventListener("click", () => toggleExercise(button.dataset.acExercise));
  });
}

function toggleExercise(exerciseId) {
  const exercise = EXERCISES.find((item) => item.id === exerciseId);
  if (!exercise) return;
  const wasAc = Boolean(state.exercises?.[exerciseId]);
  state.exercises[exerciseId] = !wasAc;
  const topicProgressState = state.topics[exercise.topicId];
  topicProgressState.solved = Math.max(0, topicProgressState.solved + (wasAc ? -1 : 1));
  saveState(wasAc ? "Đã bỏ trạng thái AC" : `AC +${exercise.points} điểm`);
  renderAll();
}

function renderMock() {
  const current = sessionsAfterLastMock();
  const mockNumber = state.mocks.length + 1;
  const due = current >= 10;
  $("#mockStatusBadge").textContent = `MOCK #${mockNumber}`;
  $("#mockHeadline").textContent = due ? "Checkpoint đã mở" : `Mở sau ${10 - current} buổi học`;
  $("#mockDescription").textContent = due
    ? "Làm đề 60 phút gồm 3 chủ đề đã học. Sau đề, ghi lại điểm nghẽn để buổi sau xử lý đúng chỗ yếu."
    : "Cứ mỗi 10 buổi, làm một đề 60 phút gồm 3 chủ đề đã học để kiểm tra khả năng chuyển bài.";
  $("#mockProgressBar").style.width = `${clamp(current / 10 * 100, 0, 100)}%`;
  $("#mockProgressText").textContent = `${Math.min(current, 10)} / 10 buổi`;
}

function renderHistory() {
  const topicMap = Object.fromEntries(TOPICS.map((topic) => [topic.id, topic]));
  const entries = [
    ...state.sessions.map((session) => ({ ...session, type: "session" })),
    ...state.mocks.map((mock) => ({ ...mock, type: "mock" }))
  ].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);

  if (!entries.length) {
    $("#historyList").innerHTML = '<div class="empty-history">Chưa có hoạt động.<br />Ghi buổi học đầu tiên để bắt đầu chuỗi.</div>';
    return;
  }

  const dateFormat = new Intl.DateTimeFormat("vi-VN", { day: "2-digit", month: "2-digit" });
  $("#historyList").innerHTML = entries.map((entry) => {
    if (entry.type === "mock") {
      return `<div class="history-item"><span class="history-icon mock">MIX</span><div class="history-copy"><strong>Mixed mock · ${dateFormat.format(new Date(entry.createdAt))}</strong><small>${entry.note || `${entry.solved} bài AC`}</small></div><span class="history-metric">${entry.score}/100</span></div>`;
    }
    const topic = topicMap[entry.topicId];
    return `<div class="history-item"><span class="history-icon">${topic?.code || "LOG"}</span><div class="history-copy"><strong>${topic?.name || "Buổi tự học"} · ${dateFormat.format(new Date(entry.createdAt))}</strong><small>${entry.note || `${entry.problems} bài hoàn thành`}</small></div><span class="history-metric">${entry.minutes}'</span></div>`;
  }).join("");
}

function renderAll() {
  renderStats();
  renderRecommendation();
  renderWeek();
  renderPhaseProgress();
  renderTopics();
  renderExercises();
  renderMock();
  renderHistory();
  renderTrainingIntelligence();
  renderProfile();
  populateTopicSelect();
  renderTeacherDashboard();
  buildQuickReview();
  switchModeVisualOnly();
}

function populateTopicSelect() {
  const recommendation = getRecommendation();
  const currentValue = $("#sessionTopic").value;
  $("#sessionTopic").innerHTML = TOPICS.map((topic) => `<option value="${topic.id}">${topic.name}</option>`).join("");
  $("#sessionTopic").value = currentValue || (recommendation.mock ? TOPICS[0].id : recommendation.id);
  const options = TOPICS.map((topic) => `<option value="${topic.id}">${topic.name}</option>`).join("");
  if ($("#errorTopic")) $("#errorTopic").innerHTML = options;
  if ($("#mockWeakTopic")) $("#mockWeakTopic").innerHTML = `<option value="">Không rõ / mixed</option>${options}`;
}

function openTopicDialog(topicId) {
  const topic = TOPICS.find((item) => item.id === topicId);
  const value = state.topics[topicId];
  $("#topicId").value = topicId;
  $("#topicDialogTitle").textContent = topic.name;
  $("#topicDialogKicker").textContent = `PHASE 0${topic.phase} · HỌC QUA BÀI`;
  $("#topicSolved").value = value.solved;
  $("#topicSolved").max = Math.max(topic.target * 2, value.solved);
  $("#topicTargetText").textContent = `/ ${topic.target} bài`;
  $("#topicConfidence").value = value.confidence;
  $("#confidenceOutput").textContent = `${value.confidence}/5`;
  $("#topicComplete").checked = value.complete;
  renderLesson(topic);
  switchLessonTab("learn");
  $("#topicDialog").showModal();
}

function practiceLinksHTML(topicId, lesson) {
  const exercises = EXERCISES.filter((exercise) => exercise.topicId === topicId);
  if (exercises.length) {
    return `<div class="practice-links">${exercises.map((exercise) => `
      <a class="practice-link" href="${exercise.url}" target="_blank" rel="noopener noreferrer">
        <span><strong>${escapeHTML(exercise.title)}</strong><small>${DIFFICULTY[exercise.difficulty]} · ${exercise.points} điểm</small></span><b>↗</b>
      </a>`).join("")}</div>`;
  }
  return `<div class="practice-links">${lesson.links.map((link) => `
    <a class="practice-link" href="${link.url}" target="_blank" rel="noopener noreferrer">
      <span><strong>${escapeHTML(link.name)}</strong><small>MarisaOJ · mở link</small></span><b>↗</b>
    </a>`).join("")}</div>`;
}

function renderLesson(topic) {
  const lesson = LESSONS[topic.id];
  const application = APPLICATIONS[topic.id];
  const variants = TEMPLATE_VARIANTS[topic.id];
  const checked = Boolean(state.checks?.[topic.id]?.passed);
  $("#quizPassedMark").textContent = checked ? "✓" : "";
  $("#lessonLearnPane").innerHTML = `
    <div class="lesson-intro">
      <span class="lesson-intro-code">${topic.code}</span>
      <div><h3>Học xong phải làm được gì?</h3><p>${escapeHTML(lesson.goal)}</p></div>
    </div>
    <div class="lesson-block"><h3><span>01</span>Muốn học template, phải nắm 4 thứ</h3><div class="template-focus-grid">${application.learn.map((item, index) => `<div><b>0${index + 1}</b><strong>${escapeHTML(item)}</strong></div>`).join("")}</div></div>
    <div class="lesson-block"><h3><span>02</span>Khi nào áp dụng?</h3><div class="use-grid"><div class="use-card yes"><strong>✓ DÙNG KHI</strong><p>${escapeHTML(application.use)}</p></div><div class="use-card no"><strong>× KHÔNG DÙNG KHI</strong><p>${escapeHTML(application.avoid)}</p></div></div></div>
    <div class="lesson-block"><h3><span>03</span>Dấu hiệu trong đề</h3><ul class="recognise-list">${lesson.recognise.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
    <div class="lesson-block"><h3><span>04</span>Cách nghĩ trước khi code</h3><ol class="steps-list">${lesson.steps.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ol></div>
    <div class="lesson-block"><h3><span>05</span>Các template trong chủ đề (${variants.length})</h3><p class="variant-help">Chọn từng biến thể — mỗi cái có điều kiện dùng, invariant, code và bẫy riêng.</p><div class="variant-picker">${variants.map((variant, index) => `<button class="${index === 0 ? "active" : ""}" type="button" data-template-variant="${variant.id}">${escapeHTML(variant.name)}</button>`).join("")}</div><div id="templateVariantDetail"></div></div>
    <div class="lesson-block"><h3><span>06</span>Điểm chung cần hiểu</h3><div class="example-box">${escapeHTML(lesson.example)}</div></div>
    <div class="lesson-block"><h3><span>07</span>Lỗi chung của chủ đề</h3><ul class="mistake-list">${lesson.mistakes.map((item) => `<li>${escapeHTML(item)}</li>`).join("")}</ul></div>
    <div class="practice-preview"><span>SAU KHI QUA KIỂM TRA</span><p>${(EXERCISES.filter((exercise) => exercise.topicId === topic.id).map((exercise) => exercise.title).length ? EXERCISES.filter((exercise) => exercise.topicId === topic.id).map((exercise) => escapeHTML(exercise.title)) : lesson.links.map((link) => escapeHTML(link.name))).join(" · ")}</p><small>Link đang khóa để m tự kiểm tra nhận dạng trước khi vào làm.</small></div>
    <div class="lesson-next"><p>Đừng mở bài luyện vội — trả lời đúng câu kiểm tra nhận dạng trước.</p><button class="secondary-button" data-go-check type="button">Sang phần kiểm tra →</button></div>`;

  $("#quizContent").innerHTML = `
    ${checked ? '<p class="passed-note">✓ M đã trả lời đúng chủ đề này. Có thể làm lại để ôn.</p>' : ""}
    <span class="quiz-eyebrow">1 CÂU · KIỂM TRA NHẬN DẠNG</span>
    <h3 class="quiz-question">${escapeHTML(lesson.quiz.question)}</h3>
    <div class="quiz-options">${lesson.quiz.options.map((option, index) => `
      <label class="quiz-option"><input type="radio" name="quizAnswer" value="${index}" /><span>${escapeHTML(option)}</span></label>`).join("")}</div>`;
  $("#quizResult").className = checked ? "quiz-result show correct" : "quiz-result";
  $("#quizResult").innerHTML = checked
    ? `<strong>Đã mở bài luyện MarisaOJ</strong>${escapeHTML(lesson.quiz.explanation)}${practiceLinksHTML(topic.id, lesson)}`
    : "";

  renderTemplateVariant(topic.id, variants[0].id);
  $("#lessonLearnPane .variant-picker").addEventListener("click", (event) => {
    const button = event.target.closest("[data-template-variant]");
    if (button) renderTemplateVariant(topic.id, button.dataset.templateVariant);
  });
  $("#lessonLearnPane [data-go-check]").addEventListener("click", () => switchLessonTab("check"));
}

function renderTemplateVariant(topicId, variantId) {
  const variants = TEMPLATE_VARIANTS[topicId];
  const variant = variants.find((item) => item.id === variantId) || variants[0];
  document.querySelectorAll("#lessonLearnPane [data-template-variant]").forEach((button) => button.classList.toggle("active", button.dataset.templateVariant === variant.id));
  $("#templateVariantDetail").innerHTML = `
    <article class="variant-detail">
      <div class="variant-rule"><span>DÙNG KHI</span><p>${escapeHTML(variant.when)}</p></div>
      <div class="variant-rule"><span>INVARIANT PHẢI GIỮ</span><p>${escapeHTML(variant.invariant)}</p></div>
      <div class="code-wrap"><div class="code-head"><span>C++17 · ${escapeHTML(variant.name).toUpperCase()}</span><button class="variant-copy" type="button">COPY</button></div><pre><code>${escapeHTML(variant.code)}</code></pre></div>
      <div class="variant-trap"><strong>BẪY RIÊNG</strong><p>${escapeHTML(variant.trap)}</p></div>
    </article>`;
  $("#templateVariantDetail .variant-copy").addEventListener("click", async (event) => {
    try {
      await navigator.clipboard.writeText(variant.code);
      event.currentTarget.textContent = "COPIED";
      setTimeout(() => event.currentTarget.textContent = "COPY", 1200);
    } catch {
      showToast("Không copy tự động được — hãy bôi đen đoạn code");
    }
  });
}

function switchLessonTab(tab) {
  document.querySelectorAll("[data-lesson-tab]").forEach((button) => button.classList.toggle("active", button.dataset.lessonTab === tab));
  document.querySelectorAll("[data-lesson-pane]").forEach((pane) => pane.classList.toggle("active", pane.dataset.lessonPane === tab));
}

function checkTopicQuiz(event) {
  event.preventDefault();
  const topicId = $("#topicId").value;
  const lesson = LESSONS[topicId];
  const chosen = document.querySelector('input[name="quizAnswer"]:checked');
  const result = $("#quizResult");
  if (!chosen) {
    result.className = "quiz-result show wrong";
    result.innerHTML = "<strong>Chưa chọn đáp án</strong>Chọn một phương án rồi kiểm tra lại.";
    return;
  }
  if (Number(chosen.value) === lesson.quiz.answer) {
    state.checks[topicId] = { passed: true, passedAt: new Date().toISOString() };
    state.topics[topicId].confidence = Math.max(2, state.topics[topicId].confidence);
    $("#quizPassedMark").textContent = "✓";
    result.className = "quiz-result show correct";
    result.innerHTML = `<strong>Chuẩn — đã mở bài luyện</strong>${escapeHTML(lesson.quiz.explanation)}${practiceLinksHTML(topicId, lesson)}`;
    saveState("Qua kiểm tra — đã mở link MarisaOJ");
    renderStats();
    renderTopics();
  } else {
    result.className = "quiz-result show wrong";
    result.innerHTML = `<strong>Chưa đúng — xem lại logic</strong>${escapeHTML(lesson.quiz.explanation)}`;
  }
}

function logSession(event) {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  const topicId = $("#sessionTopic").value;
  const minutes = Number($("#sessionMinutes").value);
  const problems = Number($("#sessionProblems").value);
  const note = $("#sessionNote").value.trim();
  const quality = Number($("#sessionQuality")?.value || 3);
  if (!topicId || minutes < 10 || problems < 0) return;
  state.sessions.push({ id: makeId(), topicId, minutes, problems, note, quality, createdAt: new Date().toISOString() });
  state.reviews[topicId] = { level: 0, lastReviewedAt: new Date().toISOString() };
  state.topics[topicId].solved += problems;
  const topic = TOPICS.find((item) => item.id === topicId);
  if (state.topics[topicId].solved >= topic.target && state.topics[topicId].confidence >= 4) state.topics[topicId].complete = true;
  $("#sessionDialog").close();
  $("#sessionNote").value = "";
  saveState("Đã cộng buổi học vào tiến độ");
  renderAll();
}

function updateTopic(event) {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  const topicId = $("#topicId").value;
  const topic = TOPICS.find((item) => item.id === topicId);
  const solved = clamp(Number($("#topicSolved").value), 0, topic.target * 2);
  state.topics[topicId] = {
    solved,
    confidence: Number($("#topicConfidence").value),
    complete: $("#topicComplete").checked
  };
  $("#topicDialog").close();
  saveState("Đã cập nhật milestone");
  renderAll();
}

function logMock(event) {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  state.mocks.push({
    id: makeId(),
    score: clamp(Number($("#mockScore").value), 0, 100),
    solved: clamp(Number($("#mockSolved").value), 0, 10),
    minutes: clamp(Number($("#mockMinutes")?.value || 60), 1, 300),
    submits: clamp(Number($("#mockSubmits")?.value || 0), 0, 50),
    weakTopicId: $("#mockWeakTopic")?.value || "",
    note: $("#mockNote").value.trim(),
    createdAt: new Date().toISOString()
  });
  $("#mockDialog").close();
  $("#mockNote").value = "";
  saveState("Đã lưu kết quả mixed mock");
  renderAll();
}


function importData() {
  const input = $("#importFileInput");
  if (!input) return;
  input.value = "";
  input.click();
}

async function handleImportFile(event) {
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const parsed = JSON.parse(await file.text());
    const candidate = parsed.state && typeof parsed.state === "object" ? parsed.state : parsed;
    if (!candidate || typeof candidate !== "object" || !candidate.topics) throw new Error("invalid backup");
    const confirmed = window.confirm("Nhập bản sao này sẽ thay thế tiến độ hiện có trên thiết bị. Tiếp tục?");
    if (!confirmed) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(candidate));
    state = loadState();
    renderAll();
    showToast("Đã nhập dữ liệu thành công");
  } catch (error) {
    showToast("Không thể đọc file backup JSON");
  }
}

function exportData() {
  const payload = JSON.stringify({ exportedAt: new Date().toISOString(), ...state }, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `olp-2026-backup-${localDateKey()}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("Đã xuất bản sao JSON");
}

$("#startSessionButton").addEventListener("click", () => {
  if (getRecommendation().mock) $("#mockDialog").showModal();
  else $("#sessionDialog").showModal();
});
$("#learnNextButton").addEventListener("click", () => {
  const recommendation = getRecommendation();
  openTopicDialog(recommendation.mock ? "contest" : recommendation.id);
});
$("#logMockButton").addEventListener("click", () => $("#mockDialog").showModal());
$("#sessionForm").addEventListener("submit", logSession);
$("#topicForm").addEventListener("submit", updateTopic);
$("#topicQuizForm").addEventListener("submit", checkTopicQuiz);
$("#mockForm").addEventListener("submit", logMock);
$("#topicDialogClose").addEventListener("click", () => $("#topicDialog").close());
document.querySelector(".lesson-tabs").addEventListener("click", (event) => {
  const button = event.target.closest("[data-lesson-tab]");
  if (button) switchLessonTab(button.dataset.lessonTab);
});
$("#topicConfidence").addEventListener("input", (event) => $("#confidenceOutput").textContent = `${event.target.value}/5`);
$("#exportButton").addEventListener("click", exportData);
$("#cloudSyncButton")?.addEventListener("click", () => performCloudSync(true));
$("#importFileInput")?.addEventListener("change", handleImportFile);
$("#clearHistoryButton").addEventListener("click", () => {
  if (!state.sessions.length && !state.mocks.length) return showToast("Nhật ký đang trống");
  const confirmed = window.confirm("Xóa toàn bộ nhật ký buổi học và mock? Tiến độ chủ đề vẫn được giữ lại.");
  if (!confirmed) return;
  state.sessions = [];
  state.mocks = [];
  saveState("Đã xóa nhật ký");
  renderAll();
});
$("#phaseTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button[data-phase]");
  if (!button) return;
  activePhase = button.dataset.phase;
  document.querySelectorAll("#phaseTabs button").forEach((item) => item.classList.toggle("active", item === button));
  renderTopics();
});
$("#exerciseFilters").addEventListener("click", (event) => {
  const button = event.target.closest("[data-exercise-filter]");
  if (!button) return;
  activeExerciseFilter = button.dataset.exerciseFilter;
  document.querySelectorAll("#exerciseFilters button").forEach((item) => item.classList.toggle("active", item === button));
  renderExercises();
});


$("#generatePlanButton")?.addEventListener("click", generateDailyPlan);
$("#logErrorButton")?.addEventListener("click", () => $("#errorDialog").showModal());
$("#errorForm")?.addEventListener("submit", (event) => {
  if (event.submitter?.value === "cancel") return;
  event.preventDefault();
  state.errors.push({ id:makeId(), topicId:$("#errorTopic").value, type:$("#errorType").value, note:$("#errorNote").value.trim(), createdAt:new Date().toISOString() });
  $("#errorDialog").close(); $("#errorNote").value=""; saveState("Đã thêm vào Error Notebook"); renderAll();
});
$("#profileButton")?.addEventListener("click",()=>{ $("#profileNameInput").value=state.profile?.name||""; $("#profileGoalInput").value=state.profile?.goal||""; $("#profileMinutesInput").value=state.profile?.defaultMinutes||60; $("#profileDialog").showModal(); });
$("#profileForm")?.addEventListener("submit",(event)=>{ if(event.submitter?.value==="cancel")return; event.preventDefault(); state.profile={name:$("#profileNameInput").value.trim(),goal:$("#profileGoalInput").value.trim(),defaultMinutes:clamp(Number($("#profileMinutesInput").value),30,240)}; $("#profileDialog").close(); saveState("Đã cập nhật hồ sơ"); renderAll(); upsertCloudProfile(); });
$("#studentModeButton")?.addEventListener("click",()=>switchMode("student"));
$("#teacherModeButton")?.addEventListener("click",()=>switchMode("teacher"));
$("#addStudentButton")?.addEventListener("click",()=>$("#studentDialog").showModal());
$("#studentForm")?.addEventListener("submit",(event)=>{ if(event.submitter?.value==="cancel")return; event.preventDefault(); const coach=smartCoach(); state.classroom.students.push({id:makeId(),name:$("#studentNameInput").value.trim(),goal:$("#studentGoalInput").value.trim(),readiness:Math.round(totalReadiness()*100),weakTopic:coach.focus.topic.name,sessions:state.sessions.length,lastMock:state.mocks.at(-1)?.score??null,createdAt:new Date().toISOString()}); $("#studentDialog").close(); $("#studentNameInput").value=""; $("#studentGoalInput").value=""; saveState("Đã thêm học sinh"); renderTeacherDashboard(); });


$("#reviewDueList")?.addEventListener("click", (event)=>{ const button=event.target.closest("[data-review-topic]"); if(button) markReviewed(button.dataset.reviewTopic,"good"); });
$("#studentTableBody")?.addEventListener("click", (event)=>{const button=event.target.closest("[data-remove-student]"); if(!button)return; state.classroom.students=state.classroom.students.filter((s)=>s.id!==button.dataset.removeStudent); saveState("Đã xóa hồ sơ học sinh"); renderTeacherDashboard();});
$("#flashcard")?.addEventListener("click", ()=>$("#flashcard").classList.toggle("revealed"));
$("#flashcard")?.addEventListener("keydown", (event)=>{if(event.key==="Enter"||event.key===" "){event.preventDefault();$("#flashcard").classList.toggle("revealed");}});
$("#flashRevealButton")?.addEventListener("click", ()=>$("#flashcard").classList.add("revealed"));
$("#flashAgainButton")?.addEventListener("click", ()=>{const card=quickReviewCards[quickReviewIndex]; if(card) markReviewed(card.topicId,"again"); nextQuickCard();});
$("#flashGoodButton")?.addEventListener("click", ()=>{const card=quickReviewCards[quickReviewIndex]; if(card) markReviewed(card.topicId,"good"); nextQuickCard();});
$("#calendarExportButton")?.addEventListener("click", exportReviewCalendar);
$("#cloudSettingsButton")?.addEventListener("click", openCloudDialog);
$("#importBackupButton")?.addEventListener("click", importData);
$("#joinCloudClassFromDialogButton")?.addEventListener("click", joinCloudClass);
$("#cloudConfigForm")?.addEventListener("submit", saveCloudConfig);
$("#cloudMagicLinkButton")?.addEventListener("click", signInMagicLink);
$("#cloudGoogleButton")?.addEventListener("click", signInGoogle);
$("#cloudSignOutButton")?.addEventListener("click", async()=>{if(cloudClient)await cloudClient.auth.signOut();cloudUser=null;updateCloudUI();showToast("Đã đăng xuất cloud");});
$("#createCloudClassButton")?.addEventListener("click", createCloudClass);
$("#joinCloudClassButton")?.addEventListener("click", joinCloudClass);
window.addEventListener("online", ()=>{showToast("Đã có mạng · đang đồng bộ"); performCloudSync();});
window.addEventListener("offline", ()=>{$("#saveState").innerHTML="<i></i> Offline · đã lưu cục bộ";});
if("serviceWorker" in navigator && location.protocol !== "file:") window.addEventListener("load",()=>navigator.serviceWorker.register("service-worker.js").catch(console.warn));
bootstrapCloud();

renderAll();

// V6 AI Coach ---------------------------------------------------------------
function buildAIContext() {
  const coach = smartCoach();
  const cutoff = Date.now() - 14 * 86400000;
  const recentSessions = state.sessions.filter(s => new Date(s.createdAt || 0).getTime() >= cutoff).slice(-30);
  const recentErrors = state.errors.filter(e => new Date(e.createdAt || 0).getTime() >= cutoff).slice(-20);
  const recentMocks = state.mocks.slice(-5);
  return {
    learner: { goal: state.profile?.goal || 'OLP Tin học 2026', defaultMinutes: state.profile?.defaultMinutes || 60 },
    mastery: coach.ranked.map(x => ({ topic: x.topic.name, code: x.topic.code, mastery: Math.round(x.mastery * 100), due: x.review.due })).slice(0, 12),
    focus: { topic: coach.focus.topic.name, mastery: Math.round(coach.focus.mastery * 100), riskCount: coach.riskCount },
    sessions: recentSessions.map(s => ({ topicId: s.topicId, quality: s.quality, minutes: s.minutes, note: s.note || '', createdAt: s.createdAt })),
    mistakes: recentErrors.map(e => ({ topic: TOPICS.find(t => t.id === e.topicId)?.name || e.topicId, type: e.type, note: e.note || '', createdAt: e.createdAt })),
    mocks: recentMocks.map(m => ({ score: m.score, solved: m.solved, minutes: m.minutes, submits: m.submits, weakTopic: TOPICS.find(t => t.id === m.weakTopic)?.name || m.weakTopic, note: m.note || '', createdAt: m.createdAt })),
    dueReviews: TOPICS.filter(t => reviewInfo(t.id).due).map(t => t.name).slice(0, 10),
  };
}

function renderAIResult(result) {
  const box = $("#aiCoachResult");
  if (!box) return;
  const observations = Array.isArray(result?.observations) ? result.observations : [];
  const actions = Array.isArray(result?.next_actions) ? result.next_actions : [];
  const causes = Array.isArray(result?.root_causes) ? result.root_causes : [];
  const list = (title, items) => items.length ? `<h4>${escapeHTML(title)}</h4><ul>${items.slice(0,5).map(x => `<li>${escapeHTML(typeof x === 'string' ? x : x?.text || JSON.stringify(x))}</li>`).join('')}</ul>` : '';
  box.innerHTML = `<h4>✦ AI Coach</h4><p>${escapeHTML(result?.summary || 'Đã phân tích dữ liệu học tập.')}</p>${list('Nhận xét', observations)}${list('Nguyên nhân cần chú ý', causes)}${list('3 bước tiếp theo', actions)}<small class="ai-meta">${escapeHTML(result?._meta?.provider || 'AI')}${result?._meta?.model ? ` · ${escapeHTML(result._meta.model)}` : ''}</small>`;
  box.classList.remove('hidden');
}

async function runAICoach(task = 'weekly_report') {
  const client = initCloudClient();
  if (!client || !cloudUser) {
    showToast('Đăng nhập Supabase trước để dùng AI Coach');
    openCloudDialog();
    return;
  }
  const button = $("#aiCoachButton");
  const status = $("#aiCoachStatus");
  button?.setAttribute('disabled', '');
  button?.classList.add('ai-loading');
  if (status) status.textContent = 'AI đang phân tích…';
  try {
    const { data, error } = await client.functions.invoke('ai-coach', { body: { task, context: buildAIContext(), useCache: true } });
    if (error) throw error;
    if (!data?.ok) throw new Error(data?.error || 'AI Coach không trả kết quả');
    renderAIResult(data.result);
    if (status) status.textContent = data.cached ? 'Kết quả cache · không tốn thêm lượt' : 'Đã phân tích';
  } catch (error) {
    console.error(error);
    if (status) status.textContent = 'AI chưa sẵn sàng';
    showToast(`AI Coach: ${error.message || error}`);
  } finally {
    button?.removeAttribute('disabled');
    button?.classList.remove('ai-loading');
  }
}

$("#aiCoachButton")?.addEventListener('click', () => runAICoach('weekly_report'));


// V6.1 AI Code Review --------------------------------------------------------
let currentCodeReview = null;
let revealedHintLevel = 0;

function populateCodeReviewTopics() {
  const select = $("#codeReviewTopic");
  if (!select || select.options.length) return;
  select.innerHTML = TOPICS.map(t => `<option value="${t.id}">${escapeHTML(t.code)} · ${escapeHTML(t.name)}</option>`).join("");
  const focus = smartCoach()?.focus?.topic?.id;
  if (focus) select.value = focus;
}

function normalizeHints(result) {
  const hints = Array.isArray(result?.hints) ? result.hints : [];
  const normalized = hints.map((h, i) => ({ level: Number(h?.level) || i + 1, text: typeof h === 'string' ? h : (h?.text || '') })).filter(h => h.text).sort((a,b)=>a.level-b.level);
  const fallback = [result?.hint_1, result?.hint_2, result?.hint_3].filter(Boolean).map((text,i)=>({level:i+1,text}));
  return (normalized.length ? normalized : fallback).slice(0,3);
}

function renderCodeReview(result, reveal = 1) {
  currentCodeReview = result;
  revealedHintLevel = Math.max(1, Math.min(3, reveal));
  const resultBox = $("#codeReviewResult");
  const ladder = $("#hintLadder");
  const hints = normalizeHints(result);
  const observations = Array.isArray(result?.observations) ? result.observations : [];
  const edgeCases = Array.isArray(result?.edge_cases) ? result.edge_cases : [];
  const causes = Array.isArray(result?.root_causes) ? result.root_causes : [];
  const complexity = result?.complexity_target || result?.complexity || 'Chưa kết luận';
  const confidence = Number(result?.confidence);
  const confidenceText = Number.isFinite(confidence) ? `${Math.round(confidence * (confidence <= 1 ? 100 : 1))}%` : '—';
  const verdict = $("#codeReviewVerdict")?.value || 'Review';
  $("#codeReviewResultTitle").textContent = `${verdict} · AI review`;
  $("#codeReviewEmpty")?.classList.add('hidden');
  resultBox.classList.remove('hidden');
  resultBox.innerHTML = `<div class="review-summary">${escapeHTML(result?.summary || 'Đã phân tích submission. Hãy kiểm tra từng giả thuyết bằng test nhỏ.')}</div><div class="review-grid-mini"><div class="review-mini"><span>ROOT CAUSE</span><strong>${escapeHTML(causes[0] || 'Chưa đủ dữ liệu')}</strong></div><div class="review-mini"><span>COMPLEXITY TARGET</span><strong>${escapeHTML(complexity)}</strong></div><div class="review-mini"><span>CONFIDENCE</span><strong>${escapeHTML(confidenceText)}</strong></div><div class="review-mini"><span>PROVIDER</span><strong>${escapeHTML(result?._meta?.model || result?._meta?.provider || 'AI')}</strong></div></div>${observations.length ? `<div class="review-observations"><h4>Điểm cần kiểm tra</h4><ul>${observations.slice(0,5).map(x=>`<li>${escapeHTML(typeof x==='string'?x:x?.text||JSON.stringify(x))}</li>`).join('')}</ul></div>`:''}${edgeCases.length ? `<div class="edge-case-list"><h4>Test biên nên tự chạy</h4><ul>${edgeCases.slice(0,6).map(x=>`<li>${escapeHTML(typeof x==='string'?x:x?.input?`${x.input} — ${x.reason||''}`:x?.text||JSON.stringify(x))}</li>`).join('')}</ul></div>`:''}`;
  ladder.classList.remove('hidden');
  ladder.innerHTML = [1,2,3].map(level => {
    const h = hints.find(x => x.level === level) || hints[level-1];
    const unlocked = level <= revealedHintLevel;
    return `<div class="hint-step ${unlocked?'':'locked'}"><div class="hint-step-head"><strong>Hint ${level}</strong><span>${unlocked?'MỞ':'KHÓA'}</span></div><p>${unlocked ? escapeHTML(h?.text || (level===1?'Hãy tự kiểm tra invariant và constraints trước.':'Chưa có thêm hint từ model.')) : 'Tự thử thêm trước khi mở tầng gợi ý tiếp theo.'}</p></div>`;
  }).join('');
  $("#hintActions")?.classList.remove('hidden');
  const next = $("#nextHintButton");
  if (next) {
    next.textContent = revealedHintLevel < 3 ? `Mở Hint ${revealedHintLevel + 1} →` : 'Đã mở đủ 3 hint';
    next.disabled = revealedHintLevel >= 3;
  }
}

function codeReviewInput() {
  const topicId = $("#codeReviewTopic")?.value || '';
  return {
    topicId,
    topic: TOPICS.find(t=>t.id===topicId)?.name || topicId,
    verdict: $("#codeReviewVerdict")?.value || 'UNSURE',
    problem: $("#codeReviewProblem")?.value.trim() || '',
    code: $("#codeReviewCode")?.value || '',
    note: $("#codeReviewNote")?.value.trim() || '',
    language: 'C++17',
    requestFullSolution: false,
  };
}

function validateCodeReview(input) {
  if (!input.problem && !input.code) return 'Dán ít nhất tóm tắt đề hoặc code cần review.';
  if (input.code && input.code.length < 20) return 'Code quá ngắn để phân tích hữu ích.';
  return '';
}

async function runCodeReview() {
  const input = codeReviewInput();
  const invalid = validateCodeReview(input);
  if (invalid) { showToast(invalid); return; }
  const client = initCloudClient();
  if (!client || !cloudUser) { showToast('Đăng nhập Supabase trước để dùng AI Code Review'); openCloudDialog(); return; }
  const button = $("#startCodeReviewButton");
  const status = $("#codeReviewStatus");
  button?.setAttribute('disabled',''); button?.classList.add('ai-loading');
  if (status) status.textContent = 'Đang phân tích invariant · edge case · complexity…';
  try {
    const { data, error } = await client.functions.invoke('ai-coach', { body: { task:'problem_review', context: buildAIContext(), input, useCache:true } });
    if (error) throw error;
    if (!data?.ok) throw new Error(data?.error || 'AI Code Review không trả kết quả');
    renderCodeReview(data.result, 1);
    const record = { id: makeId(), createdAt:new Date().toISOString(), topicId:input.topicId, verdict:input.verdict, problem:input.problem, code:input.code, note:input.note, result:data.result };
    state.aiCodeReviews = [record, ...(state.aiCodeReviews||[]).filter(x=>x.id!==record.id)].slice(0,12);
    saveState(data.cached ? 'Đã lấy review từ cache' : 'Đã lưu AI Code Review');
    renderCodeReviewHistory();
    if (status) status.textContent = data.cached ? 'Cache · Hint 1 đã mở' : 'Đã phân tích · Hint 1 đã mở';
  } catch (error) {
    console.error(error); if(status) status.textContent='AI Code Review chưa sẵn sàng'; showToast(`Code Review: ${error.message || error}`);
  } finally { button?.removeAttribute('disabled'); button?.classList.remove('ai-loading'); }
}

function renderCodeReviewHistory() {
  const box = $("#codeReviewHistory"); if (!box) return;
  const rows = state.aiCodeReviews || [];
  box.innerHTML = rows.length ? rows.slice(0,6).map(r=>{const t=TOPICS.find(x=>x.id===r.topicId); return `<article class="review-history-item" data-review-id="${escapeHTML(r.id)}"><strong>${escapeHTML(r.verdict)} · ${escapeHTML(t?.name||'General')}</strong><small>${new Date(r.createdAt).toLocaleString('vi-VN')}</small><p>${escapeHTML(r.result?.summary || r.problem || 'AI code review')}</p></article>`}).join('') : '<div class="review-history-empty">Chưa có review nào. Review đầu tiên sẽ xuất hiện ở đây.</div>';
}

function loadCodeReviewRecord(id) {
  const r=(state.aiCodeReviews||[]).find(x=>x.id===id); if(!r)return;
  populateCodeReviewTopics(); $("#codeReviewTopic").value=r.topicId||TOPICS[0].id; $("#codeReviewVerdict").value=r.verdict||'UNSURE'; $("#codeReviewProblem").value=r.problem||''; $("#codeReviewCode").value=r.code||''; $("#codeReviewNote").value=r.note||''; renderCodeReview(r.result||{},1); $("#codeReviewStatus").textContent='Đã mở review cũ'; $("#codeReviewSection").scrollIntoView({behavior:'smooth',block:'start'});
}

function clearCodeReviewForm() {
  $("#codeReviewProblem").value=''; $("#codeReviewCode").value=''; $("#codeReviewNote").value=''; currentCodeReview=null; revealedHintLevel=0; $("#codeReviewResult").classList.add('hidden'); $("#hintLadder").classList.add('hidden'); $("#hintActions").classList.add('hidden'); $("#codeReviewEmpty").classList.remove('hidden'); $("#codeReviewResultTitle").textContent='Chưa có review'; $("#codeReviewStatus").textContent=cloudUser?'Sẵn sàng':'Đăng nhập Supabase để bắt đầu';
}

function saveCodeReviewAsMistake() {
  if (!currentCodeReview) return;
  const causes=Array.isArray(currentCodeReview.root_causes)?currentCodeReview.root_causes:[];
  const summary=currentCodeReview.summary || causes[0] || 'AI Code Review';
  const verdict=$("#codeReviewVerdict")?.value || 'UNSURE';
  const typeMap={WA:'implementation',TLE:'complexity',RE:'debug',MLE:'complexity',UNSURE:'concept'};
  state.errors.push({id:makeId(),topicId:$("#codeReviewTopic")?.value||TOPICS[0].id,type:typeMap[verdict]||'debug',note:`[AI ${verdict}] ${String(summary).slice(0,210)}`,createdAt:new Date().toISOString()});
  saveState('Đã lưu kết luận vào Error Notebook'); renderAll();
}

populateCodeReviewTopics();
renderCodeReviewHistory();
$("#codeReviewForm")?.addEventListener('submit',e=>{e.preventDefault();runCodeReview();});
$("#clearCodeReviewButton")?.addEventListener('click',clearCodeReviewForm);
$("#nextHintButton")?.addEventListener('click',()=>{if(!currentCodeReview||revealedHintLevel>=3)return; renderCodeReview(currentCodeReview,revealedHintLevel+1);});
$("#saveReviewMistakeButton")?.addEventListener('click',saveCodeReviewAsMistake);
$("#codeReviewHistory")?.addEventListener('click',e=>{const item=e.target.closest('[data-review-id]');if(item)loadCodeReviewRecord(item.dataset.reviewId);});
$("#clearCodeReviewHistoryButton")?.addEventListener('click',()=>{if(!confirm('Xóa lịch sử AI Code Review trên thiết bị này?'))return;state.aiCodeReviews=[];saveState('Đã xóa lịch sử Code Review');renderCodeReviewHistory();});


// V6.2 Mobile Reasoning ------------------------------------------------------
let currentReasoningReview = null;
function populateReasoningTopics(){const s=$("#reasoningTopic");if(!s||s.options.length)return;s.innerHTML=TOPICS.map(t=>`<option value="${t.id}">${escapeHTML(t.code)} · ${escapeHTML(t.name)}</option>`).join('');const f=smartCoach()?.focus?.topic?.id;if(f)s.value=f;}
function reasoningInput(){const id=$("#reasoningTopic")?.value||TOPICS[0].id;return{topicId:id,topic:TOPICS.find(t=>t.id===id)?.name||id,mode:$("#reasoningMode")?.value||'detailed',problem:$("#reasoningProblem")?.value.trim()||'',idea:$("#reasoningIdea")?.value.trim()||'',claimedComplexity:$("#reasoningComplexity")?.value.trim()||''};}
function renderReasoningReview(r){currentReasoningReview=r;$("#reasoningEmpty")?.classList.add('hidden');$("#reasoningResult")?.classList.remove('hidden');$("#reasoningActions")?.classList.remove('hidden');$("#reasoningResultTitle").textContent=`${Math.round(Number(r?.score||0)) || '—'}/10 · Reasoning review`;const good=Array.isArray(r?.strengths)?r.strengths:[];const gaps=Array.isArray(r?.gaps)?r.gaps:[];const cases=Array.isArray(r?.cases_to_check)?r.cases_to_check:(Array.isArray(r?.edge_cases)?r.edge_cases:[]);const qs=Array.isArray(r?.questions)?r.questions:[];$("#reasoningResult").innerHTML=`<div class="review-summary">${escapeHTML(r?.summary||'Đã đánh giá hướng làm.')}</div><div class="reasoning-score-grid"><div><span>TÍNH ĐÚNG</span><strong>${escapeHTML(r?.correctness||'Cần kiểm thêm')}</strong></div><div><span>COMPLEXITY</span><strong>${escapeHTML(r?.complexity_assessment||r?.complexity_target||'—')}</strong></div></div>${good.length?`<div class="reasoning-list good"><h4>✓ Điểm đúng</h4><ul>${good.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></div>`:''}${gaps.length?`<div class="reasoning-list"><h4>Điểm còn hổng</h4><ul>${gaps.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul></div>`:''}${cases.length?`<div class="reasoning-list"><h4>Case phải xét</h4><ul>${cases.map(x=>`<li>${escapeHTML(typeof x==='string'?x:(x?.case||x?.text||JSON.stringify(x)))}</li>`).join('')}</ul></div>`:''}${qs.length?`<div class="socratic-question"><span>COACH HỎI NGƯỢC</span><strong>${escapeHTML(qs[0])}</strong></div>`:''}`;renderDryRun(r?.dry_run);}
function renderDryRun(d){const b=$("#reasoningDryRun");if(!b)return;if(!d){b.classList.add('hidden');return;}b.classList.remove('hidden');const input=typeof d==='string'?d:(d.input||d.case||'');const question=typeof d==='string'?'Hãy tự mô phỏng thuật toán trên case này.':(d.question||'Hãy mô phỏng từng bước và cho biết kết quả.');b.innerHTML=`<span>DRY RUN CHALLENGE</span><strong>${escapeHTML(input)}</strong><p>${escapeHTML(question)}</p><details><summary>Xem điều cần tự kiểm sau khi làm</summary><p>${escapeHTML(typeof d==='object'?(d.check||d.expected_reasoning||'So sánh từng bước với invariant bạn đã nêu.'):'So sánh từng bước với invariant bạn đã nêu.')}</p></details>`;}
async function runReasoningReview(forceDryRun=false){const input=reasoningInput();if(!input.problem||input.idea.length<15){showToast('Nhập tóm tắt đề và mô tả hướng làm đủ chi tiết trước.');return;}const client=initCloudClient();if(!client||!cloudUser){showToast('Đăng nhập Supabase trước để dùng Reasoning Coach');openCloudDialog();return;}const btn=$(forceDryRun?'#newDryRunButton':'#startReasoningButton'),status=$("#reasoningStatus");btn?.setAttribute('disabled','');btn?.classList.add('ai-loading');if(status)status.textContent=forceDryRun?'Đang tạo dry run mới…':'Đang soi invariant · case · complexity…';try{const {data,error}=await client.functions.invoke('ai-coach',{body:{task:'solution_reasoning',context:buildAIContext(),input:{...input,forceDryRun,previousSummary:forceDryRun?currentReasoningReview?.summary:null},useCache:!forceDryRun}});if(error)throw error;if(!data?.ok)throw new Error(data?.error||'Reasoning Coach không trả kết quả');renderReasoningReview(data.result);if(!forceDryRun){const rec={id:makeId(),createdAt:new Date().toISOString(),topicId:input.topicId,problem:input.problem,idea:input.idea,result:data.result};state.aiReasoningReviews=[rec,...(state.aiReasoningReviews||[])].slice(0,12);saveState(data.cached?'Đã lấy reasoning review từ cache':'Đã lưu reasoning review');}if(status)status.textContent=data.cached?'Cache · đã đánh giá':'Đã đánh giá hướng làm';}catch(e){console.error(e);if(status)status.textContent='Reasoning Coach chưa sẵn sàng';showToast(`Reasoning Coach: ${e.message||e}`);}finally{btn?.removeAttribute('disabled');btn?.classList.remove('ai-loading');}}
function clearReasoning(){$("#reasoningProblem").value='';$("#reasoningIdea").value='';$("#reasoningComplexity").value='';currentReasoningReview=null;$("#reasoningResult").classList.add('hidden');$("#reasoningDryRun").classList.add('hidden');$("#reasoningActions").classList.add('hidden');$("#reasoningEmpty").classList.remove('hidden');$("#reasoningResultTitle").textContent='Chưa có đánh giá';}
function saveReasoningGap(){if(!currentReasoningReview)return;const gaps=Array.isArray(currentReasoningReview.gaps)?currentReasoningReview.gaps:[];state.errors.push({id:makeId(),topicId:$("#reasoningTopic")?.value||TOPICS[0].id,type:'concept',note:`[AI Reasoning] ${String(gaps[0]||currentReasoningReview.summary||'Cần củng cố lập luận').slice(0,210)}`,createdAt:new Date().toISOString()});saveState('Đã lưu điểm hổng vào Error Notebook');renderAll();}
function setupReasoningVoice(){const btn=$("#reasoningVoiceButton"),status=$("#reasoningVoiceStatus");if(!btn)return;const SR=window.SpeechRecognition||window.webkitSpeechRecognition;if(!SR){btn.disabled=true;if(status)status.textContent='Trình duyệt này chưa hỗ trợ nhập giọng nói.';return;}const rec=new SR();rec.lang='vi-VN';rec.continuous=true;rec.interimResults=true;let base='';let listening=false;rec.onstart=()=>{listening=true;base=$("#reasoningIdea").value.trim();btn.textContent='■ Dừng ghi';if(status)status.textContent='Đang nghe… nói hướng làm tự nhiên.';};rec.onresult=e=>{let final='',interim='';for(let i=e.resultIndex;i<e.results.length;i++){const t=e.results[i][0].transcript;if(e.results[i].isFinal)final+=t+' ';else interim+=t;}if(final)base=(base+' '+final).trim();$("#reasoningIdea").value=(base+' '+interim).trim();};rec.onend=()=>{listening=false;btn.textContent='🎙 Nói hướng làm';if(status)status.textContent='Đã dừng nhập giọng nói.';};rec.onerror=()=>{if(status)status.textContent='Không nhận được giọng nói. Bạn vẫn có thể gõ.';};btn.addEventListener('click',()=>{if(listening)rec.stop();else rec.start();});}
populateReasoningTopics();setupReasoningVoice();
$("#reasoningForm")?.addEventListener('submit',e=>{e.preventDefault();runReasoningReview(false);});$("#clearReasoningButton")?.addEventListener('click',clearReasoning);$("#newDryRunButton")?.addEventListener('click',()=>runReasoningReview(true));$("#saveReasoningMistakeButton")?.addEventListener('click',saveReasoningGap);

// ============================================================================
// V6.3 PROBLEM EXTRACTOR & BOOKMARKLET
// ============================================================================
let activeProblemParserTarget = 'codeReview'; // 'codeReview' | 'reasoning'

function parseProblemText(raw) {
  if (!raw || !raw.trim()) return null;
  const text = raw.trim();

  // 1. Check if it is a MarisaOJ URL
  const urlMatch = text.match(/marisaoj\.com\/problem\/([A-Za-z0-9_-]+)/i);
  let knownExercise = null;
  if (urlMatch) {
    const pId = urlMatch[1];
    knownExercise = EXERCISES.find(ex => ex.id === `m${pId}` || ex.id === pId || ex.url.includes(pId));
  }

  // 2. Extract Title
  let title = '';
  if (knownExercise) {
    title = knownExercise.title;
  } else {
    const titleMatch = text.match(/(?:bài|problem)\s*([0-9]+)?\s*[:\-–]?\s*([^\n\r]+)/i) ||
                       text.match(/^([^\n\r]{3,80})/);
    if (titleMatch) {
      title = (titleMatch[2] || titleMatch[1] || titleMatch[0]).trim();
      title = title.replace(/^(?:đề bài|statement)[:\-]?\s*/i, '');
    }
  }

  // 3. Extract Limits
  let timeLimit = '';
  let memoryLimit = '';
  const timeMatch = text.match(/(?:thời gian|time limit|giới hạn thời gian)\s*[:\-–]?\s*([0-9.]+\s*s(?:ec(?:ond)?)?)/i);
  if (timeMatch) timeLimit = timeMatch[1];
  const memMatch = text.match(/(?:bộ nhớ|memory limit|giới hạn bộ nhớ)\s*[:\-–]?\s*([0-9]+\s*(?:MB|GB|KB))/i);
  if (memMatch) memoryLimit = memMatch[1];

  // 4. Extract Constraints
  const constraints = [];
  const lines = text.split('\n').map(l => l.trim()).filter(Boolean);
  for (const line of lines) {
    if (line.match(/(?:[nNmMkKqQpP]|A_i|a\[i\]|[a-z])\s*(?:<=?|≤)\s*[0-9\^e\+\*]+/i) ||
        line.match(/[0-9]+\s*(?:<=?|≤)\s*[nNmMkKqQpP]/i) ||
        line.match(/(?:10\^|1e[0-9]|subtask|sub-task)/i)) {
      constraints.push(line.replace(/^[•\-\*]\s*/, ''));
    }
  }

  // 5. Guess Topic
  let suggestedTopic = knownExercise?.topicId || null;
  if (!suggestedTopic) {
    const lower = text.toLowerCase();
    if (lower.includes('nhị phân') || lower.includes('binary search') || lower.includes('lower_bound')) suggestedTopic = 'binary-search';
    else if (lower.includes('hai con trỏ') || lower.includes('two pointer') || lower.includes('sliding window')) suggestedTopic = 'two-pointers';
    else if (lower.includes('tiền tố') || lower.includes('prefix sum') || lower.includes('tổng đoạn')) suggestedTopic = 'prefix';
    else if (lower.includes('dijkstra') || lower.includes('đường đi ngắn nhất') || lower.includes('mst') || lower.includes('kruskal')) suggestedTopic = 'shortest-path';
    else if (lower.includes('đồ thị') || lower.includes('bfs') || lower.includes('dfs') || lower.includes('topo')) suggestedTopic = 'graph-basic';
    else if (lower.includes('quy hoạch động') || lower.includes('dp') || lower.includes('knapsack') || lower.includes('dãy con')) suggestedTopic = 'dp-basic';
    else if (lower.includes('segment tree') || lower.includes('fenwick') || lower.includes('range query')) suggestedTopic = 'range-query';
    else if (lower.includes('chuỗi') || lower.includes('xâu') || lower.includes('kmp') || lower.includes('hash')) suggestedTopic = 'strings';
    else if (lower.includes('ước') || lower.includes('nguyên tố') || lower.includes('sieve') || lower.includes('gcd')) suggestedTopic = 'number-theory';
    else if (lower.includes('tham lam') || lower.includes('greedy') || lower.includes('sắp xếp')) suggestedTopic = 'sorting-greedy';
    else if (lower.includes('cây') || lower.includes('lca') || lower.includes('tree')) suggestedTopic = 'tree';
    else suggestedTopic = 'containers';
  }

  const limitStr = [timeLimit, memoryLimit].filter(Boolean).join(' · ');
  const constraintStr = constraints.slice(0, 5).join('\n');
  let snippet = text.slice(0, 450);
  if (snippet.length > 350) snippet = snippet.slice(0, 350) + '...';

  let formatted = '';
  if (title) formatted += `[${title}]\n`;
  if (limitStr) formatted += `Giới hạn: ${limitStr}\n`;
  if (constraintStr) formatted += `Constraints:\n${constraintStr}\n\n`;
  formatted += `Tóm tắt đề:\n${snippet}`;

  return {
    title: title || 'Bài tập Competitive Programming',
    limits: limitStr || '1.0s · 256MB (ước tính)',
    constraints: constraintStr,
    topicId: suggestedTopic,
    formattedText: formatted.trim()
  };
}

function updateParserPreview() {
  const raw = $("#rawProblemInput")?.value || '';
  const parsed = parseProblemText(raw);
  const previewBox = $("#parserPreview");
  if (!parsed || !previewBox) {
    previewBox?.classList.add('hidden');
    return;
  }
  previewBox.classList.remove('hidden');
  if ($("#previewTitle")) $("#previewTitle").textContent = parsed.title;
  if ($("#previewLimits")) $("#previewLimits").textContent = parsed.limits;
  const topicObj = TOPICS.find(t => t.id === parsed.topicId);
  if ($("#previewTopic")) $("#previewTopic").textContent = topicObj ? `${topicObj.code} · ${topicObj.name}` : 'Cơ bản';
}

function applyParsedProblem() {
  const raw = $("#rawProblemInput")?.value || '';
  const parsed = parseProblemText(raw);
  if (!parsed) {
    showToast('Vui lòng dán nội dung đề bài trước.');
    return;
  }
  if (activeProblemParserTarget === 'reasoning') {
    if ($("#reasoningProblem")) $("#reasoningProblem").value = parsed.formattedText;
    if (parsed.topicId && $("#reasoningTopic")) $("#reasoningTopic").value = parsed.topicId;
    $("#reasoningSection")?.scrollIntoView({ behavior: 'smooth' });
  } else {
    if ($("#codeReviewProblem")) $("#codeReviewProblem").value = parsed.formattedText;
    if (parsed.topicId && $("#codeReviewTopic")) $("#codeReviewTopic").value = parsed.topicId;
    $("#codeReviewSection")?.scrollIntoView({ behavior: 'smooth' });
  }
  $("#problemParserDialog")?.close();
  showToast(`Đã bóc tách thành công đề: ${parsed.title}`);
}

function setupBookmarklet() {
  const currentUrl = window.location.href.split('?')[0];
  const code = `javascript:(function(){const t=document.querySelector('h1,h2,[class*="title"]')?.innerText||document.title;const b=document.body.innerText.slice(0,3500);const u='${currentUrl}?importTitle='+encodeURIComponent(t)+'&importText='+encodeURIComponent(b);window.open(u,'_blank');})();`;
  const link = $("#marisaBookmarkletLink");
  const text = $("#bookmarkletCodeText");
  if (link) link.href = code;
  if (text) text.value = code;
}

function checkUrlImportParams() {
  try {
    const params = new URLSearchParams(window.location.search);
    const importTitle = params.get('importTitle');
    const importText = params.get('importText');
    if (importText || importTitle) {
      const raw = `${importTitle ? importTitle + '\n' : ''}${importText || ''}`;
      const parsed = parseProblemText(raw);
      if (parsed) {
        if ($("#codeReviewProblem")) $("#codeReviewProblem").value = parsed.formattedText;
        if (parsed.topicId && $("#codeReviewTopic")) $("#codeReviewTopic").value = parsed.topicId;
        showToast(`Đã nhận diện đề từ MarisaOJ: ${parsed.title}`);
        $("#codeReviewSection")?.scrollIntoView({ behavior: 'smooth' });
      }
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  } catch (e) {
    console.warn("Could not parse URL import params", e);
  }
}

// Wire Parser & Bookmarklet Events
$("#openProblemParserBtn")?.addEventListener('click', () => {
  activeProblemParserTarget = 'codeReview';
  $("#rawProblemInput").value = '';
  updateParserPreview();
  $("#problemParserDialog")?.showModal();
});
$("#openReasoningProblemParserBtn")?.addEventListener('click', () => {
  activeProblemParserTarget = 'reasoning';
  $("#rawProblemInput").value = '';
  updateParserPreview();
  $("#problemParserDialog")?.showModal();
});
$("#closeProblemParserBtn")?.addEventListener('click', () => $("#problemParserDialog")?.close());
$("#rawProblemInput")?.addEventListener('input', updateParserPreview);
$("#applyParsedProblemBtn")?.addEventListener('click', applyParsedProblem);
$("#pasteFromClipboardBtn")?.addEventListener('click', async () => {
  try {
    const text = await navigator.clipboard.readText();
    if (text && $("#rawProblemInput")) {
      $("#rawProblemInput").value = text;
      updateParserPreview();
      showToast('Đã dán từ clipboard!');
    }
  } catch {
    showToast('Hãy dán bằng phím Ctrl+V vào ô bên trên.');
  }
});

$("#openBookmarkletBtn")?.addEventListener('click', () => {
  setupBookmarklet();
  $("#bookmarkletDialog")?.showModal();
});
$("#closeBookmarkletBtn")?.addEventListener('click', () => $("#bookmarkletDialog")?.close());
$("#copyBookmarkletCodeBtn")?.addEventListener('click', () => {
  const text = $("#bookmarkletCodeText");
  if (text) {
    text.select();
    navigator.clipboard.writeText(text.value);
    showToast('Đã sao chép mã Bookmarklet vào clipboard!');
  }
});


// ============================================================================
// V6.3 VIRTUAL MOCK CONTEST ARENA
// ============================================================================
const VIRTUAL_CONTEST_KEY = "olp26-virtual-contest-v1";
let virtualContest = null;
let contestTimerInterval = null;

function getProposedContestProblems(strategy = 'standard') {
  let easyList = EXERCISES.filter(e => e.difficulty === 'easy');
  let mediumList = EXERCISES.filter(e => e.difficulty === 'medium');
  let hardList = EXERCISES.filter(e => e.difficulty === 'hard' || e.difficulty === 'extreme');

  if (strategy === 'unsolved') {
    const unsolvedEasy = easyList.filter(e => !state.exercises?.[e.id]);
    const unsolvedMed = mediumList.filter(e => !state.exercises?.[e.id]);
    const unsolvedHard = hardList.filter(e => !state.exercises?.[e.id]);
    if (unsolvedEasy.length) easyList = unsolvedEasy;
    if (unsolvedMed.length) mediumList = unsolvedMed;
    if (unsolvedHard.length) hardList = unsolvedHard;
  }

  // Shuffle pick
  const pick = arr => arr[Math.floor(Math.random() * arr.length)] || arr[0];
  const p1 = pick(easyList);
  const p2 = pick(mediumList);
  const p3 = pick(hardList);

  return [
    { ...p1, label: 'Bài A', targetMinutes: 18, status: 'doing', timeSeconds: 0 },
    { ...p2, label: 'Bài B', targetMinutes: 24, status: 'none', timeSeconds: 0 },
    { ...p3, label: 'Bài C', targetMinutes: 18, status: 'none', timeSeconds: 0 }
  ];
}

let previewContestProblems = [];

function renderContestSetupPreview() {
  const container = $("#contestPreviewProblems");
  if (!container) return;
  const strategy = $("#contestProblemSetSelect")?.value || 'standard';
  if (!previewContestProblems.length) {
    previewContestProblems = getProposedContestProblems(strategy);
  }

  container.innerHTML = previewContestProblems.map((p, idx) => {
    const topic = TOPICS.find(t => t.id === p.topicId);
    return `
      <div class="contest-preview-card">
        <div class="contest-preview-card-info">
          <span class="problem-badge ${p.difficulty}">${p.label.replace('Bài ', '')}</span>
          <div>
            <strong>${escapeHTML(p.title)}</strong>
            <small>${escapeHTML(topic?.name || p.topicId)} · ${p.points} điểm · Dự kiến ${p.targetMinutes}'</small>
          </div>
        </div>
        <span class="time-pill">${DIFFICULTY[p.difficulty] || p.difficulty}</span>
      </div>
    `;
  }).join('');
}

function openVirtualContestDialog() {
  const dialog = $("#contestArenaDialog");
  if (!dialog) return;

  if (virtualContest && !virtualContest.isFinished) {
    // Show live screen
    $("#contestSetupScreen")?.classList.add('hidden');
    $("#contestSummaryScreen")?.classList.add('hidden');
    $("#contestLiveScreen")?.classList.remove('hidden');
    renderContestLiveArena();
  } else {
    // Show setup screen
    previewContestProblems = [];
    renderContestSetupPreview();
    $("#contestSetupScreen")?.classList.remove('hidden');
    $("#contestLiveScreen")?.classList.add('hidden');
    $("#contestSummaryScreen")?.classList.add('hidden');
  }
  dialog.showModal();
}

function launchVirtualContest() {
  const duration = Number($("#contestDurationSelect")?.value || 60);
  const now = Date.now();
  const endsAt = now + duration * 60 * 1000;

  virtualContest = {
    id: makeId(),
    durationMinutes: duration,
    startedAt: now,
    endsAt: endsAt,
    paused: false,
    pausedRemainingSeconds: duration * 60,
    problems: previewContestProblems.map(p => ({
      id: p.id,
      title: p.title,
      topicId: p.topicId,
      difficulty: p.difficulty,
      points: p.points,
      url: p.url,
      label: p.label,
      status: p.status || 'none',
      timeSeconds: 0
    })),
    activeProblemIndex: 0,
    isFinished: false
  };

  saveVirtualContestToStorage();
  $("#contestSetupScreen")?.classList.add('hidden');
  $("#contestLiveScreen")?.classList.remove('hidden');
  if ($("#contestLiveName")) $("#contestLiveName").textContent = `Virtual Mock ${duration} phút`;

  renderContestLiveArena();
  startContestTimer();
  updateMockButtonStatus();
  showToast(`Bắt đầu tính giờ thi Virtual Mock (${duration} phút)! Chúc thi tốt!`);
}

function startContestTimer() {
  if (contestTimerInterval) clearInterval(contestTimerInterval);
  contestTimerInterval = setInterval(tickContestTimer, 1000);
  tickContestTimer();
}

function tickContestTimer() {
  if (!virtualContest || virtualContest.isFinished) {
    if (contestTimerInterval) clearInterval(contestTimerInterval);
    return;
  }

  if (virtualContest.paused) {
    if ($("#contestClockStatus")) $("#contestClockStatus").textContent = "Tạm dừng";
    return;
  }

  const now = Date.now();
  const remainingSec = Math.max(0, Math.floor((virtualContest.endsAt - now) / 1000));
  const totalSec = virtualContest.durationMinutes * 60;
  const elapsedSec = totalSec - remainingSec;

  // Track time on active problem
  const activeP = virtualContest.problems[virtualContest.activeProblemIndex];
  if (activeP) {
    activeP.timeSeconds = (activeP.timeSeconds || 0) + 1;
    const activeTimerEl = $(`#card-timer-${virtualContest.activeProblemIndex}`);
    if (activeTimerEl) {
      activeTimerEl.textContent = formatContestSeconds(activeP.timeSeconds);
    }
  }

  // Format Clock
  const mins = Math.floor(remainingSec / 60);
  const secs = remainingSec % 60;
  const clockText = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  const clockEl = $("#contestCountdown");
  if (clockEl) {
    clockEl.textContent = clockText;
    clockEl.classList.remove('warning', 'danger');
    if (remainingSec <= 300) clockEl.classList.add('danger');
    else if (remainingSec <= 900) clockEl.classList.add('warning');
  }

  // Progress Bar
  const percent = Math.min(100, Math.max(0, (elapsedSec / totalSec) * 100));
  const bar = $("#contestTimeProgressBar");
  if (bar) bar.style.width = `${percent}%`;

  if ($("#contestClockStatus")) {
    $("#contestClockStatus").textContent = `Đang thi · ${Math.round(percent)}% thời gian`;
  }

  updateMockButtonStatus();

  // Save every 5 seconds
  if (remainingSec % 5 === 0) {
    saveVirtualContestToStorage();
  }

  // Time is up!
  if (remainingSec <= 0) {
    clearInterval(contestTimerInterval);
    finishVirtualContest(false);
  }
}

function formatContestSeconds(totalSec = 0) {
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${m}p ${String(s).padStart(2, '0')}s`;
}

function renderContestLiveArena() {
  const container = $("#contestArenaProblems");
  if (!container || !virtualContest) return;

  container.innerHTML = virtualContest.problems.map((p, idx) => {
    const isFocus = idx === virtualContest.activeProblemIndex;
    const topic = TOPICS.find(t => t.id === p.topicId);
    return `
      <article class="contest-arena-card ${isFocus ? 'active-focus' : ''}" id="arena-card-${idx}">
        <div class="contest-arena-card-top">
          <div class="contest-card-meta">
            <span class="problem-badge ${p.difficulty}">${p.label.replace('Bài ', '')}</span>
            <div class="contest-card-title">
              <strong>${escapeHTML(p.title)}</strong>
              <small>${escapeHTML(topic?.name || p.topicId)} · ${p.points}đ</small>
            </div>
          </div>
          <div class="contest-card-timer" id="card-timer-${idx}">${formatContestSeconds(p.timeSeconds || 0)}</div>
        </div>

        <div class="contest-arena-card-actions">
          <a class="contest-open-link" href="${p.url}" target="_blank" rel="noopener noreferrer">
            Mở đề MarisaOJ ↗
          </a>
          <div class="contest-status-buttons">
            <button class="status-pill-btn ${isFocus ? 'active status-doing' : ''}" type="button" onclick="focusContestProblem(${idx})">
              ${isFocus ? '● Đang làm' : 'Chọn làm bài này'}
            </button>
            <button class="status-pill-btn ${p.status === 'ac' ? 'active status-ac' : ''}" type="button" onclick="setContestProblemVerdict(${idx}, 'ac')">
              ✓ AC
            </button>
            <button class="status-pill-btn ${p.status === 'wa' ? 'active status-wa' : ''}" type="button" onclick="setContestProblemVerdict(${idx}, 'wa')">
              WA / TLE
            </button>
            <button class="status-pill-btn ${p.status === 'stuck' ? 'active status-stuck' : ''}" type="button" onclick="setContestProblemVerdict(${idx}, 'stuck')">
              Stuck
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

window.focusContestProblem = function(idx) {
  if (!virtualContest) return;
  virtualContest.activeProblemIndex = idx;
  renderContestLiveArena();
  saveVirtualContestToStorage();
};

window.setContestProblemVerdict = function(idx, verdict) {
  if (!virtualContest) return;
  const p = virtualContest.problems[idx];
  if (p) {
    p.status = (p.status === verdict) ? 'none' : verdict;
    // If marked AC, mark in global state as solved too
    if (p.status === 'ac' && p.id) {
      state.exercises = state.exercises || {};
      state.exercises[p.id] = true;
      saveState('Đã cập nhật bài AC trong contest');
    }
  }
  renderContestLiveArena();
  saveVirtualContestToStorage();
};

function togglePauseResumeContest() {
  if (!virtualContest) return;
  const btn = $("#pauseResumeContestBtn");
  if (!virtualContest.paused) {
    // Pause
    virtualContest.paused = true;
    virtualContest.pausedRemainingSeconds = Math.max(0, Math.floor((virtualContest.endsAt - Date.now()) / 1000));
    if (btn) btn.textContent = "▶ Tiếp tục thi";
    showToast('Contest đã tạm dừng.');
  } else {
    // Resume
    virtualContest.paused = false;
    virtualContest.endsAt = Date.now() + (virtualContest.pausedRemainingSeconds * 1000);
    if (btn) btn.textContent = "⏸ Tạm dừng";
    showToast('Tiếp tục thi đấu!');
  }
  saveVirtualContestToStorage();
}

function finishVirtualContest(promptConfirm = true) {
  if (!virtualContest) return;
  if (promptConfirm && !confirm('Bạn có chắc muốn kết thúc buổi thi thử này để xem kết quả?')) {
    return;
  }

  if (contestTimerInterval) clearInterval(contestTimerInterval);
  virtualContest.isFinished = true;

  const totalPoints = virtualContest.problems.reduce((s, p) => s + p.points, 0);
  const earnedPoints = virtualContest.problems.reduce((s, p) => s + (p.status === 'ac' ? p.points : 0), 0);
  const scaledScore = Math.round((earnedPoints / (totalPoints || 1)) * 100);
  const acCount = virtualContest.problems.filter(p => p.status === 'ac').length;

  const totalUsedSec = virtualContest.problems.reduce((s, p) => s + (p.timeSeconds || 0), 0);
  const totalUsedMins = Math.max(1, Math.round(totalUsedSec / 60));

  // Switch UI to Summary Screen
  $("#contestLiveScreen")?.classList.add('hidden');
  $("#contestSummaryScreen")?.classList.remove('hidden');

  if ($("#contestFinalScore")) $("#contestFinalScore").textContent = scaledScore;
  if ($("#contestAcCount")) $("#contestAcCount").textContent = `${acCount}/3`;
  if ($("#contestTimeUsed")) $("#contestTimeUsed").textContent = `${totalUsedMins}'`;

  // Pace Rating
  let rating = "Tốt";
  if (acCount === 3) rating = "Xuất sắc";
  else if (acCount === 0) rating = "Cần chỉnh chiến thuật";
  else if (scaledScore >= 60) rating = "Đạt mục tiêu OLP";
  if ($("#contestPaceRating")) $("#contestPaceRating").textContent = rating;

  // Render Time Breakdown
  const list = $("#contestTimeBreakdownList");
  if (list) {
    list.innerHTML = virtualContest.problems.map(p => {
      const pMins = Math.round((p.timeSeconds || 0) / 60);
      let statusBadge = `<span style="color:var(--muted)">Chưa xong</span>`;
      if (p.status === 'ac') statusBadge = `<span style="color:var(--lime)">✓ AC (+${p.points}đ)</span>`;
      else if (p.status === 'stuck') statusBadge = `<span style="color:#ffab91">Stuck</span>`;
      else if (p.status === 'wa') statusBadge = `<span style="color:#ff6b6b">WA/TLE</span>`;

      return `
        <div class="time-breakdown-item">
          <div>
            <strong>${escapeHTML(p.label)}: ${escapeHTML(p.title)}</strong>
            <small style="display:block; color:var(--muted)">${DIFFICULTY[p.difficulty] || p.difficulty} · ${p.points}đ</small>
          </div>
          <div style="text-align:right">
            <b>${pMins} phút</b> · ${statusBadge}
          </div>
        </div>
      `;
    }).join('');
  }

  // Strategy Feedback
  let feedback = '';
  const stuckProblem = virtualContest.problems.find(p => p.status === 'stuck' || (p.status !== 'ac' && (p.timeSeconds || 0) > 1200));
  if (acCount === 3) {
    feedback = `<strong>Tuyệt vời!</strong> Bạn đã giải quyết trọn vẹn cả 3 bài trong thời gian quy định. Hãy duy trì nhịp độ này cho các mock tiếp theo.`;
  } else if (stuckProblem && (stuckProblem.timeSeconds || 0) > 1500) {
    feedback = `<strong>Lưu ý về quản lý thời gian:</strong> Bạn đã dành hơn 25 phút cho một bài chưa ra đáp án (${stuckProblem.title}). Trong kỳ thi OLP thật, hãy tuân thủ nguyên tắc: <em>nếu sau 15 phút không tiến triển, hãy ghi lại ý tưởng và chuyển sang bài khác</em> để tối đa hóa điểm số.`;
  } else if (acCount >= 1) {
    feedback = `<strong>Chiến thuật ổn định:</strong> Bạn đã khóa được điểm ở bài nền tảng. Tiếp tục ôn sâu các chủ đề của các bài chưa AC để tăng tốc độ làm bài.`;
  } else {
    feedback = `<strong>Đừng nản lòng:</strong> Mixed Mock giả lập áp lực thi đấu thật. Hãy đưa các bài chưa giải được vào Error Notebook để bóc tách lại invariant và edge case.`;
  }
  if ($("#contestStrategyFeedback")) $("#contestStrategyFeedback").innerHTML = feedback;

  // Clear active contest
  localStorage.removeItem(VIRTUAL_CONTEST_KEY);
  updateMockButtonStatus();
  showToast('Đã hoàn thành buổi thi Virtual Mock!');
}

function saveContestToHistory() {
  if (!virtualContest) return;
  const totalPoints = virtualContest.problems.reduce((s, p) => s + p.points, 0);
  const earnedPoints = virtualContest.problems.reduce((s, p) => s + (p.status === 'ac' ? p.points : 0), 0);
  const scaledScore = Math.round((earnedPoints / (totalPoints || 1)) * 100);
  const acCount = virtualContest.problems.filter(p => p.status === 'ac').length;
  const totalUsedSec = virtualContest.problems.reduce((s, p) => s + (p.timeSeconds || 0), 0);
  const totalUsedMins = Math.max(1, Math.round(totalUsedSec / 60));

  // Find weak topic
  const failedProblem = virtualContest.problems.find(p => p.status !== 'ac');
  const weakTopic = failedProblem ? failedProblem.topicId : '';

  state.mocks.push({
    id: makeId(),
    score: scaledScore,
    solved: acCount,
    minutes: totalUsedMins,
    submits: 3,
    weakTopicId: weakTopic,
    note: `[Virtual Mock] ${acCount}/3 AC · ${totalUsedMins} phút · Đề: ${virtualContest.problems.map(p => p.title).join(', ')}`,
    createdAt: new Date().toISOString()
  });

  // Auto-log failed problems to Error Notebook if user wishes
  if (failedProblem) {
    state.errors.push({
      id: makeId(),
      topicId: failedProblem.topicId,
      type: failedProblem.status === 'wa' ? 'implementation' : 'recognition',
      note: `[Mock] Chưa hoàn thành bài ${failedProblem.title} (${failedProblem.points}đ) trong thời gian contest.`,
      createdAt: new Date().toISOString()
    });
  }

  saveState('Đã lưu kết quả Virtual Mock');
  renderAll();
  $("#contestArenaDialog")?.close();
  virtualContest = null;
  showToast('Đã lưu kết quả thi đấu vào nhật ký!');
}

async function runAIPostMortem() {
  if (!virtualContest) return;
  const client = initCloudClient();
  if (!client || !cloudUser) {
    showToast('Đăng nhập Supabase trước để dùng AI Post-Mortem.');
    openCloudDialog();
    return;
  }

  const btn = $("#aiPostMortemBtn");
  const resultBox = $("#aiPostMortemResult");
  btn?.setAttribute('disabled', '');
  btn?.classList.add('ai-loading');
  if (resultBox) {
    resultBox.classList.remove('hidden');
    resultBox.innerHTML = '<p class="ai-loading">Coach đang phân tích chiến thuật phân bổ thời gian và tâm lý thi đấu…</p>';
  }

  try {
    const summaryData = {
      score: $("#contestFinalScore")?.textContent || 0,
      acCount: $("#contestAcCount")?.textContent || '0/3',
      timeUsed: $("#contestTimeUsed")?.textContent || '0m',
      problems: virtualContest.problems.map(p => ({
        title: p.title,
        difficulty: p.difficulty,
        status: p.status,
        minutesSpent: Math.round((p.timeSeconds || 0) / 60)
      }))
    };

    const { data, error } = await client.functions.invoke('ai-coach', {
      body: {
        task: 'mistake_analysis',
        context: buildAIContext(),
        input: {
          problem: `Virtual Mock Contest 3 bài`,
          idea: JSON.stringify(summaryData, null, 2)
        }
      }
    });

    if (error) throw error;
    const res = data?.result || {};
    if (resultBox) {
      resultBox.innerHTML = `
        <h4>✦ Nhận xét của AI Coach về buổi thi</h4>
        <p>${escapeHTML(res.summary || 'Đã phân tích chiến thuật thi đấu.')}</p>
        ${Array.isArray(res.root_causes) ? `<ul>${res.root_causes.map(c => `<li>${escapeHTML(c)}</li>`).join('')}</ul>` : ''}
      `;
    }
    showToast('Đã hoàn thành AI Post-Mortem!');
  } catch (e) {
    console.error(e);
    if (resultBox) {
      resultBox.innerHTML = `<p style="color:var(--danger)">Không thể kết nối AI Coach: ${escapeHTML(e.message || e)}</p>`;
    }
  } finally {
    btn?.removeAttribute('disabled');
    btn?.classList.remove('ai-loading');
  }
}

function saveVirtualContestToStorage() {
  if (!virtualContest) return;
  localStorage.setItem(VIRTUAL_CONTEST_KEY, JSON.stringify(virtualContest));
}

function restoreVirtualContestFromStorage() {
  try {
    const raw = localStorage.getItem(VIRTUAL_CONTEST_KEY);
    if (!raw) return;
    const saved = JSON.parse(raw);
    if (saved && saved.endsAt && !saved.isFinished) {
      virtualContest = saved;
      const remaining = Math.max(0, Math.floor((virtualContest.endsAt - Date.now()) / 1000));
      if (remaining <= 0) {
        localStorage.removeItem(VIRTUAL_CONTEST_KEY);
        virtualContest = null;
      } else {
        startContestTimer();
        updateMockButtonStatus();
      }
    }
  } catch (e) {
    console.warn("Could not restore virtual contest", e);
  }
}

function updateMockButtonStatus() {
  const btn = $("#startVirtualMockButton");
  if (!btn) return;
  if (virtualContest && !virtualContest.isFinished) {
    const remaining = Math.max(0, Math.floor((virtualContest.endsAt - Date.now()) / 1000));
    const m = Math.floor(remaining / 60);
    const s = remaining % 60;
    btn.textContent = `🏆 Đang thi Virtual Mock (${m}:${String(s).padStart(2, '0')})`;
    btn.classList.add('live-contest-active');
  } else {
    btn.textContent = `🏆 Bắt đầu Virtual Mock (Thi thử)`;
    btn.classList.remove('live-contest-active');
  }
}

// Wire Contest Events
$("#startVirtualMockButton")?.addEventListener('click', openVirtualContestDialog);
$("#rerollContestProblemsBtn")?.addEventListener('click', () => {
  const strategy = $("#contestProblemSetSelect")?.value || 'standard';
  previewContestProblems = getProposedContestProblems(strategy);
  renderContestSetupPreview();
});
$("#contestProblemSetSelect")?.addEventListener('change', () => {
  const strategy = $("#contestProblemSetSelect")?.value || 'standard';
  previewContestProblems = getProposedContestProblems(strategy);
  renderContestSetupPreview();
});
$("#launchContestBtn")?.addEventListener('click', launchVirtualContest);
$("#pauseResumeContestBtn")?.addEventListener('click', togglePauseResumeContest);
$("#finishContestEarlyBtn")?.addEventListener('click', () => finishVirtualContest(true));
$("#closeContestDialogBtn")?.addEventListener('click', () => $("#contestArenaDialog")?.close());
$("#closeContestSummaryBtn")?.addEventListener('click', () => $("#contestArenaDialog")?.close());
$("#saveContestToHistoryBtn")?.addEventListener('click', saveContestToHistory);
$("#aiPostMortemBtn")?.addEventListener('click', runAIPostMortem);

// Init on load
setupBookmarklet();
checkUrlImportParams();
restoreVirtualContestFromStorage();
