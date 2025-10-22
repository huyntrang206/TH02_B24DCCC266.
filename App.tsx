import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WeatherApp from "./WeatherApp";
import StudentList from "./StudentList";
import NewsApp from "./NewsApp";
import StudentDetail from "./StudentDetail";

function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          backgroundColor: "#f2f2f2",
          minHeight: "100vh",
          margin: 0,
          padding: 0,
        }}
      >
        {/* THANH MENU */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            backgroundColor: "#1976d2",
            padding: "12px 24px",
          }}
        >
          <Link
            to="/trangchu"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Trang chủ
          </Link>
          <Link
            to="/bai1"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Bài 1
          </Link>
          <Link
            to="/bai2"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Bài 2
          </Link>
          <Link
            to="/bai3"
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight: 600,
              fontSize: 16,
            }}
          >
            Bài 3
          </Link>
        </nav>

        {/* NỘI DUNG */}
        <main
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "40px 16px",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              borderRadius: 8,
              padding: 24,
              maxWidth: 800,
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
              lineHeight: 1.6,
            }}
          >
            <Routes>
              {/* TRANG CHỦ */}
              <Route
                path="/trangchu"
                element={
                  <div>
                    <h2 style={{ textAlign: "center", marginBottom: 20 }}>
                      Bài thực hành 02:
                    </h2>
                    <ul>
                      <li>
                        <strong>Mục tiêu:</strong> Áp dụng các kiến thức liên
                        quan đến React trong lập trình web: Props, State,
                        Lifecycle, Axios, Typescript, React-Router
                      </li>
                      <li>
                        <strong>Thời gian làm bài:</strong> 08h15 đến 11h45,
                        sinh viên tạo repo trên Github, đặt tên là{" "}
                        <b>TH02_Mã sinh viên</b>, ví dụ:{" "}
                        <code>TH02_B24DCC014</code>
                      </li>
                      <li>
                        <strong>Bài 1: Ứng dụng thời tiết</strong>
                        <ul>
                          <li>
                            Sinh viên sử dụng axios để lấy dữ liệu qua địa chỉ{" "}
                            <code>https://wttr.in/tenThanhPho?format=j1</code>,
                            trong đó <b>tenThanhPho</b> là tên thành phố do người
                            dùng nhập vào
                          </li>
                          <li>
                            Hiển thị kết quả là thông tin thời tiết của thành phố
                            (Nhiệt độ, tình trạng thời tiết)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Bài 2: Ứng dụng danh sách sinh viên</strong>
                        <ul>
                          <li>
                            Sinh viên sử dụng axios để lấy dữ liệu danh sách sinh
                            viên qua địa chỉ{" "}
                            <code>
                              https://jsonplaceholder.typicode.com/users
                            </code>
                          </li>
                          <li>
                            Hiển thị danh sách sinh viên gồm các thông tin (Họ
                            tên, email)
                          </li>
                          <li>
                            Khi click vào 1 sinh viên thì hiển thị chi tiết (dùng
                            React Router)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Bài 3: Ứng dụng xem tin tức</strong>
                        <ul>
                          <li>
                            Sinh viên sử dụng axios để lấy dữ liệu tin tức qua
                            địa chỉ{" "}
                            <code>
                              https://api.spaceflightnewsapi.net/v4/articles?limit=10
                            </code>
                          </li>
                          <li>
                            Hiển thị danh sách tin tức gồm các thông tin (Ảnh, tiêu
                            đề, mô tả, link tin gốc, ngày đăng)
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong>Yêu cầu:</strong> Toàn bộ bài sử dụng Typescript,
                        bắt buộc sử dụng các thư viện: axios, react-router-dom, cả
                        3 bài trong cùng 1 project, mỗi bài là 1 component.
                      </li>
                    </ul>
                  </div>
                }
              />

              {/* BÀI 1 */}
              <Route path="/bai1" element={<WeatherApp />} />

              {/* BÀI 2 */}
              <Route path="/bai2" element={<StudentList />} />
              <Route path="/bai2/:id" element={<StudentDetail />} />

              {/* BÀI 3 */}
              <Route path="/bai3" element={<NewsApp />} />

              {/* Mặc định chuyển hướng về trang chủ */}
              <Route path="*" element={<WeatherApp />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
