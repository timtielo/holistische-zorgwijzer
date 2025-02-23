import { supabase } from './supabase';

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function submitContactForm(formData: ContactFormData) {
  // Validate input
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    throw new Error('All fields are required');
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.email)) {
    throw new Error('Invalid email address');
  }

  try {
    const { data, error } = await supabase
      .from('contact_messages')
      .insert([{
        ...formData,
        status: 'new' // Explicitly set status
      }])
      .select();

    if (error) {
      console.error('Error submitting contact form:', error);
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
}