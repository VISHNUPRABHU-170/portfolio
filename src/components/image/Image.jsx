export default function Image({imagePath, alt, className}) { 
  return <img src={imagePath} alt={alt} className={className} />;
}
