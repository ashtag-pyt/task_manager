import React from 'react';

interface LinkTextProps {
  name: string;
  isOpen: boolean;
  children?: React.ReactNode; // Allow children to be passed
}

const LinkText: React.FC<LinkTextProps> = ({ name, isOpen, children }) => {
  return (
    <div className="flex items-center gap-2">
      {children}
      {isOpen && (
        <p className="text-inherit font-poppins overflow-clip whitespace-nowrap tracking-wide">
          {name}
        </p>
      )}
    </div>
  );
};

export default LinkText;

