module.exports = mongoose => {

  const urlSchema = new mongoose.Schema({
    longUrl: {
      type: String,
      required: true,
    },
    shortUrl: {
      type: String,
      unique: true,
    },
    updatedAt: String,
  });
  const url = mongoose.model("Urldb", urlSchema);
  return url
}