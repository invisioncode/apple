
// Service has been disabled.
export const queryAppleSpecialist = async (query: string): Promise<string> => {
  console.warn("Gemini service is disabled. Query:", query);
  return "Chức năng tìm kiếm thông minh đang bảo trì.";
};
