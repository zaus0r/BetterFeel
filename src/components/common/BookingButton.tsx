import React from 'react';
import { Calendar } from 'lucide-react';

const BookingButton = () => {
  return (
    <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[#064e3b] hover:bg-[#043927] transition-colors duration-200 shadow-sm">
      <Calendar className="mr-2 h-5 w-5" />
      Boka tid
    </button>
  );
};

export default BookingButton;
