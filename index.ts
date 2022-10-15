function startTime() {
  // Lấy Object ngày hiện tại
  const today = new Date();

  // Giờ, phút, giây hiện tại
  let hours = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();

  // Chuyển đổi sang dạng 01, 02, 03
  let hoursString = checkTime(hours);
  let minuteString = checkTime(minute);
  let secondString = checkTime(second)
  // Ghi ra trình duyệt
  console.log(hoursString + ":" + minuteString + ":" + secondString)

  // Dùng hàm setTimeout để thiết lập gọi lại 1 giây / lần
  const timeout = setTimeout(function () {
    startTime();
  }, 1000);
}

function checkTime(time: number) {
  let value: string;
  if (time < 10) {
    value = "0" + time;
  } else {
    value = time.toString();
  }
  return value;
}
startTime();
