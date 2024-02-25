function search() {
    var searchInput = document.getElementById("searchInput").value;
    var resultBox = document.getElementById("result");

    // ตรวจสอบว่าคำค้นหาเป็น "1089215873354563594" หรือไม่
    if (searchInput === "1089215873354563594") {
        resultBox.innerHTML = "user id : 1089215873354563594";
         resultBox.innerHTML = "Like play: Roblox";
        resultBox.innerHTML = "Like Food: Candy or cola";
    } else {
        resultBox.innerHTML = "404 Not Found";
    }

    // แสดงกล่องดำ
    resultBox.style.display = "block";
}
