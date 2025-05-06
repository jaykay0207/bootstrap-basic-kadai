const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1; // getMonth()は0から始まるため、+1が必要です
const day = today.getDate();

console.log(`${year}年${month}月${day}日`);