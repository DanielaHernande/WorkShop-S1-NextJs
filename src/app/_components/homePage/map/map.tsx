export default function Map() {
  return (
    <iframe
    className="p-8 mt-8"
      width="1570"
      height="450"
      style={{ border: 0 }}
      loading="lazy"
      allowFullScreen
      src="https://www.openstreetmap.org/export/embed.html?bbox=-122.3492%2C47.6205%2C-122.3481%2C47.6216&layer=mapnik"
    ></iframe>
  );
}
