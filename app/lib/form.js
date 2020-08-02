export function getErrorMessage(error) {
  if (error.graphQLErrors) {
    for (const graphQLError of error.graphQLErrors) {
      if (
        graphQLError.extensions &&
        graphQLError.extensions.code === "BAD_USER_INPUT"
      ) {
        return graphQLError.message;
      }
    }
  }
  switch (error.message) {
    case `ketQua validation failed: ketQua: Cast to Array failed for value "Bạn đã đạt đến giới hạn truy cập." at path "ketQua"`:
      return `Bạn không đủ lượt truy cập, liên hệ để nhận thêm`;
    case `Response not successful: Received status code 400`:
      return `Dữ liệu nhập vào không hợp lệ.`;
    default:
      return error.message;
  }
}
