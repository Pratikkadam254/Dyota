export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  projectDetails: string;
  date: string;
  time: string;
}

export type TimeSlot = 
  | '9:00 AM' 
  | '10:00 AM' 
  | '11:00 AM'
  | '1:00 PM' 
  | '2:00 PM' 
  | '3:00 PM' 
  | '4:00 PM'; 