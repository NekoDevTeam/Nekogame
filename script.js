function search() {
    var searchInput = document.getElementById("searchInput").value;
    var resultDiv = document.getElementById("result");

    // ตรวจสอบว่าคำค้นหาเป็น "1089215873354563594" หรือไม่
    if (searchInput === "1089215873354563594") {
        resultDiv.innerHTML = "เปรียนหน้าใหม่";
        // ทำการเปรียนหน้าใหม่, ตามคำขอที่ต้องการ
    } else {
        resultDiv.innerHTML = "404 Not Found";
        // แสดงผลลัพธ์เป็น 404 Not Found
    }
}
