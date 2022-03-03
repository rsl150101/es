// Map 은 Set 과 유사하지만 Set 과 달리 key 와 value로 이루어진다

const map = new Map();

map.set("age", 20);
// > Map(1) {"age" => 18}

map.has("age");
// > true

map.get("age");
// 18

// Map은 array.map 과는 다르다