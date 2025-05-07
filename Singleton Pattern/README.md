# Singleton Pattern

## 🧠 What is the Singleton Pattern?

The **Singleton Pattern** is a design pattern that ensures a class has **only one instance** and provides a **global access point** to that instance. It's commonly used for things like database connections, logging services, or configuration managers — where only one shared resource should exist.

---

## ✅ Key Characteristics

- Only one instance of the class is created.
- That instance is reused across the application.
- Centralized control of a shared resource.
- Prevents instantiating the class multiple times.

---

## 📦 Use Cases

- Database connection managers
- Caching systems
- Logging services
- Configuration managers
- Access control systems

---

## 🔧 JavaScript Example

An alternative and fully working Singleton implementation is available in [`singleTonePattern.js`](./singleTonePattern.js).

```js
class DBConnection {
  constructor(url) {
    if (DBConnection._instance) {
      return DBConnection._instance;
    }

    this.url = url;
    DBConnection._instance = this;
  }

  connect() {
    console.log(`Connected to ${this.url}`);
  }

  disconnect() {
    console.log(`Disconnected from ${this.url}`);
  }

  static getInstance(url) {
    if (!DBConnection._instance) {
      DBConnection._instance = new DBConnection(url);
    }
    return DBConnection._instance;
  }
}

// Usage
const db1 = DBConnection.getInstance("mongodb://localhost:27017/mydb");
const db2 = DBConnection.getInstance("another-uri");

console.log(db1 === db2); // true — same instance
```
