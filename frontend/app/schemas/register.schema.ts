import { z } from 'zod';

export const schemaRegistration = z.object({
    /**
     * Validates the email field.
     * - Must be a string.
     * - Must be a valid email address.
     */
    email: z.string().email({ message: 'Invalid email address' }),

    /**
     * Validates the password field.
     * - Must be a string.
     * - Must be at least 8 characters long.
     */
    password: z
        .string()
        .min(8, { message: 'Password must be at least 8 characters long' }),

    /**
     * Validates the first name field.
     * - Must be a string.
     * - Must be at least 2 characters long.
     * - Must contain only letters.
     * - Must not contain any special characters or numbers.
     * - Must not contain any whitespace.
     */
    firstName: z
        .string()
        .min(2, { message: 'First name must be at least 2 characters long' })
        .regex(/^[a-zA-Z]+$/, { message: 'First name must contain only letters' })
        .regex(/^[^\s]+$/, { message: 'First name must not contain any whitespace' }),
    
    /**
     * Validates the last name field.
     * - Must be a string.
     * - Must be at least 2 characters long.
     * - Must contain only letters.
     * - Must not contain any special characters or numbers.
     * - Must not contain any whitespace.
     */
    lastName: z
        .string()
        .min(2, { message: 'Last name must be at least 2 characters long' })
        .regex(/^[a-zA-Z]+$/, { message: 'Last name must contain only letters' })
        .regex(/^[^\s]+$/, { message: 'Last name must not contain any whitespace' }),
    
    /**
     * Validates the phone field.
     * - Must be a string.
     * - Must be a valid phone number.
     * - Must contain only numbers and hyphens.
     */
    phone: z
        .string()
        .regex(/^[0-9-]+$/, { message: 'Phone number must contain only numbers and hyphens' })

});