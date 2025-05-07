class DBConnection {
  constructor(url) {
    if (!DBConnection.instance) {
      this.url = url;
      DBConnection.instance = this;
    }
  }

  connect() {
    console.log(`Connected to the database at ${this.url}`);
  }
  disconnect() {
    console.log(`Disconnected from the database at ${this.url}`);
  }
}

const db = Object.freeze(new DBConnection("mongodb://localhost:27017/mydb"));

export default db;
