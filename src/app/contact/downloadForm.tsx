'use client';
import { useState, useEffect, ChangeEvent, FormEvent } from 'react';

interface FormData {
  username: string;
  email: string;
  city: string;
}

interface Errors {
  username?: string;
  email?: string;
  city?: string;
}

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MyComponent: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    city: '',
  });
  const [canDownload, setCanDownload] = useState<boolean>(false);
  const [errors, setErrors] = useState<Errors>({});

  useEffect(() => {
    validateForm();
  }, [formData]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let newErrors: Errors = {};
    if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters.';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    } else if (formData.email.length < 3) {
      newErrors.email = 'Email must be at least 3 characters.';
    }
    if (formData.city.length < 3) {
      newErrors.city = 'City must be at least 3 characters.';
    }

    setErrors(newErrors);
    setCanDownload(Object.keys(newErrors).length === 0);
  };

  const handleDownload = (e: FormEvent) => {
    e.preventDefault();
    validateForm();
    if (canDownload) {
      const link = document.createElement('a');
      link.href = '/M.R_saida_Taj.pdf';
      link.download = 'SaidaTajM.R_resume.pdf';
      link.click();
      link.remove();
      onClose();
    }
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'download', {
        event_category: 'Resume',
        event_label: 'User Resume Download',
        download_type: 'resume',
        username: formData.username,
        email: formData.email,
        city: formData.city,
      });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-[#525B44] p-8 rounded-lg shadow-md w-full max-w-md mx-4 relative text-white">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          Download Resume
        </h2>
        <button
          className="absolute top-2 right-2 text-white hover:text-white font-bold text-xl"
          onClick={onClose}
        >
          X
        </button>
        <form onSubmit={handleDownload}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-white font-medium mb-2"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className={`border rounded-md w-full p-2 text-black ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.username && (
              <p className="text-[#B2C9AD] text-sm mt-1">{errors.username}</p>
            )}
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`border rounded-md w-full p-2 text-black ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.email && (
              <p className="text-[#B2C9AD] text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-6">
            <label htmlFor="city" className="block text-white font-medium mb-2">
              City
            </label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className={`border rounded-md w-full p-2 text-black ${
                errors.city ? 'border-red-500' : 'border-gray-300'
              }`}
            />
            {errors.city && (
              <p className="text-[#B2C9AD] text-sm mt-1">{errors.city}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={!canDownload}
            className={`bg-[#66785F] hover:bg-[#91AC8F] cursor-pointer text-white font-bold py-2 px-4 rounded w-full `}
          >
            Download
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyComponent;
