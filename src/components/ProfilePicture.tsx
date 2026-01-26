import { useState, useRef, useEffect } from 'react';
import { User, Camera } from 'lucide-react';

const ProfilePicture = () => {
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-profile-pic');
    if (saved) {
      setProfilePic(saved);
    }
  }, []);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setProfilePic(base64);
        localStorage.setItem('portfolio-profile-pic', base64);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="relative group cursor-pointer" onClick={handleClick}>
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
      
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary/30 bg-secondary flex items-center justify-center transition-all group-hover:border-primary/60 group-hover:scale-105">
        {profilePic ? (
          <img
            src={profilePic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        ) : (
          <User size={18} className="text-muted-foreground" />
        )}
      </div>
      
      <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 rounded-full bg-primary flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
        <Camera size={10} className="text-primary-foreground" />
      </div>
    </div>
  );
};

export default ProfilePicture;
