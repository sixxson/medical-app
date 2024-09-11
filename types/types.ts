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
  dob?: string;
  gender: string;
  profilePicture?: string;
  bio: string;
  medicalLicense: string;
  medicalLicenseExpiration?: string;
};
