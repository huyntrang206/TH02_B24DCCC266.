import { useState } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";

type WTTRResponse = {
  current_condition: Array<{
    temp_C: string;
    weatherDesc: Array<{ value: string }>;
  }>;
};

const WeatherApp: React.FC = () => {
  const [city, setCity] = useState<string>("");
  const [weather, setWeather] = useState<WTTRResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWeather = async () => {
    if (!city) {
      setError("Vui lòng nhập tên thành phố.");
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get<WTTRResponse>(`https://wttr.in/${encodeURIComponent(city)}?format=j1`);
      setWeather(res.data);
    } catch (err: any) {
      setError(err?.message || "Lỗi khi gọi API");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ứng dụng thời tiết</h2>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 12 }}>
        <input
          type="text"
          placeholder="Nhập tên thành phố..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={fetchWeather} disabled={loading}>
          {loading ? "Đang tải..." : "Xem"}
        </button>
      </div>

      {error && <div style={{ color: "red" }}>{error}</div>}

      {weather && (
        <InfoCard title={`Thời tiết ở ${city}`}>
          <p>
            <strong>Nhiệt độ:</strong> {weather.current_condition[0].temp_C}°C
          </p>
          <p>
            <strong>Tình trạng:</strong> {weather.current_condition[0].weatherDesc[0].value}
          </p>
        </InfoCard>
      )}
    </div>
  );
};

export default WeatherApp;