import { useEffect, useState } from "react";
import axios from "axios";
import InfoCard from "./InfoCard";

interface Article {
  id: number;
  title: string;
  summary: string;
  image_url: string;
  url: string;
  published_at: string;
}

const NewsApp: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://api.spaceflightnewsapi.net/v4/articles?limit=10")
      .then((res) => setArticles(res.data.results))
      .catch((err) => setError(err?.message || "Lỗi khi tải tin"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Đang tải tin tức...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div>
      <h2>Tin tức vũ trụ</h2>
      {articles.map((a) => (
        <InfoCard key={a.id} title={a.title}>
          <div style={{ display: "flex", gap: 12 }}>
            <img src={a.image_url} alt={a.title} width={200} />
            <div>
              <p>{a.summary}</p>
              <p>
                <strong>Ngày đăng:</strong> {new Date(a.published_at).toLocaleDateString()}
              </p>
              <a href={a.url} target="_blank" rel="noreferrer">Xem chi tiết</a>
            </div>
          </div>
        </InfoCard>
      ))}
    </div>
  );
};

export default NewsApp;
