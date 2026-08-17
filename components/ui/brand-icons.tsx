import * as React from 'react';

/**
 * Brand & Contact Icons
 * - WhatsApp: Iconic WhatsApp emblem (ViconsDesign - Flaticon style)
 * - Google Meet: Multi-color Google Meet camera emblem (Enamo Studios - Flaticon style)
 * - Phone Call: Vibrant telephone handset (Ilham Fitrotul Hayat - Flaticon style)
 */

export function WhatsAppIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="WhatsApp"
    >
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M12 3.5C7.31 3.5 3.5 7.31 3.5 12C3.5 13.58 3.93 15.06 4.69 16.33L3.75 20.25L7.78 19.33C9.02 20.04 10.46 20.5 12 20.5C16.69 20.5 20.5 16.69 20.5 12C20.5 7.31 16.69 3.5 12 3.5Z"
        fill="#25D366"
      />
      <path
        d="M16.48 14.12C16.24 14 15.05 13.41 14.83 13.33C14.61 13.25 14.45 13.21 14.29 13.45C14.13 13.69 13.67 14.22 13.53 14.38C13.39 14.54 13.25 14.56 13.01 14.44C12.77 14.32 11.99 14.07 11.06 13.24C10.34 12.59 9.85 11.79 9.71 11.55C9.57 11.31 9.69 11.18 9.81 11.06C9.92 10.95 10.05 10.78 10.17 10.64C10.29 10.5 10.33 10.4 10.41 10.24C10.49 10.08 10.45 9.94 10.39 9.82C10.33 9.7 9.85 8.5 9.65 8.01C9.45 7.54 9.25 7.6 9.1 7.6C8.96 7.59 8.8 7.59 8.64 7.59C8.48 7.59 8.22 7.65 8 7.89C7.78 8.13 7.17 8.7 7.17 9.87C7.17 11.04 8.02 12.17 8.14 12.33C8.26 12.49 9.81 14.89 12.19 15.92C12.76 16.16 13.2 16.31 13.55 16.42C14.12 16.6 14.64 16.57 15.05 16.51C15.51 16.44 16.46 15.94 16.66 15.38C16.86 14.82 16.86 14.34 16.8 14.24C16.74 14.14 16.64 14.08 16.48 14.12Z"
        fill="white"
      />
    </svg>
  );
}

export function GoogleMeetIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Google Meet"
    >
      <rect width="24" height="24" rx="5" fill="#F8FAFC" />
      {/* Google Meet Multi-Color Camera Emblem */}
      <path d="M14.5 10.8V7.5C14.5 6.67 13.83 6 13 6H4.5C3.67 6 3 6.67 3 7.5V16.5C3 17.33 3.67 18 4.5 18H13C13.83 18 14.5 17.33 14.5 16.5V13.2L19.5 16.8C20.1 17.25 21 16.8 21 16V8C21 7.2 20.1 6.75 19.5 7.2L14.5 10.8Z" fill="#00AC47" />
      <path d="M13 6H4.5C3.67 6 3 6.67 3 7.5V12H14.5V7.5C14.5 6.67 13.83 6 13 6Z" fill="#2684FC" />
      <path d="M14.5 12H3V16.5C3 17.33 3.67 18 4.5 18H8.5V12H14.5Z" fill="#00832D" />
      <path d="M8.5 12H14.5V16.5C14.5 17.33 13.83 18 13 18H8.5V12Z" fill="#FFBA00" />
      <path d="M21 8L14.5 12H21V8Z" fill="#EA4335" />
    </svg>
  );
}

export function PhoneCallIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Phone Call"
    >
      <rect width="24" height="24" rx="5" fill="#2563EB" />
      <path
        d="M7.12 9.69C8.41 12.23 10.49 14.31 13.03 15.61L15 13.64C15.25 13.39 15.61 13.31 15.92 13.42C16.93 13.75 18.01 13.93 19.12 13.93C19.61 13.93 20 14.33 20 14.82V17.95C20 18.44 19.61 18.84 19.12 18.84C10.77 18.84 4 12.07 4 3.72C4 3.23 4.4 2.83 4.89 2.83H8.02C8.51 2.83 8.91 3.22 8.91 3.72C8.91 4.83 9.09 5.91 9.42 6.92C9.52 7.23 9.45 7.58 9.2 7.83L7.12 9.69Z"
        fill="white"
      />
    </svg>
  );
}
