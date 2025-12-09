import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || ''; 
    // In a real scenario, we handle the missing key gracefully or assume it's there as per prompt instructions.
    // If empty, the call will fail, which we catch.
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const queryAppleSpecialist = async (query: string): Promise<string> => {
  try {
    const client = getClient();
    const model = 'gemini-2.5-flash';
    
    const systemInstruction = `
      Bạn là một chuyên gia tư vấn sản phẩm của Apple (Apple Specialist) thân thiện, am hiểu và chuyên nghiệp.
      Nhiệm vụ của bạn là giúp khách hàng Việt Nam tìm hiểu về các sản phẩm Apple (iPhone, iPad, Mac, Watch, v.v.).
      
      Hướng dẫn phong cách:
      1. Trả lời bằng Tiếng Việt.
      2. Ngắn gọn, súc tích, đi thẳng vào vấn đề (tối đa 3-4 câu nếu có thể).
      3. Giọng văn lịch sự, tinh tế, đúng chất Apple.
      4. Nếu người dùng hỏi về giá, hãy đưa ra mức giá ước lượng tại thị trường Việt Nam (VNĐ).
      5. Nhấn mạnh vào lợi ích người dùng và hệ sinh thái Apple.
      
      Đừng bịa đặt thông tin kỹ thuật sai lệch.
    `;

    const response = await client.models.generateContent({
      model,
      contents: query,
      config: {
        systemInstruction,
      },
    });

    return response.text || "Xin lỗi, hiện tại tôi không thể lấy thông tin. Vui lòng thử lại sau.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Đang gặp sự cố kết nối. Vui lòng kiểm tra lại đường truyền hoặc thử lại sau.";
  }
};