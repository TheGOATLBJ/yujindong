import { useMutation } from "@tanstack/react-query";

type AnalyzeResponse = {
  score: number;
  recommendation: string;
};

const analyzeText = async (text: string): Promise<AnalyzeResponse> => {
  const res = await fetch("http://localhost:8080/api/analyze", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });

  if (!res.ok) {
    throw new Error("서버 오류");
  }

  return res.json();
};

export const useAnalyzeMutation = (
  onSuccessCallback: (data: AnalyzeResponse) => void
) => {
  return useMutation({
    mutationFn: analyzeText,
    onSuccess: (data) => {
      console.log("✅ 분석 결과", data);
      onSuccessCallback(data);
    },
    onError: (err) => {
      console.error("요청 실패:", err);
    },
  });
};
