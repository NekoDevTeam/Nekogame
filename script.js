function search() {
    var searchInput = document.getElementById("searchInput").value;
    var resultBox = document.getElementById("result");

    // ตรวจสอบว่าคำค้นหาเป็น "1089215873354563594" หรือไม่
    if (searchInput === "1089215873354563594") {
        // Concatenate multiple lines into a single string
        var resultText = "User ID: 1089215873354563594<br>";
        resultText += "Like play: Roblox<br>";
        resultText += "Like Food: Candy or cola";

        // Set the concatenated string as HTML content
        resultBox.innerHTML = resultText;
    } else {
        resultBox.innerHTML = "404 Not Found";
    }

    // แสดงกล่องดำ
    resultBox.style.display = "block";
}
