import { UserRole } from "@prisma/client";

export type ServicesProps = {
  title: string;
  image: string;
  slug: string;
};

export type RegisterInputProps = {
  fullName: string;
  phone: string;
  email: string;
  password: string;
  role: any;
  plan: any;
};

export type LoginInputProps = {
  email: string;
  password: string;
};

export type BioDataFormProps = {
  firstName: string;
  lastName: string;
  middleName?: string;
  dob?: Date;
  gender: string;
  profilePicture?: string;
  bio: string;
  medicalLicense: string;
  medicalLicenseExpiration?: Date;
  yearsOfExperience: string;
  page: string;
};

export type ContactInfoFormProps = {
  phone: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  page: string;
};

export type StepFormProps = {
  page: string;
  title: string;
  description: string;
};