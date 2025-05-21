'use client';
export default function UploadPDF() {
  const handleUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const formData = new FormData();
    formData.append('file', file!);
    
    await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    });
  };

  return <input type="file" accept=".pdf" onChange={handleUpload} />;
}