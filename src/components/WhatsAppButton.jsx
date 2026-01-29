function WhatsAppButton({ phone, message, children }) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
    >
      {children}
    </a>
  );
}

export default WhatsAppButton;
