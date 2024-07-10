import React, { useEffect, useState, forwardRef } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormItem, FormLabel, FormControl, FormField } from '@/components/ui/form';
import { Toaster } from "@/components/ui/sonner"
import { toast } from "sonner"
import {config} from './config'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  message: z.string().min(1, 'Message is required'),
});

type ContactFormValues = z.infer<typeof schema>;

interface ContactFormProps {
  onOverlayClick: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const ContactForm = forwardRef<HTMLDivElement, ContactFormProps>(({ onOverlayClick }, ref) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: localStorage.getItem('contactForm_name') || '',
      email: localStorage.getItem('contactForm_email') || '',
      message: localStorage.getItem('contactForm_message') || '',
    },
  });

  const { handleSubmit, control, watch, reset } = form;

  const watchedFields = watch();



  useEffect(() => {
    // Preload the background image
    const img = new Image();
    img.src = "/images/bg-contact.jpg";
    img.onload = () => setImageLoaded(true);

    // Initialize EmailJS
    emailjs.init(config.emailjs.publicKey);
  }, []);

  useEffect(() => {
    if (!isSubmitted) {
      localStorage.setItem('contactForm_name', watchedFields.name || '');
      localStorage.setItem('contactForm_email', watchedFields.email || '');
      localStorage.setItem('contactForm_message', watchedFields.message || '');
    }
  }, [watchedFields, isSubmitted]);

  const onSubmit = async (data: ContactFormValues) => {
    console.log('test',config.emailjs.publicKey)
    try {
      const result = await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
        }
      );

      console.log(result);
      toast.success(
        `Email sent successfully!`,
        {
          description: `Thank you, ${data.name}. I'll respond to ${data.email} soon.`,
          duration: 5000,
        }
      );
      setIsSubmitted(true);
      localStorage.removeItem('contactForm_name');
      localStorage.removeItem('contactForm_email');
      localStorage.removeItem('contactForm_message');

      reset({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error sending email:', error);
      toast.error('Failed to send email. Please try again later.');
    }
  };


  return (
    <div 
      ref={ref} 
      className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50"
      onClick={onOverlayClick}
    >
      <div 
        className={`w-full max-w-screen-sm bg-blue-200 p-8 border rounded-3xl ${imageLoaded ? 'bg-cover bg-center bg-no-repeat' : ''}`}
        style={imageLoaded ? { backgroundImage: 'url("/images/bg-contact.jpg")' } : {}}
        onClick={(e) => e.stopPropagation()}
      >
        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <h2 className="text-4xl font-bold text-white mb-8">Contact Me!</h2>
            <FormField
              name="name"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Name</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-transparent border-white text-white placeholder-white/50" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Email</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-transparent border-white text-white placeholder-white/50" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="message"
              control={control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white text-lg">Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} rows={4} className="bg-transparent border-white text-white placeholder-white/50" />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit" className="mt-6 bg-white text-indigo-600 hover:bg-indigo-100 w-full">Send</Button>
          </form>
        </Form>
      </div>
      <Toaster />
    </div>
  );
});

export default ContactForm;